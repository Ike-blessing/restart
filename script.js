const text_input = document.getElementById("text_input");
const on_click = document.getElementById("on_click");
const text_output = document.getElementById("text_output");

on_click.addEventListener("click", function() {
    const text = text_input.value.trim();
    if (text === "") return ;

    
    const li = document.createElement("li");
    li.textContent = text;
    

    const deleteBtn = document.createElement("delete")
    li.appendChild(deleteBtn);
    deleteBtn.textContent = "delete"

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });    
    li.appendChild(deleteBtn);
    text_output.appendChild(li);
    text_input.value = "";
});

    //const deleteBtn = document.createElement("Delete");
   // deleteBtn.textContent = "delete";//


    //deleteBtn.addEventListener("click", function () {
       // li.remove();
    //})
