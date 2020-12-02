// ==UserScript==
// @name         DragonRip Market Item Names
// @namespace    https://dragonrip.com/game/
// @version      0.2
// @description  Display item names in the market list
// @author       Joe
// @match        https://dragonrip.com/game/market*
// @match        https://www.dragonrip.com/game/market*
// @run-at document-start
// @grant        none
// @downloadURL https://raw.githubusercontent.com/rambopfc/DragonripMarketItemNames/master/DRMarketItemNames.js
// @updateURL https://raw.githubusercontent.com/rambopfc/DragonripMarketItemNames/master/DRMarketItemNames.js
// ==/UserScript==

window.addEventListener('load', function() {
    var title
	//get all objects in the table of resources
    var imagehref = document.getElementsByClassName("blockex");
    Array.from(imagehref).forEach(function(element, index, array){
		//item name
        title = element.parentElement.getAttribute('title');
		//checks to see if it is an item in the list and not in the players bag, then checks that it is not anything on the right side
        if (element.parentElement.parentElement.nodeName == "TD" && element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.className != "burbul"){
		//add the item name to the correct section, and remove some empty space around it
            var para = document.createElement("p");
            var node = document.createTextNode(title);
            para.style.marginTop = ".5em";
            para.style.marginBottom = ".5em";
            para.appendChild(node);
            element.parentElement.parentElement.appendChild(para);

        }
    }
    );




}, false);
