function loadexecutiveCommittee() {
  if (document.getElementById("executiveCommitteeSection")) return;

  const executiveCommittee = [
    {
      name: "Prof. Dr. Md. Abid Hossain Mollah",
      role: "Pediatric Specialist",
      image: "./src/images/health-provider-1.jpg",
      desc: "Provides expert pediatric guidance and medical awareness support for Olivia’s treatment journey.",
    },
    {
      name: "Prof. Dr. Mizanur Rahman",
      role: "Neurologist",
      image: "./src/images/CG_Prof. Dr. Mizanur Rahman.jpg",
      desc: "Supports the medical team with neurological advice and SMA treatment direction.",
    },
    {
      name: "Dr. Saoli Sarker",
      role: "Pediatric Neurology Specialist",
      image: "./src/images/health-provider-3.jpg",
      desc: "Dedicated specialist helping Olivia’s care plan with compassion and continuous follow-up.",
    },
    {
      name: "Dr. Farhana Akter",
      role: "Child Health Specialist",
      image: "./src/images/health-provider-4.jpg",
      desc: "Works on child health awareness, family support, and patient-centered care planning.",
    },
    {
      name: "Dr. Mahmudul Hasan",
      role: "Medical Advisor",
      image: "./src/images/health-provider-5.jpg",
      desc: "Helps promote proper care, treatment communication, and healthcare awareness.",
    },
    {
      name: "Dr. Nusrat Jahan",
      role: "Pediatric Consultant",
      image: "./src/images/health-provider-6.jpg",
      desc: "Contributes professional advice for child care, nutrition, and patient support planning.",
    },
    {
      name: "Dr. Rakib Ahmed",
      role: "Clinical Support Advisor",
      image: "./src/images/health-provider-7.jpg",
      desc: "Coordinates treatment follow-up, clinical support, and health communication.",
    },
    {
      name: "Dr. Samia Rahman",
      role: "Health Awareness Advisor",
      image: "./src/images/health-provider-8.jpg",
      desc: "Supports public awareness, family counseling, and SMA education activities.",
    },
    {
      name: "Dr. Tanvir Islam",
      role: "Rehabilitation Advisor",
      image: "./src/images/health-provider-9.jpg",
      desc: "Advises on therapy, mobility support, rehabilitation, and long-term care needs.",
    },
    {
      name: "Dr. Jannatul Ferdous",
      role: "Medical Team Member",
      image: "./src/images/health-provider-10.jpg",
      desc: "Assists with care planning, awareness building, and patient support coordination.",
    },
    {
      name: "Dr. Rashed Karim",
      role: "Senior Health Consultant",
      image: "./src/images/health-provider-11.jpg",
      desc: "Provides support in treatment direction, consultation, and patient advocacy.",
    },
    {
      name: "Dr. Tania Sultana",
      role: "Child Care Advisor",
      image: "./src/images/health-provider-12.jpg",
      desc: "Works on child support planning, awareness building, and community health guidance.",
    },
  ];

  const sectionHTML = `
    <style>
      @keyframes ecHeroFade {
        from {
          opacity: 0;
          transform: translateY(18px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes ecCardFade {
        from {
          opacity: 0;
          transform: translateY(36px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes ecFloat {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-12px);
        }
      }

      @keyframes ecPulse {
        0%, 100% {
          transform: scale(1);
          opacity: 0.85;
        }
        50% {
          transform: scale(1.07);
          opacity: 1;
        }
      }

      .ec-hero-fade {
        animation: ecHeroFade 0.8s ease both;
      }

      .ec-card-fade {
        animation: ecCardFade 0.75s ease both;
      }

      .ec-float {
        animation: ecFloat 4.5s ease-in-out infinite;
      }

      .ec-pulse {
        animation: ecPulse 4.5s ease-in-out infinite;
      }
    </style>

    <section id="executiveCommitteeSection" class="overflow-hidden bg-white font-poppins">
      <!-- Banner -->
      <div class="relative overflow-hidden bg-gradient-to-r from-[#FBD4C0] to-pink-100 px-4 sm:px-6 lg:px-10 py-10 lg:py-14">
        <div class="absolute inset-0 opacity-40">
          <div class="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/50 blur-3xl"></div>
          <div class="absolute right-20 top-8 h-72 w-72 rounded-full bg-pink-400/30 blur-3xl"></div>
          <div class="absolute bottom-0 right-0 text-[160px] leading-none text-white/20">♡</div>
        </div>

        <div class="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div class="ec-hero-fade">
            <p class="inline-flex items-center gap-2 text-sm font-bold text-pink-700">
              <span class="text-lg">❤❤</span>
               SMA Fighter Olivia Leadership Team
              <span class="tracking-[5px] text-pink-500/50">......</span>
            </p>

            <h1 class="mt-3 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Executive
              <span class="text-pink-600">Committee</span>
            </h1>

            <p class="mt-5 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base lg:text-lg">
              A dedicated group of leaders, organizers, advisors, and well-wishers working together with transparency, responsibility, and compassion to guide Olivia’s mission, support her treatment journey, and strengthen awareness for SMA.
            </p>
          </div>

          <div class="hidden justify-center lg:flex">
            <div class="ec-float relative">
              <div class="ec-pulse absolute inset-0 rounded-full bg-white/60 blur-xl"></div>
              <div class="relative grid h-48 w-48 place-items-center rounded-full border-[5px] border-pink-600 bg-white text-center shadow-2xl">
                <div>
                  <div class="text-4xl text-pink-600">❤</div>
                  <h3 class="mt-2 font-bold">
                    Together<br />
                    We Care<br />
                    We Support<br />
                    We Heal
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        <div
          id="executiveCommitteeGrid"
          class="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        ></div>
      </div>
    </section>
  `;

  if (document.readyState === "loading") {
    document.write(sectionHTML);
  } else {
    document.body.insertAdjacentHTML("beforeend", sectionHTML);
  }

  function renderexecutiveCommitteeCards() {
    const grid = document.getElementById("executiveCommitteeGrid");
    if (!grid) return;

    grid.innerHTML = executiveCommittee
      .map(function (member, index) {
        return `
          <article
            class="ec-card-fade group overflow-hidden bg-white shadow-[0_12px_35px_rgba(15,23,42,0.10)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(236,72,153,0.18)]"
            style="animation-delay: ${index * 70}ms;"
          >
            <!-- Image -->
            <div class="h-[300px] overflow-hidden bg-pink-50 sm:h-[320px]">
              <img
                src="${member.image}"
                alt="${member.name}"
                loading="lazy"
                class="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80';"
              />
            </div>

            <!-- Name Blue Bar -->
            <div class="bg-[#00679f] px-4 py-2 text-center">
              <h3 class="text-base font-bold uppercase tracking-[4px] text-white">
                ${member.name}
              </h3>
            </div>

            <!-- Content -->
            <div class="px-5 py-5 text-center">
              <p class="text-sm font-black uppercase tracking-[6px] text-[#00679f]">
                ${member.role}
              </p>

              <p class="mt-4 min-h-[72px] text-sm leading-relaxed text-slate-600">
                ${member.desc}
              </p>

              <div class="mx-auto mt-4 h-[2px] w-12 rounded-full bg-[#00679f]/80"></div>

              <div class="mt-5 flex items-center justify-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  class="grid h-9 w-9 place-items-center rounded bg-pink-500 text-white transition hover:-translate-y-1 hover:bg-[#00679f]"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  class="grid h-9 w-9 place-items-center rounded bg-pink-500 text-white transition hover:-translate-y-1 hover:bg-[#00679f]"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>

                <a
                  href="#"
                  aria-label="Email"
                  class="grid h-9 w-9 place-items-center rounded bg-pink-500 text-white transition hover:-translate-y-1 hover:bg-[#00679f]"
                >
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  setTimeout(renderexecutiveCommitteeCards, 120);
}