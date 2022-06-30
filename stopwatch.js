
var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;
function start(){
    timer=true;
    stopWatch()

}

function stop(){
    timer=false;
}

function reset(){
    timer=false;
    sec=0;
    hr=0;
    count=0;
    min=0  
    document.getElementById("hr").innerHTML=hr;

    document.getElementById("min").innerHTML=min;

    document.getElementById("sec").innerHTML=sec;

    document.getElementById("count").innerHTML=count;
}
function stopWatch(){
    if(timer==true){
        count=count+1;
        if(count==100){
            sec=sec+1;
            count=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hr++;
            min=0;
            sec=0;
        }
        document.getElementById("hr").innerHTML=hr;

        document.getElementById("min").innerHTML=min;

        document.getElementById("sec").innerHTML=sec;

        document.getElementById("count").innerHTML=count;


        setTimeout("stopWatch()",10)
    }else{

    }
}
