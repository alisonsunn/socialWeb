export function activeMessage() {
  const messages = document.querySelectorAll(".function-panel span");
  messages.forEach(item => {
    item.addEventListener("click", ()=>{
      messages.forEach(span=>span.classList.remove("active"));
      item.classList.add('active');
    })
  })
}