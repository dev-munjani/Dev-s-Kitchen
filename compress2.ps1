Add-Type -AssemblyName System.Drawing

$dir = Split-Path -Parent $MyInvocation.MyCommand.Path

function ResizeImg($src, $dest, $maxW, $maxH, $quality) {
    $img = [System.Drawing.Image]::FromFile($src)
    $origW = $img.Width
    $origH = $img.Height
    Write-Host "Processing $src ($origW x $origH)"
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
    $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$quality)
    $bmp.Save($dest, $enc, $params)
    $bmp.Dispose()
    $origSize = (Get-Item $src).Length
    $newSize  = (Get-Item $dest).Length
    Write-Host "  Saved $dest ($newW x $newH) $([Math]::Round($origSize/1MB,1))MB to $([Math]::Round($newSize/1KB,0))KB"
}

ResizeImg "$dir\dev.png" "$dir\dev_opt.jpg" 800 800 80
Write-Host "Done"
