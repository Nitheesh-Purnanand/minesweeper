let a = [];
let num=0;
let scores =[];
let count =0;
let create = (i,a)=>{
    let box =document.createElement("button");
    let container = document.querySelector(".container");
    let score = document.querySelector(".number");
    box.style.height ="48px";
    box.style.width ="50px";
    box.style.borderRadius ="10px";
    box.style.margin ="3px"
    box.style.backgroundColor ="black";
    box.setAttribute('class',"mine");
    if (a.includes(i)) {
        box.addEventListener('click', function() {
            let mines = document.querySelectorAll(".mine");
            let numbers = document.querySelector(".numbers");
            alert("Mine is Found");
            console.log(a);
            score.innerHTML = 0;
            scores[count]= num;
           let hs = document.createElement("li");
            hs.innerHTML = scores[count];
            numbers.append(hs);

            console.log(scores);

            num = 0;
            count++;
            mines.forEach(mine => {
                mine.style.backgroundColor = "black"
            });
        });
    } else {
        box.addEventListener('click', function() {
            box.style.backgroundColor="pink";
            num = num + 1;
            score.innerHTML= num;
        });
    }
    
    console.log(i);
    container.append(box);
}
for (let i = 0; i <=8; i++) {
    let j = Math.floor(Math.random()*64);
    a[i]=j;
    console.log(j);
}
console.log(a)
for(let i=0;i<=63;i++){
    create(i,a);
}