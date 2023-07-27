"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticles = void 0;
console.log("hi articleSSS");
function getArticles(url) {
    return fetch(url)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}
exports.getArticles = getArticles;
let articlesHTML = document.getElementById("articles");
let articlesList = [];
getArticles('http://localhost:3000/posts')
    .then((x) => {
    articlesList = [...x];
    console.log(articlesList);
    let htmlContent = "";
    for (let i = 0; i < articlesList.length; i++) {
        htmlContent += `<li><a href="http://127.0.0.1:5500/articlePage.html" id=${articlesList[i].id} class="articleTitle">${articlesList[i].title}</a><p class="articleAuthor">By ${articlesList[i].author}</p></li>`;
        //htmlContent += `<li class="articleTitle"><p id=${articlesList[i].id}>${articlesList[i].title}</p><p class="articleAuthor">By ${articlesList[i].author}</p></li>`;
    }
    articlesHTML.innerHTML = htmlContent;
})
    .catch(error => {
    console.log(error);
});
