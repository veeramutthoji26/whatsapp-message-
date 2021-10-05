//send message
function sendmessage() {
    var num=document.querySelector("#number").value;
    var msg=document.querySelector("#text").value;
    try {
        window.open("https://wa.me/" + num + "?text=" + msg).focus();
    }
    catch(err){
        window.location.assign("https://wa.me/" + num + "?text=" + msg)
    }

};

//click

    var btn=document.querySelector("#send");
    btn.addEventListener('click', function() {
        sendmessage();
    });