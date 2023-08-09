var calculator_container = document.querySelector('.calculator-container');

var result = calculator_container.querySelector('.calc-result');

var calc_div = calculator_container.querySelector('.calc-div');

var value_0 = calculator_container.querySelector('.value-0');
var value_1 = calculator_container.querySelector('.value-1');
var value_2 = calculator_container.querySelector('.value-2');
var value_3 = calculator_container.querySelector('.value-3');
var value_4 = calculator_container.querySelector('.value-4');
var value_5 = calculator_container.querySelector('.value-5');
var value_6 = calculator_container.querySelector('.value-6');
var value_7 = calculator_container.querySelector('.value-7');
var value_8 = calculator_container.querySelector('.value-8');
var value_9 = calculator_container.querySelector('.value-9');


var add_btn = calculator_container.querySelector('.oper-plus');
var sub_btn = calculator_container.querySelector('.oper-minus');
var mul_btn = calculator_container.querySelector('.oper-mul');
var div_btn = calculator_container.querySelector('.oper-div');
var equal_btn = calculator_container.querySelector('.oper-equal');

var add_btn_i = calculator_container.querySelector('.fa-plus');
var sub_btn_i = calculator_container.querySelector('.fa-minus');
var mul_btn_i = calculator_container.querySelector('.fa-xmark');
var div_btn_i = calculator_container.querySelector('.fa-divide');
var equal_btn_i = calculator_container.querySelector('.fa-equals');

var delete_btn = calculator_container.querySelector('.delete');
var reset_btn = calculator_container.querySelector('.reset');



// calc_div.addEventListener('click', (e) => {
//     var answer = 0;
//     const hit_btn = e.target;
//     const value = e.target.innerHTML;
//     if (value == value_0.innerHTML) {
//         answer = value_0.innerHTML;
//     } else if (value == value_1.innerHTML) {
//         answer = value_1.innerHTML;
//        } else if (value == value_2.innerHTML) {
//         answer = value_2.innerHTML;
//     } else if (value == value_3.innerHTML) {
//         answer = value_3.innerHTML;
//     } else if (value == value_4.innerHTML) {
//         answer = value_4.innerHTML;
//     } else if (value == value_5.innerHTML) {
//            answer = value_5.innerHTML;
//     } else if (value == value_6.innerHTML) {
//         answer = value_6.innerHTML;
//     } else if (value == value_7.innerHTML) {
//         answer = value_7.innerHTML;
//     } else if (value == value_8.innerHTML) {
//         answer = value_8.innerHTML;
//        } else if (value == value_9.innerHTML) {
//         answer = value_9.innerHTML;
//     } else if (hit_btn == add_btn || hit_btn == add_btn_i) {
//         console.log("add-btn");
//     } else if (hit_btn ==  sub_btn || hit_btn == sub_btn_i) {
//         console.log("sub-btn");
//     } else if (hit_btn == mul_btn || hit_btn == mul_btn_i) {
//            console.log("mul-btn");
//     } else if (hit_btn == div_btn || hit_btn == div_btn_i) {
//         console.log("div-btn");
//     } else if (hit_btn == equal_btn || hit_btn == equal_btn_i) {
//         console.log("equal-btn");
//     }
// });

var add_num = () => {
    var result_string = result.innerHTML;
    var last_index = result_string.length - 1;
    if (result_string[last_index] != '+' &&
        result_string[last_index] != '-' &&
        result_string[last_index] != '*' &&
        result_string[last_index] != '/')
        result.innerHTML += '+';
    else {
        alert('Wrong Operation');
    }
};

var sub_num = () => {
    var result_string = result.innerHTML;
    var last_index = result_string.length - 1;
    if (result_string[last_index] != '+' &&
        result_string[last_index] != '-' &&
        result_string[last_index] != '*' &&
        result_string[last_index] != '/')
        result.innerHTML += '-';
    else {
        alert('Wrong Operation');
    }
};
var mul_num = () => {
    var result_string = result.innerHTML;
    var last_index = result_string.length - 1;
    if (result_string[last_index] != '+' &&
        result_string[last_index] != '-' &&
        result_string[last_index] != '*' &&
        result_string[last_index] != '/')
        result.innerHTML += '*';
    else {
        alert('Wrong Operation');
    }
};
var div_num = () => {
    var result_string = result.innerHTML;
    var last_index = result_string.length - 1;
    if (result_string[last_index] != '+' &&
        result_string[last_index] != '-' &&
        result_string[last_index] != '*' &&
        result_string[last_index] != '/')
        result.innerHTML += '/';
    else {
        alert('Wrong Operation');
    }
};


value_0.addEventListener('click', () => {
    if (result.innerHTML != 0) {
        result.innerHTML += 0;
    }
});
value_1.addEventListener('click', () => {
    if (result.innerHTML != 0)
        result.innerHTML += 1;
    else {
        result.innerHTML = 1;
    }
});
value_2.addEventListener('click', () => {
    if (result.innerHTML != 0)
        result.innerHTML += 2;
    else {
        result.innerHTML = 2;
    }
});
value_3.addEventListener('click', () => {
    if (result.innerHTML != 0)
        result.innerHTML += 3;
    else {
        result.innerHTML = 3;
    }
});
value_4.addEventListener('click', () => {
    if (result.innerHTML != 0)
        result.innerHTML += 4;
    else {
        result.innerHTML = 4;
    }
});
value_5.addEventListener('click', () => {
    if (result.innerHTML != 0)
        result.innerHTML += 5;
    else {
        result.innerHTML = 5;
    }
});
value_6.addEventListener('click', () => {
    if (result.innerHTML != 0)
        result.innerHTML += 6;
    else {
        result.innerHTML = 6;
    }
});
value_7.addEventListener('click', () => {
    if (result.innerHTML != 0)
        result.innerHTML += 7;
    else {
        result.innerHTML = 7;
    }
});
value_8.addEventListener('click', () => {
    if (result.innerHTML != 0)
        result.innerHTML += 8;
    else {
        result.innerHTML = 8;
    }
});
value_9.addEventListener('click', () => {
    if (result.innerHTML != 0)
        result.innerHTML += 9;
    else {
        result.innerHTML = 9;
    }
});

add_btn.addEventListener('click', () => {
    add_num();
});
sub_btn.addEventListener('click', () => {
    sub_num();
});
mul_btn.addEventListener('click', () => {
    mul_num();
});
div_btn.addEventListener('click', () => {
    div_num();
});

delete_btn.addEventListener('click', () => {
    var temp_string = "";
    if (result.innerHTML != 0) {
        var len = result.innerHTML.length;
        for (var i = 0; i < len - 1; i++) {
            temp_string += result.innerHTML[i];
        }
        result.innerHTML = temp_string;
    }
    if (result.innerHTML == "") {
        result.innerHTML = 0;
    }
});

equal_btn.addEventListener('click', () => {
    try {
        result.innerHTML = eval(result.innerHTML);
    } catch (e) {
        alert(e);
    }
    // if (result.innerHTML[result.innerHTML.length - 1] != '+' &&
    //     result.innerHTML[result.innerHTML.length - 1] != '-' &&
    //     result.innerHTML[result.innerHTML.length - 1] != '*' &&
    //     result.innerHTML[result.innerHTML.length - 1] != '/')
    //     result.innerHTML = eval(result.innerHTML);
    // else {
    //     alert('Wrong Operation');
    // }
});

reset_btn.addEventListener('click', () => {
    result.innerHTML = 0;
});


result.addEventListener('click', () => {
    result.contentEditable = true;
});