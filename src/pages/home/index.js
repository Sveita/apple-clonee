const homeCard = (arr) => {
    return 
    `
    <div class="flex flex-col gap-5 mt-5 lg:grid grid-cols-2">
        ${arr.map((item) => {
            return 
            `
            <div class="md:h-[700px] h-[500px] ${arr.bgColor} overflow-hidden">
            <div class="w-full">
                <div class="flex pt-12 pb-2 justify-center mx-auto">
                <img
                    class="w-9 h-9 mr-2"
                    src="${arr.apple}"
                    alt=""/>
                <h1 class="text-4xl nunito font-medium ${arr.titleColor}">${arr.title}</h1>
                </div>
                <li
                class="text-base nunito mx-auto text-center text-red-600 list-none font-extralight pb-2">
                ${arr.extra}
                </li>
                <li
                class="text-xl md:text-2xl nunito mx-auto text-center ${arr.contentColor} list-none font-extralight pb-4">
                ${arr.content}
                </li>
            </div>
            <div class="flex justify-center gap-6">
                <button
                class="bg-[#0071e3] text-white py-2 px-5 rounded-full text-base nunito hover:bg-[#519de9]">
                ${arr.blueBtn}
                </button>
                <button
                class="text-[#0071e3] py-2 px-5 rounded-full text-base nunito hover:bg-[#0071e3] border-[#0071e3] border-2 hover:text-white">
                ${arr.whiteBtn}
                </button>
            </div>
            <img
                class="w-full h-full object-cover"
                src="${arr.image}"
                alt=""/>
            </div>    
        `;}).join(" ")}
    </div> 
    `;
};

const homeArray = [
{
    bgColor : "bg-[#f5f5f6]",
    apple : " ",
    titleColor : " ",
    title : " ",
    extra : " ",
    contentColor : " ",
    content : " ",
    blueBtn : " ",
    whiteBtn : " ",
    image : "../image/homepage/version pro .jpeg"
},
// 2
{
    bgColor : "bg-[#f5f5f6]",
    apple : " ",
    titleColor : "text-[#000000] ",
    title : " MacBook Air",
    extra : " ",
    contentColor : "text-[#000000] ",
    content : " Lean. Mean. M3 machine.",
    blueBtn : " Learn more",
    whiteBtn : "Buy ",
    image : "../image/homepage/macbook 5.png"
},
// 3
{
    bgColor : " ",
    apple : " ",
    titleColor : " ",
    title : " ",
    extra : " ",
    contentColor : " ",
    content : " ",
    blueBtn : "Learn more",
    whiteBtn : "Buy",
    image : " "
},
// 4
{
    bgColor : " ",
    apple : " ",
    titleColor : " ",
    title : " ",
    extra : " ",
    contentColor : " ",
    content : " ",
    blueBtn : "Learn more",
    whiteBtn : "Buy",
    image : " "
},
// 5
{
    bgColor : " ",
    apple : " ",
    titleColor : " ",
    title : " ",
    extra : " ",
    contentColor : " ",
    content : " ",
    blueBtn : "Learn more",
    whiteBtn : "Buy",
    image : " "
},
// 6
{
    bgColor : " ",
    apple : " ",
    titleColor : " ",
    title : " ",
    extra : " ",
    contentColor : " ",
    content : " ",
    blueBtn : "Learn more",
    whiteBtn : "Buy",
    image : " "
},
]