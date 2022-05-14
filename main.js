function BMI() { 
    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseInt(document.querySelector("#height").value);
    let result = document.querySelector('#result');
    
    if (height === "" || isNaN(height)) {
        result.innerHTML = "Provide a valid height";
    }
  
    else if (weight === "" || isNaN(weight)) {
        result.innerHTML = "Provide a valid weight";
    }

    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML =
            `Under Weight : ${bmi}`;
        }
        else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 
                `Normal : ${bmi}`;
        }
  
        else {
            result.innerHTML =
            `Over Weight : ${bmi}`;
        }
    }    
}

window.onload = () => {
    let btn = document.querySelector("#btn");
    btn.addEventListener("click", BMI);
}