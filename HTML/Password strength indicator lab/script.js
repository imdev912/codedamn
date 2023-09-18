const checkPasswordStrength = () => {
    const password = document.getElementById("password");

    if (!(password instanceof HTMLInputElement)) {
        return false;
    }

    const value = password.value;
    const pswdLen = value.length;
    let strength = "Very Strong";

    if (pswdLen < 4) {
        strength = "Very Weak";
    } else if (pswdLen <= 7) {
        strength = "Weak";
    } else if (pswdLen <= 11) {
        strength = "Medium";
    } else if (pswdLen <= 15) {
        strength = "Strong";
    }

    const strengthClass = strength.toLowerCase().replace(" ", "-");
    password.className = strengthClass;

    const strengthIndicator = document.getElementById("strengthIndicator");

    if (strengthIndicator instanceof HTMLSpanElement) {
        strengthIndicator.innerText = strength;
        strengthIndicator.className = strengthClass;
    }
};

const init = () => {
    const password = document.getElementById("password");

    if (password instanceof HTMLInputElement) {
        password.addEventListener("input", checkPasswordStrength);
    }
}

init();