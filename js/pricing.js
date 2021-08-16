
var btnAll = document.querySelector('.checkbox-all img');

var textC1 = document.querySelector('#c1Txt');
var textC2 = document.querySelector('#c2Txt');
var textC3 = document.querySelector('#c3Txt');
var textC4 = document.querySelector('#c4Txt');
var textC5 = document.querySelector('#c5Txt');
var textC6 = document.querySelector('#c6Txt');
var textC7 = document.querySelector('#c7Txt');
var textC8 = document.querySelector('#c8Txt');


btnAll.style.cursor = "pointer"; 

var btn1 = true;
var btn2 = true;
var btn3 = true;
var btn4 = true;
var btn5 = true;
var btn6 = true;
var btn7 = true;
var btn8 = true;

var defaultBtn = true;


function btn1TxtChange(x) {
    /*
    var str = new String("$1.00");
    var normal = "$1.00";
    if (x) {
        var betweenChars = '&nbsp &nbsp &nbsp';
        var result = str.strike() + betweenChars + "$1.00";
        textC1.innerHTML = result;

    } else {
        textC1.innerHTML = normal;
    }
    */
}

function btn2TxtChange(x) {
    var str = new String("$10.00");
    var normal = "$10.00";
    if (x) {
        var betweenChars = '&nbsp &nbsp &nbsp';
        var result = str.strike() + betweenChars + "$7.00";
        textC2.innerHTML = result;

    } else {
        textC2.innerHTML = normal;
    }
}

function btn3TxtChange(x) {
    var str = new String("$25.00");
    var normal = "$25.00";
    if (x) {
        var betweenChars = '&nbsp &nbsp &nbsp';
        var result = str.strike() + betweenChars + "$17.50";
        textC3.innerHTML = result;

    } else {
        textC3.innerHTML = normal;
    }
}

function btn4TxtChange(x) {
    var str = new String("$50.00");
    var normal = "$50.00";
    if (x) {
        var betweenChars = '&nbsp &nbsp &nbsp';
        var result = str.strike() + betweenChars + "$35.00";
        textC4.innerHTML = result;

    } else {
        textC4.innerHTML = normal;
    }
}

function btn5TxtChange(x) {
    var str = new String("$100.00");
    var normal = "$100.00";
    if (x) {
        var betweenChars = '&nbsp &nbsp &nbsp';
        var result = str.strike() + betweenChars + "$70.00";
        textC5.innerHTML = result;

    } else {
        textC5.innerHTML = normal;
    }
}

function btn6TxtChange(x) {
    var str = new String("$250.00");
    var normal = "$250.00";
    if (x) {
        var betweenChars = '&nbsp &nbsp';
        var result = str.strike() + betweenChars + "$175.00";
        textC6.innerHTML = result;

    } else {
        textC6.innerHTML = normal;
    }
}

function btn7TxtChange(x) {
    var str = new String("$500.00");
    var normal = "$500.00";
    if (x) {
        var betweenChars = '&nbsp';
        var result = str.strike() + betweenChars + "$350.00";
        textC7.innerHTML = result;

    } else {
        textC7.innerHTML = normal;
    }
}

function btn8TxtChange(x) {
    var str = new String("$1000.00");
    var normal = "$1000.00";
    if (x) {
        var betweenChars = '&nbsp';
        var result = str.strike() + betweenChars + "$700.00";
        textC8.innerHTML = result;

    } else {
        textC8.innerHTML = normal;
    }
}


btnAll.addEventListener("click", function () { 
   

    if(defaultBtn){
        console.log('all true');
        
        btnAll.src='../images/checkbox-select-dark.svg';
        btn1TxtChange(defaultBtn);
        btn2TxtChange(defaultBtn);
        btn3TxtChange(defaultBtn);
        btn4TxtChange(defaultBtn);
        btn5TxtChange(defaultBtn);
        btn6TxtChange(defaultBtn);
        btn7TxtChange(defaultBtn);
        btn8TxtChange(defaultBtn);
        defaultBtn = false;

    }else{
        console.log('all false');
        
        btnAll.src='../images/checkbox-empty-dark.svg';
        btn1TxtChange(defaultBtn);
        btn2TxtChange(defaultBtn);
        btn3TxtChange(defaultBtn);
        btn4TxtChange(defaultBtn);
        btn5TxtChange(defaultBtn);
        btn6TxtChange(defaultBtn);
        btn7TxtChange(defaultBtn);
        btn8TxtChange(defaultBtn);
        defaultBtn = true;

    }

    
});
