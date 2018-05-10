$(document).ready(function () {
  $('.button-collapse').sideNav();

  $('.slider').slider({
    indicators: true,
    height: 640,
    transition: 600,
    interval: 5000
  });

  $('.autocomplete').autocomplete({
    data: {
      "PlayStation 4": null,
      "PlayStation 3": null,
      "PlayStation 2": null,
      "Tablet": null,
      "iPad Air": null,
      "iPad Air 2": null,
      "iPad 2017": null,
      "Desktop PC": null,
      "Laptop": null,
      "iPhone X": null,
      "iPhone 7": null,
      "iPhone 8": null,
    }
  });
  $('.scrollspy').scrollSpy();
});
