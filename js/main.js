
// Note to anyone reading this: the code for each park section is the same, just with different ID names
//--------------------------- CODE FOR MAIN MAP -------------------------------
let map = L.map('map').setView([29.626522, -82.295657], 10.99);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidHJleWVja2VyIiwiYSI6ImNrdzNxN3FyMjBkZ3kydG50cnhrNmE3OGYifQ.jhhgoiTOLUcO7O7VaZODsQ'
}).addTo(map);

for ( let i = 0; i < places.length; i++ ) {
  L.marker([ places[i].latitude, places[i].longitude ]).bindPopup( '<h3>' + places[i].location + '</h3>' + '<p>' + places[i].description + '</p>').addTo(map);
}
//end of primary map
//--------------------------- END OF CODE FOR MAIN MAP -------------------------------

//--------------------------- START OF ALL CODE FOR QUIZ -------------------------------

//quiz code sourced from https://codeactually.com/examples.html#buzzfeedadv
document.querySelector("#form1").onsubmit = function() {
  animalPref = parseInt(document.querySelector('input[name = "animal-preferences"]:checked').value);
  kidPref = parseInt(document.querySelector('input[name = "kid-preferences"]:checked').value);
  playPref = parseInt(document.querySelector('input[name = "playground-preferences"]:checked').value);
  amenitiesPref = parseInt(document.querySelector('input[name = "amenities-preferences"]:checked').value);
  pathPref = parseInt(document.querySelector('input[name = "path-preferences"]:checked').value);
  lengthPref = parseInt(document.querySelector('input[name = "length-preferences"]:checked').value);
  creekPref = parseInt(document.querySelector('input[name = "creek-preferences"]:checked').value);
  total= animalPref + kidPref + playPref + amenitiesPref + pathPref + lengthPref + creekPref;

  document.querySelector("#answer").innerHTML = total;
    if(total <= 21) {
      document.querySelector("#answer").innerHTML = "You got Depot Park!";
    }
    if(total >=22 && total <= 51) {
      document.querySelector("#answer").innerHTML = "You got Alfred A. Ring Park!";
    }
    if(total >=52 && total <= 62) {
      document.querySelector("#answer").innerHTML = "You got Loblolly Nature Woods Park!";
    }
    if(total >=63 && total <= 162) {
      document.querySelector("#answer").innerHTML = "You got Paynes Praire: Bolen Bluff Trail!";
    }
  return false; // required to not refresh the page; just leave this here

}// end the submit function

const quizClicker = document.querySelector('#quiz-clicker');
const quiz = document.querySelector('#quiz-content');

// hide the flora/fauna information div
quiz.style.display = 'none';

// make photos work as buttons
quizClicker.onclick = quizDivShowHide;

// this function runs each time button is clicked
function quizDivShowHide() {
  if (quiz.classList.contains('showing')) {
    // hide it
    quiz.style.display = 'none';
    // remove class
    quiz.classList.remove('showing');
  } else {
    // show it
    quiz.style.display = 'flex';
    // add class
    quiz.classList.add('showing');
  }
};

let quizDivClose = document.querySelector("#quiz-close");

quizDivClose.onclick = quizDivShowHide;


//--------------------------- END OF ALL CODE FOR QUIZ -------------------------------

//------------------------------ START OF CODE FOR PARK DIVS ----------------
// get elements from DOM, make variables
const alfredClicker = document.querySelector('#alfred-clicker');
const depotClicker = document.querySelector('#depot-clicker');
const loblollyClicker = document.querySelector('#loblolly-clicker');
const paynesClicker = document.querySelector('#paynes-clicker');
const alfred = document.querySelector('#alfred');
const depot = document.querySelector('#depot');
const loblolly = document.querySelector('#loblolly');
const paynes = document.querySelector('#paynes');

