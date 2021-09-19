$('.filebutton').click(()=>{                                                //targeting button click to launch the hidden input 
    $('#file_input').click()
})

const dropZone = document.querySelector('.imagecol')
let image;

dropZone.addEventListener("dragover",(ev)=>{
    ev.preventDefault()
    dropZone.classList.add("active")
})

dropZone.addEventListener("dragleave",(ev)=>{
    ev.preventDefault()
    dropZone.classList.remove("active")
})

dropZone.addEventListener("drop",(event)=>{
    event.preventDefault();
    console.log("dropped");
    
    image = event.dataTransfer.files[0]
    console.log(image)

    let filetype = image.type
    let validFiles = ["image/jpg","image/png","image/jpeg"]

    if (validFiles.includes(filetype)){                                         //successfully dropped an image file only
        console.log("valid file")
        
    }
    else alert("Please upload only .jpg/.jpeg/.png files")
})

