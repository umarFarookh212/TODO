let root = document.querySelector("#root");
let input = document.querySelector("#input");

let todos = [];

let add = () => {
  let value = input.value;
  if (value === "") {
    alert("Please Enter TODO VAlue");
    exit;
  }
  // else if (value == value) {
  //   alert("enter another value");
  //   exit;
  // }
  todos.push({
    text: value,
    done: false,
  });
  refresh();
};

let refresh = () => {
  clean();
  let newData = todos.map((x, idx) => {
    return render(x, idx);
  });
  let data = newData.join("");
  root.innerHTML += data;
};

let render = (todo, idx) => {
  return `
  <li class="list-group-item list-group-item-action">
    ${todo.text}
    (${todo.done ? "Done" : "Not Done"}),
    <br>
    <button class="btn btn-primary disable">Task No: ${idx} </button>
    <button class="btn btn-outline-info btn-md" onclick="done(${idx})">Done</button>
    <button class="btn btn-outline-danger btn-md" onclick="del()">Del</button>
    </li>
  `;
};
let clean = () => {
  root.innerHTML = "";
};

let done = (idx) => {
  todos[idx].done = !todos[idx].done;
  refresh();
};
let del = (idx) => {
  todos.splice(idx, 1);
  refresh();
};
