let tbl = document.createElement("table");
let L = [["#", "Color", "Pairity", "Pass/Fail"]];

window.onload = function() {
    init();
}

function init() {
    for(let i=0;i<L.length;++i){
        let row = L[i];
        let tr = document.createElement("tr");
        tbl.appendChild(tr);
        for(let j=0;j<row.length;++j){
            let th = document.createElement("th");
            tr.appendChild(th);
            let txt = document.createTextNode( row[j] );
            th.appendChild( txt );
        }
    }
    document.body.appendChild(tbl);
}

function roulette () {
    let x = Math.floor((Math.random() * 38) + 1);
    let s = []
    if (x === 37) {
        s.push ("0", "Rouge", "Impair", "Passe");
    } else if (x === 38) {
        s.push ("00", "Noir", "Pair", "Passe");
    } else if (x < 37) {
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
    }

    L.push(s);

    let row = L[L.length - 1];
    let tr = document.createElement("tr");
    tbl.appendChild(tr);
    for(let j=0;j<row.length;++j){
        let td = document.createElement("td");
        tr.appendChild(td);
        let txt = document.createTextNode( row[j] );
        td.appendChild(txt);
        switch (j) {
            case 0:
                break;
            case 1:
                if (td.childNodes[0].nodeValue === "Rouge") {
                    td.className = "red";
                } else {
                    td.className = "black";
                }
                break;
            case 2:
                if (td.childNodes[0].nodeValue === "Pair") {
                    td.className = "pair";
                } else {
                    td.className = "impair";
                }
                break;
            case 3:
                if (td.childNodes[0].nodeValue === "Passe") {
                    td.className = "pass";
                } else {
                    td.className = "fail";
                }
                break;
        }
    }
}