// make photos work as buttons
alfredClicker.onclick = alfredDivShowHide;
depotClicker.onclick = depotDivShowHide;
loblollyClicker.onclick = loblollyDivShowHide;
paynesClicker.onclick = paynesDivShowHide;

// this function runs each time button is clicked
function alfredDivShowHide() {
  if (alfred.classList.contains('showing')) {
    // hide it
    alfred.style.display = 'none';
    // remove class
    alfred.classList.remove('showing');
  } else {
    // show it
    alfred.style.display = 'block';
    depot.style.display = 'none';
    loblolly.style.display = 'none';
    paynes.style.display = 'none';
    // add class
    alfred.classList.add('showing');
  }
};

function depotDivShowHide() {
  if (depot.classList.contains('showing')) {
    // hide it
    depot.style.display = 'none';
    // remove class
    depot.classList.remove('showing');
  } else {
    // show it
    alfred.style.display = 'none';
    depot.style.display = 'block';
    loblolly.style.display = 'none';
    paynes.style.display = 'none';
    // add class
    depot.classList.add('showing');
  }
};

function loblollyDivShowHide() {
  if (loblolly.classList.contains('showing')) {
    // hide it
    loblolly.style.display = 'none';
    // remove class
    loblolly.classList.remove('showing');
  } else {
    // show it
    alfred.style.display = 'none';
    depot.style.display = 'none';
    loblolly.style.display = 'block';
    paynes.style.display = 'none';
    // add class
    loblolly.classList.add('showing');
  }
};

function paynesDivShowHide() {
  if (paynes.classList.contains('showing')) {
    // hide it
    paynes.style.display = 'none';
    // remove class
    paynes.classList.remove('showing');
  } else {
    // show it
    alfred.style.display = 'none';
    depot.style.display = 'none';
    loblolly.style.display = 'none';
    paynes.style.display = 'block';
    // add class
    paynes.classList.add('showing');
  }
};

let alfredDivClose = document.querySelector("#alfred-close");
let depotDivClose = document.querySelector("#depot-close");
let loblollyDivClose = document.querySelector("#loblolly-close");
let paynesDivClose = document.querySelector("#paynes-close");

alfredDivClose.onclick = alfredDivShowHide;
depotDivClose.onclick = depotDivShowHide;
loblollyDivClose.onclick = loblollyDivShowHide;
paynesDivClose.onclick = paynesDivShowHide;

let alfredOpen = document.querySelector("#open-alfred");
let depotOpen = document.querySelector("#open-depot");
let loblollyOpen = document.querySelector("#open-loblolly");
let paynesOpen = document.querySelector("#open-paynes");

alfredOpen.onclick = alfredDivShowHide;
depotOpen.onclick = depotDivShowHide;
loblollyOpen.onclick = loblollyDivShowHide;
paynesOpen.onclick = paynesDivShowHide;

//end of code for hiding divs

//------------------------------ END OF CODE FOR PARK DIVS ----------------

//------------------------------ START OF CODE FOR SPECIFIC PARK SECTIONS ----------------

//start of code for hiding alfred a. ring park animal divs

// get elements from DOM, make variables
const alfredClicker1 = document.querySelector('#alfred-photo1');
const alfredClicker2 = document.querySelector('#alfred-photo2');
const alfredClicker3 = document.querySelector('#alfred-photo3');
const alfredClicker4 = document.querySelector('#alfred-photo4');
const alfredAnimal1 = document.querySelector('#alfred-animal1');
const alfredAnimal2 = document.querySelector('#alfred-animal2');
const alfredAnimal3 = document.querySelector('#alfred-animal3');
const alfredAnimal4 = document.querySelector('#alfred-animal4');

// hide the flora/fauna information div
alfredAnimal1.style.display = 'none';
alfredAnimal2.style.display = 'none';
alfredAnimal3.style.display = 'none';
alfredAnimal4.style.display = 'none';

