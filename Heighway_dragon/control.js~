/*
  OS-simulator動作前に
  formオブジェクトから値を取得して, 
  設定を行うためのスクリプト.
  <formControl.js>
*/


// 読み込み完了時にイベントハンドラを登録.
window.onload = function () {
    document.forms.onsubmit = firstNextPushed;
};



var changeColor = function (elm, color) {
    elm.style.backgroundColor = color;
};

var btn_onclick = function () {

    var result = [];
    var list = document.getElementsByTagName('input');
    var i;

    for(i=0; i < list.length; i++){
	result.push( list.item(i).value );
    }
    window.alert( result.join('\n'));
    
    return false;
};

var firstNextPushed = function () {
    var i;
    var d = document.forms.delay;
    var a = document.forms.arity;   // ラジオボタンの配列
    var wl = document.forms.wordLength;
    var arity, delay;

    if ( d.value !== null  &&  d.value !== '' ){
	if ( isNaN( d.value ) ){

	    alert('Delay must be natural number.' );
	    d.value = d.defaultValue;
	    d.focus();
	    d.select();
	    return false;
	}
    }
    delay = d.value;

    for (i=0; i < a.length; i++) {
	if ( a[i].checked ){
	    // Arityを選択された値にセットする.
	    arity = a[i].value;
	    break;
	}
    }
    if (arity === undefined){
	alert('Pleae select arity.');
	return false;
    }

    if ( wl.value !== null  &&  wl.value !== '' ){
	if ( isNaN( wl.value ) ){

	    alert('Word length must be natural number.' );
	    wl.value = wl.defaultValue;
	    wl.focus();
	    wl.select();
	    return false;
	}
    }

    // simulator へ反映
    init_a_d( {a: 3, d: 3} );
    OSVars.cons.len = parseInt( wl.value, 10 );

    // 次の設定画面を生成する.
    return secondSettings(arity, delay);
};

var secondSettings = function (arity, delay) {

    var fm = document.forms;
    var firstSettingDiv = document.getElementById('firstSettingDiv');
    var secondSettingDiv = document.getElementById('secondSettingDiv');    
    
    var word = fm.word; 	

    //firstSettingDiv.removeChild( checkBoxLabel );          // Node 削除

    var arityDiv = document.getElementById('arityDiv');
    var newDiv = document.createElement('div');
    newDiv.innerHTML = 'Arity : ' + arity;
    firstSettingDiv.replaceChild( newDiv, arityDiv );


    var delayLabel = fm.delay.parentNode;
    delayLabel.removeChild( fm.delay );
    delayLabel.innerHTML  = 'Delay : ' + delay;

    var wordLen = fm.wordLength.value;
    var wordLenLabel = fm.wordLength.parentNode;
    wordLenLabel.removeChild( fm.wordLength );
    wordLenLabel.innerHTML = 'Word Length : ' + wordLen;

    // SecondSettingDiv を可視化.
    
    secondSettingDiv.style.visibility = "visible";
    secondSettingDiv.style.backgroundColor = "lightblue";
    firstSettingDiv.style.backgroundColor = "white";

    var nextBtnMsgDiv = document.getElementById('btnMsg');
    nextBtnMsgDiv.innerHTML = '(Seed)';
    fm.onsubmit = secondNextPushed;
    return false;
};

var secondNextPushed = function () {
    var fm = document.forms;
    var beadTypeNum = 3000;
    // word を OS-simulator へ反映する.
    
    var bit = fm.bitNum;  
    var bodyheight = fm.dragon_height;
    var stx = fm.start_x;
    var sty = fm.start_y;
    var fdirec = fm.direction;
    OSVars.dragon_height = bodyheight.value;
    start_x=parseInt(stx.value);
    start_y=parseInt(sty.value);
    //console.log(start_x);
 
 	for (i=0; i < bit.length; i++) {
	if ( bit[i].checked ){
	    // bit numberを選択された値にセットする.
	    bitNum = parseInt(bit[i].value);
	    //console.log(bitNum);
	    break;
	}
    }
    Seedfunction(bitNum);
    for (i=0; i < fdirec.length; i++) {
	if ( fdirec[i].checked ){
	    // bit numberを選択された値にセットする.
	    direction = parseInt(fdirec[i].value);
	    //console.log(direction);
	    break;
	}
    }
    
    return thirdSettings(  );
};


