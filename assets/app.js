const fileInput = document.getElementById('file-input');
const previewImage = document.getElementById('preview-image');
const previewImageCover = document.querySelector('.priviewImageCover');
const uploadIcon = document.getElementById('upload-icon');
let fileCoverSpan = document.querySelector('.fileCover span')
const uploadText = document.getElementById('upload-text');
const inputsCover1 = document.querySelector('.inputsCover1');
const formButton = document.querySelector('.formButton');
const formSection = document.querySelector('.form');




// inputs
let changeImage = false;
let setImage = false;

let dynaImg = document.querySelector(".dynaImg")

const setImageHandler = (file) => {
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Set the preview image source
            if (e.target.result == e.target.result) {
                previewImage.src = e.target.result;
                dynaImg.src = e.target.result;
            } else {
                previewImage.src = e.target.result;
                dynaImg.src = e.target.result;
            }
            previewImage.style.display = 'block';
            previewImageCover.style.display = 'flex';
            // Hide the icon and text
            uploadIcon.style.display = 'none';
            fileCoverSpan.style.display = 'none';
            inputsCover1.style.border = "1px solid white";
            inputsCover1.style.padding = "2px";
            uploadText.style.display = 'none';
        };
        reader.readAsDataURL(file);
    } else {
        // Reset if no file is selected
        console.log("poka")
        previewImage.style.display = 'none';
        previewImageCover.style.display = 'none';
        uploadIcon.style.display = 'block';
        uploadText.style.display = 'block';
    }
}

let fileStore = "";

fileInput.addEventListener('change', function () {
    let file = this.files[0];
    setImageHandler(file)
    fileStore = file;
});

const removeImageHandler = () => {
    // Reset the preview image
    previewImage.src = "";
    previewImage.style.display = 'none';
    previewImageCover.style.display = 'none';
    
    // Show the icon and text
    uploadIcon.style.display = 'flex';
    fileCoverSpan.style.display = 'block';
    inputsCover1.style.border = "1px solid white";
    inputsCover1.style.padding = "2px";
    uploadText.style.display = 'flex';

    // Reset file input value
    fileInput.value = "";
};

const changeImageHandler = () => {
    // Open file selection dialog again
    fileInput.click();
};


// add this tags in future
let tagLineEmail = document.querySelector(".tagLineEmail")
let dynamicImage = document.querySelector(".dynamicImage")
let Name = document.querySelector(".Name")
let email = document.querySelector(".email")
let mainHead = document.querySelector(".mainHead")
let emailspan = document.querySelector(".emailspan")

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

formButton.addEventListener("click", () => {
    let fileInput = document.getElementById("file-input").value;
    let fname = document.querySelector(".fname").value;
    let email = document.querySelector(".email").value;
    let gitName = document.querySelector(".gitName").value;
    let firstError = document.querySelector(".firstError");
    let emailError = document.querySelector(".emailError");
    let gitNameError = document.querySelector(".gitNameError");
    let generateTicket = document.querySelector(".generateTicket")
    let ticketEmailedLine = document.querySelector(".ticketEmailedLine")
    let tagLine = document.querySelector(".tagLine")
    let ticketNumber = document.querySelector(".ticketNumber")

    if (!fileInput) {
        // alert("not")
        fileCoverSpan.innerText = "this field is required";
        fileCoverSpan.style.color = "hsl(7, 71%, 60%)";
        // firstError.classList.remove('none')
    } else {
        // console.log("ok")
    }
    if (!fname) {
        // alert("not")
        firstError.innerText = "this field is required";
        firstError.style.color = "hsl(7, 71%, 60%)";
        // firstError.classList.remove('none')
    } else {
        firstError.innerText = "";
        console.log("ok")
    }

    if (!email) {
        emailError.innerText = "this field is required"
    }
    else if (!isValidEmail(email)) {
        emailError.innerText = "please enter a valid email address"
        // alert("email is correct")
    } else {
        emailError.innerText = ""
    }

    if (!gitName) {
        gitNameError.innerText = "this field is required"

    } else {
        gitNameError.innerText = ""

    }
    if (fileInput && fname && email && gitName) {
        formSection.classList.add("none")
        generateTicket.classList.remove("none")
        ticketEmailedLine.classList.remove("none")
        tagLine.classList.add("none")
        tagLineEmail.innerText = email;
        ticketNumber.innerText = Math.floor(100000 + Math.random() * 900000 );
        emailspan.innerText = email;
        Name.innerText = fname;
       mainHead.innerHTML = `Congrats, <span class="forHeadName">${fname}</span>! Your ticket is ready.`
    }

   


})

// function latisFunc(){
    
  
// }