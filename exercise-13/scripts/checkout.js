import { renderPaymentSummary } from './checkout/paymentSummary.js';
import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/backend-practice.js';
//import '../data/cart-oop.js';

async function loadPage (){
    console.log('loadPage');
    await loadProductsFetch();

    await new Promise((resolve)=>{
            loadCart(()=>{
                resolve();
            });
        });
    
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{
            loadCart(()=>{
                resolve();
            });
        })

]).then((values)=>{
    console.log(values);
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});
*/


/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('value1');
    });

}).then((value)=>{
    console.log(value)
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });

}).then(()=>{
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
})
*/

/*
loadProducts(()=>{
    loadCart(()=>{
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/
