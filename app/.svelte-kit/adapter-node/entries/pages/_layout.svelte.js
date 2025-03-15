import "clsx";
import { c as pop, p as push } from "../../chunks/index.js";
import PocketBase from "pocketbase";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  new PocketBase().authStore.isValid;
  $$payload.out += `<div class="min-h-screen w-full">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _layout as default
};
