import { renderPaymentSummary } from "../../scripts/checkout/paymentSummary";
import { 
        loadFromStorage,
        cart
 } from "../../data/cart.js";


 describe('test suite: renderPaymentSymmary',()=>{
    beforeEach(()=>{
        spyOn(localStorage,'setItem');
        document.querySelector('.')
    })
 });