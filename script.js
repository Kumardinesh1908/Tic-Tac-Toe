var count = 1;

function fill(control) {
    if (count <= 8) {

        if (count % 2 != 0) {
            putData(control.id, "X");
            document.getElementById(control.id).style.pointerEvents = "none";
        }
        else {
            putData(control.id, "O");
            document.getElementById(control.id).style.pointerEvents = "none";
        }
        count++;
        if (checkWin()) {
            setTimeout(function () { alert("Winner") }, 200);
            setTimeout(reset, 200);
        }
    }
    else if(count==9)
    {
        // if (count % 2 != 0) {
            putData(control.id, "X");
            document.getElementById(control.id).style.pointerEvents = "none";
        // }
        // count++;
        if (checkWin()) {
            setTimeout(function () { alert("Winner") }, 200);
            setTimeout(reset, 200);
        }
        else{
        setTimeout(function (){window.alert('Match Draw')},200);
        setTimeout(reset, 200);
        }
    }
    // if (!checkWin()) {
    //     window.alert('Match Draw');
    //     reset();
    // }

}


function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById('div' + i).innerHTML = "";
        document.getElementById('div' + i).style.pointerEvents = 'auto';
    }
    count = 1;
}

function checkWin() {
    if (checkCondition('div1', 'div2', 'div3') ||
        checkCondition('div4', 'div5', 'div6') || 
        checkCondition('div7', 'div8', 'div9') ||
        checkCondition('div1', 'div4', 'div7') ||
        checkCondition('div2', 'div5', 'div8') || 
        checkCondition('div3', 'div6', 'div9') ||  
        checkCondition('div1', 'div5', 'div9') || 
        checkCondition('div3', 'div5', 'div7')) {
        return true;
    }
    return false;
}

function checkCondition(div1, div2, div3) {
    if (getData(div1) != "" &&
        getData(div2) != "" &&
        getData(div3) != "" &&
        getData(div1) == getData(div2) &&
        getData(div2) == getData(div3)) {
        return true;
    }
}

function putData(div, data) {
    document.getElementById(div).innerHTML = data;
}

function getData(div) {
    return document.getElementById(div).innerHTML;
}