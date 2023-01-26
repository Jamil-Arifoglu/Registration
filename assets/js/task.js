const submit=document.querySelector("#submit");

submit.onclick=function(){
 userCheak()
 surName()
 email()
 password()

 if(userCheak()&&surName()&&email()&&password()){
    window.location.href="https://www.google.com"
 }
}
   function  userCheak(){


  let x=document.getElementById("Name").value;
  let y=x.length;
  let text;

  if(y>6){
   return true;
  }
  else{
    text="dügün daxil edin";
    document.getElementById("demo").innerHTML = text;
    return false;
  }
  
}
function surName() {


  let x=document.getElementById("Surname").value;
  let s=x.length;
  
  let text;

  if(s>3){
   return true;
  }
  else{
    text="dügün daxil edin";
    document.getElementById("demon").innerHTML = text;
    return false;
  }
    
}
function email() {


    let x=document.getElementById("Email").value;
    let e=x.includes("@");
    
    let text;
  
    if(e==1){
     return true;
    }
    else{
      text="@ daxil edin";
      document.getElementById("demonn").innerHTML = text;
      return false;
    }
      
  }
  function password() {


    let x=document.getElementById("Password").value;
    let s=x.length;
    
    let text;
  
    if(s>8){
     return true;
    }
    else{
      text="dügün daxil edin";
      document.getElementById("demonnn").innerHTML = text;
      return false;
    }
      
  }
    




