alert("Welcome in MY Website");
function CHECKEDTANAME() {
  alert("Hello in CV Makers, if You need to login in Admin page we should be answered");
    var makerName = 'Ali';
    var name = prompt('Please Enter Maker name : ');
    for (var i = 0 ; i < 10 ; i++)
    {
      if (name == makerName){
      break;
      }
      else{
        continue;
      }
    }
    var passWord = '123456789';
    var adminPassWord = prompt('Please Enter Maker password : ');
    if (passWord == adminPassWord){
      var Guestname = prompt('Enter name : ');
      alert('Welcome Admin' + Guestname);
    }
    else{
      alert('I"m only admin, You are Hacker ?');
      document.write('<img src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2019/07/pandasecurity-How-do-hackers-pick-their-targets.jpg"/>');
    }
}

function SaveData(){
  alert("Please re-enter own data.");
  for (var i = 0 ; i <= 4 ; i++){
    switch(i){
      case 0:
        var x = prompt("Enter Full name:");
        break;
      
      case 1:
        var x = prompt("Eduacation : ");
        break;
      
      case 2:
        var x = prompt("How many Skills are you have ? ");
        for (var z = 1 ; z <= x ; z++){
          var skills = prompt("The " + z + " Skills is : ");
        }
        break;
      
      case 3:
        var x = prompt("Project: ");
        break;
      
      default:
        alert("You are finished ! ");
      }
  }
}