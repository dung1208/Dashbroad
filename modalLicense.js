
// date picker
$('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
});


var modalAddLicense = document.getElementById("mymodalAddLicense");
var btnAddLicense = document.getElementById("btnAddLicense");
btnAddLicense.onclick = function() {
     modalAddLicense.style.display = "block";
     window.onclick = function(event) {
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


    var modalViewLicenses = document.getElementById("mymodalViewLicenses");
    var btnViewLicenses = document.getElementsByClassName("btnViewLicenses");
    var closeViewLicenses = document.getElementsByClassName('closeViewLicenses')[0];
    var customerModalViewLicenses = document.getElementsByClassName('customerModalViewLicenses');
    var customerDisplayModalViewLicenses = document.getElementsByClassName('customerDisplayModalViewLicenses')[0];
    var statusLicenseModalViewLicenses = document.getElementsByClassName('statusLicenseModalViewLicenses');
    var statusDisplayModalViewLicenses = document.getElementsByClassName('statusDisplayModalViewLicenses')[0];
    for( let i = 0; i < btnViewLicenses.length; i++){
   btnViewLicenses[i].onclick = function() {
     statusDisplayModalViewLicenses.innerText = statusLicenseModalViewLicenses[i].textContent;  
     customerDisplayModalViewLicenses.innerText = customerModalViewLicenses[i].textContent;
        modalViewLicenses.style.display = "block";
        window.onclick = function(event) {
         if (event.target == modalViewLicenses) {
              modalViewLicenses.style.display = "none";
             }
           }
           closeViewLicenses.onclick = () => {
             modalViewLicenses.style.display = "none";
           }
       }
     }

     var modalDisable = document.getElementById("mymodalDisable");
 var btnDisable = document.getElementsByClassName("btnDisable");
 for( let i = 0; i < btnDisable.length; i++){
        btnDisable[i].onclick = function() {
             modalDisable.style.display = "block";
             window.onclick = function(event) {
                if (event.target == modalDisable) {
                     modalDisable.style.display = "none";
                    }
                 }
            }
    }