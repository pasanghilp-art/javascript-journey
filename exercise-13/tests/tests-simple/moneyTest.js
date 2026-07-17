import {formatCurrency} from '../scripts/utils/money.js';


console.log('test suite: formatCurrency');
console.log('convert cents into dollars');


if(formatCurrency(2999) === '29.99'){
    console.log('true')
} else {
    console.log('false')
}

console.log ('works with o');

if(formatCurrency(0) === '0.00'){
    console.log('true')
} else {
    console.log('false')
}
 
console.log('Rounds up to the nearest cent');

if(formatCurrency(2999.9) === '29.99'){
    console.log('true')
} else {
    console.log('false')
}