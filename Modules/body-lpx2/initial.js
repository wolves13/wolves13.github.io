﻿// <initial.js>
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
//0(body-gx-t0)

setSeed(26+seedx+i*18, 7+seedy , { beadType: 1001, index : -3, bondNum : 3 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1010, index : -3, bondNum : 1 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1011, index : -3, bondNum : 2 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1012, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 1013, index : -3, bondNum : 0 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1016, index : -3, bondNum : 1 } );



}else if(v3[0]==1){
//0(body-gx-b0)

setSeed(26+seedx+i*18, 7+seedy , { beadType: 1003, index : -3, bondNum : 3 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1004, index : -3, bondNum : 1 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1009, index : -3, bondNum : 2 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1010, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 1015, index : -3, bondNum : 0 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1016, index : -3, bondNum : 1 } );

}else if(v3[0]==2){
//0(body-rgy0)

setSeed(26+seedx+i*18, 7+seedy , { beadType: 1103, index : -3, bondNum : 3 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1104, index : -3, bondNum : 1 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1109, index : -3, bondNum : 2 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1110, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 1115, index : -3, bondNum : 0 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1116, index : -3, bondNum : 1 } );

}else if(v3[0]==3){
//1(body-gx-t1)

setSeed(26+seedx+i*18, 7+seedy , { beadType: 1001, index : -3, bondNum : 3 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1006, index : -3, bondNum : 2 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1007, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1012, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 1013, index : -3, bondNum : 0 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1018, index : -3, bondNum : 1 } );



}else if(v3[0]==4){
//1(body-gx-b1)

setSeed(26+seedx+i*18, 7+seedy , { beadType: 1003, index : -3, bondNum : 3 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1004, index : -3, bondNum : 1 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1013, index : -3, bondNum : 0 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1014, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 1015, index : -3, bondNum : 0 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1016, index : -3, bondNum : 1 } );

}else if(v3[0]==5){
//1(body-rgy1)

setSeed(26+seedx+i*18, 7+seedy , { beadType: 1103, index : -3, bondNum : 3 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 1104, index : -3, bondNum : 1 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 1111, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 1112, index : -3, bondNum : 1 } );

setSeed(30+seedx+i*18, 7+seedy , { beadType: 1113, index : -3, bondNum : 0 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 1118, index : -3, bondNum : 1 } );

}




setSeed(32+seedx+(bitNum-1)*18, 8+seedy , { beadType: 1251, index : -3, bondNum : 0 } );
setSeed(33+seedx+(bitNum-1)*18, 9+seedy , { beadType: 1252, index : -3, bondNum : 0 } );
setSeed(34+seedx+(bitNum-1)*18, 10+seedy , { beadType: 1253, index : -3, bondNum : 0 } );
//start point with no carry

setSeed(33+seedx+(bitNum-1)*18, 10+seedy , { beadType: 1254, index : -3, bondNum : 0 } );
setSeed(32+seedx+(bitNum-1)*18, 9+seedy , { beadType: 1255, index : -3, bondNum : 0 } );
setSeed(31+seedx+(bitNum-1)*18, 8+seedy , { beadType: 1256, index : -3, bondNum : 0 } );
OSVars.w_path = [
    {x: 31+seedx+(bitNum-1)*18, y: 8+seedy}
];


};


//+1


// seedとの境目がここで決まる.
OSVars.step = 1;
OSVars.initialStep = 1;

// len = 65??
