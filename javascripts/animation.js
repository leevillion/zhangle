$(document).ready(function(){
  $("#w-1").click(function(){
  	$(".w-1-c").slideToggle("slow",function(){});
  	slided("2","3","4","5","6");
  });
  });
$(document).ready(function(){
  $("#w-2").click(function(){
  	$(".w-2-c").slideToggle("slow",function(){});
  	slided("1","3","4","5","6");
  });
  });
$(document).ready(function(){
  $("#w-3").click(function(){
  	$(".w-3-c").slideToggle("slow",function(){});
  	slided("2","1","4","5","6");
  });
  });
$(document).ready(function(){
  $("#w-4").click(function(){
  	$(".w-4-c").slideToggle("slow",function(){});
  	slided("2","3","1","5","6");
  });
  });
$(document).ready(function(){
  $("#w-5").click(function(){
    $(".w-5-c").slideToggle("slow",function(){});
    slided("2","3","1","4","6");
  });
  });
$(document).ready(function(){
  $("#w-6").click(function(){
    $(".w-6-c").slideToggle("slow",function(){});
    slided("2","3","1","5","4");
  });
  });

function slided(a,b,c){
	// for(var input_index=0;input_index<4;input_index++){
		// $("input").each(function(){
  //           if($(this).attr("checked")==undefined)
  //               alert("$(this).val()");
  //           else
  //           	alert(1);
  //          });
		// if($("input:radio").eq(input_index).checked==false)
		// 	$(".w-"+input_index+"-c").slideUp("slow",function(){});
	// }
	var aclass=".w-"+a+"-c";
	var bclass=".w-"+b+"-c";
	var cclass=".w-"+c+"-c";
	$(aclass).slideUp("slow",function(){});
	$(bclass).slideUp("slow",function(){});
	$(cclass).slideUp("slow",function(){});
}
