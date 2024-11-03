//https://blog.incubyte.co/blog/tdd-assessment/
export class Calculator {
    add(num) {
        let del = ',';
        if(num === ""){
            return 0;
        }
        if(!isNaN(num)){
            return parseFloat(num);
        }
        if(typeof num != "string"){
            throw new Error("Invalid type");
        }
        if(num.startsWith("//")){
            const newLineIndex = num.indexOf('\n');
            del = num.substring(2, newLineIndex);
            num = num.substring(newLineIndex+1);
        }
        const nums = num.replace(/\n/g, del).split(del);
        let result = 0;
        for(let i=0; i<nums.length; i++){
            if (nums[i] == '') continue;
            if(isNaN(nums[i])){
                throw new Error(`Invalid Number Found : ${nums[i].trim()}`)
            }
            result += parseFloat(nums[i].trim());

        }
        return result;
    }
}

const calc = new Calculator()
console.log(calc.add("// \n7  8 "));