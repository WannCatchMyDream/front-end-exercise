function	sumOfArray(arr){
	return	arr.reduce(function(sum,value){
		return	sum+value;
	})
}

// sumOfArray([1,2,3])