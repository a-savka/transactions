import jsdom from 'jsdom';
const doc = jsdom.jsdom("<!doctype html><html><body></body></html>");

const win = doc.defaultView;

global.document = doc;
global.window = win;

for(const key of Object.keys(window)) {
  if(!(key in global)) {
    global[key] = window[key];
  }
}
