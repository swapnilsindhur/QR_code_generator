

document.querySelector(".btn").addEventListener("click",(event)=>{
    let data = document.querySelector(".inp").value
    let img = document.querySelector("img")
    img.style.display = "block"
    if(data == "") {
        img.src="invalid.jpg"
        document.querySelector(".content").style.transition = "height 0.1s"
        // data.classList.add("error");
    }
    else{
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`
        document.querySelector(".content").style.transition = "height 0.3s"
    }
    document.querySelector(".content").style.height = "50%"
    document.querySelector(".inp").style.height = "10%"
    document.querySelector(".btn").style.height = "10%"
})