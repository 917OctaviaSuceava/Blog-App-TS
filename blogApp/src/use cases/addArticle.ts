document.getElementById("addButton").addEventListener("click", function() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
});

document.getElementById("Xbutton").addEventListener("click", function() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
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
  