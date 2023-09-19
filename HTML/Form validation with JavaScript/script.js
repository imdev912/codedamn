const resetErrorMsg = () => {
    const errorMsg = document.getElementById("error-msg");

    if (errorMsg instanceof HTMLDivElement) {
        errorMsg.innerText = "";
    }
}

const showErrorMsg = () => {
    const errorMsg = document.getElementById("error-msg");

    if (errorMsg instanceof HTMLDivElement) {
        errorMsg.innerText = "Name is required";
    }
}

const validateForm = (event) => {
    resetErrorMsg();

    const nameInput = document.getElementById("name-input");

    if (nameInput instanceof HTMLInputElement) {
        const name = nameInput.value;

        if (name === "") {
            event.preventDefault();
            showErrorMsg();
        }
    }
}

(() => {
    const submit = document.getElementById("submit-button");

    if (submit instanceof HTMLButtonElement) {
        submit.addEventListener("click", (event) => validateForm(event));
    }
})();