let tierCount = (0,0,0,0,0,0);
let dispValList = ("dispVal1", "dispVal2", "dispVal3", "dispVal4", "dispVal5", "dispVal6");

/* Used to handle the button onclick events and direct to pyramid mod */
function button_handler(modifier, target){
    let tempNum = parseInt(document.getElementById(target).innerHTML);
    if(modifier<0 && tempNum<=0){return;}
    document.getElementById(target).innerHTML=String(tempNum+modifier);
}

function display_date_handler(){
    console.log(document.getElementById("date_input").textContent);
}

display_date_handler();