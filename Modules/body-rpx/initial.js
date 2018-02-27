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
//0(DFAOlast)
setSeed(26+seedx+i*18, 7+seedy , { beadType: 696, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 689, index : -3, bondNum : 1 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 684, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 683, index : -3, bondNum : 1 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 314, index : -3, bondNum : 0 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 313, index : -3, bondNum : 1 } );

setSeed(24+seedx+i*18, 7+seedy , { beadType: 294, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 293, index : -3, bondNum : 0 } );

}else if(v3[0]==1){
setSeed(24+seedx+i*18, 7+seedy , { beadType: 2304, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 2303, index : -3, bondNum : 0 } );
//0(body-gx-t0)
setSeed(26+seedx+i*18, 7+seedy , { beadType: 1013, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1012, index : -3, bondNum : 1} );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1007, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1006, index : -3, bondNum : 0 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 1262, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1261, index : -3, bondNum : 1} );

}else if(v3[0]==2){
//0(body-lgy-0)
setSeed(24+seedx+i*18, 7+seedy , { beadType: 1204, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 1203, index : -3, bondNum : 0 } );

setSeed(26+seedx+i*18, 7+seedy , { beadType: 1160, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1159, index : -3, bondNum : 2 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1154, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1153, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 1262, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1261, index : -3, bondNum : 1 } );

}else if(v3[0]==3){
//0(turn-lgp-0)
setSeed(24+seedx+i*18, 7+seedy , { beadType: 2325, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 2320, index : -3, bondNum : 0 } );

setSeed(26+seedx+i*18, 7+seedy , { beadType: 2319, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 2316, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 2315, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 2125, index : -3, bondNum : 0 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 2124, index : -3, bondNum : 2 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 2119, index : -3, bondNum : 0 } );

}else if(v3[0]==4){
//0(move-0)
setSeed(24+seedx+i*18, 7+seedy , { beadType: 1556, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 1551, index : -3, bondNum : 0 } );

setSeed(26+seedx+i*18, 7+seedy , { beadType: 1568, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1563, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1562, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1557, index : -3, bondNum : 0 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 1556, index : -3, bondNum : 2 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1551, index : -3, bondNum : 0 } );

}else if(v3[0]==5){
//1(DFAOlast-1)
setSeed(26+seedx+i*18, 7+seedy , { beadType: 696, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 689, index : -3, bondNum : 1 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 688, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 687, index : -3, bondNum : 1 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 314, index : -3, bondNum : 0 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 313, index : -3, bondNum : 1 } );

setSeed(24+seedx+i*18, 7+seedy , { beadType: 294, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 293, index : -3, bondNum : 0 } );

}else if(v3[0]==6){
setSeed(24+seedx+i*18, 7+seedy , { beadType: 2304, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 2303, index : -3, bondNum : 0 } );
//1(body-gx-t1)
setSeed(26+seedx+i*18, 7+seedy , { beadType: 1013, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1012, index : -3, bondNum : 1} );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1011, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1010, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 1264, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1263, index : -3, bondNum : 1} );

}else if(v3[0]==7){
//1(body-lgy-1)
setSeed(24+seedx+i*18, 7+seedy , { beadType: 1204, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 1203, index : -3, bondNum : 0 } );

setSeed(26+seedx+i*18, 7+seedy , { beadType: 1162, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1161, index : -3, bondNum : 2 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1160, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1159, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 1264, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1263, index : -3, bondNum : 1 } );

}else if(v3[0]==8){
//1(turn-lgy1)
setSeed(24+seedx+i*18, 7+seedy , { beadType: 2325, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 2320, index : -3, bondNum : 0 } );

setSeed(26+seedx+i*18, 7+seedy , { beadType: 2319, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 2318, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 2317, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 2125, index : -3, bondNum : 0 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 2124, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 2119, index : -3, bondNum : 0 } );

}else if(v3[0]==9){
//1(move-1)
setSeed(24+seedx+i*18, 7+seedy , { beadType: 1556, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 1551, index : -3, bondNum : 0 } );

setSeed(26+seedx+i*18, 7+seedy , { beadType: 1568, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1567, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1565, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1557, index : -3, bondNum : 0 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 1556, index : -3, bondNum : 2 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1551, index : -3, bondNum : 0 } );
}else if(v3[0]==10){
setSeed(24+seedx+i*18, 7+seedy , { beadType: 2304, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 2303, index : -3, bondNum : 0 } );
//0(body-gx-b0)
setSeed(26+seedx+i*18, 7+seedy , { beadType: 1015, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1014, index : -3, bondNum : 1} );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1013, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1004, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 1266, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1261, index : -3, bondNum : 1} );

}else if(v3[0]==11){
setSeed(24+seedx+i*18, 7+seedy , { beadType: 2304, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 2303, index : -3, bondNum : 0 } );
//1(body-gx-b1)
setSeed(26+seedx+i*18, 7+seedy , { beadType: 1013, index : -3, bondNum : 1 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1012, index : -3, bondNum : 1} );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1011, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1010, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 1266, index : -3, bondNum : 1 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1261, index : -3, bondNum : 1} );

}

setSeed(25+seedx+i*18, 8+seedy , { beadType: 763, index : -3, bondNum : 0 } );
setSeed(26+seedx+i*18, 9+seedy , { beadType: 764, index : -3, bondNum : 0 } );
setSeed(27+seedx+i*18, 10+seedy , { beadType: 765, index : -3, bondNum : 0 } );
setSeed(26+seedx+i*18, 8+seedy , { beadType: 768, index : -3, bondNum : 0 } );
setSeed(27+seedx+i*18, 9+seedy , { beadType: 767, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 10+seedy , { beadType: 766, index : -3, bondNum : 0 } );

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
