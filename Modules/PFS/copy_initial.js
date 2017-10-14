// <initial.js>
// Similator of 2D Oritatami System.
// initialize OS-simulator's name space.
//  and a bit more..

//////////
// Grobal な 値の定義
INITIAL_GRID_SIZE_X = 5000;
INITIAL_GRID_SIZE_Y = 5000;

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
    initialStep : 0
};
//
//////////

initOccupied( INITIAL_GRID_SIZE_X, INITIAL_GRID_SIZE_Y );


// occupied配列の初期設定(seed)




var v1 =1;
var v2 =1;
var v3 =0;
setSeed(12, 7 , { beadType: 519, index : -3, bondNum : 0 } );
setSeed(13, 7 , { beadType: 406, index : -3, bondNum : 0 } );
setSeed(14, 7 , { beadType: 407, index : -3, bondNum : 0 } );
setSeed(15, 7 , { beadType: 412, index : -3, bondNum : 0 } );
setSeed(16, 7 , { beadType: 413, index : -3, bondNum : 0 } );
setSeed(17, 7 , { beadType: 418, index : -3, bondNum : 0 } );
setSeed(18, 7 , { beadType: 519, index : -3, bondNum : 0 } );
setSeed(19, 7 , { beadType: 406, index : -3, bondNum : 0 } );
setSeed(20, 7 , { beadType: 407, index : -3, bondNum : 0 } );
setSeed(21, 7 , { beadType: 412, index : -3, bondNum : 0 } );
setSeed(22, 7 , { beadType: 413, index : -3, bondNum : 0 } );
setSeed(23, 7 , { beadType: 418, index : -3, bondNum : 0 } );

if(v3==0){
//0parts most upper

setSeed(24, 7 , { beadType: 501, index : -3, bondNum : 0 } );
setSeed(25, 7 , { beadType: 506, index : -3, bondNum : 0 } );
setSeed(26, 7 , { beadType: 507, index : -3, bondNum : 0 } );
setSeed(27, 7 , { beadType: 516, index : -3, bondNum : 0 } );
setSeed(28, 7 , { beadType: 517, index : -3, bondNum : 0 } );
setSeed(29, 7 , { beadType: 518, index : -3, bondNum : 0 } );

}else if(v3==1){

//1parts most upper
setSeed(24, 7 , { beadType: 501, index : -3, bondNum : 0 } );
setSeed(25, 7 , { beadType: 506, index : -3, bondNum : 0 } );
setSeed(26, 7 , { beadType: 507, index : -3, bondNum : 0 } );
setSeed(27, 7 , { beadType: 512, index : -3, bondNum : 0 } );
setSeed(28, 7 , { beadType: 513, index : -3, bondNum : 0 } );
setSeed(29, 7 , { beadType: 518, index : -3, bondNum : 0 } );
}

setSeed(30, 7 , { beadType: 519, index : -3, bondNum : 0 } );
setSeed(31, 7 , { beadType: 406, index : -3, bondNum : 0 } );
setSeed(32, 7 , { beadType: 407, index : -3, bondNum : 0 } );
setSeed(33, 7 , { beadType: 412, index : -3, bondNum : 0 } );
setSeed(34, 7 , { beadType: 413, index : -3, bondNum : 0 } );
setSeed(35, 7 , { beadType: 418, index : -3, bondNum : 0 } );
setSeed(36, 7 , { beadType: 519, index : -3, bondNum : 0 } );
setSeed(37, 7 , { beadType: 406, index : -3, bondNum : 0 } );
setSeed(38, 7 , { beadType: 407, index : -3, bondNum : 0 } );
setSeed(39, 7 , { beadType: 412, index : -3, bondNum : 0 } );
setSeed(40, 7 , { beadType: 413, index : -3, bondNum : 0 } );
setSeed(41, 7 , { beadType: 418, index : -3, bondNum : 0 } );

