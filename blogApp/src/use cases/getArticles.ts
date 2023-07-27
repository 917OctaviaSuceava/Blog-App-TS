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

/*
let item = document.getElementById(`item_${articlesList[i].id}`);
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
*/
let articlesHTML = document.getElementById("articles");
let articlesList: Article[] = [];

getArticles<Article[]>('http://localhost:3000/posts')
  .then((x) => {
    articlesList = [...x];
    console.log(articlesList);
    //const articleDiv = document.getElementById("article");
    let htmlContent = "";
    for (let i = 0; i < articlesList.length; i++) {
      htmlContent += `<li class="articleTitle"><p id=${articlesList[i].id}>${articlesList[i].title}</p><p class="articleAuthor">
      By ${articlesList[i].author}</p><button id="readArticleButton" class="button">Read</button></li>`;

      //htmlContent = `<li id=item_${articlesList[i].id} ><a href="http://127.0.0.1:5500/articlePage.html" id=${articlesList[i].id} class="articleTitle">${articlesList[i].title}</a>
      //<p class="articleAuthor">By ${articlesList[i].author}</p></li>`;
      articlesHTML.innerHTML += htmlContent;
      htmlContent = "";
      //htmlContent += `<li class="articleTitle"><p id=${articlesList[i].id}>${articlesList[i].title}</p><p class="articleAuthor">By ${articlesList[i].author}</p></li>`;
      //<button id="readArticleButton" class="button">Read</button>    
    }
    
    }
  )
  .catch(error => {
    console.log(error);
  });

/*getArticles<Article[]>('http://localhost:3000/posts')
  .then((x) => {
    articlesList = [...x];
    console.log(articlesList);
    const articlesHTML = document.getElementById("articles");
    const articleDiv = document.getElementById("article");

    for (let i = 0; i < articlesList.length; i++) {
      // Create the list item element
      const listItem = document.createElement("li");
      listItem.setAttribute("id", `item_${articlesList[i].id}`);
      
      // Create the anchor element
      const link = document.createElement("a");
      link.setAttribute("href", "http://127.0.0.1:5500/articlePage.html");
      link.setAttribute("id", String(articlesList[i].id));
      link.classList.add("articleTitle");
      link.textContent = articlesList[i].title;
      listItem.appendChild(link);
      
      // Create the paragraph element for author
      const authorParagraph = document.createElement("p");
      authorParagraph.classList.add("articleAuthor");
      authorParagraph.textContent = `By ${articlesList[i].author}`;
      listItem.appendChild(authorParagraph);
      articlesHTML.appendChild(listItem);
      // Add the click event listener to the list item
      listItem.addEventListener("click", function() {
        const articleLink = listItem.querySelector("a");
        console.log(articleLink.innerText);
        const articleId = articleLink.getAttribute("id");
        console.log(articleId);
        
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
        console.log("Clicked item: " + listItem.textContent);
      });
      
      // Append the list item to the unordered list
      
    }
    
    }
  )
  .catch(error => {
    console.log(error);
  });*/
 
  ////////////////////

