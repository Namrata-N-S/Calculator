/*
 * Implement all your JavaScript in this file!
 */
 "use strict";
 

	 var displayBox  = $("#display");
	 var operand1 = "";
	 var operand2 = "";
	 var operator = "";
	 var isOperator = false;
	 var result = 0;
	 var operationDone = false;
	 var Calculator = {
		init: function(){ 
			this.bindEvents();
		},	
		
		bindEvents: function(){
			$(".numericButton").click(function(){Calculator.displayChars(this,isOperator,result)});
			$(".operatorButton").click(function(){
				operator = "";
				operator = operator + this.id;
				isOperator = true;
			});
			$("#equalsButton").click(function(){
				operationDone = true;
				Calculator.equals(operator);
			});
			
			$("#clearButton").click(function(){
				Calculator.clear();
			});
		},
		
		displayChars:function(character,isOperator,result){
			if(operationDone === true && character && isOperator === false){
				Calculator.clear();
				operationDone = false;
			}
			if(isOperator === false){
				operand1 = operand1 + $(character).val();
				displayBox.val(operand1);
			}
			else{
				displayBox.val("");
				operand2 =  $(character).val();
				displayBox.val(operand2);				
			}			
			
			
		},
		displayResult: function(result){
			displayBox.val(result);
		},
		resetOperand: function(){
			operand1 = result;
			isOperator = false;
		},
		
		add:function(op1,op2){
			result = Number(op1) + Number(op2);
			Calculator.displayResult(result);
			Calculator.resetOperand();
		},
		
		subtract:function(op1,op2){
			result = Number(op1) - Number(op2);
			Calculator.displayResult(result);
			Calculator.resetOperand();
		},
		
		multiply:function(op1,op2){
			result = Number(op1) * Number(op2);
			Calculator.displayResult(result);
			Calculator.resetOperand();
		},
		
		divide:function(op1,op2){
			result = Number(op1) / Number(op2);
			Calculator.displayResult(result);
			Calculator.resetOperand();
		},
		
		clear:function(){
			operand1 = "";
			operand2 = "";
			operator = "";
			isOperator = false;
			operationDone = false;
			displayBox.val("");
			result = 0;	
		},
		
		equals:function(operator){
			if(operator && operand2){
				displayBox.val("");
			}
			switch(operator)
				{
					case "addButton" :  Calculator.add(operand1,operand2);
					break;
					
					case "subtractButton" : Calculator.subtract(operand1,operand2);
					break;
					
					case "multiplyButton" : Calculator.multiply(operand1,operand2);
					break;
					
					case "divideButton" : Calculator.divide(operand1,operand2);
					
				}
				
		}
	 }
	$(document).ready(function(){
		Calculator.init();
	});
	 
