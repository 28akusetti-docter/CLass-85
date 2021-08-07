canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
mars_images=["mars.jpg","mars_1.jpg","mars_2.jpg","mars_3.jpg","mars_4.jpg"]
random_number=Math.floor(Math.random()*5)
console.log(random_number)
var roverwidth=100
    roverheight=90
var bImage=mars_images[random_number]
console.log(bImage)
var rImage="rover.png"
var roverX=10 
roverY=10
function add(){
    bIMGtag=new Image()
    bIMGtag.onload=uploadBackground
    bIMGtag.src=bImage

    rIMGtag=new Image()
    rIMGtag.onload=uploadRover
    rIMGtag.src=rImage
}
function uploadBackground(){
    ctx.drawImage(bIMGtag,0,0,canvas.width,canvas.height)
}
function uploadRover(){
    ctx.drawImage(rIMGtag,roverX,roverY,roverwidth,roverheight)
}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
    key=e.keyCode
    console.log(key)
    if(key=='38'){
        up()
        console.log("up")
    }
    if(key=='39'){
        right()
        console.log("right")
    }
    if(key=='37'){
        left()
        console.log("left")
    }
    if(key=='40'){
        down()
        console.log("down")
    }
}
function up(){
  if(roverY>=0){
      roverY=roverY-10
      console.log("up is pressed, x="+roverX+" y= "+roverY)
      uploadBackground()
      uploadRover()
  }
}
function down(){
    if(roverY<=500){
        roverY=roverY+10
        console.log("down is pressed, x="+roverX+" y= "+roverY)
        uploadBackground()
        uploadRover()
    }
  }
  function left(){
    if(roverX>=0){
        roverX=roverX-10
        console.log("left is pressed, x="+roverX+" y= "+roverY)
        uploadBackground()
        uploadRover()
    }
  }
  function right(){
    if(roverX<=700){
        roverX=roverX+10
        console.log("right is pressed, x="+roverX+" y= "+roverY)
        uploadBackground()
        uploadRover()
    }
  }