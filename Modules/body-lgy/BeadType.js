﻿



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
	
	
	
	
	var spaceNum=0;
	while(spaceNum<12){
		OSVars.word[presentnum]=390+spaceNum;
		presentnum++;
		spaceNum++;
	}
	
	}	
}
