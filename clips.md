<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: Arial
}

- {
  box-sizing: border-box;
  }

/_ The browser window _/
.browser-container {
border: 3px solid #f1f1f1;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
}

/_ Container for columns and the top "toolbar" _/
.row {
padding: 10px;
background: #f1f1f1;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
}

/_ Create three unequal columns that floats next to each other _/
.column {
float: left;
}

.left {
width: 15%;
}

.right {
width: 10%;
}

.middle {
width: 75%;
}

/_ Clear floats after the columns _/
.row:after {
content: "";
display: table;
clear: both;
}

/_ Three dots _/
.dot {
margin-top: 4px;
height: 12px;
width: 12px;
background-color: #bbb;
border-radius: 50%;
display: inline-block;
}

/_ Style the input field _/
input[type=text] {
width: 100%;
border-radius: 3px;
border: none;
background-color: white;
margin-top: -8px;
height: 25px;
color: #666;
padding: 5px;
}

/_ Three bars (hamburger menu) _/
.bar {
width: 17px;
height: 3px;
background-color: #aaa;
margin: 3px 0;
display: block;
}

/_ Page content _/
.browser-window {
padding: 10px;
}
</style>

</head>
<body>

<div class="browser-container">
  <div class="row">
    <div class="column left">
      <span class="dot" style="background:#ED594A;"></span>
      <span class="dot" style="background:#FDD800;"></span>
      <span class="dot" style="background:#5AC05A;"></span>
    </div>
    <div class="column middle">
      <input type="text" value="http://www.w3schools.com">
    </div>
    <div class="column right">
      <div style="float:right">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </div>

  <div class="browser-window">

  </div>
</div>

</body>
</html>
