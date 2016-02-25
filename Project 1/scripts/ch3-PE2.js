"use strict";


function display() {
  var val = $('#gallons').val();

	$('#gallonsDisplay').html(val);
}

$(document).ready($("#btn1").on("click", display));
