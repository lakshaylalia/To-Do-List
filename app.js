let body = document.querySelector("body");
let add = document.getElementById("addBtn")
let reset = document.getElementById("resetBtn")
let theme = document.getElementById("themeBtn");
let totalTask = parseInt(document.getElementById("totalTask").innerHTML);
let taskCompleted = parseInt(document.getElementById("taskCompleted").innerHTML);
// let compBtn, delBtn;
let checkbox;
let taskArr = [];
let delObj = {};
let compObj = {};


theme.addEventListener("click", () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('nav').classList.toggle('dark-mode');
  document.querySelector('.task input').classList.toggle('dark-mode');
  document.querySelector('.task button').classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    theme.innerHTML = `<svg id="Icon_metro-sun4" data-name="Icon metro-sun4" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
  <path id="Icon_metro-sun4-2" data-name="Icon metro-sun4" d="M26.463,14.512A11.308,11.308,0,1,0,37.77,25.82,11.321,11.321,0,0,0,26.463,14.512Zm0-3.231a1.614,1.614,0,0,0,1.615-1.615V6.435a1.615,1.615,0,1,0-3.231,0V9.666A1.613,1.613,0,0,0,26.463,11.282Zm0,29.077a1.614,1.614,0,0,0-1.615,1.615V45.2a1.615,1.615,0,0,0,3.231,0V41.974A1.616,1.616,0,0,0,26.463,40.359Zm12.561-24.82,2.284-2.284a1.615,1.615,0,1,0-2.284-2.284L36.74,13.255a1.615,1.615,0,0,0,2.284,2.284ZM13.9,36.1l-2.284,2.284A1.615,1.615,0,1,0,13.9,40.672l2.284-2.284A1.615,1.615,0,1,0,13.9,36.1ZM11.924,25.82A1.616,1.616,0,0,0,10.309,24.2H7.078a1.615,1.615,0,1,0,0,3.231h3.231A1.614,1.614,0,0,0,11.924,25.82ZM45.847,24.2H42.617a1.615,1.615,0,1,0,0,3.231h3.231a1.615,1.615,0,1,0,0-3.231ZM13.9,15.539a1.615,1.615,0,0,0,2.284-2.284L13.9,10.97a1.615,1.615,0,0,0-2.284,2.284ZM39.028,36.1a1.615,1.615,0,0,0-2.284,2.284l2.284,2.284a1.615,1.615,0,1,0,2.284-2.284Z" transform="translate(-5.463 -4.82)" fill="#eaeaea"/>
  <circle id="Ellipse_1" data-name="Ellipse 1" cx="9" cy="9" r="9" transform="translate(12 12)" fill="#eaeaea"/>
</svg>
`;
  } else {
    theme.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g id="Icon_metro-sun4" transform="matrix(1,0,0,1,-5.463,-4.82)">
        <path d="M26.463,14.512C26.463,14.512 26.462,14.512 26.462,14.512C20.259,14.512 15.154,19.617 15.154,25.82C15.154,32.023 20.259,37.128 26.462,37.128C32.665,37.128 37.77,32.023 37.77,25.82C37.763,19.62 32.663,14.52 26.463,14.512ZM26.463,11.281C26.463,11.281 26.464,11.281 26.464,11.281C27.349,11.281 28.078,10.552 28.078,9.667L28.078,6.435C28.078,5.549 27.349,4.82 26.462,4.82C25.576,4.82 24.847,5.549 24.847,6.435L24.847,9.666C24.847,9.667 24.847,9.668 24.847,9.669C24.847,10.554 25.575,11.282 26.46,11.282C26.461,11.282 26.462,11.282 26.463,11.282L26.463,11.281ZM26.463,40.358C26.463,40.358 26.462,40.358 26.462,40.358C25.577,40.358 24.848,41.087 24.848,41.972L24.848,45.2C24.848,46.086 25.577,46.816 26.464,46.816C27.35,46.816 28.079,46.086 28.079,45.2L28.079,41.974C28.078,41.088 27.349,40.359 26.463,40.359L26.463,40.358ZM39.024,15.538L41.308,13.254C41.611,12.951 41.781,12.54 41.781,12.112C41.781,11.226 41.052,10.497 40.166,10.497C39.738,10.497 39.327,10.667 39.024,10.97L36.74,13.255C36.437,13.558 36.267,13.969 36.267,14.397C36.267,15.283 36.996,16.012 37.882,16.012C38.31,16.012 38.721,15.842 39.024,15.539L39.024,15.538ZM13.9,36.1L11.616,38.384C11.312,38.687 11.142,39.099 11.142,39.528C11.142,40.415 11.871,41.144 12.758,41.144C13.186,41.144 13.597,40.974 13.9,40.672L16.184,38.388C16.488,38.085 16.658,37.673 16.658,37.244C16.658,36.357 15.929,35.628 15.042,35.628C14.614,35.628 14.203,35.798 13.9,36.1ZM11.924,25.82C11.924,25.819 11.924,25.817 11.924,25.816C11.924,24.93 11.195,24.201 10.309,24.2L7.078,24.2C6.192,24.2 5.463,24.929 5.463,25.816C5.463,26.702 6.192,27.431 7.078,27.431L10.309,27.431C11.194,27.432 11.922,26.705 11.924,25.82ZM45.848,24.2L42.617,24.2C41.731,24.2 41.002,24.929 41.002,25.816C41.002,26.702 41.731,27.431 42.617,27.431L45.848,27.431C46.734,27.431 47.463,26.702 47.463,25.815C47.463,24.929 46.734,24.2 45.848,24.2ZM13.9,15.539C14.203,15.842 14.614,16.012 15.042,16.012C15.928,16.012 16.657,15.283 16.657,14.397C16.657,13.969 16.487,13.558 16.184,13.255L13.9,10.97C13.597,10.667 13.186,10.497 12.758,10.497C11.872,10.497 11.143,11.226 11.143,12.112C11.143,12.54 11.313,12.951 11.616,13.254L13.9,15.539ZM39.028,36.1C38.725,35.797 38.314,35.627 37.886,35.627C37,35.627 36.271,36.356 36.271,37.242C36.271,37.67 36.441,38.081 36.744,38.384L39.028,40.668C39.331,40.971 39.742,41.141 40.17,41.141C41.056,41.141 41.785,40.412 41.785,39.526C41.785,39.098 41.615,38.687 41.312,38.384L39.028,36.1Z" style="fill:rgb(30,30,30);fill-rule:nonzero;"/>
    </g>
</svg>`;
  }

})

function disableInspect() {
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  })
}

//Disable Right Click
//disableInspect();

add.addEventListener("click", () => {
  addTask();
})

function addTask() {

  let taskInput = document.querySelector("input");
  let task = taskInput.value.trim();

  if (task !== "") {

    if (taskArr.includes(task.toUpperCase())) {
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
    taskInput.value = "";
    taskInput.placeholder = "Add more tasks";
    taskArr.push(task.toUpperCase());

    // Increase the value of added task
    totalTask++;
    document.getElementById("totalTask").innerHTML = totalTask;
  }

  else {
    taskInput.placeholder = "Task not added, enter a task.";
  }



  // To add task buttons
  taskBtns();
}

reset.addEventListener("click", () => {
  document.querySelector("input").value = "";
})


function taskBtns() {
  let tasks = document.getElementsByClassName("list-style");

  for (let i = 0; i < tasks.length; i++) {
    let innerDiv2 = tasks[i].querySelector('.innerDiv2');

    if (!innerDiv2) {
      innerDiv2 = document.createElement("div");
      innerDiv2.classList.add("innerDiv2","form-check","form-switch");
      tasks[i].append(innerDiv2);
    }

    compBtn = innerDiv2.querySelector('.compBtn');
    delBtn = innerDiv2.querySelector('.delBtn');

      // innerDiv2.append(checkbox);
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'flexSwitchCheckChecked';
      checkbox.role='switch';
      checkbox.classList.add('form-check-input');

      const label = document.createElement('label');
      label.classList.add("form-check-label")
      label.htmlFor = 'flexSwitchCheckChecked';
      label.appendChild(document.createTextNode('Completed'));
      innerDiv2.append(checkbox);
      innerDiv2.append(label)
    

    if (!compBtn) {
      compBtn = document.createElement("button");
      compBtn.classList.add("compBtn");
      compBtn.innerHTML = `<svg width="48" height="48" viewBox="0 0 68 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="34" cy="28" rx="25.5" ry="21" fill="#7E869E" fill-opacity="0.25" stroke="#222222" stroke-width="1.2"/>
        <path d="M22.6667 28L31.1667 35L45.3333 21" stroke="#222222" stroke-width="1.2"/>
        </svg>`;
      innerDiv2.append(compBtn);
      compObj.CompBtn = false;
    }

    if (!delBtn) {
      delBtn = document.createElement("button");
      delBtn.classList.add("delBtn");
      delBtn.innerHTML = `<svg width="48" height="48" viewBox="0 0 66 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 36.25L27.5 29" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
<path d="M38.5 36.25L38.5 29" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
<path d="M8.25 16.9167H57.75H53.5C51.6144 16.9167 50.6716 16.9167 50.0858 17.5025C49.5 18.0882 49.5 19.0311 49.5 20.9167V44.3333C49.5 46.219 49.5 47.1618 48.9142 47.7475C48.3284 48.3333 47.3856 48.3333 45.5 48.3333H20.5C18.6144 48.3333 17.6716 48.3333 17.0858 47.7475C16.5 47.1618 16.5 46.219 16.5 44.3333V20.9167C16.5 19.0311 16.5 18.0882 15.9142 17.5025C15.3284 16.9167 14.3856 16.9167 12.5 16.9167H8.25Z" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
<path d="M27.6874 8.14559C28.0008 7.88866 28.6913 7.66163 29.6518 7.4997C30.6124 7.33777 31.7893 7.25 33 7.25C34.2107 7.25 35.3876 7.33777 36.3482 7.4997C37.3087 7.66163 37.9992 7.88866 38.3126 8.14559" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
</svg>`;
      innerDiv2.append(delBtn);
    }
  }


  // Task buttons functions
  markComplete();
  delTask();

}

function markComplete() {
  // let compBtn=document.querySelectorAll(".compBtn")
  if (!compBtn) {
    return;
  }
  else {
    compBtn.addEventListener("click", () => {
      console.log("Task Completed")
      taskCompleted++;
      document.getElementById("taskCompleted").innerHTML = taskCompleted;
    })
  }
}

function delTask() {
  let delBtns = document.querySelectorAll(".delBtn");
  if (!delBtn) {
    return;
  }
  else {
    for (let i = 0; i < delBtn.length; i++) {
      delBtn[i].addEventListener("click", () => {
        console.log(delBtn[i]);
      })
    }
  }
}
