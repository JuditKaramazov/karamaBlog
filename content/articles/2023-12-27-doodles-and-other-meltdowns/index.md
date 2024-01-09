---
date: 2023-12-27T10:18:50.153Z

title: Doodles & other meltdowns
image: ./doodles-teaser.jpg

tags:
  - astro
  - typescript
  - react
  - blog
  - design
  - development
  - personal

toc: true
---

WordPress. Blogspot. Fotolog. What was the name of those personal sites we could create as Messenger users? "Spaces"? Notebooks. Magazines. Analysis of my writings. Little awards. Scrapped paper, mostly. There even was an attempt to include a GitHub repository as part of my journey towards the center of myself, too.

Imagine the many times that someone who is (or was) used to writing tried to revamp their blog, only to find that most of their old URLs do not exist anymore. As our world advances and evolves, some of the pieces keeping our old world intact can’t fit anymore into today’s standards and ways of approaching reality. What a shame; some of those songs were truly lit ones. Does everything work as a strange, inconsistent doodle? The more tangled it is, the more difficult it becomes to find any white space. Those songs were indeed great, but someone drew on top of them to the point nothing was visible anymore.

Perhaps it was for the best, though. Those spaces might remain as inapproachable burials of what our world (or mine, at least) once was.

## Doodles?

I've never been good at drawing, and that's why I focused my content on the only thing I assumed I could do: writing, finding an imaginary balance between signifiers and meanings. A private filter of reality rather than just a way of expressing myself, as if there were still some blank spaces I could fill with words. "Doodles"; that was the keyname for an abandoned project dedicated to sharing insights into my journey as a developer. "What was it about? Was it a nice Swift extension, a React website, another way of exploring what development means for you, Judit?" Not quite. It included documentation of my learning process, effective methodologies, the technologies I encountered (and feared a lot, at the beginning), and the challenges I was starting to face as a freelancer transitioning into teleworking. The content encompassed what worked for me, the problems that needed to be addressed, and even "side-sections" aimed to support small studios and provide in-depth analyses of their video games. Music, literature, other forms of media, and especially technology; a little bit of everything. All the ingredients that made me into the person that I am today while finding myself born anew in the technological area time after time after...

The concept for this new space you are visiting right now, dear stranger, traces its roots back to that failed idea - just like many of them. Do you remember Fotolog, even? We all were ashamed of our accounts once we grew old enough to realize our edginess and absurd lack of conformism. How did we get started? Only God knows.

Journeys always start like this, I suppose.

### Doodles: excerpt

#### Chapter 1: The learning process

> 'How to get started? How am I supposed to start taking the first steps in whatever journey when I don't know the destination? Does this hypothetical destination exist, even?'
> This repository is not meant to become a valuable insight into the learning process itself, nor a clever answer to these questions that every single human being had in mind at some point throughout their lives. However, I would want to emphasize the words process and journey since that is what these little doodles (as well as some helpful tools I will eventually share) will try to represent: there is no goal and no clear destination. There's only a journey that may feel like a bumpy ride at times, but that is the essential origin and destination of learning: we find the courage to visualize that mountain (apparently) too high to climb, clear up some misconceptions, acknowledge our mistakes, and try again.
> All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason"; none of us (you too are involved here, but so I am) knows what programming truly is - not yet, and reason feels like an unreachable peak on top of an impossible mountain. We're going through this together, though, and as long as we are willing to keep on keeping on, everything will be just fine.

## karamaBlog: restart and try again

I do miss writing. I can't even do it properly in English, but I still miss the feeling of communicating a certain vibe, shade, or aspect of my personal and immutable way of seeing things. I miss the long nights writing poetry while getting ready for my exams, too. I miss enjoying things without constantly fearing this invisible threat that would hypothetically demolish my progress and the crystal castle I built around it. It could set fire to the very roots of my soul, couldn't it? Will there be something to miss about development at a certain point? How about combining everything and seeing what happens? Could it translate into a reconciliation between me, my old self, and the new one?

