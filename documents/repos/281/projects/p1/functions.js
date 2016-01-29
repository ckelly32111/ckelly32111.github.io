

//p1 req 2-A

var pluralizer = function () {
	if (this.lastChar() === 'y') {
		if ( (this.charAt(this.length - 2)).isVowel() ) {
			return this + 's';
		}
		else { 
			return this.slice(0, -1) + 'ies';
		}
	}
	else if (['x','s'].indexOf(this.lastChar()) !== -1) {
		return this + 'es';
	}
	else {		
		return this + 's';
	}
}

function pluralizer(noun){
	if(noun[noun.length - 1] == "s")
		return noun + "es"
	else if(noun[noun.length - 1] == "y")
		return noun;
	else
}

//p1 req 2-B

var countDivby3 = function(n) {
	if(n % 3 === 0)
		return true;
	else
		return false;
	Math.count(true);
};

//p1 req 2-C

var reversewords = function (str) {
  var o = '';
  for (var i = str.length - 1; i >= 0; i--)
    o += str[i];
  return o;
};

//p1 req 2-D

var isVowel = function(ch){
	var vowels = /[aeiouy]/i;
	if(vowels.test(ch))
		return true;
	else
		return false;
};

//p1 req 2-E

var isConsonant = function(ch){
	var consonant=/[^aeiouy]/i;
	if(consonant.test(ch))
		return true
	else
		return false
};

//p1 req 2-F

var countVowelPrefixWords = function(str) {
	var prefix = 
};




