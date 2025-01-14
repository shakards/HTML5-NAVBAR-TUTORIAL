window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    //removing arrow function
    setTimeout(function (){
        document.querySelector(".preloader").style.display="none";
    },1000)
})


// portfoli filter
const filterContainer=document.querySelector(".portfolio-filter"),
    filterBtns=filterContainer.children,
        totalFilterBtn=filterBtns.length,
        portfolioItems=document.querySelectorAll(".portfolio-item"),
        totalportfolioItem=portfolioItems.length;

        for(let i=0; i<totalFilterBtn; i++){
            filterBtns[i].addEventListener("click", function(){
                filterContainer.querySelector(".active").classList.remove("active");
                this.classList.add("active");
                
                const filterValue=this.getAttribute("data-filter");
                for (let k=0; k<totalportfolioItem; k++){
                    if (filterValue === portfolioItems[k].getAttribute("data-category")){
                        portfolioItems[k].classList.remove("hide");
                        portfolioItems[k].classList.add("show");
                         
                    }
                    else{
                        portfolioItems[k].classList.remove("show");
                        portfolioItems[k].classList.add("hide"); 
                    }
                }
            })
        }

        // Portfolio Lightbox
        const lightbox=document.querySelector(".lightbox"),
                lightboxImg=lightbox.querySelector(".lightbox-img"),
                lightboxClose=lightbox.querySelector(".lightbox-close"),
                lightboxText=lightbox.querySelector(".caption-text"),
                lightboxCounter=lightbox.querySelector(".caption-counter");
        let itemIndex=0;

        for ( let i=0; i<totalportfolioItem; i++){
            portfolioItems[i].addEventListener("click", function(){
                itemIndex=i;
                changeItem();
                toggleLightbox();
            })
        }

        function nextItem(){
            if (itemIndex === 0){
                itemIndex=totalportfolioItem-1;  
            }
            else{
                itemIndex++;
            }
            changeItem();
        }
        function nextItem(){
            if (itemIndex === 0){
                itemIndex=totalportfolioItem-1;  
            }
            else{
                itemIndex--;
            }
            changeItem();
        }

        function toggleLightbox(){
            lightbox.classList.toggle("open");
        }

        function changeItem(){
            imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
            lightboxImg.src=imgSrc;
            lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
            lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalportfolioItem;
        };

        // close Lightbox
        lightbox.addEventListener("click", function(event){
            if(event.target || event.target === lightbox){
                toggleLightbox();
            }
        })

        //   Aside Nav
        const nav=document.querySelector(".nav"),
                navList=nav.querySelectorAll("li"),
                totalNavList=navList.length,
                allSection=document.querySelectorAll(".section"),
                totalSection=allSection.length;

        for (let i=0; i<totalNavList; i++){
            const a=navList[i].querySelector("a")
            a.addEventListener("click", function(){
                // remove back section class
                removeBackSectionClass();

                for (let i=0; i<totalSection; i++){
                allSection[i].classList.remove("back-section");
            }

                for (let j=0; j<totalNavList; j++){
                    if(navList[j].querySelector("a").classList.contains("active")){
                        // add back section class
                        addBackSectionClass(j);
                    }
                    navList[j].querySelector("a").classList.remove("active")
                }
                this.classList.add("active"); 
                showSection(this);

                if(window.innerWidth < 1200){
                    asideSectionTogglerBtn();
                }
            })
        }

        function removeBackSectionClass(){
            for (let i=0; i<totalSection; i++){
                allSection[i].classList.remove("active");
            }
        }

        function addBackSectionClass(num){
            allSection[num].classList.add("back-section");
        }
        function showSection(element){
            for (let i=0; i<totalSection; i++){
                allSection[i].classList.remove("active");
            }
            const target=element.getAttribute("href").split("#")[1];
           document.querySelector("#"+target).classList.add("active")
        }

        function updateNav(element){
            for (let i=0; i<totalNavList; i++){
                navList[i].querySelector("a").classList.remove("active");
                const target=element.getAttribute("href").split("#")[1];
                if(navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                    navList[i].querySelector("a").classList.add("active");
                }
            }
        }

        document.querySelector(".hire-me").addEventListener("click",function(){
            const sectionIndex=this.getAttribute("data-section-index");
            //console.log(sectionIndex);
            showSection(this);
            updateNav(this);
            //removeBackSectionClass();
            //addBackSectionClass(sectionIndex);
        })


        const navToggleBtn=document.querySelector(".nav-toggle");
            aside=document.querySelector(".aside");

        navToggleBtn.addEventListener("click",asideSectionTogglerBtn)

        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navToggleBtn.classList.toggle("open");
            for (let i=0; i<totalSection; i++){
                allSection[i].classList.toggle("open");
        }
    }
    