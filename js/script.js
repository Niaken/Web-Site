var isOn = false;

function dbclick() {
  if(!isOn) {
    document.querySelector("#db").setAttribute('class', 'bg-light text-dark');
    isOn = true;
  } else if(isOn) {
    document.querySelector("#db").setAttribute('class', 'bg-dark text-light');
    isOn = false;
  }
}

function prem() {
  document.form1.res.value = 0.25*document.form1.num.value;
}

function sum() {
  document.form1.sum.value = 1.25*document.form1.num.value;
}

function display_time() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var current_time = hours + ":" + minutes + ":" + seconds;
  document.querySelector("#time").textContent = "Поточний час: " + current_time;
}

function pl() {
  document.form3.res.value = document.form3.num1.value * document.form3.num2.value;
}

function msgot() {
  alert("Перевірте правильність введення оцінок");
}

function st(obj) {
  var a = Number(obj.num1.value);
  var b = Number(obj.num2.value);
  var c = Number(obj.num3.value);
  var d = Number(obj.num4.value);
  var ser = (a + b + c + d)/4;
  if ((a<2)||(a>5)||(b<2)||(b>5)||(c<2)||(c>5)||(d<2)||(d>5)) {
    msgot();
  }
  else {
    var k;
    var t;
    var m = 0;
    k = Math.min(Math.min(a,b),Math.min(c,d));
    t = Math.max(Math.max(a,b),Math.max(c,d));
    if (k==5) {
      m = 100;
    }
    if ((t == 5) && (k == 4)) {
      m = 75;
    }
    if ((t == 4) && (k == 4)) {
      m = 50;
    }
    if (m == 0) {
      alert("На жаль, вам стипендія не призначена.");
    } else {
      alert("Вам призначена стипендія у розмірі " + m + " грн.");
    }
    obj.stip.value="Ваш середній бал: " + ser;
  }
}

function reg(obj){
  var s = window.prompt("Введіть ваше ім’я","");
  alert("Ви ввели: " + s);
  var rarr=document.getElementsByName("group");
  if(rarr[0].checked) {
    obj.regname.value = "Група 234 " + "Прізвище: " + s;
  } else if(rarr[1].checked) {
    obj.regname.value = "Група 235 " + "Прізвище: " + s;
  } else if(rarr[2].checked) {
    obj.regname.value = "Група 236 " + "Прізвище: " + s;
  }
}

function big(obj) {
  obj.width=400;
  obj.height=400;

}

function little(obj) {
  obj.width=300;
  obj.height=300;
}
