const input = document.querySelector("#new-todo");
const button = document.querySelector("#enter");
const list = document.querySelector("#list");
const dateButton = document.querySelector("#date");
const date = document.querySelector("#show-date");
const completedList = document.querySelector("#completed-list");

const showDate = () => {
    console.log(Date());
    dateButton.innerText = Date();
}

//date button 
dateButton.addEventListener("click", showDate)

//create and append list
const createAndAppendListItem = () => {
    const newListItem = document.createElement("li");
    newListItem.innerText = input.value;
    const newCompletedItem = document.createElement("li");
    newCompletedItem.innerText = newListItem.innerText;

    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click",() => {
        list.removeChild(newListItem);
    });
    deleteButton.className = "delete";
    newListItem.appendChild(deleteButton);

    //complete button
    const completeButton = document.createElement("input");
    completeButton.type = "checkbox";
    const deleteComplete = document.createElement("button");
    completeButton.onclick = () => {
        if(completeButton.checked == true){
            newListItem.classList.add("completedTask");
            completedList.appendChild(newCompletedItem);
            deleteComplete.addEventListener("click", () => {
                completedList.removeChild(newCompletedItem);
            })
            deleteComplete.innerText = "Delete";
            deleteComplete.className = "delete";
            newCompletedItem.appendChild(deleteComplete);
        } else {
            newListItem.classList.remove("completedTask");
            completedList.removeChild(newCompletedItem);
        }
    }
    newListItem.appendChild(completeButton);
    list.appendChild(newListItem);
}

//button click
button.addEventListener("click", createAndAppendListItem);




