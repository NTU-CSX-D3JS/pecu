function myFunction(p1, p2) {
    var show = "((" + p1.toString() + "+" + p1.toString() + ")*(" + p1.toString() + "-" + p2.toString() + ")) = ";
    var ans = ((p1 + p2) * (p1 - p2));
    var str = show + ans.toString();
    return str
}

function changeColor(obj) {
	console.log(obj);
	var newObj = obj.setAttribute("color", "blue");
	return newObj;
}

function d3select(id) {
	return document.getElementById(id);
}
