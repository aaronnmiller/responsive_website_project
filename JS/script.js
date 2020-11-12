function hamburger() {
    var menu = document.getElementById("nav_list");
    if(menu.style.display === "block") {
      menu.style.display = "none";
      document.getElementById("main_title").style.padding= "40px 0px 0px 0px";
    }
    else {
      menu.style.display = "block";
      document.getElementById("main_title").style.padding= "0px 0px 0px 0px";
  } }