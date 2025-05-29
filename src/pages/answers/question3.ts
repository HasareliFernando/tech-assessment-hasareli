// **
// * @param {number[]} numbers
// * @param {number} target
// * @return {number[]}
// // */
// const twoSum = function (numbers, target) {
// // your code here
// };

function twoSum(numbers: number[], target: number): number[] {
  let ret_number_array: number[] = [];
  numbers.forEach((element, index) => {
    if (ret_number_array.length > 0) {
      return;
    }
    let diff = target - element;
    let hasNumber = numbers.indexOf(diff, index + 1);

    if (hasNumber > 0) {
      ret_number_array.push(index);
      ret_number_array.push(hasNumber);
    }
  });
  return ret_number_array;
}
export default function Question3() {
  console.log(twoSum([4, 11, 17, 25], 21));
  console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
  console.log(twoSum([-1, 0], -1));
}
