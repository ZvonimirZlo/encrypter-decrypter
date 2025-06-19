
const descriptionButton = document.getElementById('descBtn');
const description = document.getElementById("description");

//Shows/hides text box with instructions
const showHideTextBox = () => {
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

descriptionButton.onclick = showHideTextBox;

window.onload = () => {
   description.style.display = "none";
}

