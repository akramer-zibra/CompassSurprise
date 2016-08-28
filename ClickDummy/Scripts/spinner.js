var s;
var g;
window.onload = function () {
    s = Snap(400,400);
    g = s.group();
    var compass = Snap.load("Kompass.svg", function (loadedFragment) {
        g.append(loadedFragment);
    });
}

function moveCompass(angle) {
    
    //var myMatrix = new Snap.Matrix();
    //myMatrix.rotate(45);
    var bbox = g.getBBox(); //bounding box, get coords and centre
    g.animate({ transform: "r180," + bbox.cx + ',' + bbox.cy }, 1000, mina.linear);
}
