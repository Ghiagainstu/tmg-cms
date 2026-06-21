$blogRoot = "C:\Users\fireh\WorkBuddy\20260326144402\tmg-website"

# Read Obsidian content
$obsEN = [System.IO.File]::ReadAllText("D:\WorkBuddy\Obsidian\TMG-Blog\China Big Tech AI Monetization 2026\EN.md", [System.Text.Encoding]::UTF8)
$obsEN = [regex]::Replace($obsEN, '(?s)^---.*?---\s*', '')
$obsJA = [System.IO.File]::ReadAllText("D:\WorkBuddy\Obsidian\TMG-Blog\China Big Tech AI Monetization 2026\JA.md", [System.Text.Encoding]::UTF8)
$obsJA = [regex]::Replace($obsJA, '(?s)^---.*?---\s*', '')
$obsKO = [System.IO.File]::ReadAllText("D:\WorkBuddy\Obsidian\TMG-Blog\China Big Tech AI Monetization 2026\KO.md", [System.Text.Encoding]::UTF8)
$obsKO = [regex]::Replace($obsKO, '(?s)^---.*?---\s*', '')

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

$slug = "china-big-tech-ai-monetization-2026"
$tpl = [System.IO.File]::ReadAllText("$blogRoot\blog\deepseek-v4-price-cut-geo.html", [System.Text.Encoding]::UTF8)

$titles = @{
    en = "China Big Tech AI Monetization: Who's Reaping the Harvest First | TMG"
}
$descs = @{
    en = "Tencent WeChat search ads grew 60%25 YoY, Channels ads 50%25. How China's internet giants turn AI investments into ad revenue."
}

# --- EN ---
$h = $tpl
$h = [regex]::Replace($h, '<title>[^<]+</title>', "<title>$($titles.en)</title>")
$h = [regex]::Replace($h, 'name="description" content="[^"]*"', "name=""description"" content=""$($descs.en)""")
$h = [regex]::Replace($h, 'deepseek-v4-price-cut-geo', $slug)
$h = [regex]::Replace($h, 'og:title" content="[^"]*"', "og:title"" content=""$($titles.en)""")
$h = [regex]::Replace($h, 'og:description" content="[^"]*"', "og:description"" content=""$($descs.en)""")
$h = [regex]::Replace($h, 'class="article-category">[^<]+<', "class=""article-category"">AI / AdTech<")
$h = [regex]::Replace($h, 'class="article-date">[^<]+<', "class=""article-date"">June 17, 2026<")

# Replace hero title
$h = [regex]::Replace($h, '(?s)<h1 class="article-hero__title">\s*<span>.*?</h1>', "<h1 class=""article-hero__title"">`n        <span>China Big Tech</span> AI Monetization: Who's Reaping the <span>Harvest First</span>`n      </h1>")

# Replace hero intro
$h = [regex]::Replace($h, '(?s)class="article-hero__intro">\s*<p>.*?</p>', "class=""article-hero__intro"">`n        <p>China's internet giants are turning massive AI investments into measurable business returns. Tencent's WeChat search ads grew 60%25 YoY, Channels ads 50%25, and AI-driven ad CTR improved 15-22%25.</p>")

# Replace article body
$artStart = $h.IndexOf('<article')
$artEnd = $h.IndexOf('</article>') + '</article>'.Length
$enBody = ConvertTo-ArticleHtml -md $obsEN
$h = $h.Substring(0, $artStart) + "<article class=""article-content reveal"">`n$enBody`n      </article>" + $h.Substring($artEnd)

# Replace TOC
$tocEN = @"
<li><a href="#the-big-spend-and-the-payoff" class="toc__link">The Big Spend and the Payoff</a></li>
<li><a href="#how-ai-is-making-giants-richer" class="toc__link">How AI Is Making Giants Richer</a></li>
<li><a href="#what-this-means-for-brands" class="toc__link">What This Means for Brands</a></li>
<li><a href="#how-tmg-can-help" class="toc__link">How TMG Can Help</a></li>
"@
$h = [regex]::Replace($h, '(?s)<ul class="toc__list">.*?</ul>', "<ul class=""toc__list"">`n$tocEN`n          </ul>")

# Replace sidebar CTA
$h = [regex]::Replace($h, '(?s)class="sidebar-cta">.*?</aside>', "class=""sidebar-cta"">`n          <p>China's AI ad revolution is happening now. Is your brand positioned to capture it?</p>`n          <a href=""/contact/"" class=""btn btn--primary"">Get Your Strategy</a>`n        </div>`n      </aside>")

[System.IO.File]::WriteAllText("$blogRoot\blog\$slug.html", $h, [System.Text.Encoding]::UTF8)
Write-Output "EN HTML created: $($h.Length) chars"