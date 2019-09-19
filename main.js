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


/* div */
div.addEventListener("mouseover", function(){
    div.style.color = 'white';
});

div.addEventListener("mouseout", function(){
    div.style.color = 'black';
});

div.addEventListener("click", function(){
    answer_box.value += '/';
    answer_box.focus();
})

/* multi */
multi.addEventListener("mouseover", function(){
    multi.style.color = 'white';
});

multi.addEventListener("mouseout", function(){
    multi.style.color = 'black';
});

multi.addEventListener("click", function(){
    answer_box.value += '*';
    answer_box.focus();
})

/* minus */
minus.addEventListener("mouseover", function(){
    minus.style.color = 'white';
});

minus.addEventListener("mouseout", function(){
    minus.style.color = 'black';
});

minus.addEventListener("click", function(){
    answer_box.value += '-';
    answer_box.focus();
})

/* plus */
plus.addEventListener("mouseover", function(){
    plus.style.color = 'white';
});

plus.addEventListener("mouseout", function(){
    plus.style.color = 'black';
});

plus.addEventListener("click", function(){
    answer_box.value += '+';
    answer_box.focus();
});

/* one */
one.addEventListener("click", function(){
    answer_box.value += '1';
    answer_box.focus();
});

/* two */
two.addEventListener("click", function(){
    answer_box.value += '2';
    answer_box.focus();
});

/* three */
three.addEventListener("click", function(){
    answer_box.value += '3';
    answer_box.focus();
});

/* four */
four.addEventListener("click", function(){
    answer_box.value += '4';
    answer_box.focus();
});

/* five */
five.addEventListener("click", function(){
    answer_box.value += '5';
    answer_box.focus();
});

/* six */
six.addEventListener("click", function(){
    answer_box.value += '6';
    answer_box.focus();
});

/* seven */
seven.addEventListener("click", function(){
    answer_box.value += '7';
    answer_box.focus();
});

/* eight */
eight.addEventListener("click", function(){
    answer_box.value += '8';
    answer_box.focus();
});

/* nine */
nine.addEventListener("click", function(){
    answer_box.value += '9';
    answer_box.focus();
});

/* zero */
zero.addEventListener("click", function(){
    answer_box.value += '0';
    answer_box.focus();
});

/* dot */
dot.addEventListener("click", function(){
    answer_box.value += '.';
    answer_box.focus();
});

/* clear */
clear.addEventListener("click", function(){
    answer_box.value = '';
    answer_box.focus();
});

/* open_paren */
open_paren.addEventListener("click", function(){
    answer_box.value += '(';
    answer_box.focus();
});

/* close_peren */
close_paren.addEventListener("click", function(){
    answer_box.value += ')';
    answer_box.focus();
});

/* mod */
mod.addEventListener("mouseover", function(){
    mod.style.color = 'white';
});

mod.addEventListener("mouseout", function(){
    mod.style.color = 'black';
});

mod.addEventListener("click", function(){
    answer_box.value += '%';
    answer_box.focus();
});

/* karat */
karat.addEventListener("mouseover", function(){
    karat.style.color = 'white';
});

karat.addEventListener("mouseout", function(){
    karat.style.color = 'black';
});

karat.addEventListener("click", function(){
    answer_box.value += '**';
    answer_box.focus();
});

/* equals */
equals.addEventListener("click", function(){
    if (answer_box.value != ''){
        if (answer_box.value.match(/[a-z]/i)) {
            answer_box.value = 'invalid input: letters'
            answer_box.focus();
        } else if (answer_box.value.match(/[!@#$&_={}|'":;?><`~\\]/)){
            answer_box.value = 'invalid input: special character';
            answer_box.focus();
        } else if (answer_box.value.charAt(answer_box.value.length-1) == '/' || answer_box.value.charAt(answer_box.value.length-1) == '%'){
            answer_box.value = 'invalid input: missing divisor';
            answer_box.focus();
        } else if (answer_box.value.charAt(answer_box.value.length-1) + answer_box.value.charAt(answer_box.value.length-2) == '**') {
            answer_box.value = 'invalid input: missing exponent';
            answer_box.focus();
        } else if (answer_box.value.charAt(answer_box.value.length-1) == '*'){
            answer_box.value = 'invalid input: missing multiplier';
            answer_box.focus();
        } else if (answer_box.value.charAt(answer_box.value.length-1) == '+'){
            answer_box.value = 'invalid input: missing addend';
            answer_box.focus();
        } else if (answer_box.value.charAt(answer_box.value.length-1) == '-'){
            answer_box.value = 'invalid input: missing minuend';
            answer_box.focus();
        } else if (!isFinite(eval(answer_box.value))) {
            answer_box.value = 'invalid input: zero division';
            answer_box.focus();
        } else {
            let ans = eval(answer_box.value);
            answer_box.value = ans;
            answer_box.focus();
        }
    } else if (answer_box.value == ''){
        answer_box.value = 'invalid input: empty';
        answer_box.focus();
    }
});

/* answer_box */
answer_box.addEventListener("keyup", function(event){
    if(event.keyCode === 13 && answer_box.value != ''){
        event.preventDefault();
        if (answer_box.value.match(/[a-z]/i)) {
            answer_box.value = 'invalid input: letter'
        } else if (answer_box.value.match(/[!@#$&_={}|'":;?><`~\\]/)){
            answer_box.value = 'invalid input: special character';
        } else if (answer_box.value.charAt(answer_box.value.length-1) == '/' || answer_box.value.charAt(answer_box.value.length-1) == '%'){
            answer_box.value = 'invalid input: missing divisor';
        } else if (answer_box.value.charAt(answer_box.value.length-1) + answer_box.value.charAt(answer_box.value.length-2) == '**') {
            answer_box.value = 'invalid input: missing exponent';
        } else if (answer_box.value.charAt(answer_box.value.length-1) == '*'){
            answer_box.value = 'invalid input: missing multiplier';
        } else if (answer_box.value.charAt(answer_box.value.length-1) == '+'){
            answer_box.value = 'invalid input: missing addend';
        } else if (answer_box.value.charAt(answer_box.value.length-1) == '-'){
            answer_box.value = 'invalid input: missing minuend';
        } else if (!isFinite(eval(answer_box.value))) {
            answer_box.value = 'invalid input: zero division';
        } else {
            let enter_ans = eval(answer_box.value)
            answer_box.value = enter_ans;
        }
    } else if (event.keyCode === 13 && answer_box.value == ''){
        event.preventDefault();
        answer_box.value = 'invalid input: empty';
    } else if (event.keyCode == 67){
        event.preventDefault();
        answer_box.value = '';
        answer_box.focus();
    }
});

answer_box.focus();