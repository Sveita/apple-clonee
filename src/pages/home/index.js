const column = (arr) => {
    return `
    <div class="md:h-[700px] h-[500px] ${bgColor} overflow-hidden">
        <div class="w-full">
            <div class="flex pt-12 pb-2 justify-center mx-auto">
            <img
                class="w-9 h-9 mr-2"
                src="${appleLogo}"
                alt=""
            />
            <h1 class="text-4xl nunito font-medium ${textColor}">${title}</h1>
            </div>
            ${extraText}
            <li
            class="text-xl md:text-2xl nunito mx-auto text-center ${textExtraColor} list-none font-extralight pb-4"
            >
            ${text}
            </li>
        </div>
        <div class="flex justify-center gap-6">
            <button
            class="bg-[#3B82F6] text-[#ffffff] py-2 px-5 rounded-full text-base nunito hover:bg-[#3B82F6]"
            >
            ${button}
            </button>
            <button
            class="text-[#3B82F6] py-2 px-5 rounded-full text-base nunito hover:bg-[#3B82F6] border-[#3B82F6] border-2 hover:text-[#ffffff]"
            >
            ${button2}
            </button>
        </div>
        <img
            class="w-full h-full object-cover"
            src="${image}"
            alt=""
        />
    </div>
    `
}

const columnArr = [{
    bgColor : "bg-[#f5f5f6]",
    textColor : "text-[#000000]",
    image : "../../image/homepage/macbook 5.png",
    button : "Learn more",
    button2 : "Buy", 
},
{
    appleLogo : "../../image/homepage/apple (3).png",
    title : "WATCH",
    bgColor : "bg-[#000000]",
    textColor : "text-[#000000]" ,
    textExtraColor : "text-[#EF4444]",
    extraTextext : "SERIES 9" ,
    text : "smarter. Brighter. Mightier"
    button : "Learn more",
    button2 : "Buy",
    image : "../../image/homepage/macbook 5.png"
},
{
    appleLogo : "../../image/homepage/apple (3).png",
    title : "MacBook Air",
    bgColor : "bg-[#fbfbfb]",
    textColor : "text-[#000000]" ,
    text : "Lean. Mean. M3 machine.",
    button : "Learn more",
    button2 : "Buy",
    image : "../../image/homepage/ipad 7.png"
},
{
    appleLogo : "../../image/homepage/apple (3).png",
    title : "Card",
    text : "Get up to 3% Dialy cash back with every purchase.",
    bgColor : "bg-[#fbfbfb]",
    textColor : "text-[#000000]" ,
    button : "Learn more",
    button2 : "Buy",
    image : "../../image/homepage/card 8.png"
}]

class cardDesign extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = column(columnArr);
    }
}
customElements.define("columns-content", Column)