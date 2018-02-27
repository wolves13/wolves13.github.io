



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
	
	

	//2nd_Automaton
	
	useBead(17,1);
	useBead(23,1);
	
	//propagate_Information
	
	direction++;
	}	
}
