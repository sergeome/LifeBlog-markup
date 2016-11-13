lifeBlog = (function ($) {
  var o = {};

  o.showTabs = function () {
    var tabContent = $(".tab-panel");
    var tabLinks = $(".tabs-navigation__item");

    function openTab(event) {

      var indexOfTargetTab;
      var clickedTab = event.currentTarget;


      for (var z = 0; z < tabLinks.length; z++) {
        if (tabLinks[z] === clickedTab) {
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

      $(tabLinks[indexOfTargetTab]).toggleClass("tabs-navigation__item--active");
      $(tabContent[indexOfTargetTab]).toggleClass("hidden");
    }

    function addEventListeners() {

      for (var j = 0; j < tabLinks.length; j++) {
        $(tabLinks[j]).on("click", this, openTab);
      }

      for (var i = 0; i < tabContent.length; i++) {
        $(tabContent[i]).toggleClass("hidden");
      }
    }

    function displayFirstTabByDefault() {
      $(tabLinks[0]).toggleClass("tabs-navigation__item--active");
      $(tabContent[0]).toggleClass("hidden");
    }

    addEventListeners();
    displayFirstTabByDefault();
  };

  o.mobileNav = function () {
    var mobileNavSwitcher = $(".mobile-nav");

    function toggleMobileNav(event) {
      var mobileMenu = event.currentTarget;
      if ($(mobileMenu).hasClass('mobile-nav--expanded')) {
        $(mobileMenu).animate({
          width: "50"
        }, 300, function () {
          $(this).removeClass('mobile-nav--expanded');
        });
      } else {
        $(mobileMenu).addClass('mobile-nav--expanded').animate({
          width: "100%"
        }, 300);
      }
    }

    mobileNavSwitcher.on("click", this, toggleMobileNav);
  };

  return o;
})($);

$(document).ready(function () {
  lifeBlog.showTabs();
  lifeBlog.mobileNav();
});