var thirdSettings = function (  ) {
	var beadTypeNum=3000;
    console.log('beadTypeNum : ' + beadTypeNum );

	var firstSettingDiv = document.getElementById('firstSettingDiv');
    var secondSettingDiv = document.getElementById('secondSettingDiv');
    var fm = document.forms;
    var newDiv = document.createElement('div');
    firstSettingDiv.remove( newDiv );
    // Seedの設定画面を生成.
    var start_str = "Start_point (" + start_x +"," + start_y + ")";
    var direction_str = "First_Direction : ";
    var firstdirection;
    if(direction==0){
    	firstdirection="Left";
    }else{
    	firstdirection="Right";
    }
    var wordString =     "Word ( bead type array ) : <br>" ;
    var bit_string = bitNum + " folds dragon";
    var body_height = "body_length :" + OSVars.dragon_height;
    var animationcheck = "Animation :" ;
    secondSettingDiv.innerHTML =start_str + '<br><br>'+direction_str +firstdirection + '<br><br>'+body_height+ '<br><br>'+bit_string + '<br><br>'+ animationcheck + '<input type="checkbox" name="Animation" checked="checked"/>';
    secondSettingDiv.style.backgroundColor = "white";
	
    OSVars.cons.beadTypeNum = parseInt( beadTypeNum, 10 );
    setRuleset();

    // SeedType( [T,F5,F9]*[1,2,3,4] )を選択するラジオボタンを追加
    // 左側の分子3つの並び, 上の4つの並びをそれぞれ1ずつ選択させる.    
    var TFDiv = document.createElement('div');
    TFDiv.innerHTML = "Seed Type <br>  <label><input type='radio' name='TF' value='T'> T <\label> <br> <label><input type='radio' name='TF' value='F5'> F5 <\label> <br> <label><input type='radio' name='TF' value='F9'> F9 <\label> <br>";
    TFDiv.style.backgroundColor = "lightblue";
    TFDiv.style.visibility = 'hidden';
    fm.appendChild( TFDiv );

    var upperInputDiv = document.createElement('div');
    upperInputDiv.innerHTML = "Upper Input <br>  <label><input type='radio' name='upperInput' value=''> T <\label> <br> <label><input type='radio' name='TF' value='F5'> F5 <\label> <br> <label><input type='radio' name='TF' value='F9'> F9 <\label> <br>";

    
    //var gridCanvas = document.getElementById('gridCanvas');
    //var overCanvas = document.getElementById('overCanvas');
    gridCanvas.style.visibility = 'visible';
    overCanvas.style.visibility = 'visible';

    var dElm = document.documentElement, dBody = document.body;

    var overCanvasRect = overCanvas.getBoundingClientRect();
    // BeadCircleの付近がクリックされたら, 
    // その点の座標を計算するリスナーを登録
    overCanvas.addEventListener('mousedown', function(e) {
	var scrolledX = dElm.scrollLeft  ||  dBody.scrollLeft;       // 画面上部からのスクロール量(Chrome, Firefox)
	var scrolledY = dElm.scrollTop  ||  dBody.scrollTop;       // 画面上部からのスクロール量(Chrome, Firefox)
	var realX = (e.clientX + scrolledX) - overCanvasRect.left;  	// 実際のcanvas座標
	var realY = (e.clientY + scrolledY) - overCanvasRect.top;

	// 斜行座標でのcanvas座標(yから計算する必然性あり.)
	var ocsY = Math.round( realY / UNIT_DIST_Y );
	var floatX = (realX / UNIT_DIST_X) +  (ocsY * Math.sin( ANGLE_IN_OCS ));  
	var ocsX = Math.round( floatX )-(sizeY/2);
	console.log('ocs mouse pos (ocs) : (' + ocsX + ', ' + ocsY + ')' );
    }, false);
	//////////////////////////
		//RuleSet
	//////////////////////////
	
	
	Rules();
	turnRules();
	
    setBeadTypes();
	//////////////////////////////////////////////
   	//Completion
   	
 	ColorChange(13,18,'black');
 	ColorChange(81,86,'black');
 	ColorChange(143,148,'black');
 	ColorChange(191,196,'black');
    complement(OSVars.cons.beadTypeNum);
   	//////////////////////////////////////////////
   	
    ///////////////////////////////////////////////////////////////
    //
    // RuleSet おわり
    /*
     * 
     */
    ///////////////////////////////////////////////////////////////
    var submitButton = fm.nextButton;
    submitButton.value = "Execute !!";
	
    var nextBtnMsgDiv = document.getElementById('btnMsg');
    nextBtnMsgDiv.innerHTML = '';
    
    fm.onsubmit = execute;

    return false;
};

