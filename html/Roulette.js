function roulette () {
    let x = Math.floor((Math.random() * 37) + 1);
    let s = [];
    if (x == 37) {
        document.getElementById("ret").innerHTML = "0, Rouge, Impair, Passe";
        console.log ("0, Rouge, Impair, Passe");
    } else if (x == 38) {
        document.getElementById("ret").innerHTML = "00, Noir, Pair, Passe";
        console.log ("00, Noir, Pair, Passe");
    } else {
        s.push(x.toString(10));
        if (x < 11 || (x > 18 && x < 29)) {
            if (x % 2 == 0) {
                s.push("Noir");
                s.push("Pair");
            } else {
                s.push("Rouge");
                s.push("Impair");
            }
        } else {
            if (x % 2 == 0) {
                s.push("Rouge");
                s.push("Pair");
            } else {
                s.push("Noir");
                s.push("Impair");
            }
        }
        if (x < 19) {
            s.push("Manque");
        } else {
            s.push("Passe");
        }
        
        document.getElementById("ret").innerHTML = "Result: " + s.join(", ");
        console.log ("Result: " + s.join(", "));
    }
}
