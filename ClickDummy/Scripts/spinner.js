var compassArea;
var compassGroup;

var arrowArea;
var arrowGroup;

window.onload = function () {
    compassArea = Snap('#compassSvg');
    compassGroup = compassArea.group();
    var compass = Snap.load("Kompass.svg", function (loadedFragment) {
        compassGroup.append(loadedFragment);
    });

    arrowArea = Snap('#arrowSvg');
    arrowGroup = arrowArea.group();
    var arrow = Snap.load('Pfeil.svg', function (loadedFragement) {
        arrowGroup.append(loadedFragement);
        //arrowGroup.transform('t0,169');
    });
}

function moveCompass(angle) {
    
    //var myMatrix = new Snap.Matrix();
    //myMatrix.rotate(45);
    var bbox = compassGroup.getBBox(); //bounding box, get coords and centre
    compassGroup.animate({ transform: 'r'+angle+',' + bbox.cx + ',' + bbox.cy }, 1000, mina.linear);
}

function moveAarrow(angle) {
    var bbox = arrowGroup.getBBox();
    arrowGroup.animate({ transform: 'r' + angle + ',' + bbox.cx + ',' + bbox.cy }, 1000, mina.linear)
}
