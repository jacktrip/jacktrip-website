var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var selector1 = document.getElementById("selector1");
var selector2 = document.getElementById("selector2");
var SelectValue1 = document.getElementById("SelectValue1");
var SelectValue2 = document.getElementById("SelectValue2");

var subTitle = document.querySelector('.sub_title');
var subPrice = document.querySelector('.subPrice');
var musHours = document.querySelector('.mus-hours');
var players = document.querySelector(".players");
var price = document.querySelector(".price");
var hours = document.querySelector(".music-hours");


SelectValue1.innerHTML = slider1.value;
SelectValue2.innerHTML = slider2.value;
selector1.style.left = this.value + "%";
selector2.style.left = this.value + "%";


slider1.oninput = function() {
    SelectValue1.innerHTML = this.value;

    findPlan();
};

slider2.oninput = function() {
    SelectValue2.innerHTML = this.value;

    findPlan();
};


function findPlan(){
    console.log();
    if(SelectValue1.innerHTML <= 0 && SelectValue2.innerHTML <= 5 ){
        console.log('free');
        subTitle.innerHTML = "Free";
        subPrice.innerHTML = "Free";
        players.innerHTML = "5";
        hours.innerHTML = "30 minutes.";
        price.innerHTML = "";
        
        var num1 = players.innerHTML;
        var num2 = hours.innerHTML;
        
        // num1.style.fontWeight = 'bold';
        // num2.style.fontWeight = 'bold';
        musHours.innerHTML = "Create JackTrip or Jamulus studios for up to " + num1 + " musicians, which automatically expire after  " + num2;
       
    }else if(SelectValue1.innerHTML <= 15 &&  SelectValue2.innerHTML <= 10 ){
        console.log('$10');
        subTitle.innerHTML = "Basic";
        subPrice.innerHTML = "$10";
        players.innerHTML = "10";
        hours.innerHTML = "15";
        price.innerHTML = "$0.67";
        var num1 = players.innerHTML;
        var num2 = hours.innerHTML;
        var num3 = price.innerHTML;
        
        musHours.innerHTML = "Create JackTrip and Jamulus studios for up to " + num1 + " musicians; includes up  " + num2 + " studio hours ( " +num3+ " per hour per musician)";

    }else if(SelectValue1.innerHTML <= 45 && SelectValue2.innerHTML <= 20 ){
        console.log('$25');
        subTitle.innerHTML = "Standard";
        subPrice.innerHTML = "$25";
        players.innerHTML = "20";
        hours.innerHTML = "45";
        price.innerHTML = "$0.56";
        var num1 = players.innerHTML;
        var num2 = hours.innerHTML;
        var num3 = price.innerHTML;
        musHours.innerHTML = "Create JackTrip and Jamulus studios for up to " + num1 + " musicians; includes up  " + num2 + " studio hours ( " +num3+ " per hour per musician)";
    }else if(SelectValue1.innerHTML <= 100 && SelectValue2.innerHTML <= 40 ){
        console.log('$50');
        subTitle.innerHTML = "Premium";
        subPrice.innerHTML = "$50";
        players.innerHTML = "40";
        hours.innerHTML = "100";
        price.innerHTML = "$0.50";
        var num1 = players.innerHTML;
        var num2 = hours.innerHTML;
        var num3 = price.innerHTML;
        musHours.innerHTML = "Create JackTrip and Jamulus studios for up to " + num1 + " musicians; includes up  " + num2 + " studio hours ( " +num3+ " per hour per musician)";
    }else if(SelectValue1.innerHTML <= 250 && SelectValue2.innerHTML <= 100 ){
        console.log('$100');
        subTitle.innerHTML = "Auditorium";
        subPrice.innerHTML = "$100";
        players.innerHTML = "100";
        hours.innerHTML = "250";
        price.innerHTML = "$0.40";
        var num1 = players.innerHTML;
        var num2 = hours.innerHTML;
        var num3 = price.innerHTML;
        musHours.innerHTML = "Create JackTrip and Jamulus studios for up to " + num1 + " musicians; includes up  " + num2 + " studio hours ( " +num3+ " per hour per musician)";
    }else if(SelectValue1.innerHTML <= 700 && SelectValue2.innerHTML <= 240 ){
        console.log('$250');
        subTitle.innerHTML = "Concert Hall";
        subPrice.innerHTML = "$250";
        players.innerHTML = "240";
        hours.innerHTML = "700";
        price.innerHTML = "$0.36";
        var num1 = players.innerHTML;
        var num2 = hours.innerHTML;
        var num3 = price.innerHTML;
        musHours.innerHTML = "Create JackTrip and Jamulus studios for up to " + num1 + " musicians; includes up  " + num2 + " studio hours ( " +num3+ " per hour per musician)";
    }else if(SelectValue1.innerHTML <= 1500 && SelectValue2.innerHTML <= 480 ){
        console.log('$500');
        subTitle.innerHTML = "Amphitheater";
        subPrice.innerHTML = "$500";
        players.innerHTML = "480";
        hours.innerHTML = "1500";
        price.innerHTML = "$0.33";
        var num1 = players.innerHTML;
        var num2 = hours.innerHTML;
        var num3 = price.innerHTML;
        musHours.innerHTML = "Create JackTrip and Jamulus studios for up to " + num1 + " musicians; includes up  " + num2 + " studio hours ( " +num3+ " per hour per musician)";
    }else if(SelectValue1.innerHTML <= 3500 && SelectValue2.innerHTML <= 480 ){
        console.log('$1000');
        subTitle.innerHTML = "Stadium";
        subPrice.innerHTML = "$1000";
        players.innerHTML = "480";
        hours.innerHTML = "3500";
        price.innerHTML = "$0.29";
        var num1 = players.innerHTML;
        var num2 = hours.innerHTML;
        var num3 = price.innerHTML;
        musHours.innerHTML = "Create JackTrip and Jamulus studios for up to " + num1 + " musicians; includes up  " + num2 + " studio hours ( " +num3+ " per hour per musician)";
    }
}

findPlan();