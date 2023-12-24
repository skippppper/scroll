let body = document.getElementById("body")

let left = document.getElementById("btn_left");
let right = document.getElementById("btn_right");

let one = document.getElementById("one");
let two = document.getElementById("two");
let tree = document.getElementById("tree");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");

let arr = [one,two,tree,four,five,six,seven,eight];
let T = [];
let coll = arr.length;
let x;

//Начальные настройки
for(let i = 3; i != coll; i ++){
    arr[i].style.display = "none";
}
// body.style.backgroundImage = "url(" + arr[1].src + ")";
// arr[1].style.border = "4px solid white";

function resetColor() {
    left.classList.remove("clicked");
    right.classList.remove("clicked");
};

//Функция для opacity элементов
function apperance(element){
    setTimeout(function(){
        element.style.opacity = 1;
    },10);
}

for(let i = 3; i != coll; i ++){
    arr[i].style.opacity = 0;
    arr[i].style.display = "none";
}
left.addEventListener("click", function(){
    left.classList.add('clicked');
    setTimeout(resetColor,100);

    //Logic skroll elements
    x = arr.shift();
    arr.push(x);
    //Задаю позицию
    for(let i = 0; i != coll; i ++){
        arr[i].style.order = i;
    }
    arr[1].style.border = "4px solid white";
    //Убираю все элементы после n=3
    for(let i = 3; i != coll; i ++){
        arr[i].style.opacity = 0;
        arr[i].style.display = "none";
    }
    //Делаю все элменты от 0 до 3 видемыми
    for(let i = 0; i != 3; i ++){
        arr[i].style.display = "flex";
        apperance(arr[i]);
    }
    body.style.backgroundImage = "url(" + arr[1].src + ")";
})

for(let i = 3; i != coll; i ++){
    arr[i].style.opacity = 0;
    arr[i].style.display = "none";
}
right.addEventListener("click", function(){
    right.classList.add('clicked');
    setTimeout(resetColor,100);
    //Logic skroll elements
    x = arr.pop();
    arr.unshift(x);
    for(let i = 0; i != coll; i ++){
        arr[i].style.order = i;
    }
    arr[1].style.border = "4px solid white";
    for(let i = 3; i != coll; i ++){
        arr[i-1].style.opacity = 0;
        arr[i].style.display = "none";
    }
    for(let i = 0; i != 3; i ++){
        arr[i].style.display = "flex";
        apperance(arr[i]);
    }
    
    body.style.backgroundImage = "url(" + arr[1].src + ")";
})
