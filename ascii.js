var input1=document.getElementById("input1");
var input2=document.getElementById("input2");
var btn=document.getElementById("btn");
var input3=document.getElementById("input3");
btn.addEventListener("click",function(){
    var a=input1.value;
    var b=input2.value;
    function asciiSum(value) {
        let sum=0;
        for(let i=0; i<value.length;i++) {
            let characters=value.charCodeAt(i);
            sum+=characters;
        }
        return sum;

    }
    const sum1 = asciiSum(a);
    const sum2 = asciiSum(b);
    if (a.length===0 && b.length===0) {
        input3.value="Please enter some String";
    }else {
        input3.value=sum1+" "+sum2
    }
});