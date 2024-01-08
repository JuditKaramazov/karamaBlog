<p align="center">
  <img src="/public/logo.png" width="300" alt="karamaBlog original logo.">
</p>
<h1 align="center">
  karamaBlog, v1.0.0
</h1>

<div align="center">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" title="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" title="TypeScript" />
  <img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Shell Script badge" title="Shell Script" />
  <br />
  <img src="https://img.shields.io/badge/Astro-0E1E25?logo=astro" alt="Astro" title="Astro" />
  <img src="https://img.shields.io/badge/CSS-CSS3-1572B6?logo=css3" alt="CSS" title="CSS" />
  <img src="https://img.shields.io/badge/YAML-2C8EBB?logo=yaml" alt="YAML" title="YAML" />
  <br />
</div>
<br />
<p align="center">
  <a href="https:/github.com/JuditKaramazov">🐱 /JuditKaramazov</a>
</p>
<p align="center">
  <a href="https://karamazfolio.xyz">📍 Personal site</a>
</p>
<p align="center">
  <a href="https://karamablog.xyz">☕ Blog</a>
</p>

---

Table of Contents
-----------------

* [🚪 Introduction](#introduction)
* [🔧 Getting Started](#getting-started)
  * [🧞 Commands](#commands)
  * [👀 Want to learn more?](#want-to-learn-more)
* [🏗️ Structure](#structure)
  * [📝 Articles](#articles)
  * [🔗 Links](#links)
  * [🖼️ Photos](#photos)
  * [🧰 Utils](#utils)
  * [👾 /tecnoMazov](#tecnomazov)
* [🔮 Features](#features)
  * [📅 Changelog](#changelog)
  * [🌓 Day'n'Nite](#day'n'nite)
  * [📷 EXIF metadata](#exif-metadata)
  * [📡 JSON feed](#json-feed)
  * [🔍 Search](#search)
  * [🏷️ Tags & Related](#tags-&-related)
* [🧪 Scripts](#scripts)
  * [🌱 Add New](#add-new)
  * [📦 Move Downloads](#move-downloads)
  * [🎨 SVG as components](#svg-as-components)
* [💄 Style](#style)
* [🏛 License](#license)

## Introduction

There was a time when I wanted to be part of the university's maelstrom as a professor. That image is somehow blurry now that I can't even remember what literature tasted like or how its shapes looked to my eyes. There was a moment when I used to write, too - a distant one, just as many others. These days, the languages I speak the most are halfway through what humanities told me and what those devices that always fascinated me appeared to speak. Not a natural language, not an inherited one, and yet an efficient tool capable of translating our commands into a concise, clear, and precise syntax. What a surreptitious stream those opaque boxes, keys, and wires seemed to keep inside, just as if they contained an expansion of different universes away from our understanding.

After all this time, there are moments when I still fantasize about the idea of making all these wishes converge into the same point. That's terrifying, somehow: how could we combine such antagonistic realities, constantly fighting and questioning each other? For that, I have no answer. I still have a voice, though, and several different tones and tongues converge into it.

## Getting Started

This little creation that aims to provide me with the necessary tools to conciliate my many realities, also known as `karamaBlog`, is built as a statically exported site using Astro and TypeScript. Although the majority of components are either Astro components or native Web Components, there are some React ones loaded client-side, too. This combination offers the best of both worlds: the speed and efficiency of Astro for static site generation, the type safety and developer-friendly features of TypeScript, and the dynamic interactivity and reusable components provided by React. This synergy results in a performant, maintainable, and feature-rich web application, ensuring an optimal user experience that I know I will never achieve, but here we are, guys: still trying.

If by any chance you'd want to get started with Astro and its characteristic flexibility, simplicity, and neat results, allow me to remind you that achieving such a goal couldn't be easier once Astro joins the match. Now, and just in case this is one of those **Need for Speed™** moments for you, take into account the following steps.

Open your terminal and run the following command:

```bash
npm create astro@latest
```

There are even Starter Templates available:

```bash
# create a new project with an official example
npm create astro@latest -- --template <example-name>

# create a new project based on a GitHub repository’s main branch
npm create astro@latest -- --template <github-username>/<github-repo>
```

Finally:

```bash
npm run dev
```

In order to become the ultimate 🧑‍🚀 **Seasoned astronaut**...

### Commands

... Bear in mind that all commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Want to learn more?

Feel free to check [Astro's documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat). Enjoy the ride! 🚀


## Structure

According to their own documentation, inside of an Astro project we are expected to see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Although there's part of truth that I wouldn't dare take away from Astro's creators, the way that I found to be efficient enough in order to properly deconstruct myself differs quite a lot from the initial shape any Astro's project is supposed to have. However, let's not forget that `karamaBlog` is a website as varied and complex as the human being who gave rise to its several layers and elements, which explains why I'd find appropriate to give you a glimpse of the very pillars and bases of the skeleton keeping it as functional as possible (_it's not going to be a spooky time even though I just mentioned them skeletons, guys. It was a metaphor, you have my word_):

```text
/
├── .astro/
├── .config/
├── .vscode/
├── content/
├── public/
├── scripts/
├── src/
│   └── painandsuffering/
│   └── morepainandsuffering/
│   └── evendeeperpainandsuffering/
└── unbearablepainandsuffering.json...
```

Before doing so, please refer to the first site's entry, ["Doodles & other meltdowns"](https://karamablog.xyz/doodles-and-other-meltdowns), if you'd want to get a clearer notion of this project's origin: a now-abandoned repository dedicated to sharing insights into my journey as a developer, as well as many failed attempts to find a place where I could express myself in plenitude _or_ without having to exclude any of my interests.

Now, let's discuss business, though, as that is a story for another day - or night.

### Articles

The site's `menu` will welcome you with an _incredibly beautiful_ section called `Articles`, which happens to host... **articles**. I do understand this might be a difficult pill to swallow, but hear me out: all post content resides under [`./content/articles/`](./content/articles/), and every post is a folder with a Markdown file plus all the respective post assets co-located inside. Considering this, you'll find a `teaser image` introducing each article and other `illustrations` or `screenshots` graphically linked to the content itself, the main topic, or the specific feeling that certain things elicit from me. As for the rest... Markdown, guys. Nothing matters more than Markdown does (_as a philologist, I shamelesly accepted .md as the best narrative genre ever. Sorry not sorry_).

![Alt text](/public/screenshots/karamablog-01.png)

This is the very first layer: articles or posts themselves, followed by three different options:

- **Contacting me through Mastodon**. I considered other methods to handle your commentaries and opinions, but I found it quite appropriate to create a more direct way of communication between us. Building a supportive online community through blogging felt more honest this way, somehow.
- **Contributing to the post**. Although my articles are eminently a way of expressing myself and exploring different topics, doubts, and trends, blogging is also a unique platform for deepening into this "warm residue of a community" notion that I so much value. I hope that giving you the possibility to contribute to my posts (by expressing your doubts, expanding the ideas, or providing me with inspiring documentation on the matter) may eventually lead to healthy opportunities for collaboration and growth.
- **Fueling my soul with coffee**. What can I say? My Dinosaur drinks tons of it, guys - and none of us would want to see such a terrible creature going berserk mode, right?

### Links

Thanks to the lack of confidence that usually goes hand in hand with a severe impostor syndrome, I decided to incorporate a `Links` section closely related to the `Articles` one (in a similar way, you'll find more information in `./content/links`). In this case, however, my intention is sharing not-so-long exerpts that I happened to consider **brain food**, with only few personal thoughts on the matter. Whatever doesn't belong to my poor writing skills will peacefully live after some nice quotation marks.

![Alt text](/public/screenshots/karamablog-02.png)

_"How is it possible that such marks can look so sexy, Judit?"_ I am glad to hear that question! In order to get some extra information and guidance, please, refer to:

- [`./src/styles/global.css`](./src/styles/global.css)

### Photos

If you were not bold enough to investigate the general menu, I bet you still found some pictures decorating the main page of `karamaBlog`, right? Although this matter will be properly addressed while discussing the several features and scripts included in the repository, I wanted to make this space as personal and honest as possible, especially since I tended to keep my personal life away from blogs and social media. Independently of this fact being quite an unaltered reality throughout the years, I considered it was time for me to express all my different sides without compromising my privacy way too much.

For now, most of the content appearing in `Photos` describes my journey while living in Austria; a huge part of it, however, aims to illustrate my daily life as a citizen of the beautiful city of Barcelona. In both cases, these specific photos and image assets are **plain ol' copyright** unless I indicate a different author.

Don't forget that just as it happens with the articles and links, photos live under:

- [`./content/photos/`](./content/photos/)

### Utils

As a part of `Articles`' content, utils was originally conceived as a `tag` differentiating the main posts from the ones that I used in order to **share interesting and downloadable tools**. After thoroughly analyzing the possibilities of a single tag, I came to the conclusion of incorporating it as a unique "section" displaying only the articles containing **goodies, utils, and nice tools** that you might find helpful in your development path.

**TL;DR** - `Utils` is the modern `"it's dangerous to go alone! Take this."`


### /tecnoMazov

Now, it's time to discuss the `most disco` section of them all: `/tecnoMazov`, which represents how it feels like to exist as someone who considers herself `Rompe-aire, el soldado del tecno`.

![Alt text](/content/articles/2023-12-28-tecnomazov/tecnoMazov-software.png)

All jokes aside, and no matter how memorable and yet poorly elaborated _Final Fantasy VII_'s Spanish version was (for more information on such a tragic moment for the gaming industry, I will simply say that the Spanish translation was riddled with errors to an unacceptable degree), there's indeed some magic closely related to this section. Long story short, digital work, play and overall fun wouldn't be possible for us without the proper **devices and software**. As I decided to set technology as one of my main priorities when it comes to both the internal structure and content of this blog, I chose to **display a list detailing**:

- my setup (office & nomad)
- gear
- software
- and configs as a developer.

Inspired by [/uses](https://uses.tech), I would highly recommend to having a look at the site! As for `/tecnoMazov` itself, you'll find its own entry, as well as the assets linked to it, here:

- [`./content/articles/2023-12-28-tecnomazov/`](./content/articles/2023-12-28-tecnomazov/)

## Features

Well, well: now that we clarified the project's origin and main content, let's list the key features and functionalities allowing it to stand still.

### Changelog

That's correct, guys: if you are reading this right after the initial release, it is highly possible that you won't manage to find any example of this specific functionality in `karamaBlog` yet, but that's only due to the more-than-understandable lack of content we're still facing during its embryonic phase.

However, I can still explain to you what's this about: this feature allows me to `display the changelog of my GitHub repositories` thanks to the usage of the GitHub GraphQL API. This way, we'll be given the possibility to render the contents from a `CHANGELOG.md` file thanks to the components that you'll find under

- `getRepo()`, a helper located in [`src/lib/github/github.ts`](src/lib/github/github.ts)
- [`src/components/Changelog/`](src/components/Changelog/)

In order to provide you with a fitting example, we'll simply have to add the following code to our post:

```yaml
changelog: JuditKaramazov/super-cool-repo
```

and it will render the changelog at the end of it. Quite simple, am I right? In the end, this feature was conceived as a way to add transparency and keep my audience informed about the ongoing development and improvements in my projects. Bringing some light to this Earth is easier than it seems, huh? And speaking of which...

### Day'n'Nite

... Are your sunglasses ready? I hope they are! Just as it's mandatory these days, I incorporated a `theme switcher` to enhance the visual experience for readers. Including such a "must" these days into `karamaBlog` will hopefully allow you users/friends/readers/wanderers of the interwebz to personalize your viewing experience based on your likings, as it automatically switches between light and dark mode `based on your system preferences`.

For further information about this specific feature and its components, please, have a look at:

- [`src/components/ThemeSwitch`](src/components/ThemeSwitch)

### EXIF metadata

First things first, let's clarify that an EXIF file is a form of data storage that provides specific information about photographs, like the camera settings, time, date, and location where a photo was taken. Given the fact that I do love taking pictures (even though I am _terrible_ at it), I found it _noice_ to make EXIF (as well as IPTC) metadata possible for this blog. How does it work?

![Alt text](/public/screenshots/karamablog-03.png)

1. **Metadata Extraction**:
- The process begins by automatically extracting EXIF (Exchangeable Image File Format) and IPTC (International Press Telecommunications Council) metadata from our JPG files.
- This metadata contains valuable information such as camera settings, geolocation, and other details associated with the image.

2. **Minimal Overhead**:
- To ensure optimal performance and minimal impact on your blog's speed, two lightweight libraries, `fast-exif` and `node-iptc`, are employed.
- These libraries efficiently parse the metadata of every JPG file whenever a content collection containing photos is accessed, ensuring a seamless and quick retrieval process.

3. **Frontmatter Enrichment**:
- The extracted metadata is then dynamically added to the markdown frontmatter of the respective photo posts.
This enriches each post with detailed information about the photo, enhancing the overall content and providing readers with a deeper understanding of the visual context. Cool? Cool indeed.

4. **Location Display**:
- To further enhance the user experience, this feature incorporates location display using [pigeon-maps](https://pigeon-maps.js.org/).

- The geographical information from the metadata is utilized to showcase the location of each photo on an interactive map, allowing users to explore the visual content in a spatial context.
    > *Note: This aspect is still under construction. Please, be patient!*

Although I am still enhancing this specific feature, feel free to check out:

- [`src/components/Exif/`](src/components/Exif/)
- `readOutExif()` as the helper for EXIF extraction in [`src/lib/exif/index.ts`](src/lib/exif/index.ts)
- `loadAndFormatCollection()`, located in [`src/lib/astro/loadAndFormatCollection.ts`](src/lib/astro/loadAndFormatCollection.ts)

### JSON feed

The title here is descriptive enough: this feature generates a JSON feed upon build time, contributing to a more versatile and accessible data representation. After several blogging moments throughout my life, I realized that including a JSON feed in a blog offers several advantages that ensure a better user experience, increased visibility, and enhanced connectivity within the digital ecosystem. _Let's hope it wasn't a mistake..._

Until we get to know if it was indeed a mistake or not, here's the file that will satisfy your curiosity, though:

- [`./src/pages/feed.json.ts`](./src/pages/feed.json.ts)
- [`./src/lib/feed/`](./src/lib/feed/)

### Search

Speaking about curiosity, how many times did you try to find something specific in a website with no search tools? Tons of times, right? Did you feel like praying to all deities, too? Did you wish that the website was kind to you? That is what usually happens to me even up to these days, and it is also the reason that _forced me_ to include a `global search`, empowered by and provided with [Fuse.js](https://github.com/krisk/Fuse), a powerful, lightweight fuzzy-search library, with zero dependencies. 

If you are still wondering why you should use it, remember that:

1. With Fuse.js, you don’t need to set up a dedicated backend just to handle the search.
2. Simplicity and performance were the main criteria when developing this library.

In `karamaBlog`'s specific case, once the search has been opened, all posts' metadata is fetched and queried against as the search field is used. For further information, visit:

- [`src/features/Search/`](src/features/Search/)

### Tags & Related

Ah, _beautiful labels trying to define who we are..._ Luckily, the labels and tags we're using in this blog are nothing more than a mere orientation allowing us to quickly check the main topics to discuss, as they aim to facilitate the organization and access to some 🕸`related posts`🕸.  As for the last of them, the `Related Posts` feature is integrated into individual article pages, highlighting content similarities and facilitating a more immersive reading experience.

![Alt text](/public/screenshots/karamablog-04.png)

Let's quickly break it down:

1. The system utilizes the tags associated with the current article to perform a search for related posts.
2. Again, `Fuse.js` powers the search functionality, offering a versatile and efficient way to perform fuzzy searches.
3. Then, the search is configured to consider tags, titles, and lead content with a specified threshold for relevance.
4. Finally, the `six most relevant related posts` are displayed in a dedicated section.

Don't forget to investigate the following directory in order to get a better understanding of this form of sorcery Fuse.js gifted us with:

- [`src/components/RelatedPosts/`](src/components/RelatedPosts/)

## Scripts

Now, let's see some other content helpers and scripts that might be as relevant for you as they were (and are) for me.

![Alt text](/public/screenshots/karamablog-05.png)

### Add New

The `new` script provides a streamlined way to add new articles or photo posts to the blog, as it automates the process of setting up the necessary files and metadata for a new post. What's great about it is that the script can be run with different commands to create either a new article or a new photo post. As for each one of them:

1. **Article Creation (`createArticlePost.ts`)**:
- Creates a new article post with metadata such as title, date, and tags.
- Utilizes a template markdown file for consistent post structure.
- Automatically generates a new folder for the post with an index.md file.

2. **Photo Post Creation (`createPhotoPost.ts`)**:
- Reads EXIF data from the provided photo to extract information.
- Creates a new photo post with metadata including title, date, description, and tags.
- Copies the photo to the destination folder and generates an index.md file.

**TL;DR -**

```bash
npm run new "New"
npm run new "New" 2023-01-08
```

If you'd want to create a new photo post with the date, title, and description pre-filled from EXIF/IPTC data of a given image file, you can also:

```bash
npm run new photo /path/to/photo.jpg
npm run new photo /path/to/photo.jpg "New with photo"
```

Can't wait to get a better idea of how this works? I've got you covered:

- [`./scripts/new/`](./scripts/new/)

### Move Downloads

The `move-download.ts` script is a utility designed to simplify the management of downloadable ZIP files associated with articles in our blog, as it automates the process of finding all ZIP files within article folders and copying them to a designated public directory. As strange as it may sound, this script streamlines the process of managing downloadable content associated with our articles, ensuring a clean and organized structure in the public directory - finally! Organization!

As for the usage:

1. **Source and Destination Paths**:
- The script looks for ZIP files in the article folders under the source directory: `./content/articles/`
- It then copies these files to the destination directory: `./public/get/`

2. **File Discovery**:
- The script identifies ZIP files using the specified glob pattern: **/*.zip.
- This pattern matches all ZIP files recursively within article folders.

3. **Cleanup Process**:
- Before copying new files, the script removes the existing contents of the destination folder to ensure a clean slate.
Copying Files:
- It creates the destination folder if it doesn't exist.
The ZIP files are then copied from the article folders to the public directory.

For more information: 

- [`./scripts/move-downloads.ts`](./scripts/move-downloads.ts)

### SVG as components

In this approach, all SVG assets located under the [`./src/images/`](./src/images/) directory, as well as those from specific iconset dependencies, undergo a `transformation into Astro & React components` during the site-building process, pretty much like them Transformers of the development Spiderverse. The resulting compiled components are then neatly organized under [`./src/images/components/`](./src/images/components/), with each component containing a cleaned version of the original SVG represented as inline HTML. 

In summary, the key steps involve optimizing SVGs, transforming them into Astro and React components, and organizing the resulting components into a directory structure. 

Considering this, we could safely say that:

1. The `toInnerSvg` function optimizes and extracts the inner content of SVGs using the svgo library.
2. The generateIcons function, adapted from the astro-community/icons project, performs the following steps:
    - Clears the existing distDir and creates necessary directories.
    - Copies TypeScript definition files to the destination.
    - Iterates through SVG files in specified source directories.
    - Transforms each SVG into Astro and React components.
    - Writes the resulting components to the destination directory.
    - Creates index files for both Astro and React components.
3. The `toAstroComponent` function, as well as the `toReactCompoonent` one, generate the Astro/React component template, incorporating the inner SVG content.

In order to see this in action, don't hesitate to refer to:

- [`./scripts/create-icons/`](./scripts/create-icons/)

## Style

We're finally here, guys: the style. What a concept, right? Now that the technical part is partially defined, I would find it criminal to finish this text without highlighting the incredible logos, coffees (_ahem..._), and teaser images `Auregan Nedelec` provided me with, which greatly improved the overall look of the blog and made my cold little heart as warm as a baked potato. Above all, this sense of collaboration is what truly prevails, though - and for that I am genuinely grateful.

![Alt text](/public/screenshots/karamablog-06.png)

Putting aside some minimal stylistic guidelines that you could easily find after exploring the [`./src/styles/`](./src/styles/) directory, there's something else that I'd want to say before closing (or starting?) this specific chapter: as stated before, I've never considered myself a visual person, and I still struggle when trying to verbally describe the colors, patterns, lights, and shapes crossing my mind whenever a new design longs to turn into a reality. As Herman Hesse would state, however:

> The bird fights its way out of the egg. The egg is the world. Who would be born must first destroy a world.

I partially disagree, though, as there are ways to destroy a world and still integrate it as part of our new ones. That's probably the excuse I am using to tell myself that things are not definitely lost when it comes to the old and almost invisible "Philologist" that I still _am:_ I indeed am this person, but several others at once, too. It's all about finding a way to unify all of them, or _us,_ similarly to what happened to the stylistic aspects that both [Karamazfolio](https://karamazfolio.xyz) and [karamaBlog](https://karamablog.xyz) share.

If most of my passions can coexist in these spaces, and more specifically in this blog you're about to discover, I bet the many versions of myself will find their way toward reconciliation, too.

## License

The code is available under the [MIT License](/LICENSE.txt). Keep it _noice_ now that the festivities finally came to an end, guys. Oh, and remember that you can make this 2024's Dinosaur extremely happy if you...
<br />

---

<h1 align="center">
  <a href="https://karamazfolio.xyz/"><img src="https://raw.githubusercontent.com/JuditKaramazov/TCA-clampculate/main/public/img/christMazov.gif" width="150" height="150" alt="Original Christmas-Karama logo asset.">
</h1>
<h2 align="center">
  <a href="https://www.buymeacoffee.com/JuditKaramazov" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 207px !important;" ></a>
</h2>
