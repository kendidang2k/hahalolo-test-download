import { Box, Grid } from '@mui/material'
import React from 'react'
import AboutContent from '../../molecules/AboutContent/AboutContent'
import AboutHeader from '../../molecules/AboutHeader/AboutHeader'

import './index.css'

const aboutData = {
    title: 'Join the more than 50 million people (and counting) who trust Brave for a faster, safer web',
    subTitle: 'It’s one click to import all your bookmarks and extensions.',
    question: [
        {
            questionTitle: 'Is the Brave Browser safe?',
            answer: `<p>Brave is one of the <a href=' / '>safest browsers</a> on the market today. It blocks privacy-invasive ads & trackers. It blocks third-party data storage. It protects from browser fingerprinting. It upgrades every webpage possible to secure https connections. And it does all this by default. It’s also built off the open- source Chromium web core, which powers browsers used by billions of people worldwide.This source code is arguably vetted by more security researchers than any other browser.In short, not only is Brave safe to use, it’s much safer than almost any other browser. <a href=" / ">Learn more</a>.</p>`
        },
        {
            questionTitle: 'How do I download & install Brave?',
            answer: `<p>Brave is available on nearly all desktop computers (Windows, macOS, Linux) and nearly every mobile device (Android and iOS). To get started, simply download the Brave browser <a href=" / ">for desktop</a>, <a href=" / ">for Android</a>, or <a href=" / ">for iOS</a>.</p>`
        },
        {
            questionTitle: 'Does Brave have a VPN?',
            answer: `<p>Yes! <a href=" / ">Brave Firewall + VPN</a> protects everything you do online, on your entire device, even outside the Brave Browser. It’s currently available for iOS devices, and will be available on Android and desktop in the very near future.</p>`
        },
        {
            questionTitle: 'What languages is Brave available in?',
            answer: `<p>The Brave Browser is available in nearly 160 languages in all, including four different dialects of Chinese. Brave Search is currently available in English, French, German, Japanese, and Spanish, with support for many more languages coming soon.</p>`
        },
        {
            questionTitle: 'Who owns Brave?',
            answer: `<p>The Brave Browser, Brave Search, and all their various features are made by Brave Software Inc, an independent, privately-held company. Brave is not beholden to any other tech company, and works every single day to fight Big Tech’s terrible privacy abuses. Brave exists to protect the individual.</p>`
        },
        {
            questionTitle: 'Is Brave open source?',
            answer: `<p>Yes. The Brave Browser is built on the open-source Chromium web core and our own client code is released under the <a href=" / ">Mozilla Public License 2.0</a>.</p>`
        },
        {
            questionTitle: 'How does Brave compare to Chrome?',
            answer: `<p>Simply put, the <a href=" / ">Brave Browser is 3x faster than Google Chrome</a>. By blocking all privacy-invading ads & trackers by default, there’s less stuff to load on every single web page you visit. That means pages load much faster, saving you time, money, and battery life. It also means you’re much safer online. <a href=" / ">Learn more</a>.</p>`
        },
        {
            questionTitle: 'Is Brave free?',
            answer: `<p>Yes, Brave is completely free to use. Simply download the Brave browser <a href=" / ">for desktop</a>, <a href=" / ">for Android</a>, or <a href=" / ">for iOS</a> to get started. You can also use Brave Search free from any browser at search.brave.com, or <a href=" / ">set it as your default search engine</a>.< p > Brave also has some great, subscription- based features, including <a href=" / ">Brave Talk Premium</a> and <a href=" / ">Brave Firewall + VPN</a>.</p></p>`
        },
        {
            questionTitle: 'What is BAT, and how do I earn it?',
            answer: `<p>BAT is short for Basic Attention Token. BAT is a crypto asset, and a key (but totally optional) part of the Brave Rewards ecosystem. Here’s how it works:< p > Brave Rewards gives you the option to view first- party, privacy - protecting ads while you browse(these ads are from the Brave Private Ads network).If you choose to view them, you earn BAT, via <a href=" / ">the Brave Rewards program</a>.</p><p> You can keep BAT like any other crypto asset, or use it to tip the content publishers you love.Brave even gives you a secure way to store BAT(and any other crypto asset), with <a href=" / ">Brave Wallet</a>.And, again, Brave Rewards is a totally optional program.</p><p> Other tech companies steal your data to sell ads—to them, you are the product.Brave is different.We think your attention is valuable(and private!), and that you should get a fair share of the revenue for any advertising you choose to view.That fair share is rewarded in BAT.</p></p>`
        },
    ]
}

export default function AboutBrowser() {
    return (
        <Grid className='cover__about__browser' sx={{ background: 'linear-gradient(135deg, rgba(0,31,65,1) 0%, rgba(0,66,117,1) 48%, rgba(36,168,216,1) 100%)', position: 'relative', overflow: 'hidden', paddingBottom: '100px' }}>
            <Grid sx={{ maxWidth: { xs: '375px', sm: '650px', md: '1080px' }, margin: 'auto', padding: { xs: '100px 10px 10px 10px', sm: '200px 10px 10px 10px', md: '15% 10px 10px 10px' } }}>
                <Box sx={{ width: '100%', height: 'auto', overflow: 'hidden', position: 'absolute', top: '-20px', left: 0, zIndex: '8', transform: 'rotate(180deg)', pointerEvents: 'none' }}>
                    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 262,293.5 524,337 764,337 C 1004,337 1222,293.5 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="#ffffff" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
                </Box>
                <AboutHeader title={aboutData.title} subTitle={aboutData.subTitle} />
                <AboutContent questionData={aboutData.question} />
            </Grid>
        </Grid>
    )
}
