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

function slided(a,b,c,d,e){
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
  var dclass=".w-"+d+"-c";
  var eclass=".w-"+e+"-c";
	$(aclass).slideUp("slow",function(){});
	$(bclass).slideUp("slow",function(){});
	$(cclass).slideUp("slow",function(){});
  $(dclass).slideUp("slow",function(){});
  $(eclass).slideUp("slow",function(){});
}

// 联系必填项验证
function sendInfo(){
  var inputs=document.getElementsByTagName("input");
  var talks=document.getElementById("talk");
  var count=0;
  for(var k=0;k<inputs.length;k++){
    if(inputs[k].type=="text" && inputs[k].value==""){
      inputs[k].style.border="3px solid #CC0033";
      count=count+1;
    }
  }
  if(talks.value==""){
    talks.style.border="3px solid #CC0033";
    count=count+1;
  }
  if(count>0)
    return false;
  else
    return true;
}
// 移动导航菜单显示
function exchangeNav(){
  $("#main-nav").toggle(800);
  // $("#main-nav").show("slow");
  // var nav=document.getElementById("main-nav");
  // if(nav.style.display=="block")
  //   nav.hide("slow");
  //   // nav.style.display="none";
  // else if(nav.style.display=="none")
  //   nav.show("slow");
}
function setRotate(){
  // $(".workpart-title canvas").animate({ marginLeft:"92%"},600);
  // $(".workpart-title canvas").animate({ marginLeft:"0%"},1000);
  // $(".workpart-title canvas").animate({ marginLeft:"45%"},1000);
  var today=new Date()
  var s=today.getMilliseconds()
  $(".aboutpart-title canvas").css("-webkit-transform","rotate("+s+"deg)");
  $(".aboutpart-title canvas").css("-moz-transform","rotate("+s+"deg)");
  $(".aboutpart-title canvas").css("-o-transform","rotate("+s+"deg)");
  $(".aboutpart-title canvas").css("-ms-transform","rotate("+s+"deg)");
  $(".aboutpart-title canvas").css("transform","rotate("+s+"deg)");
  t=setTimeout('setRotate()',50);
}
function clearRotate(){
  clearTimeout(t);
}
function setRotate0(){
  // $(".workpart-title canvas").animate({ marginLeft:"92%"},600);
  // $(".workpart-title canvas").animate({ marginLeft:"0%"},1000);
  // $(".workpart-title canvas").animate({ marginLeft:"45%"},1000);
  var today=new Date()
  var s=today.getMilliseconds()
  $(".workpart-title canvas").css("-webkit-transform","rotate("+s+"deg)");
  $(".workpart-title canvas").css("-moz-transform","rotate("+s+"deg)");
  $(".workpart-title canvas").css("-o-transform","rotate("+s+"deg)");
  $(".workpart-title canvas").css("-ms-transform","rotate("+s+"deg)");
  $(".workpart-title canvas").css("transform","rotate("+s+"deg)");
  t=setTimeout('setRotate0()',50);
}
function clearRotate0(){
  clearTimeout(t);
}