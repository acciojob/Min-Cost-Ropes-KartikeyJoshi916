function mincost(arr)
{ 
//write your code here
// return the min cost
  let arrSorted=arr.sort();
	let sum=0;
	arrSorted.map((elem,i)=>{
		sum+=elem;
	});
	return sum;
}

module.exports=mincost;
