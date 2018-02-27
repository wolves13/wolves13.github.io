// <initial.js>
// Similator of 2D Oritatami System.
// initialize OS-simulator's name space.
//  and a bit more..

//////////
// Grobal な 値の定義
INITIAL_GRID_SIZE_X = 1000;
INITIAL_GRID_SIZE_Y = 1000;
start_x = 0;
start_y = 0;
var bitNum,direction;
var v3=[];
var carry;
var nonDetRoutes = [];   // nondeterministic なとき, 複数のRouteを保存する用.
var nonDetHbonds = [];   // nondeterministic なとき, 複数のHbondの組を保存する用.


var adjacents = [ {x: 1, y: 0}, {x: -1, y: 0},
		  {x: 0, y: 1}, {x: 0,  y: -1},
		  {x: 1, y: 1}, {x: -1, y: -1} ];

// Oritataim System が持つべき変数群を収める名前空間.
var OSVars = {
    cons : {
	     alpha : 3,         // alpha, deltaはこの値を上書きする.
             delta : 3,
             len   : 15,        // 高分子鎖の長さ (seedも含める) .
	     beadTypeNum : 0    // 高分子の種類.
    },

    mode : { 
	indexEqualBeadtype : false
    },

    word   :   [ ],    // 高分子の鎖を順にならべたリスト.
    //word2  :   [ ],    // 2nd
    w_path :   [ ],    // 高分子の鎖が辿った点のリスト

    ruleset :  [],     // 高分子種どうしが水素結合を結べるかどうか定める. 2dMatrix.

    occupied : [],     // 点の占有情報. [(高分子種,index,hbond数)/false] を２次元配列で保存.
    
    beadcolor :[],    //デフォルトは黒                   
	
    oc_size  : { x: INITIAL_GRID_SIZE_X, 
		 y: INITIAL_GRID_SIZE_Y },   // occupied配列の[縦/横]幅

    // bond_num :   [],   // 各高分子が結んでいるhbondの数(現在未使用)
    hbonds   :   [],   // 実際に形成されたhbondの情報 [pi,pj] (i != j) をもつ 

    step :   0,         // 最適化ステップの段階.1ずつ増える.
                       // 現在, indexいくつの高分子位置を最適化しているかを表す.
    initialStep : 0,
    
    dragon_height : 0
};
//
//////////

initOccupied( INITIAL_GRID_SIZE_X, INITIAL_GRID_SIZE_Y );


// occupied配列の初期設定(seed)

