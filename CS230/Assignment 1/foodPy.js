
class Pyramid {
    tierCount;
    dispValList;
    fractionList;
    tierCount;
    idealValues;
    constructor(){
        this.dispValList = ["dispVal1", "dispVal2", "dispVal3", "dispVal4", "dispVal5", "dispVal6"];
        this.fractionList = [1, 0.1, 1, 0.1, 1, 1, 1, 1];
        this.tierCount = this.fractionList.length;
        // [2-5, 6-11, 12-17, adults]
        this.idealValues = [[0,0,0,0,0,0],[0, 0, 2, 3, 3, 2],[0, 0, 3, 2, 3, 3],[0, 0, 5, 2, 5, 5],[0, 0, 6, 2, 6, 5]];
        this.currentIdealValues = [0,0,0,0,0,0];
    }

    getAverageSize(){
        let total = 0;
        for(let i=0; i<this.tierCount; i++){
            if(i==1||i==3){continue;}
            total += this.fractionList[i];
        }
        return total/this.tierCount;
    }

    /* Returns a string for row adjusted fraction sizes */
    buildStr(){
        let outStr = "";
        const averageSize = this.getAverageSize();

        for(let i = 0; i<this.tierCount; i++){
            if(i==1||i==3){
                /* Ensures the gaps have a constant size that scales with the rest of the pyramid */
                outStr += averageSize/this.tierCount;
            } else {
                outStr += (this.fractionList[i]).toString();
            }
            outStr += "fr ";
        }
        return outStr;
    }

    /* Adjusts the fractional sizes of the aPy and buttonContainer divs */
    adjustSize(modifier, rowIndex){
        this.fractionList[rowIndex] += modifier;
        let finStr = this.buildStr();
        document.getElementById("aPy").style.gridTemplateRows = finStr;
        document.getElementById("buttonContainer").style.gridTemplateRows = finStr;
    }

    getDiff(a, b){
        return Math.abs(a-b);
    }

    changeValueColour(target, value){
        let idealValue = this.currentIdealValues[target-1]; // -1 for index

        // Creates the fraction used to calculate the correct colour to change the background to.
        // It uses this method to allow a minimum of 1 colour state between green and red and allows for
        // a larger idealValue to have a greater range of non red values
        let colourFraction = 120/Math.max(3, idealValue);
        let diff = Math.abs(idealValue-value);
        let colourHue = 120 - (colourFraction * diff);
        
        document.getElementById('dispVal'+target).style.backgroundColor = "hsl(" + Math.max(0, Math.round(colourHue)) + ", 100%, 50%)";
    }

    /* Used to handle the button onclick events and direct to pyramid mod */
    buttonHandler(modifier, target, rowIndex){
        let tempNum = parseInt(document.getElementById('dispVal'+target).innerHTML);
        if(modifier<0 && tempNum<=0){return;}
        document.getElementById('dispVal'+target).innerHTML=String(tempNum+modifier);
        this.adjustSize(modifier, rowIndex);
        this.changeValueColour(target, tempNum+modifier);
        console.log(document.getElementById("aPy").style.gridTemplateRows);
    }

    setValueBGs(){
        for(let i=0; i<6;i++){
            this.changeValueColour(i+1, parseInt(document.getElementById('dispVal'+(i+1)).innerHTML));
        }
    }

    currentIdealChange(num){
        this.currentIdealValues = this.idealValues[num];
        this.setValueBGs();
    }
}
let mainPy = new Pyramid;













function display_date_handler(){
    document.getElementById("submitButton").disabled = false;
    document.getElementById("date_display_input").textContent = ("Input date: " + document.getElementById("date_input").value);
}

