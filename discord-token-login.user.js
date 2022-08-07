// ==UserScript==
// @name        Discord Token Login
// @namespace   Discord Token Login
// @match       https://discord.com/login
// @grant       none
// @version     1.0
// @author      Sint0
// @description Login with Discord Token by clicking the QR Code at https://discord.com/login
// ==/UserScript==

function login(e) {
	setInterval(() => {
		window.webpackChunkdiscord_app.push([
			[Math.random()], {}, (req) => {
				for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
					if (m.default && m.default.setToken !== undefined) {
						return m.default.setToken(e)
					}
					if (m.setToken !== undefined) {
						return m.setToken(e)
					}
				}
			}
		]);
		console.log("%cWorked!", "font-size: 50px");
	}, 50), setTimeout(() => {
		window.location.reload()
	}, 2500)
}

function buttonlogin() {
	login(document.getElementsByClassName("inputDefault-3FGxgL input-2g-os5")[0].value)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
sleep(2000).then(() => {

var element;
(element = document.getElementsByClassName("transitionGroup-bPT0qU qrLogin-1ejtpI")[0]).addEventListener("click", los)
});
  

function los() {
	(element = document.getElementsByClassName("marginBottom8-emkd0_ button-1cRKG6 button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeLarge-3mScP9 fullWidth-fJIsjq grow-2sR_-F")[0]).addEventListener("click", buttonlogin), 
  (element = document.getElementsByClassName("marginBottom20-315RVT")[0]).parentElement.removeChild(element), 
  (element = document.getElementsByClassName("colorStandard-1Xxp1s size14-k_3Hy4 h5-2RwDNl title-3hptVQ defaultMarginh5-3Jxf6f")[0]).innerHTML = "Token", element.id = "Token", 
  (element = document.getElementsByClassName("transitionGroup-bPT0qU qrLogin-1ejtpI")[0]).parentElement.removeChild(element), 
  (element = document.getElementsByClassName("verticalSeparator-2r9gHa")[0]).parentElement.removeChild(element);
  
}
