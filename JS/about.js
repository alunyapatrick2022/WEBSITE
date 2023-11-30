
{
    const whatsappIcon = document.getElementById("whatsapp-icon");
    
    whatsappIcon.addEventListener("click", function() {
    
      window.location.href = "https://api.whatsapp.com/send?phone=+254115348341&text=+Hello,+Patrick,+Welcome+to+Codecoretechnologies";
    
      });
    }