function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */

const sum = [];
    for(let i of keyboards){
        for (let j of drives){
            if(i + j <= b){
                sum.push(i + j)
            }
        }
    }
     if(sum.length === 0){
         return -1
    }else{
        return Math.max(...sum)
    }
}
