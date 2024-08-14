document.getElementById('encryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    if (/^[a-z]+$/.test(inputText)) {
        let encryptedText = encrypt(inputText);
        document.getElementById('resultText').textContent = `Texto cifrado: ${encryptedText}`;
    } else {
        alert('Por favor, ingresa solo letras minúsculas y sin caracteres especiales.');
    }
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    let inputText = document.getElementById('inputText').value;
    if (/^[a-z]+$/.test(inputText)) {
        let decryptedText = decrypt(inputText);
        document.getElementById('resultText').textContent = `Texto descifrado: ${decryptedText}`;
    } else {
        alert('Por favor, ingresa solo letras minúsculas y sin caracteres especiales.');
    }
});

document.getElementById('copyBtn').addEventListener('click', function() {
    let resultText = document.getElementById('resultText').textContent;
    let textToCopy = resultText.replace(/^Texto (cifrado|descifrado): /, ''); // Elimina "Texto cifrado:" o "Texto descifrado:"
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert('Mensaje copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar: ', err);
    });
});

function encrypt(text) {
    // Implementación básica de cifrado (ejemplo)
    return text.split('').reverse().join('');
}

function decrypt(text) {
    // Implementación básica de descifrado (ejemplo)
    return text.split('').reverse().join('');
}
