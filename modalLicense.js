
// date picker
$('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
});


var modalAddLicense = document.getElementById("mymodalAddLicense");
   
var btnAddLicense = document.getElementById("btnAddLicense");
btnAddLicense.onclick = function() {
     modalAddLicense.style.display = "block";
     window.onclick = function(event) {
        console.log(event);
      if (event.target == modalAddLicense) {
           modalAddLicense.style.display = "none";
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

    