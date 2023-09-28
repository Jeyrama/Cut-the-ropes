/*
 You are given N ropes, where the length of each rope is a positive integer. 
 At each step, you have to reduce all the ropes by the length of the smallest rope.

The step will be repeated until no ropes are left. Given the length of N ropes, 
print the number of ropes that are left before each step.

Example:
For a = [3, 3, 2, 9, 7], the result should be [5, 4, 2, 1]

You have 5 ropes:       
                 3 3 2 9 7   ( 5 left)
                  
step 1:          1 1 0 7 5   ( 4 left)

step 2:          0 0 0 6 4   ( 2 left)

step 3:          0 0 0 0 2   ( 1 left)

step 4:          0 0 0 0 0    

Hence the result is [5, 4, 2, 1]
*/


// Solution

function cutTheRopes(a) {
  let sums = [a.length];
  while (Math.max(...a) !== 0) {
    let s = a.sort((a, b) => a - b).find(i => i !== 0);
    a = a.map(rope => {
      if ((rope - s) < 0) {
        return 0;
      }
      return (rope - s);
    })
    let count = a.filter(rope => rope !== 0).length;
    if (count !== 0) {
      sums.push(count);
    }
  }
  return sums;
}

// or