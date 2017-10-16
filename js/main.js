var config;
var langs = new Array();
var instructions = new Array();

function loadConfig () {
  var request = new window.XMLHttpRequest();
  request.open('GET', 'config.json', true);
  
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      // Configuración leída exitosamente
      config = JSON.parse(request.responseText);
      activateSite();
    } else {
      // TODO: Manejar error devuelto por el servidor
    }
  };
  
  request.onerror = function() {
    // TODO: Manejar error en la peticion
  };
  request.send();
}

function addSelectOption (letter, value) {
  var select = document.getElementById("select" + letter);
  var option = document.createElement("option");
  option.text = value;
  option.id = value;
  select.add(option);
}

function activateSite () {
  langs = config.languages;
  instructions = config.instructions;
  for(var i = 0; i < langs.length; i++) {
    addSelectOption('X', langs[i]);
    addSelectOption('Y', langs[i]);
  }
}

function instructionFoundInLanguages (languagesAvailable) {
  var selectX = document.getElementById("selectX");
  var selectY = document.getElementById("selectY");
  var found = 0;
  for(var i = 0; i < languagesAvailable.length; i++) {
    if (languagesAvailable[i] === langs[selectX.selectedIndex - 1]) found++;
    if (languagesAvailable[i] === langs[selectY.selectedIndex - 1]) found++;
  }
  if(found == 2) return true;
  return false;
}

function getExample (filename, lang, node) {
  var title = document.createElement("h5");
  var pre = document.createElement("pre");
  var code = document.createElement("code");
  title.textContent = lang;
  pre.appendChild(code);
  node.appendChild(title);
  node.appendChild(pre);
  var request = new window.XMLHttpRequest();
  request.open('GET', "langs/" + lang + "/" + filename, true);
  
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      // Configuración leída exitosamente
      pre.textContent = request.responseText;
      hljs.highlightBlock(pre);
    } else {
      // TODO: Manejar error devuelto por el servidor
    }
  };
  
  request.onerror = function() {
    // TODO: Manejar error en la peticion
  };
  request.send();
}


function generateComparison () {
  document.getElementById("comparison").remove();
  var comparison = document.createElement("div");
  comparison.id = "comparison";
  document.getElementById("container").appendChild(comparison);
  var selectX = document.getElementById("selectX");
  var selectY = document.getElementById("selectY");
  for(var i = 0; i < instructions.length; i++) {
    if(instructionFoundInLanguages(instructions[i].languages)) {
      var instruction = document.createElement("div");
      var title = document.createElement("h3");
      title.textContent = instructions[i].name;
      var description = document.createElement("p");
      description.textContent = instructions[i].description;
      instruction.appendChild(title);
      instruction.appendChild(description);
      var canvas = document.createElement("div");
      canvas.className = "row";
      var left = document.createElement("div");
      left.className = "col-md-6 code";
      var right = document.createElement("div");
      right.className = "col-md-6 code";
      var hr = document.createElement("hr");
      instruction.appendChild(canvas);
      instruction.appendChild(hr);
      canvas.appendChild(left);
      canvas.appendChild(right);
      getExample(instructions[i].filename, langs[selectX.selectedIndex - 1], left);
      getExample(instructions[i].filename, langs[selectY.selectedIndex - 1], right);
      comparison.appendChild(instruction);
    }
  }
}

function changeText (letter) {
  var index = document.getElementById("select" + letter).selectedIndex - 1;
  var text = document.getElementById("text" + letter);
  if (index < 0) {
    text.textContent = letter;
  } else {
    text.textContent = langs[index];
  }
}

function validateButton () {
  var selectX = document.getElementById("selectX");
  var selectY = document.getElementById("selectY");
  var btn = document.getElementById("learnButton");
  if(selectX.selectedIndex > 0 && selectY.selectedIndex > 0) btn.disabled = false;
  else btn.disabled = true;
}


loadConfig();
document.getElementById("learnButton").addEventListener("click", generateComparison);
document.getElementById("selectX").addEventListener("change", function () {changeText('X');validateButton();});
document.getElementById("selectY").addEventListener("change", function () {changeText('Y');validateButton();});