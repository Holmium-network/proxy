// ==UserScript==
// @name         CrackWare V5 (Bypass 2)
// @version      5
// @description  Hack for shellshockers with new bypass for 2021!
// @author       TDStuart
// @match        https://shellshock.io/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

// Please do not remove this or the credit to the creators of this hack. This hack took a long time to make, if you reupload this leave the credits to the creators.
/*
  Created By : TDStuart
  Thanks To :
    Cryo - Developer (Helped with a bunch of code)
    Sadly L. - Developer (Helped with a bunch of code + made the esp)
    Alt - Created the name (CrackWare)
    JakeJeeperjinks - Admin and Helper with Youtube / Discord

  CrackWare Discord : https://discord.gg/yBvxND6
*/

function loadCrackWare(){
  if (document.body){
    var script = document.createElement('script');
    script.src = `//5514modding.com/ss/5shellshock.min.js`;
    script.type = 'text/javascript';
    document.body.appendChild(script);
    let checkLoad = setInterval(function(){if (unsafeWindow.hack){unsafeWindow.onloadingcomplete();clearInterval(checkLoad);console.log(`%cCrackWare Successfully Loaded!`, 'color:red;font-family:monospace;font-size: 20px;font-weight: bold;');}}, 1);
    setTimeout(function(){if (!unsafeWindow.hack){alert(`CrackWare could not be loaded! Check if https://5514modding.com is down.`)}}, 10000);
  }else {
    setTimeout(loadCrackWare, 10);
  }
}
unsafeWindow.bypass = 'v2';

if (unsafeWindow.Loader.loaded[0]){
  // Loader already loading shellshockers use old loading method!
  console.warn(`ShellShock script already loading using old loader method.`);

  let load = function(){};
  let ocount = 0;
  let setload = false;
  Object.defineProperty(unsafeWindow, "onloadingcomplete", {get(){return load}, set(b){
    console.log(arguments, ocount, (unsafeWindow.hack)? true : false);
    ocount++;
    if (ocount>1){load = b; setload = true;}
    if (!setload){
        loadCrackWare();
    }
  }, configurable:false});

}else {
  // New loader method. Thanks <@!495120474179895306> for the idea!
  unsafeWindow.loadCrackWare = loadCrackWare;

  let origProps = Object.getOwnPropertyDescriptor(unsafeWindow.XMLHttpRequest.prototype, 'response');
  let origGet = origProps.get;
  Object.defineProperty(unsafeWindow.XMLHttpRequest.prototype, 'response', {...origProps, get: function(){
    if (this.responseURL.includes(`src/shellshock.js`)){
      return 'window.onloadingcomplete = window.loadCrackWare;';
    }else {
      return origGet.apply(this, arguments);
    }
  }})
}
