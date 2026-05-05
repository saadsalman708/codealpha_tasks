const btns = document.querySelectorAll(".btns");
const display = document.querySelector("#display");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");
const realTimeBox = document.querySelector("#realTimeBox");

btns.forEach(btn =>{
    btn.addEventListener("click" , ()=>{
        addInDisplay(btn.value);
        realTimeResult();
    });
});

const addInDisplay = (btnVal) => {
    if (display.value === "Error") {
        display.value = "";
        realTimeBox.innerHTML = "";
        return;
    }
    display.value += btnVal;
};

const deleteLastChar = ()=> {
    if (display.value === "Error") {
        realTimeBox.innerHTML = "";
        display.value = "";
        return;
    }
    display.value = display.value.slice(0 , -1);
};

const calculate = ( rtd = false )=> {

    if (!display.value || display.value === "Error") return display.value = "";

    if (!rtd) {
        const Foperators = ["+","%","*","/"];
        const Loperators = ["+","-","%","*","/"];
    
        let charCheckFL = Foperators.some(op => display.value.startsWith(op));
        charCheckFL = Loperators.some(op => display.value.endsWith(op));
    
        if (charCheckFL) return display.value = "Error";
    }

    try {
        return eval(display.value);
    } catch (error) {
        return "Error";
    }
};


const calculatedDisplay = ()=> {
    const result = calculate();
    display.value = result;
    realTimeBox.innerHTML = "";
};

const realTimeResult = ()=> {
    const result = calculate( true );
    if (result === "Error") return;
        realTimeBox.innerHTML = result;
};

clear.addEventListener("click" , ()=> {
    display.value = "";
    realTimeBox.innerHTML = "";
});

del.addEventListener("click" , deleteLastChar);

equal.addEventListener("click", calculatedDisplay);


addEventListener("keydown" , e => {
        
    if (e.key === "Enter") calculatedDisplay();
    if (e.key === "Backspace") deleteLastChar();
    if (e.key === "Delete") deleteLastChar();
    if (e.key === "Escape") display.value = "";
    
    const char = "1234567890%/*-+.";

    if (char.includes(e.key)) {
        addInDisplay(e.key);
        realTimeResult();
    };
});