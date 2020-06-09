// class Spy {
//     constructor(obj, methodName){
//         this.count = 0;
//         const method = obj[methodName];
//         if(!obj[methodName]){
//             throw new Error("No such method!");
//         }
//         obj[methodName] = function(...args){
//             this.count++;
//             return method.apply(obj, args);
//         }.bind(this);
//     }
// }
function createSpy(obj, methodName) {
    const spy = { count: 0 };
    const method = obj[methodName];
    if (!obj[methodName]) {
        throw new Error("No such method!");
    }
    obj[methodName] = function (...args) {
        this.count++;
        return method.apply(obj, args);
    }.bind(spy);
    return spy;
}