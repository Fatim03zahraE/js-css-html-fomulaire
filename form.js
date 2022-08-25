let maint = new Date();
document.getElementById('maint').innerHTML = '<center><h2>Bonjour monsieur la date est :' + maint.toLocaleDateString();'</h2></center>'

function vnom() {
  let err1 = document.getElementById('error1');
  let nom = document.getElementById('nome');
  if (nom.value.length == 0 || nom.value.length <= 2) {
    err1.innerText = "×non valider×"
    err1.style.color="red"
    return false;

  }
  else {
    err1.innerText="✓"
    err1.style.color="green"
    return true;
  }
}
function vprenom() {

  let err2 = document.getElementById('error2');

  let prenom = document.getElementById('lastname');

  if (prenom.value.length == 0 || prenom.value.length <= 2) {
    err2.innerText = '×non valider×'
    err2.style.color="red"
    return false;

  }
  else {
    err2.innerText="✓"
    err2.style.color="green"
    return true;
  }
}
function vage() {
  let dat=document.getElementById('age').value;
  let err3 = document.getElementById('error3');
  let ag = new Date().getFullYear()- new Date(dat).getFullYear();
  if (ag < 18 || dat=="") {
    err3.innerText = '×non admis×'
    err3.style.color="red"
    return false;
  }
  else {
    err3.innerText="✓"
    err3.style.color="green"
    return true;
  }
}
function vcodepo() {

  let err4 = document.getElementById('error4');
  let cdp = document.getElementById('cp');

  if (cdp.value.length == 0 ||  cdp.value.length<5) {
    err4.innerText = '×verifier×'
    err4.style.color="red"
    return false;
  }
  else {
    err4.innerText="✓"
    err4.style.color="green"
    return true;
  }
}
function vselect()
{
  let err5=document.getElementById('error5');
  let select=document.getElementById('sele');
  if(select.value=="")
  {
    err5.innerText="×Veuillez sélectionner une sélection1×"
    err5.style.color="red"
    return false;
  }
  else{
    err5.innerText="✓"
    err5.style.color="green"
    return true;
  }
}
function vgenre()
{
  let genre= document.querySelector('input[name ="f"]:checked');
  let err6=document.getElementById('error6');
if(genre!= null){  
  err6.innerText="✓"
  err6.style.color="green"
return true;
} else {
  err6.innerText="×Veuillez sélectionner une sélection2×"
  err6.style.color="red"
  return false;
}
}
function vcont()
{
 let  contact = document.querySelector('input[name = "z"]:checked');
  let err7=document.getElementById('error7');

if(contact!= null){  
  err7.innerText="✓"
  err7.style.color="green"
  return true;
} else {
  err7.innerText="×Veuillez sélectionner une sélection3×"
  err7.style.color="red"
return false;
}
}
function vemail()
{
  let err8=document.getElementById('error8');
  var ema = document.getElementById('email').value;
  var regEmail = new RegExp('^[0-9a-z._-]+[@]{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
  
     if(!regEmail.test(ema)){
         err8.innerText="×email pas valide×"; 
         err8.style.color="red"
         return false;
      }else{
        err8.innerText="✓"
       err8.style.color="green"
         return true;
      }
   }
function vmdpass()
{
  let err9=document.getElementById('error9');
  let mdpass=document.getElementById('mdp').value;
  let err10=document.getElementById('error10');
  let vpassw=document.getElementById('vmdp').value;
  var regularExpression=/^[0-9a-z;,:!"#&*$_-é&?@*]{8,}$/;
  if(!regularExpression.test(mdpass))
  {
   err9.innerText="×verifier votre mot de passe×";
   err9.style.color="red"
  }
  else
  {
    err9.innerText="✓"
    err9.style.color="green"
  }
  if(vpassw!=mdpass|| vpassw=="")
 {
   err10.innerText="×verfier le mdpass×";
   err10.style.color="red"
 }
   else{
    err10.innerText="✓"
    err10.style.color="green"
 }
}
function verifi() {
  vnom();
  vprenom();
  vage();
  vcodepo();
  vemail();
  vselect();
  vmdpass();
  vcont();
  vgenre();
}
