import { expect } from 'chai';
import { Calculator } from '../app.js';

let calc;
describe('Testing Calculator functionalities ', ()=>{

    beforeEach(() => {
        calc = new Calculator();
    });

    it("should add", ()=>{
        expect(calc.add(0)).to.equal(0);
    })

})