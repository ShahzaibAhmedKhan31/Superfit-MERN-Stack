

export function Total_Average_calories(weight,height,age,gender,activity) {
    
    const BMR = Basic_metabolic_rate(weight, height, age, gender);
    const AMR = Active_metabolic_rate(BMR, activity);
    return (roundNearest100(AMR));
}

function Basic_metabolic_rate(weight, height, age, gender){
    
    if (gender == "male") {
        return ( 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age))
    }
    else if (gender == "female"){
        return (655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age))     
    }
}

function Active_metabolic_rate(bmr, activity){
    
    if (activity == "Sedentary") {
        return (bmr * 1.2)
    }
    else if (activity == "Light") {
        return (bmr * 1.375)
    }
    else if (activity == "Moderate") {
        return (bmr * 1.55)
    }
    else if (activity == "Active") {
        return (bmr * 1.9)
    }
}

function roundNearest100(Cal) {
    return Math.round(Cal / 100) * 100;
}