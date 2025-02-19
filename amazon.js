let header_links = ['All', 'MX Player', 'Sell', 'Best Sellers', 'Mobiles', "Todays's Deals", 'Customer Service', 'Electronics', 'Amazon Pay', 'New Releases', 'Prime', 'Home & Kitchen', 'Fashion', 'Laptops']
let header_links_element = document.getElementById("header_links")

for (let i in header_links) {
    let span_element = document.createElement("span")
    span_element.textContent = header_links[i]
    span_element.classList.add("link_button")
    header_links_element.appendChild(span_element)
}


let product_data = [
    {
        product_img: "product_1.jpeg",
        title: "Basesailor Oneplus Original Fast 80W USB Type C Data Sync Fast Charging Charger Cable",
        price: "₹650.00",
        discount: "81%",
        MRP: "₹1999.00"
    },
    {
        product_img: "product_2.jpeg",
        title: "Kadence rosewood Guitar Frontier Series, Electric Acoustic Black Guitar With EQ, Die Cast Keys",
        price: "₹5,499.00",
        discount: "21%",
        MRP: "₹7,000.00"

    },
    {
        product_img: "product_3.jpeg",
        title: "Henrix 38C 38 Inch Cutaway Basswood Acoustic Guitar With Dual Action Truss Rod, Gigbag",
        price: "₹3,499.00",
        discount: "20%",
        MRP: "₹4,373.75"

    }
]