//補完用関数
var complement = function(num){
	for(var i=0;i<num;i++){
    	for(var j=0;j<num;j++){
    		if(OSVars.ruleset[i][j] == true){
    			OSVars.ruleset[j][i]  = true;
    			}
    	}
   	}
};


//カンファメーションの準備
function Confirmation(UseBeads){
	this.Beads = UseBeads;
	this.first = false;
	this.prenum = 0;
	this.rule  =[];
	this.WIrule =[];
	this.PRErule = [];
	this.number = 0;
	this.color = 'black';
	this.special = false;
	this.specialnum = 0;
	this.start=0;
	this.inputnum=0;
}

//ここでカンファメーションの配列の設定
var Confirmations = [];
var searchNum = 30;

function setConfirmation(UseBeads,number){
	Confirmations[number]=new Confirmation(UseBeads);
	Confirmations[number].color='black';
	Confirmations[number].rule=[];
	Confirmations[number].WIrule=[];
	Confirmations[number].WIrule2=[];
	Confirmations[number].PRErule=[];
	var size = UseBeads;
	console.log("%d:%d",number,size);
  	var i;

	Confirmations[number].first=false;
	Confirmations[number].WIrule=[];
 	Confirmations[number].rule = [];
 	Confirmations[number].WIrule = [];
 	Confirmations[number].PRErule = [];
  	for(i=0; i<=size; i++){
  		Confirmations[number].rule.push(initArray(size, false));
  	}
  	for(i=0; i<=2*size; i++){
  		Confirmations[number].WIrule.push(initArray(size, false));
  	}
  	for(i=0; i<=2*size; i++){
  		Confirmations[number].WIrule2.push(initArray(size, false));
  	}
  	for(i=0; i<=2*size; i++){
  		Confirmations[number].PRErule.push(initArray(size, false));
  	}
};
//最初に始まるものに宣言
var FirstCF = function(pre,number){
	Confirmations[number].first=true;
	Confirmations[number].prenum=pre;
};
//厄介なものにのみ
var SpecialCF = function(spe,number){
	Confirmations[number].special=true;
	Confirmations[number].specialnum=Confirmations[spe].start;
};
var SpeCFrule = function(mo1,mo2,confnum){
	var after=Confirmations[confnum].Beads;
	Confirmations[confnum].WIrule2[mo1][mo2+after]=true;
};

//内部
var CFrule = function(mo1,mo2,number){
	Confirmations[number].rule[mo1][mo2]=true;
};

//入力との
var ICFrule = function(mo1,mo2,confnum){
	var after=Confirmations[confnum].Beads;
	Confirmations[confnum].WIrule[mo1][mo2+after]=true;
};

//スタート以前のビーズとの
var PCFrule = function(mo1,mo2,number){
	var after=Confirmations[number].Beads;
	Confirmations[number].PRErule[mo1][mo2+after]=true;
};

