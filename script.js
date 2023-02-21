// ====dark mode =====
       const mode_btn = document.querySelector(".mode-btn");
       const move_btn = document.querySelector(".move-btn");
       const mode_icon = document.querySelector("#mode-icon");
       const body = document.querySelector("body");
       
       mode_btn.addEventListener("click", () =>{
           move_btn.classList.toggle("active");
           mode_icon.classList.toggle("ri-sun-line");
           body.classList.toggle("light-theme");
       })




// ====navbar =====
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const navItem1 = document.querySelector(".nav-item1")
    // const navItem2 = document.querySelector(".nav-item2")
    const navItem3 = document.querySelector(".nav-item3")
    const navItem4 = document.querySelector(".nav-item4")
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
    }
    cancelBtn.onclick = ()=>{
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    navItem1.onclick =()=>{
        navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    // navItem2.onclick =()=>{
    //     navbar.classList.remove("show");
    //   menuBtn.classList.remove("hide");
    // }
    navItem3.onclick =()=>{
        navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    navItem4.onclick =()=>{
        navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
