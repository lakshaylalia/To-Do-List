let body = document.querySelector("body");
let add = document.getElementById("addBtn")
let reset = document.getElementById("resetBtn")
let theme = document.getElementById("themeBtn");
let totalTask = parseInt(document.getElementById("totalTask").innerHTML);
let taskCompleted = parseInt(document.getElementById("taskCompleted").innerHTML);
// let compBtn, delBtn;
let checkbox;


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

// Disable Right Click
// disableInspect();

add.addEventListener("click", () => {
  addTask();
})


reset.addEventListener("click", () => {
  document.querySelector("input").value = "";
})



function addTask() {
  let taskInput = document.querySelector("#taskBox");
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
    innerDiv2.classList.add("innerDiv2", "form-check", "form-switch");

    list.append(li);
    li.append(innerDiv1);
    li.append(innerDiv2);
    li.classList.add("list-style");
    taskInput.value = "";
    taskInput.placeholder = "Add more tasks";
    taskArr.push(task.toLowerCase());  // Store in lowercase
    localStorage.setItem("tasks", JSON.stringify(taskArr));  // Save to localStorage



    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'flexSwitchCheck' + taskArr.length;
    checkbox.role = 'switch';
    checkbox.classList.add('form-check-input');
    innerDiv2.append(checkbox);


    checkbox.addEventListener('change', handleCheckboxChange);


    totalTask++;
    document.getElementById("totalTask").innerHTML = totalTask;
    localStorage.setItem("totalTask", totalTask);
  } else {
    taskInput.placeholder = "Task not added, enter a task.";
  }
}



const checkboxes = document.querySelectorAll('.form-check-input');


function handleCheckboxChange(event) {

  if (event.target.checked) {
    let taskElement = event.target.parentElement.previousElementSibling;
    let removedTask = event.target.parentElement.previousElementSibling.innerText.toUpperCase().trim();
    taskElement.innerText = "Task Completed";
    setTimeout(async () => {
      let removeIdx = taskArr.indexOf(`${removedTask}`)
      taskArr.splice(removeIdx, 1);
      localStorage.setItem("tasks", JSON.stringify(taskArr));
      event.target.parentElement.parentElement.remove();
    }, 800)
    taskCompleted++;
    document.getElementById("taskCompleted").innerHTML = taskCompleted;
    localStorage.setItem("taskCompleted", taskCompleted);
  }

}


checkboxes.forEach(checkbox => checkbox.addEventListener('change', handleCheckboxChange));

window.onload = function () {
  taskArr = JSON.parse(localStorage.getItem("tasks")) || [];
  totalTask = parseInt(localStorage.getItem("totalTask")) || 0;  
  taskCompleted = parseInt(localStorage.getItem("taskCompleted")) || 0;  
  
  document.getElementById("totalTask").innerHTML = totalTask; 
  document.getElementById("taskCompleted").innerHTML = taskCompleted; 

  // Render tasks
  taskArr.forEach((task, index) => {
    let list = document.getElementById("ul");
    let li = document.createElement("li");
    let innerDiv1 = document.createElement("div");
    let innerDiv2 = document.createElement("div");

    innerDiv1.classList.add("innerDiv1");
    innerDiv1.innerText = task;
    innerDiv2.classList.add("innerDiv2", "form-check", "form-switch");

    list.append(li);
    li.append(innerDiv1);
    li.append(innerDiv2);
    li.classList.add("list-style");

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'flexSwitchCheck' + index;  
    checkbox.role = 'switch';
    checkbox.classList.add('form-check-input');
    innerDiv2.append(checkbox);

    checkbox.addEventListener('change', handleCheckboxChange);
  });
};

