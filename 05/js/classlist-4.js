const title = document.querySelector("#title");
const userName = document.querySelector("#desc .user");

title.onclick = () => {
  title.classList.toggle("clicked");  
}
userName.onclick = () => {
  userName.classList.toggle("blue-italic");
}
