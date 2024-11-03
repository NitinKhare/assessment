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
    //"1\n2,3"
    it('it should handle newline ', () => {
        expect(calc.add("1\n2, 3")).to.equal(6);
    });

    it('it should support different delimiter => ;', () => {
        expect(calc.add("//;\n1;2")).to.equal(3);
    });

    it('it should support different delimiter => :', () => {
        expect(calc.add("//:\n7:8")).to.equal(15);
    });

    it('it should support different delimiter with space=> :', () => {
        expect(calc.add("//:\n7: 8 ")).to.equal(15);
    });

    it('it should support space as a delimiter', () => {
        expect(calc.add("// \n7  8 ")).to.equal(15);
    });

    it('it should fail for inconsitent delimiter => :', () => {
        expect(() => calc.add("//:\n7,8")).to.throw('Invalid Number Found : 7,8');
    });

    it('it should show all negative numbers seperated by commas', () => {
        expect(() => calc.add("15,-14, 23,-50"))
            .to.throw('negative numbers not allowed -14,-50');
    });

})