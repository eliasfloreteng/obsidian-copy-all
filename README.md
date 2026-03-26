# Copy All

An Obsidian plugin that copies the entire contents of the current file to the clipboard as Markdown.

## Features

- **Copy entire file** — Copies all Markdown content from the active file to your clipboard via the command palette.
- **Filename as heading** — Optionally prepends the filename (without `.md`) as a top-level `# Heading`.
- **Mobile pull-down support** — The command can be assigned to Obsidian's mobile pull-down action for quick access.

## Usage

1. Open the command palette and run **Copy All: Copy entire file to clipboard**.
2. The file contents are copied to your clipboard, ready to paste.

### Mobile pull-down

To use with Obsidian's mobile pull-down gesture:

1. Go to **Settings → Mobile**.
2. Set **Pull down action** to **Copy All: Copy entire file to clipboard**.

## Settings

| Setting | Description | Default |
|---|---|---|
| Include filename as heading | Prepend the filename (without `.md`) as a `# Heading` at the top of the copied text. | On |

## Installation

### From Obsidian Community Plugins

1. Open **Settings → Community plugins → Browse**.
2. Search for **Copy All**.
3. Click **Install**, then **Enable**.

### Manual

Copy `main.js`, `styles.css`, and `manifest.json` into your vault at `.obsidian/plugins/copy-all/`.
