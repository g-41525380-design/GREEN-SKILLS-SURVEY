<!DOCTYPE html>
<html lang="ms">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Soal Selidik PhD UTHM | Kerangka Kemahiran Hijau TVET Elektronik</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
          },
          colors: {
            uthmPurple: '#3b1e78',
            uthmPurpleDark: '#281254',
            uthmRed: '#d32f2f',
            ecoGreen: '#15803d',
            ecoLight: '#dcfce7',
          }
        }
      }
    }
  </script>
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(135deg, #f5f3ff 0%, #f0fdf4 50%, #f8fafc 100%);
      min-height: 100vh;
    }
    .card-enter {
      animation: slideFade 0.25s ease-out forwards;
    }
    @keyframes slideFade {
      from {
        opacity: 0;
        transform: translateY(8px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    /* Custom scrollbar for navigator modal */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f5f9;
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #94a3b8;
    }
  </style>
</head>
<body class="text-slate-800 antialiased selection:bg-purple-200 selection:text-purple-950">

  <!-- Toast Notification Banner (No alert() used) -->
  <div id="toast-container" class="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none"></div>

  <!-- Top Sticky Navigation Header -->
  <header class="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
      <!-- Brand / Title -->
      <div class="flex items-center gap-3">
        <!-- Custom Inline SVG Emblem inspired by UTHM & Green Tech -->
        <div class="w-10 h-10 rounded-xl bg-uthmPurple flex items-center justify-center text-white shadow-sm shrink-0 relative overflow-hidden">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3L2 9l10 6 10-6-10-6z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M2 15l10 6 10-6" />
          </svg>
          <span class="absolute bottom-0 right-0 w-3 h-3 bg-ecoGreen rounded-tl-md border-t border-l border-white"></span>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-purple-100 text-uthmPurple">UTHM PhD Research</span>
            <span id="autosave-badge" class="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-ecoGreen bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
              <span class="w-1.5 h-1.5 rounded-full bg-ecoGreen"></span>
              <span data-i18n="savedLabel">Disimpan Automatik</span>
            </span>
          </div>
      <!-- Right Controls: Language Toggle, Google Sheets Setup & Question Navigator -->
      <div class="flex items-center gap-2">
        <!-- Language Toggle Buttons -->
        <div class="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200" role="group" aria-label="Pilihan Bahasa">
          <button type="button" id="lang-bilingual" onclick="setLanguage('bilingual')" class="lang-btn px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer bg-uthmPurple text-white shadow-sm">
            BM + EN
          </button>
          <button type="button" id="lang-bm" onclick="setLanguage('bm')" class="lang-btn px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer text-slate-600 hover:text-slate-900">
            BM
          </button>
          <button type="button" id="lang-en" onclick="setLanguage('en')" class="lang-btn px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer text-slate-600 hover:text-slate-900">
            EN
          </button>
        </div>

        <!-- Google Sheets Setup Button -->
        <button type="button" id="btn-open-gsheet-setup" onclick="toggleGSheetModal(true)" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-50 border border-emerald-300 text-ecoGreen hover:bg-emerald-100 transition-all shadow-sm cursor-pointer" title="Tetapan Google Sheets">
          <span id="gsheet-status-dot" class="w-2 h-2 rounded-full bg-amber-500"></span>
          <span class="hidden md:inline">Google Sheets</span>
        </button>

        <!-- Question Navigator Trigger Button -->
        <button type="button" id="btn-open-navigator" onclick="toggleNavigatorModal(true)" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-uthmPurple transition-all shadow-sm cursor-pointer">
          <svg class="w-4 h-4 text-uthmPurple" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h10" />
          </svg>
          <span id="nav-btn-text">Senarai Soalan</span>
        </button>
      </div>
    </div>

    <!-- Progress Bar Area (Shown during survey & review) -->
    <div id="header-progress-area" class="hidden bg-slate-50/90 border-t border-slate-200/80">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 py-2.5">
        <div class="flex flex-wrap items-center justify-between gap-2 text-xs mb-1.5">
          <div class="flex items-center gap-2 font-semibold text-slate-700">
            <span id="progress-section-badge" class="px-2.5 py-0.5 rounded-md bg-uthmPurple text-white font-bold">Seksyen A</span>
            <span id="progress-question-counter">Soalan 1 daripada 78</span>
          </div>
          <div class="flex items-center gap-3">
            <span id="progress-answered-count" class="text-slate-500 font-medium">0 / 75 dijawab</span>
            <span id="progress-percent" class="font-bold text-ecoGreen">0%</span>
          </div>
        </div>

        <!-- Bar -->
        <div class="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div id="progress-bar-fill" class="h-full bg-gradient-to-r from-uthmPurple via-indigo-600 to-ecoGreen transition-all duration-300 rounded-full" style="width: 0%"></div>
        </div>

        <!-- Section Quick Jump Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto pt-2 pb-0.5 no-scrollbar">
          <button type="button" onclick="jumpToSection('SEC_A')" id="pill-SEC_A" class="section-pill shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer">
            Seksyen A: Demografi (6)
          </button>
          <button type="button" onclick="jumpToSection('PART_A')" id="pill-PART_A" class="section-pill shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer">
            Bhg A: Pengetahuan (13)
          </button>
          <button type="button" onclick="jumpToSection('PART_B')" id="pill-PART_B" class="section-pill shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer">
            Bhg B: Kemahiran (46)
          </button>
          <button type="button" onclick="jumpToSection('PART_C')" id="pill-PART_C" class="section-pill shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all cursor-pointer">
            Bhg C: Sikap &amp; Nilai (13)
          </button>
          <button type="button" onclick="openReviewScreen()" id="pill-REVIEW" class="section-pill shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold border border-slate-200 bg-white text-slate-600 hover:border-ecoGreen hover:text-ecoGreen transition-all cursor-pointer">
            Semak &amp; Hantar
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content Container -->
  <main class="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

    <!-- =========================================================
         VIEW 1: WELCOME / COVER PAGE
         ========================================================= -->
    <section id="view-welcome" class="card-enter">
      <div class="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
        <!-- Top Banner with UTHM & Green Economy Theme -->
        <div class="bg-gradient-to-r from-uthmPurple via-[#4c2899] to-ecoGreen p-6 sm:p-10 text-white relative overflow-hidden">
          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-xs font-semibold mb-4">
              <span class="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
              <span>Universiti Tun Hussein Onn Malaysia (UTHM) • Fakulti Pendidikan Teknikal &amp; Vokasional</span>
            </div>

            <h2 class="text-xl sm:text-3xl font-extrabold leading-snug tracking-tight mb-3">
              PEMBANGUNAN KERANGKA KEMAHIRAN HIJAU UNTUK KURIKULUM PROGRAM TEKNOLOGI ELEKTRONIK TVET: DALAM MEMENUHI KEPERLUAN EKONOMI HIJAU
            </h2>
            <p class="text-sm sm:text-base text-purple-100 font-medium leading-relaxed border-l-4 border-green-300 pl-3.5">
              DEVELOPMENT OF A GREEN SKILLS FRAMEWORK FOR THE TVET ELECTRONIC TECHNOLOGY PROGRAMME CURRICULUM: MEETING THE NEEDS OF THE GREEN ECONOMY
            </p>
          </div>
        </div>

        <!-- Body Content -->
        <div class="p-6 sm:p-10 space-y-6">
          <!-- Resume Banner if saved progress exists -->
          <div id="resume-banner" class="hidden p-4 rounded-2xl bg-amber-50 border border-amber-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="flex items-start gap-3">
              <div class="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0 mt-0.5">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-bold text-amber-900">Rekod Jawapan Terdahulu Ditemui / Previous Progress Found</h3>
                <p id="resume-banner-text" class="text-xs text-amber-800 mt-0.5">Anda telah menjawab beberapa soalan sebelum ini. Anda boleh menyambung semula atau memulakan sesi baharu.</p>
              </div>
            </div>
            <div class="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button type="button" onclick="resetSurveyConfirm()" class="px-3 py-2 rounded-xl text-xs font-semibold text-amber-800 hover:bg-amber-100 transition-colors cursor-pointer">
                Set Semula
              </button>
              <button type="button" onclick="resumeSurvey()" class="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 text-white hover:bg-amber-700 shadow-sm transition-all cursor-pointer">
                Sambung Menjawab →
              </button>
            </div>
          </div>

          <!-- Researcher Letter (Bilingual Toggleable) -->
          <div class="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <div id="intro-bm" class="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-uthmPurple">Kata Alu-aluan Penyelidik (Bahasa Melayu)</span>
                <span class="text-xs text-slate-400">Kepada Tuan/Puan yang dihormati</span>
              </div>
              <p>
                Saya, <strong>Adib Farhan bin Zaime</strong> merupakan pelajar separuh masa bagi program <strong>Doktor Falsafah Pendidikan Teknik dan Vokasional di Universiti Tun Hussein Onn Malaysia (UTHM)</strong>. Di sini, saya memohon kerjasama dan sokongan daripada pihak tuan/puan untuk saya menjalankan kajian penyelidikan ini. Tujuan utama kajian ini untuk memperoleh ilmu pengetahuan dalam bidang yang dikaji. Soal selidik ini memerlukan sedikit masa tuan/puan untuk dijawab. Namun demikian, kerjasama dan maklum balas daripada tuan/puan amat penting bagi membantu saya dalam menyelesaikan tesis PhD. Oleh itu, saya amat berterima kasih atas kerjasama tuan/puan dalam membantu saya menjawab soal selidik ini.
              </p>
              <p>
                Objektif kajian ini adalah untuk meneroka, membangunkan, dan mengesahkan kerangka kemahiran hijau sebagai nilai tambah untuk kurikulum <strong>Program Teknologi Elektronik TVET</strong>. Penyelidikan ini telah bermula dengan menggunakan teknik Delphi bagi meneroka elemen-elemen kemahiran hijau dalam kalangan pakar. Menerusi soal selidik ini, saya ingin mendapatkan kepakaran anda sebagai pendidik TVET dalam menentukan sejauh mana elemen-elemen ini penting untuk dimasukkan dalam kurikulum latihan Program Teknologi Elektronik TVET di <strong>Kolej Vokasional Malaysia</strong>. Segala jawapan yang diberikan adalah <strong>sulit</strong> dan maklumat yang dikumpulkan digunakan bagi tujuan akademik sahaja. Soal selidik ini mengandungi dua seksyen (Seksyen A: Demografi, dan Seksyen B: Bahagian A, B, dan C).
              </p>
            </div>

            <div id="intro-en" class="space-y-3 bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-ecoGreen">Researcher's Invitation Letter (English)</span>
                <span class="text-xs text-slate-400">Dear Sir/Madam</span>
              </div>
              <p>
                I am <strong>Adib Farhan bin Zaime</strong>, a part-time student candidate for <strong>Doctor of Philosophy (PhD) in Technical and Vocational Education at Universiti Tun Hussein Onn Malaysia (UTHM)</strong>. I am writing to seek your kind cooperation and support in conducting this research study. While completing this questionnaire will take a few moments of your time, your response is crucial to the completion of my PhD.
              </p>
              <p>
                The objective of this study is to explore, develop, and validate a green skills framework as an added value for the <strong>TVET Electronic Technology Programme curriculum</strong>. Through this questionnaire, I would like to seek your expertise as a TVET educator to determine the extent to which these elements are important to be included in the training curriculum of the TVET Electronic Technology Programme at <strong>Malaysian Vocational Colleges</strong>. All responses provided will be kept <strong>strictly confidential</strong>, and the data collected will be used solely for academic purposes. This questionnaire consists of two sections and three parts.
              </p>
            </div>
          </div>

          <!-- Definition Box: Kemahiran Hijau / Green Skills -->
          <div class="p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50/60 border border-green-200">
            <div class="flex items-start gap-3">
              <div class="p-2.5 rounded-xl bg-ecoGreen text-white shrink-0 mt-0.5">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div class="space-y-2 text-sm">
                <h3 class="font-bold text-green-950 text-base">Definisi Operasi: Kemahiran Hijau / Green Skills Definition</h3>
                <p id="def-bm" class="text-green-900 leading-relaxed">
                  <strong>Kemahiran hijau</strong> adalah satu set kemahiran yang merangkumi kemahiran teknikal, pengetahuan, nilai, dan sikap yang diperlukan dalam pekerjaan hijau untuk menyokong ekonomi, sosial, dan alam sekitar yang mampan melalui aktiviti seperti industri, perniagaan, dan komuniti.
                </p>
                <p id="def-en" class="text-green-800/90 italic leading-relaxed">
                  <strong>Green skills</strong> refer to a set of skills encompassing technical skills, knowledge, values, and attitudes required in green jobs to support economic, social, and environmental sustainability through activities across industries, businesses, and communities.
                </p>
              </div>
            </div>
          </div>

          <!-- Survey Structure Overview -->
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
            <div class="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100">
              <div class="text-xs font-bold text-uthmPurple">Seksyen A</div>
              <div class="text-sm font-bold text-slate-800 mt-0.5">Demografi</div>
              <div class="text-xs text-slate-500 mt-1">6 Soalan Latar Belakang</div>
            </div>
            <div class="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
              <div class="text-xs font-bold text-ecoGreen">Seksyen B • Bhg A</div>
              <div class="text-sm font-bold text-slate-800 mt-0.5">Elemen Pengetahuan</div>
              <div class="text-xs text-slate-500 mt-1">12 Item Skala + 1 Terbuka</div>
            </div>
            <div class="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100">
              <div class="text-xs font-bold text-blue-700">Seksyen B • Bhg B</div>
              <div class="text-sm font-bold text-slate-800 mt-0.5">Elemen Kemahiran</div>
              <div class="text-xs text-slate-500 mt-1">45 Item Skala + 1 Terbuka</div>
            </div>
            <div class="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100">
              <div class="text-xs font-bold text-amber-700">Seksyen B • Bhg C</div>
              <div class="text-sm font-bold text-slate-800 mt-0.5">Sikap &amp; Nilai</div>
              <div class="text-xs text-slate-500 mt-1">12 Item Skala + 1 Terbuka</div>
            </div>
          </div>

          <!-- Researcher Contact Details -->
          <div class="border-t border-slate-200 pt-5">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Sebarang pertanyaan bolehlah hubungi / For any inquiries, please contact:
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-uthmPurple/10 text-uthmPurple font-bold flex items-center justify-center shrink-0">AF</div>
                <div class="text-xs space-y-1">
                  <div class="font-bold text-slate-900 text-sm">1) Adib Farhan bin Zaime</div>
                  <div class="text-slate-600">Calon PhD (Pendidikan Teknik &amp; Vokasional), UTHM</div>
                  <div class="text-slate-700 font-medium">Tel: <a href="tel:+60136502508" class="text-uthmPurple hover:underline">+60 13 650 2508</a></div>
                  <div class="text-slate-700 font-medium">Email: <a href="mailto:adibfarhanzaime@gmail.com" class="text-uthmPurple hover:underline">adibfarhanzaime@gmail.com</a></div>
                </div>
              </div>

              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-ecoGreen/10 text-ecoGreen font-bold flex items-center justify-center shrink-0">LC</div>
                <div class="text-xs space-y-1">
                  <div class="font-bold text-slate-900 text-sm">2) Prof. Ts. Dr. Lai Chee Sern</div>
                  <div class="text-slate-600">Pensyarah Kanan / Senior Lecturer, FPTV UTHM</div>
                  <div class="text-slate-700 font-medium">Tel: <a href="tel:+60125768327" class="text-ecoGreen hover:underline">+60 12 576 8327</a></div>
                  <div class="text-slate-700 font-medium">Email: <a href="mailto:lcsern@uthm.edu.my" class="text-ecoGreen hover:underline">lcsern@uthm.edu.my</a></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Primary CTA Button -->
          <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex flex-wrap items-center gap-2">
              <button type="button" onclick="toggleGSheetModal(true)" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-ecoGreen border border-emerald-300 text-xs font-bold transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Tetapan Google Sheets / Google Sheets Setup</span>
              </button>
              <span id="welcome-gsheet-indicator" class="text-xs font-medium text-slate-500"></span>
            </div>
            <button type="button" id="btn-start-survey" onclick="startSurvey()" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-uthmPurple to-ecoGreen hover:from-uthmPurpleDark hover:to-green-800 text-white font-bold text-base shadow-lg shadow-purple-900/20 hover:shadow-xl transform hover:-translate-y-0.5 transition-all cursor-pointer">
              <span>Mula Soal Selidik / Start Survey</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         VIEW 2: ONE-QUESTION-AT-A-TIME WIZARD CARD
         ========================================================= -->
    <section id="view-wizard" class="hidden">
      <!-- Context Sub-domain Banner (e.g., 1.0 Pengetahuan Teknologi Hijau Elektronik) -->
      <div id="domain-context-card" class="mb-4 px-5 py-3.5 rounded-2xl bg-white border border-purple-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div class="flex items-center gap-2">
            <span id="wizard-part-label" class="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-uthmPurple">SEKSYEN A</span>
            <span id="wizard-domain-code" class="text-xs font-bold text-ecoGreen"></span>
          </div>
          <h3 id="wizard-domain-title" class="text-sm sm:text-base font-bold text-slate-900 mt-1"></h3>
        </div>
        <div class="flex items-center gap-2 self-start sm:self-center">
          <label class="inline-flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl cursor-pointer select-none hover:bg-slate-200/70 transition-colors">
            <input type="checkbox" id="toggle-auto-advance" checked onchange="toggleAutoAdvance(this.checked)" class="rounded text-uthmPurple focus:ring-uthmPurple w-3.5 h-3.5 cursor-pointer" />
            <span>Auto-seterusnya / Auto-next</span>
          </label>
        </div>
      </div>

      <!-- Main Question Card -->
      <div id="question-card" class="bg-white rounded-3xl shadow-xl border border-slate-200/90 p-6 sm:p-10 card-enter">
        <!-- Item Header -->
        <div class="flex items-center justify-between gap-3 mb-5">
          <div class="flex items-center gap-2.5">
            <span id="q-code-badge" class="px-3 py-1 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm tracking-wide">D1</span>
            <span id="q-required-badge" class="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold">Wajib / Required</span>
          </div>
          <span id="q-step-indicator" class="text-xs font-semibold text-slate-400">Item 1 / 78</span>
        </div>

        <!-- Question Text (BM & EN) -->
        <div class="space-y-2.5 mb-7">
          <h2 id="q-text-bm" class="text-lg sm:text-2xl font-bold text-slate-900 leading-snug"></h2>
          <p id="q-text-en" class="text-sm sm:text-base text-slate-500 font-medium leading-relaxed"></p>
        </div>

        <!-- Likert Legend Helper (Shown only for Likert questions) -->
        <div id="likert-instruction-box" class="hidden mb-5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
          <span class="font-bold text-slate-800">Arahan / Instruction:</span>
          <span id="likert-instruction-text">Sila nilaikan sejauh mana TAHAP KEPENTINGAN elemen ini untuk diterapkan ke dalam kurikulum Program Teknologi Elektronik TVET di Kolej Vokasional.</span>
        </div>

        <!-- Dynamic Answer Input Area -->
        <div id="answer-container" class="space-y-3">
          <!-- Populated dynamically by JS -->
        </div>

        <!-- Validation Message -->
        <div id="validation-error" class="hidden mt-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm font-medium flex items-center gap-2">
          <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span id="validation-error-text">Sila pilih atau masukkan jawapan anda sebelum meneruskan.</span>
        </div>

        <!-- Bottom Navigation Footer inside Card -->
        <div class="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button type="button" id="btn-prev" onclick="prevQuestion()" class="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 font-semibold text-sm transition-all cursor-pointer disabled:opacity-40 disabled:pointer-events-none">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span id="btn-prev-label">Sebelumnya</span>
          </button>

          <div class="flex items-center gap-2">
            <button type="button" id="btn-back-home" onclick="showView('welcome')" class="px-3.5 py-3 rounded-2xl text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer">
              Laman Utama
            </button>

            <button type="button" id="btn-next" onclick="nextQuestion()" class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-uthmPurple hover:bg-uthmPurpleDark text-white font-bold text-sm shadow-md shadow-purple-900/15 transition-all cursor-pointer">
              <span id="btn-next-label">Seterusnya</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         VIEW 3: REVIEW & SUBMIT SCREEN
         ========================================================= -->
    <section id="view-review" class="hidden card-enter">
      <div class="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-10 space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-uthmPurple">Langkah Akhir / Final Step</span>
            <h2 class="text-2xl font-extrabold text-slate-900 mt-1">Semakan Jawapan Soal Selidik</h2>
            <p class="text-sm text-slate-500 mt-1">Sila semak status jawapan anda sebelum menghantar maklum balas kajian PhD ini.</p>
          </div>
          <button type="button" onclick="returnToCurrentQuestion()" class="self-start sm:self-center inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer">
            ← Kembali ke Soalan
          </button>
        </div>

        <!-- Status Summary Banner -->
        <div id="review-status-box" class="p-5 rounded-2xl border">
          <!-- Populated dynamically -->
        </div>

        <!-- Unanswered Questions Quick Fix List -->
        <div id="unanswered-list-container" class="hidden space-y-3">
          <h3 class="text-sm font-bold text-rose-800 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-rose-600"></span>
            Senarai Soalan Wajib Yang Belum Dijawab (Klik untuk jawab terus):
          </h3>
          <div id="unanswered-pills" class="flex flex-wrap gap-2">
            <!-- Populated dynamically -->
          </div>
        </div>

        <!-- Accordion Summary of All Sections -->
        <div id="review-sections-summary" class="space-y-4">
          <!-- Populated dynamically -->
        </div>
          <button type="button" id="btn-submit-survey" onclick="submitSurvey()" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-ecoGreen to-emerald-600 hover:from-green-800 hover:to-emerald-700 text-white font-bold text-base shadow-lg shadow-green-900/20 transition-all cursor-pointer disabled:opacity-60 disabled:pointer-events-none">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span id="btn-submit-label">Hantar Jawapan / Submit Responses</span>
          </button>
        </div>
      </div>
    </section>

    <!-- =========================================================
         VIEW 4: COMPLETION & ANALYTICS THANK YOU SCREEN
         ========================================================= -->
    <section id="view-complete" class="hidden card-enter">
      <div class="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        <div class="bg-gradient-to-r from-ecoGreen to-uthmPurple p-8 sm:p-10 text-white text-center">
          <div class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mx-auto flex items-center justify-center mb-4 border border-white/30">
            <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold">Terima Kasih Atas Kerjasama Tuan/Puan!</h2>
          <p class="text-sm sm:text-base text-green-100 mt-2 max-w-2xl mx-auto">
            Thank you for taking the time to complete this survey. Maklum balas kepakaran anda amat bermakna bagi pembangunan Kerangka Kemahiran Hijau Program Teknologi Elektronik TVET di Kolej Vokasional Malaysia.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-2 mt-4">
            <div id="submission-timestamp" class="px-3.5 py-1 rounded-full bg-black/20 text-xs font-mono"></div>
            <div id="respondent-id-badge" class="px-3.5 py-1 rounded-full bg-white/20 text-xs font-mono font-bold"></div>
          </div>
        </div>

        <div class="p-6 sm:p-10 space-y-8">
          <!-- Google Sheets Live Sync Status Box -->
          <div id="gsheet-sync-banner" class="p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <!-- Populated dynamically -->
          </div>

          <!-- Respondent Profile Summary -->
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Ringkasan Profil Responden / Respondent Summary</h3>
            <div id="complete-profile-grid" class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <!-- Populated dynamically -->
            </div>
          </div>

          <!-- Mean Score Breakdown by Construct -->
          <div>
            <h3 class="text-base font-bold text-slate-900 mb-1">Analisis Skor Min Mengikut Komponen (Skala 1.00 – 5.00)</h3>
            <p class="text-xs text-slate-500 mb-4">Purata tahap kepentingan yang dinilai oleh responden bagi setiap elemen kerangka.</p>
            <div id="complete-scores-grid" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <!-- Populated dynamically -->
            </div>
          </div>

          <!-- Export & Researcher Data Tools -->
          <div class="p-5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-4">
            <div>
              <h4 class="text-sm font-bold text-uthmPurple">Muat Turun &amp; Eksport Data Kajian (SPSS / Excel / Arkib)</h4>
              <p class="text-xs text-slate-600 mt-0.5">Gunakan butang di bawah untuk memuat turun rekod jawapan dalam format CSV (sedia untuk diimport ke SPSS/Excel), JSON, atau salin ringkasan untuk dihantar kepada penyelidik.</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <button type="button" onclick="exportCSV()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ecoGreen hover:bg-green-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Muat Turun CSV (SPSS/Excel)</span>
              </button>

              <button type="button" onclick="exportJSON()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-uthmPurple hover:bg-uthmPurpleDark text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Muat Turun JSON</span>
              </button>

              <button type="button" onclick="copySummaryToClipboard()" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer">
                <svg class="w-4 h-4 text-uthmPurple" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <span>Salin Ringkasan Jawapan</span>
              </button>
            </div>
          </div>

          <!-- Footer Actions -->
          <div class="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <button type="button" onclick="openReviewScreen()" class="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer">
              Lihat Semula Semua Jawapan
            </button>

            <button type="button" onclick="startNewResponse()" class="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer">
              + Responden Baharu / New Response
            </button>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- =========================================================
       MODAL: QUESTION NAVIGATOR DRAWER / GRID
       ========================================================= -->
  <div id="navigator-modal" class="hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[88vh] flex flex-col overflow-hidden card-enter">
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-3 bg-slate-50">
        <div>
          <h3 class="text-base sm:text-lg font-extrabold text-slate-900">Peta Navigasi Soalan / Question Navigator</h3>
          <p class="text-xs text-slate-500">Klik mana-mana nombor item untuk melompat terus ke soalan tersebut.</p>
        </div>
        <button type="button" onclick="toggleNavigatorModal(false)" class="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors cursor-pointer" aria-label="Tutup">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Legend -->
      <div class="px-6 py-2.5 bg-white border-b border-slate-100 flex flex-wrap items-center gap-4 text-xs">
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded bg-ecoGreen inline-block"></span>
          <span class="text-slate-600 font-medium">Telah Dijawab</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded bg-uthmPurple inline-block"></span>
          <span class="text-slate-600 font-medium">Soalan Semasa</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded bg-slate-100 border border-slate-300 inline-block"></span>
          <span class="text-slate-600 font-medium">Belum Dijawab</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded bg-amber-50 border border-amber-300 inline-block"></span>
          <span class="text-slate-600 font-medium">Soalan Terbuka (Pilihan)</span>
        </div>
      </div>

      <!-- Modal Scrollable Grid -->
      <div id="navigator-grid-body" class="p-6 overflow-y-auto space-y-6">
        <!-- Populated dynamically -->
      </div>

      <!-- Modal Footer -->
      <div class="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
        <button type="button" onclick="toggleNavigatorModal(false); openReviewScreen();" class="px-4 py-2 rounded-xl bg-ecoGreen text-white text-xs font-bold hover:bg-green-800 transition-colors cursor-pointer">
          Pergi ke Halaman Semakan &amp; Hantar →
        </button>
        <button type="button" onclick="toggleNavigatorModal(false)" class="px-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer">
          Tutup
        </button>
      </div>
    </div>
  </div>

  <!-- =========================================================
       MODAL: CONFIRM RESET DIALOG (Custom replacement for confirm())
       ========================================================= -->
  <div id="reset-modal" class="hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-md p-6 space-y-4 card-enter">
      <div class="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </div>
      <div>
        <h3 class="text-lg font-bold text-slate-900">Padam &amp; Mulakan Semula?</h3>
        <p class="text-sm text-slate-600 mt-1">Semua jawapan yang disimpan dalam pelayar ini akan dipadamkan secara kekal untuk memulakan sesi responden baharu.</p>
      </div>
      <div class="flex items-center justify-end gap-2 pt-2">
        <button type="button" onclick="closeResetModal()" class="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer">
          Batal
        </button>
        <button type="button" onclick="executeResetSurvey()" class="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold cursor-pointer">
          Ya, Padam &amp; Mula Baharu
        </button>
      </div>
    </div>
  </div>

  <!-- =========================================================
       MODAL: GOOGLE SHEETS INTEGRATION SETUP
       ========================================================= -->
  <div id="gsheet-modal" class="hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden card-enter">
      <!-- Header -->
      <div class="px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-3 bg-emerald-50/70">
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-ecoGreen">Integrasi Automatik / Auto-Sync</span>
          <h3 class="text-base sm:text-lg font-extrabold text-slate-900">Tetapan Google Sheets / Google Sheets Setup</h3>
        </div>
        <button type="button" onclick="toggleGSheetModal(false)" class="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors cursor-pointer" aria-label="Tutup">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Body -->
      <div class="p-6 overflow-y-auto space-y-5 text-sm">
        <!-- Step 1: Paste Web App URL -->
        <div class="space-y-2">
          <label for="gsheet-url-input" class="block text-xs font-bold uppercase tracking-wider text-slate-700">
            1. Tampal URL Web App Google Apps Script (Web App URL)
          </label>
          <div class="flex flex-col sm:flex-row gap-2">
            <input
              type="url"
              id="gsheet-url-input"
              placeholder="https://script.google.com/macros/s/AKfycb.../exec"
              class="flex-1 px-4 py-2.5 rounded-xl border-2 border-slate-300 focus:border-ecoGreen focus:ring-4 focus:ring-green-100 outline-none text-xs sm:text-sm font-mono text-slate-900"
            />
            <button type="button" onclick="saveGSheetUrl()" class="px-5 py-2.5 rounded-xl bg-ecoGreen hover:bg-green-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer shrink-0">
              Simpan URL
            </button>
          </div>
          <p class="text-xs text-slate-500">
            URL ini disimpan dalam pelayar anda (atau boleh ditetapkan terus di dalam kod pada pemboleh ubah <code class="px-1 py-0.5 bg-slate-100 rounded text-uthmPurple font-mono">GOOGLE_SCRIPT_URL</code>).
          </p>
        </div>

        <!-- Step 2: Instructions & Apps Script Code -->
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span class="text-xs font-bold uppercase tracking-wider text-uthmPurple">2. Kod Google Apps Script (Sedia Digunakan)</span>
            <button type="button" onclick="copyAppsScriptCode()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-uthmPurple hover:bg-uthmPurpleDark text-white text-xs font-bold shadow-xs transition-all cursor-pointer">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Salin Kod Apps Script</span>
            </button>
          </div>

          <ol class="list-decimal list-inside text-xs text-slate-600 space-y-1">
            <li>Buka Google Sheet <strong>Data Responden - Soal Selidik Kerangka Kemahiran Hijau TVET Elektronik</strong>.</li>
            <li>Klik menu <strong>Extensions &rarr; Apps Script</strong>.</li>
            <li>Padam kod sedia ada dan tampal kod di bawah, kemudian klik <strong>Deploy &rarr; New deployment</strong>.</li>
            <li>Pilih jenis <strong>Web app</strong>, tetapkan <em>Execute as: Me</em> dan <em>Who has access: Anyone</em>, lalu salin <strong>Web app URL</strong> ke ruangan di atas.</li>
          </ol>

          <pre id="apps-script-code-block" class="p-3.5 rounded-xl bg-slate-900 text-green-300 text-[11px] font-mono overflow-x-auto leading-relaxed select-all">const SHEET_COLUMNS = [
  "Timestamp","ID_Responden","A1_Jantina","A2_Umur","A3_Pendidikan",
  "A4_Pengalaman_Mengajar","A5_Subjek_Modul_Utama","A6_Kolej_Vokasional",
  "BA_1_0","BA_1_1","BA_1_2","BA_1_3","BA_1_4","BA_1_5","BA_1_6",
  "BA_2_0","BA_2_1","BA_2_2","BA_2_3","BA_2_4","BA_Soalan_Terbuka",
  "BB_1_0","BB_1_1","BB_1_2","BB_1_3","BB_1_4",
  "BB_2_0","BB_2_1","BB_2_2","BB_2_3","BB_2_4",
  "BB_3_0","BB_3_1","BB_3_2","BB_3_3","BB_3_4","BB_3_5",
  "BB_4_0","BB_4_1","BB_4_2","BB_4_3","BB_4_4","BB_4_5","BB_4_6","BB_4_7",
  "BB_5_0","BB_5_1","BB_5_2","BB_5_3","BB_5_4","BB_5_5",
  "BB_6_0","BB_6_1","BB_6_2","BB_6_3","BB_6_4","BB_6_5",
  "BB_7_0","BB_7_1","BB_7_2","BB_7_3","BB_7_4","BB_7_5","BB_7_6",
  "BB_8_0","BB_8_1","BB_8_2","BB_8_3","BB_8_4","BB_8_5","BB_Soalan_Terbuka",
  "BC_1_0","BC_1_1","BC_1_2","BC_1_3","BC_1_4","BC_1_5",
  "BC_2_0","BC_2_1","BC_2_2","BC_2_3","BC_2_4","BC_2_5","BC_Soalan_Terbuka"
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(SHEET_COLUMNS);
    }
    var raw = e.postData ? e.postData.contents : "{}";
    var data = JSON.parse(raw);
    var row = SHEET_COLUMNS.map(function(col) {
      return data[col] !== undefined && data[col] !== null ? data[col] : "";
    });
    sheet.appendRow(row);
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", id: data.ID_Responden }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}</pre>
        </div>
      </div>

      <!-- Footer -->
      <div class="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
        <button type="button" onclick="clearGSheetUrl()" class="px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer">
          Kosongkan URL
        </button>
        <button type="button" onclick="toggleGSheetModal(false)" class="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer">
          Selesai / Tutup
        </button>
      </div>
    </div>
  </div>

  <script>
    // =========================================================================
    // 0. GOOGLE APPS SCRIPT WEB APP URL CONFIGURATION
    // =========================================================================
    // Penyelidik boleh menampal URL Web App terus di sini atau melalui butang "Tetapan Google Sheets" di portal.
    const GOOGLE_SCRIPT_URL = "";
    const GSHEET_URL_STORAGE_KEY = 'uthm_green_skills_gsheet_url_v1';

    // Exact 85 columns matching the Google Sheet schema
    const GOOGLE_SHEET_COLUMNS = [
      'Timestamp', 'ID_Responden',
      'A1_Jantina', 'A2_Umur', 'A3_Pendidikan', 'A4_Pengalaman_Mengajar', 'A5_Subjek_Modul_Utama', 'A6_Kolej_Vokasional',
      'BA_1_0', 'BA_1_1', 'BA_1_2', 'BA_1_3', 'BA_1_4', 'BA_1_5', 'BA_1_6',
      'BA_2_0', 'BA_2_1', 'BA_2_2', 'BA_2_3', 'BA_2_4', 'BA_Soalan_Terbuka',
      'BB_1_0', 'BB_1_1', 'BB_1_2', 'BB_1_3', 'BB_1_4',
      'BB_2_0', 'BB_2_1', 'BB_2_2', 'BB_2_3', 'BB_2_4',
      'BB_3_0', 'BB_3_1', 'BB_3_2', 'BB_3_3', 'BB_3_4', 'BB_3_5',
      'BB_4_0', 'BB_4_1', 'BB_4_2', 'BB_4_3', 'BB_4_4', 'BB_4_5', 'BB_4_6', 'BB_4_7',
      'BB_5_0', 'BB_5_1', 'BB_5_2', 'BB_5_3', 'BB_5_4', 'BB_5_5',
      'BB_6_0', 'BB_6_1', 'BB_6_2', 'BB_6_3', 'BB_6_4', 'BB_6_5',
      'BB_7_0', 'BB_7_1', 'BB_7_2', 'BB_7_3', 'BB_7_4', 'BB_7_5', 'BB_7_6',
      'BB_8_0', 'BB_8_1', 'BB_8_2', 'BB_8_3', 'BB_8_4', 'BB_8_5', 'BB_Soalan_Terbuka',
      'BC_1_0', 'BC_1_1', 'BC_1_2', 'BC_1_3', 'BC_1_4', 'BC_1_5',
      'BC_2_0', 'BC_2_1', 'BC_2_2', 'BC_2_3', 'BC_2_4', 'BC_2_5', 'BC_Soalan_Terbuka'
    ];

    // Mapping from internal question IDs to exact Google Sheet column names
    const QUESTION_TO_SHEET_COL = {
      'D1': 'A1_Jantina',
      'D2': 'A2_Umur',
      'D3': 'A3_Pendidikan',
      'D4': 'A4_Pengalaman_Mengajar',
      'D5': 'A5_Subjek_Modul_Utama',
      'D6': 'A6_Kolej_Vokasional',
      'A1.0': 'BA_1_0', 'A1.1': 'BA_1_1', 'A1.2': 'BA_1_2', 'A1.3': 'BA_1_3', 'A1.4': 'BA_1_4', 'A1.5': 'BA_1_5', 'A1.6': 'BA_1_6',
      'A2.0': 'BA_2_0', 'A2.1': 'BA_2_1', 'A2.2': 'BA_2_2', 'A2.3': 'BA_2_3', 'A2.4': 'BA_2_4',
      'A_Open': 'BA_Soalan_Terbuka',
      'B1.0': 'BB_1_0', 'B1.1': 'BB_1_1', 'B1.2': 'BB_1_2', 'B1.3': 'BB_1_3', 'B1.4': 'BB_1_4',
      'B2.0': 'BB_2_0', 'B2.1': 'BB_2_1', 'B2.2': 'BB_2_2', 'B2.3': 'BB_2_3', 'B2.4': 'BB_2_4',
      'B3.0': 'BB_3_0', 'B3.1': 'BB_3_1', 'B3.2': 'BB_3_2', 'B3.3': 'BB_3_3', 'B3.4': 'BB_3_4', 'B3.5': 'BB_3_5',
      'B4.0': 'BB_4_0', 'B4.1': 'BB_4_1', 'B4.2': 'BB_4_2', 'B4.3': 'BB_4_3', 'B4.4': 'BB_4_4', 'B4.5': 'BB_4_5', 'B4.6': 'BB_4_6', 'B4.7': 'BB_4_7',
      'B5.0': 'BB_5_0', 'B5.1': 'BB_5_1', 'B5.2': 'BB_5_2', 'B5.3': 'BB_5_3', 'B5.4': 'BB_5_4', 'B5.5': 'BB_5_5',
      'B6.0': 'BB_6_0', 'B6.1': 'BB_6_1', 'B6.2': 'BB_6_2', 'B6.3': 'BB_6_3', 'B6.4': 'BB_6_4', 'B6.5': 'BB_6_5',
      'B7.0': 'BB_7_0', 'B7.1': 'BB_7_1', 'B7.2': 'BB_7_2', 'B7.3': 'BB_7_3', 'B7.4': 'BB_7_4', 'B7.5': 'BB_7_5', 'B7.6': 'BB_7_6',
      'B8.0': 'BB_8_0', 'B8.1': 'BB_8_1', 'B8.2': 'BB_8_2', 'B8.3': 'BB_8_3', 'B8.4': 'BB_8_4', 'B8.5': 'BB_8_5',
      'B_Open': 'BB_Soalan_Terbuka',
      'C1.0': 'BC_1_0', 'C1.1': 'BC_1_1', 'C1.2': 'BC_1_2', 'C1.3': 'BC_1_3', 'C1.4': 'BC_1_4', 'C1.5': 'BC_1_5',
      'C2.0': 'BC_2_0', 'C2.1': 'BC_2_1', 'C2.2': 'BC_2_2', 'C2.3': 'BC_2_3', 'C2.4': 'BC_2_4', 'C2.5': 'BC_2_5',
      'C_Open': 'BC_Soalan_Terbuka'
    };

    // =========================================================================
    // 1. COMPLETE QUESTIONNAIRE DATASET (Exact order & wording from UTHM PhD doc)
    // =========================================================================
    const LIKERT_OPTIONS = [
      {
        value: 1,
        code: 'Stp',
        bm: 'Sangat tidak penting',
        en: 'Not at all important',
        colorClass: 'border-rose-300 bg-rose-50/70 text-rose-900',
        activeClass: 'border-rose-600 bg-rose-600 text-white ring-4 ring-rose-200'
      },
      {
        value: 2,
        code: 'Tp',
        bm: 'Tidak penting',
        en: 'Slightly important',
        colorClass: 'border-orange-300 bg-orange-50/70 text-orange-900',
        activeClass: 'border-orange-500 bg-orange-500 text-white ring-4 ring-orange-200'
      },
      {
        value: 3,
        code: 'Hp',
        bm: 'Hampir penting',
        en: 'Somewhat important',
        colorClass: 'border-amber-300 bg-amber-50/70 text-amber-900',
        activeClass: 'border-amber-500 bg-amber-500 text-white ring-4 ring-amber-200'
      },
      {
        value: 4,
        code: 'P',
        bm: 'Penting',
        en: 'Important',
        colorClass: 'border-teal-300 bg-teal-50/70 text-teal-900',
        activeClass: 'border-teal-600 bg-teal-600 text-white ring-4 ring-teal-200'
      },
      {
        value: 5,
        code: 'Sp',
        bm: 'Sangat penting',
        en: 'Strongly important',
        colorClass: 'border-emerald-300 bg-emerald-50/70 text-emerald-900',
        activeClass: 'border-ecoGreen bg-ecoGreen text-white ring-4 ring-green-200'
      }
    ];

    const SURVEY_QUESTIONS = [
      // ==================== SEKSYEN A: DEMOGRAFI ====================
      {
        id: 'D1',
        code: '1.',
        section: 'SEC_A',
        partLabelBM: 'Seksyen A: Demografi',
        partLabelEN: 'Section A: Demographics',
        domainBM: 'Maklumat Latar Belakang Responden',
        domainEN: 'Respondent Background Information',
        type: 'radio',
        required: true,
        bm: 'Jantina',
        en: 'Gender',
        options: [
          { value: 'Lelaki / Male', bm: 'Lelaki', en: 'Male' },
          { value: 'Perempuan / Female', bm: 'Perempuan', en: 'Female' }
        ]
      },
      {
        id: 'D2',
        code: '2.',
        section: 'SEC_A',
        partLabelBM: 'Seksyen A: Demografi',
        partLabelEN: 'Section A: Demographics',
        domainBM: 'Maklumat Latar Belakang Responden',
        domainEN: 'Respondent Background Information',
        type: 'radio',
        required: true,
        bm: 'Umur',
        en: 'Age',
        options: [
          { value: '23-32 tahun / years old', bm: '23-32 tahun', en: '23-32 years old' },
          { value: '33-42 tahun / years old', bm: '33-42 tahun', en: '33-42 years old' },
          { value: '43-52 tahun / years old', bm: '43-52 tahun', en: '43-52 years old' },
          { value: '53 tahun & ke atas / years old & above', bm: '53 tahun & ke atas', en: '53 years old & above' }
        ]
      },
      {
        id: 'D3',
        code: '3.',
        section: 'SEC_A',
        partLabelBM: 'Seksyen A: Demografi',
        partLabelEN: 'Section A: Demographics',
        domainBM: 'Maklumat Latar Belakang Responden',
        domainEN: 'Respondent Background Information',
        type: 'radio',
        required: true,
        bm: 'Tahap Pendidikan Tertinggi',
        en: 'Education Level',
        options: [
          { value: 'Diploma / Diploma Kemahiran Malaysia', bm: 'Diploma / Diploma Kemahiran Malaysia', en: 'Diploma / Malaysian Skills Diploma' },
          { value: 'Diploma Lanjutan Kemahiran Malaysia', bm: 'Diploma Lanjutan Kemahiran Malaysia', en: 'Malaysian Advanced Skills Diploma (DLKM)' },
          { value: 'Sarjana Muda / Bachelor’s Degree', bm: 'Sarjana Muda', en: 'Bachelor’s Degree' },
          { value: 'Sarjana / Master’s Degree', bm: 'Sarjana', en: 'Master’s Degree' },
          { value: 'Doktor Falsafah / Doctor of Philosophy (PhD)', bm: 'Doktor Falsafah (PhD)', en: 'Doctor of Philosophy (PhD)' }
        ]
      },
      {
        id: 'D4',
        code: '4.',
        section: 'SEC_A',
        partLabelBM: 'Seksyen A: Demografi',
        partLabelEN: 'Section A: Demographics',
        domainBM: 'Maklumat Latar Belakang Responden',
        domainEN: 'Respondent Background Information',
        type: 'radio',
        required: true,
        bm: 'Pengalaman Mengajar',
        en: 'Teaching Experience',
        options: [
          { value: '0-5 tahun / years', bm: '0-5 tahun', en: '0-5 years' },
          { value: '6-10 tahun / years', bm: '6-10 tahun', en: '6-10 years' },
          { value: '11 tahun & ke atas / years & above', bm: '11 tahun & ke atas', en: '11 years & above' }
        ]
      },
      {
        id: 'D5',
        code: '5.',
        section: 'SEC_A',
        partLabelBM: 'Seksyen A: Demografi',
        partLabelEN: 'Section A: Demographics',
        domainBM: 'Maklumat Latar Belakang Responden',
        domainEN: 'Respondent Background Information',
        type: 'text',
        required: true,
        bm: 'Subjek atau Modul Utama yang Diajar',
        en: 'Main Subjects or Modules Taught',
        placeholderBM: 'Contoh: Teknologi Elektronik, Sistem Digit, Mikropengawal, Lukisan Terbantu Komputer...',
        placeholderEN: 'Example: Electronic Technology, Digital Systems, Microcontroller, CAD...'
      },
      {
        id: 'D6',
        code: '6.',
        section: 'SEC_A',
        partLabelBM: 'Seksyen A: Demografi',
        partLabelEN: 'Section A: Demographics',
        domainBM: 'Maklumat Latar Belakang Responden',
        domainEN: 'Respondent Background Information',
        type: 'text',
        required: true,
        bm: 'Nama Kolej Vokasional',
        en: 'Vocational College Name',
        placeholderBM: 'Contoh: Kolej Vokasional Batu Pahat / Kolej Vokasional Kluang...',
        placeholderEN: 'Example: Kolej Vokasional Batu Pahat...'
      },

      // ==================== BAHAGIAN A: ELEMEN PENGETAHUAN ====================
      {
        id: 'A1.0',
        code: '1.0',
        section: 'PART_A',
        partLabelBM: 'Seksyen B • Bahagian A: Elemen Pengetahuan',
        partLabelEN: 'Section B • Part A: Knowledge Element',
        domainBM: '1.0 Pengetahuan Teknologi Hijau Elektronik',
        domainEN: '1.0 Knowledge of Green Electronic Technology',
        type: 'likert',
        required: true,
        bm: 'Pengetahuan Teknologi Hijau Elektronik',
        en: 'Knowledge of Green Electronic Technology'
      },
      {
        id: 'A1.1',
        code: '1.1',
        section: 'PART_A',
        partLabelBM: 'Seksyen B • Bahagian A: Elemen Pengetahuan',
        partLabelEN: 'Section B • Part A: Knowledge Element',
        domainBM: '1.0 Pengetahuan Teknologi Hijau Elektronik',
        domainEN: '1.0 Knowledge of Green Electronic Technology',
        type: 'likert',
        required: true,
        bm: 'Pengetahuan tentang teknologi hijau dalam bidang elektronik (seperti sistem solar fotovolta, penyongsang, dan pengurusan bateri).',
        en: 'Knowledge of green technology in the electronics field (such as solar photovoltaic systems, inverters, and battery management).'
      },
      {
        id: 'A1.2',
        code: '1.2',
        section: 'PART_A',
        partLabelBM: 'Seksyen B • Bahagian A: Elemen Pengetahuan',
        partLabelEN: 'Section B • Part A: Knowledge Element',
        domainBM: '1.0 Pengetahuan Teknologi Hijau Elektronik',
        domainEN: '1.0 Knowledge of Green Electronic Technology',
        type: 'likert',
        required: true,
        bm: 'Pengetahuan tentang pembangunan dan reka bentuk produk teknologi hijau dalam bidang elektronik.',
        en: 'Knowledge of green technology product development and design in electronics.'
      },
      {
        id: 'A1.3',
        code: '1.3',
        section: 'PART_A',
        partLabelBM: 'Seksyen B • Bahagian A: Elemen Pengetahuan',
        partLabelEN: 'Section B • Part A: Knowledge Element',
        domainBM: '1.0 Pengetahuan Teknologi Hijau Elektronik',
        domainEN: '1.0 Knowledge of Green Electronic Technology',
        type: 'likert',
        required: true,
        bm: 'Pengetahuan tentang aplikasi produk teknologi hijau dalam bidang elektronik (seperti ESP32, dan papan litar PCB bebas plumbum).',
        en: 'Knowledge of the application of green technology products in the field of electronics (such as ESP32 and lead-free PCBs).'
      },
      {
        id: 'A1.4',
        code: '1.4',
        section: 'PART_A',
        partLabelBM: 'Seksyen B • Bahagian A: Elemen Pengetahuan',
        partLabelEN: 'Section B • Part A: Knowledge Element',
        domainBM: '1.0 Pengetahuan Teknologi Hijau Elektronik',
        domainEN: '1.0 Knowledge of Green Electronic Technology',
        type: 'likert',
        required: true,
        bm: 'Pengetahuan tentang penyelenggaraan dan ujian kualiti bagi produk teknologi hijau elektronik.',
        en: 'Knowledge of maintenance and testing for green electronic products.'
      },
      {
        id: 'A1.5',
        code: '1.5',
        section: 'PART_A',
        partLabelBM: 'Seksyen B • Bahagian A: Elemen Pengetahuan',
        partLabelEN: 'Section B • Part A: Knowledge Element',
        domainBM: '1.0 Pengetahuan Teknologi Hijau Elektronik',
        domainEN: '1.0 Knowledge of Green Electronic Technology',
        type: 'likert',
        required: true,
        bm: 'Pengetahuan tentang penggunaan peralatan pengujian dan pengukuran teknologi hijau dalam bidang elektronik.',
        en: 'Knowledge of using green technology testing and measurement equipment in electronics.'
      },
      {
        id: 'A1.6',
        code: '1.6',
        section: 'PART_A',
        partLabelBM: 'Seksyen B • Bahagian A: Elemen Pengetahuan',
        partLabelEN: 'Section B • Part A: Knowledge Element',
        domainBM: '1.0 Pengetahuan Teknologi Hijau Elektronik',
        domainEN: '1.0 Knowledge of Green Electronic Technology',
        type: 'likert',
        required: true,
        bm: 'Pengetahuan tentang sistem dan seni bina teknologi hijau industri yang diguna pakai dalam bidang elektronik.',
        en: 'Knowledge of industry-applied green technology systems and architecture in electronics.'
      },
      {
        id: 'A2.0',
        code: '2.0',
        section: 'PART_A',
        partLabelBM: 'Seksyen B • Bahagian A: Elemen Pengetahuan',
        partLabelEN: 'Section B • Part A: Knowledge Element',
        domainBM: '2.0 Pengetahuan Pengurusan Sisa Elektronik dan Bahan Buangan',
        domainEN: '2.0 Knowledge of Electronic Waste (E-Waste) and Waste Material Management',
        type: 'likert',
        required: true,
        bm: 'Pengetahuan Pengurusan Sisa Elektronik dan Bahan Buangan',
        en: 'Knowledge of Electronic Waste (E-Waste) and Waste Material Management'
      },
      {
        id: 'A2.1',
        code: '2.1',
        section: 'PART_A',
        partLabelBM: 'Seksyen B • Bahagian A: Elemen Pengetahuan',
        partLabelEN: 'Section B • Part A: Knowledge Element',
        domainBM: '2.0 Pengetahuan Pengurusan Sisa Elektronik dan Bahan Buangan',
        domainEN: '2.0 Knowledge of Electronic Waste (E-Waste) and Waste Material Management',
        type: 'likert',
        required: true,
        bm: 'Pengetahuan tentang pengurusan dan sifat bahan berbahaya dalam sisa elektronik (seperti pateri plumbum, kadmium, dan elektrolit bateri).',
        en: 'Knowledge of management and characteristics of hazardous materials in e-waste (such as lead solder, cadmium, and battery electrolytes).'
      },
      {
        id: 'A2.2',
        code: '2.2',
        section: 'PART_A',
        partLabelBM: 'Seksyen B • Bahagian A: Elemen Pengetahuan',
        partLabelEN: 'Section B • Part A: Knowledge Element',
        domainBM: '2.0 Pengetahuan Pengurusan Sisa Elektronik dan Bahan Buangan',
        domainEN: '2.0 Knowledge of Electronic Waste (E-Waste) and Waste Material Management',
        type: 'likert',
        required: true,
        bm: 'Pengetahuan tentang kaedah pelupusan sisa pepejal dan komponen elektronik terpakai secara selamat.',
        en: 'Knowledge of safe disposal methods for solid waste and used electronic components.'
      },
      {
        id: 'A2.3',
        code: '2.3',
        section: 'PART_A',
        partLabelBM: 'Seksyen B • Bahagian A: Elemen Pengetahuan',
        partLabelEN: 'Section B • Part A: Knowledge Element',
        domainBM: '2.0 Pengetahuan Pengurusan Sisa Elektronik dan Bahan Buangan',
        domainEN: '2.0 Knowledge of Electronic Waste (E-Waste) and Waste Material Management',
        type: 'likert',
        required: true,
        bm: 'Pengetahuan tentang aplikasi prinsip 5R (reduce, reuse, recycle, recover & refuse) dalam pengurusan bahan bengkel elektronik.',
        en: 'Knowledge of applying 5R principles (reduce, reuse, recycle, recover & refuse) in managing electronics workshop materials.'
      },
      {
        id: 'A2.4',
        code: '2.4',
        section: 'PART_A',
        partLabelBM: 'Seksyen B • Bahagian A: Elemen Pengetahuan',
        partLabelEN: 'Section B • Part A: Knowledge Element',
        domainBM: '2.0 Pengetahuan Pengurusan Sisa Elektronik dan Bahan Buangan',
        domainEN: '2.0 Knowledge of Electronic Waste (E-Waste) and Waste Material Management',
        type: 'likert',
        required: true,
        bm: 'Pengetahuan tentang pengasingan sisa bahan buangan dan komponen elektronik yang rosak.',
        en: 'Knowledge of segregation of waste materials and defective electronic components.'
      },
      {
        id: 'A_Open',
        code: 'Terbuka A',
        section: 'PART_A',
        partLabelBM: 'Seksyen B • Bahagian A: Soalan Terbuka',
        partLabelEN: 'Section B • Part A: Open-Ended Question',
        domainBM: 'Cadangan Tambahan Elemen Pengetahuan Hijau',
        domainEN: 'Additional Green Knowledge Element Suggestions',
        type: 'textarea',
        required: false,
        bm: 'Apakah elemen pengetahuan kemahiran hijau lain yang penting tetapi tidak tersenarai di atas?',
        en: 'What other green skills knowledge elements are important but not listed above?',
        placeholderBM: 'Sila nyatakan cadangan elemen pengetahuan tambahan di sini (jika ada), atau klik Seterusnya untuk melangkau...',
        placeholderEN: 'Please state any additional knowledge elements here (optional), or click Next to skip...'
      },

      // ==================== BAHAGIAN B: ELEMEN KEMAHIRAN ====================
      // Subdomain B1
      {
        id: 'B1.0',
        code: '1.0',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '1.0 Kemahiran Pengurusan Sisa Buangan Elektronik',
        domainEN: '1.0 Electronic Waste (E-Waste) Management Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran Pengurusan Sisa Buangan Elektronik',
        en: 'Electronic Waste (E-Waste) Management Skills'
      },
      {
        id: 'B1.1',
        code: '1.1',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '1.0 Kemahiran Pengurusan Sisa Buangan Elektronik',
        domainEN: '1.0 Electronic Waste (E-Waste) Management Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mengurangkan pembaziran bahan semasa proses pematerian dan pembuatan papan litar bercetak (PCB).',
        en: 'Skills in reducing material waste during soldering and PCB fabrication/assembly.'
      },
      {
        id: 'B1.2',
        code: '1.2',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '1.0 Kemahiran Pengurusan Sisa Buangan Elektronik',
        domainEN: '1.0 Electronic Waste (E-Waste) Management Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran menggunakan semula komponen elektronik yang masih berfungsi.',
        en: 'Skill in reusing functional electronic components.'
      },
      {
        id: 'B1.3',
        code: '1.3',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '1.0 Kemahiran Pengurusan Sisa Buangan Elektronik',
        domainEN: '1.0 Electronic Waste (E-Waste) Management Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mengitar semula sisa logam dan komponen elektronik terpakai.',
        en: 'Skills in recycling scrap metal and used electronic components.'
      },
      {
        id: 'B1.4',
        code: '1.4',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '1.0 Kemahiran Pengurusan Sisa Buangan Elektronik',
        domainEN: '1.0 Electronic Waste (E-Waste) Management Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran membaiki dan memulihkan peralatan elektronik yang rosak.',
        en: 'Skills in repairing and restoring damaged electronic equipment.'
      },

      // Subdomain B2
      {
        id: 'B2.0',
        code: '2.0',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '2.0 Kemahiran Mereka Bentuk Litar dan Peranti Elektronik Mesra Alam',
        domainEN: '2.0 Eco-Friendly Circuit and Electronic Device Design Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran Mereka Bentuk Litar dan Peranti Elektronik Mesra Alam',
        en: 'Eco-Friendly Circuit and Electronic Device Design Skills'
      },
      {
        id: 'B2.1',
        code: '2.1',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '2.0 Kemahiran Mereka Bentuk Litar dan Peranti Elektronik Mesra Alam',
        domainEN: '2.0 Eco-Friendly Circuit and Electronic Device Design Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mereka bentuk litar elektronik berkecekapan tinggi dan berkuasa rendah (low-power design).',
        en: 'Skills in designing high-efficiency and low-power electronic circuits.'
      },
      {
        id: 'B2.2',
        code: '2.2',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '2.0 Kemahiran Mereka Bentuk Litar dan Peranti Elektronik Mesra Alam',
        domainEN: '2.0 Eco-Friendly Circuit and Electronic Device Design Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mereka bentuk perkakasan elektronik mesra alam berteraskan perlindungan alam sekitar.',
        en: 'Skills in designing eco-friendly electronic hardware focused on environmental protection.'
      },
      {
        id: 'B2.3',
        code: '2.3',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '2.0 Kemahiran Mereka Bentuk Litar dan Peranti Elektronik Mesra Alam',
        domainEN: '2.0 Eco-Friendly Circuit and Electronic Device Design Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mereka bentuk litar yang menekankan prinsip 5R (reduce, reuse, recycle, recover & refuse).',
        en: 'Skills in designing circuits that emphasize the 5R principles (reduce, reuse, recycle, recover, and refuse).'
      },
      {
        id: 'B2.4',
        code: '2.4',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '2.0 Kemahiran Mereka Bentuk Litar dan Peranti Elektronik Mesra Alam',
        domainEN: '2.0 Eco-Friendly Circuit and Electronic Device Design Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mengaplikasikan prinsip reka bentuk mampan dalam penghasilan produk elektronik.',
        en: 'Skills in applying design for sustainability principles in electronic product development.'
      },

      // Subdomain B3
      {
        id: 'B3.0',
        code: '3.0',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '3.0 Kemahiran Perancangan, Pengurusan, dan Perolehan Alatan Komponen Elektronik',
        domainEN: '3.0 Skills in the planning, management, and procurement of electronic equipment and components',
        type: 'likert',
        required: true,
        bm: 'Kemahiran Perancangan, Pengurusan, dan Perolehan Alatan Komponen Elektronik',
        en: 'Skills in the planning, management, and procurement of electronic equipment and components.'
      },
      {
        id: 'B3.1',
        code: '3.1',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '3.0 Kemahiran Perancangan, Pengurusan, dan Perolehan Alatan Komponen Elektronik',
        domainEN: '3.0 Skills in the planning, management, and procurement of electronic equipment and components',
        type: 'likert',
        required: true,
        bm: 'Kemahiran merancang projek elektronik berasaskan kelestarian alam sekitar.',
        en: 'Skills in planning environmentally sustainable electronic projects.'
      },
      {
        id: 'B3.2',
        code: '3.2',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '3.0 Kemahiran Perancangan, Pengurusan, dan Perolehan Alatan Komponen Elektronik',
        domainEN: '3.0 Skills in the planning, management, and procurement of electronic equipment and components',
        type: 'likert',
        required: true,
        bm: 'Kemahiran memilih eko-bahan (seperti pateri bebas plumbum dan bahan PCB mesra alam).',
        en: 'Skills in selecting eco-materials (such as lead-free solder and eco-friendly PCB materials).'
      },
      {
        id: 'B3.3',
        code: '3.3',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '3.0 Kemahiran Perancangan, Pengurusan, dan Perolehan Alatan Komponen Elektronik',
        domainEN: '3.0 Skills in the planning, management, and procurement of electronic equipment and components',
        type: 'likert',
        required: true,
        bm: 'Kemahiran pengurusan inventori komponen elektronik mesra alam (seperti penyimpanan berlabel, sistem FiFo dan kabinet pengering pintar).',
        en: 'Skills in eco-friendly electronic component inventory management (such as labeled storage, FiFo systems, and smart dry cabinets).'
      },
      {
        id: 'B3.4',
        code: '3.4',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '3.0 Kemahiran Perancangan, Pengurusan, dan Perolehan Alatan Komponen Elektronik',
        domainEN: '3.0 Skills in the planning, management, and procurement of electronic equipment and components',
        type: 'likert',
        required: true,
        bm: 'Kemahiran perolehan mampan bagi peralatan elektronik (seperti kriteria pembungkusan hijau dan rantai bekalan mesra alam).',
        en: 'Skills in sustainable procurement for electronic equipment (such as green packaging criteria and eco-friendly supply chains).'
      },
      {
        id: 'B3.5',
        code: '3.5',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '3.0 Kemahiran Perancangan, Pengurusan, dan Perolehan Alatan Komponen Elektronik',
        domainEN: '3.0 Skills in the planning, management, and procurement of electronic equipment and components',
        type: 'likert',
        required: true,
        bm: 'Kemahiran perolehan perkhidmatan penyelenggaraan elektronik mesra alam.',
        en: 'Skills in procuring eco-friendly electronic maintenance services.'
      },

      // Subdomain B4
      {
        id: 'B4.0',
        code: '4.0',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '4.0 Kemahiran Penjimatan Tenaga dan Kecekapan Kuasa Elektronik',
        domainEN: '4.0 Energy Saving and Electronic Power Efficiency Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran Penjimatan Tenaga dan Kecekapan Kuasa Elektronik',
        en: 'Energy Saving and Electronic Power Efficiency Skills'
      },
      {
        id: 'B4.1',
        code: '4.1',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '4.0 Kemahiran Penjimatan Tenaga dan Kecekapan Kuasa Elektronik',
        domainEN: '4.0 Energy Saving and Electronic Power Efficiency Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mengoptimumkan pengurusan tenaga dalam sistem dan peranti elektronik.',
        en: 'Skills in optimizing energy management in electronic systems and devices.'
      },
      {
        id: 'B4.2',
        code: '4.2',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '4.0 Kemahiran Penjimatan Tenaga dan Kecekapan Kuasa Elektronik',
        domainEN: '4.0 Energy Saving and Electronic Power Efficiency Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mengaplikasikan peranti elektronik dalam sistem tenaga boleh baharu (seperti tenaga solar dan angin).',
        en: 'Skills in applying electronic devices to renewable energy systems (such as solar and wind energy).'
      },
      {
        id: 'B4.3',
        code: '4.3',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '4.0 Kemahiran Penjimatan Tenaga dan Kecekapan Kuasa Elektronik',
        domainEN: '4.0 Energy Saving and Electronic Power Efficiency Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran menganalisis kecekapan sistem pengurusan tenaga untuk mengurangkan pembaziran elektrik.',
        en: 'Skills in analyzing energy management system efficiency to minimize electrical waste.'
      },
      {
        id: 'B4.4',
        code: '4.4',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '4.0 Kemahiran Penjimatan Tenaga dan Kecekapan Kuasa Elektronik',
        domainEN: '4.0 Energy Saving and Electronic Power Efficiency Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mengoptimumkan kualiti dan kecekapan kuasa litar.',
        en: 'Skills in optimizing circuit power quality and efficiency.'
      },
      {
        id: 'B4.5',
        code: '4.5',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '4.0 Kemahiran Penjimatan Tenaga dan Kecekapan Kuasa Elektronik',
        domainEN: '4.0 Energy Saving and Electronic Power Efficiency Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mereka bentuk sistem pengurusan haba litar bagi mengurangkan pelepasan haba.',
        en: 'Skills in designing circuit thermal management systems to reduce heat dissipation.'
      },
      {
        id: 'B4.6',
        code: '4.6',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '4.0 Kemahiran Penjimatan Tenaga dan Kecekapan Kuasa Elektronik',
        domainEN: '4.0 Energy Saving and Electronic Power Efficiency Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran kawalan dan pengurusan kualiti kuasa dalam sistem elektronik.',
        en: 'Skills in power quality control and management in electronic systems.'
      },
      {
        id: 'B4.7',
        code: '4.7',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '4.0 Kemahiran Penjimatan Tenaga dan Kecekapan Kuasa Elektronik',
        domainEN: '4.0 Energy Saving and Electronic Power Efficiency Skills',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mengintegrasikan sistem penuaian tenaga (seperti penderia piezoelektrik).',
        en: 'Skills in integrating energy harvesting systems (such as piezoelectric sensors).'
      },

      // Subdomain B5
      {
        id: 'B5.0',
        code: '5.0',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '5.0 Kemahiran Komunikasi Berasaskan Teknologi Hijau Dalam Bidang Elektronik',
        domainEN: '5.0 Green Technology-Based Communication Skills in the Electronics Field',
        type: 'likert',
        required: true,
        bm: 'Kemahiran Komunikasi Berasaskan Teknologi Hijau Dalam Bidang Elektronik',
        en: 'Green Technology-Based Communication Skills in the Electronics Field'
      },
      {
        id: 'B5.1',
        code: '5.1',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '5.0 Kemahiran Komunikasi Berasaskan Teknologi Hijau Dalam Bidang Elektronik',
        domainEN: '5.0 Green Technology-Based Communication Skills in the Electronics Field',
        type: 'likert',
        required: true,
        bm: 'Kemahiran berkomunikasi secara digital tanpa kertas dalam pelaksanaan tugasan amali elektronik.',
        en: 'Skills in paperless digital communication during electronic practical tasks.'
      },
      {
        id: 'B5.2',
        code: '5.2',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '5.0 Kemahiran Komunikasi Berasaskan Teknologi Hijau Dalam Bidang Elektronik',
        domainEN: '5.0 Green Technology-Based Communication Skills in the Electronics Field',
        type: 'likert',
        required: true,
        bm: 'Kemahiran berkomunikasi menggunakan sistem ICT (Teknologi Maklumat dan Komunikasi) hijau (seperti e-mel).',
        en: 'Skills in communicating using green ICT (Information and Communications Technology) systems (such as email).'
      },
      {
        id: 'B5.3',
        code: '5.3',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '5.0 Kemahiran Komunikasi Berasaskan Teknologi Hijau Dalam Bidang Elektronik',
        domainEN: '5.0 Green Technology-Based Communication Skills in the Electronics Field',
        type: 'likert',
        required: true,
        bm: 'Kemahiran berkomunikasi dan mengawal peranti menggunakan sistem IoT (Internet Pelbagai Benda).',
        en: 'Skills in communicating and controlling devices using IoT (Internet of Things) systems.'
      },
      {
        id: 'B5.4',
        code: '5.4',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '5.0 Kemahiran Komunikasi Berasaskan Teknologi Hijau Dalam Bidang Elektronik',
        domainEN: '5.0 Green Technology-Based Communication Skills in the Electronics Field',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mengaplikasikan platform komunikasi digital hibrid (seperti Google Meet dan Zoom) bagi mengurangkan pelepasan gas rumah hijau.',
        en: 'Skills in applying hybrid digital communication platforms, such as Google Meet and Zoom, to reduce greenhouse gas emissions.'
      },
      {
        id: 'B5.5',
        code: '5.5',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '5.0 Kemahiran Komunikasi Berasaskan Teknologi Hijau Dalam Bidang Elektronik',
        domainEN: '5.0 Green Technology-Based Communication Skills in the Electronics Field',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mengendalikan pemantauan data litar secara jarak jauh menggunakan aplikasi pengkomputeran awan mesra tenaga.',
        en: 'Skills in remote circuit data monitoring using energy-efficient cloud computing applications.'
      },

      // Subdomain B6
      {
        id: 'B6.0',
        code: '6.0',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '6.0 Kemahiran Kerja Berpasukan dalam Amalan Hijau Dalam Bidang Elektronik',
        domainEN: '6.0 Teamwork Skills for Green Practices in Electronics',
        type: 'likert',
        required: true,
        bm: 'Kemahiran Kerja Berpasukan dalam Amalan Hijau Dalam Bidang Elektronik',
        en: 'Teamwork Skills for Green Practices in Electronics'
      },
      {
        id: 'B6.1',
        code: '6.1',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '6.0 Kemahiran Kerja Berpasukan dalam Amalan Hijau Dalam Bidang Elektronik',
        domainEN: '6.0 Teamwork Skills for Green Practices in Electronics',
        type: 'likert',
        required: true,
        bm: 'Kemahiran kerja berpasukan memastikan setiap ahli menyumbang secara aktif kepada amalan hijau di makmal atau bengkel.',
        en: 'Skills in teamwork to ensure every member actively contributes to green practices in the laboratory or workshop.'
      },
      {
        id: 'B6.2',
        code: '6.2',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '6.0 Kemahiran Kerja Berpasukan dalam Amalan Hijau Dalam Bidang Elektronik',
        domainEN: '6.0 Teamwork Skills for Green Practices in Electronics',
        type: 'likert',
        required: true,
        bm: 'Kemahiran berkolaborasi dengan pihak luar/industri bagi menyokong aktiviti pencegahan pencemaran alam sekitar.',
        en: 'Skills in collaborating with external parties/industry to support environmental pollution prevention activities.'
      },
      {
        id: 'B6.3',
        code: '6.3',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '6.0 Kemahiran Kerja Berpasukan dalam Amalan Hijau Dalam Bidang Elektronik',
        domainEN: '6.0 Teamwork Skills for Green Practices in Electronics',
        type: 'likert',
        required: true,
        bm: 'Kemahiran perhubungan pasukan secara segerak (seperti persidangan video atau audio) bagi mencegah pencemaran alam sekitar.',
        en: 'Skills in synchronous team communication (such as video or audio conferencing) to prevent environmental pollution.'
      },
      {
        id: 'B6.4',
        code: '6.4',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '6.0 Kemahiran Kerja Berpasukan dalam Amalan Hijau Dalam Bidang Elektronik',
        domainEN: '6.0 Teamwork Skills for Green Practices in Electronics',
        type: 'likert',
        required: true,
        bm: 'Kemahiran memahami peranan ahli pasukan berasaskan keperluan teknikal bagi mencegah pencemaran alam sekitar.',
        en: 'Skills in understanding team members\' roles based on technical requirements to prevent environmental pollution.'
      },
      {
        id: 'B6.5',
        code: '6.5',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '6.0 Kemahiran Kerja Berpasukan dalam Amalan Hijau Dalam Bidang Elektronik',
        domainEN: '6.0 Teamwork Skills for Green Practices in Electronics',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mengkoordinasi peranan ahli pasukan bagi meminimumkan pembaziran komponen dan bahan amali.',
        en: 'Skills in coordinating team roles to minimize component and practical material waste.'
      },

      // Subdomain B7
      {
        id: 'B7.0',
        code: '7.0',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '7.0 Kemahiran Menyelesaikan Masalah dan Berfikiran Kreatif dalam Elektronik Hijau',
        domainEN: '7.0 Problem-Solving and Creative Thinking Skills in Green Electronics',
        type: 'likert',
        required: true,
        bm: 'Kemahiran Menyelesaikan Masalah dan Berfikiran Kreatif dalam Elektronik Hijau',
        en: 'Problem-Solving and Creative Thinking Skills in Green Electronics'
      },
      {
        id: 'B7.1',
        code: '7.1',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '7.0 Kemahiran Menyelesaikan Masalah dan Berfikiran Kreatif dalam Elektronik Hijau',
        domainEN: '7.0 Problem-Solving and Creative Thinking Skills in Green Electronics',
        type: 'likert',
        required: true,
        bm: 'Kemahiran menyelesaikan masalah kegagalan litar yang mengambil kira pengurangan impak negatif alam sekitar.',
        en: 'Skills in solving circuit failure problems taking into account environmental impact reduction.'
      },
      {
        id: 'B7.2',
        code: '7.2',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '7.0 Kemahiran Menyelesaikan Masalah dan Berfikiran Kreatif dalam Elektronik Hijau',
        domainEN: '7.0 Problem-Solving and Creative Thinking Skills in Green Electronics',
        type: 'likert',
        required: true,
        bm: 'Kemahiran berfikir secara kritis dalam mereka bentuk peranti elektronik mesra alam.',
        en: 'Critical thinking skills in designing eco-friendly electronic devices.'
      },
      {
        id: 'B7.3',
        code: '7.3',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '7.0 Kemahiran Menyelesaikan Masalah dan Berfikiran Kreatif dalam Elektronik Hijau',
        domainEN: '7.0 Problem-Solving and Creative Thinking Skills in Green Electronics',
        type: 'likert',
        required: true,
        bm: 'Kemahiran berfikir secara strategik bagi mengurangkan jejak karbon (carbon footprint) produk elektronik.',
        en: 'Skills in strategic thinking to reduce the carbon footprint of electronic products.'
      },
      {
        id: 'B7.4',
        code: '7.4',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '7.0 Kemahiran Menyelesaikan Masalah dan Berfikiran Kreatif dalam Elektronik Hijau',
        domainEN: '7.0 Problem-Solving and Creative Thinking Skills in Green Electronics',
        type: 'likert',
        required: true,
        bm: 'Kemahiran berfikir secara terbuka terhadap inovasi teknologi hijau baharu dalam bidang elektronik.',
        en: 'Skills in adopting an open-minded approach toward new green technology innovations in the electronics field.'
      },
      {
        id: 'B7.5',
        code: '7.5',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '7.0 Kemahiran Menyelesaikan Masalah dan Berfikiran Kreatif dalam Elektronik Hijau',
        domainEN: '7.0 Problem-Solving and Creative Thinking Skills in Green Electronics',
        type: 'likert',
        required: true,
        bm: 'Kemahiran Berfikir Aras Tinggi (KBAT) dalam merancang penyelesaian kelestarian sistem elektronik.',
        en: 'Higher Order Thinking Skills (HOTS) in planning electronic system sustainability solutions.'
      },
      {
        id: 'B7.6',
        code: '7.6',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '7.0 Kemahiran Menyelesaikan Masalah dan Berfikiran Kreatif dalam Elektronik Hijau',
        domainEN: '7.0 Problem-Solving and Creative Thinking Skills in Green Electronics',
        type: 'likert',
        required: true,
        bm: 'Kemahiran berfikir secara strategik bagi mengurangkan jejak karbon (carbon footprint) produk elektronik (aspek aplikasi & penilaian sistem).',
        en: 'Skills in strategic thinking to reduce the carbon footprint of electronic products.'
      },

      // Subdomain B8
      {
        id: 'B8.0',
        code: '8.0',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '8.0 Kemahiran Perlindungan Biodiversiti dan Ekosistem melalui Aplikasi Elektronik',
        domainEN: '8.0 Biodiversity and Ecosystem Protection Skills through Electronic Applications',
        type: 'likert',
        required: true,
        bm: 'Kemahiran Perlindungan Biodiversiti dan Ekosistem melalui Aplikasi Elektronik',
        en: 'Biodiversity and Ecosystem Protection Skills through Electronic Applications'
      },
      {
        id: 'B8.1',
        code: '8.1',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '8.0 Kemahiran Perlindungan Biodiversiti dan Ekosistem melalui Aplikasi Elektronik',
        domainEN: '8.0 Biodiversity and Ecosystem Protection Skills through Electronic Applications',
        type: 'likert',
        required: true,
        bm: 'Kemahiran melindungi alam sekitar melalui penggunaan peralatan dan peranti pengawasan elektronik yang sesuai haruslah diterapkan dalam kurikulum Program Teknologi Elektronik TVET.',
        en: 'Environmental protection skills through the appropriate use of electronic monitoring equipment and devices should be incorporated into the TVET Electronic Technology Program curriculum.'
      },
      {
        id: 'B8.2',
        code: '8.2',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '8.0 Kemahiran Perlindungan Biodiversiti dan Ekosistem melalui Aplikasi Elektronik',
        domainEN: '8.0 Biodiversity and Ecosystem Protection Skills through Electronic Applications',
        type: 'likert',
        required: true,
        bm: 'Kemahiran pemantauan elektronik bagi memulihara biodiversiti haruslah diterapkan dalam kurikulum Program Teknologi Elektronik TVET.',
        en: 'Electronic monitoring skills to conserve biodiversity should be incorporated into the TVET Electronic Technology Program curriculum.'
      },
      {
        id: 'B8.3',
        code: '8.3',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '8.0 Kemahiran Perlindungan Biodiversiti dan Ekosistem melalui Aplikasi Elektronik',
        domainEN: '8.0 Biodiversity and Ecosystem Protection Skills through Electronic Applications',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mengaplikasikan penderia (sensors) dan peranti elektronik bagi pemantauan kualiti alam sekitar/ekosistem.',
        en: 'Skills in applying sensors and electronic devices for environmental/ecosystem quality monitoring.'
      },
      {
        id: 'B8.4',
        code: '8.4',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '8.0 Kemahiran Perlindungan Biodiversiti dan Ekosistem melalui Aplikasi Elektronik',
        domainEN: '8.0 Biodiversity and Ecosystem Protection Skills through Electronic Applications',
        type: 'likert',
        required: true,
        bm: 'Kemahiran mengaplikasikan sistem elektronik hijau (seperti solar) bagi memulihara landskap alam sekitar.',
        en: 'Skills in applying green electronic systems (such as solar) to conserve environmental landscapes.'
      },
      {
        id: 'B8.5',
        code: '8.5',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Elemen Kemahiran',
        partLabelEN: 'Section B • Part B: Skill Elements',
        domainBM: '8.0 Kemahiran Perlindungan Biodiversiti dan Ekosistem melalui Aplikasi Elektronik',
        domainEN: '8.0 Biodiversity and Ecosystem Protection Skills through Electronic Applications',
        type: 'likert',
        required: true,
        bm: 'Kemahiran menyelenggara sistem dan peranti pemantauan elektronik hijau.',
        en: 'Skills in maintaining green electronic monitoring systems and devices.'
      },
      {
        id: 'B_Open',
        code: 'Terbuka B',
        section: 'PART_B',
        partLabelBM: 'Seksyen B • Bahagian B: Soalan Terbuka',
        partLabelEN: 'Section B • Part B: Open-Ended Question',
        domainBM: 'Cadangan Tambahan Elemen Kemahiran Praktikal Hijau',
        domainEN: 'Additional Practical Green Skill Suggestions',
        type: 'textarea',
        required: false,
        bm: 'Apakah elemen kemahiran praktikal hijau lain yang penting tetapi tidak tersenarai di atas?',
        en: 'What other practical green skill elements are important but not listed above?',
        placeholderBM: 'Sila nyatakan cadangan elemen kemahiran praktikal tambahan di sini (jika ada), atau klik Seterusnya untuk melangkau...',
        placeholderEN: 'Please state any additional practical green skill elements here (optional), or click Next to skip...'
      },

      // ==================== BAHAGIAN C: ELEMEN SIKAP DAN NILAI ====================
      {
        id: 'C1.0',
        code: '1.0',
        section: 'PART_C',
        partLabelBM: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai',
        partLabelEN: 'Section B • Part C: Attitude and Value Elements',
        domainBM: '1.0 Kesedaran Alam Sekitar dalam Bidang Elektronik',
        domainEN: '1.0 Environmental Awareness in the Field of Electronics',
        type: 'likert',
        required: true,
        bm: 'Kesedaran Alam Sekitar dalam Bidang Elektronik',
        en: 'Environmental Awareness in the Field of Electronics'
      },
      {
        id: 'C1.1',
        code: '1.1',
        section: 'PART_C',
        partLabelBM: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai',
        partLabelEN: 'Section B • Part C: Attitude and Value Elements',
        domainBM: '1.0 Kesedaran Alam Sekitar dalam Bidang Elektronik',
        domainEN: '1.0 Environmental Awareness in the Field of Electronics',
        type: 'likert',
        required: true,
        bm: 'Kesedaran terhadap kepentingan melindungi alam sekitar di tempat kerja atau bengkel elektronik.',
        en: 'Awareness of the importance of environmental protection in the workplace or electronics workshop.'
      },
      {
        id: 'C1.2',
        code: '1.2',
        section: 'PART_C',
        partLabelBM: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai',
        partLabelEN: 'Section B • Part C: Attitude and Value Elements',
        domainBM: '1.0 Kesedaran Alam Sekitar dalam Bidang Elektronik',
        domainEN: '1.0 Environmental Awareness in the Field of Electronics',
        type: 'likert',
        required: true,
        bm: 'Kesedaran terhadap dasar, perundangan, dan standard piawaian hijau industri elektronik.',
        en: 'Awareness of green policies, regulations, and industry standards in electronics.'
      },
      {
        id: 'C1.3',
        code: '1.3',
        section: 'PART_C',
        partLabelBM: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai',
        partLabelEN: 'Section B • Part C: Attitude and Value Elements',
        domainBM: '1.0 Kesedaran Alam Sekitar dalam Bidang Elektronik',
        domainEN: '1.0 Environmental Awareness in the Field of Electronics',
        type: 'likert',
        required: true,
        bm: 'Kesedaran terhadap impak pengurangan sisa buangan elektronik (e-waste) kepada alam sekitar.',
        en: 'Awareness of the impact of electronic waste (e-waste) reduction on the environment.'
      },
      {
        id: 'C1.4',
        code: '1.4',
        section: 'PART_C',
        partLabelBM: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai',
        partLabelEN: 'Section B • Part C: Attitude and Value Elements',
        domainBM: '1.0 Kesedaran Alam Sekitar dalam Bidang Elektronik',
        domainEN: '1.0 Environmental Awareness in the Field of Electronics',
        type: 'likert',
        required: true,
        bm: 'Kesedaran terhadap amalan hijau dalam proses pembuatan dan perkhidmatan elektronik.',
        en: 'Awareness of green practices in electronic manufacturing and service processes.'
      },
      {
        id: 'C1.5',
        code: '1.5',
        section: 'PART_C',
        partLabelBM: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai',
        partLabelEN: 'Section B • Part C: Attitude and Value Elements',
        domainBM: '1.0 Kesedaran Alam Sekitar dalam Bidang Elektronik',
        domainEN: '1.0 Environmental Awareness in the Field of Electronics',
        type: 'likert',
        required: true,
        bm: 'Kesedaran terhadap penggunaan sumber tenaga boleh baharu dalam pengoperasian sistem elektronik.',
        en: 'Awareness of using renewable energy sources in electronic system operations.'
      },
      {
        id: 'C2.0',
        code: '2.0',
        section: 'PART_C',
        partLabelBM: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai',
        partLabelEN: 'Section B • Part C: Attitude and Value Elements',
        domainBM: '2.0 Nilai Positif & Budaya Hijau Industri Elektronik',
        domainEN: '2.0 Positive Values and Green Culture in the Electronics Industry',
        type: 'likert',
        required: true,
        bm: 'Nilai Positif & Budaya Hijau Industri Elektronik',
        en: 'Positive Values and Green Culture in the Electronics Industry'
      },
      {
        id: 'C2.1',
        code: '2.1',
        section: 'PART_C',
        partLabelBM: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai',
        partLabelEN: 'Section B • Part C: Attitude and Value Elements',
        domainBM: '2.0 Nilai Positif & Budaya Hijau Industri Elektronik',
        domainEN: '2.0 Positive Values and Green Culture in the Electronics Industry',
        type: 'likert',
        required: true,
        bm: 'Nilai amalan penjimatan tenaga elektrik (seperti mematikan peralatan dan suis utama apabila tidak digunakan).',
        en: 'Values of electrical energy conservation practices (such as switching off equipment and main switches when not in use).'
      },
      {
        id: 'C2.2',
        code: '2.2',
        section: 'PART_C',
        partLabelBM: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai',
        partLabelEN: 'Section B • Part C: Attitude and Value Elements',
        domainBM: '2.0 Nilai Positif & Budaya Hijau Industri Elektronik',
        domainEN: '2.0 Positive Values and Green Culture in the Electronics Industry',
        type: 'likert',
        required: true,
        bm: 'Nilai amalan 5R (reduce, reuse, recycle, recover & refuse) terhadap perkakasan elektronik.',
        en: 'Values of the 5R practices (reduce, reuse, recycle, recover, and refuse) regarding electronic hardware.'
      },
      {
        id: 'C2.3',
        code: '2.3',
        section: 'PART_C',
        partLabelBM: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai',
        partLabelEN: 'Section B • Part C: Attitude and Value Elements',
        domainBM: '2.0 Nilai Positif & Budaya Hijau Industri Elektronik',
        domainEN: '2.0 Positive Values and Green Culture in the Electronics Industry',
        type: 'likert',
        required: true,
        bm: 'Nilai komitmen terhadap pengurusan selamat sisa toksik (seperti asid punaran) dan komponen berbahaya (seperti bateri litium atau kapasitor elektrolit).',
        en: 'Values of commitment to safe management of toxic waste (such as etching acid) and hazardous components (such as lithium batteries or electrolytic capacitors).'
      },
      {
        id: 'C2.4',
        code: '2.4',
        section: 'PART_C',
        partLabelBM: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai',
        partLabelEN: 'Section B • Part C: Attitude and Value Elements',
        domainBM: '2.0 Nilai Positif & Budaya Hijau Industri Elektronik',
        domainEN: '2.0 Positive Values and Green Culture in the Electronics Industry',
        type: 'likert',
        required: true,
        bm: 'Nilai keutamaan terhadap pemuliharaan sumber melalui kecekapan reka bentuk litar.',
        en: 'Values of prioritizing resource conservation through circuit design efficiency.'
      },
      {
        id: 'C2.5',
        code: '2.5',
        section: 'PART_C',
        partLabelBM: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai',
        partLabelEN: 'Section B • Part C: Attitude and Value Elements',
        domainBM: '2.0 Nilai Positif & Budaya Hijau Industri Elektronik',
        domainEN: '2.0 Positive Values and Green Culture in the Electronics Industry',
        type: 'likert',
        required: true,
        bm: 'Nilai pembudayaan amalan dan etika hijau dalam kerjaya bidang elektronik.',
        en: 'Values of cultivating green practices and ethics in electronic careers.'
      },
      {
        id: 'C_Open',
        code: 'Terbuka C',
        section: 'PART_C',
        partLabelBM: 'Seksyen B • Bahagian C: Soalan Terbuka',
        partLabelEN: 'Section B • Part C: Open-Ended Question',
        domainBM: 'Cadangan Tambahan Elemen Sikap dan Nilai Hijau',
        domainEN: 'Additional Green Attitude and Value Suggestions',
        type: 'textarea',
        required: false,
        bm: 'Apakah elemen sikap dan nilai hijau lain yang penting tetapi tidak tersenarai di atas?',
        en: 'What other green attitudes and values elements are important but not listed above?',
        placeholderBM: 'Sila nyatakan cadangan elemen sikap dan nilai tambahan di sini (jika ada), kemudian klik Semak & Hantar...',
        placeholderEN: 'Please state any additional attitude and value elements here (optional), then click Review & Submit...'
      }
    ];

    // =========================================================================
    // 2. APPLICATION STATE & STORAGE MANAGEMENT
    // =========================================================================
    const STORAGE_KEY = 'uthm_green_skills_tvet_survey_v1';

    let state = {
      currentView: 'welcome', // 'welcome' | 'wizard' | 'review' | 'complete'
      currentIndex: 0,
      language: 'bilingual', // 'bilingual' | 'bm' | 'en'
      autoAdvance: true,
      answers: {}, // { [questionId]: value }
      submittedAt: null,
      respondentId: null,
      syncStatus: 'idle', // 'idle' | 'syncing' | 'synced' | 'unconfigured' | 'error'
      syncErrorMsg: ''
    };

    let autoAdvanceTimer = null;

    function getActiveGSheetUrl() {
      const saved = (localStorage.getItem(GSHEET_URL_STORAGE_KEY) || '').trim();
      if (saved) return saved;
      return (GOOGLE_SCRIPT_URL || '').trim();
    }

    function updateGSheetIndicators() {
      const url = getActiveGSheetUrl();
      const dot = document.getElementById('gsheet-status-dot');
      const welcomeInd = document.getElementById('welcome-gsheet-indicator');
      if (dot) {
        dot.className = url
          ? 'w-2 h-2 rounded-full bg-ecoGreen animate-pulse'
          : 'w-2 h-2 rounded-full bg-amber-500';
      }
      if (welcomeInd) {
        welcomeInd.innerHTML = url
          ? '<span class="text-ecoGreen font-semibold">● Google Sheets Aktif (Auto-Sync)</span>'
          : '<span class="text-amber-700">● URL Google Sheets belum ditetapkan (Simpanan Tempatan / CSV)</span>';
      }
    }

    function toggleGSheetModal(show) {
      const modal = document.getElementById('gsheet-modal');
      if (!show) {
        modal.classList.add('hidden');
        return;
      }
      const input = document.getElementById('gsheet-url-input');
      if (input) {
        input.value = getActiveGSheetUrl();
      }
      modal.classList.remove('hidden');
    }

    function saveGSheetUrl() {
      const input = document.getElementById('gsheet-url-input');
      const val = (input.value || '').trim();
      if (val && !val.startsWith('https://script.google.com/')) {
        showToast('Sila masukkan URL sah bermula dengan https://script.google.com/...', 'warning');
        return;
      }
      localStorage.setItem(GSHEET_URL_STORAGE_KEY, val);
      updateGSheetIndicators();
      toggleGSheetModal(false);
      showToast(val ? 'URL Google Sheets berjaya disimpan!' : 'URL Google Sheets dikosongkan.', 'success');
      if (state.currentView === 'complete') {
        renderCompleteScreen();
      }
    }

    function clearGSheetUrl() {
      localStorage.removeItem(GSHEET_URL_STORAGE_KEY);
      const input = document.getElementById('gsheet-url-input');
      if (input) input.value = '';
      updateGSheetIndicators();
      showToast('URL Google Sheets telah dipadam.', 'info');
      if (state.currentView === 'complete') {
        renderCompleteScreen();
      }
    }

    function copyAppsScriptCode() {
      const codeEl = document.getElementById('apps-script-code-block');
      const text = codeEl ? codeEl.textContent : '';
      const tempArea = document.createElement('textarea');
      tempArea.value = text;
      tempArea.style.position = 'fixed';
      tempArea.style.left = '-9999px';
      document.body.appendChild(tempArea);
      tempArea.select();
      try {
        document.execCommand('copy');
        showToast('Kod Google Apps Script berjaya disalin!', 'success');
      } catch (err) {
        showToast('Gagal menyalin kod secara automatik.', 'error');
      }
      document.body.removeChild(tempArea);
    }

    function generateRespondentId() {
      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
      const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
      return `UTHM-${stamp}-${rand}`;
    }

    function buildGoogleSheetPayload() {
      if (!state.respondentId) {
        state.respondentId = generateRespondentId();
      }
      const isoTimestamp = new Date().toISOString();
      const payload = {
        Timestamp: isoTimestamp,
        ID_Responden: state.respondentId
      };

      // Map all 78 survey questions to the exact 85 Google Sheet columns
      SURVEY_QUESTIONS.forEach(q => {
        const colName = QUESTION_TO_SHEET_COL[q.id];
        if (colName) {
          const val = state.answers[q.id];
          payload[colName] = (val !== undefined && val !== null) ? val : '';
        }
      });

      return payload;
    }

    async function sendToGoogleSheets() {
      const url = getActiveGSheetUrl();
      if (!url) {
        state.syncStatus = 'unconfigured';
        state.syncErrorMsg = 'URL Google Apps Script belum ditetapkan.';
        saveState();
        return false;
      }

      state.syncStatus = 'syncing';
      state.syncErrorMsg = '';
      if (state.currentView === 'complete') {
        renderCompleteScreen();
      }

      const payload = buildGoogleSheetPayload();

      try {
        // Use text/plain with no-cors so Google Apps Script Web App accepts cross-origin POST reliably without preflight failure
        await fetch(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(payload)
        });

        state.syncStatus = 'synced';
        saveState();
        return true;
      } catch (err) {
        state.syncStatus = 'error';
        state.syncErrorMsg = err && err.message ? err.message : 'Ralat sambungan rangkaian.';
        saveState();
        return false;
      }
    }

    function loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object') {
            state.answers = parsed.answers || {};
            state.currentIndex = typeof parsed.currentIndex === 'number' ? Math.min(Math.max(0, parsed.currentIndex), SURVEY_QUESTIONS.length - 1) : 0;
            state.language = parsed.language || 'bilingual';
            state.autoAdvance = typeof parsed.autoAdvance === 'boolean' ? parsed.autoAdvance : true;
            state.submittedAt = parsed.submittedAt || null;
            state.respondentId = parsed.respondentId || null;
            state.syncStatus = parsed.syncStatus || 'idle';
          }
        }
      } catch (err) {
        console.warn('Gagal memuatkan simpanan tempatan:', err);
      }
    }

    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          answers: state.answers,
          currentIndex: state.currentIndex,
          language: state.language,
          autoAdvance: state.autoAdvance,
          submittedAt: state.submittedAt,
          respondentId: state.respondentId,
          syncStatus: state.syncStatus
        }));
        const badge = document.getElementById('autosave-badge');
        if (badge) {
          badge.classList.remove('hidden');
        }
      } catch (err) {
        console.warn('Gagal menyimpan data:', err);
      }
    }

    // =========================================================================
    // 3. TOAST NOTIFICATION SYSTEM
    // =========================================================================
    function showToast(message, type = 'info') {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');

      const styles = {
        info: 'bg-slate-900 text-white border-slate-700',
        success: 'bg-ecoGreen text-white border-green-700',
        warning: 'bg-amber-600 text-white border-amber-700',
        error: 'bg-rose-600 text-white border-rose-700'
      };

      toast.className = `pointer-events-auto px-4 py-3 rounded-2xl shadow-xl border text-xs sm:text-sm font-semibold flex items-center gap-2.5 transition-all transform translate-y-2 opacity-0 ${styles[type] || styles.info}`;
      toast.innerHTML = `<span>${message}</span>`;
      container.appendChild(toast);

      requestAnimationFrame(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
      });

      setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => toast.remove(), 250);
      }, 2800);
    }

    // =========================================================================
    // 4. LANGUAGE SWITCHER (BM + EN / BM / EN)
    // =========================================================================
    function setLanguage(lang) {
      state.language = lang;
      saveState();

      // Update button styles
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('bg-uthmPurple', 'text-white', 'shadow-sm');
        btn.classList.add('text-slate-600', 'hover:text-slate-900');
      });
      const activeBtn = document.getElementById(`lang-${lang}`);
      if (activeBtn) {
        activeBtn.classList.add('bg-uthmPurple', 'text-white', 'shadow-sm');
        activeBtn.classList.remove('text-slate-600', 'hover:text-slate-900');
      }

      // Toggle Welcome letter & Definition visibility
      const introBm = document.getElementById('intro-bm');
      const introEn = document.getElementById('intro-en');
      const defBm = document.getElementById('def-bm');
      const defEn = document.getElementById('def-en');

      if (introBm && introEn) {
        introBm.style.display = (lang === 'en') ? 'none' : 'block';
        introEn.style.display = (lang === 'bm') ? 'none' : 'block';
      }
      if (defBm && defEn) {
        defBm.style.display = (lang === 'en') ? 'none' : 'block';
        defEn.style.display = (lang === 'bm') ? 'none' : 'block';
      }

      // Re-render current active view
      if (state.currentView === 'wizard') {
        renderCurrentQuestion();
      } else if (state.currentView === 'review') {
        renderReviewScreen();
      } else if (state.currentView === 'complete') {
        renderCompleteScreen();
      }
    }

    function formatBilingualText(bmText, enText) {
      if (state.language === 'bm') return bmText;
      if (state.language === 'en') return enText;
      return `${bmText} / ${enText}`;
    }

    // =========================================================================
    // 5. VIEW MANAGEMENT & PROGRESS BAR
    // =========================================================================
    function showView(viewName) {
      state.currentView = viewName;

      const views = ['welcome', 'wizard', 'review', 'complete'];
      views.forEach(v => {
        const el = document.getElementById(`view-${v}`);
        if (el) {
          el.classList.toggle('hidden', v !== viewName);
        }
      });

      const progressArea = document.getElementById('header-progress-area');
      if (progressArea) {
        progressArea.classList.toggle('hidden', viewName === 'welcome' || viewName === 'complete');
      }

      updateProgressUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function getAnsweredStats() {
      const requiredQuestions = SURVEY_QUESTIONS.filter(q => q.required);
      let answeredRequired = 0;

      requiredQuestions.forEach(q => {
        const val = state.answers[q.id];
        if (val !== undefined && val !== null && String(val).trim() !== '') {
          answeredRequired++;
        }
      });

      return {
        answeredRequired,
        totalRequired: requiredQuestions.length,
        percentage: Math.round((answeredRequired / requiredQuestions.length) * 100)
      };
    }

    function updateProgressUI() {
      const stats = getAnsweredStats();
      const currentQ = SURVEY_QUESTIONS[state.currentIndex];

      const secBadge = document.getElementById('progress-section-badge');
      const qCounter = document.getElementById('progress-question-counter');
      const ansCount = document.getElementById('progress-answered-count');
      const pctLabel = document.getElementById('progress-percent');
      const barFill = document.getElementById('progress-bar-fill');

      if (secBadge && currentQ) {
        const secMap = {
          SEC_A: 'Seksyen A: Demografi',
          PART_A: 'Bhg A: Pengetahuan',
          PART_B: 'Bhg B: Kemahiran',
          PART_C: 'Bhg C: Sikap & Nilai'
        };
        secBadge.textContent = secMap[currentQ.section] || 'Soal Selidik';
      }

      if (qCounter) {
        qCounter.textContent = state.language === 'en'
          ? `Question ${state.currentIndex + 1} of ${SURVEY_QUESTIONS.length}`
          : `Soalan ${state.currentIndex + 1} daripada ${SURVEY_QUESTIONS.length}`;
      }

      if (ansCount) {
        ansCount.textContent = state.language === 'en'
          ? `${stats.answeredRequired} / ${stats.totalRequired} required answered`
          : `${stats.answeredRequired} / ${stats.totalRequired} wajib dijawab`;
      }

      if (pctLabel) {
        pctLabel.textContent = `${stats.percentage}%`;
      }

      if (barFill) {
        barFill.style.width = `${stats.percentage}%`;
      }

      // Highlight section pills
      const sections = ['SEC_A', 'PART_A', 'PART_B', 'PART_C'];
      sections.forEach(sec => {
        const pill = document.getElementById(`pill-${sec}`);
        if (!pill) return;
        const isCurrentSec = currentQ && currentQ.section === sec && state.currentView === 'wizard';
        if (isCurrentSec) {
          pill.className = 'section-pill shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-bold border border-uthmPurple bg-uthmPurple text-white shadow-xs transition-all cursor-pointer';
        } else {
          pill.className = 'section-pill shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold border border-slate-200 bg-white text-slate-600 hover:border-uthmPurple hover:text-uthmPurple transition-all cursor-pointer';
        }
      });

      const reviewPill = document.getElementById('pill-REVIEW');
      if (reviewPill) {
        if (state.currentView === 'review') {
          reviewPill.className = 'section-pill shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-bold border border-ecoGreen bg-ecoGreen text-white shadow-xs transition-all cursor-pointer';
        } else {
          reviewPill.className = 'section-pill shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold border border-slate-200 bg-white text-slate-600 hover:border-ecoGreen hover:text-ecoGreen transition-all cursor-pointer';
        }
      }
    }

    // =========================================================================
    // 6. WIZARD RENDERING & INTERACTIONS
    // =========================================================================
    function startSurvey() {
      state.currentIndex = 0;
      showView('wizard');
      renderCurrentQuestion();
    }

    function resumeSurvey() {
      showView('wizard');
      renderCurrentQuestion();
      showToast('Sesi soal selidik disambung semula.', 'info');
    }

    function toggleAutoAdvance(checked) {
      state.autoAdvance = checked;
      saveState();
      showToast(checked ? 'Auto-seterusnya diaktifkan' : 'Auto-seterusnya dimatikan', 'info');
    }

    function renderCurrentQuestion() {
      clearTimeout(autoAdvanceTimer);
      const q = SURVEY_QUESTIONS[state.currentIndex];
      if (!q) return;

      // Hide validation error on fresh render
      document.getElementById('validation-error').classList.add('hidden');

      // Re-trigger subtle card animation
      const card = document.getElementById('question-card');
      card.classList.remove('card-enter');
      void card.offsetWidth;
      card.classList.add('card-enter');

      // Context header
      document.getElementById('wizard-part-label').textContent =
        state.language === 'en' ? q.partLabelEN : (state.language === 'bm' ? q.partLabelBM : `${q.partLabelBM} | ${q.partLabelEN}`);

      document.getElementById('wizard-domain-title').textContent =
        state.language === 'en' ? q.domainEN : (state.language === 'bm' ? q.domainBM : `${q.domainBM} / ${q.domainEN}`);

      // Question code & step
      document.getElementById('q-code-badge').textContent = q.code;
      document.getElementById('q-step-indicator').textContent = `Item ${state.currentIndex + 1} / ${SURVEY_QUESTIONS.length}`;

      const reqBadge = document.getElementById('q-required-badge');
      if (q.required) {
        reqBadge.textContent = state.language === 'en' ? 'Required' : 'Wajib / Required';
        reqBadge.className = 'px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold';
      } else {
        reqBadge.textContent = state.language === 'en' ? 'Optional' : 'Pilihan / Optional';
        reqBadge.className = 'px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold';
      }

      // Question text based on language
      const bmEl = document.getElementById('q-text-bm');
      const enEl = document.getElementById('q-text-en');

      if (state.language === 'bm') {
        bmEl.textContent = q.bm;
        bmEl.classList.remove('hidden');
        enEl.classList.add('hidden');
      } else if (state.language === 'en') {
        bmEl.textContent = q.en;
        bmEl.classList.remove('hidden');
        enEl.classList.add('hidden');
      } else {
        bmEl.textContent = q.bm;
        enEl.textContent = q.en;
        bmEl.classList.remove('hidden');
        enEl.classList.remove('hidden');
      }

      // Likert helper instruction box
      const likertBox = document.getElementById('likert-instruction-box');
      likertBox.classList.toggle('hidden', q.type !== 'likert');

      // Render Answer Controls
      const container = document.getElementById('answer-container');
      container.innerHTML = '';
      const currentVal = state.answers[q.id];

      if (q.type === 'radio') {
        q.options.forEach((opt, idx) => {
          const isSelected = currentVal === opt.value;
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.onclick = () => selectRadioAnswer(q.id, opt.value);
          btn.className = `w-full text-left p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 cursor-pointer ${
            isSelected
              ? 'border-uthmPurple bg-purple-50/90 text-uthmPurple shadow-sm ring-2 ring-purple-200'
              : 'border-slate-200 bg-white hover:border-uthmPurple/50 hover:bg-slate-50 text-slate-800'
          }`;

          const labelText = state.language === 'bm' ? opt.bm : (state.language === 'en' ? opt.en : `${opt.bm} / ${opt.en}`);

          btn.innerHTML = `
            <div class="flex items-center gap-3.5">
              <span class="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold border ${
                isSelected ? 'bg-uthmPurple text-white border-uthmPurple' : 'bg-slate-100 text-slate-600 border-slate-300'
              }">${idx + 1}</span>
              <span class="font-semibold text-sm sm:text-base">${labelText}</span>
            </div>
            <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
              isSelected ? 'border-uthmPurple bg-uthmPurple' : 'border-slate-300'
            }">
              ${isSelected ? '<span class="w-2 h-2 rounded-full bg-white"></span>' : ''}
            </div>
          `;
          container.appendChild(btn);
        });
      } else if (q.type === 'text') {
        const wrapper = document.createElement('div');
        wrapper.className = 'space-y-2';
        const placeholder = state.language === 'en' ? q.placeholderEN : q.placeholderBM;

        wrapper.innerHTML = `
          <input
            type="text"
            id="input-text-${q.id}"
            value="${currentVal ? escapeHTML(currentVal) : ''}"
            placeholder="${escapeHTML(placeholder)}"
            class="w-full px-4 py-4 rounded-2xl border-2 border-slate-300 focus:border-uthmPurple focus:ring-4 focus:ring-purple-100 outline-none text-base font-medium text-slate-900 transition-all"
          />
          <p class="text-xs text-slate-400">Tekan <kbd class="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono">Enter</kbd> atau klik <strong>Seterusnya</strong> selepas menaip.</p>
        `;
        container.appendChild(wrapper);

        const inputEl = document.getElementById(`input-text-${q.id}`);
        inputEl.addEventListener('input', (e) => {
          state.answers[q.id] = e.target.value;
          saveState();
          updateProgressUI();
          document.getElementById('validation-error').classList.add('hidden');
        });
        inputEl.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            nextQuestion();
          }
        });
        setTimeout(() => inputEl.focus(), 50);
      } else if (q.type === 'likert') {
        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 sm:grid-cols-5 gap-3';

        LIKERT_OPTIONS.forEach(opt => {
          const isSelected = Number(currentVal) === opt.value;
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.onclick = () => selectLikertAnswer(q.id, opt.value);

          btn.className = `p-4 rounded-2xl border-2 transition-all flex sm:flex-col items-center sm:justify-center justify-between text-left sm:text-center gap-2 cursor-pointer transform active:scale-98 ${
            isSelected
              ? opt.activeClass + ' shadow-md'
              : 'border-slate-200 bg-white hover:border-slate-400 hover:bg-slate-50 text-slate-800'
          }`;

          const labelHTML = state.language === 'bm'
            ? `<div class="text-xs sm:text-sm font-bold leading-tight">${opt.bm}</div>`
            : state.language === 'en'
              ? `<div class="text-xs sm:text-sm font-bold leading-tight">${opt.en}</div>`
              : `<div class="text-xs sm:text-sm font-bold leading-tight">${opt.bm}</div>
                 <div class="text-[11px] opacity-85 leading-tight mt-0.5">${opt.en}</div>`;

          btn.innerHTML = `
            <div class="flex sm:flex-col items-center gap-2.5 sm:gap-1.5">
              <span class="w-9 h-9 rounded-xl flex items-center justify-center text-base font-extrabold border ${
                isSelected ? 'bg-white/20 border-white/40 text-white' : 'bg-slate-100 border-slate-300 text-slate-800'
              }">${opt.value}</span>
              <span class="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                isSelected ? 'bg-black/20 text-white' : 'bg-slate-100 text-slate-600'
              }">${opt.code}</span>
            </div>
            <div class="flex-1 sm:flex-initial">
              ${labelHTML}
            </div>
          `;
          grid.appendChild(btn);
        });

        container.appendChild(grid);
      } else if (q.type === 'textarea') {
        const wrapper = document.createElement('div');
        wrapper.className = 'space-y-2';
        const placeholder = state.language === 'en' ? q.placeholderEN : q.placeholderBM;

        wrapper.innerHTML = `
          <textarea
            id="input-textarea-${q.id}"
            rows="4"
            placeholder="${escapeHTML(placeholder)}"
            class="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-300 focus:border-uthmPurple focus:ring-4 focus:ring-purple-100 outline-none text-sm sm:text-base text-slate-900 transition-all"
          >${currentVal ? escapeHTML(currentVal) : ''}</textarea>
          <div class="flex items-center justify-between text-xs text-slate-400">
            <span>Soalan terbuka ini adalah pilihan (optional).</span>
            <button type="button" onclick="clearCurrentText('${q.id}')" class="text-slate-500 hover:text-rose-600 underline cursor-pointer">Kosongkan teks</button>
          </div>
        `;
        container.appendChild(wrapper);

        const taEl = document.getElementById(`input-textarea-${q.id}`);
        taEl.addEventListener('input', (e) => {
          state.answers[q.id] = e.target.value;
          saveState();
        });
      }

      // Update Prev / Next Buttons
      const prevBtn = document.getElementById('btn-prev');
      prevBtn.disabled = state.currentIndex === 0;
      document.getElementById('btn-prev-label').textContent = state.language === 'en' ? 'Previous' : 'Sebelumnya';

      const nextLabel = document.getElementById('btn-next-label');
      if (state.currentIndex === SURVEY_QUESTIONS.length - 1) {
        nextLabel.textContent = state.language === 'en' ? 'Review & Submit' : 'Semak & Hantar';
      } else {
        nextLabel.textContent = state.language === 'en' ? 'Next' : 'Seterusnya';
      }

      updateProgressUI();
    }

    function selectRadioAnswer(questionId, value) {
      state.answers[questionId] = value;
      saveState();
      renderCurrentQuestion();

      if (state.autoAdvance) {
        clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = setTimeout(() => {
          goNextUnchecked();
        }, 260);
      }
    }

    function selectLikertAnswer(questionId, numValue) {
      state.answers[questionId] = numValue;
      saveState();
      renderCurrentQuestion();

      if (state.autoAdvance) {
        clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = setTimeout(() => {
          goNextUnchecked();
        }, 260);
      }
    }

    function clearCurrentText(questionId) {
      delete state.answers[questionId];
      saveState();
      renderCurrentQuestion();
    }

    function prevQuestion() {
      clearTimeout(autoAdvanceTimer);
      if (state.currentIndex > 0) {
        state.currentIndex--;
        saveState();
        renderCurrentQuestion();
      }
    }

    function nextQuestion() {
      clearTimeout(autoAdvanceTimer);
      const q = SURVEY_QUESTIONS[state.currentIndex];
      const val = state.answers[q.id];

      // Validate if required
      if (q.required && (val === undefined || val === null || String(val).trim() === '')) {
        const errBox = document.getElementById('validation-error');
        const errText = document.getElementById('validation-error-text');
        errText.textContent = state.language === 'en'
          ? 'Please provide an answer for this required item before proceeding.'
          : 'Sila pilih atau masukkan jawapan bagi item wajib ini sebelum ke soalan seterusnya.';
        errBox.classList.remove('hidden');
        return;
      }

      goNextUnchecked();
    }

    function goNextUnchecked() {
      if (state.currentIndex < SURVEY_QUESTIONS.length - 1) {
        state.currentIndex++;
        saveState();
        renderCurrentQuestion();
      } else {
        openReviewScreen();
      }
    }

    function jumpToQuestion(index) {
      clearTimeout(autoAdvanceTimer);
      if (index >= 0 && index < SURVEY_QUESTIONS.length) {
        state.currentIndex = index;
        saveState();
        showView('wizard');
        renderCurrentQuestion();
      }
    }

    function jumpToSection(sectionCode) {
      const idx = SURVEY_QUESTIONS.findIndex(q => q.section === sectionCode);
      if (idx !== -1) {
        jumpToQuestion(idx);
      }
    }

    // =========================================================================
    // 7. QUESTION NAVIGATOR MODAL
    // =========================================================================
    function toggleNavigatorModal(show) {
      const modal = document.getElementById('navigator-modal');
      if (!show) {
        modal.classList.add('hidden');
        return;
      }

      renderNavigatorGrid();
      modal.classList.remove('hidden');
    }

    function renderNavigatorGrid() {
      const container = document.getElementById('navigator-grid-body');
      container.innerHTML = '';

      const groups = [
        { key: 'SEC_A', title: 'Seksyen A: Demografi / Demographics (6 Item)' },
        { key: 'PART_A', title: 'Seksyen B • Bahagian A: Elemen Pengetahuan / Knowledge (13 Item)' },
        { key: 'PART_B', title: 'Seksyen B • Bahagian B: Elemen Kemahiran / Skills (46 Item)' },
        { key: 'PART_C', title: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai / Attitudes & Values (13 Item)' }
      ];

      groups.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'space-y-2.5';

        const heading = document.createElement('h4');
        heading.className = 'text-xs font-extrabold uppercase tracking-wider text-slate-700';
        heading.textContent = group.title;
        groupDiv.appendChild(heading);

        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2';

        SURVEY_QUESTIONS.forEach((q, idx) => {
          if (q.section !== group.key) return;

          const val = state.answers[q.id];
          const isAnswered = val !== undefined && val !== null && String(val).trim() !== '';
          const isCurrent = idx === state.currentIndex && state.currentView === 'wizard';

          const btn = document.createElement('button');
          btn.type = 'button';
          btn.onclick = () => {
            toggleNavigatorModal(false);
            jumpToQuestion(idx);
          };

          let cls = 'py-2 px-1 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ';
          if (isCurrent) {
            cls += 'bg-uthmPurple text-white border-uthmPurple ring-2 ring-purple-300';
          } else if (isAnswered) {
            cls += 'bg-ecoGreen text-white border-ecoGreen hover:bg-green-800';
          } else if (!q.required) {
            cls += 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100';
          } else {
            cls += 'bg-slate-50 text-slate-700 border-slate-300 hover:border-uthmPurple hover:bg-purple-50';
          }

          btn.className = cls;
          btn.title = `${q.code}: ${q.bm}`;
          btn.textContent = q.code.replace('.', '');
          // Keep dot for clarity on codes like 1.1
          btn.textContent = q.code;
          grid.appendChild(btn);
        });

        groupDiv.appendChild(grid);
        container.appendChild(groupDiv);
      });
    }

    // =========================================================================
    // 8. REVIEW & SUBMIT SCREEN
    // =========================================================================
    function openReviewScreen() {
      clearTimeout(autoAdvanceTimer);
      showView('review');
      renderReviewScreen();
    }

    function returnToCurrentQuestion() {
      showView('wizard');
      renderCurrentQuestion();
    }

    function renderReviewScreen() {
      const stats = getAnsweredStats();
      const missingRequired = SURVEY_QUESTIONS
        .map((q, idx) => ({ q, idx }))
        .filter(({ q }) => {
          if (!q.required) return false;
          const v = state.answers[q.id];
          return v === undefined || v === null || String(v).trim() === '';
        });

      const statusBox = document.getElementById('review-status-box');
      const unansweredContainer = document.getElementById('unanswered-list-container');
      const unansweredPills = document.getElementById('unanswered-pills');

      if (missingRequired.length === 0) {
        statusBox.className = 'p-5 rounded-2xl border border-green-300 bg-green-50 flex items-center gap-3.5';
        statusBox.innerHTML = `
          <div class="w-10 h-10 rounded-xl bg-ecoGreen text-white flex items-center justify-center shrink-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-bold text-green-950">Semua ${stats.totalRequired} Soalan Wajib Telah Lengkap Dijawab!</h3>
            <p class="text-xs text-green-800 mt-0.5">Anda sedia untuk menekan butang <strong>Hantar Soal Selidik</strong> di bahagian bawah halaman ini.</p>
          </div>
        `;
        unansweredContainer.classList.add('hidden');
      } else {
        statusBox.className = 'p-5 rounded-2xl border border-amber-300 bg-amber-50 flex items-center gap-3.5';
        statusBox.innerHTML = `
          <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-bold text-amber-950">Terdapat ${missingRequired.length} Soalan Wajib Belum Dijawab</h3>
            <p class="text-xs text-amber-800 mt-0.5">Sila lengkapkan item yang bertanda di bawah sebelum menghantar soal selidik.</p>
          </div>
        `;

        unansweredContainer.classList.remove('hidden');
        unansweredPills.innerHTML = '';
        missingRequired.forEach(({ q, idx }) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.onclick = () => jumpToQuestion(idx);
          btn.className = 'px-3 py-1.5 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-900 border border-rose-300 text-xs font-bold transition-colors cursor-pointer';
          btn.textContent = `${q.id} (${q.code})`;
          unansweredPills.appendChild(btn);
        });
      }

      // Render detailed section summary cards
      const summaryContainer = document.getElementById('review-sections-summary');
      summaryContainer.innerHTML = '';

      const sectionGroups = [
        { key: 'SEC_A', title: 'Seksyen A: Demografi / Section A: Demographics' },
        { key: 'PART_A', title: 'Seksyen B • Bahagian A: Elemen Pengetahuan / Knowledge Elements' },
        { key: 'PART_B', title: 'Seksyen B • Bahagian B: Elemen Kemahiran / Skill Elements' },
        { key: 'PART_C', title: 'Seksyen B • Bahagian C: Elemen Sikap dan Nilai / Attitude & Value Elements' }
      ];

      sectionGroups.forEach(group => {
        const items = SURVEY_QUESTIONS
          .map((q, idx) => ({ q, idx }))
          .filter(({ q }) => q.section === group.key);

        const details = document.createElement('details');
        details.open = true;
        details.className = 'rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50';

        const summary = document.createElement('summary');
        summary.className = 'px-5 py-3.5 bg-slate-100 hover:bg-slate-200/70 font-bold text-sm text-slate-900 cursor-pointer flex items-center justify-between select-none';
        summary.innerHTML = `<span>${group.title}</span><span class="text-xs font-semibold text-slate-500">${items.length} item</span>`;
        details.appendChild(summary);

        const listDiv = document.createElement('div');
        listDiv.className = 'divide-y divide-slate-200 bg-white';

        items.forEach(({ q, idx }) => {
          const val = state.answers[q.id];
          const hasVal = val !== undefined && val !== null && String(val).trim() !== '';

          const row = document.createElement('div');
          row.className = 'px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-50 transition-colors';

          const displayVal = hasVal
            ? `<span class="px-2.5 py-1 rounded-lg bg-green-50 text-ecoGreen border border-green-200 text-xs font-bold">${escapeHTML(String(val))}</span>`
            : q.required
              ? `<span class="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold">Belum Dijawab</span>`
              : `<span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-500 text-xs font-medium">Tiada / Dilangkau</span>`;

          row.innerHTML = `
            <div class="text-xs sm:text-sm text-slate-700 pr-2">
              <span class="font-bold text-slate-900 mr-1.5">${q.code}</span>
              <span>${escapeHTML(state.language === 'en' ? q.en : q.bm)}</span>
            </div>
            <div class="flex items-center gap-2 shrink-0 self-end sm:self-center">
              ${displayVal}
              <button type="button" onclick="jumpToQuestion(${idx})" class="px-2.5 py-1 rounded-lg border border-slate-300 bg-white hover:border-uthmPurple text-uthmPurple text-xs font-semibold transition-colors cursor-pointer">
                Ubah
              </button>
            </div>
          `;
          listDiv.appendChild(row);
        });

        details.appendChild(listDiv);
        summaryContainer.appendChild(details);
      });
    }

    async function submitSurvey() {
      const missingRequired = SURVEY_QUESTIONS
        .map((q, idx) => ({ q, idx }))
        .filter(({ q }) => {
          if (!q.required) return false;
          const v = state.answers[q.id];
          return v === undefined || v === null || String(v).trim() === '';
        });

      if (missingRequired.length > 0) {
        showToast(`Sila lengkapkan ${missingRequired.length} soalan wajib sebelum menghantar.`, 'warning');
        const firstMissing = missingRequired[0];
        jumpToQuestion(firstMissing.idx);
        return;
      }

      const submitBtn = document.getElementById('btn-submit-survey');
      const submitLabel = document.getElementById('btn-submit-label');
      if (submitBtn) submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = 'Menghantar data... / Submitting...';

      if (!state.respondentId) {
        state.respondentId = generateRespondentId();
      }
      state.submittedAt = new Date().toLocaleString('ms-MY', {
        dateStyle: 'full',
        timeStyle: 'short'
      });

      const ok = await sendToGoogleSheets();
      saveState();

      if (submitBtn) submitBtn.disabled = false;
      if (submitLabel) submitLabel.textContent = 'Hantar Jawapan / Submit Responses';

      showView('complete');
      renderCompleteScreen();

      if (ok) {
        showToast('Jawapan berjaya dihantar ke Google Sheets! Terima kasih.', 'success');
      } else if (state.syncStatus === 'unconfigured') {
        showToast('Jawapan disimpan secara tempatan. Sila tetapkan URL Google Sheets untuk auto-hantar.', 'warning');
      } else {
        showToast('Jawapan disimpan tempatan, tetapi gagal disegerakkan ke Google Sheets.', 'error');
      }
    }

    async function retryGoogleSheetSync() {
      const url = getActiveGSheetUrl();
      if (!url) {
        toggleGSheetModal(true);
        showToast('Sila tampal URL Web App Google Apps Script terlebih dahulu.', 'info');
        return;
      }
      const ok = await sendToGoogleSheets();
      renderCompleteScreen();
      if (ok) {
        showToast('Berjaya menghantar data ke Google Sheets!', 'success');
      } else {
        showToast('Penghantaran semula gagal. Sila semak sambungan internet atau URL.', 'error');
      }
    }

    // =========================================================================
    // 9. COMPLETION SCREEN & ANALYTICS / EXPORT
    // =========================================================================
    function computeSectionMean(sectionKey) {
      const likertItems = SURVEY_QUESTIONS.filter(q => q.section === sectionKey && q.type === 'likert');
      if (likertItems.length === 0) return { mean: 0, count: 0 };

      let sum = 0;
      let count = 0;
      likertItems.forEach(q => {
        const val = Number(state.answers[q.id]);
        if (val >= 1 && val <= 5) {
          sum += val;
          count++;
        }
      });

      return {
        mean: count > 0 ? (sum / count).toFixed(2) : '0.00',
        count
      };
    }

    function renderCompleteScreen() {
      document.getElementById('submission-timestamp').textContent = `Tarikh & Masa Hantar: ${state.submittedAt || new Date().toLocaleString('ms-MY')}`;
      document.getElementById('respondent-id-badge').textContent = `ID: ${state.respondentId || generateRespondentId()}`;

      // Render Google Sheets Sync Status Banner
      const syncBanner = document.getElementById('gsheet-sync-banner');
      if (syncBanner) {
        if (state.syncStatus === 'syncing') {
          syncBanner.className = 'p-5 rounded-2xl border border-blue-300 bg-blue-50 flex items-center gap-3.5';
          syncBanner.innerHTML = `
            <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 animate-pulse">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h3 class="text-sm font-bold text-blue-950">Sedang Menghantar ke Google Sheets...</h3>
              <p class="text-xs text-blue-800 mt-0.5">Sila tunggu sebentar sementara rekod responden dimuat naik.</p>
            </div>
          `;
        } else if (state.syncStatus === 'synced') {
          syncBanner.className = 'p-5 rounded-2xl border border-green-300 bg-green-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4';
          syncBanner.innerHTML = `
            <div class="flex items-start gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-ecoGreen text-white flex items-center justify-center shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-bold text-green-950">Rekod Berjaya Dihantar ke Google Sheets!</h3>
                <p class="text-xs text-green-800 mt-0.5">Data responden (85 lajur penuh) telah disegerakkan ke hamparan Google Sheet penyelidik.</p>
              </div>
            </div>
            <button type="button" onclick="retryGoogleSheetSync()" class="self-start sm:self-center px-3.5 py-2 rounded-xl bg-white border border-green-300 text-ecoGreen hover:bg-green-100 text-xs font-bold transition-colors cursor-pointer shrink-0">
              Hantar Semula / Re-sync
            </button>
          `;
        } else if (state.syncStatus === 'unconfigured') {
          syncBanner.className = 'p-5 rounded-2xl border border-amber-300 bg-amber-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4';
          syncBanner.innerHTML = `
            <div class="flex items-start gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-bold text-amber-950">Disimpan Secara Tempatan (URL Google Sheets Belum Ditetapkan)</h3>
                <p class="text-xs text-amber-800 mt-0.5">Tetapkan Web App URL Google Apps Script untuk menghantar terus ke Google Sheet, atau muat turun fail CSV di bawah.</p>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <button type="button" onclick="toggleGSheetModal(true)" class="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors cursor-pointer">
                Tetapkan URL
              </button>
              <button type="button" onclick="retryGoogleSheetSync()" class="px-3.5 py-2 rounded-xl bg-white border border-amber-300 text-amber-900 hover:bg-amber-100 text-xs font-bold transition-colors cursor-pointer">
                Cuba Hantar Semula
              </button>
            </div>
          `;
        } else {
          syncBanner.className = 'p-5 rounded-2xl border border-rose-300 bg-rose-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4';
          syncBanner.innerHTML = `
            <div class="flex items-start gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-bold text-rose-950">Penghantaran ke Google Sheets Tergendala</h3>
                <p class="text-xs text-rose-800 mt-0.5">Jawapan anda selamat disimpan di dalam pelayar ini. Sila tekan butang di sebelah untuk mencuba semula.</p>
              </div>
            </div>
            <button type="button" onclick="retryGoogleSheetSync()" class="self-start sm:self-center px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors cursor-pointer shrink-0">
              Cuba Hantar Semula / Retry Sync
            </button>
          `;
        }
      }

      // Profile summary
      const profileGrid = document.getElementById('complete-profile-grid');
      const profileItems = [
        { label: 'Jantina / Gender', val: state.answers['D1'] || '-' },
        { label: 'Umur / Age', val: state.answers['D2'] || '-' },
        { label: 'Pendidikan / Education', val: state.answers['D3'] || '-' },
        { label: 'Pengalaman / Experience', val: state.answers['D4'] || '-' },
        { label: 'Subjek / Modules', val: state.answers['D5'] || '-' },
        { label: 'Kolej Vokasional', val: state.answers['D6'] || '-' }
      ];
      profileGrid.innerHTML = profileItems.map(item => `
        <div class="p-3 rounded-xl bg-white border border-slate-200">
          <div class="text-[11px] font-semibold text-slate-400">${item.label}</div>
          <div class="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 break-words">${escapeHTML(String(item.val))}</div>
        </div>
      `).join('');

      // Construct Means
      const partA = computeSectionMean('PART_A');
      const partB = computeSectionMean('PART_B');
      const partC = computeSectionMean('PART_C');

      const scoresGrid = document.getElementById('complete-scores-grid');
      const scoreCards = [
        {
          title: 'Bahagian A: Pengetahuan',
          sub: 'Knowledge Element (12 Item)',
          mean: partA.mean,
          color: 'border-emerald-200 bg-emerald-50/70 text-ecoGreen'
        },
        {
          title: 'Bahagian B: Kemahiran',
          sub: 'Skill Elements (45 Item)',
          mean: partB.mean,
          color: 'border-purple-200 bg-purple-50/70 text-uthmPurple'
        },
        {
          title: 'Bahagian C: Sikap & Nilai',
          sub: 'Attitude & Value Elements (12 Item)',
          mean: partC.mean,
          color: 'border-blue-200 bg-blue-50/70 text-blue-700'
        }
      ];

      scoresGrid.innerHTML = scoreCards.map(card => `
        <div class="p-5 rounded-2xl border ${card.color}">
          <div class="text-xs font-bold uppercase tracking-wider opacity-80">${card.title}</div>
          <div class="text-xs text-slate-500 mt-0.5">${card.sub}</div>
          <div class="mt-3 flex items-baseline gap-1.5">
            <span class="text-3xl font-extrabold">${card.mean}</span>
            <span class="text-xs font-semibold text-slate-500">/ 5.00</span>
          </div>
        </div>
      `).join('');
    }

    function exportCSV() {
      const payload = buildGoogleSheetPayload();
      const row = GOOGLE_SHEET_COLUMNS.map(col => {
        const val = payload[col] !== undefined && payload[col] !== null ? String(payload[col]) : '';
        return `"${val.replace(/"/g, '""')}"`;
      });

      const csvContent = '\uFEFF' + GOOGLE_SHEET_COLUMNS.join(',') + '\n' + row.join(',');
      downloadFile(csvContent, `UTHM_Green_Skills_${state.respondentId || 'Response'}.csv`, 'text/csv;charset=utf-8;');
      showToast('Fail CSV (85 lajur sepadan Google Sheet) berjaya dimuat turun.', 'success');
    }

    function exportJSON() {
      const payload = {
        studyTitle: 'PEMBANGUNAN KERANGKA KEMAHIRAN HIJAU UNTUK KURIKULUM PROGRAM TEKNOLOGI ELEKTRONIK TVET',
        institution: 'Universiti Tun Hussein Onn Malaysia (UTHM)',
        researcher: 'Adib Farhan bin Zaime',
        respondentId: state.respondentId,
        submittedAt: state.submittedAt || new Date().toISOString(),
        summaryMeans: {
          partA_Knowledge: computeSectionMean('PART_A').mean,
          partB_Skills: computeSectionMean('PART_B').mean,
          partC_AttitudeValues: computeSectionMean('PART_C').mean
        },
        sheetRow: buildGoogleSheetPayload()
      };

      downloadFile(JSON.stringify(payload, null, 2), `UTHM_Green_Skills_${state.respondentId || 'Response'}.json`, 'application/json');
      showToast('Fail JSON berjaya dimuat turun.', 'success');
    }

    function downloadFile(content, filename, mimeType) {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    function copySummaryToClipboard() {
      const lines = [
        'SOAL SELIDIK PhD UTHM - KERANGKA KEMAHIRAN HIJAU TVET ELEKTRONIK',
        `Tarikh: ${state.submittedAt || new Date().toLocaleString('ms-MY')}`,
        `Kolej Vokasional: ${state.answers['D6'] || '-'}`,
        `Subjek/Modul: ${state.answers['D5'] || '-'}`,
        `Min Bhg A (Pengetahuan): ${computeSectionMean('PART_A').mean} / 5.00`,
        `Min Bhg B (Kemahiran): ${computeSectionMean('PART_B').mean} / 5.00`,
        `Min Bhg C (Sikap & Nilai): ${computeSectionMean('PART_C').mean} / 5.00`,
        '--- Data Lengkap ---',
        ...SURVEY_QUESTIONS.map(q => `${q.id}: ${state.answers[q.id] ?? '-'}`)
      ];

      const textToCopy = lines.join('\n');
      const tempArea = document.createElement('textarea');
      tempArea.value = textToCopy;
      tempArea.style.position = 'fixed';
      tempArea.style.left = '-9999px';
      document.body.appendChild(tempArea);
      tempArea.select();
      try {
        document.execCommand('copy');
        showToast('Ringkasan jawapan disalin ke papan keratan (clipboard).', 'success');
      } catch (err) {
        showToast('Tidak dapat menyalin teks secara automatik.', 'error');
      }
      document.body.removeChild(tempArea);
    }

    // =========================================================================
    // 10. RESET / NEW RESPONSE HANDLERS
    // =========================================================================
    function resetSurveyConfirm() {
      document.getElementById('reset-modal').classList.remove('hidden');
    }

    function startNewResponse() {
      document.getElementById('reset-modal').classList.remove('hidden');
    }

    function closeResetModal() {
      document.getElementById('reset-modal').classList.add('hidden');
    }

    function executeResetSurvey() {
      localStorage.removeItem(STORAGE_KEY);
      state.answers = {};
      state.currentIndex = 0;
      state.submittedAt = null;
      state.respondentId = null;
      state.syncStatus = 'idle';
      state.syncErrorMsg = '';
      closeResetModal();
      document.getElementById('resume-banner').classList.add('hidden');
      showView('welcome');
      showToast('Sesi baharu sedia dimulakan.', 'info');
    }

    // =========================================================================
    // 11. KEYBOARD SHORTCUTS (1-5 for Likert/Radio, Arrow Left/Right)
    // =========================================================================
    document.addEventListener('keydown', (e) => {
      if (state.currentView !== 'wizard') return;
      // Do not intercept when typing inside input or textarea
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (activeTag === 'input' || activeTag === 'textarea') return;

      const q = SURVEY_QUESTIONS[state.currentIndex];
      if (!q) return;

      if (q.type === 'likert' && ['1', '2', '3', '4', '5'].includes(e.key)) {
        e.preventDefault();
        selectLikertAnswer(q.id, Number(e.key));
      } else if (q.type === 'radio' && ['1', '2', '3', '4', '5'].includes(e.key)) {
        const idx = Number(e.key) - 1;
        if (q.options[idx]) {
          e.preventDefault();
          selectRadioAnswer(q.id, q.options[idx].value);
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextQuestion();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevQuestion();
      }
    });

    function escapeHTML(str) {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    // =========================================================================
    // 12. INITIALIZATION ON WINDOW LOAD
    // =========================================================================
    window.addEventListener('DOMContentLoaded', () => {
      loadState();
      setLanguage(state.language);
      updateGSheetIndicators();

      const autoAdvCheckbox = document.getElementById('toggle-auto-advance');
      if (autoAdvCheckbox) {
        autoAdvCheckbox.checked = state.autoAdvance;
      }

      const stats = getAnsweredStats();
      if (stats.answeredRequired > 0) {
        const banner = document.getElementById('resume-banner');
        const bannerText = document.getElementById('resume-banner-text');
        banner.classList.remove('hidden');
        bannerText.textContent = `Anda telah melengkapkan ${stats.answeredRequired} daripada ${stats.totalRequired} item wajib (${stats.percentage}%).`;
      }
    });
  </script>
</body>
</html>
