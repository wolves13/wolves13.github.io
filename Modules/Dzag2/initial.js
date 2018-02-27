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

var seedx = 0;//seed position
var seedy = 0;
console.log(seedx);




for(var i=0;i<bitNum;i++){
if(v3[i]==0||v3[i]==5){
//0
setSeed(22+seedx+i*18, 7+seedy , { beadType: 300, index : -3, bondNum : 0 } );
setSeed(23+seedx+i*18, 7+seedy , { beadType: 299, index : -3, bondNum : 0 } );
setSeed(24+seedx+i*18, 7+seedy , { beadType: 294, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 293, index : -3, bondNum : 0 } );
setSeed(26+seedx+i*18, 7+seedy , { beadType: 288, index : -3, bondNum : 0 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 287, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 286, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 285, index : -3, bondNum : 1 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 276, index : -3, bondNum : 1 } );


}else if(v3[i]==1||v3[i]==6){

//f0
setSeed(22+seedx+i*18, 7+seedy , { beadType: 302, index : -3, bondNum : 0 } );
setSeed(23+seedx+i*18, 7+seedy , { beadType: 297, index : -3, bondNum : 0 } );
setSeed(24+seedx+i*18, 7+seedy , { beadType: 296, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 295, index : -3, bondNum : 0 } );
setSeed(26+seedx+i*18, 7+seedy , { beadType: 288, index : -3, bondNum : 0 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 287, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 286, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 285, index : -3, bondNum : 1 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 276, index : -3, bondNum : 1 } );


}else if(v3[i]==2){

//Key0
setSeed(22+seedx+i*18, 7+seedy , { beadType: 300, index : -3, bondNum : 0 } );
setSeed(23+seedx+i*18, 7+seedy , { beadType: 299, index : -3, bondNum : 0 } );
setSeed(24+seedx+i*18, 7+seedy , { beadType: 295, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 294, index : -3, bondNum : 0 } );
setSeed(26+seedx+i*18, 7+seedy , { beadType: 289, index : -3, bondNum : 0 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 284, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 283, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 282, index : -3, bondNum : 1 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 281, index : -3, bondNum : 1 } );


}else if(v3[i]==3||v3[i]==7){

//1
setSeed(22+seedx+i*18, 7+seedy , { beadType: 300, index : -3, bondNum : 0 } );
setSeed(23+seedx+i*18, 7+seedy , { beadType: 299, index : -3, bondNum : 0 } );
setSeed(24+seedx+i*18, 7+seedy , { beadType: 294, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 293, index : -3, bondNum : 0 } );
setSeed(26+seedx+i*18, 7+seedy , { beadType: 288, index : -3, bondNum : 0 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 287, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 282, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 281, index : -3, bondNum : 1 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 276, index : -3, bondNum : 1 } );


}else if(v3[i]==4){

//k1
setSeed(22+seedx+i*18, 7+seedy , { beadType: 300, index : -3, bondNum : 0 } );
setSeed(23+seedx+i*18, 7+seedy , { beadType: 299, index : -3, bondNum : 1 } );
setSeed(24+seedx+i*18, 7+seedy , { beadType: 298, index : -3, bondNum : 1 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 291, index : -3, bondNum : 0 } );
setSeed(26+seedx+i*18, 7+seedy , { beadType: 290, index : -3, bondNum : 2 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 286, index : -3, bondNum : 2 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 285, index : -3, bondNum : 1 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 284, index : -3, bondNum : 1 } );
setSeed(30+seedx+i*18, 7+seedy , { beadType: 283, index : -3, bondNum : 1 } );


}

}

if(carry==0){
setSeed(22+seedx, 8+seedy , { beadType: 326, index : -3, bondNum : 0 } );
setSeed(23+seedx, 9+seedy , { beadType: 325, index : -3, bondNum : 0 } );
setSeed(23+seedx, 10+seedy , { beadType: 324, index : -3, bondNum : 0 } );
setSeed(21+seedx, 8+seedy , { beadType: 323, index : -3, bondNum : 0 } );
setSeed(22+seedx, 9+seedy , { beadType: 322, index : -3, bondNum : 0 } );
setSeed(22+seedx, 10+seedy , { beadType: 321, index : -3, bondNum : 0 } );
OSVars.w_path = [
    {x: 22+seedx+(bitNum-1)*18, y: 8+seedy}
];

}else{
setSeed(22+seedx, 8+seedy , { beadType: 324, index : -3, bondNum : 0 } );
setSeed(23+seedx, 9+seedy , { beadType: 325, index : -3, bondNum : 0 } );
setSeed(23+seedx, 10+seedy , { beadType: 326, index : -3, bondNum : 0 } );
setSeed(21+seedx, 8+seedy , { beadType: 323, index : -3, bondNum : 0 } );
setSeed(22+seedx, 9+seedy , { beadType: 322, index : -3, bondNum : 0 } );
setSeed(22+seedx, 10+seedy , { beadType: 321, index : -3, bondNum : 0 } );
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