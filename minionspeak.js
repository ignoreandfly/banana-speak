var btnTranslate = document.querySelector("#btn-translate");
var textArea = document.querySelector("#btn-text");
var output = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/minion.json"

function finalURL(text) {
    return url + "?text=" + text
}

function clickHandler() {
    fetch(finalURL(textArea.value))
        .then(response => response.json())
        .then(json => {
                var translatedText = json.contents.translated;
                output.innerText = translatedText;
            }

        )
}
btnTranslate.addEventListener("click", clickHandler)