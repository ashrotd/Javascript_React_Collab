var API_URL = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-15&sortBy=publishedAt&apiKey=API_KEY';

function getNewsData() {
        fetch(API_URL,{
        method : 'GET',
        }).
        then(response=> response.json()).
        then(data=>displayDataFromApi(data)).
        catch(function (error) {
            document.getElementById("loader").style.display= 'none';
            document.getElementById('error').style.display = 'block';
    });
}
function displayDataFromApi(data) {
    var html = '';
    data.articles.forEach(function (value) {
       html += `<a href=\`+value.url+\` target="_blank"><div style="margin-top: 20px">
            <div class="title">${value.title}</div>
            <img src=\`+value.urlToImage+\` class="image">
            <div class="news-fotter">
                <div>\`+value.source.name+\` : <br/> \`+value.author+\`
                </div>
                <div>\`+value.publishedAt+\`</div>
            </div>
            <div class="contnet">\`+value.content+\`</div>
        </div></a>\`;`
    });
}