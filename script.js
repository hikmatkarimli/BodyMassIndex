window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
}

function calculateBMI() {
    let heightInput = document.querySelector("#height").value;
    let weightInput = document.querySelector("#weight").value;
    let resultElement = document.querySelector("#result");

    let height = parseFloat(heightInput);
    let weight = parseFloat(weightInput);

    if (isNaN(height) || height <= 0) {
        resultElement.innerText = "Please provide a valid height in meters";
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        resultElement.innerText = "Please provide a valid weight in kilograms";
        return;
    }

    let bmi = weight / (height ** 2);

    displayBMIResult(bmi, resultElement);
}

function displayBMIResult(bmi, resultElement) {
    let bmiCategory;

    if (bmi < 16) {
        bmiCategory = "Severe Thinness";
    } else if (bmi >= 16 && bmi < 17) {
        bmiCategory = "Moderate Thinness";
    } else if (bmi >= 17 && bmi < 18.5) {
        bmiCategory = "Mild Thinness";
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = "Overweight";
    } else if (bmi >= 30 && bmi < 35) {
        bmiCategory = "Obese Class I";
    } else if (bmi >= 35 && bmi < 40) {
        bmiCategory = "Obese Class II";
    } else {
        bmiCategory = "Obese Class III";
    }

    resultElement.innerText = `Your BMI: ${bmi.toFixed(2)}\nCategory: ${bmiCategory}`;
}
