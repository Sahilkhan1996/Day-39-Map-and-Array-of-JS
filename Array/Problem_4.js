//three elements whose sum is equal to zero
arr = [0, -1, 2, -3, 1];
	
// Prints all triplets in arr[] with 0 sum
	function findTriplets(arr) {
		let found = false;
		for (let i = 0; i < arr.length - 2; i++) {
		for (let j = i + 1; j < arr.length - 1; j++) {
			for (let k = j + 1; k < arr.length; k++) {
				if (arr[i] + arr[j] + arr[k] === 0)
				{
					document.write(arr[i]);
					document.write(" ");
					document.write(arr[j]);
					document.write(" ");
					document.write(arr[k]);
					document.write("<br>");
					found = true;
					
				}
			}
		}
		// If no triplet with 0 sum found in array
		if(found === false) {
			document.write(" not exist ");
		}
	}
}