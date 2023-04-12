var username = document.getElementById("name");
var useremail = document.getElementById("email");
var userpassword = document.getElementById("password");
var usercontact = document.getElementById("contact");

function signup(){
  // all users get from local storage
  var users = localStorage.getItem("users");
  // check users array
  if(users === null){
    users = [];
  }
  else{
    users = JSON.parse(users);
  }

  const obj = {
    name : username.value,
    email:useremail.value,
    password:userpassword.value,
    contact:usercontact.value
  }
  // Email verification
  var condition = false;
  for(var i=0;i<users.length;i++){
    if(users[i].email === obj.email){
      alert("Email Already Exists");
      condition = true;
    }
  }
  if(condition === false){
    // user node save in local storage
    users.push(obj);
    localStorage.setItem("users",JSON.stringify(users));
  }
  
  username.value = "";
  useremail.value = "";
  userpassword.value = "";
  usercontact.value = "";

}