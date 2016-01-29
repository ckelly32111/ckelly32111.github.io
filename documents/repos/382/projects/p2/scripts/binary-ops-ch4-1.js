"use strict";


function computeAND(){
var x = Number($('#x').val());
var y = Number($('#y').val());

$('#truthDisplay').text(Boolean(x&&y));
}

function computeOR(){
var x = Number($('#x').val());
var y = Number($('#y').val());

$('#truthDisplay').text(Boolean(x||y));
}

function computeNOT(){
var x = Number($('#x').val());
var y = Number($('#y').val());

$('#truthDisplay').text(Boolean(!x));
}

function computeXOR(){
var x = Number($('#x').val());
var y = Number($('#y').val());

$('#truthDisplay').text(Boolean(x!=y));
}

$(document).ready($("#AND").on("click", computeAND));
$(document).ready($("#OR").on("click", computeOR));
$(document).ready($("#NOT").on("click", computeNOT));
$(document).ready($("#XOR").on("click", computeXOR));