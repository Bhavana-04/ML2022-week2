var input=document.getElementById("giveinput");
input.addEventListener("click",function loadDoc(){
  var xhttp = new XMLHttpRequest();
  try{
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
        let dances=JSON.parse(this.responseText);
        var msg=document.getElementById("inp").value;
        document.getElementById("inp").value="";
        print("p","user",msg);
        //if given text includes Hi then it calls time_greetings function.
        if(msg=="Hi" || msg=="hi"){
          print("p","bot",time_greetings()+"<br>"+"Make sure the first letter of your word in a state must be capital.For Example Andhra Pradesh.");
        }
        else if(msg.includes("Thank You") || msg.includes("thank you")){
          print("p","bot","Your Welcome");
        }
        //if the text in json then it calls the print function. 
        else if(dances[msg]){
          print("p","bot",dances[msg]);
        }
        //if valid input it calls the print function by responding the following text.
        else{
          print("p","bot","Sorry, I didn't Understand.");
        }
      }
    };
    xhttp.open("GET","data.json",true);
    xhttp.send();
  }
  catch(e){
    print("p","bot","Sorry I didn't Understand");
  }
}
);

//this function add elements in a main page
function print(tag,className,text){
  let main=document.getElementById("main");
  main.innerHTML+=`<${tag} class=${className}>${text}</${tag}>`
}


//this function returns the greetigs based on the time of the day
function time_greetings(){
  let currentTime=new Date();
  let hour=currentTime.getHours();
  let greetingTime="Good Morning,Have a nice day";
  if(hour>12 && hour<=17){
    greetingTime="Good Afternoon,Have a nice day";
  }
  else if(hour>17 && hour<=21){
    greetingTime="Good Evening,Have a nice day";
  }
  else if(hour>21)
    greetingTime="Thats late,Have a nice day";
  return greetingTime;
}