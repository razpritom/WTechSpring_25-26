console.log("HTML Page are Connected"); 

function collect_data()
{
    let isnamevalid = collect_fname();
    let isagevalid = collect_lname();
    

    
    //console.log(AgeShow);



    

    return false;
    
}

function collect_fname()
{
    let First_Name = document.getElementById("FirstName").value;
    console.log(First_Name);
    if(First_Name=="")
    {
        document.getElementById("fNameError").innerHTML="Name Can Not be Empty";
        return false;
    }
    // var pname = document.getElementById("demo");
    // pname.innerHTML="Patient Name: " + Patient_Name.value;
}
function collect_lname()
{
    let P_age= document.getElementById("LastName").value;
    console.log(P_age);
    if(P_age=="")
    {
        document.getElementById("lError").innerHTML="Last Name Can Not be Empty";
        return false;
    }
}