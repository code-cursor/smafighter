function loadFooter() {
  document.write(`
      <footer class="pt-4 bg-gradient-to-b from-pColor to-orange-600" style="border-radius: 120px 0px 0px;">
        <!-- Footer Body -->
        <div class="px-8 md:pt-6 pb-4 md:pb-6">
          <div class="flex flex-col sm:flex-row text-center lg:text-left md:justify-between">
            <div class="w-32 md:w-48 ml-28 md:ml-0 hidden md:block">
              <img src="./src/images/logo.png" alt="SMA Fighter Olivia Logo">
            </div>
            
            <div>
              <h1 class="pb-3 text-xl font-semibold">SMA Fighter Olivia</h1>
              <div class="text-lg font-light">
                <p>152/C Doctor Lane, Boro Mogbazar, Ramna, Dhaka 1217, Bangladesh<br></p>
                <p><a class="flex-1 text-decoration-none hover:text-white" href="tel:+8801716912288">+88 01716-912288</a></p>
                <p><a class="flex-1 text-decoration-none hover:text-white" href="mailto:info@smafighterolivia.com">info@smafighterolivia.com</a></p>
              </div>
            </div>
            
            <div class="mb-6 sm:mb-0 text-center ml-32 md:ml-0 hidden lg:block">
              <h1 class="flex pb-3 text-xl font-semibold">FOLLOW ME</h1>
              <div>
                <div class="mb-4 flex">
                  <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook bg-white text-4xl py-1 px-[6px] rounded mr-[14px] hover:text-[#3b5998]"></i></a>
                  <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin bg-white text-4xl py-1 px-2 rounded hover:text-[#0A66C2]"></i></a>
                </div>
                <div class="flex">
                  <a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube bg-white text-4xl py-[6px] px-1 rounded mr-[14px] hover:text-[#CD201F]"></i></a>
                  <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram bg-white text-4xl py-1 px-1 rounded hover:text-orange-500"></i></a>
                </div>
              </div>
            </div>
        
            <div>
              <h1 class="pb-3 text-xl font-semibold">Get Involved</h1>
              <ul>
                <li><a href="sma-fighter-olivia-story.html" class="text-lg font-light hover:text-white hover:underline">Olivia's Story</a></li>
                <li><a href="sma-fighter-olivia-medical-history.html" class="text-lg font-light hover:text-white hover:underline">Medical History</a></li>
                <li><a href="sma-fighter-olivia-executive-committee.html" class="text-lg font-light hover:text-white hover:underline">Executive Committee</a></li>
                <li><a href="sma-fighter-olivia-update and progress.html" class="text-lg font-light hover:text-white hover:underline">Update & Progress</a></li>
                <li><a href="sma-fighter-olivia-contact.html" class="text-lg font-light hover:text-white hover:underline">Contact</a></li>
              </ul>
            </div>
          </div>    
        </div>
      
        <!-- Footer Bottom -->
        <div>
          <span>
            <hr class="h-3">
          </span>
          <div class="px-8 text-base pb-4 pt-2 flex justify-between text-center text-white mx-auto">
            <div>
              <p>Copyright © 2025-26 SMA Fighter Olivia</p>
            </div>
            <div>
              <p><a class="text-decoration-none text-white hover:text-black hover:underline" href="privacy-policy-for-sma-fighter-olivia.html" target="_blank">Privacy Policy</a></p>
            </div>
            <div>
              <p>Developed by: <a class="text-decoration-none text-white hover:text-black hover:underline" href="http://www.codecursor.com" target="_blank">Code Cursor</a></p>
            </div>
          </div> 
        </div>
  
        <!-- Go to Top Button -->
        <a href="#" class="fixed bottom-[25px] right-[18px] text-[50px] text-btnColor1 no-underline text-center leading-[50px] bg-white/50 rounded-full shadow-lg hover:bg-btnColor1 hover:text-white hover:shadow-xl transition duration-300 ease-in-out z-50" id="goTop" title="Go to top">
          <i class="fa-solid fa-file-arrow-up"></i>
        </a>
      </footer>
    `);
}
