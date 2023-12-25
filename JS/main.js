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
  const images = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
  let currentIndex = 0;

  
  setInterval(()=> {
    element[2].style.backgroundImage = `url('{'$images[currentImageIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
  },200);

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

whatsappIcon.addActionEvent("click", function() {

  window.location.href = "https://api.whatsapp.com/send?phone=+254115348341&text=+Hello,+Patrick,+Welcome+to+Codecoretechnologies";

  });
}
