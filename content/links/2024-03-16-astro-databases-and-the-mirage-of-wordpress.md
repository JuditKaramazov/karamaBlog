---
date: 2024-03-16T21:55:46.581Z

title: Astro, Databases & the Mirage of WordPress
linkurl: https://astro.build/db/

tags:
  - astro
  - blog
  - client-side
  - content management experience
  - content management systems
  - databases
  - libSQL
  - SQL databases
  - SQLite
  - web development tools
  - website development
  - WordPress
---

[Astro](https://astro.build) is conceptually simple - and that's probably why we love it. Besides an incredible Markdown integration that simply _works_ or its ["Content Collections"](https://astro.build/blog/introducing-content-collections/) (a way to manage local content with built-in type safety), there's a charm in stopping ourselves from overusing JavaScript as much as we do these days, too. But that's just a part of what makes it so great; some of us want our tools to be flexible, simple to use, and stable, yet growing as much as we do. Whenever it comes to such essential ingredients, it's clear that Astro always got us covered.

Recently, [Astro DB](https://astro.build/db/) decided to join the match: designed for Astro sites, this database aims to replicate the content management experience of one of a Titan - WordPress. When it comes to the latter, if its everlasting shadow is still present these days, it's clear that one of its popularity's biggest drivers, its built-in database, played a crucial role in it. "All content is data", and WordPress interiorized this concept so well that it gave users a simple way to manage all their content, plugins, or blocks in the same place. Now, what would happen if we were to witness the conjunction of an outstanding framework for content-driven websites combined with the power of a [libSQL](https://turso.tech/libsql) database, which happens to be a fork of the solidified [SQLite](https://www.sqlite.org)?

[According to Astro's co-creator](https://turso.tech/blog/astro-chooses-turso-to-power-astro-db), "libSQL allowed us to rethink the product in a way that makes the database a core part of the experience that is always there". What we got as a result is a fast, fully managed SQL database designed exclusively for Astro sites, which offers automatic configuration upon server startup, scales based on demand with a free tier, and allows for the quick creation of databases for Astro projects. As for the creative process itself and the implications of working (or not) with SQLite, the article named ["Astro chooses Turso to power Astro DB"](https://turso.tech/blog/astro-chooses-turso-to-power-astro-db) by Glauber Costa exposed some significant insights on the matter:

> Astro excels at content. But at the end of the day, content is just another name for data. (...) Traditionally, creating databases has been an expensive operation. Furthermore, requiring users to set up databases locally to develop with Astro would be a level of friction developers would be unlikely to accept. The Astro team reached for SQLite for its characteristics: each database is just a file, so creating a database per data source is doable. It can also be integrated deeply into the application, since it is just a library and is always on. But SQLite by itself doesn't solve all problems. While the approach of just shipping SQLite files works well for immutable data, you still need to handle cases where data can be written to, keeping the SQLite files in sync. For production, there is also the need to build infrastructure to handle disaster recovery, replication, and many other things. While the Astro team initially experimented with Cloudflare D1, Turso fit the bill the best. With Turso, Astro was able to use the same libSQL drivers to provide local read only experiences as well as remote databases to the tune of one per project, and in the browser for Stackblitz-based examples, with the libSQL wasm build.
