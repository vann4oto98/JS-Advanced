function modify({weight, experience, levelOfHydrated, dizziness}){
    if (dizziness === true){
        levelOfHydrated += 0.1 * weight * experience;
        dizziness = false;
    }

    return {weight, experience, levelOfHydrated, dizziness};
}

console.log(modify({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }  
  ));