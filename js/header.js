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

        /* Mobile menu premium panel */
        .mobile-menu-panel {
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 32%),
            linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        /* IMPORTANT: force mobile menu to one column */
        .mobile-menu-list {
          display: flex !important;
          flex-direction: column !important;
          flex-wrap: nowrap !important;
          width: 100% !important;
          gap: 6px;
          padding: 12px;
          margin: 0;
          list-style: none;
        }

        .mobile-menu-list > li {
          display: block !important;
          width: 100% !important;
        }

        .mobile-menu-list a,
        .mobile-menu-list summary {
          width: 100% !important;
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
        }

        .mobile-menu-list details {
          width: 100% !important;
          display: block !important;
        }

        .mobile-submenu-list {
          display: flex !important;
          flex-direction: column !important;
          width: 100% !important;
          gap: 6px;
          margin-top: 8px;
          margin-left: 18px;
          padding: 8px;
          list-style: none;
        }

        .mobile-submenu-list li {
          width: 100% !important;
          display: block !important;
        }

        /* Mobile menu link */
        .pro-mobile-link {
          position: relative;
          overflow: hidden;
          min-height: 48px;
          padding: 8px 12px !important;
          transition:
            color 0.3s ease,
            padding-left 0.3s ease,
            background-color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
          border-radius: 14px;
        }

        .pro-mobile-link::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 4px;
          height: 0;
          border-radius: 999px;
          background: currentColor;
          transform: translateY(-50%);
          transition: height 0.3s ease;
        }

        .pro-mobile-link:hover {
          padding-left: 18px !important;
          transform: translateX(4px);
          background-color: rgba(255, 255, 255, 0.14);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.10);
        }

        .pro-mobile-link:hover::before {
          height: 60%;
        }

        .mobile-menu-icon-box {
          min-width: 36px;
          width: 36px;
          height: 36px;
          border-radius: 14px;
          background: rgba(255,255,255,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-submenu-icon-box {
          min-width: 32px;
          width: 32px;
          height: 32px;
          border-radius: 12px;
          background: rgba(255,255,255,0.16);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Hamburger animation */
        .hamburger-line {
          display: block;
          width: 26px;
          height: 2px;
          border-radius: 999px;
          background: currentColor;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        #mobile-menu-toggle:checked + label .line-1 {
          transform: translateY(8px) rotate(45deg);
        }

        #mobile-menu-toggle:checked + label .line-2 {
          opacity: 0;
        }

        #mobile-menu-toggle:checked + label .line-3 {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Remove default details marker for cleaner mobile gallery */
        .mobile-gallery-details > summary {
          list-style: none;
        }

        .mobile-gallery-details > summary::-webkit-details-marker {
          display: none;
        }

        .mobile-gallery-details > summary::marker {
          content: "";
        }

        /* Better mobile scrolling */
        .mobile-menu-scroll::-webkit-scrollbar {
          width: 5px;
        }

        .mobile-menu-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.28);
          border-radius: 999px;
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
            <span>Medical History</span>
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

              <!-- Mobile menu icon -->
              <label for="mobile-menu-toggle" role="button" class="btn btn-ghost flex flex-col gap-[6px] text-pfont transition-all duration-300 hover:text-btnColor1 hover:scale-110 active:scale-95" aria-label="Open or close main menu">
                <span class="hamburger-line line-1"></span>
                <span class="hamburger-line line-2"></span>
                <span class="hamburger-line line-3"></span>
              </label>

              <!-- Mobile menu overlay -->
              <label for="mobile-menu-toggle" class="fixed inset-0 z-[9990] hidden bg-black/35 backdrop-blur-[2px] peer-checked:block"></label>

              <!-- Mobile menu panel -->
              <div class="absolute left-0 top-full mt-3 z-[9999] w-[88vw] max-w-[360px]
                max-h-0 opacity-0 -translate-x-4 -translate-y-2 overflow-hidden pointer-events-none
                transition-all duration-500 ease-out
                peer-checked:max-h-[88vh] peer-checked:opacity-100 peer-checked:translate-x-0 peer-checked:translate-y-0 peer-checked:pointer-events-auto">

                <div class="mobile-menu-panel bg-sColor border border-pColor/40 border-r-4 border-r-pColor rounded-3xl shadow-2xl overflow-hidden">
                  
                  <!-- Mobile menu top branding -->
                  <div class="bg-pColor/70 px-4 py-4 border-b border-white/20">
                    <div class="flex items-center gap-3">
                      <div class="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center shadow-md">
                        <img src="./src/images/logo.png" alt="SMA Fighter Olivia" class="w-10 h-auto">
                      </div>

                      <div>
                        <p class="text-sm opacity-80 leading-none">Welcome to</p>
                        <h3 class="text-lg font-bold leading-tight">SMA Fighter Olivia</h3>
                      </div>
                    </div>
                  </div>

                  <!-- Mobile menu links -->
                  <div class="mobile-menu-scroll max-h-[68vh] overflow-y-auto bg-transparent">
                    <ul class="mobile-menu-list">
                      <li>
                        <a href="index.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-base font-semibold hover:text-btnColor1 pro-mobile-link">
                          <span class="mobile-menu-icon-box">
                            <i class="fa-solid fa-house"></i>
                          </span>
                          <span>Home</span>
                        </a>
                      </li>

                      <li>
                        <a href="sma-fighter-olivia-story.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-base font-semibold hover:text-btnColor1 pro-mobile-link">
                          <span class="mobile-menu-icon-box">
                            <i class="fa-solid fa-book-open-reader"></i>
                          </span>
                          <span>Olivia's Story</span>
                        </a>
                      </li>

                      <li>
                        <a href="sma-fighter-olivia-executive-committee.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-base font-semibold hover:text-btnColor1 pro-mobile-link">
                          <span class="mobile-menu-icon-box">
                            <i class="fa-solid fa-users-gear"></i>
                          </span>
                          <span>Executive Committee</span>
                        </a>
                      </li>

                      <li>
                        <a href="sma-fighter-olivia-medical-history.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-base font-semibold hover:text-btnColor1 pro-mobile-link">
                          <span class="mobile-menu-icon-box">
                            <i class="fa-solid fa-user-doctor"></i>
                          </span>
                          <span>Health Providers</span>
                        </a>
                      </li>

                      <li>
                        <a href="sma-fighter-olivia-update and progress.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-base font-semibold hover:text-btnColor1 pro-mobile-link">
                          <span class="mobile-menu-icon-box">
                            <i class="fa-solid fa-chart-line"></i>
                          </span>
                          <span>Update & Progress</span>
                        </a>
                      </li>

                      <li>
                        <a href="sma-fighter-olivia-about-sma.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-base font-semibold hover:text-btnColor1 pro-mobile-link">
                          <span class="mobile-menu-icon-box">
                            <i class="fa-solid fa-dna"></i>
                          </span>
                          <span>About SMA</span>
                        </a>
                      </li>

                      <!-- Mobile Gallery Dropdown -->
                      <li>
                        <details class="mobile-gallery-details">
                          <summary class="text-base font-semibold hover:text-btnColor1 pro-mobile-link cursor-pointer">
                            <span class="mobile-menu-icon-box">
                              <i class="fa-solid fa-images"></i>
                            </span>
                            <span>Gallery</span>
                          </summary>

                          <ul class="mobile-submenu-list rounded-2xl bg-pColor/25 border-l-4 border-btnColor1">
                            <li>
                              <a href="sma-fighter-olivia-photo-gallery.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-sm font-medium hover:text-btnColor1 pro-mobile-link">
                                <span class="mobile-submenu-icon-box">
                                  <i class="fa-regular fa-image"></i>
                                </span>
                                <span>Photo Gallery</span>
                              </a>
                            </li>

                            <li>
                              <a href="sma-fighter-olivia-video-gallery.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-sm font-medium hover:text-btnColor1 pro-mobile-link">
                                <span class="mobile-submenu-icon-box">
                                  <i class="fa-solid fa-video"></i>
                                </span>
                                <span>Video Gallery</span>
                              </a>
                            </li>
                          </ul>
                        </details>
                      </li>

                      <li>
                        <a href="cure-sma-bd-blog.html" onclick="document.getElementById('mobile-menu-toggle').checked=false" class="text-base font-semibold hover:text-btnColor1 pro-mobile-link">
                          <span class="mobile-menu-icon-box">
                            <i class="fa-solid fa-blog"></i>
                          </span>
                          <span>Blog</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <!-- Mobile menu bottom CTA -->
                  <div class="p-4 border-t border-white/20 bg-pColor/35">
                    <a href="#" onclick="document.getElementById('mobile-menu-toggle').checked=false; Gdonate_modal.showModal();" class="w-full flex items-center justify-center gap-2 rounded-2xl bg-btnColor1 hover:bg-btnColor2 text-white font-bold py-3 shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95">
                      <i class="fa-solid fa-heart-circle-check"></i>
                      Donate for Olivia
                    </a>
                  </div>
                </div>
              </div>
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
                <a href="sma-fighter-olivia-executive-committee.html" class="hover:text-btnColor1 pro-nav-link">
                  Executive Committee
                </a>
              </li>

              <li>
                <a href="sma-fighter-olivia-health-providers.html" class="hover:text-btnColor1 pro-nav-link">
                  Health Providers
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
              <p class="text-center">bKash / Nagad / Rocket: 01553350892</p>

              <p class="text-center font-bold">Reference:</p>
              <p class="text-center">Your NAME_CONTACT NO.</p>
            </div>

            <div class="border-2 border-white rounded-lg bg-white bg-opacity-25 mb-4 transition-all duration-300 hover:shadow-lg">
              <p class="text-center font-bold pt-4">Bank Transfer</p>

              <div class="flex flex-col md:flex-row gap-4 p-4 justify-between">
                <div class="flex-1">
                  <p class="font-semibold">Bank: DBBL (Olivia’s Mothers Account)</p>
                  <p>Name: Shahin Akter Shanu</p>
                  <p>First Name: Shahin Akter</p>
                  <p>Last Name: Shanu</p>
                  <p>Branch: Shantinagar</p>
                  <p>Account No.: 1081570018032</p>
                  <p>Routing No.: 090276349</p>
                </div>

                <div class="hidden md:block w-px bg-white"></div>

                <!-- <div class="flex-1">
                  <p class="font-semibold">Bank: City</p>
                  <p>Name: Nabone</p>
                  <p>First Name: Nabone</p>
                  <p>Last Name: Nabone</p>
                  <p>Branch: Kawranbazar</p>
                  <p>Account No.: 034980239840280</p>
                  <p>Routing No.: 39840280</p>
                </div> -->
              </div>
            </div>

            <!-- <div class="border-2 border-white rounded-lg bg-white bg-opacity-25 mb-4 transition-all duration-300 hover:shadow-lg">
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
              </div>  -->
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