function Seedfunction(bitNum,v3,carry){

var seedx = -10;//seed position
var seedy = 0;
console.log(seedx);



var i=0;
if(v3[0]==0){
//0(AO)
setSeed(26+seedx+i*18, 7+seedy , { beadType: 200, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 199, index : -3, bondNum : 1 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 194, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 193, index : -3, bondNum : 1 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 52, index : -3, bondNum : 0 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 51, index : -3, bondNum : 1 } );

setSeed(24+seedx+i*18, 7+seedy , { beadType: 52, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 51, index : -3, bondNum : 0 } );

}else if(v3[0]==1){
setSeed(24+seedx+i*18, 7+seedy , { beadType: 76, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 75, index : -3, bondNum : 0 } );
//0(body-gx-t0)
setSeed(26+seedx+i*18, 7+seedy , { beadType: 286, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 285, index : -3, bondNum : 1} );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 280, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 279, index : -3, bondNum : 0 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 405, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 404, index : -3, bondNum : 1} );

}else if(v3[0]==2){
//0(body-gx-b0)
setSeed(24+seedx+i*18, 7+seedy , { beadType: 78, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 73, index : -3, bondNum : 0 } );

setSeed(26+seedx+i*18, 7+seedy , { beadType: 288, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 287, index : -3, bondNum : 2 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 286, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 277, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 407, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 402, index : -3, bondNum : 1 } );

}else if(v3[0]==3){
//0(body-lgy-0)
setSeed(24+seedx+i*18, 7+seedy , { beadType: 76, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 75, index : -3, bondNum : 0 } );

setSeed(26+seedx+i*18, 7+seedy , { beadType: 399, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 398, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 393, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 392, index : -3, bondNum : 0 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 405, index : -3, bondNum : 2 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 404, index : -3, bondNum : 0 } );

}else if(v3[0]==4){
//0(turn-lgp-0)
setSeed(24+seedx+i*18, 7+seedy , { beadType: 521, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 516, index : -3, bondNum : 0 } );

setSeed(26+seedx+i*18, 7+seedy , { beadType: 545, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 542, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 541, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 522, index : -3, bondNum : 0 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 521, index : -3, bondNum : 2 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 516, index : -3, bondNum : 0 } );

}else if(v3[0]==5){
//0(move-0)
setSeed(24+seedx+i*18, 7+seedy , { beadType: 473, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 468, index : -3, bondNum : 0 } );

setSeed(26+seedx+i*18, 7+seedy , { beadType: 485, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 480, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 479, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 474, index : -3, bondNum : 0 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 473, index : -3, bondNum : 2 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 468, index : -3, bondNum : 0 } );

}else if(v3[0]==6){
//1(AO-1)
setSeed(26+seedx+i*18, 7+seedy , { beadType: 200, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 199, index : -3, bondNum : 1 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 198, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 197, index : -3, bondNum : 1 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 52, index : -3, bondNum : 0 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 51, index : -3, bondNum : 1 } );

setSeed(24+seedx+i*18, 7+seedy , { beadType: 52, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 51, index : -3, bondNum : 0 } );

}else if(v3[0]==7){
setSeed(24+seedx+i*18, 7+seedy , { beadType: 76, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 75, index : -3, bondNum : 0 } );
//1(body-gx-t1)
setSeed(26+seedx+i*18, 7+seedy , { beadType: 286, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 285, index : -3, bondNum : 1} );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 284, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 283, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 405, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 404, index : -3, bondNum : 1} );

}else if(v3[0]==8){
//1(body-gx-b1)
setSeed(24+seedx+i*18, 7+seedy , { beadType: 78, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 73, index : -3, bondNum : 0 } );

setSeed(26+seedx+i*18, 7+seedy , { beadType: 288, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 283, index : -3, bondNum : 2 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 282, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 277, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 407, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 402, index : -3, bondNum : 1 } );

}else if(v3[0]==9){
//1(body-lgy1)
setSeed(24+seedx+i*18, 7+seedy , { beadType: 78, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 73, index : -3, bondNum : 0 } );

setSeed(26+seedx+i*18, 7+seedy , { beadType: 401, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 400, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 399, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 398, index : -3, bondNum : 0 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 405, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 404, index : -3, bondNum : 0 } );

}else if(v3[0]==10){
//1(turn-lgp-1)
setSeed(24+seedx+i*18, 7+seedy , { beadType: 521, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 516, index : -3, bondNum : 0 } );

setSeed(26+seedx+i*18, 7+seedy , { beadType: 545, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 544, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 543, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 522, index : -3, bondNum : 0 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 521, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 516, index : -3, bondNum : 0 } );

}else if(v3[0]==11){
setSeed(24+seedx+i*18, 7+seedy , { beadType: 473, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 468, index : -3, bondNum : 0 } );
//0(move-1)
setSeed(26+seedx+i*18, 7+seedy , { beadType: 485, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 484, index : -3, bondNum : 1} );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 483, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 474, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 473, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 468, index : -3, bondNum : 1} );

}

setSeed(25+seedx+i*18, 8+seedy , { beadType: 354, index : -3, bondNum : 0 } );
setSeed(26+seedx+i*18, 9+seedy , { beadType: 355, index : -3, bondNum : 0 } );
setSeed(27+seedx+i*18, 10+seedy , { beadType: 356, index : -3, bondNum : 0 } );
setSeed(26+seedx+i*18, 8+seedy , { beadType: 359, index : -3, bondNum : 0 } );
setSeed(27+seedx+i*18, 9+seedy , { beadType: 358, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 10+seedy , { beadType: 357, index : -3, bondNum : 0 } );

//start point with carry
OSVars.w_path = [
    {x: 26+seedx+(bitNum-1)*18, y: 8+seedy}
];

};


//+1


// seedとの境目がここで決まる.
OSVars.step = 1;
OSVars.initialStep = 1;

// len = 65??
