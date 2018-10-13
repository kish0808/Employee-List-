$(document).ready(function () {
  employeeList = [];// epmplyee array task 
  
  $('#add-employee').on('click', addEmployee);

   // Add Employee Function 
  function addEmployee() {

    if($('#add-employee').html()=="ADD"){
    var employee ={};
    employee.name= $('#employee-name').val();
    employee.id=$('#employee-id').val();
    employee.city=$('#employee-city').val();
    employee.age=$('#employee-age').val();
    employeeList.push(employee);
    
    $('#employee-name').val(""); 
    $('#employee-id').val("");     
    $('#employee-city').val("");     
    $('#employee-age').val("");    
    listPrint(); 
   
    }
     
    else if ($('#add-employee').html()=="SAVE")
    { 
     var saveEmployeeid =$('#employee-name').attr('indexid'); 
     employeeList[saveEmployeeid ].name = $('#employee-name').val();
     employeeList[saveEmployeeid ].id = $('#employee-id').val();
     employeeList[saveEmployeeid ].city = $('#employee-city').val();
     employeeList[saveEmployeeid ].age = $('#employee-age').val();

     $('#employee-name').val(""); 
    $('#employee-id').val("");     
    $('#employee-city').val("");     
    $('#employee-age').val("");
     listPrint();
    }
 
  
    
  }


function listPrint()
{
  $('#todos').html(""); 
  for (i = 0; i < employeeList.length;i++){

$('#todos').append('<div class="coloumn">'+ employeeList[i].name+' </div>'+'<div class="coloumn">'
+ employeeList[i].id+' </div>'+'<div class="coloumn">'+ employeeList[i].city+' </div>'+'<div class="coloumn">'
+ employeeList[i].age+' </div>'
+'<span class="glyphicon glyphicon-trash deleteItem" delete-id='+i+' ></span>'
+'<span class="glyphicon glyphicon-edit editItem" data-id='+i+'></span>' );

  }
  $('.glyphicon-edit').on('click', editemployee);//on click edit 
  $('.glyphicon-trash').on('click', deleteEmployee);
}


function editemployee(){

employeeNewId=$(this).attr('data-id');

$("#employee-name").val(employeeList[employeeNewId].name);
$("#employee-id").val(employeeList[employeeNewId].id);
$("#employee-city").val(employeeList[employeeNewId].city);
$("#employee-age").val(employeeList[employeeNewId].age);

$('#employee-name').attr('indexid',employeeNewId);
        $('#add-employee').html("SAVE");

}


function deleteEmployee(){
  
  var newdeleteId= $(this).attr('delete-id'); //get the index value 
 
  employeeList.splice(newdeleteId,1 );
 // TodoList.splice();
 $('#todos').html(""); //clear
 listPrint();//print

}





});