//コピー
var CopyCF = function(origin,copy){
	var after = Confirmations[origin].Beads;
	setConfirmation(after,copy);
	for(var i=1;i<=Confirmations[origin].Beads;i++){
		for(var j=1;j<=Confirmations[origin].Beads;j++){
			if(Confirmations[origin].rule[i][j]==true){
				Confirmations[copy].rule[i][j]=true;
			}
		}
	}
	
	for(var i=1;i<=Confirmations[origin].Beads;i++){
		for(var j=after;j<=searchNum+after;j++){
			if(Confirmations[origin].WIrule[i][j]==true){
				Confirmations[copy].WIrule[i][j]=true;
			}
		}
	}
	for(var i=1;i<=Confirmations[origin].Beads;i++){
		for(var j=after;j<=searchNum+after;j++){
			if(Confirmations[origin].PRErule[i][j]==true){
				Confirmations[copy].PRErule[i][j]=true;
			}
		}
	}
};

//OSVars.rulesetに反映
function SetCFR(StartNum,InputNum,precon,number){
	Confirmations[number].start=StartNum;
	Confirmations[number].inputnum=InputNum;
	var inp = Confirmations[InputNum].start;
	for(var i=1;i<=Confirmations[number].Beads;i++){
		for(var j=1;j<=Confirmations[number].Beads;j++){
			if(Confirmations[number].rule[i][j]==true){
				OSVars.ruleset[i+StartNum][j+StartNum]=true;
			}
		}
	}
	var after = Confirmations[number].Beads;
	for(var i=1;i<=Confirmations[number].Beads;i++){
		for(var j=after-6;j<=searchNum+after;j++){
			if(Confirmations[number].WIrule[i][j]==true){
				OSVars.ruleset[i+StartNum][j+inp-after]=true;
			}
		}
	}
	if(Confirmations[number].special==true){
	for(var i=1;i<=Confirmations[number].Beads;i++){
		for(var j=after-6;j<=searchNum+after;j++){
			if(Confirmations[number].WIrule2[i][j]==true){
				OSVars.ruleset[i+StartNum][j+Confirmations[number].specialnum-after]=true;
			}
		}
	}
	}
	if(Confirmations[number].first==true){
		for(var i=1;i<=Confirmations[number].Beads;i++){
			for(var j=after;j<=searchNum+after;j++){
				if(Confirmations[number].PRErule[i][j]==true){
					OSVars.ruleset[i+StartNum][Confirmations[number].prenum-(j-after)+1]=true;
				}
			}
		}
	}else{
		var previous = Confirmations[precon].Beads+Confirmations[precon].start;
		for(var i=1;i<=Confirmations[number].Beads;i++){
			for(var j=after;j<=searchNum+after;j++){
				if(Confirmations[number].PRErule[i][j]==true){
					OSVars.ruleset[i+StartNum][previous-(j-after)+1]=true;
				}
			}
		}
	}
	
	ColorChange(StartNum+1,StartNum+after,Confirmations[number].color);
}

var Confnum = function(confnum,pre,input){
	Confirmations[confnum].startnum=pre;
	Confirmations[confnum].input = Confirmations[input].startnum;
};

var SetColor = function(color,number){
	Confirmations[number].color=color;
};


var execute = function () {

    /* var worker = new Worker('workerTest.js');
    console.log(OSVars);
    var obj = new Object();
    obj.a = 10;
    obj.b = 20;
    worker.postMessage(  obj  );
    worker.postMessage( {a:  100, b: 200} );

    worker.onmessage = function(e) {
	console.log( 'return from worker.');
	console.log( e.data );
    };
    */
    
    console.log('execute button pushed...');
  	

    
    // show_occupied_in_binary_2();
    
    


    // シミュレータの実行
    var fmch = document.forms;
    var animch = fmch.Animation;
    
    var animation=true;
    if(animch.checked){
    loopopt().then(function onFulfilled(runStatus){
    	OSStatus(runStatus);
    });
    }else{
    	runSimu().then(function onFulfilled(runStatus){
    	OSStatus(runStatus);
    });
    }
    
    
	return false;
};
