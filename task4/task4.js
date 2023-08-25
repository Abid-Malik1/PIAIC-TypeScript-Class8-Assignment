function calculateCircleArea(radius) {
    var area = Math.PI * radius * radius;
    return area;
}
var radius = 5; // Replace with the desired radius
var area = calculateCircleArea(radius);
console.log("The area of a circle with radius ".concat(radius, " is: ").concat(area));
