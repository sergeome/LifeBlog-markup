lifeBlog = (function ($) {
  var o = {};

  //Tabs Switcher
  o.showTabs = function () {
    var tabContent = $(".tab-panel");
    var tabLinks = $(".tabs-navigation__item");

    function openTab(event) {

      var indexOfTargetTab;
      var clickedTab = event.currentTarget;

      //Get Index of clicked tab
      for (var z = 0; z < tabLinks.length; z++) {
        if (tabLinks[z] === clickedTab) {
          indexOfTargetTab = z;
          break;
        }
      }

      //Hide all tabs
      for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].className = "tab-panel hidden";
      }

      //Assign Default Class to All Tab Links
      for (var j = 0; j < tabLinks.length; j++) {
        tabLinks[j].className = "tabs-navigation__item";
      }

      //Enable clicked tab and highlighting tab link using its index
      $(tabLinks[indexOfTargetTab]).toggleClass("tabs-navigation__item--active");
      $(tabContent[indexOfTargetTab]).toggleClass("hidden");
    }

    //Add "click" event listener to each tab
    function addEventListeners() {
      for (var j = 0; j < tabLinks.length; j++) {
        $(tabLinks[j]).on("click", this, openTab);
      }
    }

    //Applying default configuration
    function openDefaultTab() {
      //hide all tabs
      for (var i = 0; i < tabContent.length; i++) {
        $(tabContent[i]).toggleClass("hidden");
      }

      //Show first tab
      $(tabLinks[0]).toggleClass("tabs-navigation__item--active");
      $(tabContent[0]).toggleClass("hidden");
    }

    addEventListeners();
    openDefaultTab();
  };

  o.mobileNav = function () {
    var mobileNavSwitcher = $(".mobile-nav");
    var topNavList = $(".top-navigation-list");

    function toggleMobileNav(event) {
      var mobileMenu = event.currentTarget;

      //If Mobile menu is opened (i.e. has mobile-nav--expanded class)
      if ($(mobileMenu).hasClass('mobile-nav--expanded')) {
        //Animate to slow hide it smoothly
        $(mobileMenu).animate({
          width: "50px",
          marginRight: "30px"
        }, 300, function () {
          //When animation is finished remove class
          $(this).removeClass('mobile-nav--expanded');
          $(this).removeAttr('style');
        });
        //And also hide navigation list smoothly
        $(topNavList).animate({
          width: "0",
          right: "30px"
        }, 300 , function () {
          $(topNavList).css("display", "none");
        });
      } else {
        //If Mobile menu isn't opened (i.e. doesn't have mobile-nav--expanded class)
        //Smoothly add it
        $(mobileMenu).css("border-radius", "30px 0 0 30px");
        $(mobileMenu).animate({
          width: "100%",
          marginRight: "0"
        }, 300, function () {
          $(this).addClass('mobile-nav--expanded');
          $(this).removeAttr('style');
        });
        //Get Height of the body in order to expand navigation list full screen
        //Set CSS for navigation list
        $(topNavList).css("display", "block");
        //Show navigation list smoothly
        $(topNavList).animate({
          width: "80%",
          right: "0"
        }, 300);
      }
    }

    //Add "click" Event Listener to the Mobile Menu button
    mobileNavSwitcher.on("click", this, toggleMobileNav);
  };

  return o;
})($);

$(document).ready(function () {
  lifeBlog.showTabs();
  lifeBlog.mobileNav();
});