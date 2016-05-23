function percentage(){
	var A = document.getElementsByName('A');
	var B = document.getElementsByName('B');
	//var D = document.getElementsByName('P');
	var i = 0;
	var matrix =['P1', 'P2', 'P3', 'P4'];

	while(i<A.length){
		if (A[i].value !='' && B[i].value !=''){
			var C =(A[i].value/B[i].value)*100;
			var result = C.toFixed(0) + '%';
			if (A[i].value< 0) {
				A[i].value='';
				result ='';
				alert("Grade can not be negative.\n Please try again");
			}
			
			else if(B[i].value<=0){
				B[i].value='';
				result ='';
				alert("Total grade should greater than 1.\n Please try again");
			}
			//else if(C >100){
				//A[i].value='';
				//B[i].value='';
				//alert("Your grade cannot higher than total grade");
			//}
			//else{
				var p =matrix[i];
				document.getElementById(p).innerHTML =result;
			//}
		}
		else if(A[i].value=='' || B[i].value==''){
			var p =matrix[i];
			document.getElementById(p).innerHTML ='';
		}
		i=i+1;
	}
}

setInterval("percentage()",1000);

function average(){
	var A = document.getElementsByName('A');
	var B = document.getElementsByName('B');
	var X =0;
	var Y =0;
	var a =0;
	var AveResult;

	while (a<A.length){
		if (A[a].value !='' && B[a].value !=''){
			var D =(A[a].value/B[a].value);
			if (D >1) {
				A[a].value='';
				B[a].value='';
				alert("Your grade cannot higher than total grade\nPlease edit and retry again");
				return;
			}
			else{
				X = X + Number(A[a].value);
				Y = Y + Number(B[a].value);
			}
				
		}
		a=a+1;
	}
	AveResult =((X/Y)*100).toFixed(1);
	document.getElementById("TT").innerHTML = AveResult + "/100";

	if (AveResult<60) {

		if (confirm('Your average is below 50!\n Do you want to RETAKE this course?') == true){
			window.open ("https://go.sfu.ca/psp/paprd/EMPLOYEE/EMPL/h/?tab=PAPP_GUEST");
		}
		
	};
}

function mean() {
	var A = document.getElementsByName('A');
	var B = document.getElementsByName('B');
	var a =0;
	var X =0;
	var MeanResult =0;

	while (a<A.length){
		if (A[a].value !='' && B[a].value !=''){
			var D =(A[a].value/B[a].value);
			if (D >1) {
				A[a].value='';
				B[a].value='';
				alert("Your grade cannot higher than total grade\nPlease edit and retry again");
				return;
			}
			else{
				X=X + Number(A[a].value)/Number(B[a].value);
			}
		}
		a=a+1;
	}
	MeanResult=((X/(a-1))*100).toFixed(0);
	document.getElementById("TT").innerHTML = MeanResult + "/100";
}