let product_section = document.getElementById("product_listing")
for (let index in product_data) {
    product_section.innerHTML += ` <div class="border-b-[1.5px] border-b-[#e1e0e1]">
                    <div class="flex w-full py-4 ">
                        <div class="w-[35%] sm:w-[30%] h-full flex justify-center items-center">
                            <img class="w-[135px] h-[135px] sm:w-[180px] sm:h-[180px]" src="${product_data[index].product_img}" alt="">
                        </div>
                        <div class="w-[65%] sm:w-[70%] flex flex-col lg:flex-row">
                            <div class="w-full lg:w-[80%] px-2 flex flex-col justify-around">
                                <div class="text-[12px] lg:text-[15px]">
                                ${product_data[index].title}
                                </div>
                                <span class="text-green-800 text-[12px]">In Stock</span>
    
                                <span class="text-[11px] font-semibold text-[#565858]">Eligible for FREE Shipping</span>
                                <img class="mt-1 h-[15px] w-[60px]" src="a_fulfilled.png">
                                <span class="flex items-center my-1 hover:cursor-pointer">
                                    <input type="checkbox" id="check_item_${index}" name="check_item" class="mr-1">
                                    <label for="check_item_${index}" class="hover:cursor-pointer text-[10px] font-light">This will be
                                        a gift</label><a href="#" class="ml-1 text-[#2c85c6] text-[10px]">Learn more</a>
                                </span>
                                <div class="w-full hidden lg:flex items-center">
                                    <div
                                        class="flex w-[20%] justify-around items-center border-2 rounded-3xl border-yellow-400 p-[2px]">
                                        <svg class="hover:cursor-pointer" width="14" height="14" viewBox="0 0 1000 1000"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M 575 63C 609 63 638 91 638 125C 638 125 638 187 638 187C 638 187 849 187 849 187C 870 187 887 204 887 225C 887 245 870 262 849 262C 849 262 785 262 785 262C 785 262 738 854 738 854C 738 856 738 859 737 861C 733 878 725 896 711 911C 697 926 676 938 652 939C 652 939 651 939 651 939C 651 939 351 939 351 939C 351 939 350 939 350 939C 325 938 303 926 289 911C 275 895 267 877 264 857C 264 856 264 856 264 855C 264 855 215 263 215 263C 215 263 151 263 151 263C 130 263 113 246 113 225C 113 205 130 188 151 188C 151 188 363 188 363 188C 363 188 363 125 363 125C 363 125 362 125 362 125C 362 91 391 63 425 63C 425 63 575 63 575 63M 438 187C 438 187 563 187 563 187C 563 187 563 138 563 138C 563 138 438 138 438 138C 438 138 438 187 438 187M 291 263C 291 263 338 847 338 847C 339 851 342 857 344 860C 347 863 349 864 352 864C 352 864 650 864 650 864C 653 864 653 864 656 861C 658 858 661 852 664 844C 664 844 710 262 710 262C 710 262 291 263 291 263" />
                                        </svg>
                                        <span class="text-[14px] font-semibold">1</span>
                                        <svg class="hover:cursor-pointer" width="16" height="16" viewBox="0 0 1000 1000"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M 538 150C 538 150 538 462 538 462C 538 462 850 462 850 462C 850 462 850 538 850 538C 850 538 538 538 538 538C 538 538 538 850 538 850C 538 850 462 850 462 850C 462 850 462 538 462 538C 462 538 150 538 150 538C 150 538 150 462 150 462C 150 462 462 462 462 462C 462 462 462 150 462 150C 462 150 538 150 538 150" />
                                        </svg>
                                    </div>
                                    
                                    <a href="#" ><span class="px-2 ml-2 border-x-[1px] border-x-[#e5e4e4] font-semibold text-[#2c85c6] text-[11px]">Delete</span></a>
                                    <a href="#" ><span class="px-2 text-[#2c85c6] text-[11px]  font-semibold ">Save for later</span></a>
                                    <a href="#" ><span class="px-2 border-x-[1px] border-x-[#e5e4e4] text-[#2c85c6]  font-semibold  text-[11px]">See more like this</span></a>
                                    <a href="#" ><span class="px-2 text-[#2c85c6] text-[11px]  font-semibold ">share</span></a>
                                </div>
                            </div>
    
                            <div class="w-full lg:w-[20%] px-2 lg:px-0 flex flex-col lg:items-end">
                                <div class="lg:flex lg:flex-col lg:items-end">
                                    <span class="text-[12px] bg-pink-700 mt-1 p-1 rounded-xs text-white font-semibold">${product_data[index].discount} off</span>
                                    <span class="font-semibold mt-1 text-pink-700 text-[12px]">Limited time deal</span>
                                </div>

                                <div class="lg:flex lg:flex-col lg:items-end">
                                    <span class="font-bold text-sm sm:text-xl mt-1">${product_data[index].price}</span>
                                    <span class="text-[10px] sm:text-xs mt-1 text-gray-500">M.R.P : <span class="line-through">${product_data[index].MRP}</span></span>
                                </div>

                            </div>
                        </div>
                        </div>
                        <div class="flex pl-3 lg:hidden flex-wrap mb-2">
                                                            <div
                                        class="flex w-[20%] sm:w-[10%] justify-around items-center border-2 rounded-3xl border-yellow-400 p-[2px]">
                                        <svg class="hover:cursor-pointer" width="14" height="14" viewBox="0 0 1000 1000"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M 575 63C 609 63 638 91 638 125C 638 125 638 187 638 187C 638 187 849 187 849 187C 870 187 887 204 887 225C 887 245 870 262 849 262C 849 262 785 262 785 262C 785 262 738 854 738 854C 738 856 738 859 737 861C 733 878 725 896 711 911C 697 926 676 938 652 939C 652 939 651 939 651 939C 651 939 351 939 351 939C 351 939 350 939 350 939C 325 938 303 926 289 911C 275 895 267 877 264 857C 264 856 264 856 264 855C 264 855 215 263 215 263C 215 263 151 263 151 263C 130 263 113 246 113 225C 113 205 130 188 151 188C 151 188 363 188 363 188C 363 188 363 125 363 125C 363 125 362 125 362 125C 362 91 391 63 425 63C 425 63 575 63 575 63M 438 187C 438 187 563 187 563 187C 563 187 563 138 563 138C 563 138 438 138 438 138C 438 138 438 187 438 187M 291 263C 291 263 338 847 338 847C 339 851 342 857 344 860C 347 863 349 864 352 864C 352 864 650 864 650 864C 653 864 653 864 656 861C 658 858 661 852 664 844C 664 844 710 262 710 262C 710 262 291 263 291 263" />
                                        </svg>
                                        <span class="text-[14px] font-semibold">1</span>
                                        <svg class="hover:cursor-pointer" width="16" height="16" viewBox="0 0 1000 1000"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M 538 150C 538 150 538 462 538 462C 538 462 850 462 850 462C 850 462 850 538 850 538C 850 538 538 538 538 538C 538 538 538 850 538 850C 538 850 462 850 462 850C 462 850 462 538 462 538C 462 538 150 538 150 538C 150 538 150 462 150 462C 150 462 462 462 462 462C 462 462 462 150 462 150C 462 150 538 150 538 150" />
                                        </svg>
                                    </div>
                          <a href="#" ><span class="px-2 ml-2 border-x-[1px] border-x-[#e5e4e4] font-semibold text-[#2c85c6] text-[11px]">Delete</span></a>
                                    <a href="#" ><span class="px-2 text-[#2c85c6] text-[11px]  font-semibold ">Save for later</span></a>
                                    <a href="#" ><span class="px-2 border-x-[1px] border-x-[#e5e4e4] text-[#2c85c6]  font-semibold  text-[11px]">See more like this</span></a>
                        </div>
                </div>`
}


let toggle_emi_box=(event)=>{
    let emi_box_catch=document.getElementById("emi_box")
    emi_box_catch.classList.toggle("overflow-hidden")
    if(emi_box_catch.classList.contains("h-[50px]"))
    {
        emi_box_catch.classList.replace("h-[50px]","h-[170px]")
    }
    else 
    {
        emi_box_catch.classList.replace("h-[170px]","h-[50px]")

    }
}