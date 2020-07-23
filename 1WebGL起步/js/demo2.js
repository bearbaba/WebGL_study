function main(){

  try{
    var ctx = document.getElementById('webgl');
  }
  catch (e) {
    console.log("error load canvas element");
  }
  var gl = ctx.getContext('webgl');


  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}