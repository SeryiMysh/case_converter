function toTitleCase(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("upper-case").addEventListener('click', function () {
    let textarea = document.getElementById('textarea');
    let textareaValue = textarea.value;

    textarea.value = "";
    textarea.value = textareaValue.toUpperCase();
})

document.getElementById("lower-case").addEventListener('click', function () {
    let textarea = document.getElementById('textarea');
    let textareaValue = textarea.value;

    textarea.value = "";
    textarea.value = textareaValue.toLowerCase();
})

document.getElementById("proper-case").addEventListener('click', function () {
    let textarea = document.getElementById('textarea');
    let textareaValue = textarea.value;
    let capitalizedWords = [];

    let textWords = textareaValue.split(' ');

    textWords.forEach((element) => {
        capitalizedWords.push(toTitleCase(element));
    });

    textarea.value = "";
    textarea.value = capitalizedWords.join(' ');
})

document.getElementById("sentence-case").addEventListener('click', function () {
    let textarea = document.getElementById('textarea');
    let textareaValue = textarea.value;
    let capitalizedSentences = [];

    let sentences = textareaValue.split(/\.\s|\!\s|\.\.\.\s|\?\s/);

    sentences.forEach((element) => {
        capitalizedSentences.push(toTitleCase(element));
    });

    console.log(capitalizedSentences);

    textarea.value = "";
    textarea.value = capitalizedSentences.join('. ');
})

document.getElementById('save-text-file').addEventListener('click', function () {
    let textareaValue = document.getElementById('textarea').value;

    download('text.txt', textareaValue.trim());
})