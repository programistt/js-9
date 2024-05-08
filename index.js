let birinchi = Number(prompt("birinchi sonni kiriting : "))
let ikkinchi = Number(prompt("ikkinchi sonni kiriting : "))

function kattami() {
    if (birinchi > ikkinchi) {
        alert(birinchi +  + " sondan katta")
    } if (birinchi === ikkinchi) {
        alert()
    } else {
        alert(birinchi + ikkinchi + " sondan kichik")
    }
}

kattami();