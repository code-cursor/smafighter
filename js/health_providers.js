function loadhealthproviders() {
  if (document.getElementById("healthprovidersSection")) return;

  const members = [
    {
      name: "Prof. Dr. Muhammad Mizanur Rahman",
      role: "MBBS, FCPS",
      specialist: "Pediatric Neurology Specialist",
      image: "./src/images/CG_Prof. Dr. Mizanur Rahman.webp",
      desc: "Former Chairman Department of Child Neurology, Bangabandhu Sheikh Mujib Medical University",
    },
    {
      name: "Prof. Dr. A. R. M. Luthful Kabir",
      role: "MBBS, FCPS (Paediatrics) Fellow",
      specialist: "Child Respiratory Medicine (Australia), Child Specialist & Pulmonologist",
      image: "./src/images/CG_Prof. Dr. A. R. M. Luthful Kabir.webp",
      desc: "Professor of Pediatrics Ad-din Women’s Medical College, Moghbazar, Dhaka",
    },
    {
      name: "Prof. Dr. Md. Abid Hossain Mollah",
      role: "MBBS, FCPS (Paediatrics)",
      specialist: "D-MED (UK), FACP (USA), FRCP (UK), Neonatal & Child Diseases Specialist",
      image: "./src/images/CG_Prof. Dr. Md. Abid Hossain Mollah.webp",
      desc: "Professor & Head, Pediatrics, Birdem General Hospital & Ibrahim Medical College",
    },
    {
      name: "Prof. Dr. Probir Kumar Sarker",
      role: "MBBS, FCPS, MCPS, DCH",
      specialist: "Child Diseases, Child Asthma & Child Chest Diseases Specialist",
      image: "./src/images/CG_Prof. Dr. Probir Kumar Sarker.webp",
      desc: "SProfessor of Paediatric Respiratory Medicine & Deputy Director, Bangladesh Shishu Hospital & Institute",
    },
    {
      name: "rof. Dr Sarwar Ibne Salam",
      role: "MBBS, MS in Orthopedic Surgery",
      specialist: "Fellowship in Pediatric Orthopedics, Observerahip in Paediatric Orthopedics",
      image: "./src/images/CG_Prof. Dr Sarwar Ibne Salam.webp",
      desc: "Head of the Department, Paediatric Orthopaedics, National Institute of Traumatology & Orthopaedic Rehabilitation (NITOR)",
    },
    {
      name: "Dr. Sanjukta Dey",
      role: "MBBSDCH (Cal), DNB (Paediatrics)",
      specialist: "DCH (London), MRCPCH (UK), FRCPCH (UK), Dip Allergy (UK)",
      image: "./src/images/CG_Dr. Sanjukta Dey.webp",
      desc: "Senior Consultant & Head, Dept. of  Pediatric, Peerless Hospital & B K Roy Research Centre, Kolkata, West Bengal, India",
    },
    {
      name: "Dr. Shaoli Sarker",
      role: "MBBS,FCPS (Paediatrics)",
      specialist: "Paediatrics",
      image: "./src/images/CG_Dr. Shaoli Sarker.webp",
      desc: "Assot. Professor & Head, Department of Paediatric (Child) Neurology, Bangladesh Shishu Hospital & Institute(BSHI),Dhaka",
    },
    {
      name: "Dr. Jubaida Parvin",
      role: "MBBS, FCPS (Child)",
      specialist: "Pediatric Neurology",
      image: "./src/images/CG_no_image.webp",
      desc: "Assistant Professor, Department of Pediatric Neurology ,NINS",
    },
    {
      name: "Kinjal Sarkar",
      role: "Bachelor of Physiotherapy",
      specialist: "Physiotherapist",
      image: "./src/images/CG_no_image.webp",
      desc: "Peerless Hospital & B K Roy Research Centre, Kolkata, West Bengal, India",
    },
    
  ];

  const sectionHTML = `
    <style>
      @keyframes ecFadeUp {
        from {
          opacity: 0;
          transform: translateY(34px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

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

      .ec-fade-up {
        animation: ecFadeUp 0.8s ease both;
      }

      .ec-float {
        animation: ecFloat 4.5s ease-in-out infinite;
      }

      .ec-pulse {
        animation: ecPulse 4.5s ease-in-out infinite;
      }
    </style>

    <section id="healthprovidersSection" class="overflow-hidden bg-white font-poppins">
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
              SMA Fighter Olivia Team
              <span class="tracking-[5px] text-pink-500/50">......</span>
            </p>

            <h1 class="mt-3 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Health
              <span class="text-pink-600">Providers</span>
            </h1>

            <p class="mt-5 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base lg:text-lg">
              A dedicated network of doctors, nurses, therapists, and healthcare professionals working together to support Olivia’s treatment journey with expert care, compassion, and commitment.
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
                    We support<br />
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
          id="healthprovidersGrid"
          class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7"
        ></div>
      </div>
    </section>
  `;

  if (document.readyState === "loading") {
    document.write(sectionHTML);
  } else {
    document.body.insertAdjacentHTML("beforeend", sectionHTML);
  }

  function renderCards() {
    const grid = document.getElementById("healthprovidersGrid");
    if (!grid) return;

    grid.innerHTML = members
      .map(function (member, index) {
        return `
          <article
            class="ec-fade-up group flex min-h-[250px] overflow-hidden rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(236,72,153,0.18)]"
            style="animation-delay: ${index * 70}ms;"
          >
            <div class="w-[45%] overflow-hidden rounded-xl bg-pink-50">
              <img
                src="${member.image}"
                alt="${member.name}"
                loading="lazy"
                class="h-full min-h-[225px] w-full object-cover object-top transition duration-700 group-hover:scale-110"
                onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80';"
              />
            </div>

            <div class="flex w-[55%] flex-col justify-center px-4 py-3">
              <h3 class="text-base font-bold uppercase leading-tight text-gray-900">
                ${member.name}
              </h3>

              <div class="my-3 h-[2px] w-10 rounded-full bg-pink-600"></div>

              <p class="mt-1 text-sm font-semibold text-btnColor1">
                ${member.role}
              </p>

              <p class="mt-2 text-sm leading-snug text-gray-700 font-bold">
                ${member.specialist}
              </p>

              <p class="mt-4 text-sm leading-relaxed text-slate-600">
                ${member.desc}
              </p>
            </div>
          </article>
        `;
      })
      .join("");
  }

  setTimeout(renderCards, 120);
}