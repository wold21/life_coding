var Body = {
  setColor: function (color) {
    // document.querySelector("body").style.color = color;
    $("body").css("color", color);
  },
  setBackgroundColor: function (color) {
    $("body").css("backgroundColor", color);
  },
};
var Links = {
  setColor: function (color) {
    // var aList = document.querySelectorAll("a");
    // var i = 0;
    // while (i < aList.length) {
    //   aList[i].style.color = color;
    //   i++;
    // }

    // jquery
    // 이 웹페이지에 있는 a태그를 제이쿼리로 컨트롤하겠다.
    $("a").css("color", color);
    $("li").css("color", color);
  },
};

function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "Night") {
    Body.setBackgroundColor("black");
    Body.setColor("rgb(43, 202, 64)");
    self.value = "Day";
    Links.setColor("powderblue");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "Night";
    Links.setColor("black");
  }
}
