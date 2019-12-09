function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

var swipeCard = function(index) {
  setInterval(function() {
    var lessonLearned = httpGet(
      "https://mxkraus.de/api/trello/lesson-learned/demo/"
    );
    var lessons = JSON.parse(lessonLearned);

    if (index > lessons.length - 1) {
      index = 0;
    }

    var _this = $("#screen1 .top");

    _this.addClass("trigger");

    setTimeout(function() {
      _this.removeClass("top");
      _this.text("");
      _this.addClass("bottom");
      _this.hide();
      _this.removeClass("trigger");
    }, 1000);

    setTimeout(function() {
      _this.show();
    }, 1000);

    setTimeout(function() {
      console.log();
      _this.html("<span class='myClass'>" + lessons[index] + "</span>");
      _this.removeClass("midJ");
      _this.addClass("top");
      index++;
    }, 2100);
  }, 10000);
};

swipeCard(0);
