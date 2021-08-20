var maxProfit = function(prices) {
    let max = 0;
    let min = prices[0];
    for(let i = 1; i < prices.length;i++){
        if(prices[i] < min){
            min = prices[i];
        }
        let profit = prices[i] - min;
        if(profit > max){
            max = profit
        }
    }
    return max;
};
