
var debugging = false;


function enableDebugCSS() {
    const debugCSSLink = document.createElement('Link');
    debugCSSLink.setAttribute('rel', 'stylesheet');
    debugCSSLink.setAttribute('href', '/src/dev/debug.css');
    debugCSSLink.setAttribute('id', 'debugcss');
    document.getElementsByTagName('head')[0].appendChild(debugCSSLink);
}

function disableDebugCSS() {
    document.getElementById('debugcss').remove();
}

function handleShortcut(event) {
    if (event.key === "d") {
        event.preventDefault();
        if (debugging) {
            disableDebugCSS();
            debugging = false;
        } else {
            enableDebugCSS();
            debugging = true;
        }
    }
}

document.addEventListener("keydown", handleShortcut);