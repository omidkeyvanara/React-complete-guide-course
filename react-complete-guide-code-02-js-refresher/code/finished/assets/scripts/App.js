const names = [`a`, `b`, `c`, `d`];

console.log(names.indexOf());





const index = names.findIndex((i) => i === `a`);

console.log();

const newNames = names.map((item) => item + names.indexOf());
console.log(newNames);




function handleTimeout() {
    console.log(`time out!`);
    
}

setTimeout(handleTimeout(),4000)