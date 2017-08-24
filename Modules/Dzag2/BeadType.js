



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
	
	

	
	//4con

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
