// Function to encrypt a message using a Caesar cipher
function encrypt(message, shift) {
    var result = "";
    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            result += message.charAt(i);
        }
    }
    return result;
}

// Function to decrypt a message using a Caesar cipher
function decrypt(message, shift) {
    var result = "";
    for (var i = 0; i < message.length; i++) {
        var charCode = message.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode((charCode - 65 - shift + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode((charCode - 97 - shift + 26) % 26 + 97);
        } else {
            result += message.charAt(i);
        }
    }
    return result;
}

// Function to handle the form submission
function handleSubmit(event) {
    event.preventDefault();
    var message = document.getElementById("message").value;
    var shift = parseInt(document.getElementById("shift").value);
    var action = document.querySelector('input[name="action"]:checked').value;
    var result;
    if (action === "encrypt") {
        result = encrypt(message, shift);
    } else {
        result = decrypt(message, shift);
    }
    document.getElementById("result").textContent = result;
}