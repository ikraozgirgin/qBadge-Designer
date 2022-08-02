//canvas
const initCanvas = (id) => {
  return new fabric.Canvas(id, {
    width: 600,
    height: 600,
    backgroundColor: 'white',
    selection: true,
  })
}

const canvas = initCanvas('canvas');
canvas.renderAll();

//rectangle
const createRect = (canvas) => {
  console.log("rect")
  const canvasCenter = canvas.getCenter()
  const rect = new fabric.Rect({
    width: 200,
    height: 200,
    fill: 'green',
    left: canvasCenter.left,
    top: canvasCenter.top,
    originX: 'center',
    originY: 'center',
    cornerColor: 'white'
  })

  canvas.add(rect)
  canvas.renderAll()
}

//badge1
const createBadge1 = (canvas) => {
  console.log("badge1")
  const canvasCenter = canvas.getCenter()
  const badge1 = new fabric.Polyline([
    { x: 60, y: 10 }, //1
    { x: 170, y: 10 },//2
    { x: 200, y: 50 },//3
    { x: 190, y: 90 },//4
    { x: 200, y: 130 },//5
    { x: 172, y: 170 }, //6
    { x: 115, y: 200 },//*** */
    { x: 58, y: 170 },//8
    { x: 30, y: 130 },//9
    { x: 40, y: 90 },//10
    { x: 30, y: 50 },//11
  ], {
    fill: 'black',
    left: canvasCenter.left,
    top: canvasCenter.top,
    originX: 'center',
    originY: 'center',
    cornerColor: 'white'
  });
  canvas.add(badge1)
  canvas.renderAll()
}
//badge2
const createBadge2 = (canvas) => {
  console.log("badge2")
  const canvasCenter = canvas.getCenter()
  const badge2 = new fabric.Polyline([
    { x: 300, y: 140 }, //1
    { x: 350, y: 160 },//2
    { x: 400, y: 165 },//3
    { x: 420, y: 200 },//4
    { x: 462, y: 230 },//5
    { x: 460, y: 275 }, //6
    { x: 480, y: 320 },//7
    { x: 450, y: 360 },//8
    { x: 450, y: 400 },//9
    { x: 405, y: 425 },//10
    { x: 395, y: 455 },//11
    { x: 340, y: 460 },//12
    { x: 300, y: 485 },//13
    { x: 250, y: 460 },//14
    { x: 205, y: 455 },//15
    { x: 190, y: 425 },//16
    { x: 145, y: 405 },//17
    { x: 145, y: 365 },//18
    { x: 115, y: 320 },//19**
    { x: 140, y: 275 },//20
    { x: 138, y: 230 },//21
    { x: 180, y: 200 },//22
    { x: 205, y: 165 },//23
    { x: 250, y: 160 },//24
  ], {
    fill: 'yellow',
    left: canvasCenter.left,
    top: canvasCenter.top,
    originX: 'center',
    originY: 'center',
    cornerColor: 'white'
  });
  canvas.add(badge2)
  canvas.renderAll()
}

//badge3
const createBadge3 = (canvas) => {
  console.log("badge3")
  const canvasCenter = canvas.getCenter()
  const badge3 = new fabric.Polyline([
    { x: 60, y: 10 }, //1
    { x: 135, y: -10 },//2
    { x: 210, y: 10 },//3
    { x: 210, y: 135 },//4
    { x: 135, y: 200 },//5
    { x: 60, y: 135 },//6
  ], {

    fill: 'blue',
    left: canvasCenter.left,
    top: canvasCenter.top,
    originX: 'center',
    originY: 'center',
    cornerColor: 'white',
    radius: 25,
  });
  canvas.add(badge3)
  canvas.renderAll()
}

//circle
const createCirc = (canvas) => {
  console.log("circle")
  const canvasCenter = canvas.getCenter()
  const circle = new fabric.Circle({
    radius: 100,
    fill: 'purple',
    left: canvasCenter.left,
    top: canvasCenter.top,
    originX: 'center',
    originY: 'center',
    cornerColor: 'white',
    hoverCursor: "pointer",
  })
  canvas.add(circle)
  canvas.renderAll()

}

