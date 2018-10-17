const age = prompt('saisissez votre age');
const isAdult = age >= 18;

console.log(age);

!isAdult && alert('Bonjour simple user ');
isAdult && alert('vous etes majeur');

const role = prompt('quel est votre role dans la societe');

const isAdmin = role === 'admin';

isAdult && isAdmin && alert('Bienvenue admin');

const pass = prompt('votre mot de passe');

const isMaster = pass.length >= 5;

isMaster && isAdmin && isAdult && alert('bienvenu master user');
