const but = document.querySelector("button");
const shadow = document.querySelector(".shadow");

but.addEventListener("mouseover", shadowgrow);
but.addEventListener("mouseout", shadowshrink);
function shadowgrow() {
  shadow.style = "width:450px; height:450px;";
}
function shadowshrink() {
  shadow.style = "width:274px;height:274px";
}
