# AlbatroVision Official Website

Official static website for AlbatroVision, focused on the ocean EM operations solution.

This repository contains only the public website files. It does not include the AlbatroVision product backend, frontend application, database, or internal development assets.

## Stack

- HTML
- CSS
- JavaScript
- Static image assets

There is no build step and no package installation required.

## Project Structure

```text
.
|-- index.html
|-- styles.css
|-- script.js
`-- assets/
```

## Local Preview

From this directory, run:

```bash
python3 -m http.server 8017
```

Then open:

```text
http://127.0.0.1:8017/
```

## GitHub Pages Deployment

This site is ready to deploy from the repository root.

Recommended GitHub Pages settings:

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/` (root)

After saving the settings, GitHub Pages will publish the site from `index.html`.

## Content Notes

- The site defaults to English and supports Traditional Chinese with the language icon toggle.
- The contact email is `allen@albatrovision.com`.
- The visual assets are prepared for public website use.
- The site presents the AlbatroVision ocean workflow and does not require a backend API.

## Updating the Website

Edit the static files directly:

- Page structure and copy: `index.html`
- Styling and responsive layout: `styles.css`
- Language toggle and interactions: `script.js`
- Website images: `assets/`

After editing, check the JavaScript syntax:

```bash
node --check script.js
```
