const input = document.querySelector("#new-todo");
const button = document.querySelector("#enter");
const list = document.querySelector("#list");
const dateButton = document.querySelector("#date");
const date = document.querySelector("#show-date");
const completedList = document.querySelector("#completed-list");
var myInput;

const showDate = () => {
    console.log(Date());
    date.innerText = Date();
}

//date button 
dateButton.addEventListener("click", showDate)


//print method for button 
const printButtonConfirmation = () => {
    console.log("button clicked");
};

//text-input
input.addEventListener("input", (event) => {
    myInput = event.target.value;
});

//create and append list
const createAndAppendListItem = () => {
    const newListItem = document.createElement("li");
    newListItem.innerText = myInput;
    list.appendChild(newListItem);

    //complete button
    const completeButton = document.createElement("input");
    completeButton.type = "checkbox";
    const newCompletedItem = document.createElement("li");
    newCompletedItem.innerText = newListItem.innerText;
    completeButton.onclick = () => {
        if(completeButton.checked == true){
            newListItem.classList.add("completedTask");
            completedList.appendChild(newCompletedItem);
        } else {
            newListItem.classList.remove("completedTask");
            completedList.remove(newCompletedItem);
        }
    }
    list.appendChild(completeButton);

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click",() => {
        newListItem.remove();
        deleteButton.remove();
        completeButton.remove();
    })
    deleteButton.innerHTML = "Delete";
    list.appendChild(deleteButton);
}

//button click
button.addEventListener("click", createAndAppendListItem);




