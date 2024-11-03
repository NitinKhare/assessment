import { expect } from 'chai';
import { Calculator } from '../app.js';

let calc;
describe('Testing Calculator functionalities ', ()=>{

    beforeEach(() => {
        calc = new Calculator();
    });
    
    //Input: “”, Output: 0
    it("should return 0 on empty string ",()=>{
        expect(calc.add(0)).to.be.equal(0);
    })

    it("should add", ()=>{
        expect(calc.add(0)).to.equal(0);
    })

})