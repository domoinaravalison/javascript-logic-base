const age = prompt('saisissez votre age');
const isAdult = age >= 18;

console.log(age);

!isAdult && alert('Bonjour simple user ');
isAdult && alert('vous etes majeur');
