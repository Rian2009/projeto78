var images = 
["l1nq.com/FiMa9", "l1nk.dev/O1zFn", 
"l1nq.com/zLJ3P",
"l1nq.com/FtPU9",
"l1nq.com/X2sNh",
"l1nq.com/OOX0J"];
        var names = ["Album de Família", "Rodrigo Silva", "Diego Silva", "Roberto Silva", "Aline Silva", "Sonia Silva"];

var i = 0;
function uptade()
{
    i++;
    var numbersOfFamilyMemberInArray = 5
    if(1 >  numbersOfFamilyMemberInArray)
    {
        i = 0;
    }

    var updatedImage = images[i];
    var updatedName = names[i];

    document.getElementById("familyMemberImage").src = updatedImage;
    document.getElementById("familyMemberName").innerHTML = updatedName;

}



