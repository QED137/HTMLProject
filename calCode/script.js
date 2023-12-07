function compute()
{     // now we have to write a code to fetch 
    //rlevant vlaues from the html document 
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
   
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years); 
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
    
    if (principal <= 0) {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }

}
function updateRate(){
    // the follwoing code will fetch the value entered in the html file
    var ratevl = document.getElementById("rate").value;
    // the following command will supply the value 
    //to the variable of the html file 
    //value to display the value of the rateval variable created above.
    document.getElementById("rate_val").innerText = rateval;
}
// ... your existing code ...

function calculateSin() {
    var angle = parseFloat(document.getElementById("angle").value);
    var resultSin = document.getElementById("resultSin");

    if (!isNaN(angle)) {
        var sinValue = Math.sin((angle * Math.PI) / 180);
        resultSin.innerHTML = "Sin(" + angle + "): " + sinValue.toFixed(4);
    } else {
        alert("Please enter a valid number for the angle.");
    }
}

function calculateCos() {
    var angle = parseFloat(document.getElementById("angle").value);
    var resultCos = document.getElementById("resultCos");

    if (!isNaN(angle)) {
        var cosValue = Math.cos((angle * Math.PI) / 180);
        resultCos.innerHTML = "Cos(" + angle + "): " + cosValue.toFixed(4);
    } else {
        alert("Please enter a valid number for the angle.");
    }
}

function calculateTan() {
    var angle = parseFloat(document.getElementById("angle").value);
    var resultTan = document.getElementById("resultTan");

    if (!isNaN(angle)) {
        var tanValue = Math.tan((angle * Math.PI) / 180);
        resultTan.innerHTML = "Tan(" + angle + "): " + tanValue.toFixed(4);
    } else {
        alert("Please enter a valid number for the angle.");
    }
}
    
