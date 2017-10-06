
//Rulesetをここで定める
function Rules(){
	//1part   

	setConfirmation(18,0);
	FirstCF(30,0);
	PCFrule(3,3,0);
	PCFrule(3,2,0);
	PCFrule(2,3,0);
	PCFrule(2,2,0);
	PCFrule(5,4,0);
	PCFrule(6,2,0);
	PCFrule(7,3,0);
	
	OSVars.ruleset[3][715]=true;
	ICFrule(3,15,0);//
	ICFrule(4,13,0);
	ICFrule(9,12,0);
	ICFrule(9,13,0);
	ICFrule(10,12,0);
	ICFrule(2,10,0);
	ICFrule(2,14,0);
	ICFrule(1,10,0);
	ICFrule(1,14,0);
	ICFrule(7,13,0);
	ICFrule(2,13,0);
	ICFrule(3,12,0);
	ICFrule(3,13,0);
	ICFrule(12,12,0);
	ICFrule(5,4,0);
	ICFrule(5,9,0);
	ICFrule(12,4,0);
	ICFrule(6,10,0);
	ICFrule(7,4,0);
	ICFrule(7,9,0);
	ICFrule(12,3,0);
	ICFrule(12,11,0);
	ICFrule(7,4,0);
	
	CFrule(1,6,0);
	CFrule(12,7,0);
	CFrule(12,7,0);
	CFrule(10,4,0);
	CFrule(12,8,0);
	CFrule(5,8,0);
	CFrule(5,9,0);
	CFrule(3,12,0);
	CFrule(7,1,0);
	CFrule(7,3,0);
	CFrule(1,8,0);
	CFrule(11,5,0);
	CFrule(15,10,0);
	CFrule(15,11,0);
	CFrule(14,11,0);
	CFrule(13,18,0);
	CFrule(14,18,0);
	CFrule(14,17,0);
	CFrule(14,16,0);
	ICFrule(15,3,0);
	ICFrule(15,11,0);
	OSVars.ruleset[427][18]=true;
	OSVars.ruleset[427][16]=true;
	OSVars.ruleset[427][15]=true;
	SpeCFrule(18,3,0);
	/*
	ICFrule(16,6,0);
	ICFrule(15,6,0);
	ICFrule(18,6,0);
	*/
	//spacer
	setConfirmation(12,1);
	PCFrule(2,2,1);
	PCFrule(3,3,1);
	PCFrule(7,3,1);
	CFrule(7,10,1);
	PCFrule(6,2,1);
	CFrule(6,11,1);
	
	
	for(var i=1;i<4;i++){
		CFrule((i+1)*3,3*i-2,1);
		//CFrule((i+1)*3-1,3*i-1,1);
	}
	CFrule(3,5,1);
	CFrule(1,5,1);
	CFrule(7,1,1);
	ICFrule(4,4,1);
	ICFrule(9,3,1);
	ICFrule(10,4,1);
	ICFrule(1,4,1);//
	ICFrule(3,4,1);//
	OSVars.ruleset[21][403]=true;
	OSVars.ruleset[22][403]=true;

	ICFrule(6,3,1);
	ICFrule(7,4,1);
	ICFrule(12,4,1);
	CFrule(3,10,1);
	CFrule(2,11,1);
	CFrule(12,8,1);
	CFrule(6,8,1);
	ICFrule(9,4,1);
	ICFrule(2,3,1);
	CFrule(12,3,1);
	ICFrule(12,4,1);
	OSVars.ruleset[30][403]=true;
	CFrule(11,4,1);
	OSVars.ruleset[27][403]=true;
	OSVars.ruleset[28][403]=true;
	
	//left_turn(up to up)
	setConfirmation(18,3);
	PCFrule(3,3,3);
	PCFrule(3,2,3);
	PCFrule(2,1,3);
	CFrule(1,6,3);
	CFrule(5,1,3);
	CFrule(2,5,3);
	CFrule(9,4,3);
	CFrule(8,5,3);
	CFrule(8,6,3);
	CFrule(10,4,3);
	CFrule(11,3,3);
	CFrule(12,10,3);
	CFrule(13,11,3);
	CFrule(14,12,3);
	CFrule(15,13,3);
	CFrule(17,15,3);
	CFrule(18,11,3);
	CFrule(18,13,3);
	
	//2nd_line_spacer
	setConfirmation(6,4);
	PCFrule(2,2,4);
	PCFrule(3,3,4);
	for(var i=1;i<2;i++){
		CFrule((i+1)*3,3*i-2,4);
		CFrule((i+1)*3-1,3*i-1,4);
	}
	setConfirmation(6,34);
	PCFrule(2,2,34);
	PCFrule(3,3,34);
	for(var i=1;i<2;i++){
		CFrule((i+1)*3,3*i-2,34);
		CFrule((i+1)*3-1,3*i-1,34);
	}
	//2nd_line_2Confs
	setConfirmation(18,5);
	
	PCFrule(2,2,5);
	PCFrule(3,3,5);
	CFrule(2,5,5);
	ICFrule(6,7,5);
	ICFrule(6,9,5);
	for(var i=2;i<5;i++){
		CFrule((i+1)*3,3*i-2,5);
		CFrule((i+1)*3-1,3*i-1,5);
	}
	CFrule(13,18,5);
	
	ICFrule(2,8,5);
	ICFrule(3,8,5);
	ICFrule(2,8,5);
	ICFrule(3,8,5);
	SpeCFrule(4,12,5);
	SpeCFrule(4,10,5);
	SpeCFrule(5,10,5);
	SpeCFrule(5,7,5);
	SpeCFrule(5,9,5);
	SpeCFrule(18,7,5);
	SpeCFrule(18,9,5);
	CFrule(4,7,5);
	CFrule(5,7,5);
	CFrule(3,8,5);
	CFrule(8,12,5);//
	CFrule(1,10,5);
	CFrule(2,10,5);
	PCFrule(10,2,5);
	CFrule(13,7,5);
	CFrule(14,6,5);
	CFrule(15,6,5);
	CFrule(15,17,5);
	CFrule(18,6,5);
	CFrule(2,17,5);
	CFrule(3,16,5);
	CFrule(10,17,5);
	
	
	//right turn(up to low)
	setConfirmation(22,6);
	PCFrule(2,2,6);
	PCFrule(3,3,6);
	for(var i=1;i<3;i++){
		CFrule((i+1)*3,3*i-2,6);
		CFrule((i+1)*3-1,3*i-1,6);
	}
	CFrule(10,8,6);
	CFrule(11,9,6);
	CFrule(12,9,6);
	CFrule(13,11,6);
	CFrule(14,12,6);
	CFrule(15,13,6);
	CFrule(16,14,6);
	CFrule(18,14,6);
	CFrule(19,4,6);
	CFrule(19,12,6);
	CFrule(20,4,6);
	CFrule(21,18,6);
	CFrule(22,17,6);
	CFrule(22,18,6);
	//turnとcounterのつなぎ目
	
	
	//copy
	setConfirmation(18,7);
	PCFrule(2,3,7);
	PCFrule(3,3,7);
	ICFrule(4,16,7);
	ICFrule(5,10,7);
	ICFrule(6,9,7);
	ICFrule(6,10,7);
	ICFrule(10,14,7);
	ICFrule(15,9,7);
	ICFrule(15,13,7);
	CFrule(1,10,7);
	CFrule(1,6,7);
	CFrule(4,8,7);
	CFrule(4,9,7);
	CFrule(12,7,7);
	CFrule(15,17,7);
	CFrule(18,13,7);
	
	//copy_space
	setConfirmation(6,8);
	PCFrule(2,2,8);
	PCFrule(3,3,8);
	ICFrule(1,4,8);
	ICFrule(6,3,8);
	CFrule(6,1,8);
	CFrule(2,5,8);
	SpeCFrule(1,16,8);
	SpeCFrule(6,15,8);
	//left_turn(low tp up)
	setConfirmation(16,9);
	PCFrule(2,3,9);
	PCFrule(3,3,9);
	CFrule(6,1,9);
	CFrule(5,3,9);
	CFrule(7,5,9);
	CFrule(8,6,9);
	CFrule(9,6,9);
	CFrule(10,8,9);
	CFrule(11,9,9);
	CFrule(12,10,9);
	CFrule(13,11,9);
	CFrule(15,13,9);
	CFrule(16,9,9);
	CFrule(16,11,9);
	//copy_2nd
	setConfirmation(18,10);
	PCFrule(2,2,10);
	PCFrule(3,3,10);
	ICFrule(8,6,10);
	ICFrule(8,7,10);
	ICFrule(9,1,10);
	ICFrule(9,6,10);
	ICFrule(18,1,10);
	ICFrule(12,11,10);
	for(var i=1;i<6;i++){
		CFrule((i+1)*3,3*i-2,10);
		CFrule((i+1)*3-1,3*i-1,10);
	}
	CFrule(12,5,10);
	CFrule(17,9,10);
	CFrule(17,10,10);
	CFrule(18,9,10);
	CFrule(18,10,10);
	CFrule(18,14,10);
	
	//right_turn(square to glider)
	setConfirmation(18,11);
	PCFrule(2,3,11);
	PCFrule(3,3,11);
	
	CFrule(2,4,11);
	CFrule(3,5,11);
	CFrule(3,6,11);
	CFrule(5,7,11);
	CFrule(6,8,11);
	CFrule(7,9,11);
	CFrule(8,10,11);
	CFrule(11,8,11);
	CFrule(12,6,11);
	CFrule(11,13,11);
	CFrule(12,14,11);
	CFrule(12,15,11);
	CFrule(13,18,11);
	CFrule(18,14,11);
	
	//automaton_1st
	setConfirmation(24,12);
	PCFrule(3,2,12);
	PCFrule(3,3,12);
	PCFrule(6,2,12);
	PCFrule(7,2,12);
	PCFrule(7,3,12);
	ICFrule(3,14,12);//
	ICFrule(4,13,12);//
	ICFrule(4,14,12);//
	ICFrule(5,10,12);//
	ICFrule(6,9,12);//
	ICFrule(6,10,12);//
	ICFrule(7,10,12);//
	ICFrule(12,14,12);//
	ICFrule(12,10,12);//
	ICFrule(13,9,12);//
	ICFrule(7,4,12);
	ICFrule(7,12,12);//
	ICFrule(13,4,12);
	ICFrule(13,12,12);//
	SpeCFrule(15,4,12);
	SpeCFrule(24,4,12);
	for(var i=1;i<8;i++){
		CFrule((i+1)*3,3*i-2,12);
		CFrule((i+1)*3-1,3*i-1,12);
	}
	CFrule(1,9,12);
	CFrule(2,6,12);
	CFrule(3,12,12);
	CFrule(4,8,12);
	CFrule(4,10,12);
	CFrule(4,12,12);
	CFrule(6,12,12);
	CFrule(7,10,12);
	CFrule(8,12,12);
	CFrule(11,14,12);
	CFrule(11,19,12);
	CFrule(15,24,12);
	CFrule(16,24,12);
	
	//Automaton_Spacer
	setConfirmation(6,13);
	PCFrule(2,2,13);
	PCFrule(3,3,13);
	for(var i=1;i<2;i++){
		CFrule((i+1)*3,3*i-2,13);
		CFrule((i+1)*3-1,3*i-1,13);
	}
	//CFrule(6,2,13);
	//CFrule(5,9,13);
	//CFrule(8,12,13);
	//left_turn(glider)
	setConfirmation(22,14);
	PCFrule(2,2,14);
	PCFrule(3,3,14);
	for(var i=1;i<3;i++){
		CFrule((i+1)*3,3*i-2,14);
		CFrule((i+1)*3-1,3*i-1,14);
	}
	CFrule(10,8,14);
	CFrule(12,10,14);
	CFrule(12,9,14);
	CFrule(11,13,14);
	CFrule(15,9,14);
	CFrule(15,4,14);
	CFrule(16,4,14);
	CFrule(17,14,14);
	CFrule(18,16,14);
	CFrule(18,21,14);
	CFrule(19,17,14);
	//CFrule(18,20,14);
	CFrule(22,16,14);
	
	//Automaton_copy
	setConfirmation(24,15);
	PCFrule(3,3,15);
	PCFrule(7,3,15);
	for(var i=1;i<7;i++){
		CFrule((i+1)*3,3*i-2,15);
	}
	CFrule(2,5,15);
	CFrule(17,20,15);
	CFrule(10,19,15);
	CFrule(14,17,15);
	ICFrule(2,20,15);
	ICFrule(3,20,15);
	ICFrule(12,11,15);
	ICFrule(12,13,15);
	ICFrule(12,15,15);
	ICFrule(12,19,15);
	ICFrule(14,7,15);
	ICFrule(14,8,15);
	ICFrule(15,6,15);
	ICFrule(15,8,15);
	ICFrule(24,1,15);
	ICFrule(24,3,15);
	ICFrule(24,7,15);
	
	SpeCFrule(24,13,15);
	SpeCFrule(24,15,15);
	SpeCFrule(24,19,15);
	SpeCFrule(14,18,15);
	SpeCFrule(15,18,15);
	SpeCFrule(14,20,15);
	SpeCFrule(15,20,15);
	
	
	//right_turn(glider)
	setConfirmation(11,16);
	PCFrule(3,3,16);
	CFrule(4,2,16);
	CFrule(5,3,16);
	CFrule(6,4,16);
	CFrule(7,5,16);
	CFrule(8,5,16);
	CFrule(9,3,16);
	CFrule(10,8,16);
	CFrule(11,8,16);
	//CFrule(14,9,16);
	//CFrule(17,12,16);
	
	////
	//Automaton_2nd
	setConfirmation(24,17);
	PCFrule(3,3,17);
	PCFrule(3,2,17);
	for(var i=1;i<4;i++){
		CFrule((i+1)*3,3*i-2,17);
	}
	SpeCFrule(24,4,17);//
	PCFrule(7,2,17);
	PCFrule(8,3,17);
	ICFrule(2,20,17);
	ICFrule(3,19,17);
	ICFrule(3,20,17);
	ICFrule(3,22,17);
	ICFrule(4,10,17);
	ICFrule(4,19,17);
	ICFrule(5,15,17);
	ICFrule(5,16,17);//
	ICFrule(6,10,17);//
	ICFrule(6,15,17);//
	ICFrule(6,21,17);//
	ICFrule(7,16,17);//
	ICFrule(8,15,17);//
	ICFrule(9,20,17);//
	ICFrule(9,19,17);//
	//ICFrule(10,19,17);
	ICFrule(13,10,17);///
	ICFrule(15,9,17);//
	ICFrule(15,10,17);//
	ICFrule(16,8,17);//
	ICFrule(17,7,17);//
	ICFrule(17,8,17);//
	ICFrule(20,3,17);///
	ICFrule(21,4,17);//
	ICFrule(21,3,17);//
	ICFrule(24,7,17);//
	ICFrule(24,-2,17);///
	CFrule(1,7,17);//
	CFrule(1,10,17);//
	CFrule(2,5,17);//
	CFrule(2,9,17);//
	CFrule(3,6,17);//
	CFrule(4,11,17);//
	CFrule(4,13,17);///
	CFrule(5,8,17);//
	CFrule(5,10,17);//
	CFrule(5,11,17);//
	//CFrule(5,13,17);
	CFrule(6,9,17);//
	CFrule(6,10,17);//
	CFrule(6,14,17);///
	CFrule(6,15,17);//
	CFrule(7,10,17);//
	CFrule(8,11,17);//
	//CFrule(8,15,17);
	CFrule(9,12,17);//
	CFrule(9,14,17);///
	CFrule(11,15,17);///
	CFrule(12,15,17);///
	//CFrule(12,18,17);
	CFrule(13,18,17);//
	CFrule(14,17,17);//
	CFrule(14,18,17);//
	CFrule(14,19,17);//
	CFrule(14,20,17);//
	CFrule(16,19,17);//
	CFrule(16,23,17);//
	CFrule(17,19,17);//
	CFrule(17,20,17);//
	CFrule(17,22,17);///
	CFrule(18,21,17);//
	CFrule(19,22,17);///
	CFrule(19,24,17);//
	CFrule(21,24,17);//
	//CFrule(26,18,17);//
	//to low part
	setConfirmation(12,18);
	PCFrule(3,3,18);
	PCFrule(3,2,18);
	PCFrule(2,2,18);
	for(var i=1;i<4;i++){
		CFrule((i+1)*3,3*i-2,18);
	}
	ICFrule(5,4,18);
	SpeCFrule(6,3,18);
	ICFrule(7,3,18);
	ICFrule(12,3,18);
	
	ICFrule(6,12,18);//FPS
	ICFrule(7,7,18);
	ICFrule(12,1,18);
	ICFrule(5,6,18);
	
	CFrule(1,8,18);
	CFrule(2,7,18);
	CFrule(4,7,18);
	CFrule(5,12,18);
	CFrule(6,9,18);
	
	//
	//length:3のspace
	setConfirmation(3,19);
	PCFrule(3,3,19);
	PCFrule(2,2,19);
	
	
	////
	//4con
	setConfirmation(24,20);
	PCFrule(3,3,20);
	PCFrule(3,2,20);
	for(var i=1;i<8;i++){
		CFrule((i+1)*3,3*i-2,20);
	}
	
	ICFrule(3,27,20);
	
	ICFrule(5,16,20);
	ICFrule(5,23,20);
	ICFrule(9,19,20);
	ICFrule(12,16,20);
	ICFrule(12,18,20);
	ICFrule(14,7,20);
	ICFrule(15,6,20);
	ICFrule(15,7,20);
	ICFrule(15,9,20);
	ICFrule(15,10,20);
	ICFrule(15,13,20);
	ICFrule(16,9,20);
	ICFrule(17,4,20);
	ICFrule(17,11,20);
	ICFrule(18,1,20);
	ICFrule(18,3,20);
	ICFrule(18,10,20);
	ICFrule(18,12,20);
	ICFrule(24,4,20);
	ICFrule(24,10,20);
	ICFrule(24,6,20);
	ICFrule(24,8,20);
	ICFrule(24,9,20);
	
	CFrule(1,8,20);
	CFrule(2,5,20);
	CFrule(2,6,20);
	CFrule(2,7,20);
	CFrule(4,7,20);
	CFrule(5,7,20);
	CFrule(5,8,20);
	CFrule(6,9,20);
	CFrule(6,12,20);
	CFrule(8,12,20);
	
	CFrule(13,22,20);
	CFrule(14,17,20);
	CFrule(15,11,20);
	CFrule(15,24,20);
	CFrule(17,20,20);
	CFrule(18,11,20);
	CFrule(19,11,20);
	
	////
	//4con用glider
	setConfirmation(6,21);
	PCFrule(3,3,21);
	PCFrule(3,2,21);
	PCFrule(3,6,21);
	PCFrule(3,7,21);
	for(var i=1;i<2;i++){
		CFrule((i+1)*3,3*i-2,21);
	}
	ICFrule(3,4,21);
	ICFrule(3,6,21);
	
	//length:2のspace
	setConfirmation(6,22);
	PCFrule(3,3,22);
	PCFrule(3,2,22);
	PCFrule(3,6,22);
	PCFrule(3,7,22);
	for(var i=1;i<2;i++){
		CFrule((i+1)*3,3*i-2,22);
	}
	ICFrule(3,6,22);
	CFrule(2,6,22);
	
	////
	//Automaton2ndのspacer
	setConfirmation(12,23);
	PCFrule(2,7,23);
	PCFrule(3,3,23);
	for(var i=1;i<4;i++){
		CFrule((i+1)*3,3*i-2,23);
		CFrule((i+1)*3-1,3*i-1,23);
	}
	ICFrule(3,4,23);
	CFrule(12,8,23);
	
	////
	//tau_propa
	setConfirmation(12,24);
	PCFrule(3,3,24);
	for(var i=1;i<3;i++){
		CFrule((i+1)*3,3*i-2,24);
		CFrule((i+1)*3-1,3*i-1,24);
	}
	ICFrule(2,4,24);
	ICFrule(3,4,24);
	PCFrule(6,2,24);
	PCFrule(7,3,24);
	ICFrule(12,3,24);
	ICFrule(12,1,24);
	//////another_tau_propa
	setConfirmation(12,33);
	PCFrule(3,3,33);
	for(var i=1;i<3;i++){
		CFrule((i+1)*3,3*i-2,33);
		CFrule((i+1)*3-1,3*i-1,33);
	}
	ICFrule(2,8,33);
	ICFrule(3,8,33);
	PCFrule(6,2,33);
	PCFrule(7,3,33);
	ICFrule(12,3,33);
	ICFrule(12,1,33);
	////
	//last copy
	setConfirmation(12,25);
	PCFrule(3,3,25);
	for(var i=1;i<3;i++){
		CFrule((i+1)*3,3*i-2,25);
		CFrule((i+1)*3-1,3*i-1,25);
	}
	ICFrule(2,8+12,25);
	ICFrule(3,8+12,25);
	ICFrule(2,6+12,25);
	ICFrule(3,6+12,25);
	PCFrule(6,2,25);
	PCFrule(7,3,25);
	ICFrule(12,7+12,25);
	ICFrule(12,3+12,25);
	ICFrule(12,1+12,25);
	
	////
	//ToUp
	setConfirmation(12,26);
	PCFrule(3,3,26);
	PCFrule(3,2,26);
	PCFrule(2,2,26);
	for(var i=1;i<4;i++){
		CFrule((i+1)*3,3*i-2,26);
	}
	ICFrule(5,4,26);
	ICFrule(6,9,26);
	ICFrule(7,3,26);
	ICFrule(12,3,26);
	
	CFrule(1,8,26);
	CFrule(2,7,26);
	CFrule(4,7,26);
	CFrule(5,12,26);
	CFrule(6,9,26);
	
	////
	//length:2(glider)
	setConfirmation(6,27);
	PCFrule(3,3,27);
	CFrule(6,2,27);
	PCFrule(2,2,27);
	for(var i=1;i<2;i++){
		CFrule((i+1)*3,3*i-2,27);
	}
	//tau from 4con
	//to low part
	setConfirmation(12,31);
	PCFrule(3,3,31);
	PCFrule(3,2,31);
	PCFrule(2,2,31);
	for(var i=1;i<4;i++){
		CFrule((i+1)*3,3*i-2,31);
	}
	ICFrule(5,7,31);
	ICFrule(6,12,31);
	ICFrule(7,7,31);
	ICFrule(12,1,31);
	
	CFrule(1,8,31);
	CFrule(2,7,31);
	CFrule(4,7,31);
	CFrule(5,12,31);
	CFrule(6,9,31);
	//glider to square
	setConfirmation(7,32);
	PCFrule(3,3,32);
	CFrule(2,4,32);
	CFrule(4,6,32);
	CFrule(6,2,32);
	CFrule(7,1,32);
	
	
	////////ubukata zone///
	setConfirmation(18,744);
	PCFrule(1,2,744);
	PCFrule(2,3,744);
	PCFrule(3,3,744);
	
	
	/////////
	
	
	/////////////////////////
	CopyCF(0,2);//2はfirst=false
	CopyCF(5,45);
	CopyCF(13,28);
	CopyCF(13,29);
	setConfirmation(12,252);
	PCFrule(3,3,252);
	PCFrule(7,3,252);
	ICFrule(2,4,252);
	ICFrule(3,4,252);
	ICFrule(12,3,252);
	ICFrule(12,1,252);
	SetColor('blue',0);
	SetColor('blue',2);
	SetColor('blue',5);
	SetColor('purple',45);
	SetColor('purple',10);
	SetColor('green',12);
	SetColor('green',15);
	SetColor('green',252);
	SetColor('green',17);
	SetColor('green',20);
	SetColor('magenta',18);
	SetColor('yellow',26);
	SetColor('magenta',24);
	SetColor('magenta',33);
	SetColor('magenta',25);
	setConfirmation(18,387);
	setConfirmation(6,423);
	////////////////////
	setConfirmation(36,633);
	PCFrule(2,1,633);
	PCFrule(3,3,633);
	PCFrule(3,2,633);
	///////////////////
	//SetCFR(startNum,InputConf,PreConf,UseConf)
	SetCFR(387,0,0,387);
	SetCFR(423,0,0,423);
	
	
	SetCFR(0,387,0,0);
	
	SetCFR(18,423,0,1);//spacer_zig_sq6
	
	SetCFR(633,0,0,633);//left_turn_square_ubu
	
	//////////
	//SetCFR(18,750,1,1);

	SetCFR(30,0,2,3);//left_turn1
	SpecialCF(1,5);//special_one
	SetCFR(228,0,3,28);//spacer_zag_sq6
	//SetCFR(66,0,4,4);
	SetCFR(72,0,28,34);//spacer_zag_sq6_copy
	SetCFR(72,0,633,34);//toward ubu_turn
		
	SetCFR(48,0,34,5);//Counter_zag
	SetCFR(744,0,5,744); //right_turn_ubu
	SetCFR(48,0,34,5);
	SetCFR(48,0,3,5);
	SetCFR(228,0,5,28);
	
	//SetCFR(78,0,5,6);//right_turn1
	SetCFR(78,0,423,6);
	

	SetCFR(118,28,744,8);//spacer_zig_zopy
	SpecialCF(34,2);//special_one
	SetCFR(0,5,8,2);	
	//SetCFR(100,5,6,7);//copy_zig_2con
	//SetColor('purple',8);
	//SpecialCF(3,8);
	SetCFR(118,28,2,8);//spacer_zig_zopy
	SetCFR(118,28,8,8);
	SpecialCF(5,8);
	SetCFR(30,0,2,3);
	//SetCFR(100,5,8,7);
	SetCFR(72,0,3,34);
	
	//
	SpeCFrule(4,4,45);
	SpeCFrule(5,4,45);
	SpeCFrule(5,3,45);
	SpeCFrule(18,3,45);
	//
	//
	SpecialCF(8,45);//copy_zag
	SetCFR(48,2,34,45);
	SetCFR(48,2,28,45);
	SetCFR(66,0,45,4);
	//
	SetCFR(744,0,45,744);
	//
	
	
	
	SetCFR(124,0,8,9);//left_turn2
	
	SetCFR(72,0,9,34);
	
	//SetCFR(118,34,7,8);
	SetCFR(66,0,9,4);
	//
	
	SetCFR(158,0,28,11);//right_turn_sq_to_glider
	//automaton 1st
	SpecialCF(34,12);
	SetCFR(176,5,11,12);//auto_1st_zig
	SetCFR(200,0,12,13);//1st_sp
	SetCFR(200,0,13,13);
	SetCFR(176,5,13,12);
	
	SetCFR(200,0,26,13);
	SetCFR(206,0,13,14);//left_turn3
	
	CFrule(2,6,29);
	PCFrule(3,2,29);
	SetCFR(228,0,14,28);
	SetCFR(228,0,28,28);
	SetCFR(234,0,28,29);
	SetCFR(228,0,29,28);
	SetCFR(240,12,29,15);
	//SetCFR(380,0,15,29);
	
	SetCFR(228,0,15,28);
	SetCFR(264,0,28,16);//right_turn
	SetCFR(200,0,16,13);

	//Automaton_2nd
	SpecialCF(29,17);
	SetCFR(275,15,27,17);
	SetCFR(299,29,17,23);
	SetCFR(299,0,13,23);
	SetCFR(200,0,23,13);
	//SetCFR(380,0,23,29);
	SetCFR(234,0,13,29);
	SetCFR(275,15,29,17);
	
	SpecialCF(29,18);
	SetCFR(311,28,23,18);//low to up
	SetCFR(206,0,18,14);
	//SetCFR(370,0,14,28);

	
	//CopyCF(14,30);
	//SetCFR(550,0,27,30);//left_turn

	//Automaton_2nd_propagate
	SetCFR(118,28,14,8);//test
	SetCFR(323,0,8,19);//18-8
	SetCFR(326,17,19,20);
	SetCFR(326,17,8,20);
	SetCFR(350,29,20,21);
	SetCFR(118,28,21,8);//test
	SetCFR(228,0,21,28);
	SetCFR(311,23,21,18);
	SetCFR(206,0,31,14);//right_turn

	SetCFR(368,18,14,24);//tau
	SetCFR(368,20,13,25);
	SetCFR(819,18,14,33);//another
	SpecialCF(20,15);
	SetCFR(240,12,29,15);
	SetCFR(252,18,14,252);
	SetCFR(252,18,34,252);
	
	SetCFR(72,0,252,34);
	SetCFR(72,0,33,34);
	SetCFR(72,0,34,34);
	SetCFR(206,0,34,14);
	
	SetCFR(200,0,33,13);
	SetCFR(200,0,24,13);
	
	SetCFR(200,0,25,13);
	SetCFR(380,0,14,32);//glider to square
	SetCFR(66,0,32,4);
	SetCFR(118,423,6,8);
	SetCFR(18,423,6,1);
	/*
	SetCFR(310,0,24,27);
	SetCFR(310,0,33,27);
	
	SetCFR(290,0,25,13);
	
	
	
	*/
   	/*
   	 0,2=counter
   	 1=spacer_right to left
   	 3=left_turn(up to up)
   	 4=spacer_left to right
   	 5=2ndline_counter
   	 6=right_turn1
   	 7=copy
   	 8=spacer(right to left)
   	 9=left_turn2
   	 10=2ndline_copy
   	 11=right_turn(square to glider)
   	 12=Automaton1st
   	 13,28=spacer_glider(4)
   	 22,27,29=spacer_glider(2)
   	 19=spacer_glider(3)
   	 14=left_turn(glider)
   	 15=propagate_1stAutomaton
   	 16=right_turn(glider)
   	 17=Automaton2nd
   	 23=Automaton2ndのGlider(4)
   	 18=low to up
   	 20=4con
   	 21=4con用glider(4)
   	 31=tau
   	 24=tau_propagate
   	 25=last_copy
   	 32=glider to square
   	 */
   	OSVars.ruleset[623][473]=true;
   	OSVars.ruleset[231][355]=true;
};