// make photos work as buttons
alfredClicker1.onclick = alfredHide;
alfredClicker2.onclick = alfredHide2;
alfredClicker3.onclick = alfredHide3;
alfredClicker4.onclick = alfredHide4;

// this function runs each time button is clicked
function alfredHide() {
  if (alfredAnimal1.classList.contains('showing')) {
    // hide it
    alfredAnimal1.style.display = 'none';
    // remove class
    alfredAnimal1.classList.remove('showing');
  } else {
    // show it
    alfredAnimal1.style.display = 'flex';
    alfredAnimal2.style.display = 'none';
    alfredAnimal3.style.display = 'none';
    alfredAnimal4.style.display = 'none';
    // add class
    alfredAnimal1.classList.add('showing');
  }
}

function alfredHide2() {
  if (alfredAnimal2.classList.contains('showing')) {
    // hide it
    alfredAnimal2.style.display = 'none';
    // remove class
    alfredAnimal2.classList.remove('showing');
  } else {
    // show it
    alfredAnimal1.style.display = 'none';
    alfredAnimal2.style.display = 'flex';
    alfredAnimal3.style.display = 'none';
    alfredAnimal4.style.display = 'none';
    // add class
    alfredAnimal2.classList.add('showing');
  }
}

function alfredHide3() {
  if (alfredAnimal3.classList.contains('showing')) {
    // hide it
    alfredAnimal3.style.display = 'none';
    // remove class
    alfredAnimal3.classList.remove('showing');
  } else {
    // show it
    alfredAnimal1.style.display = 'none';
    alfredAnimal2.style.display = 'none';
    alfredAnimal3.style.display = 'flex';
    alfredAnimal4.style.display = 'none';
    // add class
    alfredAnimal3.classList.add('showing');
  }
}

function alfredHide4() {
  if (alfredAnimal4.classList.contains('showing')) {
    // hide it
    alfredAnimal4.style.display = 'none';
    // remove class
    alfredAnimal4.classList.remove('showing');
  } else {
    // show it
    alfredAnimal1.style.display = 'none';
    alfredAnimal2.style.display = 'none';
    alfredAnimal3.style.display = 'none';
    alfredAnimal4.style.display = 'flex';
    // add class
    alfredAnimal4.classList.add('showing');
  }
}

let alfredClose = document.querySelector("#alfred-button1");
let alfredClose2 = document.querySelector("#alfred-button2");
let alfredClose3 = document.querySelector("#alfred-button3");
let alfredClose4 = document.querySelector("#alfred-button4");


alfredClose.onclick = alfredHide;
alfredClose2.onclick = alfredHide2;
alfredClose3.onclick = alfredHide3;
alfredClose4.onclick = alfredHide4;

//end of code for Alfred A. Ring park hiding divs

//-----------------------------------------------------

//start of Alfred A Ring Trail Map
let alfredMap = L.map('alfred-map').setView([29.670133, -82.347159], 15.95);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 26,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidHJleWVja2VyIiwiYSI6ImNrdzNxN3FyMjBkZ3kydG50cnhrNmE3OGYifQ.jhhgoiTOLUcO7O7VaZODsQ'
}).addTo(alfredMap);
let alfredFallenTree = 'images/alfred/alfred-fallen-tree.jpg',
    alfredFallenTreeBounds = [[29.67268438683019, -82.34694146047133], [29.672164387938917, -82.34611000280022]];
L.imageOverlay(alfredFallenTree, alfredFallenTreeBounds).addTo(alfredMap);

let alfredPlayground = 'images/alfred/alfred-playground.jpg',
    alfredPlaygroudBounds = [[29.67370913162509, -82.34815146047127], [29.673170488612055, -82.3472978162935]];
L.imageOverlay(alfredPlayground, alfredPlaygroudBounds).addTo(alfredMap);

let alfredFlowerGarden = 'images/alfred/alfred-flower-garden.jpg',
    alfredFlowerGardenBounds = [[29.67238642151266, -82.34815146047127], [29.671895066482602, -82.34729854512902]];
