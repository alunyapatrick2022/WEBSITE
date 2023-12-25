
{
    const whatsappIcon = document.getElementById("whatsapp-icon");
    
    whatsappIcon.addActionEvent("click", function() {
    
      window.location.href = "https://api.whatsapp.com/send?phone=+254115348341&text=+Hello,+Patrick,+Welcome+to+Codecoretechnologies";
    
      });
    }