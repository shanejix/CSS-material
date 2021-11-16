// create a bookmark and use this code as the URL, you can now toggle the css on/off
// thanks+credit: https://dev.to/gajus/my-favorite-css-hack-32g3


javascript: (function () {
  const styleEl = document.getElementById('css-layout-hack');
  if (styleEl) {
    document.head.removeChild(styleEl);
  } else {
    const style = document.createElement('style');
    style.id = 'css-layout-hack';
    style.innerHTML = `
      * { background:#000!important;color:#0f0!important;outline:solid #f00 1px!important; background-color: rgba(255,0,0,.2) !important; }
      * * { background-color: rgba(0,255,0,.2) !important; }
      * * * { background-color: rgba(0,0,255,.2) !important; }
      * * * * { background-color: rgba(255,0,255,.2) !important; }
      * * * * * { background-color: rgba(0,255,255,.2) !important; }
      * * * * * * { background-color: rgba(255,255,0,.2) !important; }
      * * * * * * * { background-color: rgba(255,0,0,.2) !important; }
      * * * * * * * * { background-color: rgba(0,255,0,.2) !important; }
      * * * * * * * * * { background-color: rgba(0,0,255,.2) !important; }</style>
    `;
    document.head.appendChild(style);
  }
})();