const login_btn = document.querySelector("#loginbtn");
const tooltip = document.querySelector("#tooltip");

// Pass the button, the tooltip, and some options, and Popper will do the
// magic positioning for you:
Popper.createPopper(login_btn, tooltip, {
  placement: "right",
});