if(v2==0){
//0parts upper
setSeed(42, 7 , { beadType: 501, index : -3, bondNum : 0 } );
setSeed(43, 7 , { beadType: 506, index : -3, bondNum : 0 } );
setSeed(44, 7 , { beadType: 507, index : -3, bondNum : 0 } );
setSeed(45, 7 , { beadType: 516, index : -3, bondNum : 0 } );
setSeed(46, 7 , { beadType: 517, index : -3, bondNum : 0 } );
setSeed(47, 7 , { beadType: 518, index : -3, bondNum : 0 } );
}else if(v2==1){
//1parts upper
setSeed(42, 7 , { beadType: 501, index : -3, bondNum : 0 } );
setSeed(43, 7 , { beadType: 506, index : -3, bondNum : 0 } );
setSeed(44, 7 , { beadType: 507, index : -3, bondNum : 0 } );
setSeed(45, 7 , { beadType: 512, index : -3, bondNum : 0 } );
setSeed(46, 7 , { beadType: 513, index : -3, bondNum : 0 } );
setSeed(47, 7 , { beadType: 518, index : -3, bondNum : 0 } );
}

setSeed(48, 7 , { beadType: 519, index : -3, bondNum : 0 } );
setSeed(49, 7 , { beadType: 406, index : -3, bondNum : 0 } );
setSeed(50, 7 , { beadType: 407, index : -3, bondNum : 0 } );
setSeed(51, 7 , { beadType: 412, index : -3, bondNum : 0 } );
setSeed(52, 7 , { beadType: 413, index : -3, bondNum : 0 } );
setSeed(53, 7 , { beadType: 418, index : -3, bondNum : 0 } );
setSeed(54, 7 , { beadType: 519, index : -3, bondNum : 0 } );
setSeed(55, 7 , { beadType: 406, index : -3, bondNum : 0 } );
setSeed(56, 7 , { beadType: 407, index : -3, bondNum : 0 } );
setSeed(57, 7 , { beadType: 412, index : -3, bondNum : 0 } );
setSeed(58, 7 , { beadType: 413, index : -3, bondNum : 0 } );
setSeed(59, 7 , { beadType: 418, index : -3, bondNum : 0 } );

if(v1==0){
//0parts lower
setSeed(60, 7 , { beadType: 501, index : -3, bondNum : 0 } );
setSeed(61, 7 , { beadType: 506, index : -3, bondNum : 0 } );
setSeed(62, 7 , { beadType: 507, index : -3, bondNum : 0 } );
setSeed(63, 7 , { beadType: 516, index : -3, bondNum : 0 } );
setSeed(64, 7 , { beadType: 517, index : -3, bondNum : 0 } );
setSeed(65, 7 , { beadType: 518, index : -3, bondNum : 0 } );
}else if(v1==1){
//1parts lower
setSeed(60, 7 , { beadType: 501, index : -3, bondNum : 0 } );
setSeed(61, 7 , { beadType: 506, index : -3, bondNum : 0 } );
setSeed(62, 7 , { beadType: 507, index : -3, bondNum : 0 } );
setSeed(63, 7 , { beadType: 512, index : -3, bondNum : 0 } );
setSeed(64, 7 , { beadType: 513, index : -3, bondNum : 0 } );
setSeed(65, 7 , { beadType: 518, index : -3, bondNum : 0 } );
}

//start point with carry

setSeed(67, 8 , { beadType: 898, index : -3, bondNum : 0 } );
setSeed(69, 10 , { beadType: 900, index : -3, bondNum : 0 } );
setSeed(70, 10 , { beadType: 200, index : -3, bondNum : 0 } );
OSVars.w_path = [
    {x: 69, y: 10}
];
setSeed(66, 7 , { beadType: 519, index : -3, bondNum : 0 } );
setSeed(68, 9 , { beadType: 899, index : -3, bondNum : 0 } );
setSeed(67, 7 , { beadType: 200, index : -3, bondNum : 0 } );
setSeed(69, 9 , { beadType: 200, index : -3, bondNum : 0 } );
setSeed(71, 10 , { beadType: 200, index : -3, bondNum : 0 } );
setSeed(72, 10 , { beadType: 200, index : -3, bondNum : 0 } );
setSeed(68, 8 , { beadType: 200, index : -3, bondNum : 0 } );

//start point with no carry
/*
setSeed(69, 10 , { beadType: 898, index : -3, bondNum : 0 } );
setSeed(67, 8 , { beadType: 900, index : -3, bondNum : 0 } );
setSeed(70, 10 , { beadType: 200, index : -3, bondNum : 0 } );
OSVars.w_path = [
    {x: 67, y: 8}
];
*/

//+1


// seedとの境目がここで決まる.
OSVars.step = 1;
OSVars.initialStep = 1;

// len = 65??
