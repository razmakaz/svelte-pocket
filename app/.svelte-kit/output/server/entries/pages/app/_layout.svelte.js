import "clsx";
import { c as pop, p as push } from "../../../chunks/index.js";
import PocketBase from "pocketbase";
import "../../../chunks/client.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  let isAuthed = new PocketBase().authStore.isValid;
  if (isAuthed) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-[auto_1fr] md:grid-rows-1"><div class="h-full w-full bg-black">Sidebar</div> <div class="bg-base-100 min-h-screen">`;
    children($$payload);
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _layout as default
};
