'use strict';

function pruneAds() {
  var elems = [...document.querySelectorAll('.results--ads')];
  var hidden = elems.filter(y => y.style.display === "none");

  // Keep calling this function until all the ad elements are hidden
  if (elems.length !== hidden.length) {
    deadifySearchResults(elems, hideElem);
    setTimeout(pruneAds, 500);
  }
}

pruneAds();
