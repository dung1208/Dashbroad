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


    var modalDelete = document.getElementById("mymodalDelete");
   
 var btnDelete = document.getElementsByClassName("btnDelete");
 for( let i = 0; i < btnDelete.length; i++){
        btnDelete[i].onclick = function() {
             modalDelete.style.display = "block";
             window.onclick = function(event) {
                if (event.target == modalDelete) {
                     modalDelete.style.display = "none";
                    }
                 }
            }
    }
