const dsiplay= document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () =>{
        if(btn.id ==="=")
            {
            dsiplay.value = eval(dsiplay.value);
            }
        else if (btn.id === "AC") 
            {
            dsiplay.value = "";
            } 
        else if (btn.id == "DE") 
            {
            dsiplay.value = dsiplay.value.slice(0, -1);
        }
        else 
        {
            dsiplay.value += btn.id
        }


    })

})