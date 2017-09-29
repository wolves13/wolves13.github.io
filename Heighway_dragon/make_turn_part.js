

Block = function (name, size, num) {
    this.name = name;
    this.size = size;
    this.num = num;
};



var lss = new Block('lss', 36, 633);
var lsg = new Block('lsg', 38, 669);
var lgs = new Block('lgs', 37, 707);
var rss = new Block('rss', 18, 744);
var rsg = new Block('rsg', 23, 762);
var rgs = new Block('rgs', 22, 785);

var r6 = new Block('r6', 18, 387);
var r6_2 = new Block('r6_2', 18, 405);
var r6_sp = new Block('r6_sp', 6, 423); //750

var l6 = new Block('l6', 18, 429);
var l6_sp = new Block('l6_sp', 6, 447);

var sl4 = new Block('sl4', 12, 453);
var sl4_sp = new Block('sl4_sp', 6, 465);

var glider_r = new Block('glider_r', 12, 474);
var glider_l = new Block('glider_l', 12, 474);
var glider_turn_r = new Block('glider_turn_r', 12, 492);
var glider_turn_l = new Block('glider_turn_l', 12, 507);
var glider_sp = new Block('glider_sp', 6, 200); //1200

var glider_l_sp = new Block('glider_l_sp', 6, 519);
var glider_r_sp1 = new Block('glider_r_sp1', 3, 471);
var glider_r_sp2 = new Block('glider_r_sp2', 3, 486);

var glider_tau_r = new Block('glider_tau_r', 18, 525);
var last_body = new Block('last_body', 36, 543);
var move = new Block('move', 18, 579);
var move_tau = new Block('move_tau', 18, 597);
var move_last = new Block('move_last', 18, 615);


//var word = [];

make_r_glider = function (bit, imp_num) {
    var words = [];


    if (imp_num === 0) {
        words.push(glider_r_sp1);
        words.push(glider_turn_r);
        words.push(glider_r_sp2);
    }
    else {
        words.push(glider_r_sp1);
        words.push(glider_r);
        words.push(glider_r_sp2);
    }
    for (var i = 1; i < bit; i++) {
        words = words.concat([glider_sp, glider_sp, glider_sp, glider_sp, glider_sp, glider_sp]);


        if (i == imp_num) {
            words.push(glider_r_sp1);
            words.push(glider_turn_r);
            words.push(glider_r_sp2);
        }
        else {
            words.push(glider_r_sp1);
            words.push(glider_r);
            words.push(glider_r_sp2);
        }
    }

    words.push(glider_tau_r);

    return words;
};

make_l_glider = function (bit, imp_num) {
    var words = [];


    if (imp_num === 0) {
        words.push(glider_turn_l);
        words.push(glider_l_sp);
    }
    else {
        words.push(glider_l);
        words.push(glider_l_sp);
    }
    for (var i = 1; i < bit; i++) {
        words = words.concat([glider_sp, glider_sp, glider_sp, glider_sp, glider_sp, glider_sp]);


        if (i == imp_num) {
            words.push(glider_turn_l);
            words.push(glider_l_sp);
        }
        else {
            words.push(glider_l);
            words.push(glider_l_sp);
        }
    }

    words.push(glider_l);
    words.reverse();
    return words;
};





