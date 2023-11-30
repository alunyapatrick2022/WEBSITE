{
function setProjectCardInteractivity() {

  const button = document.getElementsByClassName("details-hidden");
  button[0].style.display = "block";
}

setProjectCardInteractivity();

}
{
    const whatsappIcon = document.getElementById("whatsapp-icon");
    
    whatsappIcon.addEventListener("click", function() {
    
      window.location.href = "https://api.whatsapp.com/send?phone=+254115348341&text=+Hello,+Patrick,+Welcome+to+Codecoretechnologies";
    
      });
    }