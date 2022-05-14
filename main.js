// ==UserScript==
// @name         Disable Fullscreen Scrolling on YouTube
// @namespace    https://www.youtube.com/
// @version      1.0
// @description  Disables scrolling while fullscreen on YouTube
// @author       Zack
// @match        https://www.youtube.com/*
// @grant none
// ==/UserScript==

if (window.top === window.self) { addJsNode(main) }

function main() {
  const observer = new MutationObserver(function (e) {
      let target = e[0].target;
      if(target.fullscreen && target.scrolling){
          target.scrolling = false;
      }
  });
  const target = document.querySelector('ytd-app');
  observer.observe(target, {attribue:true , attributeFilter: ["scrolling"]});
}

function addJsNode(func) {
  const scriptNode = document.createElement('script')
  scriptNode.type = 'text/javascript'
  scriptNode.textContent = '('+func.toString()+')()'

  const target = document.getElementsByTagName('head')[0] ||
                  document.body || document.documentElement
  target.appendChild(scriptNode)
}
