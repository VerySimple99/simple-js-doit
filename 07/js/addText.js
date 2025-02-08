const orderBtn=document.querySelector("#order");
const orderInfo=document.querySelector("#orderInfo");
const title=document.querySelector("#container > h2");

orderBtn.addEventListener("click",()=>{
  let newP = document.createElement("P");
  let textNode=document.createTextNode(title.innerText);
  newP.appendChild(textNode);
  orderInfo.appendChild(newP);
},{once:true});