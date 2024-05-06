table.hidden=true;
function calculate() {
    var a = document.getElementById('i1').value;
    var b = document.getElementById('i2').value;
    var c = parseInt(document.getElementById('i3').value);
    var d = parseInt(document.getElementById('i4').value);
    var e = parseInt(document.getElementById('i5').value);
    var f = parseInt(document.getElementById('i6').value);

    form.hidden=true;
    btun.hidden=true;
    table.hidden=false;

    document.getElementById('name').innerHTML = a + " " + b;

    if (c > 100 || d > 100 || e > 100 || f > 100) {
        alert('Marks cannot be greater than 100');
	}
		
	else if (c < 0 || d < 0 || e < 0 || f < 0) {
        alert('Marks cannot be lesser than 0');
    } 
	else {
        var calc = c + d + e + f;
        document.getElementById('obMarks').innerHTML = calc;
    }

    var per = (calc / 400) * 100;
    per = per.toFixed(2);


    document.getElementById('permarks').innerHTML = per + "%";

    let tot = 400;
    document.getElementById('totmarks').innerHTML = tot;
    	 
    if (per > 80) {
        document.getElementById('grades').innerHTML = "A";
    } else if (per > 70) {
        document.getElementById('grades').innerHTML = "B";
    } else if (per > 60) {
        document.getElementById('grades').innerHTML = "C";
    } else if (per > 50) {
        document.getElementById('grades').innerHTML = "D";
    } else if (per > 40) {
        document.getElementById('grades').innerHTML = "E";
    } else {
        document.getElementById('grades').innerHTML = "F";
    }

    if (c >= 40 && d >= 40 && e >= 40 && f >= 40) {
        document.getElementById('remark').innerHTML = "<span style='color:green'>Pass</span>";
    } else {
        document.getElementById('remark').innerHTML = "<span style='color:red'>Fail</span>";
    }
}
