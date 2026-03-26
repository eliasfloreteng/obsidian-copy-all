import { type App, PluginSettingTab, Setting } from "obsidian";
import type CopyAllPlugin from "./main";

export interface CopyAllPluginSettings {
	includeFilename: boolean;
}

export const DEFAULT_SETTINGS: CopyAllPluginSettings = {
	includeFilename: true,
};

export class CopyAllSettingTab extends PluginSettingTab {
	plugin: CopyAllPlugin;

	constructor(app: App, plugin: CopyAllPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName("Include filename as heading")
			.setDesc(
				"Prepend the filename (without .md) as a top-level heading when copying.",
			)
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.includeFilename)
					.onChange(async (value) => {
						this.plugin.settings.includeFilename = value;
						await this.plugin.saveSettings();
					}),
			);
	}
}
