function wakeDog(dogName, dogBreed) {
  console.log(`wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName,dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`)
  return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
}

function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
}

function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`)
}

unleashDog = function(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`)
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


 function exerciseDog(dogName,dogBreed) {
   return routine.map(fn => fn(dogName,dogBreed))
 }
