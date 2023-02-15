let tierCount = (0,0,0,0,0,0);
let dispValList = ["dispVal1", "dispVal2", "dispVal3", "dispVal4", "dispVal5", "dispVal6"];

let aPyFractionList = [1, 0.1, 1, 0.1, 1, 1, 1, 1];

class Pyramid {
    constructor(){
        let tierCount = (0,0,0,0,0,0);
        let dispValList = ["dispVal1", "dispVal2", "dispVal3", "dispVal4", "dispVal5", "dispVal6"];
        let aPyFractionList = [1, 0.1, 1, 0.1, 1, 1, 1, 1];
    }
}

function aPyGetAverageSize(){
    let total = 0;
    for(i=0; i<aPyFractionList.length; i++){
        if(i==1||i==3){continue;}
        total += aPyFractionList[i];
    }
    console.log(total);
    return total/aPyFractionList.length;
}

/* Returns a string for row adjusted fraction sizes */
function aPyBuildStr(){
    outStr = "";
    averageSize = aPyGetAverageSize();

    for(i = 0; i<aPyFractionList.length; i++){
        if(i==1||i==3){
            /* Ensures the gaps have a constant size that scales with the rest of the pyramid */
            outStr += averageSize/aPyFractionList.length;
        } else {
            outStr += (aPyFractionList[i]).toString();
        }
        outStr += "fr "
    }
    return outStr;
}

function aPyAdjustSize(modifier, rowIndex){
    aPyAdjustSize[rowIndex] += modifier;
    buildStr = aPyBuildStr();
    document.getElementById("aPy").style.gridTemplateRows = buildStr;
    document.getElementById("buttonContainer").style.gridTemplateRows = buildStr;
}

/* Used to handle the button onclick events and direct to pyramid mod */
function button_handler(modifier, target, rowIndex){
    let tempNum = parseInt(document.getElementById(target).innerHTML);
    if(modifier<0 && tempNum<=0){return;}
    document.getElementById(target).innerHTML=String(tempNum+modifier);
    aPyFractionList[rowIndex] += modifier;
    aPyAdjustSize(modifier, rowIndex);
    console.log(document.getElementById("aPy").style.gridTemplateRows);
}






function display_date_handler(){
    document.getElementById("date_display_input").textContent = ("Input date: " + document.getElementById("date_input").value);
}

