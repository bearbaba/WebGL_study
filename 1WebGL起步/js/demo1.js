function main(){
  try{
    var canvas = document.getElementById('example');
  }
  catch (e){
    console.error('Failed to retrieve the <canvas></canvas> element');
    return;
  }

  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0, 0, 255, 1.0)';
  ctx.fillRect(120, 10, 150, 150);

  ctx.fillRect(0,0,50,50);
}

