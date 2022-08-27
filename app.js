const btnContainer = document.querySelector(".btn-container");

// const btnArr = [
// {id:"AC",inp:"AC"},
// {id:"plus",inp:"+"},
// {id:"minus",inp:"-"},
// {id:"multiply",inp:"x"},
// {id:"div",inp:"÷"},
// {id:"1",inp:"1"},
// {id:"2",inp:"2"},
// {id:"3",inp:"3"},
// {id:"4",inp:"4"},
// {id:"5",inp:"5"},
// {id:"6",inp:"6"},
// {id:"7",inp:"7"},
// {id:"8",inp:"8"},
// {id:"9",inp:"9"},
// {id:"0",inp:"0"},
// {id:"equals",inp:"="},
// ];

// document.addEventListener("DOMContentLoaded", function() {
//     for(i=0;i<btnArr.length;i++){
//         const btn = btnArr[i];
//         document.querySelector(".btn-container").innerHTML += `<button class="button" id="${btn.id}">${btn.inp}</button>\n`;
//     }
// });

const ans = document.querySelector('.answer');
const buttons = document.querySelectorAll('.button');
var result = 0;

function ifac(op){
    if(ans.textContent.length==1 && ans.textContent == '0' && [1,2,3,4,5,6,7,8,9,0].includes(parseInt(op)))
    {
        ans.textContent = "";
    }
}

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
            ifac(op);

            switch(op){
                case 'AC': ans.textContent = 0;
                result = 0;
                break;

                case 'x':  ans.textContent += '*';
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

// keyboard inputs

document.addEventListener('keypress', event =>{
    var kop = event.key;
    console.log(kop);
    ifac(kop);
    switch(kop){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '*':
        case '/':
        case '0': ans.textContent += kop;
        break;

        case 'Delete': let a = ans.textContent.slice(0,ans.textContent.length-1);
        ans.textContent = a;
        break;

        case '=':
        case 'Enter': result = eval(ans.textContent);
            console.log(result);
            ans.textContent = result;
            break;

        case 'c': ans.textContent = 0;
           result = 0;
           break;

        default: ans.textContent = ans.textContent;
    }
})



console.log("It's on!!");