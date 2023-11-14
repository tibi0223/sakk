var a = 5
console.log(typeof(a))
a="Helló"
console.log(typeof(a))
a=true
console.log(typeof(a))

console.log(b)
var b ="alma"
console.log(b)

b="6"
a=6
if(a==b) {
    console.log("A egyenlő B-vel") // 3db === esetén típust is vizsgál
    var ifben = 12
    c1 = 7
    let c = 7
}
else console.log("Nem egyenlő")

console.log(ifben)


// console.log(c) LET esetén hierarchia van
console.log(c1)

for (var i = 0; i < 10; ) {
    console.log("i:",i)
    i++
}
t=['alma',2,false]
t[10]=10
console.log(t.length)
console.log(t)

for (let i = 0; i < t.length; i++){
    console.log(t[i])
    
}

t.forEach(function kiir(e){
    console.log("Foreach", e)
})

fv = ()=> console.log("Szia!")  // vagy fv = function name(){}

console.log(fv())
 
