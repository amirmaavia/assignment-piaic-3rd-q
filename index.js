$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    
    $(".next").click(function(){
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 600
    });
    });
    
    $(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 600
    });
    });
    
    $('.radio-group .radio').click(function(){
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
    });
    
    $(".submit").click(function(){
    return false;
    })
    
    });
    var submit = document.querySelector("#sub")

function form1(){
    var form = {
        Email: document.getElementById('email').value,
        UserName:  document.getElementById("uname").value,
        Password: document.getElementById("pass").value
        }
       
    console.log("Account Information",form)
}
    submit.addEventListener('click' , form1)

    var submit1 = document.querySelector("#sub1")

    function form2(){
        var form1 = {
            FirstName: document.getElementById('fname').value,
            LastName: document.getElementById('lname').value,
            ContactNum: document.getElementById('contact').value,
            EmergencyContact: document.getElementById('contact2').value
        }
           
        console.log("Personal Information",form1)
    }
        submit1.addEventListener('click' , form2)

        var submit1 = document.querySelector("#sub2")
        function form3(){
            var form2 = {
                HolderName: document.getElementById('holder').value,
                CardNumber: document.getElementById('card').value,
                CVC: document.getElementById('cvc').value,
                ExpireMonth: document.getElementById('month').value,
                Year:document.getElementById('year').value
            }
               
            console.log("Payment Information",form2)
        }
            submit1.addEventListener('click' , form3)