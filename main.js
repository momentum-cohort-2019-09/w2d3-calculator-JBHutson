const div = document.getElementById("/");
const multi = document.getElementById("*");
const minus = document.getElementById("-");
const plus = document.getElementById("+");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const dot = document.getElementById(".");
const equals = document.getElementById("=");
const clear = document.getElementById("C");
const answer_box = document.getElementById("ans_box");
const open_paren = document.getElementById("(");
const close_paren = document.getElementById(")");
const mod = document.getElementById("%");
const karat = document.getElementById("^");


/* change color of div while hover */
div.addEventListener("mouseover", function(){
    div.style.color = 'white';
});

div.addEventListener("mouseout", function(){
    div.style.color = 'black';
});

div.addEventListener("click", function(){
    answer_box.value += '/';
})

/* change color of multi while hover */
multi.addEventListener("mouseover", function(){
    multi.style.color = 'white';
});

multi.addEventListener("mouseout", function(){
    multi.style.color = 'black';
});

multi.addEventListener("click", function(){
    answer_box.value += '*';
})

/* change color of minus while hover */
minus.addEventListener("mouseover", function(){
    minus.style.color = 'white';
});

minus.addEventListener("mouseout", function(){
    minus.style.color = 'black';
});

minus.addEventListener("click", function(){
    answer_box.value += '-';
})

/* change color of plus while hover */
plus.addEventListener("mouseover", function(){
    plus.style.color = 'white';
});

plus.addEventListener("mouseout", function(){
    plus.style.color = 'black';
});

plus.addEventListener("click", function(){
    answer_box.value += '+';
})

one.addEventListener("click", function(){
    answer_box.value += '1';
})

two.addEventListener("click", function(){
    answer_box.value += '2';
})

three.addEventListener("click", function(){
    answer_box.value += '3';
})

four.addEventListener("click", function(){
    answer_box.value += '4';
})

five.addEventListener("click", function(){
    answer_box.value += '5';
})

six.addEventListener("click", function(){
    answer_box.value += '6';
})

seven.addEventListener("click", function(){
    answer_box.value += '7';
})

eight.addEventListener("click", function(){
    answer_box.value += '8';
})

nine.addEventListener("click", function(){
    answer_box.value += '9';
})

zero.addEventListener("click", function(){
    answer_box.value += '0';
})

dot.addEventListener("click", function(){
    answer_box.value += '.';
})

clear.addEventListener("click", function(){
    answer_box.value = '';
})

equals.addEventListener("click", function(){
    let ans = eval(answer_box.value);
    answer_box.value = ans;
})

open_paren.addEventListener("click", function(){
    answer_box.value += '(';
})

close_paren.addEventListener("click", function(){
    answer_box.value += ')';
})

mod.addEventListener("click", function(){
    answer_box.value += '%';
})

karat.addEventListener("click", function(){
    answer_box.value += '**';
})

answer_box.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        let enter_ans = eval(answer_box.value)
        answer_box.value = enter_ans;
    }
})