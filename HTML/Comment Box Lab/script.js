const getComment = () => {
    const commentInput = document.getElementById("comment");

    if (commentInput instanceof HTMLTextAreaElement) {
        const comment = commentInput.value;
        return comment;
    }

    return "";
}

const clearComment = () => {
    const commentInput = document.getElementById("comment");

    if (commentInput instanceof HTMLTextAreaElement) {
        commentInput.value = "";
    }
}

const showComment = (comment) => {
    const commentList = document.getElementById("commentList");

    if (commentList instanceof HTMLUListElement) {
        const commentItem = document.createElement("li");
        commentItem.innerText = comment;
        commentList.appendChild(commentItem);
    }
}

const setErrorMsg = (value) => {
    const error = document.getElementById("error");

    if (error instanceof HTMLParagraphElement) {
        error.innerText = value;
    }
}

const showErrorMsg = () => {
    setErrorMsg("Error: Comment cannot be empty.");
}

const resetErrorMsg = () => {
    setErrorMsg("");
}

const handleSubmit = (event) => {
    event.preventDefault();
    resetErrorMsg();

    const comment = getComment();

    if (comment === "") {
        showErrorMsg();
    } else {
        showComment(comment);
        clearComment();
    }
}

(() => {
    const submit = document.getElementById("submit");

    if (submit instanceof HTMLButtonElement) {
        submit.addEventListener("click", (event) => handleSubmit(event));
    }
})();