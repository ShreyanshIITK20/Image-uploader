const dropZone = document.querySelector('.imagecol')
const newImageUrl = localStorage.getItem("new-image")
$('#finalimage').attr('src',newImageUrl)

dropZone.addEventListener("dragover",(ev)=>{
    ev.preventDefault()
    dropZone.classList.add("active")
})

dropZone.addEventListener("dragleave",(ev)=>{
    ev.preventDefault()
    dropZone.classList.remove("active")
})

function uploadImg(image){
    let filetype = image.type
    let validFiles = ["image/jpg","image/png","image/jpeg"]

    if (validFiles.includes(filetype)){                                         //successfully dropped an image file only
        console.log("valid file")
        let fileReader = new FileReader()
        fileReader.onload = ()=>{
            let url = fileReader.result;

            if(localStorage.getItem("new-image")===url){
                localStorage.clear()
            } else{
            localStorage.setItem("new-image",url)
            $('.dropbutton').click()
            }
        }
        fileReader.readAsDataURL(image)
    }
    else alert("Please upload only .jpg/.jpeg/.png files")
}

dropZone.addEventListener("drop",(event)=>{
    event.preventDefault();
    console.log("dropped");
    
    var image = event.dataTransfer.files[0]
    uploadImg(image);
})

$('#file_input').change((ev)=>{
    
    var image = ev.target.files[0]
    uploadImg(image)
})

var imageLink = $('#finalimage').attr('src')
$('.linkbox .link').html(imageLink)
$('.linkbox button').click(()=>{
    console.log("clicked")
    navigator.clipboard.writeText(imageLink);
})


