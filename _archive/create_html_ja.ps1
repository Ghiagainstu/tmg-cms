$blogRoot = "C:\Users\fireh\WorkBuddy\20260326144402\tmg-website"
$slug = "china-big-tech-ai-monetization-2026"

$obsJA = [System.IO.File]::ReadAllText("D:\WorkBuddy\Obsidian\TMG-Blog\China Big Tech AI Monetization 2026\JA.md", [System.Text.Encoding]::UTF8)
$obsJA = [regex]::Replace($obsJA, '(?s)^---.*?---\s*', '')

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

$tpl = [System.IO.File]::ReadAllText("$blogRoot\ja\blog\deepseek-v4-price-cut-geo.html", [System.Text.Encoding]::UTF8)
$h = $tpl
$h = [regex]::Replace($h, '<title>[^<]+</title>', "<title>中国テック大手のAIマネタイゼーション | TMG</title>")
$h = [regex]::Replace($h, 'name="description" content="[^"]*"', "name=""description"" content=""中国のインターネット大手がAI投資をビジネス収益に転化。WeChat検索広告60%25増、Channels 50%25増。""")
$h = [regex]::Replace($h, 'deepseek-v4-price-cut-geo', $slug)
$h = [regex]::Replace($h, 'class="article-category">[^<]+<', "class=""article-category"">AI / AdTech<")
$h = [regex]::Replace($h, 'class="article-date">[^<]+<', "class=""article-date"">2026年6月17日<")
$h = [regex]::Replace($h, '(?s)<h1 class="article-hero__title">\s*<span>.*?</h1>', "<h1 class=""article-hero__title"">`n        <span>中国テック大手</span>のAIマネタイゼーション：誰が最初に<span>実を摘むのか</span>`n      </h1>")

$jaBody = ConvertTo-ArticleHtml -md $obsJA
$artStart = $h.IndexOf('<article')
$artEnd = $h.IndexOf('</article>') + '</article>'.Length
$h = $h.Substring(0, $artStart) + "<article class=""article-content reveal"">`n$jaBody`n      </article>" + $h.Substring($artEnd)

$tocJA = @"
<li><a href="#the-big-spend-and-the-payoff" class="toc__link">巨額投資とその見返り</a></li>
<li><a href="#how-ai-is-making-giants-richer" class="toc__link">AIが大手をより豊かにする仕組み</a></li>
<li><a href="#what-this-means-for-brands" class="toc__link">ブランドへの意味</a></li>
<li><a href="#how-tmg-can-help" class="toc__link">TMGのサポート内容</a></li>
"@
$h = [regex]::Replace($h, '(?s)<ul class="toc__list">.*?</ul>', "<ul class=""toc__list"">`n$tocJA`n          </ul>")

$h = [regex]::Replace($h, '(?s)class="sidebar-cta">.*?</aside>', "class=""sidebar-cta"">`n          <p>中国のAI広告革命は今起きています。あなたのブランドは準備できていますか？</p>`n          <a href=""/contact/"" class=""btn btn--primary"">戦略を相談する</a>`n        </div>`n      </aside>")

[System.IO.File]::WriteAllText("$blogRoot\ja\blog\$slug.html", $h, [System.Text.Encoding]::UTF8)
Write-Output "JA HTML created: $($h.Length) chars"