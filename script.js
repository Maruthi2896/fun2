

function friends(){
    var friendsList=document.querySelector(".friendsList");
    let name=friendsList.value.toLowerCase()
    var div=document.querySelector("#name1")
   
   
    if(name=="sushma")
    div.innerHTML=`<h5> Hii.. ${name} Finally i am done finding  your friends name, I am soo excited to announce , here the list:</h5>
    <p> 1.neha</p>
    <p>2.vanitha</p>
    <p>3.maruthi</p>
    <p>4.radha</p>
    <p> 5.bhavana</p>`
   else if(name=="radha" ||name=="raadha")
    div.innerHTML=`<h5> Hii.. ${name} Finally i am done finding  your friends name, I am soo excited to announce , here the list:</h5>
    <p> 1.sushma</p>
    <p>2.vanitha</p>
    <p>3.maruthi</p>
    <p>4.radha</p>
    <p>5.bhavana</p>`

    else if(name=="vanitha")
    div.innerHTML=`<h5> Hii.. ${name} Finally i am done finding  your friends name, I am soo excited to announce , here the list:</h5>
    <p> 1.sushma</p>
    <p>2.rohith</p>
    <p>3.gaana</p>
    <p>4.radha</p>
    <p>5.bhavana</p> <p>6.yashu</p>`

  else  if(name=="bhavana")
    div.innerHTML=`<h5> Hii.. ${name} Finally i am done finding  your friends name, I am soo excited to announce , here the list:</h5>
    <p> 1.Radha</p>
    <p>2.sushma</p>
    <p>3.vanitha</p>
    <p>4.rohith</p>
    <p>5.megha</p> <p>6.vishalakshi</p>`

   else if(name=="megha")
    div.innerHTML=`<h5> Hii.. ${name} Finally i am done finding  your friends name, I am soo excited to announce , here the list:</h5>
    <p> 1.vishalakshi</p>
    <p>2.sushma</p>
    <p>3.vanitha</p>
    <p>4.rohith</p>
    <p>5.Bhavana</p> <p>6.radha</p>`

    else if(name=="vishalakshi")
    div.innerHTML=`<h5> Hii.. ${name} Finally i am done finding  your friends name, I am soo excited to announce , here the list:</h5>
    <p> 1.megha</p>
    <p>2.sushma</p>
    <p>3.vanitha</p>
    <p>4.rohith</p>
    <p>5.bhavana</p> <p>6.radha</p>`

   else if(name=="rohith")
    div.innerHTML=`<h5> Hii.. ${name} Finally i am done finding  your friends name, I am soo excited to announce , here the list:</h5>
    <p> 1.maruthi</p>
    <p>2.sushma</p>
    <p>3.vanitha</p>
    <p>4.megha</p> <p>5.vishalakshi</p>`

    else if(name=="maruthi")
    div.innerHTML=`<h5> Hii.. ${name} Finally i am done finding  your friends name, I am soo excited to announce , here the list:</h5>
    <p> 1.vinay</p>
    <p>2.sushma</p>
    <p>3.gururaj</p>
    <p>4.Triveni</p> <p>5.dhanusha</p>`

    else
    div.innerHTML=`<h5> Hii.. ${name} I am really sorry ,your are not authorised to check friends  `


}            

function college(){
    var college=document.querySelector(".collegeName");
    let name=college.value.toLowerCase()
    var div=document.querySelector("#name2")
    if(name=="sushma"||name=="bhavana" ||name=="radha"||name=="megha"||name=="vishalakshi" ||name=="vanitha"||name=="rohith")
    div.innerHTML=`Hi ${name},Your college is "SJM INSTITUTE OF TECHNOLGY,Chitradurga `
    else div.innerHTML=`Hi ${name},Sorry i am tired lets search yours tomorrow,bye take care`

}
function crush(){
    var crush=document.querySelector(".crushName");
    let name=crush.value.toLowerCase()
    var div=document.querySelector("#name3")
    if(name=="sushma"||name=="bhavana" ||name=="radha"||name=="megha"||name=="vishalakshi" ||name=="vanitha"||name=="rohith"||name=="maruthi"){
    if(name=="sushma")
    div.innerHTML=`Hi ${name},Your crush is anonymous one, but unfortunately you committed to one who loves you but always u have one more option`
       else if(name=="radha") 
       div.innerHTML=`Hi ${name},Your crush is Lord Krishna `
       else if(name=="bhavana") 
       div.innerHTML=`Hi ${name},If you continue to do work from home like this u wont get crush further think about it. `
       else if(name=="vanitha") 
       div.innerHTML=`Hi ${name},You are already married why your doubting your heart`
       else if(name=="rohith") 
       div.innerHTML=`Hi ${name},I can't say direct name, but give u hint, one who do's work from home In TCS and her father is MALL**H`
       else if(name=="Megha") 
       div.innerHTML=`Hi ${name},your crush is anonymus , but still you fearing lot for home people.dont fear come out of bounderies`
       else if(name=="vishalakshi") 
       div.innerHTML=`Hi ${name},literally u dont have crush that much impacted you, any way marry that guys who works in foreign`
       else if(name=="maruthi") 
       div.innerHTML=`Hi ${name},Enjoy only dreaming of marrying her`
    }
    else div.innerHTML=`Hi ${name},Sorry i am tired lets search yours tomorrow,bye take care`

}
function partner(){
    var partner=document.querySelector(".partnerName");
    let name=partner.value.toLowerCase()
    var div=document.querySelector("#name4")
    if(name=="sushma"||name=="bhavana" ||name=="radha"||name=="megha"||name=="vishalakshi" ||name=="vanitha"||name=="rohith"||name=="maruthi"){
    if(name=="sushma")
    div.innerHTML=`Hi ${name},60%-Anonymous,18%-your senior friend ,12%-pu friend`
       else if(name=="radha") 
       div.innerHTML=`Hi ${name},50%-your school friend,50%-anonymous`
       else if(name=="bhavana") 
       div.innerHTML=`Hi ${name},99%-anonymous, 1%-degree best frnd, may after degree u both stopped talking `
       else if(name=="vanitha") 
       div.innerHTML=`Hi ${name},100% dayananda`
       else if(name=="rohith") 
       div.innerHTML=`Hi ${name},99.9%-anonymous ,1%-crush`
       else if(name=="Megha") 
       div.innerHTML=`Hi ${name},100% anonymous`
       else if(name=="vishalakshi") 
       div.innerHTML=`Hi ${name},99%- anonymous, 1%-your best friend`
       else if(name=="maruthi") 
       div.innerHTML=`Hi ${name},40%-relative,30%-out of relative,20%-best frnds,10%-your junior crush`
    }
    else div.innerHTML=`Hi ${name},Sorry i am tired lets search yours tomorrow,bye take care`

}