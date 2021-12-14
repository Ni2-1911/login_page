frm_2=document.getElementById("form_2")
forms_1=document.getElementById("form_1")
bkgrnd=document.getElementById("background")
frm_2.style.display="none";
console.log("AAAAA");
btn=document.getElementById("sign_up");
forms = document.getElementsByTagName("form")

btn.onclick = function form_2(){
    forms_1.style.display="none";
    frm_2.style.display="block";
    // frm_2.style.width="500px";
    // frm_2.style.height="600px";
    bkgrnd.style.width="500px";
    bkgrnd.style.height="600px";
    // forms[1].style.paddingBottom="50px";
    // console.log("BBBBB");
}


