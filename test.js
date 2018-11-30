var nome = "pipino";
var cognome = "rino";
var age = 18;
var pistolino = ["ciao", "ciccio"];
var piscia = [1, 2, 3, 4, 5, 6];
function go(direction, distance) {
    if (direction === void 0) { direction = "left"; }
    if (distance === void 0) { distance = 100; }
    console.log(direction, distance);
}
go();
go("right");
go("left", 100);
function drive(param) {
    console.log(param.distance);
}
drive({ distance: 100 });
var multiply = function (x) { return x * 2; };
