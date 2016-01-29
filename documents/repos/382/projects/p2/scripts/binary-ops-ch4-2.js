function display() {
  var table = $("table").get(0);
  table.innerHTML = "";
  var btnIndex = $("button").index(this);

  if (btnIndex == 0) 
  {
    //this is the and button
    var row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "x";
    row.insertCell(1).innerHTML = "y";
    row.insertCell(2).innerHTML = "x && y";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "0";
    row.insertCell(1).innerHTML = "0";
    row.insertCell(2).innerHTML = "0";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "0";
    row.insertCell(1).innerHTML = "1";
    row.insertCell(2).innerHTML = "0";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "1";
    row.insertCell(1).innerHTML = "0";
    row.insertCell(2).innerHTML = "0";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "1";
    row.insertCell(1).innerHTML = "1";
    row.insertCell(2).innerHTML = "1";

      $("table").css({

  "background-color": "#777",
  "color": "white",
  "border-radius": "10px",
  "text-align": "center"
});


  }
  else 
      if (btnIndex == 1) 
  {
    //this is the or button
    var row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "x";
    row.insertCell(1).innerHTML = "y";
    row.insertCell(2).innerHTML = "x || y";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "0";
    row.insertCell(1).innerHTML = "0";
    row.insertCell(2).innerHTML = "0";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "0";
    row.insertCell(1).innerHTML = "1";
    row.insertCell(2).innerHTML = "1";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "1";
    row.insertCell(1).innerHTML = "0";
    row.insertCell(2).innerHTML = "1";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "1";
    row.insertCell(1).innerHTML = "1";
    row.insertCell(2).innerHTML = "1";

      $("table").css({

  "background-color": "#777",
  "color": "white",
  "border-radius": "10px",
  "text-align": "center"
});


  }
  else
    if (btnIndex == 2) 
  {
    //this is the not button
    var row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "x";
    row.insertCell(1).innerHTML = "!x";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "0";
    row.insertCell(1).innerHTML = "1";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "1";
    row.insertCell(1).innerHTML = "0";

      $("table").css({

  "background-color": "#777",
  "color": "white",
  "border-radius": "10px",
  "text-align": "center"
});


  }

  else
    if (btnIndex == 3) 
  {
    //this is the xor button
    var row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "x";
    row.insertCell(1).innerHTML = "y";
    row.insertCell(2).innerHTML = "x &oplus; y";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "0";
    row.insertCell(1).innerHTML = "0";
    row.insertCell(2).innerHTML = "0";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "0";
    row.insertCell(1).innerHTML = "1";
    row.insertCell(2).innerHTML = "1";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "1";
    row.insertCell(1).innerHTML = "0";
    row.insertCell(2).innerHTML = "1";

    row = table.insertRow(-1);
    row.insertCell(0).innerHTML = "1";
    row.insertCell(1).innerHTML = "1";
    row.insertCell(2).innerHTML = "0";

      $("table").css({

  "background-color": "#777",
  "color": "white",
  "border-radius": "10px",
  "text-align": "center"
});


  }

}

$(document).ready(function(){
$("#AND").on("click", display)
$("#OR").on("click", display)
$("#NOT").on("click", display)
$("#XOR").on("click", display)
});
