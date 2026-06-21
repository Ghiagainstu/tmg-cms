$blogRoot = "C:\Users\fireh\WorkBuddy\20260326144402\tmg-website"
$slug = "tencent-ad-revenue-ai-deep-dive-2026"

$obsEN = [System.IO.File]::ReadAllText("D:\WorkBuddy\Obsidian\TMG-Blog\Tencent Ad Revenue AI Deep Dive 2026\EN.md", [System.Text.Encoding]::UTF8)
$obsEN = [regex]::Replace($obsEN, '(?s)^---.*?---\s*', '')

function ConvertTo-ArticleHtml([string]$md) {
    $lines = $md -split "`n"
    $html = [System.Collections.ArrayList]::new()
    foreach ($line in $lines) {
        $t = $line.Trim()
        if ($t -eq '') { continue }
        if ($t -match '^## (.+)$') {
            $id = [regex]::Replace($matches[1], '[^a-zA-Z0-9\s-]', '')
            $id = [regex]::Replace($id, '\s+', '-').ToLower()
            [void]$html.Add("<h2 id=""$id"">$($matches[1])</h2>")
            continue
        }
        if ($t -match '^### (.+)$') { [void]$html.Add("<h3>$($matches[1])</h3>"); continue }
        if ($t -match '^\*(.+)\*$') { [void]$html.Add("<p class=""article-byline""><em>$($matches[1])</em></p>"); continue }
        if ($t -match '^- \*\*(.+?)\*\*:?\s*(.*)$') { [void]$html.Add("<p>&bull; <strong>$($matches[1])</strong>: $($matches[2])</p>"); continue }
        if ($t -match '^- (.+)$') { [void]$html.Add("<p>&bull; $($matches[1])</p>"); continue }
        if ($t -match '^\|') { continue }
        $p = [regex]::Replace($t, '\*\*(.+?)\*\*', '<strong>$1</strong>')
        $p = [regex]::Replace($p, '\*(.+?)\*', '<em>$1</em>')
        $p = [regex]::Replace($p, '\[([^\]]+)\]\(([^\)]+)\)', '<a href="$2">$1</a>')
        [void]$html.Add("<p>$p</p>")
    }
    return ($html -join "`n")
}

$tpl = [System.IO.File]::ReadAllText("$blogRoot\blog\deepseek-v4-price-cut-geo.html", [System.Text.Encoding]::UTF8)
$h = $tpl
$h = [regex]::Replace($h, '<title>[^<]+</title>', "<title>Tencent Ad Revenue: 10 AI-Powered Growth Signals | TMG</title>")
$h = [regex]::Replace($h, 'name="description" content="[^"]*"', "name=""description"" content=""Tencent ad revenue grew 20%25 YoY. AI CTR up 15-22%25. WeChat search ads +60%25. Channels ads +50%25. The next frontier: ads inside AI products."")
$h = [regex]::Replace($h, 'deepseek-v4-price-cut-geo', $slug)
$h = [regex]::Replace($h, 'class="article-category">[^<]+<', "class=""article-category"">Tencent / AdTech<")
$h = [regex]::Replace($h, 'class="article-date">[^<]+<', "class=""article-date"">June 17, 2026<")
$h = [regex]::Replace($h, '(?s)<h1 class="article-hero__title">\s*<span>.*?</h1>', "<h1 class=""article-hero__title"">`n        <span>Tencent</span> Ad Revenue: 10 AI-Powered <span>Growth Signals</span>`n      </h1>")
$h = [regex]::Replace($h, '(?s)class="article-hero__intro">\s*<p>.*?</p>', "class=""article-hero__intro"">`n        <p>Tencent's Q2 earnings reveal a powerful truth: AI is a profit engine for advertising. 20%25 ad revenue growth, 15-22%25 AI CTR improvement, and WeChat Channels at 35%25 of total ad revenue with massive headroom.</p>")

$enBody = ConvertTo-ArticleHtml -md $obsEN
$artStart = $h.IndexOf('<article')
$artEnd = $h.IndexOf('</article>') + '</article>'.Length
$h = $h.Substring(0, $artStart) + "<article class=""article-content reveal"">`n$enBody`n      </article>" + $h.Substring($artEnd)

$tocEN = @"
<li><a href="#1-20-25-ad-revenue-growth" class="toc__link">20%25 Ad Revenue Growth</a></li>
<li><a href="#2-ai-is-directly-boosting-ad-performance" class="toc__link">AI Boosting Ad Performance</a></li>
<li><a href="#4-wechat-channels-ads" class="toc__link">Channels Ads: 35%25 and Climbing</a></li>
<li><a href="#6-wechat-search-ads" class="toc__link">WeChat Search: +60%25</a></li>
<li><a href="#10-the-next-frontier" class="toc__link">Next Frontier: AI Product Ads</a></li>
"@
$h = [regex]::Replace($h, '(?s)<ul class="toc__list">.*?</ul>', "<ul class=""toc__list"">`n$tocEN`n          </ul>")

$h = [regex]::Replace($h, '(?s)class="sidebar-cta">.*?</aside>', "class=""sidebar-cta"">`n          <p>Tencent's ad engine is entering a new AI-powered golden age. Is your brand ready?</p>`n          <a href=""/contact/"" class=""btn btn--primary"">Build Your Strategy</a>`n        </div>`n      </aside>")

[System.IO.File]::WriteAllText("$blogRoot\blog\$slug.html", $h, [System.Text.Encoding]::UTF8)
Write-Output "Art2 EN HTML created: $($h.Length) chars"