L.imageOverlay(alfredFlowerGarden, alfredFlowerGardenBounds).addTo(alfredMap);

//end of Alfred A Ring Trail Mapbox

//--------------------------- END OF ALL CODE FOR ALFRED -------------------------------

//--------------------------- START OF ALL CODE FOR DEPOT -------------------------------

//start of code for hiding alfred a. ring park animal divs

// get elements from DOM, make variables
const depotClicker1 = document.querySelector('#depot-photo1');
const depotClicker2 = document.querySelector('#depot-photo2');
const depotClicker3 = document.querySelector('#depot-photo3');
const depotClicker4 = document.querySelector('#depot-photo4');
const depotAnimal1 = document.querySelector('#depot-animal1');
const depotAnimal2 = document.querySelector('#depot-animal2');
const depotAnimal3 = document.querySelector('#depot-animal3');
const depotAnimal4 = document.querySelector('#depot-animal4');

// hide the flora/fauna information div
depotAnimal1.style.display = 'none';
depotAnimal2.style.display = 'none';
depotAnimal3.style.display = 'none';
depotAnimal4.style.display = 'none';

// make photos work as buttons
depotClicker1.onclick = depotHide;
depotClicker2.onclick = depotHide2;
depotClicker3.onclick = depotHide3;
depotClicker4.onclick = depotHide4;

// this function runs each time button is clicked
function depotHide() {
  if (depotAnimal1.classList.contains('showing')) {
    // hide it
    depotAnimal1.style.display = 'none';
    // remove class
    depotAnimal1.classList.remove('showing');
  } else {
    // show it
    depotAnimal1.style.display = 'flex';
    depotAnimal2.style.display = 'none';
    depotAnimal3.style.display = 'none';
    depotAnimal4.style.display = 'none';
    // add class
    depotAnimal1.classList.add('showing');
  }
}

function depotHide2() {
  if (depotAnimal2.classList.contains('showing')) {
    // hide it
    depotAnimal2.style.display = 'none';
    // remove class
    depotAnimal2.classList.remove('showing');
  } else {
    // show it
    depotAnimal1.style.display = 'none';
    depotAnimal2.style.display = 'flex';
    depotAnimal3.style.display = 'none';
    depotAnimal4.style.display = 'none';
    // add class
    depotAnimal2.classList.add('showing');
  }
}

function depotHide3() {
  if (depotAnimal3.classList.contains('showing')) {
    // hide it
    depotAnimal3.style.display = 'none';
    // remove class
    depotAnimal3.classList.remove('showing');
  } else {
    // show it
    depotAnimal1.style.display = 'none';
    depotAnimal2.style.display = 'none';
    depotAnimal3.style.display = 'flex';
    depotAnimal4.style.display = 'none';
    // add class
    depotAnimal3.classList.add('showing');
  }
}

function depotHide4() {
  if (depotAnimal4.classList.contains('showing')) {
    // hide it
    depotAnimal4.style.display = 'none';
    // remove class
    depotAnimal4.classList.remove('showing');
  } else {
    // show it
    depotAnimal1.style.display = 'none';
    depotAnimal2.style.display = 'none';
    depotAnimal3.style.display = 'none';
    depotAnimal4.style.display = 'flex';
    // add class
    depotAnimal4.classList.add('showing');
  }
}

//this allows users to hit the close button, they can also cycle through divs or click the image again
let depotClose = document.querySelector("#depot-button1");
let depotClose2 = document.querySelector("#depot-button2");
let depotClose3 = document.querySelector("#depot-button3");
let depotClose4 = document.querySelector("#depot-button4");


depotClose.onclick = depotHide;
depotClose2.onclick = depotHide2;
depotClose3.onclick = depotHide3;
depotClose4.onclick = depotHide4;

//end of code for Depot park hiding divs

