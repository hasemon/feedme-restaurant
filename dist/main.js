(()=>{"use strict";const n=function(){const n=document.createElement("section");return n.innerHTML='\n        <section class="grid grid-cols-2 gap-10">\n            <div class="space-y-6 my-20">\n                <div class="flex-grow space-y-4">\n                    <p class="text-customOrange-dark">Get 25% off your first order</p>\n                    <h1 class="text-3xl">Welcome to our <br> <span class="font-bold text-4xl">feedme Restaurant!</span>\n                    </h1>\n                    <p class="text-md text-wrap">Craving a culinary adventure? feedme isn\'t your typical restaurant;\n                        it\'s a global\n                        fusion fiesta for your taste buds. We\n                        transform fresh, seasonal ingredients into exciting dishes that will surprise and delight. From\n                        adventurous foodies to\n                        curious newcomers, feedme offers a warm and inviting atmosphere where you can explore bold\n                        flavors from around the\n                        world.</p>\n                </div>\n                <button title="menu" type="button" id="explore-menu-button"\n                        class="px-6 py-3  bg-customOrange-dark hover:bg-customOrange hover:scale-105 transition-transform duration-300 ease-in-out text-bgLight rounded-lg font-bold">\n                    Explore\n                    Food Menu\n                </button>\n\n            </div>\n            <div class="bg-[url(\'./food.jpg\')] bg-cover">\n            </div>\n        </section>\n        <section class="flex items-center gap-10 my-10">\n            <div\n                    class="space-y-2 hover:ring-2 ring-offset-8 hover:scale-105 transition-transform duration-300 ease-in-out w-1/3 h-48 border border-gray-300 py-4 px-6 rounded-xl bg-customBlue-dark text-bgLight drop-shadow-lg">\n                <div class="text-5xl text-bgLight">\n                    <i class="ri-speed-up-line"></i>\n                </div>\n                <h1 class="text-xl">\n                    Fastest Delivery\n                </h1>\n                <p class="text-md">\n                    Craving a hot meal in a hurry? Fast food delivery satisfies your taste buds in a flash.\n                </p>\n            </div>\n            <div\n                    class="space-y-2 hover:ring-2 ring-offset-8 hover:scale-105 transition-transform duration-300 ease-in-out w-1/3 h-48 border border-gray-300 py-4 px-6 rounded-xl bg-customGreen-dark text-bgLight drop-shadow-lg">\n                <div class="text-5xl text-bgLight">\n                    <i class="ri-bowl-line"></i>\n                </div>\n                <h1 class="text-xl">\n                    Best Taste\n                </h1>\n                <p class="text-md">\n                    The best restaurant tastes are subjective adventures, discover on every plate.\n                </p>\n            </div>\n            <div\n                    class="space-y-2 hover:ring-2 ring-offset-8 hover:scale-105 transition-transform duration-300 ease-in-out w-1/3 h-48 border border-gray-300 py-4 px-6 rounded-xl bg-customPurple-dark text-bgLight drop-shadow-lg">\n                <div class="text-5xl text-bgLight">\n                    <i class="ri-gift-2-line"></i>\n                </div>\n                <h1 class="text-xl">\n                    Best Offers\n                </h1>\n                <p class="text-md">\n                    Unleash your inner foodie and devour delicious deals our restaurants near you!\n                </p>\n            </div>\n        </section>\n    ',n},e=function(){const n=document.createElement("section");return n.classList.add("container","my-10","space-y-10"),n.innerHTML='\n    <div class="flex items-center space-x-2 text-xl">\n        <span><i class="ri-menu-unfold-line"></i></span>\n        <span class="font-bold">Food menu</span>\n    </div>\n    <div class="flex items-center justify-center space-x-10">\n        <div class="flex items-center space-x-2">\n            <span class="text-xl"><i class="ri-search-line"></i></span>\n            <input class="w-96 border-2 border-customOrange-dark rounded-full py-2 px-4"\n                   placeholder="What you want to eat?" type="text" title="search-food">\n        </div>\n        <div class="flex items-center space-x-4">\n            <div class="cursor-pointer text-lg text-bgDark space-x-2"><i\n                    class="ri-filter-2-line"></i><span>Filter</span></div>\n            <div class="cursor-pointer text-lg text-bgDark space-x-2"><i class="ri-sort-alphabet-asc"></i><span>Sort\n                        by</span></div>\n        </div>\n        <div>\n            <button title="cart"\n                    class="bg-customOrange-dark text-bgLight py-1 px-3 rounded hover:bg-customOrange transition-colors duration-300 text-xl">\n                <i\n                        class="ri-shopping-cart-line"></i>\n            </button>\n        </div>\n    </div>\n    \x3c!-- Food items --\x3e\n    <div class="gap-10 flex items-center flex-wrap justify-center">\n        \x3c!-- Card --\x3e\n        <div\n                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">\n            <div class="w-full">\n                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg"\n                     alt="" srcset="">\n            </div>\n            <div class="px-4 pb-2 space-y-2">\n                <div class="flex items-center justify-between">\n                    <h4 class="font-bold text-lg">Pizza</h4>\n                    <div class="flex items-center space-x-2">\n                        <h4 class="font-bold"><span>$</span> 200 </h4>\n                        <span> BDT </span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <h4 class="text-md">Vegan, Healthy</h4>\n                    <div class="flex items-center text-md">\n                        <h4 class="font-bold"> 20-30 </h4>\n                        <span>min</span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <div class="flex space-x-2">\n                        <h4 class="text-md font-bold">4.9</h4>\n                        <span class="text-customOrange">\n                                <i class="ri-star-smile-line"></i>\n                            </span>\n                    </div>\n                    <button\n                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">\n                        Add to cart\n                    </button>\n                </div>\n            </div>\n\n        </div>\n        <div\n                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">\n            <div class="w-full">\n                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg"\n                     alt="" srcset="">\n            </div>\n            <div class="px-4 pb-2 space-y-2">\n                <div class="flex items-center justify-between">\n                    <h4 class="font-bold text-lg">Burger</h4>\n                    <div class="flex items-center space-x-2">\n                        <h4 class="font-bold"><span>$</span> 200 </h4>\n                        <span> BDT </span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <h4 class="text-md">Vegan, Healthy</h4>\n                    <div class="flex items-center text-md">\n                        <h4 class="font-bold"> 20-30 </h4>\n                        <span>min</span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <div class="flex space-x-2">\n                        <h4 class="text-md font-bold">4.9</h4>\n                        <span class="text-customOrange">\n                                <i class="ri-star-smile-line"></i>\n                            </span>\n                    </div>\n                    <button\n                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">\n                        Add to cart\n                    </button>\n                </div>\n            </div>\n\n        </div>\n        <div\n                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">\n            <div class="w-full">\n                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg"\n                     alt="" srcset="">\n            </div>\n            <div class="px-4 pb-2 space-y-2">\n                <div class="flex items-center justify-between">\n                    <h4 class="font-bold text-lg">Sandwich</h4>\n                    <div class="flex items-center space-x-2">\n                        <h4 class="font-bold"><span>$</span> 200 </h4>\n                        <span> BDT </span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <h4 class="text-md">Vegan, Healthy</h4>\n                    <div class="flex items-center text-md">\n                        <h4 class="font-bold"> 20-30 </h4>\n                        <span>min</span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <div class="flex space-x-2">\n                        <h4 class="text-md font-bold">4.9</h4>\n                        <span class="text-customOrange">\n                                <i class="ri-star-smile-line"></i>\n                            </span>\n                    </div>\n                    <button\n                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">\n                        Add to cart\n                    </button>\n                </div>\n            </div>\n\n        </div>\n        <div\n                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">\n            <div class="w-full">\n                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg"\n                     alt="" srcset="">\n            </div>\n            <div class="px-4 pb-2 space-y-2">\n                <div class="flex items-center justify-between">\n                    <h4 class="font-bold text-lg">Pasta</h4>\n                    <div class="flex items-center space-x-2">\n                        <h4 class="font-bold"><span>$</span> 200 </h4>\n                        <span> BDT </span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <h4 class="text-md">Vegan, Healthy</h4>\n                    <div class="flex items-center text-md">\n                        <h4 class="font-bold"> 20-30 </h4>\n                        <span>min</span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <div class="flex space-x-2">\n                        <h4 class="text-md font-bold">4.9</h4>\n                        <span class="text-customOrange">\n                                <i class="ri-star-smile-line"></i>\n                            </span>\n                    </div>\n                    <button\n                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">\n                        Add to cart\n                    </button>\n                </div>\n            </div>\n\n        </div>\n        <div\n                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">\n            <div class="w-full">\n                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/1549542994.jpg" alt=""\n                     srcset="">\n            </div>\n            <div class="px-4 pb-2 space-y-2">\n                <div class="flex items-center justify-between">\n                    <h4 class="font-bold text-lg">Salad</h4>\n                    <div class="flex items-center space-x-2">\n                        <h4 class="font-bold"><span>$</span> 200 </h4>\n                        <span> BDT </span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <h4 class="text-md">Vegan, Healthy</h4>\n                    <div class="flex items-center text-md">\n                        <h4 class="font-bold"> 20-30 </h4>\n                        <span>min</span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <div class="flex space-x-2">\n                        <h4 class="text-md font-bold">4.9</h4>\n                        <span class="text-customOrange">\n                                <i class="ri-star-smile-line"></i>\n                            </span>\n                    </div>\n                    <button\n                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">\n                        Add to cart\n                    </button>\n                </div>\n            </div>\n\n        </div>\n        <div\n                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">\n            <div class="w-full">\n                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg"\n                     alt="" srcset="">\n            </div>\n            <div class="px-4 pb-2 space-y-2">\n                <div class="flex items-center justify-between">\n                    <h4 class="font-bold text-lg">Desert</h4>\n                    <div class="flex items-center space-x-2">\n                        <h4 class="font-bold"><span>$</span> 200 </h4>\n                        <span> BDT </span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <h4 class="text-md">Vegan, Healthy</h4>\n                    <div class="flex items-center text-md">\n                        <h4 class="font-bold"> 20-30 </h4>\n                        <span>min</span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <div class="flex space-x-2">\n                        <h4 class="text-md font-bold">4.9</h4>\n                        <span class="text-customOrange">\n                                <i class="ri-star-smile-line"></i>\n                            </span>\n                    </div>\n                    <button\n                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">\n                        Add to cart\n                    </button>\n                </div>\n            </div>\n\n        </div>\n        <div\n                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">\n            <div class="w-full">\n                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/1543774956.jpg" alt=""\n                     srcset="">\n            </div>\n            <div class="px-4 pb-2 space-y-2">\n                <div class="flex items-center justify-between">\n                    <h4 class="font-bold text-lg">Pastries</h4>\n                    <div class="flex items-center space-x-2">\n                        <h4 class="font-bold"><span>$</span> 200 </h4>\n                        <span> BDT </span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <h4 class="text-md">Vegan, Healthy</h4>\n                    <div class="flex items-center text-md">\n                        <h4 class="font-bold"> 20-30 </h4>\n                        <span>min</span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <div class="flex space-x-2">\n                        <h4 class="text-md font-bold">4.9</h4>\n                        <span class="text-customOrange">\n                                <i class="ri-star-smile-line"></i>\n                            </span>\n                    </div>\n                    <button\n                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">\n                        Add to cart\n                    </button>\n                </div>\n            </div>\n\n        </div>\n        <div\n                class="w-1/5 shadow-xl rounded-lg space-y-2 hover:scale-105 transition-transform ease-in-out duration-200 hover:ring-1 ring-offset-8">\n            <div class="w-full">\n                <img class="rounded-t" src="https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"\n                     alt="" srcset="">\n            </div>\n            <div class="px-4 pb-2 space-y-2">\n                <div class="flex items-center justify-between">\n                    <h4 class="font-bold text-lg">Chicken Handi</h4>\n                    <div class="flex items-center space-x-2">\n                        <h4 class="font-bold"><span>$</span> 200 </h4>\n                        <span> BDT </span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <h4 class="text-md">Vegan, Healthy</h4>\n                    <div class="flex items-center text-md">\n                        <h4 class="font-bold"> 20-30 </h4>\n                        <span>min</span>\n                    </div>\n                </div>\n                <div class="flex items-center justify-between text-gray-700">\n                    <div class="flex space-x-2">\n                        <h4 class="text-md font-bold">4.9</h4>\n                        <span class="text-customOrange">\n                                <i class="ri-star-smile-line"></i>\n                            </span>\n                    </div>\n                    <button\n                            class="flex items-center text-xs px-2 py-1 bg-customOrange text-bgLight transition-transform duration-300 hover:scale-105 ease-in-out rounded">\n                        Add to cart\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>',n},s=document.getElementById("content"),t=document.getElementById("home-button"),a=document.getElementById("menu-button"),i=document.getElementById("contact-button");s.appendChild(n()),t.addEventListener("click",(()=>{s.innerHTML="",i.classList.remove("font-bold"),a.classList.remove("font-bold"),t.classList.add("font-bold"),s.appendChild(n())})),a.addEventListener("click",(()=>{console.log("menu clicked"),s.innerHTML="",t.classList.remove("font-bold"),i.classList.remove("font-bold"),a.classList.add("font-bold"),s.appendChild(e())})),i.addEventListener("click",(()=>{s.innerHTML="",t.classList.remove("font-bold"),a.classList.remove("font-bold"),i.classList.add("font-bold"),s.appendChild(function(){const n=document.createElement("section");return n.classList.add("h-screen"),n.innerHTML='<section class="container my-10 space-y-10">\n        <div class="flex items-center space-x-2 text-xl">\n            <span><i class="ri-customer-service-2-fill"></i></span>\n            <span class="font-bold">Contact us</span>\n        </div>\n\n        <section class="grid grid-cols-2 gap-10 place-items-center">\n            <div class="space-y-5">\n                <h1 class="text-2xl font-bold text-customBlue-dark">\n                    Book a table!\n                </h1>\n                <div class="w-3/4">\n                    <form action="" class="space-y-6">\n                        <div class="space-y-6 w-full">\n                            <div class="flex space-x-4">\n                                <div class="flex flex-col w-1/3">\n                                    <label for="date" class="flex justify-between">\n                                        <span>Date</span>\n                                        <i class="ri-arrow-down-s-line"></i>\n                                    </label>\n                                    <input type="text" id="date" class="border border-bgDark rounded py-2 px-4">\n                                </div>\n                                <div class="flex flex-col w-1/3">\n                                    <label for="time" class="flex justify-between">\n                                        <span>Time</span>\n                                        <i class="ri-arrow-down-s-line"></i>\n                                    </label>\n                                    <input type="text" id="time" class="border border-bgDark rounded py-2 px-4">\n                                </div>\n                                <div class="flex flex-col w-1/3">\n                                    <label for="guest" class="flex justify-between">\n                                        <span>Guest</span>\n                                        <i class="ri-arrow-down-s-line"></i>\n                                    </label>\n                                    <input type="number" id="guest"\n                                           class="border border-bgDark w-full rounded py-2 px-4">\n                                </div>\n                            </div>\n                            <div class="mt-4">\n                                <label>\n                                    <input type="email" placeholder="Enter your email"\n                                           class="border border-bgDark rounded py-2 px-4 w-full">\n                                </label>\n                            </div>\n                        </div>\n                        <button type="button" class="px-4 py-2 bg-customGreen-medium text-bgLight rounded-lg">Book now!\n                        </button>\n                    </form>\n                </div>\n            </div>\n            <div class="space-y-5">\n                <h1 class="text-2xl font-bold text-customBlue-dark">\n                    Our Location\n                </h1>\n                <div class="">\n                    <div class="space-y-2">\n                        <div class="flex items-center space-x-2 text-lg">\n                            <i class="ri-map-pin-fill text-2xl"></i>\n                            <h4 class="">Bhaluka, Gafargaun Road, Mymensingh</h4>\n                        </div>\n                        <div class="flex items-center space-x-2 text-lg">\n                            <i class="ri-mail-fill text-2xl"></i>\n                            <h4 class="font-bold">Email: imemon.sh@gmail.com</h4>\n                        </div>\n                        <div class="space-y-2">\n                            <h2 class="text-xl font-bold text-customBlue-dark underline underline-offset-4">Opening\n                                Hours</h2>\n                            <div class="ms-8 space-y-2">\n                                <h4 class="">Saturday - thursday: 11:00 - 23:00</h4>\n                                <h4 class="">Holidays: 12:00 - 24:00</h4>\n                            </div>\n                        </div>\n                        <div class="flex items-center space-x-4 text-4xl text-customBlue">\n                            <i class="hover:scale-125 transition-transform duration-300 ri-instagram-fill text-2xl"></i>\n                            <i class="hover:scale-125 transition-transform duration-300 ri-facebook-circle-fill text-2xl"></i>\n                            <i class="hover:scale-125 transition-transform duration-300 ri-twitter-fill text-2xl"></i>\n                            <i class="hover:scale-125 transition-transform duration-300 ri-youtube-fill text-2xl"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </section>',n}())})),document.querySelector("#explore-menu-button").addEventListener("click",(()=>{s.innerHTML="",s.appendChild(e())}))})();