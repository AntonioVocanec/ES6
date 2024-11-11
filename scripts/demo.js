"use strict";
console.log("Hello World");
function PozdraviCovjeka(name) {
    let greet;
    if (name === "Antonio") {
        greet = "Bok Antonio";
    }
    else {
        greet = "Bok";
    }
    console.log(greet);
}
PozdraviCovjeka("Antoni");
for (let h = 1; h < 10; h++) {
    setTimeout(function () {
        console.log(h);
    }, 1000);
}
//# sourceMappingURL=demo.js.map