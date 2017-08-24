



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
	
	var leng =1;//Dragon_length
	var bitnum=bitNum;//bit
	
	

	//1st_Automaton_propagate

	useBead(15,1);
	
	
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
	
	direction++;
	}	
}
