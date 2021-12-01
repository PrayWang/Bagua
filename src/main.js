let html = document.querySelector("#html")
let style=document.querySelector('#style')
let string = `
/*你好，我是小王
*接下来我演示一下我的前端功底
*首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把div变成一个八卦图
*前方高能
*首先，把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%,
     rgba(255,255,255,1) 50%,
     rgba(0,0,0,1) 50%,
     rgba(0,0,0,1) 100%);
}
/*补全八卦*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, 
    rgba(0,0,0,1) 25%, 
    rgba(255,255,255,1) 25%, 
    rgba(255,255,255,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 25%, 
    rgba(0,0,0,1) 25%, 
    rgba(0,0,0,1) 100%);
}
`;
// string = string.replace(/\n/g,"<br>");
let string2 = ''//用于容纳string
let n = 0;


let step = ()=>{
    setTimeout(()=>{
        if(string[n] ==="\n"){//回车变换行
            string2 += "<br>";
        }else if(string[n] ===" "){//单空格变多空格
            string2 +="&nbsp;";
        }else {//不是回车不是空格，逐字照搬进string2
            string2 += string[n]
        } 
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        html.scrollTo(0,99999);
        window.scrollTo(0,99999);//字动屏幕动
        if(n < string.length -1) { //n不是最后一个就继续
            n += 1;
            step();
        }else{

        }
    },30)
     }
step();
