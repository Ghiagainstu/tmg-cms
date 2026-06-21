$indexPath = "c:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ko\blog\index.html"
$html = Get-Content -Path $indexPath -Raw
# Pattern to match a card: from <a href... class="post-card..."> to </a>
$cardPattern = '<a\s+href="(?<href>[^"]*?)"\s+class="post-card[^"]*"[^>]*>(?<content>.*?)</a>'
$cards = [regex]::Matches($html, $cardPattern, 'Singleline')
Write-Host "Found $($cards.Count) cards"
$issues = @()
foreach ($card in $cards) {
    $href = $card.Groups['href'].Value
    $content = $card.Groups['content'].Value
    $excerptMatch = [regex]::Match($content, '<p\s+class="post-card__excerpt">(?<excerpt>.*?)</p>', 'Singleline')
    if (-not $excerptMatch.Success) { continue }
    $excerpt = $excerptMatch.Groups['excerpt'].Value.Trim()
    # Check if excerpt is English dominant
    $alpha = $excerpt -replace '[^\p{L}]', ''
    $asciiCount = ($alpha.ToCharArray() | Where-Object { [int]$_ -lt 128 } | Measure-Object).Count
    $totalAlpha = $alpha.Length
    if ($totalAlpha -eq 0) { continue }
    $ratio = $asciiCount / $totalAlpha
    if ($ratio -gt 0.5 -and $excerpt.Length -gt 10) {
        $issues += [PSCustomObject]@{
            Href = $href
            Excerpt = $excerpt
            Ratio = $ratio
        }
    }
}
if ($issues.Count -eq 0) {
    Write-Host "No English-dominant excerpts found."
} else {
    Write-Host "Found $($issues.Count) English-dominant excerpts:"
    foreach ($issue in $issues) {
        Write-Host "  $($issue.Href)"
        Write-Host "    $($issue.Excerpt)"
        Write-Host "    Ratio: $($issue.Ratio)"
    }
}
