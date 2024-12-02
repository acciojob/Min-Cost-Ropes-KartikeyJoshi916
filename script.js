function mincost(arr)
{ 
	if(arr.length <=1 ){
		return 0;
	}
	let totalcost=0;
	let heap=[...arr]; // copy the array to the heap
	heap.sort((a, b) => a - b); // to make the heap in the ascending order
	while(heap.length > 1){
		const first=heap.shift();
		const second=heap.shift();
		totalcost+=first+second;
		heap.push(first+second);
	heap.sort((a, b) => a - b); // to make the heap in the ascending order
	}
	return totalcost;
}

module.exports=mincost;
