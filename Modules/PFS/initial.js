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

var seedx = 0;//seed position
var seedy = 0;
console.log(seedx);



setSeed(22+seedx, 7+seedy , { beadType: 311, index : -3, bondNum : 0 } );
for(var i=0;i<bitNum;i++){
if(v3[i]==0){
//bottom

setSeed(23+seedx+i*18, 7+seedy , { beadType: 302, index : -3, bondNum : 0 } );
setSeed(24+seedx+i*18, 7+seedy , { beadType: 297, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 296, index : -3, bondNum : 0 } );
setSeed(26+seedx+i*18, 7+seedy , { beadType: 291, index : -3, bondNum : 0 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 302, index : -3, bondNum : 0 } );


}else if(v3[i]==1){

//top

setSeed(23+seedx+i*18, 7+seedy , { beadType: 302, index : -3, bondNum : 0 } );
setSeed(24+seedx+i*18, 7+seedy , { beadType: 297, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 296, index : -3, bondNum : 0 } );
setSeed(26+seedx+i*18, 7+seedy , { beadType: 291, index : -3, bondNum : 0 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 302, index : -3, bondNum : 0 } );



}

}

if(carry==0){
setSeed(22+seedx, 8+seedy , { beadType: 638, index : -3, bondNum : 0 } );
setSeed(23+seedx, 9+seedy , { beadType: 637, index : -3, bondNum : 0 } );
setSeed(23+seedx, 10+seedy , { beadType: 636, index : -3, bondNum : 0 } );
setSeed(21+seedx, 8+seedy , { beadType: 633, index : -3, bondNum : 0 } );
setSeed(22+seedx, 9+seedy , { beadType: 634, index : -3, bondNum : 0 } );
setSeed(22+seedx, 10+seedy , { beadType: 635, index : -3, bondNum : 0 } );
OSVars.w_path = [
    {x: 22+seedx+(bitNum-1)*18, y: 8+seedy}
];

}else{
setSeed(22+seedx, 8+seedy , { beadType: 636, index : -3, bondNum : 0 } );
setSeed(23+seedx, 9+seedy , { beadType: 637, index : -3, bondNum : 0 } );
setSeed(23+seedx, 10+seedy , { beadType: 638, index : -3, bondNum : 0 } );
setSeed(21+seedx, 8+seedy , { beadType: 635, index : -3, bondNum : 0 } );
setSeed(22+seedx, 9+seedy , { beadType: 634, index : -3, bondNum : 0 } );
setSeed(22+seedx, 10+seedy , { beadType: 633, index : -3, bondNum : 0 } );
OSVars.w_path = [
    {x: 23+seedx+(bitNum-1)*18, y: 10+seedy}
];
}

};

//+1


// seedとの境目がここで決まる.
OSVars.step = 1;
OSVars.initialStep = 1;

// len = 65??
