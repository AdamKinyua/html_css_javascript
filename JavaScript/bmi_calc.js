function bmiCalculator(weight, height) {
    var bmi = Math.floor(weight/(height*height));
    var interpretation = "";
    if (bmi < 18.5 ) {
        interpretation = "Your bmi is " + bmi + ", so you are underwight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your bmi is " + bmi + ", so you have a normal weight.";
    } else if (bmi > 24.9) {
        interpretation = "Your bmi is " + bmi + ", so you are overweight.";
    }

    return interpretation
}

bmiCalculator(71, 1.7)
