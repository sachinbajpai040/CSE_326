

var type=0;
  function function1()
  {

    document.getElementById("c1").style.backgroundColor = "black";
    document.getElementById("c2").style.backgroundColor = "white";
    document.getElementById("c3").style.backgroundColor = "white";
   type=1;
  }
  function function2()
  {
    document.getElementById("c2").style.backgroundColor = "black";
    document.getElementById("c1").style.backgroundColor = "white";
    document.getElementById("c3").style.backgroundColor = "white";
    type=2;
  }
  function function3()
  {
    document.getElementById("c3").style.backgroundColor = "black";
    document.getElementById("c2").style.backgroundColor = "white";
    document.getElementById("c1").style.backgroundColor = "white";
    type=3;
  }
  function validate()
  {
    var username=document.getElementById("username").value ; 
    var password = document.getElementById('password').value;
      if(type==0)
      {
          alert('Please select usertype');
      }
       if(type==1)
       {
          
        if (username=="Admin@1" && password=="Admin#123") {
            window.location ="home.html";
           alert("Login Successful");
                    } else {
                alert("Login unsuccessful please try again");
        
            }
       }
       if(type==3)
       {
        if (username=="uid548" && password=="548@123") {
     
            window.location = "faculty.html";
            alert("Login Successful");
        }
         else {
            alert("Login unsuccessful please try again");
    
        }
       }
       if(type==2)
       {
        if (username=="11903748" && password=="lpu@123") {
           
            window.location= "student.html";
            alert("Login Successful");
        }
         else {
            alert("Login unsuccessful please try again");
    
        }
       }
  }