
    var modalAddLicense = document.getElementById("mymodalAddLicense");
   
    var btnAddLicense = document.getElementById("btnAddLicense");

    btnAddLicense.onclick = function() {
      modalAddLicense.style.display = "block";
    }

    window.onclick = function(event) {
      if (event.target == modalAddLicense) {
        modalAddLicense.style.display = "none";
      }
    }