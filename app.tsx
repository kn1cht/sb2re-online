// LICENSE : MIT

import React from "https://cdn.skypack.dev/react@18.1.0?dts";
import ReactDOM from "https://cdn.skypack.dev/react-dom@18.1.0?dts";
import { useForm } from "https://cdn.skypack.dev/react-hook-form?dts";
import scrapboxToReView from "https://raw.githubusercontent.com/fabon-f/sb2re/master/mod.ts";

const sampleTxt = `サンプル
[*** Online Scrapbox to Re:VIEW Converter]
 [* Scrapbox 記法]から [* Re:VIEW 記法]へ変換します
 \`sb2re\`を使用しています
  [fabon-f/sb2re https://github.com/fabon-f/sb2re]
`;

function App() {
  const { register, watch } = useForm();
  const watchInput = watch("input", sampleTxt);
  return (
    <div id="app">
      <div class="nav">
        <h1>sb2re-online: Online Scrapbox to Re:VIEW Converter</h1>
      </div>
      <div class="editor">
        <div class="editor_wrapper">
          <textarea value={watchInput} class="input" {...register("input")}></textarea>
        </div>
        <div class="editor_wrapper">
          <textarea value={scrapboxToReView(watchInput)} class="output"></textarea>
        </div>
      </div>
    </div>
  );
}

addEventListener("DOMContentLoaded", () => ReactDOM.render(<App />, document.querySelector("#main")));
