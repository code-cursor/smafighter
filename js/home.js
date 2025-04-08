// Banner Section
function loadBanner() {
  document.write(`
      <!-- Banner Section -->
      <section class="mx-8 xl:mt-4 mb-20 lg:relative">
        <div class="flex flex-col lg:flex-row">
          <!-- Left Side -->
          <div class="lg:absolute bottom-6 xl:bottom-0">
            <div>
              <img class="w-[600px] md:w-full lg:w-[400px] xl:w-[600px] h-full object-cover rounded-tr-[100px]" src="./src/images/banner_image.jpg" alt="SMA Fighter Olivia">
            </div>
          </div>
          
          <!-- Right Side -->
          <div class="rounded-tr-[100px] bg-gradient-to-b from-[#f7a072] to-white">
            <div>
              <h2 class="font-bold lg:leading-normal xl:leading-normal text-3xl md:text-4xl xl:text-5xl text-white mb-4 mt-8 pl-6 xl:pl-[650px]">
                OLIVIA SANCHAREE NABONEE <br> Age- 2.6 Years
              </h2>
              <div class="rounded-tr-[100px] pr-5 lg:pr-20 pl-6 lg:pl-[450px] xl:pl-[650px] banner-bgw">
                <h4 class="font-bold text-xl xl:text-2xl mb-4 pt-6">ABOUT SMA Fighter Olivia</h4>
                <p class="font-normal lg:leading-8 xl:leading-8 text-justify text-base lg:text-lg xl:text-xl">
                  2.6 years old Nabonee is suffering from SMA (Spinal Muscular Atrophy- Type 1). She is the 1st SMA patient in Bangladesh who is receiving medical treatment. <br>
                  We could identify some symptoms when our Nabonee was 25 days old. As our first child died with the same symptoms, we were aware and careful about Nabonee. We immediately went to the hospital, and the physicians suspected that she has SMA. We then went to India and had genetic tests. The results confirmed that Nabonee is suffering from the most critical type of SMA (Type-1). <br>
                  Almost 10 years back, our elder daughter Dhrity died at the age of 5 months with the symptoms of SMA.
                  <a class="ps-3 text-btnColor1 hover:text-green-400" href="sma-fighter-olivia-story.html">Read More...</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `);
}

// home page reference videos
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

// learn about SMA
function learnAboutSma() {
  // Ensure the container exists
  const smaContainer = document.getElementById("smaContainer");
  if (!smaContainer) {
    console.error("Error: #smaContainer not found!");
    return;
  }

  // Remove existing section if it already exists
  const existingSection = smaContainer.querySelector(".sma-section");
  if (existingSection) {
    existingSection.remove();
  }

  // Create main wrapper
  const section = document.createElement("div");
  section.className = "sma-section bg-pColor/50 rounded-xl py-8 my-8";

  // Inner container
  const container = document.createElement("div");
  container.className = "px-8 py-8 bg-[#f9f7f3] drop-shadow-lg";

  // Flex container for text and image
  const flexContainer = document.createElement("div");
  flexContainer.className = "lg:flex justify-between items-center text-center";

  // Left text content
  const textDiv = document.createElement("div");
  textDiv.className = "w-full lg:w-1/2 lg:mr-16";
  textDiv.innerHTML = `
      <h1 class="text-2xl font-bold text-center mb-6 text-btnColor2">Learn about SMA</h1>
      <p class="text-sm leading-normal lg:text-lg xl:leading-8 text-justify">
        Spinal Muscular Atrophy (SMA) is a rare genetic neuromuscular condition, affecting approximately 1 in 10,000 people.
        Muscle wasting and gradual mobility loss are symptoms of spinal muscular atrophy. It is brought on by degeneration of
        the nerve cells (motor neurons) that link the brain, spinal cord, and muscles of the body. The muscles used for movements 
        like crawling, walking, sitting up, moving the head, and even swallowing gradually weaken and shrink (atrophied) as the 
        connection between the nerves and muscles is interrupted.
      </p>
    `;

  // Right image container
  const imageDiv = document.createElement("div");
  imageDiv.className = "w-full lg:w-1/2";

  const image = document.createElement("img");
  image.src = "./src/images/about_SMA.png";
  image.alt = "SMA Fighter Olivia";

  imageDiv.appendChild(image);

  // Append text and image to flex container
  flexContainer.appendChild(textDiv);
  flexContainer.appendChild(imageDiv);

  // Read More button section
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "text-center py-8";

  const button = document.createElement("a");
  button.href = "sma-fighter-olivia-medical-history.html";
  button.className =
    "pBtn bg-pColor hover:bg-sColor hover:text-btnColor1 transition px-4 py-2 rounded";
  button.innerText = "Read More";

  buttonDiv.appendChild(button);

  // Assemble everything
  container.appendChild(flexContainer);
  container.appendChild(buttonDiv);
  section.appendChild(container);

  // Append to main container
  smaContainer.appendChild(section);
}

// Run function when DOM is fully loaded
document.addEventListener("DOMContentLoaded", learnAboutSma);
