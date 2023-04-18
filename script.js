window.onload = function () {
  //================= data structure =================
  // in this object list we save all detail about users.

  let users = [
    {
      fullName: "defaultadmin",
      userName: "adminadmin",
      email: "adminemail",
      phoneNo: 0771234567,
      password: "adminadmin",
    } // test account credentials
  ];


  // ================ sign-in page js ===================
  //this cord block save sign-in data to "users" objectif 
  //data save in browser local storage
  
  if (document.getElementById("form")) {
    let myForm = document.getElementById("form");
    myForm.addEventListener("submit", function (event) {
        console.log("submit triggerd");
        event.preventDefault(); // prevent default form submission behavior. stop been submit since there is no backend

        //save data to "obj" object
        let fName = document.getElementById("fullName").value;
        let uName = document.getElementById("userName").value;
        let email2 = document.getElementById("email").value;
        let pNumber = document.getElementById("phoneNumber").value;
        let pass = document.getElementById("password").value;
        obj = {
            fullName: fName,
            userName: uName,
            email: email2,
            phoneNo: pNumber,
            password: pass,
          };
        //append "obj" to "users"
        users.push(obj);
        //save data in browser local storage
        localStorage.setItem("users", JSON.stringify(users));
        console.log(users);
        window.location.href = "./login.html";
        console.log(users);
    });
  }

  // ================ login page js ===================
  //this cord block check if input data matche to the user array data
  if (document.getElementById("login-button")) { //without this if condition errors occures. 
    document.getElementById("login-button").addEventListener("click", function () {
        //get values
        let loginUserName = document.getElementById("loginUserName").value;
        let loginPassword = document.getElementById("loginPassword").value;
  
        //retrive from stored data in browser local storage
        let storedUsers = JSON.parse(localStorage.getItem("users"));
        console.log(storedUsers);

        //check if storedUsers object contains the user name.
        //if username found. then check password.
        //if username and password matches, user redirect to ticketing page
        let isMatchUserNamePass = false; 
        for (let i = 0; i < storedUsers.length; i++) {
          console.log("for loop " + i);
          if (loginUserName == storedUsers[i].userName) {
            if (loginPassword == storedUsers[i].password) {
            isMatchUserNamePass = true;
              window.location.href = "./ticketing.html";
            };
          };
        };

        //if user inputs not matchs, then this error pops
        if(!isMatchUserNamePass){
            alert("User name or password is wrong!");
        };
        
      });
  };


}; //end of document.ready()
