// ==UserScript==
// @name        巴哈別攔我
// @namespace   https://tampermonkey.net/
// @description 別攔我，讓我走
// @run-at      document-start
// @match       https://*.gamer.com.tw/*
// @grant       GM_openInTab
// @version     1.0
// @author      您的名字
// ==/UserScript==

(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    if (btn) {
      btn.click();
      console.log('走開!!別擋路! 自動跳轉');
    } else {
      console.error('未找到ID為#btn的按鈕。');
    }
  });
})();
