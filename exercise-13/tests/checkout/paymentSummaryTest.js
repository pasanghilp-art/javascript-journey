import { renderPaymentSummary } from "../../scripts/checkout/paymentSummary.js";
import { 
        loadFromStorage,
        cart
 } from "../../data/cart.js";

const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
const productId2 =
'15b6fc6f-327a-4ec4-896f-486349e85a3d';

 describe('test suite: renderPaymentSummary',()=>{

    beforeEach(()=>{
        spyOn(localStorage,'setItem');
        document.querySelector('.js-test-container').innerHTML =`
        <div class="js-payment-summary"></div>
        `;

        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([
                {
                productId: productId1,
                        quantity: 2,
                        deliveryOptionId: '1'
                    },{
                        productId: productId2 ,
                        quantity: 1,
                        deliveryOptionId: '2'
                    }
            ]);
        });
        loadFromStorage();
        renderPaymentSummary();
    });

    it('counts current cartQuantity', ()=>{
        expect(
            document.querySelector('.js-payment-summary-row').innerText
        ).toContain('Items (3)');
    });

    it('count shipping and handling const',()=>{
        expect(
            document.querySelector('.js-payment-summary-money').innerText
        ).toContain('$4.99');
    });
 });