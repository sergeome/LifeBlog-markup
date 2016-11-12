var tabContent;
var tabLinks;

tabContent = document.getElementsByClassName("tab-panel");
tabLinks = document.getElementsByClassName("tabs-navigation__item");

function openTab(targetTab) {

  var indexOfTargetTab;

  for (var z = 0; z < tabLinks.length; z++) {
    if (tabLinks[z] === targetTab) {
      indexOfTargetTab = z;
      break;
    }
  }

  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].className = "tab-panel hidden";
  }

  for (var j = 0; j < tabLinks.length; j++) {
    tabLinks[j].className = "tabs-navigation__item";
  }

  tabLinks[indexOfTargetTab].className = "tabs-navigation__item tabs-navigation__item--active";
  tabContent[indexOfTargetTab].className = "tab-panel";
}

function openTabByDefault() {
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].className = "tab-panel hidden";
  }

  tabLinks[0].className = "tabs-navigation__item tabs-navigation__item--active";
  tabContent[0].className = "tab-panel";
}

openTabByDefault();