const nome = "pipino";
let cognome = "rino";
let age: number = 18;
let pistolino:string[] = ["ciao","ciccio"];
let piscia:number[] = [1,2,3,4,5,6]


function go(direction:string = "left",distance:number = 100){
    console.log(direction,distance);
}
go();
go("right");
go("left",100);
function drive(param:any){
    console.log(param.distance);
}
drive({distance:100});
const multiply = (x) => x*2;
