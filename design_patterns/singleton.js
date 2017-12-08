function Zy(name,haircut){
    this.name = name;
    this.haircut = haircut;
}
Zy.prototype.hobbies = function(){
    console.log('you happy just ok');
}
var zy = new Zy('曾阳','飞刘海');
var zyruoyu = new Zy('曾阳','爆炸头');
// zy.hobbies();
// zyruoyu.hobbies();
// 如何在多次new的时候 只得到一个对象 单例
// class new

// var Singleton = function(name){
//     this.name = name;
//     this.instance = null;//instanceof 实例
// }
// Singleton.getInstance = function(name){//static 方法 静态方法 不需要new 可以在类上调用
//     if(!this.instance){
//         this.instance = new Singleton(name);
//     }

//     return this.instance;
// }
// var a = Singleton.getInstance('sven1');
// var b = Singleton.getInstance('sven2');
// console.log(a);
// console.log(b);
// console.log(a ===b);
// console.log(a.name);
// a === b 引用式赋值
class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    static getInstance(name) {
        if(!this.instance) {
            this.instance = new Singleton(name);
        }
        return this.instance;
    }
}
var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
console.log(a);
console.log(b);
console.log(a ===b);
console.log(a.name);


