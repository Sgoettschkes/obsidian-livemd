import { Plugin } from 'obsidian';

export default class LivemdAsMdPlugin extends Plugin {

  async onload() {
    super.onload();

    // register the view and extensions
    this.registerExtensions(["livemd"], "markdown");
  }
}
