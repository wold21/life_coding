var Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};
var Links = {
  setColor: function (color) {
    var aList = document.querySelectorAll("a");
    var i = 0;
    while (i < aList.length) {
      aList[i].style.color = color;
      i++;
    }
  },
};

function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "Night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "Day";
    Links.setColor("powderblue");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "Night";
    Links.setColor("blue");
  }
}