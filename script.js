fetch("vps.json")
.then(function(Response){

    return Response.json();
})
.then(function(data){
    studentData=data
    console.log(studentData);
    createListFormStudentData();
});

function createListFormStudentData(){  
    var adressBook=document.createElement("div");
    adressBook.className="adressBookClass";
 
    console.log(studentData);
    for(var index= 0; index<studentData.length; index++){
    console.log(studentData[index].studentName);
    var adressCard= document.createElement("div")
    var getStudentName= document.createTextNode(studentData[index].studentName);
    var getStudentMail= document.createTextNode(studentData[index].studentMail);
    var adressCard= creatAdressCard(studentData[index]);
    adressBook.appendChild(adressCard);
    adressCard.appendChild(getStudentMail);
    adressCard.appendChild(getStudentName);
    
    //document.body.appendChild(adressCard);
        adressBook.appendChild(adressCard);
        
    }

    document.body.appendChild(adressBook);

    function creatAdressCard(studentData){
        var adressCard= document.createElement("div")
        adressCard.className= "adressclass";
        var getStudentName= document.createElement("h3");
        getStudentName.innerText="Name:"+studentData.studentName;
        adressCard.appendChild(getStudentName);
        var getSudentImge=document.createElement("img");
        getSudentImge.src="bild/" + studentData.studentImge;
        var getStudentPhone=document.createElement("text");
        getStudentPhone.src="list/text.html" + studentData.studentPhone;
        adressCard.appendChild(getSudentImge);
        adressCard.appendChild(getStudentPhone);
        return adressCard;
    }
}
