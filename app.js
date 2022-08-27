const btnContainer = document.querySelector(".btn-container");

const btnArr = [
{id:"AC",inp:"AC"},
{id:"plus",inp:"+"},
{id:"minus",inp:"-"},
{id:"multiply",inp:"x"},
{id:"div",inp:"÷"},
{id:"1",inp:"1"},
{id:"2",inp:"2"},
{id:"3",inp:"3"},
{id:"4",inp:"4"},
{id:"5",inp:"5"},
{id:"6",inp:"6"},
{id:"7",inp:"7"},
{id:"8",inp:"8"},
{id:"9",inp:"9"},
{id:"0",inp:"0"},
{id:"equals",inp:"="},
];

// document.addEventListener("DOMContentLoaded", function() {
//     for(i=0;i<btnArr.length;i++){
//         const btn = btnArr[i];
//         document.querySelector(".btn-container").innerHTML += `<button class="button" id="${btn.id}">${btn.inp}</button>\n`;
//     }
// });

const ans = document.querySelector('.answer');
const buttons = document.querySelectorAll('.button');
var result = 0;


// function ifop(op){
//     if(ans.textContent[ans.textContent.length-1]=='+' || ans.textContent[ans.textContent.length-1]=='-' || ans.textContent[ans.textContent.length-1]=='x' || ans.textContent[ans.textContent.length-1]=='÷'){
//         ans.textContent[ans.textContent.length-1] = op;
//         console.log(ans.textContent);
//     }
//     else ans.textContent[ans.textContent.length-1] += op;
//     console.log(ans.textContent);
// }

buttons.forEach(
    btn => {
        btn.addEventListener('click',function(){
            const op = btn.textContent;
            console.log(op);

            switch(op){
                case 'AC': ans.textContent = 0;
                result = 0;
                break;

                case 'x':  ans.textContent += '*';
                // ifop(op);
                break;

                case '=': result = eval(ans.textContent);
                console.log(result);
                ans.textContent = result;
                break;

                case 'DEL': let a = ans.textContent.slice(0,ans.textContent.length-1);
                ans.textContent = a;
                break;

                default: ans.textContent += op;

            }
        })
    }
)

console.log("It's on!!");