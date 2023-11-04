{
function changeBackgroundColor() {
    const element = document.getElementsByTagName("h1");
    const colors = ["blue","red","green","purple","blue"];
    let currentIndex = 0;
    
    setInterval(()=> {
      element[0].style.backgroundColor = colors[currentIndex];
      currentIndex = (currentIndex+1)%colors.length;
    },5000);
 
  }


  changeBackgroundColor();
}
 
{
  function changeBackgroundImage() {
  const element = document.getElementsByClassName("myElement");
  const images = ['/IMAGES/hiBrenda.jpg','/IMAGES/hiCecilia.jpg','/IMAGES/hiJeru.jpg','/IMAGES/hiMaggie.jpg','/IMAGES/hiMicky.jpg','/IMAGES/hiNoel.jpg','/IMAGES/hiPatrick.jpg','/IMAGES/hiPaul.jpg','/IMAGES/hoRodah.jpg'];
  let currentIndex = 0;

  
  setInterval(()=> {
    element[2].style.backgroundImage = `url('{'$images[currentImageIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
  },2000);

  }
}

{

  function changeIconSize() {

    const  element = document.getElementsByTagName("div");
    element[4].style.size = "10px";
   
  }
   changeIconSize();
}



{
const whatsappIcon = document.getElementById("whatsapp-icon");

whatsappIcon.addEventListener("click", function() {

  window.location.href = "https://api.whatsapp.com/send?phone=+254115348341&text=+Hello,+Patrick,+Welcome+to+Codecoretechnologies";

  });
}
