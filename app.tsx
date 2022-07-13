// LICENSE : MIT

import React from "https://cdn.skypack.dev/react@18.1.0?dts";
import ReactDOM from "https://cdn.skypack.dev/react-dom@18.1.0?dts";
import { ReactNotifications, Store } from "https://cdn.skypack.dev/react-notifications-component?dts";
import { useForm } from "https://cdn.skypack.dev/react-hook-form?dts";
import scrapboxToReView from "https://raw.githubusercontent.com/fabon-f/sb2re/master/mod.ts";

const sampleTxt = `サンプル
[*** Online Scrapbox to Re:VIEW Converter]
 [* Scrapbox 記法]から [* Re:VIEW 記法]へ変換します
 \`sb2re\`を使用しています
  [fabon-f/sb2re https://github.com/fabon-f/sb2re]
`;
const logger = {
  error(message: string) {
    throw new Error(message);
  },
  warn(message: string) {
    console.warn(message);
  }
};

function App() {
  const { register, watch } = useForm();
  const watchText = watch("text", sampleTxt);
  const watchBaseLevel = Number(watch("baselevel", 3));
  return (
    <div id="app">
      <ReactNotifications />
      <div class="nav">
        <h1>sb2re-online: Online Scrapbox to Re:VIEW Converter</h1>
        <p id="baseheadinglevel">
          <label for="baseheadinglevel">Base heading level (treated as a section): </label>
          <input type="number" min="1" defaultValue={watchBaseLevel} {...register("baselevel")} />
        </p>
        <a href="https://github.com/kn1cht/sb2re-online" target="_blank" rel="noopener noreferrer">
          <img src="https://icongr.am/fontawesome/github.svg?size=24&color=ffffff"></img>
          <span>sb2re-online</span>
        </a>
      </div>
      <div class="editor">
        <div class="editor_wrapper">
          <textarea value={watchText} {...register("text")} class="input"></textarea>
        </div>
        <div class="editor_wrapper">
          <textarea value={executeSb2re(watchText, { baseHeadingLevel: watchBaseLevel, logger })} class="output"></textarea>
        </div>
      </div>
    </div>
  );
}

function executeSb2re(watchText: string, option: {}) {
  let converted = "";
  try {
    converted = scrapboxToReView(watchText, option);
  } catch(e) {
    Store.addNotification({
      title: "Please fix your Scrapbox syntax",
      message: e.toString(),
      type: "danger",
      container: "bottom-left",
      dismiss: {
        duration: 6000,
        onScreen: true,
        showIcon: true,
      },
    });
  }
  return converted;
}

addEventListener("DOMContentLoaded", () => ReactDOM.render(<App />, document.querySelector("#main")));
