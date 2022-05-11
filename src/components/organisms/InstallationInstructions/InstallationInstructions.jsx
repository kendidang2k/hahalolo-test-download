import { Box, Grid } from '@mui/material'
import React from 'react'
import HeaderLink from '../../molecules/HeaderLink/HeaderLink'
import InstallationVersion from '../../molecules/InstallationVersion/InstallationVersion'

const headerData = {
    headerLinkData: [
        {
            title: 'Release Channel',
            href: '#release__channel'
        },
        {
            title: 'Beta Channel',
            href: '#beta__channel'
        },
        {
            title: 'Nightly Channel',
            href: '#nightly__channel'
        }
    ],
    content: `<p> <p>Brave is only supported on 64-bit AMD/Intel architectures (amd64 / x86_64).</p> <p>The current signing keys are also available from <a href="https://brave.com/signing-keys/">https://brave.com/signing-keys/</a>.</p> </p>`
}

const installationInstructionsData = [
    {
        title: 'Release Channel Installation',
        id: 'release__channel',
        codeGuide: [
            {
                subTitle: 'Debian 9+, Ubuntu 16.04+ and Mint 18+',
                subContent: `<p>If you get <span>gnutls_handshake()</span> errors after adding the Brave repository on Debian 9, you may need to <a href="/">uninstall old conflicting packages.</a></p>`,
                code: [
                    'sudo apt install apt-transport-https curl',
                    'sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg',
                    'echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list',
                    'sudo apt update',
                    'sudo apt install brave-browser'
                ]
            },
            {
                subTitle: 'Fedora 28+, CentOS/RHEL 8+ ',
                code: [
                    'sudo dnf install dnf-plugins-core',
                    'sudo dnf config-manager --add-repo https://brave-browser-rpm-release.s3.brave.com/x86_64/',
                    'sudo rpm --import https://brave-browser-rpm-release.s3.brave.com/brave-core.asc',
                    'sudo dnf install brave-browser'
                ]
            },
            {
                subTitle: 'OpenSUSE 15+',
                code: [
                    'sudo zypper install curl',
                    'sudo rpm --import https://brave-browser-rpm-release.s3.brave.com/brave-core.asc',
                    'sudo zypper addrepo --refresh https://brave-browser-rpm-release.s3.brave.com/x86_64/ brave-browser',
                    'sudo zypper install brave-browser'
                ]
            },
            {
                subTitle: 'Snap',
                subContent: `<p>You can find <a href="/">Brave in the Snapcraft Store</a>, but while it is maintained by Brave Software, it is <a href="/">not yet working as well</a> as our official packages. We currently recommend that users who are able to use our official package repositories do so instead of using the Snap.</p>`
            }
        ]
    },
    {
        title: 'Beta Channel Installation',
        id: 'beta__channel',
        codeGuide: [
            {
                subTitle: 'Debian 9+, Ubuntu 16.04+ and Mint 18+',
                code: [
                    'sudo apt install apt-transport-https curl',
                    'sudo curl -fsSLo /usr/share/keyrings/brave-browser-beta-archive-keyring.gpg https://brave-browser-apt-beta.s3.brave.com/brave-browser-beta-archive-keyring.gpg',
                    'echo "deb [signed-by=/usr/share/keyrings/brave-browser-beta-archive-keyring.gpg arch=amd64] https://brave-browser-apt-beta.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-beta.list',
                    'sudo apt update',
                    'sudo apt install brave-browser-beta'
                ]
            },
            {
                subTitle: 'Fedora 28+, CentOS/RHEL 8+ ',
                code: [
                    'sudo dnf install dnf-plugins-core',
                    'sudo dnf config-manager --add-repo https://brave-browser-rpm-beta.s3.brave.com/x86_64/',
                    'sudo rpm --import https://brave-browser-rpm-beta.s3.brave.com/brave-core-nightly.asc',
                    'sudo dnf install brave-browser-beta'
                ]
            },
            {
                subTitle: 'OpenSUSE 15+',
                code: [
                    'sudo zypper install curl',
                    'sudo rpm --import https://brave-browser-rpm-beta.s3.brave.com/brave-core-nightly.asc',
                    'sudo zypper addrepo --refresh https://brave-browser-rpm-beta.s3.brave.com/x86_64/ brave-browser-beta',
                    'sudo zypper install brave-browser-beta'
                ]
            }
        ]
    },
    {
        title: 'Nightly Channel Installation',
        id: 'nightly__channel',
        codeGuide: [
            {
                subTitle: 'Debian 9+, Ubuntu 16.04+ and Mint 18+',
                code: [
                    'sudo apt install apt-transport-https curl',
                    'sudo curl -fsSLo /usr/share/keyrings/brave-browser-beta-archive-keyring.gpg https://brave-browser-apt-beta.s3.brave.com/brave-browser-beta-archive-keyring.gpg',
                    'echo "deb [signed-by=/usr/share/keyrings/brave-browser-beta-archive-keyring.gpg arch=amd64] https://brave-browser-apt-beta.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-beta.list',
                    'sudo apt update',
                    'sudo apt install brave-browser-beta'
                ]
            },
            {
                subTitle: 'Fedora 28+, CentOS/RHEL 8+ ',
                code: [
                    'sudo dnf install dnf-plugins-core',
                    'sudo dnf config-manager --add-repo https://brave-browser-rpm-beta.s3.brave.com/x86_64/',
                    'sudo rpm --import https://brave-browser-rpm-beta.s3.brave.com/brave-core-nightly.asc',
                    'sudo dnf install brave-browser-beta'
                ]
            },
            {
                subTitle: 'OpenSUSE 15+',
                code: [
                    'sudo zypper install curl',
                    'sudo rpm --import https://brave-browser-rpm-beta.s3.brave.com/brave-core-nightly.asc',
                    'sudo zypper addrepo --refresh https://brave-browser-rpm-beta.s3.brave.com/x86_64/ brave-browser-beta',
                    'sudo zypper install brave-browser-beta'
                ]
            }
        ]
    },
    {
        title: 'GitHub',
        subTitle: `<p>(Pre-)releases for all channels are also <a href="/">available on GitHub</a> in .deb/.rpm/.zip formats.</p>`
    },
    {
        title: 'Unofficial packages',
        subTitle: `<p>NOTE: While we recommend you to use our official packages, there’s a section for unofficial package in the case where we don’t ship packages for your distribution. These packages are community maintained, and therefore we take no responsibility for them.</p>`,
        lastNote: 'The Solus package is a repackaging of the .deb file in to the Solus software format (.eopkg). It is currently maintained by Jacalz.  ',
        codeGuide: [
            {
                subTitle: 'Arch',
                subContent: `<p>The Arch packages are available as <span>brave-bin</span>, <span>brave-beta-bin</span> and <span>brave-nightly-bin</span> in the Arch User Repository. To install it, you’ll need to use an <a href="/">AUR helper</a>, such as <span>yay</span>.</p>`,
                code: [
                    'yay -S brave-bin',
                    'yay -S brave-beta-bin',
                    'yay -S brave-nightly-bin',
                ]
            },
            {
                subTitle: 'Flatpak',
                subContent: `<p>Brave is available as a <a href="/">Flatpak package</a> from Flathub.</p>`,
            },
            {
                subTitle: 'Manjaro',
                code: [
                    'pacman -S brave-browser',
                    'pacman -S brave-browser-beta',
                ]
            },
            {
                subTitle: 'Manjaro',
                code: [
                    'pacman -S brave-browser',
                    'pacman -S brave-browser-beta',
                ]
            },
            {
                subTitle: 'Solus',
                code: [
                    'sudo eopkg it brave'
                ]
            },
        ]
    },

]

export default function InstallationInstructions() {
    return (
        <Grid sx={{ maxWidth: { xs: '375px', sm: '650px', md: '1080px' }, margin: 'auto', padding: { xs: '10px 10px 100px 10px' } }}>
            <HeaderLink headerData={headerData} />
            {
                installationInstructionsData && installationInstructionsData.map((item, index) => {
                    return (
                        <Box key={index}>
                            <InstallationVersion versionData={item} id={item.id} />
                        </Box>
                    )
                })
            }
        </Grid>
    )
}
