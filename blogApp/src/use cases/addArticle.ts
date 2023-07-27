
const modal = document.getElementById("modal");
const modalArticle = document.getElementById("modalArticle");
const overlay = document.getElementById("overlay");
const overlayArticle = document.getElementById("overlayArticle");
document.getElementById("addButton").onclick = () => {
  modal.style.display = "block";
  overlay.style.display = "block";
  
}

document.getElementById("Xbutton").addEventListener("click", function() {
    modal.style.display = "none";
    overlay.style.display = "none";
});






window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        overlay.style.display = "none";
        modalArticle.style.display = "none";
        overlayArticle.style.display = "none";
    }
});

document.getElementById("submitButton").addEventListener("click", function () {
    const form = document.getElementById("data") as HTMLFormElement;
    const formData = new FormData(form);
    const formDataObject: { [key: string]: string } = {};

    formData.forEach((value, key) => {
        formDataObject[key] = value as string;
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
        console.error( error);
      });
  });
  