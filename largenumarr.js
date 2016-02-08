function largestOfFour(arr) {
	var largeArr =[];
	var largeNum =0;
 for(var i =0; i < arr.length; i++){
 	for( var j = 0; j < arr[i].length; j++ ){
 		if( largeNum < arr[i][j]){
 			largeArr[i] = arr[i][j];
 			largeNum = arr[i][j];
 		}		
 	}largeNum =0;
 }
  console.log(largeArr);
  return largeArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
