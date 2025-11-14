//your JS code here. If required.
const removeBtn=document.querySelector("input[type=button]");
const colorSelect=document.querySelector("#colorSelect");

removeBtn.addEventListener("click",()=>{
	const selectedIndex=colorSelect.selectedIndex;
	if(selectedIndex!==-1){
		colorSelect.remove(selectedIndex)
	}
})