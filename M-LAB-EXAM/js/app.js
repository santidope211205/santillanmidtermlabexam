fetch('https://newsapi.org/v2/top-headlines?apiKey=01bf2ce6ef4041a0abde011839f26501&country=ph')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
}).catch(err => console.error(err));
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function() {

        var status = xhr.status;
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};
getJSON('https://newsapi.org/v2/top-headlines?apiKey=01bf2ce6ef4041a0abde011839f26501&country=ph',  function(err, data) {

    if (err != null) {
        console.error(err);
    } else {



            var nums = document.getElementById("reports");
            var listItem = nums.getElementsByTagName("li");

            for (var i in data.articles) {
            var output = "<div class='meta'>" +
                "<h2>" + data.articles[i].title + "</h2>" +
                "<p>" + data.articles[i].description + "</p>" +
                "</div>";
            var li = listItem[i];

  li.innerHTML = output;
}
    }
});