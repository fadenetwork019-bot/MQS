// MQA.DEV Team Page Script

document.addEventListener("DOMContentLoaded",()=>{

    // Image Load Check
    document.querySelectorAll("img").forEach(img=>{
        img.addEventListener("error",()=>{
            img.src="https://via.placeholder.com/300x300?text=No+Image";
        });
    });


    // Scroll Reveal Animation
    const items=document.querySelectorAll(".reveal");

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:.15
    });


    items.forEach(item=>{
        observer.observe(item);
    });



    // Team Card Hover Effect
    const cards=document.querySelectorAll(".team-card");

    cards.forEach(card=>{

        card.addEventListener("mousemove",e=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;
            const y=e.clientY-rect.top;

            card.style.setProperty("--x",x+"px");
            card.style.setProperty("--y",y+"px");

        });


        card.addEventListener("mouseleave",()=>{

            card.style.setProperty("--x","50%");
            card.style.setProperty("--y","50%");

        });

    });



    // Current Year
    const year=document.getElementById("year");

    if(year){
        year.textContent=new Date().getFullYear();
    }


});