//start of depot trail/amenities map
let depotMap = L.map('depot-map').setView([29.642907, -82.322417], 16.13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidHJleWVja2VyIiwiYSI6ImNrdzNxN3FyMjBkZ3kydG50cnhrNmE3OGYifQ.jhhgoiTOLUcO7O7VaZODsQ'
}).addTo(depotMap);

let depotTree = 'images/depot/depot-tree.jpg',
    depotTreeBounds = [[29.64222782785769, -82.32357781629415], [29.641717828708114, -82.32277854512971]];
L.imageOverlay(depotTree, depotTreeBounds).addTo(depotMap);

let depotLake = 'images/depot/depot-lake.jpg',
    depotLakeBounds = [[29.643299852045008, -82.32253927396522], [29.642817826873948, -82.32175073163636]];
L.imageOverlay(depotLake, depotLakeBounds).addTo(depotMap);

let depotTurtles = 'images/depot/depot-turtles.jpg',
    depotTurtlesBounds = [[29.644207824556187, -82.32422364697862], [29.643669851530838, -82.32337073163642]];
L.imageOverlay(depotTurtles, depotTurtlesBounds).addTo(depotMap);
//end of depot map
//--------------------------- END OF ALL CODE FOR DEPOT -------------------------------

//--------------------------- START OF ALL CODE FOR LOBLOLLY -------------------------------

// get elements from DOM, make variables
const loblollyClicker1 = document.querySelector('#loblolly-photo1');
const loblollyClicker2 = document.querySelector('#loblolly-photo2');
const loblollyClicker3 = document.querySelector('#loblolly-photo3');
const loblollyClicker4 = document.querySelector('#loblolly-photo4');
const loblollyAnimal1 = document.querySelector('#loblolly-animal1');
const loblollyAnimal2 = document.querySelector('#loblolly-animal2');
const loblollyAnimal3 = document.querySelector('#loblolly-animal3');
const loblollyAnimal4 = document.querySelector('#loblolly-animal4');

// hide the flora/fauna information div
loblollyAnimal1.style.display = 'none';
loblollyAnimal2.style.display = 'none';
loblollyAnimal3.style.display = 'none';
loblollyAnimal4.style.display = 'none';

// make photos work as buttons
loblollyClicker1.onclick = loblollyHide;
loblollyClicker2.onclick = loblollyHide2;
loblollyClicker3.onclick = loblollyHide3;
loblollyClicker4.onclick = loblollyHide4;

// this function runs each time button is clicked
function loblollyHide() {
  if (loblollyAnimal1.classList.contains('showing')) {
    // hide it
    loblollyAnimal1.style.display = 'none';
    // remove class
    loblollyAnimal1.classList.remove('showing');
  } else {
    // show it
    loblollyAnimal1.style.display = 'flex';
    loblollyAnimal2.style.display = 'none';
    loblollyAnimal3.style.display = 'none';
    loblollyAnimal4.style.display = 'none';
    // add class
    loblollyAnimal1.classList.add('showing');
  }
}

function loblollyHide2() {
  if (loblollyAnimal2.classList.contains('showing')) {
    // hide it
    loblollyAnimal2.style.display = 'none';
    // remove class
    loblollyAnimal2.classList.remove('showing');
  } else {
    // show it
    loblollyAnimal1.style.display = 'none';
    loblollyAnimal2.style.display = 'flex';
    loblollyAnimal3.style.display = 'none';
    loblollyAnimal4.style.display = 'none';
    // add class
    loblollyAnimal2.classList.add('showing');
  }
}

function loblollyHide3() {
  if (loblollyAnimal3.classList.contains('showing')) {
    // hide it
    loblollyAnimal3.style.display = 'none';
    // remove class
    loblollyAnimal3.classList.remove('showing');
  } else {
    // show it
    loblollyAnimal1.style.display = 'none';
    loblollyAnimal2.style.display = 'none';
    loblollyAnimal3.style.display = 'flex';
    loblollyAnimal4.style.display = 'none';
    // add class
    loblollyAnimal3.classList.add('showing');
  }
}

