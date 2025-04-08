function loadHeader() {
  document.write(`
        <header> <!--class="sticky top-0 z-[9999]" (if sticky header is needed)-->
    <!-- top header section-->
    <div class="flex md:flex lg:flex-row justify-between md:justify-between md:h-12 items-center bg-pColor px-2 md:px-8 lg:px-8 rounded-box">
      <div class="flex justify-center text-lg text-center ml-6 md:ml-5 lg:ml-0">
        <a class="text-decoration-none pr-4 md:pr-10 hover:text-btnColor1" href="mailto:info@smafighterolivia.com">
          <i class="fas fa-envelope"></i> 
          <span class="hidden lg:inline">&nbsp;info@smafighterolivia.com</span>
        </a>
        <a class="flex-1 text-decoration-none hover:text-btnColor1" href="tel:+8801716912288">
          <i class="fas fa-phone"></i> 
          <span class="hidden md:inline">&nbsp;+880 1716-912288</span>
        </a>
      </div>
      <div class="flex justify-center text-base text-center items-center md:mt-0">
        <!-- Google Translate -->
        <div id="google_translate_element" class="flex px-4" > 
          <P class="pr-4">Language</P>
        </div>
        <!-- Google Translate Script -->
        <script type="text/javascript">
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,bn,hi,fr,de,es,ar,zh-CN',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
          }
        </script>

        
        <!-- <a class="flex text-decoration-none text-white p-2 md:p-3 hover:text-sColor" href="cure-sma-bd-blog.html">Blog</a>
        <i class="fa-solid fa-hand-holding-medical text-white text-3xl pl-2 md:pl-3"></i> -->
      </div>
    </div>

    <!-- navbar section-->
    <nav>
      <div class="flex flex-row justify-between bg-sColor py-2 lg:px-8 md:px-8 font-poppins text-pfont font-medium text-base shadow-lg navbar lg:bg-opacity-75 rounded-box">
        <div>
        <!-- mobile menu -->
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 mt-4 bg-sColor rounded-box w-80 border-r-4 border-pColor drop-shadow-lg">
                <li class="my-2 border-b-2 border-pColor"><a href="index.html" class="text-lg hover:text-pColor">Home</a></li>
                <li class="relative group hover:translate-y-1 hover:duration-[2s]">
                  <a href="sma-fighter-olivia-story.html" class="hover:text-pColor text-lg  border-b-2 border-pColor">Olivia's Story</a>
                </li>
                <li><a href="sma-fighter-olivia-medical-history.html" class="my-2 border-b-2 border-pColor text-lg hover:text-btnColor1">Medical Story</a>
                </li>
                <li class="relative group hover:translate-y-1 hover:duration-[2s]">
                    <a href="sma-fighter-olivia-update and progress.html" class="hover:text-pColor text-lg border-b-2 border-pColor">Update & Progress </a>
                </li>
                <li class="my-2 relative group hover:translate-y-1 hover:duration-[2s]">
                    <a href="sma-fighter-olivia-about-sma.html" class="hover:text-pColor text-lg border-b-2 border-pColor">About SMA</a>
                </li>
                
                </li>
                <li class="relative group hover:translate-y-1 hover:duration-[2s]">
                    <a href="sma-fighter-olivia-gallery.html" class="py-2 text-lg  hover:text-pColor border-b-2 border-pColor">Gallery</a>
                </li>
                <li><a href="sma-fighter-olivia-contact.html" class="text-lg relative group hover:translate-y-1 hover:duration-[2s] text-lg hover:text-pColor">Contact</a></li>
            </ul>
          </div>
          
          <script>
              function toggleSubmenu(event) {
                const hrefValue = event.currentTarget.getAttribute('href');

                // Prevent browsing for specific links
                if (hrefValue === "sma-fighter-olivia-contact.html" || hrefValue === "sma-fighter-olivia-contact.html") {
                    event.preventDefault();
                }

                const submenu = event.currentTarget.nextElementSibling;

                // Close other open submenus
                document.querySelectorAll('.dropdown ul').forEach(ul => {
                    if (ul !== submenu) {
                        ul.classList.add('hidden');
                    }
                });

                // Toggle the clicked submenu
                submenu.classList.toggle('hidden');
            }

          </script>  
        
        <!-- site logo -->
          <div>
            <a href="#">
              <img class="w-32" src="./src/images/logo.png" alt="SMA Fighter Olivia">
            </a>
          </div>  
        </div>

        <!-- large display menu -->
          <div class="navbar-center hidden lg:flex font-poppins font-semibold text-lg">
            <ul class="flex space-x-4 px-1 gap-6 lg:gap-0 xl:gap-6">
              <li><a href="index.html" class="hover:text-btnColor1">Home</a></li>
              <li >
                <a href="sma-fighter-olivia-story.html" class="hover:text-btnColor1" ">Olivia's Story</a>
              </li>
              <li><a href="sma-fighter-olivia-medical-history.html" class="hover:text-btnColor1">Medical History</a></li>
              <li >
                <a href="sma-fighter-olivia-update and progress.html" class="hover:text-btnColor1">Update & Progress</a>
              </li>
              <li>
                <a href="sma-fighter-olivia-about-sma.html" class="hover:text-btnColor1"">About SMA</a>
              </li>
                        
              
              <li>
                <a href="sma-fighter-olivia-gallery.html" class="hover:text-btnColor1">Gallery</a>              
              </li>
              <li><a href="sma-fighter-olivia-contact.html" class="hover:text-btnColor1">Contact </a></li>
            </ul>
          </div>

        <!-- Donate button -->
          <div class="flex gap-4 lg:gap-1 xl:gap-4 2xl:gap-4">
              <div>
                <a class="pBtn bg-btnColor1 hover:bg-btnColor2 transition duration-300 ease-in-out text-white " href="#" onclick="Gdonate_modal.showModal()"><i class="fa-solid fa-heart-circle-check"></i> <span class="text-base md:text-xl md:inline lg:hidden xl:inline">Donate</span></a>
              </div>
              <!-- modal information for pay donation -->
              <dialog id="Gdonate_modal" class="modal">
                <div class="modal-box bg-slate-200 max-w-full md:max-w-4xl lg:max-w-3xl p-6 mx-auto">
                  <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <div class="bg-pColor/50 p-6 border-4 border-btnColor1/50 rounded-lg">
                    <h3 class="text-xl pt-3 text-green-600 text-center font-bold">WAYS TO DONATION</h3>
                    <p class="text-center mb-5">Please send you help through the following path</p>

                    <div class="border-2 border-white rounded-lg bg-white bg-opacity-25 mb-4">
                      <p class="text-center font-bold">Mobile Banking (Send Money)</p>
                      <p class="text-center">bKash / Nagad / Rocket: 01716912288 (1) </p>
                      <p class="text-center mb-5">bKash / Nagad / Rocket: 01716912288 (2) </p>

                      <p class="text-center font-bold">Reference:</p>
                      <p class="text-center">Your NAME_CONTACT NO.</p>
                    </div>

                    <div class="border-2 border-white rounded-lg bg-white bg-opacity-25 mb-4">
                      <p class="text-center font-bold">Bank Transfer</p>
                      <div class="flex flex-col md:flex-row gap-4 p-4 justify-between">
                        <div>
                          <p>1</p>
                          <p class="font-semibold">Bank: DBBL</p>
                          <p>Name: Nabone</p>
                          <p>First Name: Nabone</p>
                          <p>Last Name: Nabone</p>
                          <p>Branch: Kawranbazar</p>
                          <p>Account No.:034980239840280</p>
                          <p>Routing No.:39840280</p>
                        </div>
                        <div class="w-px bg-white"></div>
                        <div>
                          <p>2</p>
                          <p class="font-semibold">Bank: City</p>
                          <p>Name: Nabone</p>
                          <p>First Name: Nabone</p>
                          <p>Last Name: Nabone</p>
                          <p>Branch: Kawranbazar</p>
                          <p>Account No.:034980239840280</p>
                          <p>Routing No.:39840280</p>
                        </div>
                      </div>
                    </div>

                    <div class="border-2 border-white rounded-lg bg-white bg-opacity-25 mb-4">
                      <p class="text-center font-bold">Mastercard Details</p>
                      <div class="flex flex-col md:flex-row gap-4 p-4 justify-between">
                        <div>
                          <p class="font-semibold">American Mastercard</p>
                          <p>First Name: Nabone</p>
                          <p>Last Name: Nabone</p>
                          <p>Card No.:034980239840280</p>
                        </div>
                        <div class="w-px bg-white"></div>
                        <div>
                          <p class="font-semibold">Paypal Mastercard</p>
                          <p>First Name: Nabone</p>
                          <p>Last Name: Nabone</p>
                          <p>Card No.:034980239840280</p>
                        </div>
                      </div>
                    </div>


                    <p class="text-center font-bold mt-10 text-btnColor1">Thank you for donating me</p>
                    <div class="max-w-full flex justify-center mb-4">
                      <img src="./src/images/logo.png" alt="SMA Fighter Olivia" class="w-24 h-auto">
                    </div>
              
                    
                  </div>
                </div>
              </dialog>
          </div>

      </div>
    </nav>
  </header>
  `);
}
