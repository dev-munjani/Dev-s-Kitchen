Add-Type -AssemblyName System.Drawing
function MakeVariations($basename) {
    if (Test-Path "$basename.png") {
        $img = [System.Drawing.Image]::FromFile((Join-Path (Get-Location) "$basename.png"))
        
        # Variation 2: Rotate 90 degrees
        $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone)
        $img.Save((Join-Path (Get-Location) "${basename}_v2.png"), [System.Drawing.Imaging.ImageFormat]::Png)
        
        # Variation 3: Rotate another 90 degrees (180 total)
        $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone)
        $img.Save((Join-Path (Get-Location) "${basename}_v3.png"), [System.Drawing.Imaging.ImageFormat]::Png)
        
        $img.Dispose()
    }
}

 = @("classic_maggi_new", "veggie_maggi_new", "schezwan_maggi_new", "cheese_maggi_new", "paneer_maggi_new", "dev_maggi_new", "masala_penne_new", "white_penne_new", "red_penne_new", "pink_penne_new", "mom_pasta_new", "spaghetti_new", "cucumber_bowl_new", "veg_bowl_new", "paneer_bowl_new", "cheese_pullout_new", "tikka_pav_new", "surti_pass_new")

foreach ($item in $items) {
    MakeVariations $item
}
