---
date: 2024-01-06T11:21:00.367Z

title: ChromatOS and noctOS for Mac
image: ./chromatos-noctos-teaser.png

tags:
  - utils
  - finder
  - macos
  - extensions
  - customization
  - development

featured: true
toc: true
---

[ChromatOS](https://github.com/JuditKaramazov/Codetopia-ChromatOS) and [noctOS](https://github.com/JuditKaramazov/Codetopia-noctOS) are macOS utilities that empower users to personalize their experience by easily changing folder colors and configuring light or dark mode themes for their selected applications. In both cases, the goal was to offer more flexibility for system customization and integration, as Apple's restrictions may provide consistency, coherency, and security, but not freedom of choice.

This strong, perfectly-solid brand identity has been at the core of Apple’s success, and with it, the emblematic half-eaten-fruit managed to win new enthusiasts while solidifying the relationship with existing ones. Innovation, quality customer service, captivating marketing campaigns that resonate with its audience... Marketing has changed because the world has changed, and while many people in this industry have become overwhelmed and paralyzed by the blizzard of technology that's literally upon us, entrepreneurs and engineers have been able to forge new businesses and disrupt, or create, markets. But how about the users themselves? In the end, in an era where the expression of identity remains both blurred and resoundingly powerful, and now that algorithms often curate our experiences, customization becomes a tool for reclaiming control and asserting individuality.

## Features

### ChromatOS

- easy installation
  - (users can enable ChromatOS through **System Preferences -> Extensions -> Finder Extensions/Added Extensions**)
- intuitive color selection
  - (right-click on one or more folders, access the Color menu, and choose your fighter)
- persistent preferences
  - (it continues to work even after the initial window is closed, which means that users' color preferences persist across Finder sessions)

### noctOS

Just like ChromatOS, noctOS provides you with:

- easy installation process
- persistent preferences
- intuitive theme selector
  - (users will simply have to choose the apps they'd want to be launched in either light or dark mode).

Besides that, it also features:

- grid & list view
- search bar
- consent mode for privacy
- localization
  - (including English, Spanish, French, Catalan and German)

## Usage

First, you can simply clone each repository:

```bash
git clone https://github.com/JuditKaramazov/Codetopia-ChromatOS.git
git clone https://github.com/JuditKaramazov/Codetopia-noctOS.git
```

And then prepare the build, as shown in the following example:

```bash
cd noctOS
pod install
open noctOS.xcworkspace
```

However, you can also download the latest release version for both [ChromatOS](https://github.com/JuditKaramazov/Codetopia-ChromatOS/releases/download/v1.0.0/ChromatOS.zip) and [noctOS](https://github.com/JuditKaramazov/Codetopia-noctOS/releases/download/v1.0.0/noctOs.zip) in just a click. Could it be easier? I don't think so.

## Check out & contribute

Head over to GitHub for more information, and feel free to take a peek into the code. If you find any bugs, remember to report them just so that I can keep these apps as accessible and functional as possible.

<p class="content-download">
    <a class="icon-github btn btn-primary" href="https://github.com/JuditKaramazov">GitHub</a>
</p>