make_block_list = function (bit) {
    words = [];
    r6_word = [r6];
    r6_2_word = [r6_2];
    l6_word = [l6];
    sl4_word = [sl4, sl4_sp];

    for (var i = 1; i < bit; i++) {
        r6_word = r6_word.concat([r6_sp, r6_sp, r6_sp, r6_sp, r6_sp, r6_sp, r6]);
        r6_2_word = r6_2_word.concat([r6_sp, r6_sp, r6_sp, r6_sp, r6_sp, r6_sp, r6_2]);
        l6_word = l6_word.concat([l6_sp, l6_sp, l6_sp, l6_sp, l6_sp, l6_sp, l6]);
        sl4_word = sl4_word.concat([sl4_sp,sl4_sp,sl4_sp,sl4_sp,sl4_sp,sl4_sp,sl4,sl4_sp]);
    }
    r6_word.push(r6);
    r6_2_word.push(r6_2);
    l6_word.push(l6);
    sl4_word.push(sl4);

    l6_word.reverse();
    sl4_word.reverse();

    for (var i = 0; i < bit; i++) {

        words = words.concat(r6_word);
        words.push(rss);
        words = words.concat(l6_word);
        words.push(lsg);
        words = words.concat(make_r_glider(bit, i));
        words.push(rgs);
        words = words.concat(sl4_word);
        words.push(lss);
        words = words.concat(r6_2_word);
        words.push(rsg);
        words = words.concat(make_l_glider(bit, bit - 1 - i));
        words.push(lgs);

    }

    words = words.concat(r6_word);
    words.pop();
    words.push(last_body);
    words.push(move_tau);

    for (var i = 0; i < (bit - 1) * 3 + 2; i++) {
        words.push(move);
    }
    words.push(move_last);

    return words;
};


make_block_list_last = function (bit) {
    words = [];
    r6_word = [r6];
    r6_2_word = [r6_2];
    l6_word = [l6];
    sl4_word = [sl4, sl4_sp];

    for (var i = 1; i < bit; i++) {
        r6_word = r6_word.concat([r6_sp, r6_sp,r6_sp, r6_sp,r6_sp, r6_sp, r6]);
        r6_2_word = r6_2_word.concat([r6_sp, r6_sp,r6_sp, r6_sp,r6_sp, r6_sp, r6_2]);
        l6_word = l6_word.concat([l6_sp, l6_sp, l6_sp, l6_sp, l6_sp, l6_sp, l6]);
        sl4_word = sl4_word.concat([sl4_sp,sl4_sp,sl4_sp,sl4_sp,sl4_sp,sl4_sp, sl4,sl4_sp,]);
    }
    r6_word.push(r6);
    r6_2_word.push(r6_2);
    l6_word.push(l6);
    sl4_word.push(sl4);

    l6_word.reverse();
    sl4_word.reverse();

    for (var i = 0; i < bit; i++) {

        words = words.concat(r6_word);
        words.push(rss);
        words = words.concat(l6_word);
        words.push(lsg);
        words = words.concat(make_r_glider(bit, i));
        words.push(rgs);
        words = words.concat(sl4_word);
        words.push(lss);
        words = words.concat(r6_2_word);
        words.push(rsg);
        words = words.concat(make_l_glider(bit, bit - 1 - i));
        words.push(lgs);

    }

    words = words.concat(r6_word);
    words.pop();
    words.push(last_body);
    words.push(move_tau);

    for (var i = 0; i < (bit - 1) * 3 + 2; i++) {
        words.push(move);
    }
   

    return words;
};




make_index = function (list) {
    var index = [];
    //index.push(0);
    for (var i in list) {
       // document.writeln(list[i].size);
        //document.writeln(typeof (list[i].size));
        for (var j = 0; j < list[i].size;j++) {
            index.push(j + 1 + list[i].num);
          //      document.writeln(list[i].num);
        };
    };
    //index = list;
    return index;
};


connect_three_turn = function (bit) {
    words = [];
    words_last = [];
    turn_words = [];
    words = make_block_list(bit);
    //words_last = make_block_list_last(bit);
    turn_words = words.concat(words);
    turn_words = turn_words.concat(make_block_list_last(bit));

    return turn_words;
};


make_turn = function (bit) {
    var words = [];
    var words2 = [];
    words = connect_three_turn(bit);
    words2 = make_index(words);
    return words2;
};






//word = make_block_list(3);
//word = word.concat(word);
//document.writeln(make_index(word));


//document.writeln(word.length);
//document.writeln(word[0].size);


//var word2 = connect_three_turn(3);
//words[1].prototype.name = 'aaa';

//document.writeln(make_turn(3));


//for (var j in word2) {
 // document.writeln(word2[j].name);}
