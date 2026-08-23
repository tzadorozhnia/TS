// #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
let getCylinderArea = (r:number, h:number):number => 2 * Math.PI * r * (r + h);

console.log(getCylinderArea(5, 25))