// ==UserScript==
// @name         DragonRip Market Item Names
// @namespace    https://www.dragonrip.com/game/
// @version      0.1
// @description  Display item names in the market list
// @author       Joe
// @match        https://www.dragonrip.com/game/market*
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    var correcttable
    var imagehref = document.getElementsByClassName("blockex");
//     console.log(imagehref[0].parentElement);
//     console.log(imagehref[1].parentElement);
//     console.log(imagehref[2].parentElement);
//     console.log(imagehref[3].parentElement);
    Array.from(imagehref).forEach(function(element, index, array){
        console.log(element.parentElement.parentElement);
    }
    );

}, false);