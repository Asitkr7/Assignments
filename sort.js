//sorting methods




function swap(items, first, second)
{
	var temp = items[first];
    items[first] = items[second];
    items[second] = temp;
}


module.exports.bubbleSort=function(items){

    var len = items.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (items[j] > items[j+1]){
                swap(items, j, j+1);
            }
        }
    }

    return items;
}


module.exports.insertionSort= function(arr)
{

	var i,j,key;	
  for ( i = 1; i < arr.length; i++)
  {
         key = arr[i];
        j = i-1;
       while (j >= 0 && arr[j] > key)
      {
          arr[j+1] = arr[j];
          j = j-1;
      }
      arr[j+1] = key;
  }

	return arr;
}



module.exports.selectionSort=function(items)
{
	var len = items.length,
        min;
	    for (i=0; i < len; i++)
	    {
	    min = i;
        for (j=i+1; j < len; j++)
        {
	        if (items[j] < items[min])
	        {
	                min = j;
	        }
	        if (i != min)
	        {
	            swap(items, i, min);
	        }
	    }
	    return items;
	}

}


