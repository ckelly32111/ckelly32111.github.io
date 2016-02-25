"use strict";


function display() {
  var A = $('#A').val();
  var B = $('#B').val();

  $('#ADisplay').html(A);
  $('#BDisplay').html(B);
}

$(document).ready($(".button").on("click", display));