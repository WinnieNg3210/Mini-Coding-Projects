
function addVowel() {
    var textValue = document.getElementById('inputText').value;
    var vowels = 'aeiouAEIOU';
    var vowelCount = 0;

    for (i=0; i < textValue.length; i++) {
        if (vowels.indexOf(textValue[i]) !== -1 ) {
            vowelCount += 1;
        }
    }

    if (vowelCount > 1) {
        alert('There are ' + vowelCount + ' vowels in the text.')
    } else if(vowelCount === 1){
        alert('There is 1 vowel in the text.')
    } else {
        alert('There are no vowels in the text.')
    }
}
