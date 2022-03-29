// for getting required elements......

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

showTask();
addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("new todo");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("new todo", JSON.stringify(listArr));
    showTask();
};

function showTask() {
    let getLocalStorage = localStorage.getItem("new todo");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);

        const pendingNumb = document.querySelector(".pendingNumb");
        pendingNumb.textContent = listArr.length;

        let newLiTag = "";
        listArr.forEach((element, index) => {
            newLiTag += `<li> ${element}<span onclick="deleteTask(${index})";><i class="fa-solid fa-trash"></i></span></li>`;
        });
        todoList.innerHTML = newLiTag;
        inputBox.value = "";
    }
}

//delete task function from storage...................................................
function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("new todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);

    localStorage.setItem("new todo", JSON.stringify(listArr));
    showTask();
}

deleteAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("new todo", JSON.stringify(listArr));
    showTask();
};