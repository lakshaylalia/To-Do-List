let body = document.querySelector("body");
let login = document.getElementById("loginBtn")
let sign = document.getElementById("signupBtn")

let add = document.getElementById("addBtn")
let reset = document.getElementById("resetBtn")
let taskArr = [];


function disableInspect(){
  document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
})
}
// Disable Right Click
// disableInspect();

add.addEventListener("click", () => {
  addTask();
  markComplete();
})

function addTask() {
  let taskInput = document.querySelector("input");
  let task = taskInput.value.trim();

  if (task !== "") {

    if (taskArr.includes(task)) {
      taskInput.value = "";
      taskInput.placeholder = "Task already exists";
      return;
    }

    let list = document.getElementById("ul");
    let li = document.createElement("li");
    let innerDiv1 = document.createElement("div");
    let innerDiv2 = document.createElement("div");

    innerDiv1.classList.add("innerDiv1");
    innerDiv1.innerText = task;
    innerDiv2.classList.add("innerDiv2");

    list.append(li);
    li.append(innerDiv1);
    li.append(innerDiv2);
    li.classList.add("list-style");
    li.setAttribute("id", "list");
    taskInput.value = "";
    taskInput.placeholder = "Add more tasks";
    taskArr.push(task);
  } 
  
  else {
    taskInput.placeholder = "Task not added, enter a task.";
  }
}

reset.addEventListener("click", () => {
  document.querySelector("input").value = "";
})


function markComplete() {
  let tasks = document.getElementsByClassName("list-style");

  for (let i = 0; i < tasks.length; i++) {
    let innerDiv2 = tasks[i].querySelector('.innerDiv2');

    if (!innerDiv2) {
      innerDiv2 = document.createElement("div");
      innerDiv2.classList.add("innerDiv2");
      tasks[i].append(innerDiv2);
    }

    let btn1 = innerDiv2.querySelector('.compBtn');
    let btn2 = innerDiv2.querySelector('.delBtn');

    if (!btn1) {
      btn1 = document.createElement("button");
      btn1.classList.add("compBtn");
      btn1.innerHTML = `<svg width="48" height="48" viewBox="0 0 68 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="34" cy="28" rx="25.5" ry="21" fill="#7E869E" fill-opacity="0.25" stroke="#222222" stroke-width="1.2"/>
        <path d="M22.6667 28L31.1667 35L45.3333 21" stroke="#222222" stroke-width="1.2"/>
        </svg>`;
      innerDiv2.append(btn1);
    }

    if (!btn2) {
      btn2 = document.createElement("button");
      btn2.classList.add("delBtn");
      btn2.innerHTML = `<svg width="48" height="48" viewBox="0 0 66 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 36.25L27.5 29" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
<path d="M38.5 36.25L38.5 29" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
<path d="M8.25 16.9167H57.75H53.5C51.6144 16.9167 50.6716 16.9167 50.0858 17.5025C49.5 18.0882 49.5 19.0311 49.5 20.9167V44.3333C49.5 46.219 49.5 47.1618 48.9142 47.7475C48.3284 48.3333 47.3856 48.3333 45.5 48.3333H20.5C18.6144 48.3333 17.6716 48.3333 17.0858 47.7475C16.5 47.1618 16.5 46.219 16.5 44.3333V20.9167C16.5 19.0311 16.5 18.0882 15.9142 17.5025C15.3284 16.9167 14.3856 16.9167 12.5 16.9167H8.25Z" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
<path d="M27.6874 8.14559C28.0008 7.88866 28.6913 7.66163 29.6518 7.4997C30.6124 7.33777 31.7893 7.25 33 7.25C34.2107 7.25 35.3876 7.33777 36.3482 7.4997C37.3087 7.66163 37.9992 7.88866 38.3126 8.14559" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
</svg>`;
      innerDiv2.append(btn2);
    }
  }
}
