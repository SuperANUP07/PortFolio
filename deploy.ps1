#!/usr/bin/env pwsh
# Portfolio Deployment Script
# This script helps you quickly push your portfolio to GitHub and deploy to Vercel

Write-Host "`n=== Portfolio Deployment Helper ===" -ForegroundColor Green
Write-Host "This script will help you deploy to GitHub & Vercel`n" -ForegroundColor Cyan

# Get user inputs
$username = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter repository name (e.g., ANUP_SAHU_Portfolio)"
$commitMsg = Read-Host "Enter commit message (default: 'Update portfolio')"

if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "Update portfolio"
}

# Navigate to portfolio directory
$portfolioPath = "e:\CYBER Project\ANUP_SAHU_Portfolio\portfolio"
if (-Not (Test-Path $portfolioPath)) {
    Write-Host "❌ Portfolio directory not found at $portfolioPath" -ForegroundColor Red
    exit 1
}

Set-Location $portfolioPath
Write-Host "`n✅ Navigated to portfolio directory" -ForegroundColor Green

# Check if git is installed
try {
    $gitVersion = git --version 2>&1
    Write-Host "✅ Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed. Download from: https://git-scm.com/" -ForegroundColor Red
    exit 1
}

# Initialize git if needed
if (-Not (Test-Path ".git")) {
    Write-Host "`nInitializing Git repository..." -ForegroundColor Cyan
    git init
    git add .
    git commit -m "Initial portfolio commit"
    git branch -M main
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "`n✅ Git repository already exists" -ForegroundColor Green
    git add .
    git commit -m "$commitMsg"
}

# Set remote
$remoteUrl = "https://github.com/$username/$repoName.git"
Write-Host "`nSetting remote to: $remoteUrl" -ForegroundColor Cyan

# Check if remote exists
$remoteExists = git remote -v 2>&1 | Select-String "origin"
if ($remoteExists) {
    Write-Host "Updating existing remote..." -ForegroundColor Yellow
    git remote set-url origin $remoteUrl
} else {
    Write-Host "Adding new remote..." -ForegroundColor Cyan
    git remote add origin $remoteUrl
}

# Push to GitHub
Write-Host "`nPushing to GitHub..." -ForegroundColor Cyan
try {
    git push -u origin main
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "`nRepository URL: https://github.com/$username/$repoName" -ForegroundColor Cyan
} catch {
    Write-Host "❌ Push failed. Make sure:" -ForegroundColor Red
    Write-Host "   1. Repository exists at: https://github.com/$username/$repoName" -ForegroundColor Yellow
    Write-Host "   2. Repository is set to PUBLIC" -ForegroundColor Yellow
    Write-Host "   3. You have GitHub SSH/HTTPS credentials configured" -ForegroundColor Yellow
    exit 1
}

# Final instructions
Write-Host "`n=== Next Steps ===" -ForegroundColor Green
Write-Host "1. Go to https://vercel.com" -ForegroundColor Cyan
Write-Host "2. Sign in with GitHub" -ForegroundColor Cyan
Write-Host "3. Click 'New Project'" -ForegroundColor Cyan
Write-Host "4. Select your repository: $repoName" -ForegroundColor Cyan
Write-Host "5. Click 'Deploy'" -ForegroundColor Cyan
Write-Host "`n✅ Your portfolio will be live in ~1 minute!" -ForegroundColor Green
Write-Host "`nFor detailed instructions, see: HOSTING_GUIDE.md" -ForegroundColor Cyan
Write-Host "`n"