function loblollyHide4() {
  if (loblollyAnimal4.classList.contains('showing')) {
    // hide it
    loblollyAnimal4.style.display = 'none';
    // remove class
    loblollyAnimal4.classList.remove('showing');
  } else {
    // show it
    loblollyAnimal1.style.display = 'none';
    loblollyAnimal2.style.display = 'none';
    loblollyAnimal3.style.display = 'none';
    loblollyAnimal4.style.display = 'flex';
    // add class
    loblollyAnimal4.classList.add('showing');
  }
}

let loblollyClose = document.querySelector("#loblolly-button1");
let loblollyClose2 = document.querySelector("#loblolly-button2");
let loblollyClose3 = document.querySelector("#loblolly-button3");
let loblollyClose4 = document.querySelector("#loblolly-button4");


loblollyClose.onclick = loblollyHide;
loblollyClose2.onclick = loblollyHide2;
loblollyClose3.onclick = loblollyHide3;
loblollyClose4.onclick = loblollyHide4;

//end of code for Loblolly park hiding divs

//start of loblolly map
let loblollyMap = L.map('loblolly-map').setView([29.656532, -82.369851], 15.99);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 28,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidHJleWVja2VyIiwiYSI6ImNrdzNxN3FyMjBkZ3kydG50cnhrNmE3OGYifQ.jhhgoiTOLUcO7O7VaZODsQ'
}).addTo(loblollyMap);

let loblollyCreek = 'images/loblolly/loblolly-creek.jpg',
    loblollyCreekBounds = [[29.657966448246093, -82.36910562978711], [29.657437802490744, -82.36840291814276]];
L.imageOverlay(loblollyCreek, loblollyCreekBounds).addTo(loblollyMap);

let loblollyWasp = 'images/loblolly/loblolly-yellow-jacket.jpg',
    loblollyWaspBounds = [[29.659167122723126, -82.37083635802931], [29.658666446858852, -82.370155104052]];
L.imageOverlay(loblollyWasp, loblollyWaspBounds).addTo(loblollyMap);

let loblollyPath = 'images/loblolly/loblolly-trail-head.jpg',
    loblollyPathBounds = [[29.654898483125127, -82.37150635862277], [29.65435118938709, -82.37068562978716]];
L.imageOverlay(loblollyPath, loblollyPathBounds).addTo(loblollyMap);
//end of loblolly map

//--------------------------- END OF ALL CODE FOR LOBLOLLY -------------------------------

//--------------------------- START OF ALL CODE FOR PAYNES -------------------------------

// get elements from DOM, make variables
const paynesClicker1 = document.querySelector('#paynes-photo1');
const paynesClicker2 = document.querySelector('#paynes-photo2');
const paynesClicker3 = document.querySelector('#paynes-photo3');
const paynesClicker4 = document.querySelector('#paynes-photo4');
const paynesAnimal1 = document.querySelector('#paynes-animal1');
const paynesAnimal2 = document.querySelector('#paynes-animal2');
const paynesAnimal3 = document.querySelector('#paynes-animal3');
const paynesAnimal4 = document.querySelector('#paynes-animal4');

// hide the flora/fauna information div
paynesAnimal1.style.display = 'none';
paynesAnimal2.style.display = 'none';
paynesAnimal3.style.display = 'none';
paynesAnimal4.style.display = 'none';

// make photos work as buttons
paynesClicker1.onclick = paynesHide;
paynesClicker2.onclick = paynesHide2;
paynesClicker3.onclick = paynesHide3;
paynesClicker4.onclick = paynesHide4;

