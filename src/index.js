import getHealthStatus from './js/app';

const character = {name: 'Маг', health: 80};
const status = getHealthStatus(character);
console.log(status) 