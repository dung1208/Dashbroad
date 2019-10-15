    
    // date picker
$('#datepicker').datepicker({
  uiLibrary: 'bootstrap4'
});
    
    // Get the modalAddCustomer
    var modalAddCustomer = document.getElementById("mymodalAddCustomer");
    // Get the button that opens the modalAddCustomer
    var btnAddCustomer = document.getElementById("btnAddCustomer");
    // When the user clicks the button, open the modalAddCustomer 
    btnAddCustomer.onclick = function() {
      modalAddCustomer.style.display = "block";
         // When the user clicks anywhere outside of the modalAddCustomer, close it
      window.onclick = function(event) {
        if (event.target == modalAddCustomer) {
          modalAddCustomer.style.display = "none";
        }
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


 var modalViewProfile = document.getElementById("mymodalViewProfile");
 var btnViewProfile = document.getElementsByClassName("btnViewProfile");
 var closeViewProfile = document.getElementsByClassName('closeViewProfile')[0];
 for( let i = 0; i < btnViewProfile.length; i++){
  btnViewProfile[i].onclick = function() {
     modalViewProfile.style.display = "block";
     window.onclick = function(event) {
      if (event.target == modalViewProfile) {
           modalViewProfile.style.display = "none";
          }
        }
        closeViewProfile.onclick = () => {
          modalViewProfile.style.display = "none";
        }
    }
  }


  var modalEditCustomer = document.getElementById("mymodalEditCustomer");
  var btnEditCustomer = document.getElementsByClassName("btnEditCustomer");
  for( let i = 0; i < btnEditCustomer.length; i++){
  btnEditCustomer[i].onclick = function() {
    modalEditCustomer.style.display = "block";
    window.onclick = function(event) {
      if (event.target == modalEditCustomer) {
        modalEditCustomer.style.display = "none";
      }
    }
  }
}

var modalGenerateLicense = document.getElementById("mymodalGenerateLicense");
var btnGenerateLicense = document.getElementsByClassName("btnGenerateLicense");
for( let i = 0; i < btnGenerateLicense.length; i++){
btnGenerateLicense[i].onclick = function() {
  modalGenerateLicense.style.display = "block";
  window.onclick = function(event) {
    if (event.target == modalGenerateLicense) {
      modalGenerateLicense.style.display = "none";
    }
  }
}
}