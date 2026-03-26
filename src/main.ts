import { MarkdownView, Notice, Plugin } from "obsidian";
import {
	type CopyAllPluginSettings,
	CopyAllSettingTab,
	DEFAULT_SETTINGS,
} from "./settings";

export default class CopyAllPlugin extends Plugin {
	settings: CopyAllPluginSettings;

	async onload() {
		await this.loadSettings();

		this.addCommand({
			id: "copy-entire-file",
			name: "Copy entire file to clipboard",
			icon: "copy",
			checkCallback: (checking: boolean) => {
				const view = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (!view) return false;
				if (checking) return true;

				const file = view.file;
				if (!file) {
					new Notice("No file is open.");
					return false;
				}

				const content = view.editor.getValue();
				let result = content;

				if (this.settings.includeFilename) {
					const filename = file.basename;
					result = `# ${filename}\n\n${content}`;
				}

				navigator.clipboard
					.writeText(result)
					.then(() => {
						new Notice("Copied to clipboard.");
					})
					.catch((error) => {
						new Notice("Failed to copy to clipboard.");
						console.error(error);
					});

				return true;
			},
		});

		this.addSettingTab(new CopyAllSettingTab(this.app, this));
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			(await this.loadData()) as Partial<CopyAllPluginSettings>,
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
