import { Article } from "../entities/article";
console.log("hi article")
function getArticle<T>(url: string): Promise<T> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
      })
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


document.addEventListener("DOMContentLoaded", function() {
    const articleDiv = document.getElementById("article");
    console.log(articleDiv.children);
    const articleItemList = articleDiv.querySelector("li");
    console.log(articleItemList);
    const articleLink = articleItemList.querySelector("a");
    console.log(articleLink.innerText);
    const articleId = articleLink.getAttribute("id");
    console.log(articleId)
    getArticle<Article>(articleId)
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