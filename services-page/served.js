function GetSelectedTextValue(dropdownmenu) {
    var selectedValue = dropdownmenu.value;
    if(selectedValue=="1")
    {
    document.getElementById("PChw").style.display = "";
    }
    else
    {
    document.getElementById("PChw").style.display = "none";
    }
    var selectedValue = dropdownmenu.value;
    if(selectedValue=="2")
    {
    document.getElementById("Mobhw").style.display = "";
    }
    else
    {
    document.getElementById("Mobhw").style.display = "none";
    }
    var selectedValue = dropdownmenu.value;
    if(selectedValue=="3")
    {
    document.getElementById("WebDes").style.display = "";
    }
    else
    {
    document.getElementById("WebDes").style.display = "none";
    }
    var selectedValue = dropdownmenu.value;
    if(selectedValue=="4")
    {
    document.getElementById("MscSer").style.display = "";
    }
    else
    {
    document.getElementById("MscSer").style.display = "none";
    }
}