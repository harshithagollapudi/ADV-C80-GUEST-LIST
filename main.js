var Name_of_The_Guest_Array = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	Name_of_The_Guest_Array.push(Guest_name);
	document.getElementById('Display_names').innerHTML = Name_of_The_Guest_Array;
	console.log(Name_of_The_Guest_Array);    
    var length_of_the_array = Name_of_The_Guest_Array.length;
    console.log(length_of_the_array);
   }

function Show_List()
{
	var i= Name_of_The_Guest_Array.join("<br>");
	console.log(Name_of_The_Guest_Array);
	document.getElementById("Show_names").innerHTML = i.toString();
	}

function sorting()
	{
		Name_of_The_Guest_Array.sort();
		var i= Name_of_The_Guest_Array.join("<br>");
		console.log(Name_of_The_Guest_Array);		
		document.getElementById("sorted_names").innerHTML = i.toString();
		}


function Search()
{
	var s = document.getElementById("Search_name").value;
	var found = 0;
	var j;
	for(j=0; j<Name_of_The_Guest_Array.length; j++)
		{
			if(s==Name_of_The_Guest_Array[j]){
				found = found+1;
			}	
		}
	document.getElementById("Search_names").innerHTML="Name Found "+found+" Time/s";
	console.log("found name "+found+" time/s");
}
