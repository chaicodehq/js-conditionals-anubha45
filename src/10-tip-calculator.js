/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
  var tip, totalAmount, tipAmount;
  if(billAmount<=0 || !Number.isInteger(serviceRating) || serviceRating < 1 || serviceRating > 5) return null;
  else{
    switch(serviceRating){
      case 1 : tip = 5;
                totalAmount=1.05*billAmount;
                tipAmount=0.05*billAmount;
                break;
      case 2 : tip = 10;
                totalAmount=1.1*billAmount;
                tipAmount=0.1*billAmount;
                break;
      case 3 : tip = 15;
                 totalAmount=1.15*billAmount;
                  tipAmount=0.15*billAmount;
                  break;
      case 4 : tip = 20;
                 totalAmount=1.2*billAmount;
                tipAmount=0.2*billAmount;
                break;
      case 5 : tip = 25;
                 totalAmount=1.25*billAmount;
                tipAmount=0.25*billAmount;
                break;
      default: return null;
    }
  tipAmount = Number(tipAmount.toFixed(2));
  totalAmount = Number((billAmount + tipAmount).toFixed(2));

  return {
    tipPercentage: tip,
    tipAmount,
    totalAmount
  };
  }
  
}
