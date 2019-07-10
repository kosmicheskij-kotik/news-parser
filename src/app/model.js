import View from './view';

const minDisplayedNews = 5;
const maxDisplayedNews = 40;
const loadButtonSelector = '#loadMore';

export default class Model{
    constructor(){  
        this.newsDisplayed = 0;
        this.view = new View();
    }

    processNewsResources(data){
      for (let i = 0; i < data.sources.length; i++) {
        document.querySelector('#resources').innerHTML +=
         `<button class="btn btn__sources" id="` + data.sources[i].id + `">` 
         + data.sources[i].name + `</button>`;
      } 
    }

    processNewsBySearch(data){
      const newsCount = data.articles.length;
      const newsItems = document.querySelector('#news');
      newsItems.innerHTML = '';
     
      if(newsCount == 0){
          document.querySelector('#error-block').style.display = 'unset';  
          document.querySelector(loadButtonSelector).style.display = 'none';
          return;
      }      

      const renderedItems = this.view.renderItems(newsCount, data.articles);
      newsItems.appendChild(renderedItems);

      if(newsCount < minDisplayedNews)
          document.querySelector(loadButtonSelector).style.display = 'none';
      else
          document.querySelector(loadButtonSelector).style.display = 'unset';
      this.newsDisplayed = newsCount;  
    }


    processAppendNews(data){
      const newsCount = data.articles.length;
      if(newsCount == 0){
          document.querySelector(loadButtonSelector).style.display = 'none';
          return;
      }    

      const renderedItems = this.view.renderItems(newsCount, data.articles);
      const newsItems = document.querySelector('#news');
      newsItems.appendChild(renderedItems);

      this.newsDisplayed += newsCount;

      if(newsCount < minDisplayedNews || this.newsDisplayed == maxDisplayedNews)
         document.querySelector(loadButtonSelector).style.display = 'none';
    }
}
