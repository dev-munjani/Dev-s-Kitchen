Add-Type -AssemblyName System.Drawing

$dir = Split-Path -Parent $MyInvocation.MyCommand.Path
$files = Get-ChildItem -Path $dir -Filter "*.jpg"

foreach ($file in $files) {
    if ($file.Name -match "_opt") {
        continue
    }
    
    # Only compress files larger than 250KB
    if ($file.Length -lt 250000) {
        continue
    }

    $src = $file.FullName
    $tempDest = $src + ".tmp.jpg"
    
    $img = [System.Drawing.Image]::FromFile($src)
    $origW = $img.Width
    $origH = $img.Height
    Write-Host "Processing $($file.Name) ($origW x $origH) - $([Math]::Round($file.Length/1KB,0))KB"
    
    $maxW = 800
    $maxH = 800
    
    $ratio = [Math]::Min($maxW / $origW, $maxH / $origH)
    if ($ratio -ge 1) { $ratio = 1 }
    $newW = [int]($origW * $ratio)
    $newH = [int]($origH * $ratio)
    
    $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($img, 0, 0, $newW, $newH)
    $g.Dispose()
    $img.Dispose()
    
    $enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $params = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]75)
    
    $bmp.Save($tempDest, $enc, $params)
    $bmp.Dispose()
    
    # Overwrite original
    Remove-Item -Force $src
    Rename-Item -Path $tempDest -NewName $file.Name -Force
    
    $newSize = (Get-Item $src).Length
    Write-Host "  -> Saved $([Math]::Round($newSize/1KB,0))KB"
}

Write-Host "Compression complete."
