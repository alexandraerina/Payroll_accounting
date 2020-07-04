'use strict'
{
  const btn = document.getElementById('btn');
  const countbtn = document.getElementById('countbtn');
  const textBox = document.getElementById('textBox');
  const startTime = document.getElementById('start_time');
  const finishTime = document.getElementById('finish_time');
  const output = document.getElementById('output');
  const alldeta = document.getElementById('alldeta');


  let arrayDeta = [];

  btn.onclick = function() {
    output.textContent = (finishTime.value - startTime.value) * textBox.value;
    arrayDeta.push(output.textContent);
    // const li = document.createElement("li");
    // li.id = "text_deta";
    // const text_deta = document.getElementById("text_deta");
    // document.ul.appendChild(li);
    // text_deta.textContent = arrayDeta[arrayDeta.length];
  };

  countbtn.onclick = function() {
    const new_arrayDate = arrayDeta.map(function(str) {return Number(str)});

    let sum = new_arrayDate.reduce((a,X) => a+=X,0);
    alldeta.textContent = sum;
  
  };

  
  }