function convolution(arr1, arr2) {
  arr2 = arr2.reverse();

  const result = [];

  const length = arr1.length + arr2.length - 1;
  for (let x = 1; x <= length; x++) {
    let sum = 0;
    for (const index in arr1) {
      const val = arr2[arr2.length - (x - index)];
      if (!val) continue;
      sum += arr1[index] * val;
    }
    result.push(sum);
  }

  return result;
}

console.log(convolution([1, 2, 3], [4, 5, 6]));
// Output: [4, 13, 28, 27, 18]
