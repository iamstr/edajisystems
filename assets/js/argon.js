/*!

=========================================================
* Argon Dashboard - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

//
// Layout
//



//
// Navbar
//

("use strict");

var Navbar = (function () {
  // Variables

  var $nav = $(".navbar-nav, .navbar-nav .nav");
  var $collapse = $(".navbar .collapse");
  var $dropdown = $(".navbar .dropdown");

  // Methods

  function accordion($this) {
    $this.closest($nav).find($collapse).not($this).collapse("hide");
  }

  function closeDropdown($this) {
    var $dropdownMenu = $this.find(".dropdown-menu");

    $dropdownMenu.addClass("close");

    setTimeout(function () {
      $dropdownMenu.removeClass("close");
    }, 200);
  }

  // Events

  $collapse.on({
    "show.bs.collapse": function () {
      accordion($(this));
    }
  });

  $dropdown.on({
    "hide.bs.dropdown": function () {
      closeDropdown($(this));
    }
  });
})();

//
// Navbar collapse
//

var NavbarCollapse = (function () {
  // Variables

  var $nav = $(".navbar-nav"),
    $collapse = $(".navbar .navbar-custom-collapse");

  // Methods

  function hideNavbarCollapse($this) {
    $this.addClass("collapsing-out");
  }

  function hiddenNavbarCollapse($this) {
    $this.removeClass("collapsing-out");
  }

  // Events

  if ($collapse.length) {
    $collapse.on({
      "hide.bs.collapse": function () {
        hideNavbarCollapse($collapse);
      }
    });

    $collapse.on({
      "hidden.bs.collapse": function () {
        hiddenNavbarCollapse($collapse);
      }
    });
  }

  var navbar_menu_visible = 0;

  $(".sidenav-toggler").click(function () {
    if (navbar_menu_visible == 1) {
      $("body").removeClass("nav-open");
      navbar_menu_visible = 0;
      $(".bodyClick").remove();
    } else {
      var div = '<div class="bodyClick"></div>';
      $(div)
        .appendTo("body")
        .click(function () {
          $("body").removeClass("nav-open");
          navbar_menu_visible = 0;
          $(".bodyClick").remove();
        });

      $("body").addClass("nav-open");
      navbar_menu_visible = 1;
    }
  });
})();

//
// Popover
//


//
// Scroll to (anchor links)
//

("use strict");

var ScrollTo = (function () {
  //
  // Variables
  //

  var $scrollTo = $(".scroll-me, [data-scroll-to], .toc-entry a");

  //
  // Methods
  //

  function scrollTo($this) {
    var $el = $this.attr("href");
    var offset = $this.data("scroll-to-offset")
      ? $this.data("scroll-to-offset")
      : 0;
    var options = {
      scrollTop: $($el).offset().top - offset
    };

    // Animate scroll to the selected section
    $("html, body").stop(true, true).animate(options, 600);

    event.preventDefault();
  }

  //
  // Events
  //

  if ($scrollTo.length) {
    $scrollTo.on("click", function (event) {
      scrollTo($(this));
    });
  }
})();

//
// Tooltip
//


//
// Form control
//

("use strict");

var FormControl = (function () {
  // Variables

  var $input = $(".form-control");

  // Methods

  function init($this) {
    $this
      .on("focus blur", function (e) {
        $(this)
          .parents(".form-group")
          .toggleClass("focused", e.type === "focus");
      })
      .trigger("blur");
  }

  // Events

  if ($input.length) {
    init($input);
  }
})();

//
// Google maps
//

