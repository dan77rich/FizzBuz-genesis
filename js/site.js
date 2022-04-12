// Step One - controller accept request
function getValues() {

    // First get the fizz and buzz values from the user

    // Call display values and pass fizz and buzz to the function
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    //check to see if their an integer
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        let fizzBuzzValues = fizzBuzzC(fizzValue, buzzValue)

        displayValues(fizzBuzzValues)


    } else {
        alert("You must enter integers!")

    }


}

//business logic layer - Model
function fizzBuzzA(fizz, buzz) {
    let fbValues = []


    for (let i = 1; i < 101; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            fbValues.push("FizzBuzz");
        } else if (i % 3 == 0) {
            fbValues.push("Fizz");
        } else if (i % 5 == 0) {
            fbValues.push("Buzz");
        } else {
            fbValues.push(i);
        }



    }
    return fbValues
}

function fizzBuzzB(fizz, buzz){
    let fbValues = [];

    let isFizz = false;
    let isBuzz = false;

    for (let i = 1; i < 101 ; i++){
        isFizz = (i%fizz == 0);
        isBuzz = (i%buzz == 0);

        switch(true){
            case isFizz && isBuzz:{
                fbValues.push('FizzBuzz');
                break;
            }
            case isFizz: {
                fbValues.push('Fizz');
                break;
            }
            case isBuzz:{
                fbValues.push('Buzz')
                break;
            }
            default: {
                fbValues.push(i);
                break;
            }
        }
    }
    return fbValues;
}
//ternary function
//one line fizz buzz
function fizzBuzzC(fizz, buzz){
    let fbValues = []
//i=3
//'Fizz' || 3
// true || 3
    for (let i = 1; i < 101; i++) {
        //value = '' + '' or 1
        let value  = ( (i%fizz == 0 ? 'Fizz' : '') + (i%buzz == 0 ? 'Buzz' : '') || i  );
        fbValues.push(value);
    }

    return fbValues
}


// Final Step - view - layer
function displayValues(fbValues) {

    //Fizz = 3
    //Buzz = 5
    //create an array

    // display a list of numbers from 1 to 100
    let element = document.getElementById("results");
    //reset the display
    element.innerHTML = "";

    for (let index = 0; index < fbValues.length; index++) {



        let item = document.createElement("div");
        item.classList.add("col");
        item.innerHTML = fbValues[index];

        if (fbValues[index] == 'Fizz') {
            item.classList.add("fizz");
        } else if (fbValues[index] == 'Buzz') {
            item.classList.add("Buzz");
        } else if (fbValues[index] == 'FizzBuzz') {
            item.classList.add("fizzbuzz");
        }

        element.appendChild(item);
    }

}