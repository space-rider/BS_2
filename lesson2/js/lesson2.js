// JavaScript source code

 function result(button) {
    var y = document.getElementById('formGroupExampleInputY').value;
    var o = document.getElementById('formGroupExampleInputO').value;
    var p = document.getElementById('formGroupExampleInputP').value;
    var x = document.getElementById('resultX');
    var result;

        result =('And result is ' + (+y + +o) * p);
        x.value = result;
}

