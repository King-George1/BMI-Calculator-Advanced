let first = document.getElementById("btn");
first.addEventListener('click', () => {
    let message = "";
    let weight = parseInt(document.getElementById('weight').value);
    let height = parseInt(document.getElementById('height').value);
    let bmi = Math.round(weight / (height ** 2));
    let result = document.getElementById("result");
    

    if (bmi < 18.5) {
        message = ", you are underweight";

    } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
        message = ", you have normal weight";


    } else if ((bmi > 24.9) && (bmi <= 29.9)) {
        message = ", you are overweight";


    } else if ((bmi > 29.9) && (bmi <= 35)) {
        message = " , you are obese";

    } else {
        message = " , you are extremely obese";

    }
    result.innerHTML = `Your BMI is ${bmi} ${message}`;

}, false);