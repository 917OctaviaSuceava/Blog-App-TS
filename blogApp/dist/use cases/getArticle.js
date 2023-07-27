"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hi article");
function getArticle(url) {
    return fetch(url)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}
/*
const articleDiv = document.getElementById("article");
const articles = document.getElementsByClassName("articleTitle");
const listItems = Array.from(articles);
console.log(listItems)

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    
    const articleInfo = item.querySelector("p");
    const articleId = articleInfo.getAttribute("id");
    console.log(articleId)
    getArticle<Article>(`http://localhost:3000/posts/${articleId}`)
    .then((x) => {
        console.log(x);
        let htmlContent = "";
        htmlContent += `<h1 id="articleTitle">${x.title}</h1><br><br><p id="articleAuthor">By ${x.author}</p><br><br><p>${x.content}</p>`;
        articleDiv.innerHTML = htmlContent;
    })
    .catch(error => {
        console.log(error);
    });
  });
});*/
/*
const listItems = document.querySelectorAll("#articles li");
const articleDiv = document.getElementById("article");
listItems.forEach(item => {
    item.addEventListener("click", function() {
      const articleLink = item.querySelector("a");
      console.log(articleLink.innerText);
      const articleId = articleLink.getAttribute("id");
      console.log(articleId)
        getArticle<Article>(`http://localhost:3000/posts/${articleId}`)
      .then((x) => {
          
          console.log(x);

          let htmlContent = "";
          htmlContent += `<h1 id="articleTitle">${x.title}</h1><br><br><p id="articleAuthor">By ${x.author}</p><br><br><p>${x.content}</p>`;
          
          articleDiv.innerHTML = htmlContent;
      })
      .catch(error => {
          console.log(error);
      });
      console.log("Clicked item: " + item.textContent);
    });
  });*/
document.getElementById("readArticleButton").addEventListener("click", function () {
    const articlesDiv = document.getElementById("articles");
    const articleDiv = document.getElementById("article");
    console.log(articlesDiv.children);
    const articleItemList = articlesDiv.querySelector("li");
    console.log(articleItemList);
    const articleLink = articleItemList.querySelector("a");
    console.log(articleLink.innerText);
    const articleId = articleLink.getAttribute("id");
    console.log(articleId);
    //const articleModal = document.getElementById("articleModal");
    getArticle(`http://localhost:3000/posts/${articleId}`)
        .then((x) => {
        console.log(x);
        let htmlContent = "";
        htmlContent += `<h1 id="articleTitle">${x.title}</h1><br><br><p id="articleAuthor">By ${x.author}</p><br><br><p>${x.content}</p>`;
        articleDiv.innerHTML = htmlContent;
    })
        .catch(error => {
        console.log(error);
    });
});
