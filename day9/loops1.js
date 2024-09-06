// for
array = [1, 2, 3, 4]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
}

for (let i = 0; i < 5; i++) {
    console.log(i);
    for (let j = 0; j < 3; ++j) {
        console.log(i+ " "+ j);
        
    }
    
}

//break and continue
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected 5");
        //break;
        continue;
    }
    console.log(`Value ${i}`);
    
    
}

//while
let i = 0 
while (i <= 10) {
    console.log(`Value ${i}`);
    i+=2
}

//do-while
let j = 11
do {
    console.log(`Value ${j}`);
    j++
} while (j <= 10);