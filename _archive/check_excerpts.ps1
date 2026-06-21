$indexPath = "c:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ko\blog\index.html"
$html = Get-Content -Path $indexPath -Raw
$cardPattern = '<a\s+href="(?<href>[^"]*?)"\s+class="post-card"[^>]*>(?<content>.*?)</a>'
$cards = [regex]::Matches($html, $cardPattern, 'Singleline')
Write-Host "Found $($cards.Count) cards"
foreach ($card in $cards) {
    $href = $card.Groups['href'].Value
    $content = $card.Groups['content'].Value
    $excerptMatch = [regex]::Match($content, '<p\s+class="post-card__excerpt">(?<excerpt>.*?)</p>', 'Singleline')
    if (-not $excerptMatch.Success) { continue }
    $excerpt = $excerptMatch.Groups['excerpt'].Value.Trim()
    Write-Host "HREF: $href"
    Write-Host "EXCERPT: $excerpt"
    Write-Host ""
}
