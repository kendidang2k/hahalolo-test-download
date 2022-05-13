export const handleDownload = () => {
    const OS = navigator.platform;
    if (OS.includes("Win")) {
        window.open("https://dev-twosite.teknix.vn/uploads/backup/windows/ChromeSetup.exe")
    } else if (OS.includes("Linux")) {
        window.open("https://dev-twosite.teknix.vn/uploads/backup/linux/google-chrome-stable_current_amd64.deb")
    } else if (OS.includes("Mac")) {
        window.open("https://dev-twosite.teknix.vn/uploads/backup/mac/googlechrome.dmg")
    }
}