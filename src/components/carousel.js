const carouselElement = (arr) => {
    return `    
    <div  id="slider" class="flex w-12/12 lg:overflow-x-hidden overflow-x-scroll  mx-auto px-4 items-center gap-8 pb-10 mb-20 pt-10 cursor-pointer group">
        ${arr.map((item) => {
            return `
            <div class="">
            <div class="xl:h-[750px] xl:w-[400px] h-[600px] w-[300px] duration-500 rounded-3xl overflow-hidden relative shadow-xl hover:scale-[102%] " >
                <div class="absolute ml-8 mt-14 text-[#ffffff]">
                    <h6 class="text-[17px] font-medium ">${item.header}</h6>
                    <h2 class="text-2xl font-medium">${item.content}</h2>
                </div>
                <img class="w-full h-full" src="${item.image}" alt="">
                <div class="absolute bottom-4 right-4 ">
                    <img class="w-8 " src="../../image/mac/plus.png" alt="">
                </div>
            </div>
            </div>`;
        }).join("")}     
    </div>
  
`;
};

const carouselArray = [{
    item
}]