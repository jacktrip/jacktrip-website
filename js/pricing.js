// var btnC1 = document.querySelector('.checkbox#c1 img');
// var btnC2 = document.querySelector('.checkbox#c2 img');
// var btnC3 = document.querySelector('.checkbox#c3 img');
// var btnC4 = document.querySelector('.checkbox#c4 img');
// var btnC5 = document.querySelector('.checkbox#c5 img');
// var btnC6 = document.querySelector('.checkbox#c6 img');
// var btnC7 = document.querySelector('.checkbox#c7 img');
// var btnC8 = document.querySelector('.checkbox#c8 img');
var btnAll = document.querySelector('.checkbox-all img');

var textC1 = document.querySelector('#c1Txt');
var textC2 = document.querySelector('#c2Txt');
var textC3 = document.querySelector('#c3Txt');
var textC4 = document.querySelector('#c4Txt');
var textC5 = document.querySelector('#c5Txt');
var textC6 = document.querySelector('#c6Txt');
var textC7 = document.querySelector('#c7Txt');
var textC8 = document.querySelector('#c8Txt');

// btnC1.style.cursor = "pointer"; 
// btnC2.style.cursor = "pointer"; 
// btnC3.style.cursor = "pointer"; 
// btnC4.style.cursor = "pointer"; 
// btnC5.style.cursor = "pointer"; 
// btnC6.style.cursor = "pointer"; 
// btnC7.style.cursor = "pointer"; 
// btnC8.style.cursor = "pointer"; 
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
    var str = new String("$1.00");
    var normal = "$1.00";
    if (x) {
        // //console.log('true');
        // defaultBtn = false;
        var betweenChars = '&nbsp &nbsp &nbsp';
        var result = str.strike() + betweenChars + "$1.00";
        textC1.innerHTML = result;
        // btnC1.src='../images/checkbox-select.svg';

    } else {
        //console.log('false');
        // defaultBtn = true;
        textC1.innerHTML = normal;
        // btnC1.src='../images/checkbox-empty.svg';
    }
}

function btn2TxtChange(x) {
    var str = new String("$10.00");
    var normal = "$10.00";
    if (x) {
        // //console.log('true');
        // defaultBtn = false;
        var betweenChars = '&nbsp &nbsp &nbsp';
        var result = str.strike() + betweenChars + "$7.00";
        textC2.innerHTML = result;
        // btnC2.src='../images/checkbox-select.svg';

    } else {
        //console.log('false');
        // defaultBtn = true;
        textC2.innerHTML = normal;
        // btnC2.src='../images/checkbox-empty.svg';
    }
}

function btn3TxtChange(x) {
    var str = new String("$25.00");
    var normal = "$25.00";
    if (x) {
        // //console.log('true');
        // defaultBtn = false;
        var betweenChars = '&nbsp &nbsp &nbsp';
        var result = str.strike() + betweenChars + "$17.50";
        textC3.innerHTML = result;
        // btnC3.src='../images/checkbox-select.svg';

    } else {
        //console.log('false');
        // defaultBtn = true;
        textC3.innerHTML = normal;
        // btnC3.src='../images/checkbox-empty.svg';
    }
}

function btn4TxtChange(x) {
    var str = new String("$50.00");
    var normal = "$50.00";
    if (x) {
        // //console.log('true');
        // defaultBtn = false;
        var betweenChars = '&nbsp &nbsp &nbsp';
        var result = str.strike() + betweenChars + "$35.00";
        textC4.innerHTML = result;
        // btnC4.src='../images/checkbox-select.svg';

    } else {
        // //console.log('false');
        // defaultBtn = true;
        textC4.innerHTML = normal;
        // btnC4.src='../images/checkbox-empty.svg';
    }
}

function btn5TxtChange(x) {
    var str = new String("$100.00");
    var normal = "$100.00";
    if (x) {
        //console.log('true');
        // defaultBtn = false;
        var betweenChars = '&nbsp &nbsp &nbsp';
        var result = str.strike() + betweenChars + "$70.00";
        textC5.innerHTML = result;
        // btnC5.src='../images/checkbox-select.svg';

    } else {
        //console.log('false');
        // defaultBtn = true;
        textC5.innerHTML = normal;
        // btnC5.src='../images/checkbox-empty.svg';
    }
}

function btn6TxtChange(x) {
    var str = new String("$250.00");
    var normal = "$250.00";
    if (x) {
        //console.log('true');
        // defaultBtn = false;
        var betweenChars = '&nbsp &nbsp';
        var result = str.strike() + betweenChars + "$175.00";
        textC6.innerHTML = result;
        // btnC6.src='../images/checkbox-select.svg';

    } else {
        //console.log('false');
        // defaultBtn = true;
        textC6.innerHTML = normal;
        // btnC6.src='../images/checkbox-empty.svg';
    }
}

function btn7TxtChange(x) {
    var str = new String("$500.00");
    var normal = "$500.00";
    if (x) {
        //console.log('true');
        // defaultBtn = false;
        var betweenChars = '&nbsp';
        var result = str.strike() + betweenChars + "$350.00";
        textC7.innerHTML = result;
        // btnC7.src='../images/checkbox-select.svg';

    } else {
        //console.log('false');
        // defaultBtn = true;
        textC7.innerHTML = normal;
        // btnC7.src='../images/checkbox-empty.svg';
    }
}

function btn8TxtChange(x) {
    var str = new String("$1000.00");
    var normal = "$1000.00";
    if (x) {
        //console.log('true');
        // defaultBtn = false;
        var betweenChars = '&nbsp';
        var result = str.strike() + betweenChars + "$700.00";
        textC8.innerHTML = result;
        // btnC8.src='../images/checkbox-select.svg';

    } else {
        //console.log('false');
        // defaultBtn = true;
        textC8.innerHTML = normal;
        // btnC8.src='../images/checkbox-empty.svg';
    }
}


// btnC1.addEventListener("click", function () { btn1TxtChange(btn1) });
// btnC2.addEventListener("click", function () { btn2TxtChange(btn2) });
// btnC3.addEventListener("click", function () { btn3TxtChange(btn3) });
// btnC4.addEventListener("click", function () { btn4TxtChange(btn4) });
// btnC5.addEventListener("click", function () { btn5TxtChange(btn5) });
// btnC6.addEventListener("click", function () { btn6TxtChange(btn6) });
// btnC7.addEventListener("click", function () { btn7TxtChange(btn7) });
// btnC8.addEventListener("click", function () { btn8TxtChange(btn8) });

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
