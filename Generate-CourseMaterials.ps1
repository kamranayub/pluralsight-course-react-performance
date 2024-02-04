if (!(Test-Path .\.materials)) {
    mkdir .\.materials
}

Remove-Item .\.materials\* -Recurse -Force

$CommonPaths = @(
    # Add additional shared paths for each module
    ".\LICENSE",
    ".\README.md",
    ".materials\demo.zip"
)

$DemoPaths = @(
    ".\demo-simorgh\demo-simorgh.zip",
    ".\demo-simorgh\README.md"
)

function Compress($destinationPath, $pathsToCompress) {
    Compress-Archive -DestinationPath $destinationPath -Update -Path $pathsToCompress
}

Compress ".\.materials\demo.zip" $DemoPaths
Compress ".\.materials\Module-3.zip" ($CommonPaths + ".\Module 3")
Compress ".\.materials\Module-5.zip" ($CommonPaths + ".\Module 5")
Compress ".\.materials\Module-6.zip" ($CommonPaths + ".\Module 6")