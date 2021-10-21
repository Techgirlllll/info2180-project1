/* Add your JavaScript to this file */
window.onload = function() {

    var emailInput = document.getElementsByTagName("input")[0];
    var message = document.getElementsByClassName("message")[0];
    document.getElementsByClassName("btn")[1].onclick=function(e){

        if (emailInput.value.length < 1){
            message.innerHTML = "Please enter a valid email address.";
        }
        else {
            message.innerHTML = `Thank you! Your email address ${emailInput.value} has been added to our mailing list!`;
        }
        e.preventDefault();
    }
}
