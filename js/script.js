window.onload = () => {

    let loremSubmitBtn = document.getElementById('lorem-submit');
    let transformSubmitBtn = document.getElementById('transform-submit');

    let copyTriggers = [];
    copyTriggers.push(document.getElementById('text'));
    copyTriggers.push(document.getElementById('transformed-text'));

    copyTriggers.forEach((trigger) => {

        trigger.addEventListener('click', (e) => {

            e.preventDefault();

            copyText(e);

        })
    })

    loremSubmitBtn.addEventListener('click', function(event) {

        event.preventDefault();

        getDummyText();

        if (document.getElementById('transformed-text').innerHTML !== '') {
            
            getTransformedText();
            
        }

    });

    transformSubmitBtn.addEventListener('click', function(event) {

        event.preventDefault();

        getTransformedText();

    });

};

function getDummyText() {

    let length = document.getElementById('length').value;

    if (length <= 0) {

        alert('No text generated');
        
        return false;

    }

    getAjax(
        `ajax/get_text.php?function=getDummyText&parameter=${length}`,

        (reply) => {

            showDummyText(reply);

            showTransformationForm();

        }
    );

}

function showDummyText(text) {

    let dummyTextDiv = document.getElementById('fake-text');
    dummyTextDiv.classList.remove('hide');

    let dummyText = document.getElementById('text');
    dummyText.classList.remove('hide');
    dummyText.innerHTML = text;

}

function showTransformationForm() {

    document.getElementById('transform').classList.remove('hide');

}

function getTransformedText() {

    let text = document.getElementById('text').innerHTML;
    let operation = document.getElementById('operation').value;
    let length = document.getElementById('length').value;

    if (length <= 0) {

        alert('No text generated');
        
        return false;

    }

    getAjax(
        `ajax/get_text.php?function=getTransformedText&parameter=${text}&operation=${operation}`,

        (reply) => {

            showTransformedText(reply);

        }
        
    );

}

function showTransformedText(text) {

    let target = document.getElementById('transformed-text');
    target.classList.remove('hide');
    target.innerHTML = text;

    let transformedTextLabel = document.getElementById('transformed-label');
    transformedTextLabel.innerHTML = '<label>Your transformed text (click to copy)</label>';

}

function copyText(e) {

    let copyText = e.target.innerText;
    if (copyText == '') return;
    let textArea = document.createElement('textarea');
    
    textArea.value = copyText;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    if (document.execCommand('copy')) {
        
        document.body.removeChild(textArea);
        
        alert('copied');
    
    }
    else {
    
        alert('copy not successful');
    
    }

}

function getAjax(url, success) {

    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState > 3 && xhr.status == 200) {
            success(xhr.responseText)
        }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();

    return xhr;

}