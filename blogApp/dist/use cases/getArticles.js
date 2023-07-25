"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getArticles(url) {
    return fetch(url)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}
let articlesHTML = document.getElementById("articles");
let articlesList = [];
/*
getArticles<Article[]>('http://localhost:3000/posts')
  .then((x) => {
    articlesList = [...x];
    console.log(articlesList);

    let htmlContent = "";
    for (let i = 0; i < articlesList.length; i++) {
      const listElementHTML = document.createElement("li");
      const titleHTML = document.createElement("h2");
      //const authorHTML = document.createElement("p");
      //listElementHTML.innerText = articlesList[i].title;
      //listElementHTML.append(`<a id="articleTitle">${articlesList[i].title}</a>
                             // <p id="articleAuthor">${articlesList[i].author}</p>`);
      //articlesHTML.appendChild(listElementHTML);
      
      htmlContent += `<li><a href="#" id="articleTitle">${articlesList[i].title}</a><p id="articleAuthor">${articlesList[i].author}</p></li>`;
  }
    articlesHTML.innerHTML = htmlContent;
  )
  .catch(error => {
    console.log(error);
  })
*/
getArticles('http://localhost:3000/posts')
    .then((x) => {
    articlesList = [...x];
    console.log(articlesList);
    let htmlContent = "";
    for (let i = 0; i < articlesList.length; i++) {
        htmlContent += `<li><a href="#" id="articleTitle">${articlesList[i].title}</a><p id="articleAuthor">By ${articlesList[i].author}</p></li>`;
    }
    articlesHTML.innerHTML = htmlContent;
})
    .catch(error => {
    console.log(error);
});
