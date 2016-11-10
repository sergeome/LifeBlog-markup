var tabContent;
var tabLinks;

tabContent = document.getElementsByClassName("tab-panel");
tabLinks = document.getElementsByClassName("tab-link");

function openTab(targetTab) {

  var indexOfTargetTab;

  for (var z = 0; z < tabLinks.length; z++) {
    if (tabLinks[z] === targetTab) {
      indexOfTargetTab = z;
      break;
    }
  }

  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  for (var j = 0; j < tabLinks.length; j++) {
    tabLinks[j].className = "tab-link";
  }

  tabLinks[indexOfTargetTab].className += " active";
  tabContent[indexOfTargetTab].style.display = "block";
}

function openTabByDefault() {
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLinks[0].className += " active";
  tabContent[0].style.display = "block";
}

openTabByDefault();