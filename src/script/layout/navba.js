


const navba= document.querySelector(".navbar");
fetch("../component/layout/navba.html")
    .then((res) => res.text())
    .then((data) => {
        navba.innerHTML = data;

        let menuBtn = document.querySelector("#menu-btn");
        let menuContainer = document.querySelector("#menu-container");
        let listContainer = document.querySelector("#list-container");

        function Menu(e) {
        e.name = e.name === 'menu' ? 'close' : 'menu';
        menuBtn.addEventListener("click", () => {
            setTimeout(() => {
            menuContainer.classList.toggle("h-[100vh]");
            menuContainer.classList.toggle("top-[0%]");
            }, 200); // Adjust the delay time (in milliseconds) as needed

            setTimeout(() => {
            listContainer.classList.toggle("opacity-100");
            listContainer.classList.toggle("invisible");
            }, 400); // Adjust the delay time (in milliseconds) as needed
        });
        
        }

        let store = document.getElementById('store')
        let storeContainer = document.getElementById('store-container')
        let blur = document.getElementById('blur-overlay')
        let mac = document.getElementById('mac')
        let macContainer = document.getElementById('mac-container')
        let ipad = document.getElementById('ipad')
        let ipadContainer = document.getElementById('ipad-container')
        let iphone = document.getElementById('iphone')
        let iphoneContainer = document.getElementById('iphone-container')
        let watch = document.getElementById('watch')
        let watchContainer = document.getElementById('watch-container')
        let vision = document.getElementById('vision')
        let visionContainer = document.getElementById('vision-container')
        let airpods = document.getElementById('airpods')
        let airpodsContainer = document.getElementById('airpods-container')
        let tv = document.getElementById('tv-home')
        let tvContainer = document.getElementById('tv-container')
        let entertainment = document.getElementById('entertainment')
        let entertainmentContainer = document.getElementById('entertainment-container')
        let accessories = document.getElementById('accessories')
        let accessoriesContainer = document.getElementById('accessories-container')
        let support = document.getElementById('support')
        let supportContainer = document.getElementById('support-container')
        // store
        store.addEventListener('mouseenter', () => {
        storeContainer.classList.remove("top-[-100%]")
        storeContainer.classList.add('top-[56px]')
        blur.classList.remove('opacity-0')
        blur.classList.add('opacity-100')
        });

        storeContainer.addEventListener('mouseleave', () => {
        storeContainer.classList.add("top-[-100%]")
        storeContainer.classList.remove('top-[56px]')
        blur.classList.add('opacity-0')
        blur.classList.remove('opacity-100')
        })

        // mac
        mac.addEventListener('mouseenter', () => {
        macContainer.classList.remove("top-[-100%]")
        macContainer.classList.add('top-[56px]')
        blur.classList.remove('opacity-0')
        blur.classList.add('opacity-100')
        });

        macContainer.addEventListener('mouseleave', () => {
        macContainer.classList.add("top-[-100%]")
        macContainer.classList.remove('top-[56px]')
        blur.classList.add('opacity-0')
        blur.classList.remove('opacity-100')
        })

        //  ipad
        ipad.addEventListener('mouseenter', () => {
        ipadContainer.classList.remove("top-[-100%]")
        ipadContainer.classList.add('top-[56px]')
        blur.classList.remove('opacity-0')
        blur.classList.add('opacity-100')
        });

        ipadContainer.addEventListener('mouseleave', () => {
        ipadContainer.classList.add("top-[-100%]")
        ipadContainer.classList.remove('top-[56px]')
        blur.classList.add('opacity-0')
        blur.classList.remove('opacity-100')
        })

        //  iphone
        iphone.addEventListener('mouseenter', () => {
        iphone.classList.remove("top-[-100%]")
        iphoneContainer.classList.add('top-[56px]')
        blur.classList.remove('opacity-0')
        blur.classList.add('opacity-100')
        });

        iphoneContainer.addEventListener('mouseleave', () => {
        iphoneContainer.classList.add("top-[-100%]")
        iphoneContainer.classList.remove('top-[56px]')
        blur.classList.add('opacity-0')
        blur.classList.remove('opacity-100')
        })


        // watch
        watch.addEventListener('mouseenter', () => {
        watchContainer.classList.remove("top-[-100%]")
        watchContainer.classList.add('top-[56px]')
        blur.classList.remove('opacity-0')
        blur.classList.add('opacity-100')
        });

        watchContainer.addEventListener('mouseleave', () => {
        watchContainer.classList.add("top-[-100%]")
        watchContainer.classList.remove('top-[56px]')
        blur.classList.add('opacity-0')
        blur.classList.remove('opacity-100')
        })

        //  vision
        vision.addEventListener('mouseenter', () => {
        visionContainer.classList.remove("top-[-100%]")
        visionContainer.classList.add('top-[56px]')
        blur.classList.remove('opacity-0')
        blur.classList.add('opacity-100')
        });

        visionContainer.addEventListener('mouseleave', () => {
        visionContainer.classList.add("top-[-100%]")
        visionContainer.classList.remove('top-[56px]')
        blur.classList.add('opacity-0')
        blur.classList.remove('opacity-100')
        })

        //  airpods
        airpods.addEventListener('mouseenter', () => {
        airpodsContainer.classList.remove("top-[-100%]")
        airpodsContainer.classList.add('top-[56px]')
        blur.classList.remove('opacity-0')
        blur.classList.add('opacity-100')
        });

        airpodsContainer.addEventListener('mouseleave', () => {
        airpodsContainer.classList.add("top-[-100%]")
        airpodsContainer.classList.remove('top-[56px]')
        blur.classList.add('opacity-0')
        blur.classList.remove('opacity-100')
        })

        // tvs
        tv.addEventListener('mouseenter', () => {
        tvContainer.classList.remove("top-[-100%]")
        tvContainer.classList.add('top-[56px]')
        blur.classList.remove('opacity-0')
        blur.classList.add('opacity-100')
        });

        tvContainer.addEventListener('mouseleave', () => {
        tvContainer.classList.add("top-[-100%]")
        tvContainer.classList.remove('top-[56px]')
        blur.classList.add('opacity-0')
        blur.classList.remove('opacity-100')
        })

        //  enetertainment
        entertainment.addEventListener('mouseenter', () => {
        entertainmentContainer.classList.remove("top-[-100%]")
        entertainmentContainer.classList.add('top-[56px]')
        blur.classList.remove('opacity-0')
        blur.classList.add('opacity-100')
        });

        entertainmentContainer.addEventListener('mouseleave', () => {
        entertainmentContainer.classList.add("top-[-100%]")
        entertainmentContainer.classList.remove('top-[56px]')
        blur.classList.add('opacity-0')
        blur.classList.remove('opacity-100')
        })

        //  accesseries
        accessories.addEventListener('mouseenter', () => {
        accessoriesContainer.classList.remove("top-[-100%]")
        accessoriesContainer.classList.add('top-[56px]')
        blur.classList.remove('opacity-0')
        blur.classList.add('opacity-100')
        });

        accessoriesContainer.addEventListener('mouseleave', () => {
        accessoriesContainer.classList.add("top-[-100%]")
        accessoriesContainer.classList.remove('top-[56px]')
        blur.classList.add('opacity-0')
        blur.classList.remove('opacity-100')
        })

        //  support
        support.addEventListener('mouseenter', () => {
        supportContainer.classList.remove("top-[-100%]")
        supportContainer.classList.add('top-[56px]')
        blur.classList.remove('opacity-0')
        blur.classList.add('opacity-100')
        });

        supportContainer.addEventListener('mouseleave', () => {
        supportContainer.classList.add("top-[-100%]")
        supportContainer.classList.remove('top-[56px]')
        blur.classList.add('opacity-0')
        blur.classList.remove('opacity-100')
        })

    })
    .catch((error) => console.error("Error fetching included file:", error))
