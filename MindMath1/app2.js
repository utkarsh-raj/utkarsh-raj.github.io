"use strict";

var worker = null;
var startTime = NaN;

function solve (target, numbers) {
  var solveBtn = document.getElementById("solve-btn");
  var cancelBtn = document.getElementById("cancel-btn");
  var output = document.getElementById("output");
  var time = document.getElementById("time");
  var useWorker = document.getElementById("use-worker").checked;

  if (worker) {
    try  {
      worker.terminate();
    }
    catch (e) {
      if (typeof console !== "undefined") console.error(e);
    }
    worker = null;
  }

  try {
    // var target = parseInt(document.getElementById("target").value,10);
    // var numbers = [];
  
    if (isNaN(target)) {
      throw new TypeError("target is not a number");
    }

    if (target < 0) {
      throw new TypeError("target musst not be negative");
    }

    for (var i = 1; i <= 6; ++ i) {
      var str = document.getElementById("number"+i).value;
      var num = parseInt(str,10);
      if (isNaN(num)) {
        throw new TypeError("argument is not a number: "+str);
      }
      if (num <= 0) {
        throw new TypeError("illegal argument value: "+str);
      }
      // numbers.push(num);
    }
    var unsortedNumbers = numbers.slice(0);
    numbers.sort(function (lhs,rhs) { return lhs - rhs; });
  
    output.innerHTML = "";
    time.innerHTML = "";
    solveBtn.disabled = true;
    cancelBtn.disabled = false;

    if (useWorker) {
      worker = new Worker("worker.js");

      worker.addEventListener('message', function (event) {
        var expr = event.data;
        if (expr) {
          addExpr(expr);
        }
        else {
          worker = null;
          done();
        }
      }, false);

      startTime = Date.now();
      worker.postMessage({target: target, numbers: numbers});
    }
    else {
      startTime = Date.now();
      solutions(target, numbers, addExpr);
      done();
    }

    if (history.pushState) {
      var search = '?target='+target+'&numbers='+unsortedNumbers.join(',');
      if (search !== location.search) {
        history.pushState(null, null, search);
      }
    }
  }
  catch (e) {
    if (typeof console !== "undefined") console.error(e);

    solveBtn.disabled = false;
    cancelBtn.disabled = true;

    if (worker) {
      try {
        worker.terminate();
      }
      catch (e2) {
        if (typeof console !== "undefined") console.error(e2);
      }
      worker = null;
    }

    alert(String(e));
  }

  function addExpr (expr) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(expr.toString()));
    output.appendChild(li);
  }

  function done () {
    solveBtn.disabled = false;
    cancelBtn.disabled = true;
    
    var endTime = Date.now();
    time.appendChild(document.createTextNode("finished in "+((endTime - startTime) / 1000) + " seconds"));
  }
}

function cancelSolve () {
  var solveBtn = document.getElementById("solve-btn");
  var cancelBtn = document.getElementById("cancel-btn");
  var time = document.getElementById("time");
  solveBtn.disabled = false;
  cancelBtn.disabled = true;

  if (worker) {
    try {
      worker.terminate();
    }
    catch (e) {
      if (typeof console !== "undefined") console.error(e);
    }
    worker = null;
  }
  
  var endTime = Date.now();
  time.innerHTML = '';
  time.appendChild(document.createTextNode("canceled after "+((endTime - startTime) / 1000) + " seconds"));
}

function loadParams() {
  var search = location.search.replace(/^\?/,'');
  var params = {};

  if (search) {
    search = search.split('&');
    for (var i = 0; i < search.length; ++ i) {
      var param = search[i].split('=');
      params[decodeURIComponent(param[0])] = decodeURIComponent(param.slice(1).join('='));
    }
  }

  if (params.target || params.numbers) {
    document.getElementById("target").value = params.target;

    for (var i = 1; i <= 6; ++ i) {
      document.getElementById("number"+i).value = '';
    }

    if (params.numbers) {
      var numbers = params.numbers.split(',');
      for (var i = 0, n = Math.min(numbers.length, 6); i < n; ++ i) {
        document.getElementById("number"+(i+1)).value = numbers[i];
      }

      if (numbers.length >= 6 && params.target && window.Worker) {
        solve();
      }
    }
  }
}

window.onpopstate = loadParams;