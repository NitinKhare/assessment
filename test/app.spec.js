import { expect } from 'chai';
import { Calculator } from '../app.js';

let calc;
describe('Testing Calculator functionalities ', ()=>{

    beforeEach(() => {
        calc = new Calculator();
    });

    //Input: “”, Output: 0
    it("it should return 0 on empty string ",()=>{
        expect(calc.add(0)).to.be.equal(0);
    })

    it("it should add", ()=>{
        expect(calc.add(0)).to.equal(0);
    })
    //Input: “1,5”, Output: 6
    it("it should return sum for two numbers", () => {
        expect(calc.add("1,5")).to.equal(6);
    });

    //Input: “1, 5”, Output: 6
    it("it should return sum for two numbers handling trailing spaces", () => {
        expect(calc.add("1, 9 ")).to.equal(10);
    });

    it("it should fail for invalid numbers", () => {
        expect(() => calc.add("-1, 2.f")).to.throw('Invalid Number Found : 2.f');
    });

    it('it should add multiple numbers', () => {
        expect(calc.add("7,8,9,10")).to.equal(34);
    });

})