// Banner Section start
function loadBanner() {
  if (document.getElementById("oliviaBannerRoot")) return;

  function ensureTailwindCdn() {
    const hasTailwindScript = document.querySelector('script[src*="cdn.tailwindcss.com"]');

    if (!hasTailwindScript) {
      const tailwindScript = document.createElement("script");
      tailwindScript.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(tailwindScript);
    }
  }

  ensureTailwindCdn();

  const bannerHTML = `
    <style>
      @keyframes oliviaFadeUp {
        from {
          opacity: 0;
          transform: translateY(28px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes oliviaFadeScale {
        from {
          opacity: 0;
          transform: scale(0.96);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes oliviaHeartBeat {
        0%, 100% {
          transform: scale(1);
        }
        35% {
          transform: scale(1.24);
        }
        65% {
          transform: scale(0.95);
        }
      }

      @keyframes oliviaSoftPulse {
        0%, 100% {
          transform: scale(1);
          opacity: 0.7;
        }
        50% {
          transform: scale(1.08);
          opacity: 1;
        }
      }

      @keyframes oliviaFloatShape {
        0%, 100% {
          transform: rotate(-3deg) translateY(0);
        }
        50% {
          transform: rotate(-1deg) translateY(-12px);
        }
      }

      @keyframes oliviaImageZoom {
        from {
          transform: scale(1.03);
        }
        to {
          transform: scale(1.09);
        }
      }

      @keyframes oliviaBadgeFloat {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-12px);
        }
      }

      @keyframes oliviaFloatHeart {
        0%, 100% {
          transform: translateY(0) rotate(-6deg);
        }
        50% {
          transform: translateY(-16px) rotate(8deg);
        }
      }

      .olivia-fade-up {
        animation: oliviaFadeUp 0.9s ease both;
      }

      .olivia-fade-scale {
        animation: oliviaFadeScale 1s ease both;
      }

      .olivia-heart-beat {
        animation: oliviaHeartBeat 1.5s ease-in-out infinite;
      }

      .olivia-soft-pulse {
        animation: oliviaSoftPulse 5s ease-in-out infinite;
      }

      .olivia-soft-pulse-reverse {
        animation: oliviaSoftPulse 6.5s ease-in-out infinite reverse;
      }

      .olivia-float-shape {
        animation: oliviaFloatShape 6s ease-in-out infinite;
      }

      .olivia-image-zoom {
        animation: oliviaImageZoom 12s ease-in-out infinite alternate;
      }

      .olivia-badge-float {
        animation: oliviaBadgeFloat 3.5s ease-in-out infinite;
      }

      .olivia-float-heart {
        animation: oliviaFloatHeart 4.4s ease-in-out infinite;
      }

      #autoScrollText {
        scrollbar-width: thin;
        scrollbar-color: #ec4899 #ffe4ef;
      }

      #autoScrollText::-webkit-scrollbar {
        width: 8px;
      }

      #autoScrollText::-webkit-scrollbar-track {
        background: #ffe4ef;
        border-radius: 999px;
      }

      #autoScrollText::-webkit-scrollbar-thumb {
        background: linear-gradient(#ec4899, #db2777);
        border-radius: 999px;
      }
    </style>

    <main id="oliviaBannerRoot" class="max-w-[1440px] mx-auto font-['Poppins',sans-serif]">
      <section
        class="relative w-[calc(100%-28px)] max-w-[1420px] mx-auto my-6 min-h-[520px] overflow-hidden rounded-[18px] border border-[#ffd2e3] shadow-[0_22px_70px_rgba(226,42,115,0.16)] bg-[linear-gradient(110deg,#fffafb_0%,#fff6fa_52%,#ffe6f0_100%)]"
        aria-label="Olivia charity hero section"
      >
        <div class="absolute -right-[135px] -top-[95px] w-[520px] h-[520px] rounded-full bg-pink-400/20 olivia-soft-pulse"></div>
        <div class="absolute right-[220px] -bottom-[210px] w-[360px] h-[360px] rounded-full bg-pink-300/25 olivia-soft-pulse-reverse"></div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-10 min-h-[520px] items-center px-5 sm:px-8 lg:px-[54px] py-10 lg:py-[52px]">
          <div class="max-w-[650px] olivia-fade-up">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-700 text-white text-sm sm:text-sm md:text-md lg:text-lg font-bold shadow-[0_12px_24px_rgba(236,72,153,0.26)]">
              <span class="olivia-heart-beat">♥</span>
              For one small life, we ask the world.
            </div>

            <h1 class="mt-6 text-[24px] sm:text-[24px] md:text-[42px] lg:text-[50px] leading-[0.98] tracking-[-1px] sm:tracking-[-1px] lg:tracking-[-2px] font-black text-[#24104a]">
              Olivia’s  Fight  is  Our  Fight
            </h1>

            <div
              class="mt-4 text-pink-500 text-[24px] sm:text-[24px] md:text-[30px] lg:text-[40px] leading-none font-normal"
              style="font-family: 'Brush Script MT', cursive;"
            >
              Hope. Strength. Cure. ♡
            </div>

            <div class="relative mt-6 w-full max-w-[650px] h-[170px] sm:h-[180px] overflow-hidden rounded-[18px] bg-white/75 border border-pink-400/20 shadow-[0_16px_40px_rgba(219,39,119,0.08)] backdrop-blur-md">
              <div class="pointer-events-none absolute top-0 left-0 right-3 h-9 z-10 bg-gradient-to-b from-white to-transparent"></div>
              <div class="pointer-events-none absolute bottom-0 left-0 right-3 h-9 z-10 bg-gradient-to-t from-white to-transparent"></div>

              <div id="autoScrollText" tabindex="0" aria-label="Scrollable Olivia story"
                class="h-full overflow-y-auto px-5 pt-5 pb-7 text-[#394150] text-[16px] sm:text-[17px] leading-[1.72] font-medium">
                <p id="storyText" class="pb-8">
                  On June 20, 2021,<br>
                  Olivia Sanchari Naboni was born into our lives — a light we never imagined we would have to fight so hard to protect.<br><br>

                  Today, she is a 5-year-old warrior living with Spinal Muscular Atrophy (SMA) Type 1 — a rare and life-threatening genetic disease that weakens her muscles every day.<br><br>

                  But her spirit? Unbreakable.<br><br>

                  Olivia has memorized over 200 songs.<br>
                  She knows colors, countries, continents, and maps.<br>
                  She asks questions. She laughs. She dreams.<br><br>

                  Yet each day depends on continuous medical care —<br>
                  Life-saving medication, therapy, respiratory monitoring, and international specialist follow-ups.<br><br>

                  There is no specialized SMA center in Bangladesh.<br>
                  No insurance coverage.<br>
                  Only a family fighting relentlessly — and hoping the world will stand with them.<br><br>

                  This website is more than a fundraising platform.<br>
                  It is a call to protect a child’s future.<br>
                  It is a testament to courage.<br>
                  It is an invitation to compassion.<br><br>

                  Your support means:<br>
                  Another step.<br>
                  Another breath.<br>
                  Another song.<br>
                  Another tomorrow.<br><br>

                  We believe bodies may weaken — but dreams should not.<br><br>
                  Join us in giving Olivia the chance to grow, to sing, and one day, to walk freely.<br><br>
                  Because this fight is not just hers.<br>
                  It belongs to all of us.<br>
                </p>
              </div>

              <div
                id="scrollHint"
                class="absolute right-4 bottom-3 z-20 px-3 py-1 rounded-full bg-pink-500/10 text-pink-700 text-[11px] font-bold"
              >
                Auto reading
              </div>
            </div>

            <div class="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
              <button
                type="button"
                onclick="openDonationModal(event)"
                class="min-w-[178px] px-6 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-pink-700 text-white font-bold shadow-[0_16px_28px_rgba(236,72,153,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_rgba(236,72,153,0.36)]"
              >
                ♥ Donate Now
              </button>

              <a
                href="#olivia-story"
                class="min-w-[178px] inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/60 border border-pink-400/40 text-pink-700 font-bold transition duration-300 hover:-translate-y-1"
              >
                <i class="fa-solid fa-book-open"></i> Learn Olivia’s Story
              </a>
            </div>
          </div>

          <div class="relative min-h-[360px] lg:min-h-[430px] olivia-fade-scale">
            <div class="absolute inset-[8px_-22px_2px_54px] rounded-[56%_18%_20%_50%] bg-gradient-to-br from-pink-400/25 to-pink-700/70 olivia-float-shape"></div>

            <div class="absolute right-8 top-8 text-pink-500 text-4xl opacity-80 olivia-float-heart z-20">♡</div>
            <div class="hidden sm:block absolute left-28 top-20 text-pink-500 text-5xl opacity-80 olivia-float-heart z-20">♡</div>
            <div class="hidden sm:block absolute right-40 bottom-10 text-pink-500 text-3xl opacity-80 olivia-float-heart z-20">♡</div>

            <div class="relative lg:ml-8 h-[330px] sm:h-[400px] lg:h-[430px] overflow-hidden rounded-[34px] lg:rounded-[180px_30px_30px_180px] border-[10px] border-white shadow-[0_26px_70px_rgba(72,18,52,0.2)] bg-pink-100">
              <img
                src="./src/images/banner_image.jpg"
                alt="Olivia's photo"
                class="w-full h-full object-cover object-center olivia-image-zoom"
              />
            </div>

            <div class="absolute left-6 lg:left-0 bottom-5 lg:bottom-10 w-[140px] h-[140px] lg:w-[178px] lg:h-[178px] rounded-full grid place-items-center text-center text-white bg-gradient-to-br from-pink-400 to-pink-700 border-[6px] lg:border-8 border-white shadow-[0_18px_42px_rgba(219,39,119,0.28)] olivia-badge-float">
              <div>
                <span class="block text-[28px] lg:text-[36px] mb-1">♡</span>
                <strong class="text-[12px] lg:text-[18px] leading-tight">
                  Your<br />
                  Support<br />
                  Brings Hope<br />
                  to Olivia
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;

  if (document.readyState === "loading") {
    document.write(bannerHTML);
  } else {
    document.body.insertAdjacentHTML("beforeend", bannerHTML);
  }

  initOliviaBannerScroll();
}

function initOliviaBannerScroll() {
  const SCROLL_DURATION_SECONDS = 90;
  const SCROLL_START_DELAY_MS = 10000; // starts after 10 seconds
  const BOTTOM_PAUSE_MS = 4200;

  const scrollBox = document.getElementById("autoScrollText");
  const storyText = document.getElementById("storyText");
  const scrollHint = document.getElementById("scrollHint");

  if (!scrollBox || !storyText || !scrollHint) {
    console.warn("Banner scroll elements not found yet.");
    return;
  }

  let animationFrameId = null;
  let startDelayTimer = null;
  let bottomPauseTimer = null;
  let isPaused = false;

  window.openDonationModal = function (event) {
    if (event) event.preventDefault();

    if (
      window.Gdonate_modal &&
      typeof window.Gdonate_modal.showModal === "function"
    ) {
      window.Gdonate_modal.showModal();
      return;
    }

    const donateSection = document.querySelector("#donate, [data-donate-section]");

    if (donateSection) {
      donateSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    console.info(
      "Donation modal is not available. Add Gdonate_modal.showModal() or a #donate section."
    );
  };

  function updateHint(text) {
    scrollHint.textContent = text;
  }

  function getMaxScroll() {
    return Math.max(0, scrollBox.scrollHeight - scrollBox.clientHeight);
  }

  function clearAutoScroll() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    if (startDelayTimer) {
      clearTimeout(startDelayTimer);
      startDelayTimer = null;
    }

    if (bottomPauseTimer) {
      clearTimeout(bottomPauseTimer);
      bottomPauseTimer = null;
    }
  }

  function beginScrollAnimation() {
    const maxScroll = getMaxScroll();

    if (maxScroll <= 0) {
      updateHint("Full text visible");
      return;
    }

    const scrollDurationMs = SCROLL_DURATION_SECONDS * 1000;
    const pxPerMs = maxScroll / scrollDurationMs;

    let currentScroll = scrollBox.scrollTop;
    let lastTime = null;

    updateHint(`${SCROLL_DURATION_SECONDS}s readable auto scroll`);

    function animateScroll(timestamp) {
      if (!lastTime) {
        lastTime = timestamp;
      }

      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      if (!isPaused) {
        currentScroll += pxPerMs * deltaTime;

        if (currentScroll >= maxScroll) {
          scrollBox.scrollTop = maxScroll;
          clearAutoScroll();

          bottomPauseTimer = setTimeout(function () {
            scrollBox.scrollTo({
              top: 0,
              behavior: "smooth",
            });

            updateHint(`Scrolling starts in ${SCROLL_START_DELAY_MS / 1000}s`);

            startDelayTimer = setTimeout(function () {
              scrollBox.scrollTop = 0;
              beginScrollAnimation();
            }, SCROLL_START_DELAY_MS);
          }, BOTTOM_PAUSE_MS);

          return;
        }

        scrollBox.scrollTop = currentScroll;
      } else {
        currentScroll = scrollBox.scrollTop;
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    }

    animationFrameId = requestAnimationFrame(animateScroll);
  }

  function startAutoScroll() {
    clearAutoScroll();

    scrollBox.scrollTop = 0;

    const maxScroll = getMaxScroll();

    if (maxScroll <= 0) {
      updateHint("Full text visible");
      return;
    }

    updateHint(`Scrolling starts in ${SCROLL_START_DELAY_MS / 1000}s`);

    startDelayTimer = setTimeout(beginScrollAnimation, SCROLL_START_DELAY_MS);
  }

  scrollBox.addEventListener("mouseenter", function () {
    isPaused = true;
    updateHint("Paused");
  });

  scrollBox.addEventListener("mouseleave", function () {
    isPaused = false;
    updateHint(`${SCROLL_DURATION_SECONDS}s readable auto scroll`);
  });

  scrollBox.addEventListener("focus", function () {
    isPaused = true;
    updateHint("Paused");
  });

  scrollBox.addEventListener("blur", function () {
    isPaused = false;
    updateHint(`${SCROLL_DURATION_SECONDS}s readable auto scroll`);
  });

  window.addEventListener("resize", function () {
    startAutoScroll();
  });

  setTimeout(startAutoScroll, 500);
}
// Banner Section end

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
      <h1 class="text-2xl font-bold text-center mb-6 ">Learn about SMA</h1>
      <p class="text-[16px] sm:text-[17px] leading-normal xl:leading-8 text-justify">
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
