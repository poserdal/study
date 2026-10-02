# Study Better

A year of daily study. One hard question a week, seven days to work it out, about 10 to 15 minutes a day.

## What's in here

- `index.html` is the whole site in one file, content included.
- `weeks/` has all the content, one JSON file per group of weeks. This is where you edit lessons.
- `site.template.html` is the site code without the content.
- `build.py` puts the two together into `index.html`.
- `manifest.webmanifest`, `sw.js`, and `icons/` make it installable and let it work offline. Keep them next to `index.html`.

## Editing content

1. Change whatever you want in a file under `weeks/`.
2. Run `python3 build.py`.
3. Commit the updated `index.html` along with your edits.

Content edits never need a change to `sw.js`. Only bump the cache name in `sw.js` if you change the icons or the manifest.

Each day has a question (`q`), an `intro`, a `read` list, an optional `takeaway` on talk days, and a `journal` prompt. Use `*word*` for italics and a blank line between paragraphs. A read item of `{"journal": [4, 7]}` shows that person's Week 4 Day 7 entry inline.

## Notes and backups

Notes are saved on each person's device only. Nothing is sent anywhere. Settings has a backup and restore option so notes survive a new phone or cleared browser data.

## Start date

The program defaults to January 1, 2027. Change it in Settings to test from today.
