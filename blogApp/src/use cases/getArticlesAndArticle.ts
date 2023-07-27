import { Article } from "../entities/article";
console.log("hi articleSSS")
export function getArticles<T>(url: string): Promise<T> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
      })
  }

function getArticle<T>(url: string): Promise<T> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
      })
  }

let articlesHTML = document.getElementById("articles");
let articlesList: Article[] = [];

getArticles<Article[]>('http://localhost:3000/posts')
  .then((x) => {
    articlesList = [...x];
    console.log(articlesList);
    let htmlContent = "";
    for (let i = 0; i < articlesList.length; i++) {
        htmlContent += `<li class="articleTitle"><p id=${articlesList[i].id}>${articlesList[i].title}</p><p class="articleAuthor">
        By ${articlesList[i].author}</p><button id="readArticleButton_${articlesList[i].id}" class="button">Read</button></li>`;
    }
    articlesHTML.innerHTML = htmlContent;

    for (let i = 0; i < articlesList.length; i++) {
        document.getElementById(`readArticleButton_${articlesList[i].id}`).addEventListener("click", function() {
            const overlayArticle = document.getElementById("overlayArticle");
            const articlesDiv = document.getElementById("articles");
            const articleDiv = document.getElementById("modalArticle");
            console.log(articlesDiv.children);
            const articleItemList = articlesDiv.querySelector("li");
            console.log(articleItemList);
            const articleLink = articleItemList.querySelector("p");
            console.log(articleLink.innerText);
            const articleId = articleLink.getAttribute("id");
            console.log(articleId)
            
            getArticle<Article>(`http://localhost:3000/posts/${articleId}`)
            .then((x) => {
                
                console.log(x);
        
                let htmlContent = "";
                htmlContent += `<h1 id="articleTitle">${x.title}</h1><br><br><p id="articleAuthor">By ${x.author}</p><br><br><p>${x.content}</p>`;
                
                articleDiv.innerHTML += htmlContent;
            })
            .catch(error => {
                console.log(error);
            });
            articleDiv.style.display = "block";
            overlayArticle.style.display = "block";
            
        });
        document.getElementById("articleXbutton").addEventListener("click", function() {
            const articleDiv = document.getElementById("modalArticle");
            const overlayArticle = document.getElementById("overlayArticle");
            articleDiv.style.display = "none";
            overlayArticle.style.display = "none";
          });
    }
        
    }
  )
  .catch(error => {
    console.log(error);
  });

  

