// Function to display greeting
function greeting() {
    var name = document.getElementById("nameField").value;
    alert("Hello, " + name + "!");
    return false; // Prevent form submission
}

// Function to handle form submission
function submitForm() {
    var name = document.getElementById("nameField").value;
    var favoriteSong = document.getElementById("favoriteSong").value;
    alert("Hello, " + name + "! Your favorite Florence and the Machine song is: " + favoriteSong);
    return false; // Prevent form submission
}


// Function to validate input
function validateInput() {
    var name = document.getElementById("nameField").value;
    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }
    return true;
}
