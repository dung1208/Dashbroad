    // Get the modalAddCustomer
    var modalAddCustomer = document.getElementById("mymodalAddCustomer");
    
    // Get the button that opens the modalAddCustomer
    var btnAddCustomer = document.getElementById("btnAddCustomer");
    
    // When the user clicks the button, open the modalAddCustomer 
    btnAddCustomer.onclick = function() {
      modalAddCustomer.style.display = "block";
    }
    // When the user clicks anywhere outside of the modalAddCustomer, close it
    window.onclick = function(event) {
      if (event.target == modalAddCustomer) {
        modalAddCustomer.style.display = "none";
      }
    }
