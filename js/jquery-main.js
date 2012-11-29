$("#additem").on("pagecreate", function(){
    makeCats();
});


var taskCategories=["Choose a task", "Grade", "Contact", "Meetings", "Lesson", "Tests", "Projects", "Others"],
		dayValue;


$('#categories').html('<label for="categories">Task Categories *required</label><select></select>');
    $('#categories select').attr({
            "id": "categories",
            "name": "Task Categories",
            "class": "required select",
            "data-native-menu": "false"
        })
        .append('<option data-placeholder="true" value="" >--Select A Schedule--</option>');

/*
function makeCats(){
		 var formTag=document.getElementsByTagName("form");
		 selectLi=ge('categories');
		 var makeSelect=document.createElement('select');
		 makeSelect.setAttribute("class", "required select");
		 makeSelect.setAttribute("id", "category");
		 for(i=0; i<taskCategories.length; i++){
		 	var makeOption=document.createElement('option');
			var optText=taskCategories[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML=optText;
			makeSelect.appendChild(makeOption);
		 }
		 selectLi.appendChild(makeSelect);
	}