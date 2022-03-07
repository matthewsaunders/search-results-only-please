'use strict';

function removeElem(elem) {
  elem.parentNode.removeChild(elem);
}

function hideElem(elem) {
  elem.style.display = "none";
}

function deadifySearchResults(elems, fn) {
  if (elems.length) {
    elems.forEach(elem => fn(elem));
  }

  console.log('You can breathe easy now. The big, bad ads have disappeared from your search results!');
}
