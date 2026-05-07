function loadHeader() {
  document.write(`
    <header class="w-full">
      <style>
        /* Google Translate mobile icon-only */
        @media (max-width: 767px) {
          #google_translate_element {
            max-width: 30px;
            overflow: hidden;
          }

          #google_translate_element .goog-te-gadget {
            font-size: 0 !important;
            line-height: 0 !important;
          }

          #google_translate_element .goog-te-gadget-simple {
            width: 30px !important;
            height: 30px !important;
            overflow: hidden !important;
            padding: 2px !important;
            border: none !important;
            background: transparent !important;
          }

          #google_translate_element .goog-te-gadget-simple span {
            display: none !important;
          }

          #google_translate_element .goog-te-gadget-icon {
            margin: 0 !important;
          }
        }

        /* Desktop professional nav hover */
        .pro-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .pro-nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: currentColor;
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }

        .pro-nav-link:hover {
          transform: translateY(-2px);
        }

        .pro-nav-link:hover::after {
          width: 100%;
        }

        /* Mobile menu link hover */
        .pro-mobile-link {
          transition: color 0.3s ease, padding-left 0.3s ease, background-color 0.3s ease;
          border-radius: 8px;
        }

        .pro-mobile-link:hover {
          padding-left: 18px;
          background-color: rgba(255, 255, 255, 0.12);
        }

        /* Desktop gallery dropdown animation */
        .pro-dropdown-menu {
          opacity: 0;
          visibility: hidden;
          transform: translateY(12px) scale(0.98);
          transition: opacity 0.28s ease, transform 0.28s ease, visibility 0.28s ease;
        }

        .pro-dropdown:hover .pro-dropdown-menu,
        .pro-dropdown:focus-within .pro-dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .pro-dropdown:hover .pro-dropdown-arrow,
        .pro-dropdown:focus-within .pro-dropdown-arrow {
          transform: rotate(180deg);
        }

        .pro-dropdown-arrow {
          transition: transform 0.3s ease;
        }
      </style>

      <!-- Top header section -->
      <div class="flex flex-row justify-between items-center gap-2 bg-pColor px-2 md:px-8 py-2 md:py-0 md:h-12 rounded-box overflow-x-auto whitespace-nowrap">
        
        <!-- Contact info -->
        <div class="flex items-center text-sm md:text-lg text-center shrink-0">
          <a class="text-decoration-none pr-3 md:pr-10 hover:text-btnColor1 transition-colors duration-300" href="mailto:info@smafighterolivia.com">
            <i class="fas fa-envelope"></i>
            <span class="hidden lg:inline">&nbsp;info@smafighterolivia.com</span>
          </a>

          <a class="text-decoration-none hover:text-btnColor1 transition-colors duration-300" href="tel:+8801716912288">
            <i class="fas fa-phone"></i>
            <span class="hidden md:inline">&nbsp;+880 1716-912288</span>
          </a>
        </div>

        <!-- Top quick links -->
        <div class="flex items-center text-xs md:text-base text-center shrink-0">
          <a class="text-decoration-none px-2 md:px-3 hover:text-btnColor1 transition-colors duration-300" href="sma-fighter-olivia-medical-history.html">
            <span class="hidden sm:inline">Medical History</span>
            <span class="sm:hidden">Medical</span>
          </a>

          <a class="text-decoration-none px-2 md:px-3 hover:text-btnColor1 transition-colors duration-300" href="sma-fighter-olivia-contact.html">
            Contact
          </a>

          <!-- Google Translate -->
          <div class="flex items-center gap-1 px-1 md:px-4">
            <i class="fa-solid fa-language md:hidden text-base"></i>
            <span class="hidden md:inline pr-2">Language</span>
            <div id="google_translate_element"></div>
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
          <\/script>
        </div>
      </div>

      <!-- Navbar section -->
      <nav>
        <div class="navbar justify-between bg-sColor py-2 px-2 md:px-8 font-poppins text-pfont font-medium text-base shadow-lg lg:bg-opacity-75 rounded-box">
          
          <!-- Navbar left: mobile menu + logo -->
          <div class="navbar-start flex items-center gap-2">
            
            <!-- Mobile menu -->
            <div class="relative lg:hidden">
              <input id="mobile-menu-toggle" type="checkbox" class="peer hidden">

              <label for="mobile-menu-toggle" role="button" class="btn btn-ghost transition-all duration-300 hover:text-btnColor1 hover:scale-110 active:scale-95" aria-label="Open or close main menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h12M4 18h16" />
                </svg>
              </label>

              <ul class="absolute left-0 top-full mt-3 z-[9999] menu menu-sm p-3 bg-sColor rounded-box w-80 border-r-4 border-pColor drop-shadow-lg
                max-h-0 opacity-0 -translate-y-2 overflow-hidden pointer-events-none
                transition-all duration-300 ease-out
                peer-checked:max-h-[85vh] peer-checked:opacity-100 peer-checked:translate-y-0 peer-checked:pointer-events-auto">

                <li class="border-b-2 border-pColor">
                  <a href="index.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-lg hover:text-btnColor1 pro-mobile-link">
                    Home
                  </a>
                </li>

                <li class="border-b-2 border-pColor">
                  <a href="sma-fighter-olivia-story.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-lg hover:text-btnColor1 pro-mobile-link">
                    Olivia's Story
                  </a>
                </li>

                <li class="border-b-2 border-pColor">
                  <a href="sma-fighter-olivia-medical-history.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-lg hover:text-btnColor1 pro-mobile-link">
                    Medical History
                  </a>
                </li>

                <li class="border-b-2 border-pColor">
                  <a href="sma-fighter-olivia-update and progress.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-lg hover:text-btnColor1 pro-mobile-link">
                    Update & Progress
                  </a>
                </li>

                <li class="border-b-2 border-pColor">
                  <a href="sma-fighter-olivia-about-sma.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-lg hover:text-btnColor1 pro-mobile-link">
                    About SMA
                  </a>
                </li>

                <!-- Mobile Gallery Dropdown -->
                <li class="border-b-2 border-pColor">
                  <details>
                    <summary class="text-lg hover:text-btnColor1 pro-mobile-link cursor-pointer">
                      Gallery
                    </summary>

                    <ul class="p-2 bg-sColor">
                      <li>
                        <a href="sma-fighter-olivia-photo-gallery.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-base hover:text-btnColor1 pro-mobile-link">
                          <i class="fa-regular fa-image"></i>
                          Photo Gallery
                        </a>
                      </li>

                      <li>
                        <a href="sma-fighter-olivia-video-gallery.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-base hover:text-btnColor1 pro-mobile-link">
                          <i class="fa-solid fa-video"></i>
                          Video Gallery
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>

                <li class="border-b-2 border-pColor">
                  <a href="cure-sma-bd-blog.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-lg hover:text-btnColor1 pro-mobile-link">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="sma-fighter-olivia-contact.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-lg hover:text-btnColor1 pro-mobile-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <!-- Site logo -->
            <a href="index.html" aria-label="SMA Fighter Olivia Home" class="transition-transform duration-300 hover:scale-105">
              <img class="w-28 md:w-32" src="./src/images/logo.png" alt="SMA Fighter Olivia">
            </a>
          </div>

          <!-- Desktop menu -->
          <div class="navbar-center hidden lg:flex font-poppins font-semibold text-lg">
            <ul class="menu menu-horizontal px-1 gap-2 xl:gap-4">
              <li>
                <a href="index.html" class="hover:text-btnColor1 pro-nav-link">
                  Home
                </a>
              </li>

              <li>
                <a href="sma-fighter-olivia-story.html" class="hover:text-btnColor1 pro-nav-link">
                  Olivia's Story
                </a>
              </li>

              <li>
                <a href="sma-fighter-olivia-medical-history.html" class="hover:text-btnColor1 pro-nav-link">
                  Medical History
                </a>
              </li>

              <li>
                <a href="sma-fighter-olivia-update and progress.html" class="hover:text-btnColor1 pro-nav-link">
                  Update & Progress
                </a>
              </li>

              <li>
                <a href="sma-fighter-olivia-about-sma.html" class="hover:text-btnColor1 pro-nav-link">
                  About SMA
                </a>
              </li>

              <!-- Desktop Gallery Dropdown -->
              <li class="relative pro-dropdown">
                <button type="button" class="hover:text-btnColor1 pro-nav-link cursor-pointer flex items-center gap-1">
                  Gallery
                  <i class="fa-solid fa-angle-down text-sm ml-1 pro-dropdown-arrow"></i>
                </button>

                <ul class="pro-dropdown-menu absolute left-0 top-full mt-4 z-[9999] menu p-2 shadow-xl bg-sColor rounded-box w-56 border-t-4 border-pColor">
                  <li>
                    <a href="sma-fighter-olivia-photo-gallery.html" class="hover:text-btnColor1 pro-mobile-link">
                      <i class="fa-regular fa-image"></i>
                      Photo Gallery
                    </a>
                  </li>

                  <li>
                    <a href="sma-fighter-olivia-video-gallery.html" class="hover:text-btnColor1 pro-mobile-link">
                      <i class="fa-solid fa-video"></i>
                      Video Gallery
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="cure-sma-bd-blog.html" class="hover:text-btnColor1 pro-nav-link">
                  Blog
                </a>
              </li>

              <li>
                <a href="sma-fighter-olivia-contact.html" class="hover:text-btnColor1 pro-nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <!-- Donate button -->
          <div class="navbar-end flex justify-end">
            <a class="pBtn bg-btnColor1 hover:bg-btnColor2 transition-all duration-300 ease-in-out text-white hover:-translate-y-1 hover:shadow-xl active:scale-95" href="#" onclick="Gdonate_modal.showModal()">
              <i class="fa-solid fa-heart-circle-check"></i>
              <span class="text-base md:text-xl md:inline lg:hidden xl:inline">Donate</span>
            </a>
          </div>
        </div>
      </nav>

      <!-- Donate modal -->
      <dialog id="Gdonate_modal" class="modal">
        <div class="modal-box bg-slate-200 max-w-full md:max-w-4xl lg:max-w-3xl p-6 mx-auto">
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:text-btnColor1 transition-colors duration-300">
              ✕
            </button>
          </form>

          <div class="bg-pColor/50 p-6 border-4 border-btnColor1/50 rounded-lg">
            <h3 class="text-xl pt-3 text-green-600 text-center font-bold">
              WAYS TO DONATION
            </h3>

            <p class="text-center mb-5">
              Please send your help through the following path
            </p>

            <div class="border-2 border-white rounded-lg bg-white bg-opacity-25 mb-4 p-4 transition-all duration-300 hover:shadow-lg">
              <p class="text-center font-bold">Mobile Banking Send Money</p>
              <p class="text-center">bKash / Nagad / Rocket: 01716912288</p>
              <p class="text-center mb-5">bKash / Nagad / Rocket: 01716912288</p>

              <p class="text-center font-bold">Reference:</p>
              <p class="text-center">Your NAME_CONTACT NO.</p>
            </div>

            <div class="border-2 border-white rounded-lg bg-white bg-opacity-25 mb-4 transition-all duration-300 hover:shadow-lg">
              <p class="text-center font-bold pt-4">Bank Transfer</p>

              <div class="flex flex-col md:flex-row gap-4 p-4 justify-between">
                <div class="flex-1">
                  <p class="font-semibold">Bank: DBBL</p>
                  <p>Name: Nabone</p>
                  <p>First Name: Nabone</p>
                  <p>Last Name: Nabone</p>
                  <p>Branch: Kawranbazar</p>
                  <p>Account No.: 034980239840280</p>
                  <p>Routing No.: 39840280</p>
                </div>

                <div class="hidden md:block w-px bg-white"></div>

                <div class="flex-1">
                  <p class="font-semibold">Bank: City</p>
                  <p>Name: Nabone</p>
                  <p>First Name: Nabone</p>
                  <p>Last Name: Nabone</p>
                  <p>Branch: Kawranbazar</p>
                  <p>Account No.: 034980239840280</p>
                  <p>Routing No.: 39840280</p>
                </div>
              </div>
            </div>

            <div class="border-2 border-white rounded-lg bg-white bg-opacity-25 mb-4 transition-all duration-300 hover:shadow-lg">
              <p class="text-center font-bold pt-4">Mastercard Details</p>

              <div class="flex flex-col md:flex-row gap-4 p-4 justify-between">
                <div class="flex-1">
                  <p class="font-semibold">American Mastercard</p>
                  <p>First Name: Nabone</p>
                  <p>Last Name: Nabone</p>
                  <p>Card No.: 034980239840280</p>
                </div>

                <div class="hidden md:block w-px bg-white"></div>

                <div class="flex-1">
                  <p class="font-semibold">Paypal Mastercard</p>
                  <p>First Name: Nabone</p>
                  <p>Last Name: Nabone</p>
                  <p>Card No.: 034980239840280</p>
                </div>
              </div>
            </div>

            <p class="text-center font-bold mt-10 text-btnColor1">
              Thank you for donating me
            </p>

            <div class="max-w-full flex justify-center mb-4">
              <img src="./src/images/logo.png" alt="SMA Fighter Olivia" class="w-24 h-auto transition-transform duration-300 hover:scale-105">
            </div>
          </div>
        </div>
      </dialog>
    </header>
  `);
}