function show(Id){
    document.getElementById(Id).style.display = 'block';
}

function hide(Id){
    document.getElementById(Id).style.display = 'none';
}

function addBorder(Id){									//.border {border:solid;border-color:blue;background-color: white;}
	document.getElementById(Id).classList.add('border');	//Include this className border on CSS styles
}

function removeBorder(Id){
	document.getElementById(Id).classList.remove('border');
}

function update(arg1, arg2,arg3){                            //arg1 ID of the initial content
	document.getElementById(arg1).contentEditable = "true";  //arg2 ID of the Update/Edit button
	show(arg3);hide(arg2);addBorder(arg1);					 //arg3 ID of the Save Changes button
}

function save(arg1, arg2,arg3){									//arg1 ID of the initial content
	document.getElementById(arg1).contentEditable = "false";    //arg2 ID of the Update/Edit button
	show(arg2);hide(arg3);removeBorder(arg1);					//arg3 ID of the Save Changes button
}

/*    REFERENCE FOR THE BUTTONS AND INITIAL CONTENT

<p id="initial" contenteditable="false">Initial Content</p>
<button type="button" onClick="update('initial','edit','save')" id="edit">Update/Edit</button>
<button type="button" onClick="save('initial','edit','save')" id="save" style="display:none">Save Changes</button>
            
functionName('initialContent(ID)', 'updated/editButton(ID)','saveChangesButton(ID)')

*/



