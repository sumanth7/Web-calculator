var numlis="";
var preval=0;
var result=0;
var op ="plus";
function numbuttonclick(){
    var val =$(this).val();
    numlis += val ;
  	$("#display").val(numlis);
}
function opbuttonclick(){
	//$("#output").html("inside opbutton");
	var val= $(this).val();
	
	
	
		//addition
		if (val=="plus"){
			
			if(numlis==""){
				op="plus";
				operations();
		}
		     else{
		         operations();
					op="plus";
				}

			numlis="";

		}
		//subtraction
		else if(val=="minus"){
			if(numlis==""){
				op="minus";
				operations();
		}
		     else{
		         operations();
					op="minus";
				}
					numlis="";
		}
		//division
		else if(val=="divide"){
        if(numlis==""){
				op="divide";
				operations();
		}
		     else{
		         operations();
					op="divide";
				}
			numlis="";
		}
		//multiplication
		else if(val=="product"){
         if(numlis==""){
				op="product";
				operations();
		}
		     else{
		         operations();
					op="product";
				}
			numlis="";
		}
        // Equalto
		else if (val=="equalto") {
			operations();
			op="equalto";
			$("#display").val(result);
			numlis="";
		}
		//clear
		else if(val=="clear"){
          numlis="";
          preval=0;
          result=0;
          $("#display").val("");
		}
	

}
function operations(){
	if(op=="plus"){
		
		result=preval + Number(numlis);
		preval=result;
		$("#display").val(result);
	}
	else if(op=="minus"){
		result=preval - Number(numlis);
		preval=result;
		$("#display").val(result);
	}
	else if(op=="product"){
		if(numlis==""){result= preval;}
		else{result= (preval) * Number(numlis);}
		preval=result;
		$("#display").val(result);
	}
	else if(op=="divide"){
		if(numlis==""){result=preval;}
		else{result=(preval)/ Number(numlis);}
		preval=result;
		$("#display").val(result);
	}
	else if (op="equalto"){
		if(numlis !=""){preval=Number(numlis);}
	}


}
$(".numbered").click(numbuttonclick);
$(".operator").click(opbuttonclick);