//bow
const createPentagon = (canvas) => {
  console.log("pentagon")
  const canvasCenter = canvas.getCenter()
  const pentagon = new fabric.Polyline([
    { x: 60, y: 10 }, //1
    { x: 170, y: 10 },
    { x: 170, y: 350 },
    { x: 117, y: 300 },
    { x: 60, y: 350 },
  ], {
    fill: 'pink',
    left: canvasCenter.left,
    top: canvasCenter.top,
    originX: 'center',
    originY: 'center',
    cornerColor: 'white'
  });
  canvas.add(pentagon)
  canvas.renderAll()

}
//clear all
const clearCanvas = (canvas, state) => {
  canvas.getObjects().forEach((o) => {
    if (o !== canvas) {
      canvas.remove(o)
    }

  })
}

//clear selected
const clearSelectCanvas = (canvas, state) => {
  let select = document.querySelector("#select");
  canvas.getActiveObjects().forEach((obj) => {
    canvas.remove(obj)
  });
  canvas.discardActiveObject().renderAll()
}

//upload image
document.getElementById('myImage').addEventListener('change', function (e) {
  var img = e.target.files[0];
  var reader = new FileReader();
  reader.onload = function (f) {
    var data = f.target.result;
    fabric.Image.fromURL(data, function (img) {
      var oImg = img.set({ left: 0, top: 0 }).scale(0.2);
      canvas.add(oImg).renderAll();
      var a = canvas.setActiveObject(oImg);
      var dataURL = canvas.toDataURL({ format: 'png, jpg', quality: 0.8 });
    });
  };
  reader.readAsDataURL(img);
});

//print image
const printImage_1 = (canvas) => {
  fetch("./images/badgeimg_1.png").then(e => e.blob()).then(blob => {
    let fr = new FileReader();
    fr.readAsDataURL(blob);
    fr.onload = e => {
      fabric.Image.fromURL(fr.result, function (myImg) {
        myImg.set({ left: 0, top: 0 }).scale(0.4);
        console.log(myImg);
        canvas.add(myImg);
      })
    }
  })
}

const printImage_2 = (canvas) => {
  fetch("./images/badgeimg_2.png").then(e => e.blob()).then(blob => {
    let fr = new FileReader();
    fr.readAsDataURL(blob);
    fr.onload = e => {
  fabric.Image.fromURL(fr.result, function (myImg) {
    myImg.set({ left: 0, top: 0 }).scale(0.4);
    console.log(myImg);
    canvas.add(myImg);
  })
}
  })
}

const printImage_3 = (canvas) => {
  fetch("./images/badgeimg_3.png").then(e => e.blob()).then(blob => {
    let fr = new FileReader();
    fr.readAsDataURL(blob);
    fr.onload = e => {
  fabric.Image.fromURL(fr.result, function (myImg) {
    myImg.set({ left: 0, top: 0 }).scale(1.2);
    console.log(myImg);
    canvas.add(myImg);
  })
}
})
}

const printImage_4 = (canvas) => {
  fetch("./images/badgeimg_4.png").then(e => e.blob()).then(blob => {
    let fr = new FileReader();
    fr.readAsDataURL(blob);
    fr.onload = e => {
  fabric.Image.fromURL(fr.result, function (myImg) {
    myImg.set({ left: 0, top: 0 }).scale(0.2);
    console.log(myImg);
    canvas.add(myImg);
  })
}
})
}

const printImage_5 = (canvas) => {
  fabric.Image.fromURL("./images/badgeimg_5.png", function (myImg) {
    myImg.set({ left: 0, top: 0 }).scale(0.2);
    console.log(myImg);
    canvas.add(myImg);
  })
}

