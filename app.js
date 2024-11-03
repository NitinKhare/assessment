export class Calculator {
    add(num) {
        if(num === ""){
            return 0;
        }
        if(!isNaN(num)){
            return parseFloat(num);
        }
        const nums = num.split(",");
        let result = 0;
        for(let i=0; i<nums.length; i++){
            if(isNaN(nums[i])){
                throw new Error(`Invalid Number Found : ${nums[i].trim()}`)
            }
            result += parseFloat(nums[i].trim());

        }
        return result;
    }
}