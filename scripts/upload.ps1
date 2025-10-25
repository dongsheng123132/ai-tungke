param(
  [string]$CommitMessage = "chore: sync",
  [string]$RemoteHttps = "https://github.com/dongsheng123132/ai-tungke.git",
  [string]$RemoteSsh = "git@github.com:dongsheng123132/ai-tungke.git",
  [switch]$UseSSH,
  [string]$Proxy = "",
  [int]$Retries = 3,
  [int]$WaitSeconds = 3
)

$ErrorActionPreference = "Stop"

function Log($msg, $color = "White") {
  Write-Host $msg -ForegroundColor $color
}

function GitCmd([string[]]$gitArgs) {
  Log "» git $($gitArgs -join ' ')" "Cyan"
  & git @gitArgs
  if ($LASTEXITCODE -ne 0) {
    throw "git $($gitArgs -join ' ') failed (exit $LASTEXITCODE)"
  }
}

# 进入仓库根目录（脚本位于 scripts/ 下）
Set-Location (Resolve-Path "$PSScriptRoot\..")

# 初始化仓库（如果尚未初始化）
if (-not (Test-Path ".git")) {
  GitCmd @("init")
}

# 切换到 main 分支
GitCmd @("branch", "-M", "main")

# 选择远程地址（HTTPS 或 SSH）
Log "UseSSH: $($UseSSH.IsPresent)" "Gray"
Log "RemoteHttps: $RemoteHttps" "Gray"
Log "RemoteSsh: $RemoteSsh" "Gray"
$TargetRemote = if ($UseSSH.IsPresent) { $RemoteSsh } else { $RemoteHttps }
Log "Target remote: $TargetRemote" "Gray"

# 设置/更新 origin 远程
try {
  $CurrentRemote = git remote get-url origin 2>$null
} catch {
  $CurrentRemote = ""
}
Log "Current origin: $CurrentRemote" "Gray"
if ([string]::IsNullOrWhiteSpace($CurrentRemote)) {
  GitCmd @("remote", "add", "origin", $TargetRemote)
} elseif ($CurrentRemote -ne $TargetRemote) {
  GitCmd @("remote", "set-url", "origin", $TargetRemote)
}

# 暂存并提交（若有变更）
GitCmd @("add", "-A")
& git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
  GitCmd @("commit", "-m", $CommitMessage)
} else {
  Log "No staged changes; skip commit." "Yellow"
}

# 推送，支持代理（仅本次命令临时设置）
$PushCmd = "push -u origin main"
if (-not [string]::IsNullOrWhiteSpace($Proxy)) {
  Log "Using proxy: $Proxy" "Yellow"
}

for ($i = 1; $i -le $Retries; $i++) {
  try {
    if (-not [string]::IsNullOrWhiteSpace($Proxy)) {
      Log "Attempt $i with proxy" "Gray"
      & git -c "http.proxy=$Proxy" -c "https.proxy=$Proxy" push -u origin main
    } else {
      GitCmd @("push", "-u", "origin", "main")
    }
    Log "Push succeeded." "Green"
    exit 0
  } catch {
    Log "Push attempt $i failed: $($_.Exception.Message)" "Yellow"
    if ($i -lt $Retries) { Start-Sleep -Seconds $WaitSeconds }
  }
}

throw "Push failed after $Retries attempts. Consider launching a proxy or UseSSH switch if you have SSH keys configured."