const API_KEY = "6ce8b0afed704347b0d603cdc9db3e14";

let articles;
async function getArticles(databases, keyWord, returnType, page) {
  var url =
    "https://newsapi.org/v2/everything?" +
    "domains=" +
    databases +
    "&pageSize=20" +
    "&sortBy=relevancy" +
    //'&from=' + yyyy + '-' + mm + '-' + dd +
    "&q=" +
    keyWord +
    "&page=" +
    page +
    "&apiKey=" +
    API_KEY;

  var req = new Request(url);

  const response = await fetch(req);

  const data = await response.json();

  if (data.articles && data.articles.length > 0) {
    const articleUrls = data.articles.map((article) => article[returnType]);
    return articleUrls;
  } else {
    return [];
  }
}