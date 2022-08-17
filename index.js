var fileInput= document.querySelector("#fileInput");
var browseBtn= document.querySelector(".browseBtn");

const fileURLInput = document.querySelector("#fileURL");
const sharingContainer = document.querySelector(".sharing-container");
const progressBar = document.querySelector(".progress-bar");
const percentDiv = document.querySelector("#percent");
const copyBtn = document.querySelector("#copyBtn");
const progressContainer = document.querySelector(".progress-container");
const host = "https://filessharingapp.herokuapp.com/";
const uploadURL = `${host}api/files`;
fileInput.addEventListener("change", ()=>{
    uploadFile();
});
browseBtn.addEventListener("click",()=>{
    fileInput.click();
});

copyBtn.addEventListener("click", ()=>{
    fileURLInput.select();
    document.execCommand("copy")
});
const uploadFile = ()=>{
    progressContainer.style.display = "block";
    const file = fileInput.files[0];
    const formData = new FormData()
    formData.append("myfiles",file)

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState=== XMLHttpRequest.DONE){
            console.log(xhr.response);
            showLink(JSON.parse(xhr.response));
        }
    };

    xhr.upload.onprogress= updateProgress;
    xhr.open("POST",uploadURL);
    xhr.send(formData);
};
const updateProgress = (e)=>{
    const percent = Math.round((e.loaded/ e.total) * 100);
    progressBar.style.transform = `scaleX(${percent/100})`;
    percentDiv.innerText = percent;
};

const showLink = ({file : url})=>{
    console.log(url);
    progressContainer.style.display = "none"
    sharingContainer.style.display = "block"
    fileURLInput.value = url;
}