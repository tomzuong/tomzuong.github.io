function calculateAge(yearBorn) {
	var currentTime = new Date();
	var currentYear = currentTime.getFullYear();
	return currentYear - yearBorn;
}


var name = prompt("Nhập tên của bạn:");

var yearBorn = prompt("Nhập năm sinh của bạn:");

var age = calculateAge(yearBorn);

console.log(name + " is " + age + " years old");
