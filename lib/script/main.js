$("document").ready(function(e){

    $(".addItem").click(function(){
    	var itemCapture = $("input#toDoItem").val();
    	$("ol#toDoList").append("<li><p>" + itemCapture + "<input type='checkbox' class='deleteItem'></p></li>");
    });

    $(".deleteItem").click(function(){
   		$("input.deleteItem:checked").parents("li").remove();
    });
    
});