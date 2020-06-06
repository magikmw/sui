var data_links = "config/links.json";
var data_apps = "config/apps.json";
var data_providers = "config/providers.json";

var bookmarks = JSON.parse(localStorage.getItem("links"));

function handleLinks(data) {
  var mysource = document.getElementById("links-template").innerHTML;
  var mytemplate = Handlebars.compile(mysource);
  var myresult = mytemplate(data)
  document.getElementById("links").innerHTML = myresult;
}

document.addEventListener("DOMContentLoaded", function () {
  if (!bookmarks) {
      fetch(data_links)
          .then(response => response.json())
          .then(function (data) {
              handleLinks(data);
              localStorage.setItem("links", JSON.stringify(data));
          });
  } else {
      handleLinks(bookmarks);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  fetch(data_apps)
  .then( response => response.json())
  .then(
    function (data) {
      var mysource = document.getElementById("apps-template").innerHTML;
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      document.getElementById("apps").innerHTML = myresult;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  fetch(data_providers)
  .then( response => response.json())
  .then(
    function (data) {
      var mysource = document.getElementById("providers-template").innerHTML;
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      document.getElementById("providers").innerHTML = myresult;
    });
});
