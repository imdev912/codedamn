const changeBoxColor = () => {
    document.documentElement.style.setProperty("--primaryColor", "red");
};

(() => {
    const box = document.getElementById("box");

    if (box instanceof HTMLDivElement) {
        box.addEventListener("click", changeBoxColor);
    }
})();