const printImage_6 = (canvas) => {
  fetch("./images/badgeimg_4.png").then(e => e.blob()).then(blob => {
    let fr = new FileReader();
    fr.readAsDataURL(blob);
    fr.onload = e => {
  fabric.Image.fromURL(fr.result, function (myImg) {
    myImg.set({ left: 0, top: 0 }).scale(0.2);
    console.log(myImg);
    canvas.add(myImg);
  })
}
})
}



//text font
const printText1 = (canvas) => {
  var name1 = new fabric.Text(document.getElementById("text1").value, {
    selection: true,
  });
  name1.fill = "black";
  canvas.add(name1);
  canvas.renderAll();
}

const printText2 = (canvas) => {
  var name2 = new fabric.Text(document.getElementById("text1").value, {
    selection: true,
    fontFamily: "Segoe Script",
  });
  name2.fill = "black";
  canvas.add(name2);
  canvas.renderAll();
}

const printText3 = (canvas) => {
  var name3 = new fabric.Text(document.getElementById("text1").value, {
    selection: true,
    fontFamily: "fantasy",
  });
  name3.fill = "black";
  canvas.add(name3);
  canvas.renderAll();
}

const printText4 = (canvas) => {
  var name3 = new fabric.Text(document.getElementById("text1").value, {
    selection: true,
    fontFamily: "Bradley Hand ITC",
  });
  name3.fill = "black";
  canvas.add(name3);
  canvas.renderAll();
}

const printText5 = (canvas) => {
  var name3 = new fabric.Text(document.getElementById("text1").value, {
    selection: true,
    fontFamily: "Castellar",
  });
  name3.fill = "black";
  canvas.add(name3);
  canvas.renderAll();
}

//download canvas 
function downloadImage() {
  var image = canvas.toDataURL("image/jpeg");
  console.log(image);
  var link = document.createElement('a');
  link.download = "qBadgeDesigner.png";
  link.href = image;
  link.click();
}



//draw line
const drawLine1 = (canvas) => {
  const line = canvas.add(new fabric.Line([50, 100, 300, 300], {
    left: 170,
    top: 150,
    stroke: 'black',
    strokeWidth: 3,
  }));
}

const drawLine2 = (canvas) => {
  const line = canvas.add(new fabric.Line([50, 100, 300, 300], {
    left: 170,
    top: 150,
    stroke: 'red',
    strokeWidth: 3,
  }));
}

const drawLine3 = (canvas) => {
  const line = canvas.add(new fabric.Line([50, 100, 300, 300], {
    left: 170,
    top: 150,
    stroke: 'green',
    strokeWidth: 3,
  }));
}

const drawLine4 = (canvas) => {
  const line = canvas.add(new fabric.Line([50, 100, 300, 300], {
    left: 170,
    top: 150,
    stroke: 'blue',
    strokeWidth: 3,
  }));
}

//object bring front
canvas.on('object:selected', function (event) {
  var activeObj = canvas.getActiveObject();
  canvas.bringToFront(activeObj);
  canvas.renderAll();
});

canvas.on('object:moved', function (event) {
  var activeObj = canvas.getActiveObject();
  canvas.bringToFront(activeObj);
  canvas.renderAll();
});

//change color object
let fill = document.querySelector("#fill");
colorbutton.addEventListener('click', function () {
  const objj = canvas.getActiveObject();
  let rtcolor = document.getElementById("fill").value;
  objj.setColor(rtcolor);
  rtcolor.dirty = true;
  canvas.renderAll();
});


//downloadSVG
function downloadSVG() {
  var svg = canvas.toSVG();
  console.log(svg);
  var link = document.createElement('a');
  link.download = "qBadgeDesigner.svg";
  let blob = new Blob([svg],{
    type:"image/svg"
  })
  link.setAttribute("href", URL.createObjectURL(blob))
  document.body.append(link)
  link.click()
}

//upload SVG
document.getElementById('mySVG').addEventListener('change', function (e) {
  var url = URL.createObjectURL(e.target.files[0]);
   fabric.loadSVGFromURL(url, function(objects, options) {
      objects.forEach(function(svg) {
        canvas.add(svg).renderAll();
      });
   });
});








