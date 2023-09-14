const Counter = document.getElementById("counter");
const changeBy = document.getElementById("input");
const IncrementBtn = document.getElementById("increment");
const DecrementBtn = document.getElementById("decrement");
const BtnContainer = document.getElementById("buttonContainer");

changeBy.addEventListener("change",function(e){
    let newValue=e.target.value;
    if(newValue>10){
        changeBy.value=10;
    }
})
BtnContainer.addEventListener("click",function(event){
    if(event.target.id==='increment'){
          Counter.innerText=Number(Counter.innerText)+Number(changeBy.value);
    }else if(event.target.id==='decrement'){
        let newValue=Number(Counter.innerText)-Number(changeBy.value);

        Counter.innerText=(newValue<0)?0:newValue;
    };
    if(event.target.id==='reset'){
        Counter.innerText=0;
        changeBy.value=1;  
          
    };
    
});