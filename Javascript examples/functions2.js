Project 2 part 2


//req 2-A

var reverseWords = function(" "){
	reverseWords.split(" ").reverse().join(" ").split(" ").reverse().join(" "));
	return reverseWords;
}

//req 2-B

function maxElem(array)
{
  var max = 0;
  var a = array.length;

  for (i=0;i<a;i++)
  	if (array[i] > max)
  		max = array[i];
      
  
  return max;
}

//req 2-C

function isEven(value) {
    
    if (value % 2 == 0)
        return true;
    else
        return false;
   }

function allEven(){
    var numbers = [2, 4, 5, 6, 8];
    if (numbers.every(isEven))
    	return true;
	else
    	return false;
}

//req 2-D

var isMember = function(arr){
	var str = [arr]

	if(str.indexOf(arr)>-1)
		return true
	else
		return false
}


//req 2-E

function sumOfMultiples(n){
	var sum = 0;
	for (i = 0; i <=100; i++)
    	if (n % 3 === 0 && n % 5 === 0) 
       		sum++;
    
    return sum;
}










