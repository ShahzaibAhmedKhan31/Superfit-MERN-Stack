

export function Goal_cal (goal,Avg_calories) {
    
    if (goal == "Gain a little") {
        return Avg_calories + 400;
    }
    else if (goal == "Gain a lot") {
        return Avg_calories + 800;
    }
    else if (goal == "Loss a little") {
        return Avg_calories - 400;
    }
    else if (goal == "Loss a lot") {
        return Avg_calories - 800;
    }
}