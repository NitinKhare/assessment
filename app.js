//https://blog.incubyte.co/blog/tdd-assessment/
export class Calculator {
    add(num) {
        let del = ',';
        if (num === "") {
            return 0;
        }
        if (!isNaN(num)) {
            return parseFloat(num);
        }
        if (typeof num != "string") {
            throw new Error("Invalid type");
        }
        if (num.startsWith("//")) {
            const newLineIndex = num.indexOf('\n');
            del = num.substring(2, newLineIndex);
            num = num.substring(newLineIndex + 1);
        }
        const nums = num.replace(/\n/g, del).split(del);
        let result = 0;
        const negativeNumber = [];
        let negativeNumberFound = false;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == '') continue;
            if (isNaN(nums[i])) {
                throw new Error(`Invalid Number Found : ${nums[i].trim()}`);
            }
            if (nums[i] < 0) {
                negativeNumber.push(parseFloat(nums[i]));
                negativeNumberFound = true;
            } else if (!negativeNumberFound) {
                result += parseFloat(nums[i].trim());
            }
        }
        if(negativeNumber.length){
            throw new Error(`negative numbers not allowed ${negativeNumber.join(',')}`)
        }
        return result;
    }
}

const calc = new Calculator()
console.log(calc.add("// \n7  8 "));