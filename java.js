let s = 0
function f1() {
    if (s == 0) {
        $(`img`).attr(`src`, `Leo.jpeg`)
        s = 1
    }
    else if(s==1) {
        $(`img`).attr(`src`, `Mike.jpeg`)
        s = 2
    }
    else if (s == 2) {
        $(`img`).attr(`src`, `Raf.webp`)
        s = 3
    }
    else if(s==3) {
        $(`img`).attr(`src`, `don.jpeg`)
        s = 4
    }
    else {
        $(`img`).attr(`src`, `all.jpeg`)
    }



}
$(`button`).click(f1)