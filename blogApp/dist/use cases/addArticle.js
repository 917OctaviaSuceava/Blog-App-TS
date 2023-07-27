const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
document.getElementById("addButton").onclick = () => {
    modal.style.display = "block";
    overlay.style.display = "block";
};
document.getElementById("Xbutton").addEventListener("click", function () {
    modal.style.display = "none";
    overlay.style.display = "none";
});
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
        overlay.style.display = "none";
    }
});
document.getElementById("submitButton").addEventListener("click", function () {
    const form = document.getElementById("data");
    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    console.log(formDataObject);
    console.log(formDataObject.articleTitle);
    fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error("Response not ok!!");
        }
        return response.json();
    })
        .then((data) => {
        console.log(data);
    })
        .catch((error) => {
        console.error(error);
    });
});
