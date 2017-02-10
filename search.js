  
//searching methods 


module.exports.linearSearch=function(arr, key) 
{
      var i;

      for (i = 0; i < arr.length; i++) {
          if (key === arr[i])
	        { 
            return i; 
          }
        }
        return -1;

}







module.exports.binarySearch=function(arr, key)
{

    var start  = 0,
        stop = arr.length - 1,
        middle      = Math.floor((stop + start)/2);

    while(arr[middle] != key && start < stop){

        if (key < arr[middle]){
            stop = middle - 1;
        } else if (key > arr[middle]){
            start = middle + 1;
        }
        middle = Math.floor((stop + start)/2);
    }
    return (arr[middle] != key) ? -1 : middle;
}
