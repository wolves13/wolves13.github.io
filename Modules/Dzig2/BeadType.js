function checktype(){
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
	
	
	useBead(17,1);
	useBead(23,1);
	
	direction++;
	}	
}
