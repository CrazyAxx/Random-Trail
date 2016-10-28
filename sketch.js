function setup() {
  createCanvas( windowWidth , windowHeight );
}

function draw() {
  var r = random( 0 , 255 );
  var g = random( 0 , 255 );
  var b = random( 0 , 255 );
  var a = random( 0 , 75 )
  fill( r , g , b , a );
  noStroke()
  ellipse( mouseX , mouseY , 50 , 50 );
}s
