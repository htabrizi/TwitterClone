var xmlhttp = new XMLHttpRequest();
xmlhttp.open("Get", "/.users.json", true);
xmlhttp.onload = function () {
  if (this.status == 200) {
    var myData = JSON.parse(this.responseText);
    console.log(myData);
  }
} 
xmlhttp.send();

 
