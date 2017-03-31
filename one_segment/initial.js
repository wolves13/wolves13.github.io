// <initial.js>
// Similator of 2D Oritatami System.
// initialize OS-simulator's name space.
//  and a bit more..

//////////
// Grobal な 値の定義
INITIAL_GRID_SIZE_X = 10000;
INITIAL_GRID_SIZE_Y = 10000;
start_x = 0;
start_y = 0;
var bitNum,direction;

var nonDetRoutes = [];   // nondeterministic なとき, 複数のRouteを保存する用.
var nonDetHbonds = [];   // nondeterministic なとき, 複数のHbondの組を保存する用.


var adjacents = [ {x: 1, y: 0}, {x: -1, y: 0},
		  {x: 0, y: 1}, {x: 0,  y: -1},
		  {x: 1, y: 1}, {x: -1, y: -1} ];

// Oritataim System が持つべき変数群を収める名前空間.
var OSVars = {
    cons : {
	     alpha : 2,         // alpha, deltaはこの値を上書きする.
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

function Seedfunction(bitNum){

var seedx = start_x;//seed position
var seedy = start_y;
console.log(seedx);
var v3 =[1,0,1,0,0,0,0];


setSeed(13+seedx, 7+seedy , { beadType: 1732, index : -3, bondNum : 0 } );
for(var i=0;i<bitNum;i++){
setSeed(14+seedx+i*18, 7+seedy, { beadType: 753, index : -3, bondNum : 0 } );
setSeed(15+seedx+i*18, 7+seedy , { beadType: 754, index : -3, bondNum : 0 } );
setSeed(16+seedx+i*18, 7+seedy , { beadType: 759, index : -3, bondNum : 0 } );
setSeed(17+seedx+i*18, 7+seedy , { beadType: 760, index : -3, bondNum : 0 } );
setSeed(18+seedx+i*18, 7+seedy , { beadType: 765, index : -3, bondNum : 0 } );
setSeed(19+seedx+i*18, 7+seedy , { beadType: 766, index : -3, bondNum : 0 } );
setSeed(20+seedx+i*18, 7+seedy , { beadType: 753, index : -3, bondNum : 0 } );
setSeed(21+seedx+i*18, 7+seedy , { beadType: 754, index : -3, bondNum : 0 } );
setSeed(22+seedx+i*18, 7+seedy , { beadType: 759, index : -3, bondNum : 0 } );
setSeed(23+seedx+i*18, 7+seedy , { beadType: 760, index : -3, bondNum : 0 } );
setSeed(24+seedx+i*18, 7+seedy , { beadType: 765, index : -3, bondNum : 0 } );
setSeed(25+seedx+i*18, 7+seedy , { beadType: 766, index : -3, bondNum : 0 } );

if(v3[i]==0){
//0parts most upper
setSeed(26+seedx+i*18, 7+seedy , { beadType: 703, index : -3, bondNum : 0 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 704, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 709, index : -3, bondNum : 0 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 710, index : -3, bondNum : 0 } );


}else if(v3[i]==1){

//1parts most upper
setSeed(26+seedx+i*18, 7+seedy , { beadType: 711, index : -3, bondNum : 0 } );
setSeed(27+seedx+i*18, 7+seedy , { beadType: 712, index : -3, bondNum : 0 } );
setSeed(28+seedx+i*18, 7+seedy , { beadType: 713, index : -3, bondNum : 0 } );
setSeed(29+seedx+i*18, 7+seedy , { beadType: 714, index : -3, bondNum : 0 } );

}
setSeed(30+seedx+i*18, 7+seedy , { beadType: 715, index : -3, bondNum : 0 } );
setSeed(31+seedx+i*18, 7+seedy , { beadType: 716, index : -3, bondNum : 0 } );
}


setSeed(32+seedx+(bitNum-1)*18, 9+seedy , { beadType: 1973, index : -3, bondNum : 0 } );
//setSeed(31+seedx+(bitNum-1)*18, 7+seedy , { beadType: 200, index : -3, bondNum : 0 } );
setSeed(33+seedx+(bitNum-1)*18, 9+seedy , { beadType: 200, index : -3, bondNum : 0 } );
setSeed(35+seedx+(bitNum-1)*18, 10+seedy , { beadType: 200, index : -3, bondNum : 0 } );
setSeed(36+seedx+(bitNum-1)*18, 10+seedy , { beadType: 200, index : -3, bondNum : 0 } );
setSeed(32+seedx+(bitNum-1)*18, 8+seedy , { beadType: 200, index : -3, bondNum : 0 } );

//start point with carry
var carry=false;
if(carry==true){
setSeed(31+seedx+(bitNum-1)*18, 8+seedy , { beadType: 1972, index : -3, bondNum : 0 } );
setSeed(33+seedx+(bitNum-1)*18, 10+seedy , { beadType: 1974, index : -3, bondNum : 0 } );
setSeed(34+seedx+(bitNum-1)*18, 10+seedy , { beadType: 200, index : -3, bondNum : 0 } );
OSVars.w_path = [
    {x: 33+seedx+(bitNum-1)*18, y: 10+seedy}
];
}else{
//start point with no carry

setSeed(33+seedx+(bitNum-1)*18, 10+seedy , { beadType: 1972, index : -3, bondNum : 0 } );
setSeed(31+seedx+(bitNum-1)*18, 8+seedy , { beadType: 1974, index : -3, bondNum : 0 } );
setSeed(34+seedx+(bitNum-1)*18, 10+seedy , { beadType: 1971, index : -3, bondNum : 0 } );
OSVars.w_path = [
    {x: 31+seedx+(bitNum-1)*18, y: 8+seedy}
];
}
};

//+1


// seedとの境目がここで決まる.
OSVars.step = 1;
OSVars.initialStep = 1;

// len = 65??
