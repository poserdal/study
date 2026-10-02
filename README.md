# Question of the Week

A year of daily study. One hard question a week, seven days to work it out, about 10 to 15 minutes a day.

## What's in here

- `index.html` is the whole site in one file. Open it in a browser or host it anywhere (GitHub Pages works).
- `weeks/` has all the content, one JSON file per group of weeks. This is where you edit lessons.
- `site.template.html` is the site code without the content.
- `build.py` puts the two together into `index.html`.
- `apple-touch-icon.png` is the book icon for phone home screens. Keep it next to `index.html`.

## Editing content

1. Change whatever you want in a file under `weeks/`.
2. Run `python3 build.py`.
3. Commit the updated `index.html` along with your edits.

Each day has a question (`q`), an `intro`, a `read` list, an optional `takeaway` on talk days, and a `journal` prompt. Use `*word*` for italics and a blank line between paragraphs. A read item of `{"journal": [4, 7]}` shows that person's Week 4 Day 7 entry inline.

## Journals

Journal entries are saved in each person's browser on their own device. Nothing is sent anywhere. Clearing browser data erases them, so the Journal page has a way to copy everything out.

## Start date

The program defaults to January 1, 2027. Change it in Settings to test from today.
