var fileInput= document.querySelector("#fileInput");
var browseBtn= document.querySelector(".browseBtn");
const host = "https://filessharingapp.herokuapp.com/";
const uploadURL = `${host}api/files`;
fileInput.addEventListener("change", ()=>{
    uploadFile()
});
browseBtn.addEventListener("click",()=>{
    fileInput.click()
});

const uploadFile = ()=>{
    const file = fileInput.files[0];
    const formData = new FormData()
    formData.append("mfiles",file)

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState=== XMLHttpRequest.DONE){
            console.log(xhr.response);
        }
    };
    xhr.open("POST",uploadURL);
    xhr.send(formData)
};