"K", "R", "M". Although I previously gave special attention to not-so-indie video games while trying to build a virtual identity, this time I decided to delve into _Shadow of the Colossus_ instead of _The Last Guardian._ As **karamaBlog** serves as an extension of the brand used in my recent works, I wanted to maintain similar aesthetics, patterns, and a general vibe ensuring a cohesive and familiar user experience. At the same time, I also wanted to reproduce a sense of evolution beyond technical details and features. However, since this site aims at providing personal access to what's supposed to be a solitary path, it felt more accurate (and even honest) to represent it as a single individual wandering an immense landscape empty of everything, encountering impossible obstacles, and yet overcoming them not because of their ability but due to a deeper, almost dark purpose.

For instance, the runes giving shape to the logo appear to be in Wander's sword. Is this place supposed to become my weapon, then? Could my words speak to someone else?

### KRM: peculiarities

Anyway: we are here to discuss more than the evocative feelings that fill the space between fighting my imaginary colossi, and although Ueda would strongly disagree with the temptation to alter and stain these blank spaces with "things to do", I still find it interesting to offer you a minimal approach to this site's specifications.

1. **Framework & Language**

   - **karamaBlog** is built as a statically exported site using Astro and TypeScript. The vast majority of components are either Astro components or native Web Components, with some React ones loaded client-side. This combination offers the best of both worlds: the speed and efficiency of Astro for static site generation, the type safety and developer-friendly features of TypeScript, and the dynamic interactivity and reusable components provided by React. Highly recommended.

2. **Styles**

   - Styling is based on a combination of basic global styles, component-specific ones, the incorporation of CSS modules, and other peculiarities I would have never achieved without **Auregan Nedelec** and her genuinely touching logos, illustrations and ideas. Thank you kindly for your patience and unconditional collaboration.
   - Basic. Simple. Neat.

3. **Content management**

   - The content itself resides under the "content/" directory, allowing Astro to create content collections for each subfolder. Given that each post is structured as a folder with a Markdown file and all associated assets co-located within, retrieving content collections enriches each post's frontmatter metadata, including extracting dates and slugs from the post folder names and performing EXIF extraction for photos.

4. **Search, Related Posts & Changelog Rendering**

   - A global search is provided with [Fuse.js](https://github.com/krisk/Fuse) (a powerful, lightweight fuzzy-search library, with zero dependencies), which means that once the search has been opened, all posts' metadata is fetched and queried against as the search field is used.
   - Under each post, a list of related posts is magically displayed - or almost magically, at least (thanks again, Fuse.js). This feature is based on tags and other metadata of the currently viewed posts... if any.
   - I also considered it appropriate to display the changelog of my GitHub repositories thanks to the usage of the GitHub GraphQL API. This idea was conceived as a way to add transparency and keep my audience informed about the ongoing development and improvements in my projects.

5. **Articles, Photos, Utils & /tecnoMazov**

   - Now, and as we are discussing business, allow me to share with you the meaning of this madness:
     - a. **Articles** hosts... articles. Sometimes interesting **links**, too.
     - b. Surprisingly, **Photos** showcases... different pictures that I took throughout my different trips. Original and unexpected, huh? Don't blame me for trying to make my personal blog _personal,_ guys.
     - c. **Utils** aims to provide you with interesting (and even downloadable) tools and utilities. Our world is expensive enough already, come on.
     - d. **/tecnoMazov** is where the magic happens: as tecno (or "disco") as it could be, this section showcases a continuously updated list of devices, tools, and services, as well as little extensions, scripts, or minimal apps that I myself built and then incorporated as my go-to options. As for the last part, and just in case you're interested in investigating all my projects so far, please, refer to my [portfolio](https://karamazfolio.xyz), and feel free to go "curious mode" over it.

## Why do you pilot an EVA?

Now that everything's been cleared, allow me to let you in on a secret: there's no specific answer for me anymore. However, we might find ourselves one now that we embarked on this journey together, don't you think?

Happy coding, you all - and huge Kudos to [Vecteezy](https://www.vecteezy.com/free-vector/tangled-string) and their awesome free content.

<p class="content-download">
<a class="icon-github btn btn-primary" href="https://github.com/JuditKaramazov">GitHub</a>
</p>
