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
    tabContent[i].className = "tab-panel hidden";
  }

  for (var j = 0; j < tabLinks.length; j++) {
    tabLinks[j].className = "tab-link";
  }

  tabLinks[indexOfTargetTab].className = "tab-link active";
  tabContent[indexOfTargetTab].className = "tab-panel";
}

function openTabByDefault() {
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].className = "tab-panel hidden";
  }

  tabLinks[0].className = "tab-link active";
  tabContent[0].className = "tab-panel";
}

openTabByDefault();