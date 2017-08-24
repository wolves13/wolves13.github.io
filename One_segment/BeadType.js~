



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
	console.log(presentnum);
	
	var leng =OSVars.dragon_height;//Dragon_length
	var bitnum=bitNum;//bit
	
	//1st_counter
	useBead(0,1);
	useBead(1,2);
	for(var i=1;i<bitnum;i++){
	useBead(2,1);
	useBead(1,2);
	}
	useBead(3,1);//left_turn1
	//2nd_counter
	for(var i=0;i<bitnum;i++){
	useBead(4,2);
	useBead(5,1);
	}
	useBead(6,1);//right_turn1
	
	var times =0;
	while(times<leng){
	//1st_copy
		for(var i=0;i<bitnum;i++){
		useBead(7,1);
		useBead(8,2);
		}
		useBead(9,1);//left_turn2
	//2nd_copy
		for(var i=0;i<bitnum;i++){
		useBead(4,2);
		useBead(10,1);
		}
		times++;
		if(times==leng){
			useBead(11,1);
		}else{
			useBead(6,1);//right
		}
	}
	//1st_Automaton
	for(var i=0;i<bitnum;i++){
		useBead(12,1);
		useBead(13,2);
		useBead(27,1);	
	}
	useBead(14,1);//left_turn(glider)
	//1st_Automaton_propagate
	for(var i=0;i<bitnum;i++){
		useBead(29,1);
		useBead(28,2);
		useBead(15,1);
	}
	
	useBead(28,3);
	useBead(16,1);//right_turn3
	useBead(13,2);
	useBead(27,1);
	//2nd_Automaton
	for(var i=0;i<bitnum;i++){
		useBead(17,1);
		if(i==bitnum-1){
		useBead(23,1);
		useBead(18,1);
		useBead(27,1);
		}else{
		useBead(23,1);
		useBead(27,1);
		useBead(13,1);
		}
		}
	
	useBead(30,1);//left_turn4
	
	//4con
	useBead(28,1);
		useBead(29,1);
		useBead(19,1);
	for(var i=0;i<bitnum;i++){
		useBead(20,1);
		if(i==bitnum-1){
			useBead(22,1);
			useBead(31,1);
		}else{
			useBead(21,1);
			useBead(28,1);
			useBead(29,1);
		}
	}
	
	useBead(14,1);//right_turn4
	
	//propagate_Information
	if(direction%2==0){
	useBead(24,1);//tau
	}else{
	useBead(33,1);
	}
	useBead(27,1);
	
	for(var i=0;i<bitnum;i++){
		useBead(25,1);
		useBead(13,3);
		useBead(27,1);
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
	
	//1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618,
	for(var i=1;i<49;i++){
		OSVars.word[presentnum]=i+1700;
		presentnum++;
	}
	var turnspace = [751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768];
	var turnspacebit=[701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768];
	var turnspacelast=[701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768];
	
	
	var spaceNum=0;

	while(turnspace[spaceNum]!=null){
		OSVars.word[presentnum]=turnspace[spaceNum];
		presentnum++;
		spaceNum++;
	}
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
	
	for(var i=1;i<23;i++){
		OSVars.word[presentnum]=i+1900;
		presentnum++;
	}
	for(var i=1;i<25;i++){
		OSVars.word[presentnum]=i+1950;
		presentnum++;
	}
	direction++;
	}	
}