// this function runs each time button is clicked
function paynesHide() {
  if (paynesAnimal1.classList.contains('showing')) {
    // hide it
    paynesAnimal1.style.display = 'none';
    // remove class
    paynesAnimal1.classList.remove('showing');
  } else {
    // show it
    paynesAnimal1.style.display = 'flex';
    paynesAnimal2.style.display = 'none';
    paynesAnimal3.style.display = 'none';
    paynesAnimal4.style.display = 'none';
    // add class
    paynesAnimal1.classList.add('showing');
  }
}

function paynesHide2() {
  if (paynesAnimal2.classList.contains('showing')) {
    // hide it
    paynesAnimal2.style.display = 'none';
    // remove class
    paynesAnimal2.classList.remove('showing');
  } else {
    // show it
    paynesAnimal1.style.display = 'none';
    paynesAnimal2.style.display = 'flex';
    paynesAnimal3.style.display = 'none';
    paynesAnimal4.style.display = 'none';
    // add class
    paynesAnimal2.classList.add('showing');
  }
}

function paynesHide3() {
  if (paynesAnimal3.classList.contains('showing')) {
    // hide it
    paynesAnimal3.style.display = 'none';
    // remove class
    paynesAnimal3.classList.remove('showing');
  } else {
    // show it
    paynesAnimal1.style.display = 'none';
    paynesAnimal2.style.display = 'none';
    paynesAnimal3.style.display = 'flex';
    paynesAnimal4.style.display = 'none';
    // add class
    paynesAnimal3.classList.add('showing');
  }
}

function paynesHide4() {
  if (paynesAnimal4.classList.contains('showing')) {
    // hide it
    paynesAnimal4.style.display = 'none';
    // remove class
    paynesAnimal4.classList.remove('showing');
  } else {
    // show it
    paynesAnimal1.style.display = 'none';
    paynesAnimal2.style.display = 'none';
    paynesAnimal3.style.display = 'none';
    paynesAnimal4.style.display = 'flex';
    // add class
    paynesAnimal4.classList.add('showing');
  }
}

let paynesClose = document.querySelector("#paynes-button1");
let paynesClose2 = document.querySelector("#paynes-button2");
let paynesClose3 = document.querySelector("#paynes-button3");
let paynesClose4 = document.querySelector("#paynes-button4");


paynesClose.onclick = paynesHide;
paynesClose2.onclick = paynesHide2;
paynesClose3.onclick = paynesHide3;
paynesClose4.onclick = paynesHide4;

//end of code for Loblolly park hiding divs


//start of paynes prairie map
let paynesMap = L.map('paynes-map').setView([29.562618, -82.324132], 15.16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 26,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidHJleWVja2VyIiwiYSI6ImNrdzNxN3FyMjBkZ3kydG50cnhrNmE3OGYifQ.jhhgoiTOLUcO7O7VaZODsQ'
}).addTo(paynesMap);

let paynesHawk = 'images/paynes/paynes-red-shouldered-hawk.jpg',
    paynesHawkBounds = [[29.562428628594983, -82.32055708746041], [29.561965290328132, -82.31976854513152]];
L.imageOverlay(paynesHawk, paynesHawkBounds).addTo(paynesMap);

let paynesPath = 'images/paynes/paynes-trail-head.jpg',
    paynesPathBounds = [[29.559154628504608, -82.3274936469806], [29.55857930213033, -82.32655490095381]];
L.imageOverlay(paynesPath, paynesPathBounds).addTo(paynesMap);

let paynesTrails = 'images/paynes/paynes-trail2.jpg',
    paynesTrailsBounds = [[29.55957729791477, -82.32217146047388], [29.558963974255565, -82.32137218930951]];
L.imageOverlay(paynesTrails, paynesTrailsBounds).addTo(paynesMap);
//end of paynes prairie map

//--------------------------- END OF ALL CODE FOR PAYNES -------------------------------

// hide the flora/fauna information div
depot.style.display = 'none';
loblolly.style.display = 'none';
paynes.style.display = 'none';
