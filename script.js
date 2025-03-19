const container = document.querySelector("#container");

// 添加按钮
document.getElementById("add").addEventListener("click", () => {
  const newBox = document.createElement("div")
  newBox.classList.add("box")
  container.appendChild(newBox)
})

// 移除按钮
document.getElementById("remove").addEventListener("click", () => {
  if (!container.children.length) return;
  container.removeChild(container.children[0])
})

// 清空按钮
document.getElementById("clear").addEventListener("click", () => {
  while(container.children.length > 0) {
    container.removeChild(container.children[0])
  }
})

// 设置flex的启用
document.getElementById("set-flex").addEventListener("change", (event) => {
  let newFlex = event.target.value;
  if (newFlex == "flex") {
    container.classList.add("flex")
  } else if (newFlex == "block") {
    container.classList.remove("flex")
  }
})

// 设置flex是否换行
document.getElementById("set-wrap").addEventListener("change", (event) => {
  let wrapType = event.target.value;
  console.log(wrapType);
  
  if (wrapType == "wrap") {
    container.classList.remove("no-wrap")
    container.classList.remove("wrap-reverse")
    container.classList.add("wrap")
  } else if (wrapType == "no-wrap") {
    container.classList.remove("wrap")
    container.classList.remove("wrap-reverse")
    container.classList.add("no-wrap")
  } else if (wrapType = "wrap-reverse") {
    container.classList.remove("no-wrap")
    container.classList.remove("wrap")
    container.classList.add("wrap-reverse")
  }
})

// 设置flex的方向
document.getElementById("flex-direction").addEventListener("change", (event) => {
  let newDirection = event.target.value;
  container.style.flexDirection = `${newDirection}`;
})

// 设置gap
document.getElementById("gap").addEventListener("input", event => {
  container.style.gap = `${event.target.value}px`;
})