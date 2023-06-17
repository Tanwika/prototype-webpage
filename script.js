var img1 = null;
var img2 = null;
var img3 = null;
var img4 = null;
var img5 = null;
var imgCanvas;

function uploadImage(){
  var imgInput = document.getElementById('img');
  imgCanvas = document.getElementById('c1');
  img1 = new SimpleImage(imgInput);
  img2 = new SimpleImage(imgInput);
  img3 = new SimpleImage(imgInput);
  img4 = new SimpleImage(imgInput);
  img5 = new SimpleImage(imgInput);
  img1.drawTo(imgCanvas);
}
function changeGrey(){
  clearCanvas();
  for(var pixel of img2.values()){
    var avg1 = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg1);
    pixel.setGreen(avg1);
    pixel.setBlue(avg1);
  }
  img2.drawTo(imgCanvas);
}

function clearCanvas(){
  var ctx = imgCanvas.getContext("2d");
  ctx.clearRect(0,0,imgCanvas.width,imgCanvas.height);
}

function changeRed(){
  clearCanvas();
  for(var pixel of img3.values()){
    var avg2 = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg2<128){
      pixel.setRed(avg2*2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setGreen(2*avg2-255);
      pixel.setBlue(2*avg2-255);
      pixel.setRed(255);
    }
  }
  img3.drawTo(imgCanvas);
}

function changeBgreen(){
  clearCanvas();
  for(var pixel of img4.values()){
    var avg3 = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg3<128){
      pixel.setGreen(2*avg3);
      pixel.setBlue(2*avg3);
      pixel.setRed(0);
    }
    else {
      pixel.setGreen(255);
      pixel.setBlue(255);
      pixel.setRed(0);
    }
  }
  img4.drawTo(imgCanvas);
}

function addBorder(){
  clearCanvas();
  var img = null;
  for(var pixel of img5){
    var x = pixel.getX();
    var y = pixel.getY();
    var w = imgCanvas.width();
    var h = imgCanvas.height();
    if(x<=50 || x<(w-50)){
      img.setRed(x,y,pixel);
      img.setGreen(x,y,pixel);
      img.setBlue(x,y,pixel);
    }
  }
  img.drawTo(imgCanvas);
}