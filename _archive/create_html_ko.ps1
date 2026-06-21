$blogRoot = "C:\Users\fireh\WorkBuddy\20260326144402\tmg-website"
$slug = "china-big-tech-ai-monetization-2026"

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

$tpl = [System.IO.File]::ReadAllText("$blogRoot\ko\blog\deepseek-v4-price-cut-geo.html", [System.Text.Encoding]::UTF8)
$h = $tpl
$h = [regex]::Replace($h, '<title>[^<]+</title>', "<title>중국 빅테크 AI 수익화 | TMG</title>")
$h = [regex]::Replace($h, 'name="description" content="[^"]*"', "name=""description"" content=""중국 인터넷 대기업의 AI 투자가 광고 수익으로. WeChat 검색 광고 60%25 성장.""")
$h = [regex]::Replace($h, 'deepseek-v4-price-cut-geo', $slug)
$h = [regex]::Replace($h, 'class="article-category">[^<]+<', "class=""article-category"">AI / AdTech<")
$h = [regex]::Replace($h, 'class="article-date">[^<]+<', "class=""article-date"">2026년 6월 17일<")
$h = [regex]::Replace($h, '(?s)<h1 class="article-hero__title">\s*<span>.*?</h1>', "<h1 class=""article-hero__title"">`n        <span>중국 빅테크</span> AI 수익화: 누가 먼저<span>열매를 거두나</span>`n      </h1>")

$koBody = ConvertTo-ArticleHtml -md $obsKO
$artStart = $h.IndexOf('<article')
$artEnd = $h.IndexOf('</article>') + '</article>'.Length
$h = $h.Substring(0, $artStart) + "<article class=""article-content reveal"">`n$koBody`n      </article>" + $h.Substring($artEnd)

$tocKO = @"
<li><a href="#the-big-spend-and-the-payoff" class="toc__link">막대한 투자와 그 보상</a></li>
<li><a href="#how-ai-is-making-giants-richer" class="toc__link">AI가 대기업을 부유하게 만드는 구조</a></li>
<li><a href="#what-this-means-for-brands" class="toc__link">브랜드에 의미하는 것</a></li>
<li><a href="#how-tmg-can-help" class="toc__link">TMG 지원 내용</a></li>
"@
$h = [regex]::Replace($h, '(?s)<ul class="toc__list">.*?</ul>', "<ul class=""toc__list"">`n$tocKO`n          </ul>")

$h = [regex]::Replace($h, '(?s)class="sidebar-cta">.*?</aside>', "class=""sidebar-cta"">`n          <p>중국의 AI 광고 혁명은 지금 일어나고 있습니다. 귀하의 브랜드는 준비되었나요?</p>`n          <a href=""/contact/"" class=""btn btn--primary"">전략 상담하기</a>`n        </div>`n      </aside>")

[System.IO.File]::WriteAllText("$blogRoot\ko\blog\$slug.html", $h, [System.Text.Encoding]::UTF8)
Write-Output "KO HTML created: $($h.Length) chars"