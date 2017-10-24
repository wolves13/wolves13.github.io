function turnRules(){

	var DFAO_Turn = 301;
	var AO = 190;
	var AO_bar =301;
	
	var r6=335;//original_387
    var r6_2=54;//
    var r6_sp = 353;//original_423
    var rss = 78;//original_744
    var l6 =359;
    var l6_sp=377;
    var ls1 = 509;
    var ls2 = 515;
    var lsg_end = 524;
    var glider_r= 276;//original_338
    var glider_turn_r = 264;//original_326
    var glider_turn_l = 389;
    var glider_sp =72; //origin_228
    var glider_r_sp1 =407; 
    var glider_r_sp2 =410; 
    var glider_sp_rsg = 144;//origin_200
    
    var glider_tau_r=413;
    var rgs =545;
    var sl4 = 0;//
    var glider_l_sp =401;
    var sl4_sp = 383;
    var lg=535;
    var last_body = 431;
    var move =467;
    var move_sp = 485;
    var move_last=491;
    
    //var sp2=2000;

    ColorChange(r6+1,r6+18,'green');
    ColorChange(l6+1,l6+18,'green');
    ColorChange(glider_tau_r+3+1,glider_tau_r+15,'green');
    ColorChange(glider_turn_l+1,glider_turn_l+12,'green');
    ColorChange(last_body+1,last_body+36,'blue');
    ColorChange(move+1,move+18,'blue');
    

    
     



    OSVars.ruleset[2+r6_2][5+r6_sp]=true;
    OSVars.ruleset[3+r6_2][4+r6_sp]=true;
    OSVars.ruleset[10+r6_2][5+r6_sp]=true;
    OSVars.ruleset[2+r6_sp][17+r6_2] = true;
     OSVars.ruleset[3+r6_sp][16+r6_2] = true;




    //------------------------------------------------




    OSVars.ruleset[6+l6_sp][DFAO_Turn-3]=true;
    OSVars.ruleset[6+l6_sp][170]=true;
    








    //r6 size 18
    
    OSVars.ruleset[3+r6][DFAO_Turn-2]=true;
    OSVars.ruleset[2+r6][DFAO_Turn-1]=true;
    OSVars.ruleset[6+r6][9+AO]=true;
    OSVars.ruleset[6+r6][9+AO_bar]=true;
    OSVars.ruleset[6+r6][4+AO]=true;
    OSVars.ruleset[6+r6][4+AO_bar]=true;
    OSVars.ruleset[7+r6][4+AO]=true;
    OSVars.ruleset[7+r6][4+AO_bar]=true;
    OSVars.ruleset[11+r6][DFAO_Turn-2]=true;
    OSVars.ruleset[18+r6][51]=true;
    OSVars.ruleset[18+r6][169]=true;
    
    

    OSVars.ruleset[9+r6][4+r6]=true;
	OSVars.ruleset[12+r6][7+r6]=true;
	OSVars.ruleset[2+r6][5+r6]=true;
	OSVars.ruleset[14+r6][11+r6]=true;
	OSVars.ruleset[15+r6][10+r6]=true;
	OSVars.ruleset[15+r6][17+r6]=true;
    OSVars.ruleset[2+r6][5+r6]=true;

    OSVars.ruleset[2+r6][5+r6_sp]=true;
    OSVars.ruleset[3+r6][4+r6_sp]=true;
    
    OSVars.ruleset[2+r6][17+r6]=true;
    OSVars.ruleset[3+r6][16+r6]=true;

    //
    OSVars.ruleset[18+r6][13+r6]=true;
    

    
    
    //繰り返し使うのに必要
    OSVars.ruleset[2+r6][6+glider_r]=true;
    OSVars.ruleset[3+r6][6+glider_r]=true;
    OSVars.ruleset[2+r6][8+glider_r]=true;
    OSVars.ruleset[3+r6][8+glider_r]=true;

    OSVars.ruleset[2+r6][10+glider_turn_l]=true;
    OSVars.ruleset[3+r6][10+glider_turn_l]=true;

    OSVars.ruleset[5+r6][3+glider_l_sp]=true;
    OSVars.ruleset[4+r6][4+glider_l_sp]=true;
    OSVars.ruleset[5+r6][4+glider_l_sp]=true;
    OSVars.ruleset[5+r6][1+glider_l_sp]=true;
    OSVars.ruleset[4+r6][6+glider_l_sp]=true;
    
    
    OSVars.ruleset[12+r6][1+glider_r]=true;
    OSVars.ruleset[12+r6][3+glider_r]=true;
    OSVars.ruleset[12+r6][7+glider_r]=true;

    OSVars.ruleset[12+r6][3+glider_turn_l]=true;
    OSVars.ruleset[12+r6][9+glider_turn_l]=true;

    
    OSVars.ruleset[18+r6][16+glider_sp]=true;
    
    OSVars.ruleset[18+r6][1+glider_l_sp]=true;

    OSVars.ruleset[18+r6][3+glider_l_sp]=true;
    OSVars.ruleset[6+r6][7+glider_r]=true;
    OSVars.ruleset[6+r6][9+glider_r]=true;
    OSVars.ruleset[6+r6][11+glider_r]=true;

    OSVars.ruleset[6+r6][4+glider_r]=true;
    OSVars.ruleset[7+r6][4+glider_r]=true;
    OSVars.ruleset[6+r6][10+glider_r]=true;
    OSVars.ruleset[7+r6][10+glider_r]=true;

    OSVars.ruleset[3+r6][8+r6]=true;
    OSVars.ruleset[18+r6][3+glider_sp_rsg]=true;


    OSVars.ruleset[2+r6][8+AO]=true;
    OSVars.ruleset[2+r6][8+AO_bar]=true;
    OSVars.ruleset[3+r6][8+AO]=true;
    OSVars.ruleset[3+r6][8+AO_bar]=true;
    OSVars.ruleset[5+r6][51]=true;
    OSVars.ruleset[5+r6][169]=true;
    OSVars.ruleset[4+r6][52]=true;
    OSVars.ruleset[4+r6][170]=true;
    OSVars.ruleset[5+r6][52]=true;
    OSVars.ruleset[5+r6][170]=true;
    OSVars.ruleset[10+r6][DFAO_Turn-1]=true;


    

    OSVars.ruleset[4+r6][4+glider_sp_rsg]=true;
    OSVars.ruleset[5+r6][4+glider_sp_rsg]=true;
    OSVars.ruleset[5+r6][3+glider_sp_rsg]=true;

    OSVars.ruleset[10+r6][17+r6]=true;

    OSVars.ruleset[10+r6][5+r6_sp]=true;

    OSVars.ruleset[12+r6][3+AO]=true;
    OSVars.ruleset[12+r6][3+AO_bar]=true;
    OSVars.ruleset[12+r6][375]=true;
    OSVars.ruleset[12+r6][826]=true;
    
    OSVars.ruleset[18+r6][6+r6]=true;



    OSVars.ruleset[5+r6][8+r6]=true;
	OSVars.ruleset[7+r6][5+r6]=true;
	OSVars.ruleset[7+r6][4+r6]=true;
	OSVars.ruleset[1+r6][10+r6]=true;
	OSVars.ruleset[10+r6][2+r6]=true;
	OSVars.ruleset[13+r6][7+r6]=true;
	OSVars.ruleset[11+r6][8+r6]=true;
	OSVars.ruleset[6+r6][14+r6]=true;
	
	OSVars.ruleset[15+r6][6+r6]=true;
	OSVars.ruleset[5+r6][18+r6]=true;





    //r6 glider_turn_lの下
    OSVars.ruleset[6+r6][9+glider_turn_l]=true;
    OSVars.ruleset[6+r6][4+glider_turn_l]=true;
    OSVars.ruleset[7+r6][4+glider_turn_l]=true;
    OSVars.ruleset[12+r6][2+glider_turn_l]=true;
    OSVars.ruleset[18+r6][3+glider_l_sp]=true;
    OSVars.ruleset[18+r6][10+glider_r]=true;
    





    
    OSVars.ruleset[2+r6_sp][17+r6] = true;
    OSVars.ruleset[3+r6_sp][16+r6] = true;

	
	// r6_sp 
    OSVars.ruleset[1+r6_sp][6+r6_sp] = true;
    OSVars.ruleset[3+r6_sp][4+r6_sp] = true;
    OSVars.ruleset[2+r6_sp][5+r6_sp] = true;
   

	OSVars.ruleset[6+r6_sp][3+glider_sp] = true;
    
	

    //rss size 18
    
    OSVars.ruleset[1+rss][17+r6] = true;
    OSVars.ruleset[2+rss][16+r6] = true;
    
    OSVars.ruleset[3+rss][16+r6] = true;
    OSVars.ruleset[5+rss][1+rss] = true;
    OSVars.ruleset[6+rss][4+rss] = true;
    
    OSVars.ruleset[7+rss][9+rss] = true;
    OSVars.ruleset[3+rss][8+rss] = true;
    //for both
    OSVars.ruleset[11+rss][9+rss] = true;
    OSVars.ruleset[11+rss][8+rss] = true;
    OSVars.ruleset[12+rss][10+rss] = true;
    OSVars.ruleset[13+rss][10+rss] = true;
    OSVars.ruleset[15+rss][13+rss] = true;
    OSVars.ruleset[15+rss][12+rss] = true;
    OSVars.ruleset[18+rss][8+rss] = true;
    OSVars.ruleset[18+rss][1+rss] = true;
    OSVars.ruleset[18+rss][11+rss] = true;






    //l6 size 18
    //outside
    
    OSVars.ruleset[3+l6][16+rss]=true;
    OSVars.ruleset[3+l6][16+l6]=true;
    OSVars.ruleset[1+l6][16+r6]=true;
    
    OSVars.ruleset[1+l6][4+r6_sp]=true;
    
    OSVars.ruleset[6+l6][15+r6]=true;
    
    
    OSVars.ruleset[1+l6][3+rss]=true;
    OSVars.ruleset[6+l6][16+r6]=true;
    OSVars.ruleset[2+l6][5+l6]=true;
    OSVars.ruleset[9+l6][4+l6]=true;
    OSVars.ruleset[8+l6][5+l6]=true;
    OSVars.ruleset[12+l6][10+r6]=true;
    OSVars.ruleset[11+l6][8+l6]=true;
    OSVars.ruleset[15+l6][10+l6]=true;
    OSVars.ruleset[14+l6][11+l6]=true;
    OSVars.ruleset[18+l6][3+r6]=true;
    OSVars.ruleset[7+l6][10+r6]=true;
    OSVars.ruleset[13+l6][4+r6]=true;
    OSVars.ruleset[17+l6][14+l6]=true;
    OSVars.ruleset[12+l6][7+l6]=true;
    //1part up
    OSVars.ruleset[3+l6][14+r6]=true;
    OSVars.ruleset[4+l6][14+r6]=true;
    OSVars.ruleset[4+l6][13+r6]=true;
    OSVars.ruleset[5+l6][13+r6]=true;
    OSVars.ruleset[8+l6][2+l6]=true;
    OSVars.ruleset[8+l6][3+l6]=true;
    OSVars.ruleset[1+l6][10+l6]=true;

    OSVars.ruleset[10+l6][18+rss]=true;
    OSVars.ruleset[10+l6][18+l6]=true;

    
    OSVars.ruleset[14+l6][7+l6]=true;

    OSVars.ruleset[11+l6][16+rss]=true;
    OSVars.ruleset[11+l6][16+l6]=true;

    OSVars.ruleset[13+l6][9+l6]=true;
    OSVars.ruleset[18+l6][11+r6]=true;
    OSVars.ruleset[15+l6][6+l6]=true;
    OSVars.ruleset[18+l6][5+l6]=true;

    OSVars.ruleset[3+l6][4+l6_sp]=true;
    OSVars.ruleset[10+l6][6+l6_sp]=true;
    OSVars.ruleset[11+l6][4+l6_sp]=true;
    
    







    //l6 sp

    OSVars.ruleset[2+l6_sp][18+l6]=true;
    OSVars.ruleset[3+l6_sp][16+l6]=true;
    OSVars.ruleset[6+l6_sp][3+r6_sp]=true;

    OSVars.ruleset[1+l6_sp][5+l6_sp]=true;
    OSVars.ruleset[1+l6_sp][6+l6_sp]=true;
    OSVars.ruleset[2+l6_sp][5+l6_sp]=true;
    OSVars.ruleset[3+l6_sp][4+l6_sp]=true;
    OSVars.ruleset[2+l6_sp][6+l6_sp]=true;


    
    
    

    //ls size 6
    /////////////////////必要？
    OSVars.ruleset[1+l6_sp][DFAO_Turn-2]=true;
//////////////////////////////////////////
    OSVars.ruleset[1+ls1][5+l6_sp]=true;
    OSVars.ruleset[2+ls1][6+l6_sp]=true;
    OSVars.ruleset[6+ls1][4+l6_sp]=true;
    

    OSVars.ruleset[1+ls1][5+sl4_sp]=true;
    OSVars.ruleset[2+ls1][6+sl4_sp]=true;
    OSVars.ruleset[6+ls1][4+sl4_sp]=true;
    
    
    OSVars.ruleset[1+ls1][4+ls1]=true;
    OSVars.ruleset[1+ls1][5+ls1]=true;
    OSVars.ruleset[2+ls1][4+ls1]=true;

    OSVars.ruleset[6+ls1][2+ls2]=true;
   

    
    
    
    //ls2 size 9
    OSVars.ruleset[3+ls2][4+l6_sp]=true;

    OSVars.ruleset[3+ls2][4+sl4_sp]=true;
    
    OSVars.ruleset[3+ls2][5+ls2]=true;
    OSVars.ruleset[2+ls2][5+ls2]=true;
    OSVars.ruleset[1+ls2][6+ls2]=true;
    OSVars.ruleset[4+ls2][8+ls2]=true;
    OSVars.ruleset[4+ls2][9+ls2]=true;
    
    OSVars.ruleset[3+ls2][6+r6_sp]=true;
    OSVars.ruleset[4+ls2][5+r6_sp]=true;

    OSVars.ruleset[3+ls2][1+glider_sp]=true;
    OSVars.ruleset[3+ls2][3+glider_sp]=true;

    

    //lsg_end
    OSVars.ruleset[2+lsg_end][3+ls2]=true;
    OSVars.ruleset[7+lsg_end][9+ls2]=true;
    
    OSVars.ruleset[3+lsg_end][3+l6_sp]=true;
    OSVars.ruleset[4+lsg_end][3+l6_sp]=true;
    
    OSVars.ruleset[3+lsg_end][6+lsg_end]=true;
    OSVars.ruleset[6+lsg_end][8+lsg_end]=true;
    OSVars.ruleset[4+lsg_end][11+lsg_end]=true;

    OSVars.ruleset[10+lsg_end][3+glider_r_sp1]=true;
    OSVars.ruleset[9+lsg_end][3+glider_r_sp1]=true;

    OSVars.ruleset[1+sl4_sp][9+lsg_end]=true;
    OSVars.ruleset[1+sl4_sp][7+lsg_end]=true;
    OSVars.ruleset[6+sl4_sp][8+lsg_end]=true;
    OSVars.ruleset[6+sl4_sp][7+lsg_end]=true;

    
    
    
    
    

 

    
    


    //glider_turn_l size 12
    OSVars.ruleset[1+glider_turn_l][6+glider_turn_l]=true;
    OSVars.ruleset[4+glider_turn_l][9+glider_turn_l]=true;
    OSVars.ruleset[7+glider_turn_l][12+glider_turn_l]=true;
    OSVars.ruleset[2+glider_turn_l][14+r6_2]=true;
    OSVars.ruleset[3+glider_turn_l][13+r6_2]=true;
    OSVars.ruleset[4+glider_turn_l][12+r6_2]=true;
    //OSVars.ruleset[4+glider_turn_l][13+r6_2]=true;
    OSVars.ruleset[4+glider_turn_l][6+glider_turn_l]=true;
    OSVars.ruleset[7+glider_turn_l][2+glider_turn_l]=true;
    
    OSVars.ruleset[6+glider_turn_l][10+r6_2]=true;
    OSVars.ruleset[8+glider_turn_l][5+glider_l_sp]=true;
    OSVars.ruleset[9+glider_turn_l][4+glider_l_sp]=true;
    OSVars.ruleset[3+glider_turn_l][4+glider_l_sp]=true;
    OSVars.ruleset[12+glider_turn_l][5+glider_turn_l]=true;
    //OSVars.ruleset[12+glider_turn_l][6+glider_turn_l]=true;
    OSVars.ruleset[11+glider_turn_l][6+glider_turn_l]=true;

    OSVars.ruleset[6+glider_turn_l][15+r6_2]=true;
    OSVars.ruleset[5+glider_turn_l][9+glider_turn_l]=true;
    

    //試行錯誤
    OSVars.ruleset[3+glider_turn_l][6+glider_turn_l]=true;
    OSVars.ruleset[7+glider_turn_l][11+glider_turn_l]=true;
    


    //glider_turn_r size 18
    OSVars.ruleset[1+glider_r_sp1][3+glider_turn_r] = true;
    OSVars.ruleset[2+glider_r_sp1][3+glider_turn_r] = true;
    OSVars.ruleset[11+glider_turn_r][3+glider_r_sp2] = true;

    


    //
    OSVars.ruleset[5+glider_turn_r][11+l6] = true;
    OSVars.ruleset[5+glider_turn_r][12+l6] = true;
    OSVars.ruleset[12+glider_turn_r][11+l6] = true;
//-------------------------
    OSVars.ruleset[3+glider_r_sp2][10+glider_turn_r] =true;
    
    
    
    
    //glider_l_sp size 6
    OSVars.ruleset[3+glider_l_sp][10+glider_r]=true;
    OSVars.ruleset[3+glider_l_sp][6+glider_r]=true;
    OSVars.ruleset[1+glider_l_sp][6+glider_l_sp]=true;
    OSVars.ruleset[2+glider_l_sp][6+glider_l_sp]=true;
    OSVars.ruleset[3+glider_r][4+glider_l_sp]=true;
    OSVars.ruleset[7+glider_r][4+glider_l_sp]=true;
        
    OSVars.ruleset[3+glider_l_sp][4+glider_sp]=true;
    OSVars.ruleset[3+glider_l_sp][10+glider_turn_l]=true;

    
    

    //ためしに左向きのグライダーへの再利用を試みる
    OSVars.ruleset[3+glider_r][13+r6_2]=true;
    OSVars.ruleset[3+glider_r][14+r6_2]=true;
    OSVars.ruleset[2+glider_r][14+r6_2]=true;
    OSVars.ruleset[12+glider_r][13+r6_2]=true;
    OSVars.ruleset[12+glider_r][9+r6_2]=true;
    //up_0
    OSVars.ruleset[6+glider_r][15+r6_2]=true;
    
        //low_0
    OSVars.ruleset[3+glider_r][16+r6_2]=true;
    

    OSVars.ruleset[6+glider_r][9+r6_2]=true;
    OSVars.ruleset[6+glider_r][4+r6_2]=true;
    OSVars.ruleset[6+glider_r][12+r6_2]=true;

    //--
    OSVars.ruleset[6+glider_r][15+r6_2]=true;
    OSVars.ruleset[6+glider_r][15+r6_2]=true;
    
   
    OSVars.ruleset[3+glider_r][4+glider_sp_rsg]=true;
    OSVars.ruleset[7+glider_r][4+glider_sp_rsg]=true;
    OSVars.ruleset[5+glider_r][9+r6_2]=true;


    



    //4conf glider size 18
    
    OSVars.ruleset[3+glider_r][3+l6]=true;
    OSVars.ruleset[3+glider_r][4+l6]=true;
    OSVars.ruleset[2+glider_r][4+l6]=true;
    OSVars.ruleset[12+glider_r][3+l6]=true;
    OSVars.ruleset[12+glider_r][11+l6]=true;
    
    OSVars.ruleset[6+glider_r][2+glider_r_sp1]=true;
    OSVars.ruleset[7+glider_r][1+glider_r_sp1]=true;
    OSVars.ruleset[3+glider_r][2+glider_r_sp1]=true;
    OSVars.ruleset[11+glider_r][3+glider_r_sp2]=true;
    OSVars.ruleset[7+glider_r][2+glider_r_sp2]=true;

        //up_0
    OSVars.ruleset[6+glider_r][9+l6]=true;
    OSVars.ruleset[6+glider_r][13+l6]=true;
        //low_0
    OSVars.ruleset[3+glider_r][10+l6]=true;
    OSVars.ruleset[3+glider_r][14+l6]=true;
    OSVars.ruleset[6+glider_r][11+l6]=true;
    OSVars.ruleset[6+glider_r][16+l6]=true;

    OSVars.ruleset[6+glider_r][4+l6_sp]=true;
    OSVars.ruleset[6+glider_r][16+rss]=true;
    
    

    OSVars.ruleset[5+glider_r][12+l6]=true;
//----------------------------------------

    OSVars.ruleset[3+glider_r][1+glider_r_sp1]=true;
    OSVars.ruleset[10+glider_r][3+glider_r_sp2] = true;
    
    
    
//-----------------前後に３ビーズずつつけたしたので調整
    OSVars.ruleset[6+glider_r][3+glider_r_sp2] = true;

    OSVars.ruleset[3+glider_r_sp2][4+l6_sp] = true;
    OSVars.ruleset[3+glider_r_sp2][16+l6] = true;
    
    OSVars.ruleset[3+glider_r_sp1][5+glider_sp] = true;
    
    
    
    //-----------



    

    OSVars.ruleset[3+glider_sp][1+glider_r_sp2] = true;
    OSVars.ruleset[4+glider_sp][3+glider_r_sp1] = true;

    
    OSVars.ruleset[3+glider_sp][10+glider_r]=true;
    OSVars.ruleset[3+glider_sp][2+glider_r_sp2]=true;
    
    OSVars.ruleset[3+glider_sp][12+r6_2] =true;
    OSVars.ruleset[3+glider_sp][6+glider_r]=true;
    OSVars.ruleset[3+glider_sp][4+r6_2]=true;
    OSVars.ruleset[3+glider_sp][10+glider_turn_l]=true;
    OSVars.ruleset[3+glider_sp][5+glider_turn_l]=true;
    



   
    //glider tau r size 18
    OSVars.ruleset[6+glider_tau_r][3+l6]=true;
    OSVars.ruleset[6+glider_tau_r][4+l6]=true;
    OSVars.ruleset[5+glider_tau_r][4+l6]=true;
    
    
    OSVars.ruleset[9+glider_tau_r][2+glider_tau_r]=true;
    OSVars.ruleset[10+glider_tau_r][1+glider_tau_r]=true;

    OSVars.ruleset[5+glider_tau_r][8+glider_tau_r]=true;
    OSVars.ruleset[15+glider_tau_r][3+l6]=true;
    OSVars.ruleset[15+glider_tau_r][6+glider_tau_r]=true;
    OSVars.ruleset[15+glider_tau_r][11+l6]=true;
    OSVars.ruleset[6+glider_tau_r][2+glider_tau_r]=true;
    
        //up_0
    OSVars.ruleset[9+glider_tau_r][9+l6]=true;
    OSVars.ruleset[9+glider_tau_r][13+l6]=true;
        //low_0
    OSVars.ruleset[6+glider_tau_r][10+l6]=true;
    OSVars.ruleset[6+glider_tau_r][14+l6]=true;
    OSVars.ruleset[8+glider_tau_r][11+l6]=true;
    OSVars.ruleset[9+glider_tau_r][11+l6]=true;
    OSVars.ruleset[9+glider_tau_r][16+l6]=true;

    OSVars.ruleset[9+glider_tau_r][4+l6_sp]=true;
    OSVars.ruleset[9+glider_tau_r][16+rss]=true;
    
    

    OSVars.ruleset[8+glider_tau_r][12+l6]=true;
    OSVars.ruleset[8+glider_tau_r][11+glider_tau_r]=true;
    OSVars.ruleset[4+glider_tau_r][13+glider_tau_r]=true;
//----------------------------------------

    OSVars.ruleset[4+glider_tau_r][9+glider_tau_r]=true;
    OSVars.ruleset[7+glider_tau_r][12+glider_tau_r]=true;
    OSVars.ruleset[10+glider_tau_r][15+glider_tau_r]=true;
    OSVars.ruleset[6+glider_tau_r][1+glider_tau_r]=true;
    OSVars.ruleset[13+glider_tau_r][18+glider_tau_r] = true;
    OSVars.ruleset[3+glider_tau_r][2+glider_r_sp2] = true;
    OSVars.ruleset[3+glider_tau_r][1+glider_r_sp2] = true;

    
    
//-----------------前後に３ビーズずつつけたしたので調整
    OSVars.ruleset[9+glider_tau_r][18+glider_tau_r] = true;

    OSVars.ruleset[18+glider_tau_r][4+l6_sp] = true;
    OSVars.ruleset[18+glider_tau_r][16+l6] = true;
    
    OSVars.ruleset[3+glider_tau_r][5+glider_sp] = true;
    
    
    OSVars.ruleset[18+glider_tau_r][16+rss] =true;
    OSVars.ruleset[18+glider_tau_r][14+glider_tau_r]=true;
    OSVars.ruleset[10+glider_tau_r][16+glider_tau_r]=true;
    



    //right glider to square size 22
    
    OSVars.ruleset[15+rss][3+rgs]  = true;
    OSVars.ruleset[6+rgs][1+rgs]  = true;
    OSVars.ruleset[17+glider_tau_r][3+rgs]  = true;
    //１のときに必要な結合
    OSVars.ruleset[2+rgs][14+rss]  = true;
    OSVars.ruleset[4+rgs][2+rgs]  = true;
    OSVars.ruleset[5+rgs][16+glider_tau_r]  = true;
    OSVars.ruleset[1+rgs][4+rgs]  = true;
    OSVars.ruleset[3+rgs][6+rgs]  = true;
    //all same structure after 6
    OSVars.ruleset[8+rgs][16+glider_tau_r]  = true;
    OSVars.ruleset[8+rgs][18+glider_tau_r]  = true;
    OSVars.ruleset[6+rgs][11+rgs]  = true;
    OSVars.ruleset[6+rgs][12+rgs]  = true;
    OSVars.ruleset[10+rgs][14+rgs]  = true;
    OSVars.ruleset[13+rgs][15+rgs]  = true;
    OSVars.ruleset[14+rgs][17+rgs]  = true;
    OSVars.ruleset[14+rgs][18+rgs]  = true;
    OSVars.ruleset[8+rgs][21+rgs]  = true;
    OSVars.ruleset[8+rgs][22+rgs]  = true;
    OSVars.ruleset[22+rgs][12+3+glider_tau_r]  = true;
    OSVars.ruleset[22+rgs][10+3+glider_tau_r]  = true;
    OSVars.ruleset[22+rgs][6+3+glider_tau_r]  = true;








    //short right to left size 12
    
    OSVars.ruleset[3+sl4][20+rgs]=true;
    OSVars.ruleset[6+sl4][22+rgs]=true;
    OSVars.ruleset[7+sl4][20+rgs]=true;

    //OSVars.ruleset[3+sl4][4+sp2]=true;
    //OSVars.ruleset[6+sl4][6+sp2]=true;
    //OSVars.ruleset[7+sl4][5+sp2]=true;

	OSVars.ruleset[1+sl4][12+glider_tau_r]=true;
	OSVars.ruleset[2+sl4][7+glider_tau_r]=true;
	OSVars.ruleset[2+sl4][13+glider_tau_r]=true;
	OSVars.ruleset[3+sl4][7+glider_tau_r]=true;
	OSVars.ruleset[3+sl4][13+glider_tau_r]=true;
	OSVars.ruleset[12+sl4][6+glider_tau_r]=true;
	OSVars.ruleset[12+sl4][10+glider_tau_r]=true;
	OSVars.ruleset[12+sl4][4+glider_tau_r]=true;

	OSVars.ruleset[1+sl4][9+glider_r]=true;
	OSVars.ruleset[2+sl4][4+glider_r]=true;
	OSVars.ruleset[2+sl4][10+glider_r]=true;
	OSVars.ruleset[3+sl4][4+glider_r]=true;
	OSVars.ruleset[3+sl4][10+glider_r]=true;
	OSVars.ruleset[12+sl4][3+glider_r]=true;
	OSVars.ruleset[12+sl4][7+glider_r]=true;
	OSVars.ruleset[12+sl4][1+glider_r]=true;


	OSVars.ruleset[6+sl4][9+glider_r]=true;
	OSVars.ruleset[6+sl4][7+glider_r]=true;
	OSVars.ruleset[6+sl4][8+glider_r]=true;
	OSVars.ruleset[6+sl4][6+glider_r]=true;
	OSVars.ruleset[7+sl4][8+glider_r]=true;
	OSVars.ruleset[7+sl4][6+glider_r]=true;

	OSVars.ruleset[6+sl4][12+glider_tau_r]=true;
	OSVars.ruleset[6+sl4][10+glider_tau_r]=true;
	OSVars.ruleset[6+sl4][11+glider_tau_r]=true;
	OSVars.ruleset[6+sl4][9+glider_tau_r]=true;
	OSVars.ruleset[7+sl4][11+glider_tau_r]=true;
	OSVars.ruleset[7+sl4][9+glider_tau_r]=true;

	OSVars.ruleset[12+sl4][1+glider_r_sp1]=true;
	OSVars.ruleset[12+sl4][3+glider_r_sp1]=true;

	OSVars.ruleset[12+sl4][1+glider_tau_r]=true;
	OSVars.ruleset[12+sl4][3+glider_tau_r]=true;

	OSVars.ruleset[1+sl4][11+glider_r]=true;
	OSVars.ruleset[1+sl4][7+glider_r]=true;
	OSVars.ruleset[1+sl4][14+glider_tau_r]=true;
	OSVars.ruleset[1+sl4][10+glider_tau_r]=true;


	OSVars.ruleset[1+sl4][9+glider_turn_r]=true;
	OSVars.ruleset[1+sl4][7+glider_turn_r]=true;
	

	OSVars.ruleset[2+sl4][8+glider_turn_r]=true;
	OSVars.ruleset[3+sl4][8+glider_turn_r]=true;
	OSVars.ruleset[12+sl4][1+glider_turn_r]=true;


	OSVars.ruleset[6+sl4][7+glider_turn_r]=true;
	OSVars.ruleset[6+sl4][6+glider_turn_r]=true;
	OSVars.ruleset[7+sl4][1+glider_turn_r]=true;


	
	
	
	
	

    //------------------------------------


    








    //sp2 size 6
    
    // OSVars.ruleset[1+sp2][1+glider_r_sp2]=true;
    
    // OSVars.ruleset[1+sp2][4+glider_sp]=true;
    // OSVars.ruleset[1+sp2][3+glider_r_sp2]=true;
    // OSVars.ruleset[1+sp2][6+glider_sp]=true;
    
    // OSVars.ruleset[3+sp2][10+sl4]=true;
    
    // OSVars.ruleset[5+sp2][1+sp2]=true;
    // OSVars.ruleset[6+sp2][1+sp2]=true;
    // OSVars.ruleset[6+sp2][1+glider_r_sp2]=true;
    
    // OSVars.ruleset[6+sp2][4+glider_sp]=true;
    // OSVars.ruleset[6+sp2][3+glider_r_sp2]=true;

    // OSVars.ruleset[6+sp2][6+glider_sp]=true;

    
 



    //sl4_sp size 6
    
    OSVars.ruleset[1+sl4_sp][5+sl4_sp]=true;
    OSVars.ruleset[1+sl4_sp][6+sl4_sp]=true;
    OSVars.ruleset[2+sl4_sp][5+sl4_sp]=true;
    OSVars.ruleset[3+sl4_sp][4+sl4_sp]=true;
    OSVars.ruleset[2+sl4_sp][6+sl4_sp]=true;

    OSVars.ruleset[3+sl4_sp][10+sl4]=true;
    OSVars.ruleset[4+sl4_sp][3+sl4]=true;
    OSVars.ruleset[4+sl4_sp][7+sl4]=true;
    OSVars.ruleset[6+sl4_sp][6+sl4]=true;
    OSVars.ruleset[6+sl4_sp][12+glider_r]=true;
    OSVars.ruleset[6+sl4_sp][10+glider_r]=true;
    OSVars.ruleset[6+sl4_sp][3+glider_sp]=true;
    OSVars.ruleset[6+sl4_sp][12+glider_turn_r]=true;
    OSVars.ruleset[6+sl4_sp][10+glider_turn_r]=true;
    OSVars.ruleset[3+sl4_sp][18+r6_2]=true;
    OSVars.ruleset[4+sl4_sp][4+r6_2]=true;
    OSVars.ruleset[3+sl4_sp][5+r6_2]=true;
    OSVars.ruleset[4+sl4_sp][5+r6_2]=true;
    OSVars.ruleset[6+sl4_sp][1+glider_sp]=true;
    OSVars.ruleset[6+sl4_sp][3+glider_sp]=true;

    OSVars.ruleset[1+sl4_sp][4+glider_sp]=true;
    OSVars.ruleset[1+sl4_sp][6+glider_sp]=true;

    OSVars.ruleset[1+sl4_sp][1+glider_r_sp2]=true;
    OSVars.ruleset[1+sl4_sp][3+glider_r_sp2]=true;







    //left square to square size 18
    


//////必要？
    OSVars.ruleset[1+sl4_sp][102]=true;
    
    


    
   
    


    

    




    //r6_2
    OSVars.ruleset[4+r6_2][20+rgs]=true;
    OSVars.ruleset[5+r6_2][20+rgs]=true;
    OSVars.ruleset[5+r6_2][19+rgs]=true;
    OSVars.ruleset[1+r6_2][10+sl4]=true;
    OSVars.ruleset[6+r6_2][9+sl4]=true;
    OSVars.ruleset[7+r6_2][4+sl4]=true; 
    //OSVars.ruleset[18+r6_2][3+sp2]=true;
    

    //
    OSVars.ruleset[2+r6_2][8+sl4]=true;
    OSVars.ruleset[3+r6_2][8+sl4]=true;
   // OSVars.ruleset[5+r6_2][3+sp2]=true;
   // OSVars.ruleset[4+r6_2][4+sp2]=true;
   // OSVars.ruleset[5+r6_2][4+sp2]=true;
    OSVars.ruleset[12+r6_2][3+sl4]=true;
    OSVars.ruleset[12+r6_2][7+sl4]=true;

    OSVars.ruleset[18+r6_2][19+rgs]=true;
    OSVars.ruleset[18+r6_2][18+rgs]=true;

    OSVars.ruleset[6+r6_2][4+sl4]=true;


    
//rsg  size 23
    OSVars.ruleset[1+glider_sp_rsg][8+rss]=true;
    OSVars.ruleset[1+glider_sp_rsg][11+rss]=true;
    


    OSVars.ruleset[1+rss][18+rgs]=true;
    
    OSVars.ruleset[2+rss][17+r6_2] = true;
    OSVars.ruleset[3+rss][16+r6_2] = true;
    
    OSVars.ruleset[3+glider_sp_rsg][16+rss] = true;
    
    






    //left glider to square size 10
    
    
    OSVars.ruleset[3+lg][2+glider_sp]=true;
    OSVars.ruleset[3+lg][1+glider_sp]=true;
    
//

    OSVars.ruleset[6+lg][7+ls2]=true;

    OSVars.ruleset[6+lg][4+r6_sp]=true;
    
    
    OSVars.ruleset[8+lg][7+ls2]  = true;
    OSVars.ruleset[5+lg][9+ls2]  = true;
    OSVars.ruleset[6+lg][9+ls2]  = true;

   

   
    OSVars.ruleset[4+lg][10+lg] = true;
    OSVars.ruleset[4+lg][8+lg]  = true;
    OSVars.ruleset[5+lg][8+lg]  = true;
    OSVars.ruleset[6+lg][1+lg]  = true;
    OSVars.ruleset[7+lg][9+lg] = true;
    
    OSVars.ruleset[8+lg][1+lg]  = true;
    OSVars.ruleset[9+lg][2+lg]  = true;
    
    OSVars.ruleset[9+lg][1+lg]  = true;
    OSVars.ruleset[10+lg][7+lg]  = true;



    


    
    
    //last_body
    //for 0
    OSVars.ruleset[2+last_body][17+r6]=true;
    OSVars.ruleset[3+last_body][16+r6]=true;
    OSVars.ruleset[2+last_body][5+last_body]=true;
    OSVars.ruleset[6+last_body][9+glider_r]=true;
    OSVars.ruleset[6+last_body][4+glider_r]=true;
    OSVars.ruleset[11+last_body][8+last_body]=true;
    OSVars.ruleset[12+last_body][3+glider_r]=true;
    OSVars.ruleset[12+last_body][4+glider_sp_rsg]=true;
    OSVars.ruleset[1+last_body][6+last_body]=true;
    OSVars.ruleset[17+last_body][14+last_body]=true;
    OSVars.ruleset[13+last_body][18+last_body]=true;
    
    OSVars.ruleset[18+last_body][3+glider_sp_rsg]=true;
    OSVars.ruleset[20+last_body][15+rss]=true;
    OSVars.ruleset[21+last_body][14+rss]=true;
    OSVars.ruleset[24+last_body][17+last_body]=true;
    OSVars.ruleset[24+last_body][16+last_body]=true;
    OSVars.ruleset[21+last_body][23+last_body]=true;
    OSVars.ruleset[22+last_body][26+last_body]=true;
    
    OSVars.ruleset[22+last_body][27+last_body]=true;
    OSVars.ruleset[27+last_body][29+last_body]=true;
    OSVars.ruleset[30+last_body][25+last_body]=true;
    OSVars.ruleset[28+last_body][32+last_body]=true;
    OSVars.ruleset[28+last_body][33+last_body]=true;
    OSVars.ruleset[33+last_body][35+last_body]=true;
    OSVars.ruleset[36+last_body][31+last_body]=true;

    OSVars.ruleset[24+last_body][19+last_body]=true;
    
    
    
    
    
    //for 1
    OSVars.ruleset[2+last_body][8+glider_r]=true;
    OSVars.ruleset[3+last_body][8+glider_r]=true;
    OSVars.ruleset[4+last_body][4+glider_sp_rsg]=true;
    OSVars.ruleset[5+last_body][4+glider_sp_rsg]=true;
    
    OSVars.ruleset[5+last_body][3+glider_sp_rsg]=true;
    OSVars.ruleset[6+last_body][16+rss]=true;
    OSVars.ruleset[6+last_body][8+last_body]=true;
    OSVars.ruleset[4+last_body][9+last_body]=true;
    OSVars.ruleset[5+last_body][8+last_body]=true;
    OSVars.ruleset[11+last_body][2+last_body]=true;
    OSVars.ruleset[12+last_body][1+last_body]=true;
    OSVars.ruleset[12+last_body][2+last_body]=true;
    OSVars.ruleset[14+last_body][11+last_body]=true;
    OSVars.ruleset[15+last_body][10+last_body]=true;
    OSVars.ruleset[16+last_body][9+last_body]=true;
    OSVars.ruleset[17+last_body][8+last_body]=true;
    OSVars.ruleset[17+last_body][7+last_body]=true;
   OSVars.ruleset[18+last_body][7+last_body]=true;
    
    OSVars.ruleset[20+last_body][18+last_body]=true;
    OSVars.ruleset[20+last_body][7+last_body]=true;
    
   
    OSVars.ruleset[21+last_body][6+last_body]=true;
    OSVars.ruleset[21+last_body][16+rss]=true;
    OSVars.ruleset[22+last_body][14+rss]=true;
    OSVars.ruleset[23+last_body][14+rss]=true;
    OSVars.ruleset[25+last_body][20+last_body]=true;
    OSVars.ruleset[26+last_body][19+last_body]=true;
    OSVars.ruleset[25+last_body][22+last_body]=true;
    OSVars.ruleset[27+last_body][24+last_body]=true;
    OSVars.ruleset[29+last_body][24+last_body]=true;
    OSVars.ruleset[30+last_body][23+last_body]=true;
    
    
    
    
    //move
    //for0
    
    OSVars.ruleset[3+move][16+r6]=true;

    OSVars.ruleset[3+move][4+r6_sp]=true;
    
    
    OSVars.ruleset[4+move][15+r6]=true;

    OSVars.ruleset[4+move][3+r6_sp]=true;
    
    OSVars.ruleset[6+move][1+move]=true;

    OSVars.ruleset[9+move][10+r6]=true;
    OSVars.ruleset[9+move][14+r6]=true;
    OSVars.ruleset[9+move][4+r6_sp]=true;
    

    OSVars.ruleset[10+move][9+r6]=true;
    OSVars.ruleset[10+move][13+r6]=true;
    OSVars.ruleset[10+move][3+r6_sp]=true;


    OSVars.ruleset[12+move][7+move]=true;

    OSVars.ruleset[15+move][4+r6]=true;
    OSVars.ruleset[15+move][4+r6_sp]=true;

    OSVars.ruleset[16+move][3+r6]=true;
    OSVars.ruleset[16+move][3+r6_sp]=true;

    OSVars.ruleset[18+move][13+move]=true;

    OSVars.ruleset[11+move][12+r6]=true;
    OSVars.ruleset[12+move][11+r6]=true;
    OSVars.ruleset[15+move][8+move]=true;
    OSVars.ruleset[15+move][9+move]=true;//change
    OSVars.ruleset[16+move][7+move]=true;
    OSVars.ruleset[17+move][14+move]=true;
    OSVars.ruleset[18+move][13+move]=true;
    
    OSVars.ruleset[6+move][2+move] =true;
    OSVars.ruleset[14+move][18+move] =true;
    
    //for1
    OSVars.ruleset[3+move][16+rgs]=true;
    OSVars.ruleset[3+move][14+rss]=true;

    OSVars.ruleset[4+move][15+rgs]=true;
    OSVars.ruleset[4+move][13+rss]=true;

    OSVars.ruleset[9+move][13+rgs]=true;
    OSVars.ruleset[9+move][10+rss]=true;
    
    OSVars.ruleset[10+move][12+rgs]=true;
    OSVars.ruleset[10+move][9+rss]=true;
    
    OSVars.ruleset[15+move][3+rgs]=true;
    OSVars.ruleset[15+move][7+rss]=true;
    
    OSVars.ruleset[16+move][2+rgs]=true;
    OSVars.ruleset[16+move][6+rss]=true;
    
    OSVars.ruleset[11+move][5+rgs]=true;
    OSVars.ruleset[12+move][4+rgs]=true;

    OSVars.ruleset[10+move][9+ls2]=true;
    OSVars.ruleset[11+move][8+ls2]=true;
    OSVars.ruleset[12+move][7+ls2]=true;

    //OSVars.ruleset[][]=true;
    
    //move_sp

    //いらないrulesetがおおいので後で消す
    OSVars.ruleset[3+move_sp][16+last_body]=true;
    OSVars.ruleset[4+move_sp][15+last_body]=true;
    OSVars.ruleset[6+move_sp][1+move_sp]=true;
    OSVars.ruleset[3+move_sp][10+last_body]=true;
    OSVars.ruleset[4+move_sp][9+last_body]=true;
    OSVars.ruleset[3+move_sp][4+last_body]=true;
    OSVars.ruleset[4+move_sp][3+last_body]=true;



    OSVars.ruleset[3+move_sp][14+rss]=true;
    OSVars.ruleset[4+move_sp][13+rss]=true;
    OSVars.ruleset[3+move_sp][10+rss]=true;
    OSVars.ruleset[4+move_sp][9+rss]=true;
    OSVars.ruleset[3+move_sp][7+rss]=true;
    OSVars.ruleset[4+move_sp][6+rss]=true;
    
    
    //a^t=0 のときのlg下
   
    



    //move_last
    OSVars.ruleset[2+move_last][12+move]=true;
    OSVars.ruleset[3+move_last][12+move]=true;
    OSVars.ruleset[3+move_last][5+move_last]=true;
    OSVars.ruleset[6+move_last][1+move_last]=true;
    OSVars.ruleset[8+move_last][4+move_last]=true;
    OSVars.ruleset[9+move_last][4+move_last]=true;
    OSVars.ruleset[11+move_last][4+move_last]=true;
    OSVars.ruleset[12+move_last][3+move_last]=true;
    OSVars.ruleset[14+move_last][10+move_last]=true;
    OSVars.ruleset[15+move_last][10+move_last]=true;
    OSVars.ruleset[17+move_last][14+move_last]=true;
    OSVars.ruleset[18+move_last][13+move_last]=true;
    
    
    //r6side
    OSVars.ruleset[10+r6][17+move_last]=true;
    OSVars.ruleset[11+r6][16+move_last]=true;
    OSVars.ruleset[2+r6][17+move_last]=true;
    OSVars.ruleset[3+r6][16+move_last]=true;
    
    OSVars.ruleset[6+l6_sp][15+move_last]=true;
    OSVars.ruleset[6+l6_sp][9+move_last]=true;


    //r6 つなげる left
    //for1
    OSVars.ruleset[2+r6][8+lg]=true;
    OSVars.ruleset[3+r6][8+lg]=true;
    OSVars.ruleset[4+r6][6+ls2]=true;
    OSVars.ruleset[5+r6][6+ls2]=true;
    OSVars.ruleset[5+r6][1+ls2]=true;
    OSVars.ruleset[18+r6][1+ls2]=true;
    OSVars.ruleset[18+r6][5+ls1]=true;

    //for0
    OSVars.ruleset[6+r6][7+lg]=true;
    OSVars.ruleset[6+r6][6+lg]=true;
    OSVars.ruleset[7+r6][6+lg]=true;
    OSVars.ruleset[12+r6][7+ls2]=true;

    //for a^t=0
    OSVars.ruleset[6+r6][4+ls1]=true;
    OSVars.ruleset[6+r6][3+ls1]=true;
    OSVars.ruleset[7+r6][3+ls1]=true;
    
    
    
    //r6 つなげる right
    //for1
    OSVars.ruleset[2+r6][16+move]=true;
    OSVars.ruleset[3+r6][16+move]=true;
    OSVars.ruleset[4+r6][6+move]=true;   
    OSVars.ruleset[5+r6][1+move]=true;
    OSVars.ruleset[18+r6][1+move]=true;

    //for0
    OSVars.ruleset[6+r6][13+move]=true;
    OSVars.ruleset[6+r6][12+move]=true;
    OSVars.ruleset[7+r6][12+move]=true;
    OSVars.ruleset[12+r6][7+move]=true;

    OSVars.ruleset[18+r6][1+move_sp]=true;
    
    
    //for a^t=1
    OSVars.ruleset[2+r6][6+move_sp]=true;
    OSVars.ruleset[2+r6][1+move_sp]=true;
    OSVars.ruleset[3+r6][6+move_sp]=true;
    OSVars.ruleset[3+r6][1+move_sp]=true;
    OSVars.ruleset[4+r6][6+move_sp]=true;
    OSVars.ruleset[5+r6][6+move_sp]=true;
    OSVars.ruleset[5+r6][1+move_sp]=true;
    OSVars.ruleset[18+r6][1+move_sp]=true;

    


	
	
	
		
};
