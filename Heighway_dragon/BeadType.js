﻿function checktype(){
    var maxnum=0;
    var i=0;
    var chek=[];
    while(i<4000){
    	if(OSVars.word.indexOf(i) >= 0){
    		maxnum++;   
	    }
	i++;
	}
    return maxnum;
}


//ビードタイプをここで設定
function setBeadTypes(){
	var presentnum=1; 
	function useBead(confnum,times){
		var setnum = Confirmations[confnum].Beads;
		for(var i=0;i<times;i++){
			for(var type=1;type<=setnum;type++){
				OSVars.word[presentnum]=type+Confirmations[confnum].start;
				presentnum++;
			}
		}
	}

	while(presentnum<OSVars.cons.len){

	
	var leng =OSVars.dragon_height;//Dragon_length
	var bitnum=bitNum;//bit
	
	//1st_counter
	
	for(var i=0;i<bitnum;i++){
	useBead(0,1);
	if(i!=bitnum-1){
	useBead(1,3);//counter_space
	}
	}
	useBead(3,1);//left_turn1
	//2nd_counter
	useBead(34,1);
	for(var i=0;i<bitnum;i++){
	
	useBead(5,1);//Counter_zag
	if(i!=bitnum-1){
	useBead(28,5);
	useBead(34,1);
	}
	}
	var times =0;
	if(times==leng){
			useBead(28,1);
			useBead(11,1);
		}else{
			useBead(744,1);//right_turn1
	}
	
	
	
	while(times<leng){
	//1st_copy
		useBead(8,1);
		for(var i=0;i<bitnum;i++){
		useBead(2,1);
		if(i!=bitnum-1){
		useBead(8,6);
		}else{
		useBead(3,1);//left_turn
		}
		}
	
	//2nd_copy
		useBead(34,1);
		for(var i=0;i<bitnum;i++){
		useBead(5,1);
		if(i!=bitnum-1){
		useBead(28,5);
		useBead(34,1);
		}
		}
		times++;
		if(times==leng){
			useBead(28,1);
			useBead(11,1);
		}else{
			useBead(744,1);//right
		}
	}
	//1st_Automaton
	for(var i=0;i<bitnum;i++){
		useBead(12,1);
		useBead(13,5);
		//useBead(27,1);	
	}
	useBead(14,1);//left_turn(glider)
	//1st_Automaton_propagate
	useBead(28,2);
	useBead(29,1);
	useBead(28,1);
	useBead(29,1);
	useBead(15,1);
	for(var i=0;i<bitnum-1;i++){
		useBead(28,4);
		useBead(29,1);
		useBead(15,1);
	}
	
	useBead(28,4);
	useBead(16,1);//right_turn3
	useBead(13,1);
	useBead(23,1);
	useBead(29,1);
	
	//2nd_Automaton
	for(var i=0;i<bitnum;i++){
		useBead(17,1);
		if(i==bitnum-1){
		useBead(23,1);
		useBead(18,1);
		//useBead(13,1);
		}else{
		useBead(23,1);
		useBead(13,2);
		useBead(29,1);
		}
	}
	
	useBead(14,1);//left_turn
	useBead(8,3);
	useBead(19,1);//length:3 調整のため
	
	//4con
	for(var i=0;i<bitnum;i++){
		useBead(20,1);
		if(i==bitnum-1){
			useBead(21,1);
			useBead(18,1);
		}else{
			useBead(21,1);
			useBead(8,4);
		}
	}
	
	useBead(14,1);//right_turn4
	
	//propagate_Information
	if(direction%2==0){
	useBead(190,1);//tau
	}else{
	useBead(33,1);
	}
	
	useBead(34,1);
	
	for(var i=0;i<bitnum;i++){
		useBead(190,1);
		if(i!=bitnum-1){
		useBead(34,7);
		}else{
		useBead(34,1);	
		}
	}
	useBead(14,1);
	useBead(32,1);
	
	var turnNum=0;
	var maketurn = [];
	maketurn=make_turn(bitNum);
	
	while(maketurn[turnNum]!=null){
	OSVars.word[presentnum]=maketurn[turnNum];
	presentnum++;
	turnNum++;
	}
	
	
	for(var i=1;i<13;i++){
		//OSVars.word[presentnum]=i+807;
		//presentnum++;
	}
	var turnspace = [354, 355, 356, 357, 358, 359 ];
	var turnspacebit=[336,337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353 , 354, 355, 356, 357, 358, 359, 354, 355, 356, 357, 358, 359 ,354, 355, 356, 357, 358, 359, 354, 355, 356, 357, 358, 359 ,354, 355, 356, 357, 358, 359, 354, 355, 356, 357, 358, 359];
	var turnspacelast=[336,337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353 , 354, 355, 356, 357, 358, 359];
	
	var spaceNum=0;

	
	for(var i=0;i<bitNum;i++){
		spaceNum=0;
		if(i==bitNum-1){
			while(turnspacelast[spaceNum]!=null){
				OSVars.word[presentnum]=turnspacelast[spaceNum];
				presentnum++;
				spaceNum++;
			}
		}
		else{
			while(turnspacebit[spaceNum]!=null){
			OSVars.word[presentnum]=turnspacebit[spaceNum];
			presentnum++;
			spaceNum++;
		}
	}
	}	
	
	useBead(6,1);
	useBead(1,1);
	/*
	for(var i=1;i<25;i++){
		OSVars.word[presentnum]=i+1950;
		presentnum++;
	}
	*/
	direction++;
	}	
}
