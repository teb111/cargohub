const submit = document.querySelector("#tracking-form-submit");
const trackingResults = document.querySelector("#section-tracking-result");
const form = document.querySelector("#searchform");
const input = document.querySelector("#s");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// trackingResults.style.display = "none";

submit.addEventListener("click", () => {
  if (input.value != "") {
    trackingResults.style.display = "block";
    console.log(trackingResults.style.display);
  }
});
// jQuery(document).ready(function() {
// 	'use strict';
// 	jQuery('.popup-gmaps').magnificPopup({
// 		disableOn: 700,
// 		type: 'iframe',
// 		mainClass: 'mfp-fade',
// 		removalDelay: 160,
// 		preloader: false,
// 		fixedContentPos: false
// 	});
//  });
