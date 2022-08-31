import * as controller from './controller.js';
import chalk from 'chalk';

const suma = controller.suma(1,2);
const multiplica = controller.multiplica(4,5);

console.log(suma);
console.log(chalk.green(multiplica));