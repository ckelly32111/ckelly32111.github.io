

//p1 req 2-A

function pluralizer(noun){
	if(noun[noun.length - 1] == "s" , "x")
		return noun + "es";
	else if(noun[noun.length - 1] == "y")
		return noun.slice(0, noun.length - 1) + "ies";
	else
		return noun + "s";
}

//p1 req 2-B

function countDivBy3(n){
	var count = 0
	for (var i = 1, i<=n , i++)
		if(n % 3)
			++count;
		else
			return "not divisible by 3"
	return count
}

//p1 req 2-C

function reverseWords(str) {
  var o = '';
  for (var i = str.length - 1; i >= 0; i--)
    o += str[i];
  return o;
}

//p1 req 2-D

function isVowel(ch){
	var vowels = /[aeiouy]/i;
	if(vowels.test(ch))
		return true;
	else
		return false;
}

//p1 req 2-E

function isConsonant(ch){
	var consonant=/[^aeiouy]/i;
	if(consonant.test(ch))
		return true;
	else
		return false;
}

//p1 req 2-F

function countVowelPrefixWords(str){
	var words = str.split("");
	var count = 0;
	for(var i = 0; i < str.length ; ++i)  
    	if(isVowel(str[0]) && isVowel(str[1]))
			++count;
  	return count; 
}