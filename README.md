<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soal Selidik PhD UTHM | Kerangka Kemahiran Hijau TVET Elektronik (Mod Satu Persatu)</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts: Inter & Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        heading: ['Plus Jakarta Sans', 'sans-serif'],
                    },
                    colors: {
                        uthm: {
                            purple: '#1E1B4B',
                            dark: '#151238',
                            red: '#B91C1C',
                            accent: '#4F46E5'
                        },
                        greenleaf: {
                            50: '#ECFDF5',
                            100: '#D1FAE5',
                            500: '#10B981',
                            600: '#059669',
                            700: '#047857',
                            800: '#065F46',
                            900: '#064E3B'
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background: radial-gradient(circle at top right, #ECFDF5 0%, #F8FAFC 45%, #EEF2FF 100%);
            color: #0F172A;
            min-height: 100vh;
        }
        /* Language display controls */
        body.lang-bm .en-text { display: none !important; }
        body.lang-en .bm-text { display: none !important; }

        /* Smooth card transitions */
        @keyframes cardSlideIn {
            from {
                opacity: 0;
                transform: translateY(14px) scale(0.99);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        .animate-card {
            animation: cardSlideIn 0.28s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .option-card {
            transition: all 0.16s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .option-card:active {
            transform: scale(0.985);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 7px; height: 7px; }
        ::-webkit-scrollbar-track { background: #F1F5F9; }
        ::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 9999px; }
        ::-webkit-scrollbar-thumb:hover { background: #94A3B8; }
    </style>
</head>
<body class="antialiased flex flex-col min-h-screen">

    <!-- Top Academic & Sustainability Utility Header -->
    <header class="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
        <!-- UTHM Top Strip -->
        <div class="bg-gradient-to-r from-uthm-purple via-uthm-dark to-greenleaf-800 text-white text-xs py-2 px-4">
            <div class="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2">
                <div class="flex items-center gap-2 font-medium">
                    <span class="inline-flex items-center px-2 py-0.5 rounded bg-uthm-red text-white font-bold tracking-wide text-[11px]">UTHM</span>
                    <span class="hidden sm:inline text-slate-200">Fakulti Pendidikan Teknikal & Vokasional (FPTV)</span>
                    <span class="sm:hidden text-slate-200">FPTV • Kajian PhD</span>
                </div>
                <div class="flex items-center gap-2">
                    <!-- Language Switcher -->
                    <div class="inline-flex rounded-lg bg-white/10 p-0.5 border border-white/15" role="group" aria-label="Pilihan Bahasa">
                        <button type="button" onclick="setLanguage('both')" id="btn-lang-both" class="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-white text-uthm-purple shadow-xs transition cursor-pointer">BM & EN</button>
                        <button type="button" onclick="setLanguage('bm')" id="btn-lang-bm" class="px-2 py-0.5 rounded-md text-[11px] font-medium text-white/85 hover:text-white transition cursor-pointer">BM Sahaja</button>
                        <button type="button" onclick="setLanguage('en')" id="btn-lang-en" class="px-2 py-0.5 rounded-md text-[11px] font-medium text-white/85 hover:text-white transition cursor-pointer">EN Sahaja</button>
                    </div>
                    <!-- Researcher / Google Sheets Admin Button -->
                    <button type="button" onclick="openAdminModal()" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-greenleaf-600 hover:bg-greenleaf-500 text-white font-semibold shadow-xs transition cursor-pointer text-[11px]">
                        <i data-lucide="sheet" class="w-3.5 h-3.5"></i>
                        <span class="hidden sm:inline">Panel Penyelidik & Google Sheets</span>
                        <span class="sm:hidden">Penyelidik</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Progress Bar & Question Navigator Bar (Visible during active survey steps) -->
        <div id="wizard-topbar" class="hidden max-w-4xl mx-auto px-4 py-2.5">
            <div class="flex items-center justify-between gap-3 mb-1.5">
                <div class="flex items-center gap-2">
                    <button type="button" onclick="goToIntro()" class="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-uthm-purple transition cursor-pointer" title="Kembali ke Halaman Utama">
                        <i data-lucide="home" class="w-3.5 h-3.5"></i>
                        <span class="hidden sm:inline">Utama</span>
                    </button>
                    <span class="text-slate-300">|</span>
                    <span id="topbar-step-label" class="text-xs sm:text-sm font-bold text-uthm-purple">Soalan 1 daripada 82</span>
                    <span id="topbar-pct-badge" class="px-2 py-0.5 rounded-full bg-greenleaf-100 text-greenleaf-800 text-[11px] font-bold">0%</span>
                </div>

                <div class="flex items-center gap-2">
                    <span id="auto-save-indicator" class="hidden md:inline-flex items-center gap-1 text-[11px] text-slate-400">
                        <i data-lucide="check-circle" class="w-3 h-3 text-greenleaf-600"></i> Disimpan
                    </span>
                    <button type="button" onclick="toggleNavigatorModal(true)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold border border-slate-200 transition cursor-pointer">
                        <i data-lucide="layout-grid" class="w-3.5 h-3.5 text-uthm-purple"></i>
                        <span>Lompat Soalan</span>
                        <span id="nav-answered-pill" class="px-1.5 py-0.2 rounded bg-uthm-purple text-white text-[10px] font-bold">0/79</span>
                    </button>
                </div>
            </div>
            <!-- Animated Progress Bar -->
            <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                <div id="wizard-progress-bar" class="h-full bg-gradient-to-r from-uthm-purple via-indigo-600 to-greenleaf-500 rounded-full transition-all duration-300 ease-out" style="width: 0%"></div>
            </div>
        </div>
    </header>

    <!-- Main Centered Wizard Stage -->
    <main class="flex-1 flex flex-col justify-center max-w-4xl w-full mx-auto px-4 py-6 sm:py-10">

        <!-- ===================================================================== -->
        <!-- VIEW 0: WELCOME / INTRO SCREEN                                        -->
        <!-- ===================================================================== -->
        <section id="view-intro" class="animate-card bg-white rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-200/90 overflow-hidden">
            <!-- Hero Header -->
            <div class="bg-gradient-to-br from-uthm-purple via-uthm-dark to-greenleaf-900 p-6 sm:p-9 text-white relative overflow-hidden">
                <div class="absolute -right-10 -top-10 opacity-10 pointer-events-none">
                    <svg class="w-72 h-72" viewBox="0 0 200 200" fill="currentColor">
                        <circle cx="140" cy="60" r="85"/>
                        <circle cx="50" cy="150" r="65"/>
                    </svg>
                </div>
                <div class="relative z-10 space-y-3">
                    <div class="flex flex-wrap items-center gap-2">
                        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-bold text-greenleaf-200">
                            <i data-lucide="graduation-cap" class="w-4 h-4"></i>
                            <span>UNIVERSITI TUN HUSSEIN ONN MALAYSIA (UTHM)</span>
                        </span>
                        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-greenleaf-500/20 border border-greenleaf-400/30 text-[11px] font-semibold text-greenleaf-200">
                            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Mod Interaktif Satu Persatu
                        </span>
                    </div>
                    <h1 class="font-heading text-lg sm:text-2xl md:text-[26px] font-extrabold leading-snug tracking-tight bm-text">
                        PEMBANGUNAN KERANGKA KEMAHIRAN HIJAU UNTUK KURIKULUM PROGRAM TEKNOLOGI ELEKTRONIK TVET: DALAM MEMENUHI KEPERLUAN EKONOMI HIJAU
                    </h1>
                    <p class="font-heading text-sm sm:text-base md:text-lg font-semibold text-greenleaf-200 leading-snug en-text">
                        DEVELOPMENT OF A GREEN SKILLS FRAMEWORK FOR THE TVET ELECTRONIC TECHNOLOGY PROGRAMME CURRICULUM: MEETING THE NEEDS OF THE GREEN ECONOMY
                    </p>
                </div>
            </div>

            <!-- Intro Content -->
            <div class="p-6 sm:p-8 space-y-6 text-slate-700 text-sm leading-relaxed">
                <!-- Cover Letter Summary -->
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="bm-text bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-2.5">
                        <div class="flex items-center gap-2 text-uthm-purple font-bold text-xs uppercase tracking-wider">
                            <span class="w-2 h-2 rounded-full bg-uthm-purple"></span>
                            <span>Surat Pengenalan Penyelidik (BM)</span>
                        </div>
                        <p class="font-semibold text-slate-900">Kepada Tuan/Puan yang dihormati,</p>
                        <p>
                            Saya, <strong>Adib Farhan bin Zaime</strong> (Calon PhD Pendidikan Teknik & Vokasional, UTHM) memohon kerjasama anda sebagai pendidik TVET di Kolej Vokasional untuk menilai tahap kepentingan elemen kemahiran hijau hasil kajian Delphi pakar bagi pembangunan kurikulum <strong>Program Teknologi Elektronik TVET</strong>.
                        </p>
                        <p class="text-xs text-slate-500 italic">
                            Segala jawapan adalah sulit dan digunakan bagi tujuan akademik sahaja. Soal selidik ini dipaparkan <strong>satu soalan pada satu masa</strong> untuk keselesaan anda.
                        </p>
                    </div>

                    <div class="en-text bg-greenleaf-50/50 p-4 sm:p-5 rounded-2xl border border-greenleaf-200/80 space-y-2.5">
                        <div class="flex items-center gap-2 text-greenleaf-800 font-bold text-xs uppercase tracking-wider">
                            <span class="w-2 h-2 rounded-full bg-greenleaf-600"></span>
                            <span>Researcher Introduction (EN)</span>
                        </div>
                        <p class="font-semibold text-slate-900">Dear Sir/Madam,</p>
                        <p>
                            I am <strong>Adib Farhan bin Zaime</strong> (PhD Candidate in Technical & Vocational Education, UTHM). Following an initial Delphi study among experts, this survey seeks your expertise as a TVET educator at Malaysian Vocational Colleges to rate the importance of green skills elements for the <strong>TVET Electronic Technology Programme</strong> curriculum.
                        </p>
                        <p class="text-xs text-slate-500 italic">
                            All responses are strictly confidential and used solely for academic purposes. Questions are presented <strong>one at a time</strong> for a focused experience.
                        </p>
                    </div>
                </div>

                <!-- Operational Definition -->
                <div class="bg-gradient-to-r from-greenleaf-50 to-emerald-50/70 border-l-4 border-greenleaf-600 p-4 sm:p-5 rounded-r-2xl">
                    <div class="flex items-start gap-3">
                        <div class="p-2 bg-greenleaf-600 text-white rounded-xl shrink-0 mt-0.5">
                            <i data-lucide="leaf" class="w-4 h-4"></i>
                        </div>
                        <div class="space-y-1.5 text-xs sm:text-sm">
                            <h2 class="font-bold text-greenleaf-900">Definisi Operasi / Operational Definition: Kemahiran Hijau (Green Skills)</h2>
                            <p class="text-slate-700 bm-text">
                                <strong>Kemahiran hijau</strong> adalah satu set kemahiran yang merangkumi kemahiran teknikal, pengetahuan, nilai, dan sikap yang diperlukan dalam pekerjaan hijau untuk menyokong ekonomi, sosial, dan alam sekitar yang mampan melalui aktiviti seperti industri, perniagaan, dan komuniti.
                            </p>
                            <p class="text-slate-600 en-text">
                                <strong>Green skills</strong> refer to a set of skills encompassing technical skills, knowledge, values, and attitudes required in green jobs to support economic, social, and environmental sustainability through activities across industries, businesses, and communities.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Researchers Contact Info -->
                <div class="grid sm:grid-cols-2 gap-3 text-xs">
                    <div class="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
                        <div class="w-9 h-9 rounded-full bg-uthm-purple text-white flex items-center justify-center font-bold shrink-0">AF</div>
                        <div>
                            <p class="font-bold text-slate-900">1) Adib Farhan bin Zaime</p>
                            <p class="text-slate-500">+60 13 650 2508 • adibfarhanzaime@gmail.com</p>
                        </div>
                    </div>
                    <div class="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center gap-3">
                        <div class="w-9 h-9 rounded-full bg-greenleaf-700 text-white flex items-center justify-center font-bold shrink-0">LC</div>
                        <div>
                            <p class="font-bold text-slate-900">2) Prof. Ts. Dr. Lai Chee Sern (Penyelia)</p>
                            <p class="text-slate-500">+60 12 576 8327 • lcsern@uthm.edu.my</p>
                        </div>
                    </div>
                </div>

                <!-- Resume Banner if Draft Exists -->
                <div id="resume-draft-banner" class="hidden p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-wrap items-center justify-between gap-3">
                    <div class="flex items-center gap-2.5 text-xs sm:text-sm text-indigo-950">
                        <i data-lucide="history" class="w-5 h-5 text-indigo-600 shrink-0"></i>
                        <span>Anda mempunyai sesi jawapan yang belum selesai (<strong id="resume-count-text">0/79</strong> dijawab).</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <button type="button" onclick="resumeSavedDraft()" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition cursor-pointer">
                            Sambung Jawab
                        </button>
                        <button type="button" onclick="clearDraftAndRestart()" class="px-3 py-1.5 rounded-xl bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 text-xs font-semibold transition cursor-pointer">
                            Mula Semula
                        </button>
                    </div>
                </div>
            </div>

            <!-- Start Action Footer -->
            <div class="bg-slate-50 px-6 py-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2 text-xs text-slate-500">
                    <i data-lucide="clock" class="w-4 h-4 text-greenleaf-600"></i>
                    <span>Anggaran masa: ~8–10 minit (82 langkah ringkas)</span>
                </div>
                <button type="button" onclick="startSurveyWizard()" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-uthm-purple to-greenleaf-700 hover:from-uthm-dark hover:to-greenleaf-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-uthm-purple/20 transition cursor-pointer">
                    <span>Mula Menjawab Soal Selidik / Start Survey</span>
                    <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </button>
            </div>
        </section>

        <!-- ===================================================================== -->
        <!-- VIEW 1: SINGLE-QUESTION FOCUSED CARD STAGE (82 STEPS)                 -->
        <!-- ===================================================================== -->
        <section id="view-question" class="hidden">
            <div id="question-card-wrapper" class="bg-white rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-200/90 overflow-hidden">
                <!-- Card Section & Dimension Header -->
                <div class="bg-gradient-to-r from-uthm-purple via-uthm-dark to-greenleaf-900 px-5 sm:px-8 py-4 text-white">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <span id="q-section-badge" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-greenleaf-200 text-xs font-bold tracking-wide">
                            Seksyen A: Demografi
                        </span>
                        <span id="q-item-code-badge" class="px-2.5 py-0.5 rounded-lg bg-black/25 text-white/90 font-mono text-xs font-semibold">
                            Item 1 / 82
                        </span>
                    </div>
                    <p id="q-subdimension-title" class="text-xs sm:text-sm text-slate-200 mt-2 font-medium leading-snug"></p>
                </div>

                <!-- Question Prompt & Input Area -->
                <div class="p-6 sm:p-9 space-y-6">
                    <!-- Question Text -->
                    <div class="space-y-2">
                        <div class="flex items-start gap-3">
                            <span id="q-number-pill" class="inline-flex items-center justify-center px-2.5 py-1 rounded-xl bg-uthm-purple text-white font-heading font-extrabold text-xs sm:text-sm shrink-0 mt-0.5">
                                1
                            </span>
                            <div class="space-y-1.5 flex-1">
                                <h2 id="q-text-bm" class="font-heading text-lg sm:text-xl md:text-[22px] font-bold text-slate-900 leading-snug bm-text"></h2>
                                <p id="q-text-en" class="text-sm sm:text-base text-slate-500 font-medium leading-snug en-text"></p>
                            </div>
                        </div>
                    </div>

                    <!-- Dynamic Answer Widget (Radio / Text / Likert 1-5 / Textarea) -->
                    <div id="q-answer-area" class="pt-1"></div>

                    <!-- Keyboard Shortcut Hint -->
                    <div id="q-keyboard-hint" class="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                        <span id="q-hint-text" class="flex items-center gap-1.5">
                            <i data-lucide="keyboard" class="w-3.5 h-3.5 text-slate-400"></i>
                            <span>Tip: Tekan kekunci <strong>1–5</strong> pada papan kekunci untuk memilih & terus ke soalan seterusnya.</span>
                        </span>
                        <span id="q-required-tag" class="font-semibold text-uthm-purple">Wajib dijawab</span>
                    </div>
                </div>

                <!-- Card Navigation Footer -->
                <div class="bg-slate-50 px-5 sm:px-8 py-4 border-t border-slate-200 flex items-center justify-between gap-3">
                    <button type="button" onclick="prevQuestion()" id="btn-prev-q" class="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm transition cursor-pointer">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i>
                        <span>Sebelumnya / Previous</span>
                    </button>

                    <button type="button" onclick="nextQuestion()" id="btn-next-q" class="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl bg-uthm-purple hover:bg-uthm-dark text-white font-semibold text-xs sm:text-sm shadow-sm transition cursor-pointer">
                        <span id="btn-next-label">Seterusnya / Next</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- ===================================================================== -->
        <!-- VIEW 2: REVIEW & SUBMIT SUMMARY SCREEN                                -->
        <!-- ===================================================================== -->
        <section id="view-review" class="hidden animate-card bg-white rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-200/90 overflow-hidden">
            <div class="bg-gradient-to-r from-uthm-purple via-uthm-dark to-greenleaf-800 p-6 sm:p-8 text-white">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-greenleaf-200 text-xs font-bold mb-2">
                    <i data-lucide="clipboard-check" class="w-4 h-4"></i> Semakan Akhir / Final Review
                </span>
                <h2 class="font-heading text-xl sm:text-2xl font-extrabold">Semak & Hantar Jawapan Soal Selidik</h2>
                <p class="text-xs sm:text-sm text-slate-200 mt-1">
                    Sila pastikan semua bahagian telah lengkap sebelum menghantar maklum balas anda.
                </p>
            </div>

            <div class="p-6 sm:p-8 space-y-6">
                <!-- Section Completion Cards -->
                <div id="review-summary-grid" class="grid sm:grid-cols-2 gap-3.5"></div>

                <!-- Missing Warning Box (shown if any required item is missing) -->
                <div id="review-missing-alert" class="hidden p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-xs sm:text-sm flex flex-wrap items-center justify-between gap-3">
                    <div class="flex items-center gap-2.5">
                        <i data-lucide="alert-circle" class="w-5 h-5 text-rose-600 shrink-0"></i>
                        <span id="review-missing-text">Terdapat beberapa item wajib yang belum dijawab.</span>
                    </div>
                    <button type="button" onclick="jumpToFirstMissing()" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition cursor-pointer">
                        Pergi ke Soalan Belum Dijawab
                    </button>
                </div>

                <!-- Respondent Demographics Preview -->
                <div class="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <div class="flex items-center justify-between">
                        <h3 class="font-bold text-slate-900">Ringkasan Profil Responden (Seksyen A)</h3>
                        <button type="button" onclick="jumpToStep(0)" class="text-xs font-semibold text-uthm-accent hover:underline cursor-pointer">Ubah Demografi</button>
                    </div>
                    <div id="review-demo-details" class="grid sm:grid-cols-2 gap-2 text-slate-600 pt-1"></div>
                </div>
            </div>

            <div class="bg-slate-50 px-6 py-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button type="button" onclick="jumpToStep(ALL_STEPS.length - 1)" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm transition cursor-pointer">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i>
                    <span>Kembali ke Soalan Terakhir</span>
                </button>

                <button type="button" onclick="submitSurvey()" id="btn-submit-survey" class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-greenleaf-600 to-emerald-600 hover:from-greenleaf-700 hover:to-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-greenleaf-600/25 transition cursor-pointer">
                    <i data-lucide="send" class="w-4 h-4"></i>
                    <span>Hantar Jawapan / Submit Response</span>
                </button>
            </div>
        </section>

        <!-- ===================================================================== -->
        <!-- VIEW 3: OFFICIAL THANK YOU / COMPLETION SCREEN                        -->
        <!-- ===================================================================== -->
        <section id="view-thankyou" class="hidden animate-card bg-white rounded-3xl shadow-xl shadow-slate-200/70 border border-slate-200/90 p-8 sm:p-12 text-center space-y-6">
            <div class="w-20 h-20 rounded-full bg-greenleaf-100 text-greenleaf-600 flex items-center justify-center mx-auto shadow-inner">
                <i data-lucide="check-circle-2" class="w-11 h-11"></i>
            </div>
            <div class="space-y-2 max-w-xl mx-auto">
                <h2 class="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">Terima Kasih! / Thank You!</h2>
                <p class="text-slate-600 text-sm sm:text-base">
                    Terima kasih atas kesudian tuan/puan dalam menjawab soal selidik penyelidikan PhD UTHM ini. Maklum balas anda amat bermakna dalam pembangunan kerangka kemahiran hijau TVET.
                </p>
                <p class="text-slate-500 text-xs sm:text-sm">
                    Thank you for taking the time to complete this survey. Your response has been recorded.
                </p>
            </div>

            <div id="submit-sync-status" class="max-w-lg mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700"></div>

            <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button type="button" onclick="downloadSingleCSV()" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-uthm-purple text-white font-semibold text-xs sm:text-sm hover:bg-uthm-dark transition cursor-pointer">
                    <i data-lucide="download" class="w-4 h-4"></i>
                    <span>Muat Turun Salinan Jawapan (.CSV)</span>
                </button>
                <button type="button" onclick="resetForNewRespondent()" class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-50 transition cursor-pointer">
                    <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
                    <span>Isi Responden Baharu</span>
                </button>
            </div>
        </section>

    </main>

    <!-- Footer -->
    <footer class="py-4 px-4 text-center text-[11px] text-slate-500">
        <p class="font-semibold text-slate-600">Penyelidikan PhD Pendidikan Teknik & Vokasional • Universiti Tun Hussein Onn Malaysia (UTHM)</p>
        <p class="mt-0.5">Adib Farhan bin Zaime & Prof. Ts. Dr. Lai Chee Sern • Sulit & Untuk Tujuan Akademik Sahaja</p>
    </footer>

    <!-- Toast Notification Container -->
    <div id="toast-container" class="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0"></div>

    <!-- ========================================================================= -->
    <!-- QUESTION NAVIGATOR DRAWER / MODAL (LOMPAT SOALAN)                         -->
    <!-- ========================================================================= -->
    <div id="navigator-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
        <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-3xl w-full max-h-[88vh] flex flex-col overflow-hidden animate-card">
            <div class="bg-uthm-purple text-white px-6 py-4 flex items-center justify-between shrink-0">
                <div>
                    <h3 class="font-heading font-bold text-base sm:text-lg">Peta Navigasi Soalan / Question Navigator</h3>
                    <p class="text-xs text-slate-300">Klik mana-mana nombor soalan untuk melompat terus ke item tersebut.</p>
                </div>
                <button type="button" onclick="toggleNavigatorModal(false)" class="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>

            <!-- Legend -->
            <div class="bg-slate-50 px-6 py-2.5 border-b border-slate-200 flex flex-wrap items-center gap-4 text-xs">
                <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-greenleaf-600 inline-block"></span> Telah Dijawab</span>
                <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-uthm-purple inline-block"></span> Soalan Semasa</span>
                <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-white border border-slate-300 inline-block"></span> Belum Dijawab</span>
            </div>

            <!-- Grid of All 82 Steps -->
            <div id="navigator-grid-container" class="p-6 overflow-y-auto space-y-5 flex-1"></div>

            <div class="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex items-center justify-between">
                <button type="button" onclick="toggleNavigatorModal(false); jumpToFirstMissing();" class="text-xs font-bold text-rose-600 hover:underline cursor-pointer">
                    Pergi ke Soalan Belum Dijawab Pertama →
                </button>
                <button type="button" onclick="toggleNavigatorModal(false); showReviewScreen();" class="px-4 py-2 rounded-xl bg-greenleaf-700 hover:bg-greenleaf-800 text-white text-xs font-bold transition cursor-pointer">
                    Ke Skrin Semakan & Hantar
                </button>
            </div>
        </div>
    </div>

    <!-- ========================================================================= -->
    <!-- RESEARCHER & GOOGLE SHEETS INTEGRATION MODAL                              -->
    <!-- ========================================================================= -->
    <div id="admin-modal" class="fixed inset-0 z-50 hidden bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden">
            <!-- Modal Header -->
            <div class="bg-gradient-to-r from-uthm-purple to-greenleaf-800 text-white px-6 py-4 flex items-center justify-between shrink-0">
                <div class="flex items-center gap-2.5">
                    <i data-lucide="database" class="w-5 h-5 text-greenleaf-300"></i>
                    <div>
                        <h3 class="font-heading font-bold text-base sm:text-lg">Panel Penyelidik, Analisis Statistik & Google Sheets</h3>
                        <p class="text-xs text-slate-200">Statistik Deskriptif (Min & SD), Eksport CSV & Kod Google Apps Script (Code.gs)</p>
                    </div>
                </div>
                <button type="button" onclick="closeAdminModal()" class="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>

            <!-- Modal Tabs -->
            <div class="bg-slate-100 px-6 pt-3 border-b border-slate-200 flex gap-2 shrink-0 overflow-x-auto">
                <button type="button" onclick="switchAdminTab('data')" id="admintab-data" class="px-4 py-2 rounded-t-xl text-xs sm:text-sm font-bold bg-white text-uthm-purple border-t border-x border-slate-200 cursor-pointer">
                    1. Analisis Statistik & Eksport CSV (<span id="total-resp-count">0</span>)
                </button>
                <button type="button" onclick="switchAdminTab('gsheet')" id="admintab-gsheet" class="px-4 py-2 rounded-t-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer">
                    2. Sambungan Google Sheets & Kod Apps Script
                </button>
            </div>

            <!-- Modal Body -->
            <div class="p-6 overflow-y-auto flex-1 space-y-6">
                <!-- TAB 1: ANALISIS & CSV -->
                <div id="admin-view-data" class="space-y-6">
                    <div class="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                        <div>
                            <h4 class="font-bold text-sm text-slate-900">Pengurusan Data Responden & Simulasi</h4>
                            <p class="text-xs text-slate-500">Jana sampel ujian atau muat turun fail CSV untuk dibuka terus di Google Sheets / SPSS.</p>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <button type="button" onclick="generateSampleResponse()" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition cursor-pointer">
                                <i data-lucide="sparkles" class="w-4 h-4"></i>
                                <span>+1 Sampel Ujian</span>
                            </button>
                            <button type="button" onclick="exportAllCSV()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-greenleaf-600 hover:bg-greenleaf-700 text-white text-xs font-bold shadow-xs transition cursor-pointer">
                                <i data-lucide="file-spreadsheet" class="w-4 h-4"></i>
                                <span>Muat Turun CSV (Google Sheets)</span>
                            </button>
                            <button type="button" onclick="clearAllStoredResponses()" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-semibold transition cursor-pointer">
                                <i data-lucide="trash-2" class="w-4 h-4"></i>
                                <span>Padam Rekod</span>
                            </button>
                        </div>
                    </div>

                    <!-- Domain Mean Summary Cards -->
                    <div class="grid sm:grid-cols-4 gap-3" id="construct-stats-cards"></div>

                    <!-- Item-by-Item Mean & SD Table -->
                    <div class="border border-slate-200 rounded-2xl overflow-hidden">
                        <div class="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                            <h5 class="font-bold text-xs sm:text-sm text-slate-800">Jadual Analisis Min (Mean) & Sisihan Piawai (SD) Setiap Item</h5>
                            <span class="text-xs text-slate-500">Skala 1.00 – 5.00</span>
                        </div>
                        <div class="max-h-72 overflow-y-auto">
                            <table class="w-full text-left border-collapse text-xs">
                                <thead class="bg-slate-100 sticky top-0 text-slate-700 font-bold">
                                    <tr>
                                        <th class="py-2.5 px-3 border-b">Kod</th>
                                        <th class="py-2.5 px-3 border-b">Bahagian</th>
                                        <th class="py-2.5 px-3 border-b">Pernyataan Item</th>
                                        <th class="py-2.5 px-3 border-b text-center">N</th>
                                        <th class="py-2.5 px-3 border-b text-center">Min</th>
                                        <th class="py-2.5 px-3 border-b text-center">SD</th>
                                        <th class="py-2.5 px-3 border-b">Interpretasi</th>
                                    </tr>
                                </thead>
                                <tbody id="analysis-table-body" class="divide-y divide-slate-100"></tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- TAB 2: GOOGLE SHEETS SETUP & APPS SCRIPT -->
                <div id="admin-view-gsheet" class="hidden space-y-6">
                    <div class="bg-greenleaf-50 border border-greenleaf-200 rounded-2xl p-5 space-y-3">
                        <h4 class="font-bold text-sm text-greenleaf-900 flex items-center gap-2">
                            <i data-lucide="link" class="w-4 h-4"></i>
                            <span>Langkah 1: Konfigurasi URL Web App Google Apps Script</span>
                        </h4>
                        <p class="text-xs text-slate-700 leading-relaxed">
                            Tampal URL Web App Google Apps Script di bawah supaya setiap jawapan responden terus masuk ke dalam <strong>Google Sheet</strong> anda secara automatik:
                        </p>
                        <div class="flex flex-col sm:flex-row gap-2">
                            <input type="url" id="gsheet-webapp-url" placeholder="https://script.google.com/macros/s/AKfycb.../exec" class="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm outline-none focus:border-greenleaf-600">
                            <button type="button" onclick="saveGoogleSheetURL()" class="px-4 py-2.5 rounded-xl bg-uthm-purple hover:bg-uthm-dark text-white text-xs font-bold transition cursor-pointer shrink-0">
                                Simpan URL
                            </button>
                            <button type="button" onclick="testGoogleSheetConnection()" class="px-4 py-2.5 rounded-xl bg-greenleaf-600 hover:bg-greenleaf-700 text-white text-xs font-bold transition cursor-pointer shrink-0">
                                Uji Hantar Data
                            </button>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <h4 class="font-bold text-sm text-slate-900">Langkah 2: Kod Google Apps Script (Code.gs)</h4>
                            <button type="button" onclick="copyAppsScriptCode()" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold transition cursor-pointer">
                                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                                <span>Salin Kod (1-Klik Copy)</span>
                            </button>
                        </div>
                        <ol class="list-decimal list-inside text-xs text-slate-600 space-y-1 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                            <li>Buka <strong>Google Sheets</strong> baharu (<a href="https://sheets.new" target="_blank" class="text-uthm-accent underline font-semibold">sheets.new</a>) & klik <strong>Extensions &gt; Apps Script</strong>.</li>
                            <li>Tampal kod di bawah ke dalam fail <code>Code.gs</code> dan klik <strong>Save</strong>.</li>
                            <li>Klik <strong>Deploy &gt; New deployment &gt; Web app</strong> (<em>Execute as:</em> <strong>Me</strong>, <em>Who has access:</em> <strong>Anyone</strong>).</li>
                            <li>Salin <strong>Web app URL</strong> yang dijana dan simpan di Langkah 1 di atas.</li>
                        </ol>

                        <pre id="apps-script-code" class="bg-slate-900 text-emerald-300 p-4 rounded-2xl text-xs overflow-x-auto leading-relaxed font-mono select-all">// ============================================================================
// GOOGLE APPS SCRIPT (Code.gs): SOAL SELIDIK PHD UTHM - KEMAHIRAN HIJAU TVET
// Penyelidik: Adib Farhan bin Zaime & Prof. Ts. Dr. Lai Chee Sern
// ============================================================================

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetData = ss.getSheetByName("Data_Responden");
    
    if (!sheetData) {
      sheetData = ss.insertSheet("Data_Responden");
      var headers = buildHeaders();
      sheetData.appendRow(headers);
      sheetData.getRange(1, 1, 1, headers.length)
        .setFontWeight("bold")
        .setBackground("#1E1B4B")
        .setFontColor("#FFFFFF");
      sheetData.setFrozenRows(1);
    }

    var payload = JSON.parse(e.postData.contents);
    var headers = sheetData.getRange(1, 1, 1, sheetData.getLastColumn()).getValues()[0];
    var row = headers.map(function(h) {
      return payload[h] !== undefined ? payload[h] : "";
    });
    
    sheetData.appendRow(row);
    updateAnalysisSheet(ss);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function buildHeaders() {
  var meta = ["Timestamp", "Jantina", "Umur", "Pendidikan", "Pengalaman_Mengajar", "Subjek_Utama", "Kolej_Vokasional"];
  var partA = ["A1.0","A1.1","A1.2","A1.3","A1.4","A1.5","A1.6","A2.0","A2.1","A2.2","A2.3","A2.4","Terbuka_A"];
  var partB = [
    "B1.0","B1.1","B1.2","B1.3","B1.4",
    "B2.0","B2.1","B2.2","B2.3","B2.4",
    "B3.0","B3.1","B3.2","B3.3","B3.4","B3.5",
    "B4.0","B4.1","B4.2","B4.3","B4.4","B4.5","B4.6","B4.7",
    "B5.0","B5.1","B5.2","B5.3","B5.4","B5.5",
    "B6.0","B6.1","B6.2","B6.3","B6.4","B6.5",
    "B7.0","B7.1","B7.2","B7.3","B7.4","B7.5","B7.6",
    "B8.0","B8.1","B8.2","B8.3","B8.4","B8.5",
    "Terbuka_B"
  ];
  var partC = ["C1.0","C1.1","C1.2","C1.3","C1.4","C1.5","C2.0","C2.1","C2.2","C2.3","C2.4","C2.5","Terbuka_C"];
  return meta.concat(partA, partB, partC);
}

function updateAnalysisSheet(ss) {
  var sheetStats = ss.getSheetByName("Ringkasan_Analisis");
  if (!sheetStats) {
    sheetStats = ss.insertSheet("Ringkasan_Analisis");
    sheetStats.appendRow(["Kod Item", "Bilangan Responden (N)", "Skor Min (Mean)", "Sisihan Piawai (SD)", "Interpretasi Tahap"]);
    sheetStats.getRange("A1:E1").setFontWeight("bold").setBackground("#047857").setFontColor("#FFFFFF");
    
    var headers = buildHeaders();
    var rowIdx = 2;
    for (var i = 0; i < headers.length; i++) {
      var code = headers[i];
      if (/^[ABC]\d+\.\d+$/.test(code)) {
        var colLetter = columnToLetter(i + 1);
        var range = "Data_Responden!" + colLetter + "2:" + colLetter;
        sheetStats.getRange(rowIdx, 1).setValue(code);
        sheetStats.getRange(rowIdx, 2).setFormula("=COUNT(" + range + ")");
        sheetStats.getRange(rowIdx, 3).setFormula("=IFERROR(AVERAGE(" + range + "), 0)");
        sheetStats.getRange(rowIdx, 4).setFormula("=IFERROR(STDEV(" + range + "), 0)");
        sheetStats.getRange(rowIdx, 5).setFormula('=IF(C' + rowIdx + '>=4.21,"Sangat Tinggi / Sangat Penting",IF(C' + rowIdx + '>=3.41,"Tinggi / Penting",IF(C' + rowIdx + '>=2.61,"Sederhana","Rendah")))');
        rowIdx++;
      }
    }
    sheetStats.getRange("C2:D" + (rowIdx - 1)).setNumberFormat("0.00");
  }
}

function columnToLetter(column) {
  var temp, letter = '';
  while (column > 0) {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // ============================================================================
        // COMPLETE 82-STEP QUESTION SEQUENTIAL ENGINE (ONE-QUESTION-AT-A-TIME)
        // ============================================================================
        const LIKERT_OPTIONS = [
            { val: 1, code: "Stp", bm: "Sangat Tidak Penting", en: "Not at all important" },
            { val: 2, code: "Tp", bm: "Tidak Penting", en: "Slightly important" },
            { val: 3, code: "Hp", bm: "Hampir Penting", en: "Somewhat important" },
            { val: 4, code: "P", bm: "Penting", en: "Important" },
            { val: 5, code: "Sp", bm: "Sangat Penting", en: "Strongly important" }
        ];

        const KV_SUGGESTIONS = [
            "Kolej Vokasional Batu Pahat", "Kolej Vokasional Kluang", "Kolej Vokasional Tanjung Puteri",
            "Kolej Vokasional Muar", "Kolej Vokasional Segamat", "Kolej Vokasional Kota Tinggi",
            "Kolej Vokasional Melaka Tengah", "Kolej Vokasional Datuk Seri Mohd Zin",
            "Kolej Vokasional Seremban", "Kolej Vokasional Ampangan", "Kolej Vokasional Shah Alam",
            "Kolej Vokasional Sungai Buloh", "Kolej Vokasional Kajang", "Kolej Vokasional Klang",
            "Kolej Vokasional Setapak", "Kolej Vokasional Lebuh Cator", "Kolej Vokasional Slim River",
            "Kolej Vokasional Butterworth", "Kolej Vokasional Balik Pulau", "Kolej Vokasional Alor Setar",
            "Kolej Vokasional Sungai Petani 1", "Kolej Vokasional Kangar", "Kolej Vokasional Kuantan",
            "Kolej Vokasional Temerloh", "Kolej Vokasional Wakaf Tembusu", "Kolej Vokasional Pengkalan Chepa",
            "Kolej Vokasional Kuching", "Kolej Vokasional Likas"
        ];

        // Build flat list of all 82 survey steps in exact document order
        function buildAllSteps() {
            const steps = [];

            // --- SEKSYEN A: DEMOGRAFI (6 Steps) ---
            steps.push({
                key: "Jantina", code: "D1", section: "Seksyen A: Demografi / Demographics",
                subdimension: "Maklumat Latar Belakang Responden (1 daripada 6)",
                type: "radio", required: true,
                bm: "Jantina", en: "Gender",
                options: [
                    { value: "Lelaki / Male", bm: "Lelaki", en: "Male" },
                    { value: "Perempuan / Female", bm: "Perempuan", en: "Female" }
                ]
            });
            steps.push({
                key: "Umur", code: "D2", section: "Seksyen A: Demografi / Demographics",
                subdimension: "Maklumat Latar Belakang Responden (2 daripada 6)",
                type: "radio", required: true,
                bm: "Umur", en: "Age",
                options: [
                    { value: "23-32 tahun", bm: "23–32 tahun", en: "23–32 years old" },
                    { value: "33-42 tahun", bm: "33–42 tahun", en: "33–42 years old" },
                    { value: "43-52 tahun", bm: "43–52 tahun", en: "43–52 years old" },
                    { value: "53 tahun & ke atas", bm: "53 tahun & ke atas", en: "53 years old & above" }
                ]
            });
            steps.push({
                key: "Pendidikan", code: "D3", section: "Seksyen A: Demografi / Demographics",
                subdimension: "Maklumat Latar Belakang Responden (3 daripada 6)",
                type: "radio", required: true,
                bm: "Tahap Pendidikan Tertinggi", en: "Education Level",
                options: [
                    { value: "Diploma / DKM", bm: "Diploma / Diploma Kemahiran Malaysia", en: "Diploma / Malaysian Skills Diploma" },
                    { value: "DLKM", bm: "Diploma Lanjutan Kemahiran Malaysia", en: "Malaysian Advanced Skills Diploma" },
                    { value: "Sarjana Muda / Bachelor's", bm: "Sarjana Muda", en: "Bachelor’s Degree" },
                    { value: "Sarjana / Master's", bm: "Sarjana", en: "Master’s Degree" },
                    { value: "Doktor Falsafah / PhD", bm: "Doktor Falsafah (PhD)", en: "Doctor of Philosophy (PhD)" }
                ]
            });
            steps.push({
                key: "Pengalaman_Mengajar", code: "D4", section: "Seksyen A: Demografi / Demographics",
                subdimension: "Maklumat Latar Belakang Responden (4 daripada 6)",
                type: "radio", required: true,
                bm: "Pengalaman Mengajar", en: "Teaching Experience",
                options: [
                    { value: "0-5 tahun", bm: "0–5 tahun", en: "0–5 years" },
                    { value: "6-10 tahun", bm: "6–10 tahun", en: "6–10 years" },
                    { value: "11 tahun & ke atas", bm: "11 tahun & ke atas", en: "11 years & above" }
                ]
            });
            steps.push({
                key: "Subjek_Utama", code: "D5", section: "Seksyen A: Demografi / Demographics",
                subdimension: "Maklumat Latar Belakang Responden (5 daripada 6)",
                type: "text", required: true,
                bm: "Subjek atau Modul Utama yang Diajar", en: "Main Subjects or Modules Taught",
                placeholder: "Contoh: Teknologi Elektronik Industri, Sistem Mikropengawal, Pembuatan PCB..."
            });
            steps.push({
                key: "Kolej_Vokasional", code: "D6", section: "Seksyen A: Demografi / Demographics",
                subdimension: "Maklumat Latar Belakang Responden (6 daripada 6)",
                type: "text", required: true, useKVList: true,
                bm: "Kolej Vokasional", en: "Vocational College",
                placeholder: "Taip atau pilih nama Kolej Vokasional anda..."
            });

            // Helper for Likert groups
            const addLikertGroup = (partLabel, partDomain, subdimLabel, items) => {
                items.forEach(it => {
                    steps.push({
                        key: it.id,
                        code: it.no,
                        domain: partDomain,
                        section: partLabel,
                        subdimension: subdimLabel,
                        type: "likert",
                        required: true,
                        bm: it.bm,
                        en: it.en
                    });
                });
            };

            // --- SEKSYEN B: BAHAGIAN A (ELEMEN PENGETAHUAN - 12 Likert + 1 Open) ---
            addLikertGroup(
                "Seksyen B • Bahagian A: Elemen Pengetahuan / Knowledge",
                "partA",
                "1.0 Pengetahuan Teknologi Hijau Elektronik / Knowledge of Green Electronic Technology",
                [
                    { id: "A1.0", no: "1.0", bm: "Pengetahuan Teknologi Hijau Elektronik", en: "Knowledge of Green Electronic Technology" },
                    { id: "A1.1", no: "1.1", bm: "Pengetahuan tentang teknologi hijau dalam bidang elektronik (seperti sistem solar fotovolta, penyongsang, dan pengurusan bateri).", en: "Knowledge of green technology in the electronics field (such as solar photovoltaic systems, inverters, and battery management)." },
                    { id: "A1.2", no: "1.2", bm: "Pengetahuan tentang pembangunan dan reka bentuk produk teknologi hijau dalam bidang elektronik.", en: "Knowledge of green technology product development and design in electronics." },
                    { id: "A1.3", no: "1.3", bm: "Pengetahuan tentang aplikasi produk teknologi hijau dalam bidang elektronik (seperti ESP32, dan papan litar PCB bebas plumbum).", en: "Knowledge of the application of green technology products in the field of electronics (such as ESP32 and lead-free PCBs)." },
                    { id: "A1.4", no: "1.4", bm: "Pengetahuan tentang penyelenggaraan dan ujian kualiti bagi produk teknologi hijau elektronik.", en: "Knowledge of maintenance and testing for green electronic products." },
                    { id: "A1.5", no: "1.5", bm: "Pengetahuan tentang penggunaan peralatan pengujian dan pengukuran teknologi hijau dalam bidang elektronik.", en: "Knowledge of using green technology testing and measurement equipment in electronics." },
                    { id: "A1.6", no: "1.6", bm: "Pengetahuan tentang sistem dan seni bina teknologi hijau industri yang diguna pakai dalam bidang elektronik.", en: "Knowledge of industry-applied green technology systems and architecture in electronics." }
                ]
            );
            addLikertGroup(
                "Seksyen B • Bahagian A: Elemen Pengetahuan / Knowledge",
                "partA",
                "2.0 Pengetahuan Pengurusan Sisa Elektronik dan Bahan Buangan / E-Waste Management",
                [
                    { id: "A2.0", no: "2.0", bm: "Pengetahuan Pengurusan Sisa Elektronik dan Bahan Buangan", en: "Knowledge of Electronic Waste (E-Waste) and Waste Material Management" },
                    { id: "A2.1", no: "2.1", bm: "Pengetahuan tentang pengurusan dan sifat bahan berbahaya dalam sisa elektronik (seperti pateri plumbum, kadmium, dan elektrolit bateri).", en: "Knowledge of management and characteristics of hazardous materials in e-waste (such as lead solder, cadmium, and battery electrolytes)." },
                    { id: "A2.2", no: "2.2", bm: "Pengetahuan tentang kaedah pelupusan sisa pepejal dan komponen elektronik terpakai secara selamat.", en: "Knowledge of safe disposal methods for solid waste and used electronic components." },
                    { id: "A2.3", no: "2.3", bm: "Pengetahuan tentang aplikasi prinsip 5R (reduce, reuse, recycle, recover & refuse) dalam pengurusan bahan bengkel elektronik.", en: "Knowledge of applying 5R principles (reduce, reuse, recycle, recover & refuse) in managing electronics workshop materials." },
                    { id: "A2.4", no: "2.4", bm: "Pengetahuan tentang pengasingan sisa bahan buangan dan komponen elektronik yang rosak.", en: "Knowledge of segregation of waste materials and defective electronic components." }
                ]
            );
            steps.push({
                key: "Terbuka_A", code: "Soalan Terbuka A", domain: "open",
                section: "Seksyen B • Bahagian A: Elemen Pengetahuan / Knowledge",
                subdimension: "Cadangan Tambahan Elemen Pengetahuan (Pilihan)",
                type: "textarea", required: false,
                bm: "Apakah elemen pengetahuan kemahiran hijau lain yang penting tetapi tidak tersenarai di atas?",
                en: "What other green skills knowledge elements are important but not listed above?",
                placeholder: "Tulis cadangan tambahan anda di sini atau klik 'Seterusnya' untuk melangkau..."
            });

            // --- SEKSYEN B: BAHAGIAN B (ELEMEN KEMAHIRAN - 49 Likert + 1 Open) ---
            addLikertGroup(
                "Seksyen B • Bahagian B: Elemen Kemahiran / Skill Elements",
                "partB",
                "1.0 Kemahiran Pengurusan Sisa Buangan Elektronik / E-Waste Management Skills",
                [
                    { id: "B1.0", no: "1.0", bm: "Kemahiran Pengurusan Sisa Buangan Elektronik", en: "Electronic Waste (E-Waste) Management Skills" },
                    { id: "B1.1", no: "1.1", bm: "Kemahiran mengurangkan pembaziran bahan semasa proses pematerian dan pembuatan papan litar bercetak (PCB).", en: "Skills in reducing material waste during soldering and PCB fabrication/assembly." },
                    { id: "B1.2", no: "1.2", bm: "Kemahiran menggunakan semula komponen elektronik yang masih berfungsi.", en: "Skill in reusing functional electronic components." },
                    { id: "B1.3", no: "1.3", bm: "Kemahiran mengitar semula sisa logam dan komponen elektronik terpakai.", en: "Skills in recycling scrap metal and used electronic components." },
                    { id: "B1.4", no: "1.4", bm: "Kemahiran membaiki dan memulihkan peralatan elektronik yang rosak.", en: "Skills in repairing and restoring damaged electronic equipment." }
                ]
            );
            addLikertGroup(
                "Seksyen B • Bahagian B: Elemen Kemahiran / Skill Elements",
                "partB",
                "2.0 Kemahiran Mereka Bentuk Litar dan Peranti Elektronik Mesra Alam",
                [
                    { id: "B2.0", no: "2.0", bm: "Kemahiran Mereka Bentuk Litar dan Peranti Elektronik Mesra Alam", en: "Eco-Friendly Circuit and Electronic Device Design Skills" },
                    { id: "B2.1", no: "2.1", bm: "Kemahiran mereka bentuk litar elektronik berkecekapan tinggi dan berkuasa rendah (low-power design).", en: "Skills in designing high-efficiency and low-power electronic circuits." },
                    { id: "B2.2", no: "2.2", bm: "Kemahiran mereka bentuk perkakasan elektronik mesra alam berteraskan perlindungan alam sekitar.", en: "Skills in designing eco-friendly electronic hardware focused on environmental protection." },
                    { id: "B2.3", no: "2.3", bm: "Kemahiran mereka bentuk litar yang menekankan prinsip 5R (reduce, reuse, recycle, recover & refuse).", en: "Skills in designing circuits that emphasize the 5R principles (reduce, reuse, recycle, recover, and refuse)." },
                    { id: "B2.4", no: "2.4", bm: "Kemahiran mengaplikasikan prinsip reka bentuk mampan dalam penghasilan produk elektronik.", en: "Skills in applying design for sustainability principles in electronic product development." }
                ]
            );
            addLikertGroup(
                "Seksyen B • Bahagian B: Elemen Kemahiran / Skill Elements",
                "partB",
                "3.0 Kemahiran Perancangan, Pengurusan, dan Perolehan Alatan Komponen Elektronik",
                [
                    { id: "B3.0", no: "3.0", bm: "Kemahiran Perancangan, Pengurusan, dan Perolehan Alatan Komponen Elektronik", en: "Skills in the planning, management, and procurement of electronic equipment and components." },
                    { id: "B3.1", no: "3.1", bm: "Kemahiran merancang projek elektronik berasaskan kelestarian alam sekitar.", en: "Skills in planning environmentally sustainable electronic projects." },
                    { id: "B3.2", no: "3.2", bm: "Kemahiran memilih eko-bahan (seperti pateri bebas plumbum dan bahan PCB mesra alam).", en: "Skills in selecting eco-materials (such as lead-free solder and eco-friendly PCB materials)." },
                    { id: "B3.3", no: "3.3", bm: "Kemahiran pengurusan inventori komponen elektronik mesra alam (seperti penyimpanan berlabel, sistem FiFo dan kabinet pengering pintar).", en: "Skills in eco-friendly electronic component inventory management (such as labeled storage, FiFo systems, and smart dry cabinets)." },
                    { id: "B3.4", no: "3.4", bm: "Kemahiran perolehan mampan bagi peralatan elektronik (seperti kriteria pembungkusan hijau dan rantai bekalan mesra alam).", en: "Skills in sustainable procurement for electronic equipment (such as green packaging criteria and eco-friendly supply chains)." },
                    { id: "B3.5", no: "3.5", bm: "Kemahiran perolehan perkhidmatan penyelenggaraan elektronik mesra alam.", en: "Skills in procuring eco-friendly electronic maintenance services." }
                ]
            );
            addLikertGroup(
                "Seksyen B • Bahagian B: Elemen Kemahiran / Skill Elements",
                "partB",
                "4.0 Kemahiran Penjimatan Tenaga dan Kecekapan Kuasa Elektronik",
                [
                    { id: "B4.0", no: "4.0", bm: "Kemahiran Penjimatan Tenaga dan Kecekapan Kuasa Elektronik", en: "Energy Saving and Electronic Power Efficiency Skills" },
                    { id: "B4.1", no: "4.1", bm: "Kemahiran mengoptimumkan pengurusan tenaga dalam sistem dan peranti elektronik.", en: "Skills in optimizing energy management in electronic systems and devices." },
                    { id: "B4.2", no: "4.2", bm: "Kemahiran mengaplikasikan peranti elektronik dalam sistem tenaga boleh baharu (seperti tenaga solar dan angin).", en: "Skills in applying electronic devices to renewable energy systems (such as solar and wind energy)." },
                    { id: "B4.3", no: "4.3", bm: "Kemahiran menganalisis kecekapan sistem pengurusan tenaga untuk mengurangkan pembaziran elektrik.", en: "Skills in analyzing energy management system efficiency to minimize electrical waste." },
                    { id: "B4.4", no: "4.4", bm: "Kemahiran mengoptimumkan kualiti dan kecekapan kuasa litar.", en: "Skills in optimizing circuit power quality and efficiency." },
                    { id: "B4.5", no: "4.5", bm: "Kemahiran mereka bentuk sistem pengurusan haba litar bagi mengurangkan pelepasan haba.", en: "Skills in designing circuit thermal management systems to reduce heat dissipation." },
                    { id: "B4.6", no: "4.6", bm: "Kemahiran kawalan dan pengurusan kualiti kuasa dalam sistem elektronik.", en: "Skills in power quality control and management in electronic systems." },
                    { id: "B4.7", no: "4.7", bm: "Kemahiran mengintegrasikan sistem penuaian tenaga (seperti penderia piezoelektrik).", en: "Skills in integrating energy harvesting systems (such as piezoelectric sensors)." }
                ]
            );
            addLikertGroup(
                "Seksyen B • Bahagian B: Elemen Kemahiran / Skill Elements",
                "partB",
                "5.0 Kemahiran Komunikasi Berasaskan Teknologi Hijau Dalam Bidang Elektronik",
                [
                    { id: "B5.0", no: "5.0", bm: "Kemahiran Komunikasi Berasaskan Teknologi Hijau Dalam Bidang Elektronik", en: "Green Technology-Based Communication Skills in the Electronics Field" },
                    { id: "B5.1", no: "5.1", bm: "Kemahiran berkomunikasi secara digital tanpa kertas dalam pelaksanaan tugasan amali elektronik.", en: "Skills in paperless digital communication during electronic practical tasks." },
                    { id: "B5.2", no: "5.2", bm: "Kemahiran berkomunikasi menggunakan sistem ICT (Teknologi Maklumat dan Komunikasi) hijau (seperti e-mel).", en: "Skills in communicating using green ICT (Information and Communications Technology) systems (such as email)." },
                    { id: "B5.3", no: "5.3", bm: "Kemahiran berkomunikasi dan mengawal peranti menggunakan sistem IoT (Internet Pelbagai Benda).", en: "Skills in communicating and controlling devices using IoT (Internet of Things) systems." },
                    { id: "B5.4", no: "5.4", bm: "Kemahiran mengaplikasikan platform komunikasi digital hibrid (seperti Google Meet dan Zoom) bagi mengurangkan pelepasan gas rumah hijau.", en: "Skills in applying hybrid digital communication platforms, such as Google Meet and Zoom, to reduce greenhouse gas emissions." },
                    { id: "B5.5", no: "5.5", bm: "Kemahiran mengendalikan pemantauan data litar secara jarak jauh menggunakan aplikasi pengkomputeran awan mesra tenaga.", en: "Skills in remote circuit data monitoring using energy-efficient cloud computing applications." }
                ]
            );
            addLikertGroup(
                "Seksyen B • Bahagian B: Elemen Kemahiran / Skill Elements",
                "partB",
                "6.0 Kemahiran Kerja Berpasukan dalam Amalan Hijau Dalam Bidang Elektronik",
                [
                    { id: "B6.0", no: "6.0", bm: "Kemahiran Kerja Berpasukan dalam Amalan Hijau Dalam Bidang Elektronik", en: "Teamwork Skills for Green Practices in Electronics" },
                    { id: "B6.1", no: "6.1", bm: "Kemahiran kerja berpasukan memastikan setiap ahli menyumbang secara aktif kepada amalan hijau di makmal atau bengkel.", en: "Skills in teamwork to ensure every member actively contributes to green practices in the laboratory or workshop." },
                    { id: "B6.2", no: "6.2", bm: "Kemahiran berkolaborasi dengan pihak luar/industri bagi menyokong aktiviti pencegahan pencemaran alam sekitar.", en: "Skills in collaborating with external parties/industry to support environmental pollution prevention activities." },
                    { id: "B6.3", no: "6.3", bm: "Kemahiran perhubungan pasukan secara segerak (seperti persidangan video atau audio) bagi mencegah pencemaran alam sekitar.", en: "Skills in synchronous team communication (such as video or audio conferencing) to prevent environmental pollution." },
                    { id: "B6.4", no: "6.4", bm: "Kemahiran memahami peranan ahli pasukan berasaskan keperluan teknikal bagi mencegah pencemaran alam sekitar.", en: "Skills in understanding team members' roles based on technical requirements to prevent environmental pollution." },
                    { id: "B6.5", no: "6.5", bm: "Kemahiran mengkoordinasi peranan ahli pasukan bagi meminimumkan pembaziran komponen dan bahan amali.", en: "Skills in coordinating team roles to minimize component and practical material waste." }
                ]
            );
            addLikertGroup(
                "Seksyen B • Bahagian B: Elemen Kemahiran / Skill Elements",
                "partB",
                "7.0 Kemahiran Menyelesaikan Masalah dan Berfikiran Kreatif dalam Elektronik Hijau",
                [
                    { id: "B7.0", no: "7.0", bm: "Kemahiran Menyelesaikan Masalah dan Berfikiran Kreatif dalam Elektronik Hijau", en: "Problem-Solving and Creative Thinking Skills in Green Electronics" },
                    { id: "B7.1", no: "7.1", bm: "Kemahiran menyelesaikan masalah kegagalan litar yang mengambil kira pengurangan impak negatif alam sekitar.", en: "Skills in solving circuit failure problems taking into account environmental impact reduction." },
                    { id: "B7.2", no: "7.2", bm: "Kemahiran berfikir secara kritis dalam mereka bentuk peranti elektronik mesra alam.", en: "Critical thinking skills in designing eco-friendly electronic devices." },
                    { id: "B7.3", no: "7.3", bm: "Kemahiran berfikir secara strategik bagi mengurangkan jejak karbon (carbon footprint) produk elektronik.", en: "Skills in strategic thinking to reduce the carbon footprint of electronic products." },
                    { id: "B7.4", no: "7.4", bm: "Kemahiran berfikir secara terbuka terhadap inovasi teknologi hijau baharu dalam bidang elektronik.", en: "Skills in adopting an open-minded approach toward new green technology innovations in the electronics field." },
                    { id: "B7.5", no: "7.5", bm: "Kemahiran Berfikir Aras Tinggi (KBAT) dalam merancang penyelesaian kelestarian sistem elektronik.", en: "Higher Order Thinking Skills (HOTS) in planning electronic system sustainability solutions." },
                    { id: "B7.6", no: "7.6", bm: "Kemahiran berfikir secara strategik bagi mengurangkan jejak karbon (carbon footprint) produk elektronik.", en: "Skills in strategic thinking to reduce the carbon footprint of electronic products." }
                ]
            );
            addLikertGroup(
                "Seksyen B • Bahagian B: Elemen Kemahiran / Skill Elements",
                "partB",
                "8.0 Kemahiran Perlindungan Biodiversiti dan Ekosistem melalui Aplikasi Elektronik",
                [
                    { id: "B8.0", no: "8.0", bm: "Kemahiran Perlindungan Biodiversiti dan Ekosistem melalui Aplikasi Elektronik", en: "Biodiversity and Ecosystem Protection Skills through Electronic Applications" },
                    { id: "B8.1", no: "8.1", bm: "Kemahiran melindungi alam sekitar melalui penggunaan peralatan dan peranti pengawasan elektronik yang sesuai haruslah diterapkan dalam kurikulum Program Teknologi Elektronik TVET.", en: "Environmental protection skills through the appropriate use of electronic monitoring equipment and devices should be incorporated into the TVET Electronic Technology Program curriculum." },
                    { id: "B8.2", no: "8.2", bm: "Kemahiran pemantauan elektronik bagi memulihara biodiversiti haruslah diterapkan dalam kurikulum Program Teknologi Elektronik TVET.", en: "Electronic monitoring skills to conserve biodiversity should be incorporated into the TVET Electronic Technology Program curriculum." },
                    { id: "B8.3", no: "8.3", bm: "Kemahiran mengaplikasikan penderia (sensors) dan peranti elektronik bagi pemantauan kualiti alam sekitar/ekosistem.", en: "Skills in applying sensors and electronic devices for environmental/ecosystem quality monitoring." },
                    { id: "B8.4", no: "8.4", bm: "Kemahiran mengaplikasikan sistem elektronik hijau (seperti solar) bagi memulihara landskap alam sekitar.", en: "Skills in applying green electronic systems (such as solar) to conserve environmental landscapes." },
                    { id: "B8.5", no: "8.5", bm: "Kemahiran menyelenggara sistem dan peranti pemantauan elektronik hijau.", en: "Skills in maintaining green electronic monitoring systems and devices." }
                ]
            );
            steps.push({
                key: "Terbuka_B", code: "Soalan Terbuka B", domain: "open",
                section: "Seksyen B • Bahagian B: Elemen Kemahiran / Skill Elements",
                subdimension: "Cadangan Tambahan Elemen Kemahiran Praktikal (Pilihan)",
                type: "textarea", required: false,
                bm: "Apakah elemen kemahiran praktikal hijau lain yang penting tetapi tidak tersenarai di atas?",
                en: "What other practical green skill elements are important but not listed above?",
                placeholder: "Tulis cadangan tambahan anda di sini atau klik 'Seterusnya' untuk melangkau..."
            });

            // --- SEKSYEN B: BAHAGIAN C (ELEMEN SIKAP DAN NILAI - 12 Likert + 1 Open) ---
            addLikertGroup(
                "Seksyen B • Bahagian C: Elemen Sikap dan Nilai / Attitude & Values",
                "partC",
                "1.0 Kesedaran Alam Sekitar dalam Bidang Elektronik / Environmental Awareness",
                [
                    { id: "C1.0", no: "1.0", bm: "Kesedaran Alam Sekitar dalam Bidang Elektronik", en: "Environmental Awareness in the Field of Electronics" },
                    { id: "C1.1", no: "1.1", bm: "Kesedaran terhadap kepentingan melindungi alam sekitar di tempat kerja atau bengkel elektronik.", en: "Awareness of the importance of environmental protection in the workplace or electronics workshop." },
                    { id: "C1.2", no: "1.2", bm: "Kesedaran terhadap dasar, perundangan, dan standard piawaian hijau industri elektronik.", en: "Awareness of green policies, regulations, and industry standards in electronics." },
                    { id: "C1.3", no: "1.3", bm: "Kesedaran terhadap impak pengurangan sisa buangan elektronik (e-waste) kepada alam sekitar.", en: "Awareness of the impact of electronic waste (e-waste) reduction on the environment." },
                    { id: "C1.4", no: "1.4", bm: "Kesedaran terhadap amalan hijau dalam proses pembuatan dan perkhidmatan elektronik.", en: "Awareness of green practices in electronic manufacturing and service processes." },
                    { id: "C1.5", no: "1.5", bm: "Kesedaran terhadap penggunaan sumber tenaga boleh baharu dalam pengoperasian sistem elektronik.", en: "Awareness of using renewable energy sources in electronic system operations." }
                ]
            );
            addLikertGroup(
                "Seksyen B • Bahagian C: Elemen Sikap dan Nilai / Attitude & Values",
                "partC",
                "2.0 Nilai Positif & Budaya Hijau Industri Elektronik / Positive Values & Green Culture",
                [
                    { id: "C2.0", no: "2.0", bm: "Nilai Positif & Budaya Hijau Industri Elektronik", en: "Positive Values and Green Culture in the Electronics Industry" },
                    { id: "C2.1", no: "2.1", bm: "Nilai amalan penjimatan tenaga elektrik (seperti mematikan peralatan dan suis utama apabila tidak digunakan).", en: "Values of electrical energy conservation practices (such as switching off equipment and main switches when not in use)." },
                    { id: "C2.2", no: "2.2", bm: "Nilai amalan 5R (reduce, reuse, recycle, recover & refuse) terhadap perkakasan elektronik.", en: "Values of the 5R practices (reduce, reuse, recycle, recover, and refuse) regarding electronic hardware." },
                    { id: "C2.3", no: "2.3", bm: "Nilai komitmen terhadap pengurusan selamat sisa toksik (seperti asid punaran) dan komponen berbahaya (seperti bateri litium atau kapasitor elektrolit).", en: "Values of commitment to safe management of toxic waste (such as etching acid) and hazardous components (such as lithium batteries or electrolytic capacitors)." },
                    { id: "C2.4", no: "2.4", bm: "Nilai keutamaan terhadap pemuliharaan sumber melalui kecekapan reka bentuk litar.", en: "Values of prioritizing resource conservation through circuit design efficiency." },
                    { id: "C2.5", no: "2.5", bm: "Nilai pembudayaan amalan dan etika hijau dalam kerjaya bidang elektronik.", en: "Values of cultivating green practices and ethics in electronic careers." }
                ]
            );
            steps.push({
                key: "Terbuka_C", code: "Soalan Terbuka C", domain: "open",
                section: "Seksyen B • Bahagian C: Elemen Sikap dan Nilai / Attitude & Values",
                subdimension: "Cadangan Tambahan Elemen Sikap dan Nilai (Pilihan)",
                type: "textarea", required: false,
                bm: "Apakah elemen sikap dan nilai hijau lain yang penting tetapi tidak tersenarai di atas?",
                en: "What other green attitudes and values elements are important but not listed above?",
                placeholder: "Tulis cadangan tambahan anda di sini atau klik 'Semak & Hantar'..."
            });

            return steps;
        }

        const ALL_STEPS = buildAllSteps(); // Total: 6 + 13 + 50 + 13 = 82 steps
        const REQUIRED_STEPS = ALL_STEPS.filter(s => s.required); // 79 required items

        // Application State
        let currentIndex = 0; // 0 to 81
        let activeView = "intro"; // "intro" | "question" | "review" | "thankyou"
        let responsesData = {}; // Keyed by step.key
        let autoAdvanceTimer = null;

        const STORAGE_DRAFT_KEY = "uthm_green_wizard_draft_v2";
        const STORAGE_RESPONSES_KEY = "uthm_green_skills_responses_v1";
        const STORAGE_GSHEET_URL_KEY = "uthm_green_skills_gsheet_url_v1";

        // Initialize on DOM load
        document.addEventListener("DOMContentLoaded", () => {
            loadSavedDraft();
            setupKeyboardShortcuts();
            lucide.createIcons();
        });

        // ============================================================================
        // VIEW & STEP NAVIGATION CONTROLS
        // ============================================================================
        function switchView(viewName) {
            activeView = viewName;
            ["intro", "question", "review", "thankyou"].forEach(v => {
                document.getElementById(`view-${v}`).classList.toggle("hidden", v !== viewName);
            });
            document.getElementById("wizard-topbar").classList.toggle("hidden", viewName !== "question" && viewName !== "review");
            updateTopProgress();
            lucide.createIcons();
        }

        function goToIntro() {
            clearTimeout(autoAdvanceTimer);
            checkDraftBanner();
            switchView("intro");
        }

        function startSurveyWizard() {
            currentIndex = 0;
            renderCurrentQuestion();
            switchView("question");
        }

        function resumeSavedDraft() {
            // Find first unanswered required step, or last viewed step
            const firstUnansweredIdx = ALL_STEPS.findIndex(s => s.required && !isStepAnswered(s));
            currentIndex = firstUnansweredIdx !== -1 ? firstUnansweredIdx : 0;
            renderCurrentQuestion();
            switchView("question");
        }

        function clearDraftAndRestart() {
            responsesData = {};
            localStorage.removeItem(STORAGE_DRAFT_KEY);
            document.getElementById("resume-draft-banner").classList.add("hidden");
            startSurveyWizard();
        }

        function jumpToStep(idx) {
            clearTimeout(autoAdvanceTimer);
            if (idx < 0) idx = 0;
            if (idx >= ALL_STEPS.length) {
                showReviewScreen();
                return;
            }
            currentIndex = idx;
            renderCurrentQuestion();
            switchView("question");
        }

        function prevQuestion() {
            clearTimeout(autoAdvanceTimer);
            if (currentIndex === 0) {
                goToIntro();
            } else {
                currentIndex--;
                renderCurrentQuestion();
            }
        }

        function nextQuestion() {
            clearTimeout(autoAdvanceTimer);
            const step = ALL_STEPS[currentIndex];

            // Capture text/textarea input before validating
            if (step.type === "text" || step.type === "textarea") {
                const inputEl = document.getElementById("active-text-input");
                if (inputEl) {
                    responsesData[step.key] = inputEl.value.trim();
                    saveDraft();
                }
            }

            if (step.required && !isStepAnswered(step)) {
                showToast("Sila pilih atau isi jawapan sebelum meneruskan ke soalan seterusnya.", "error");
                const inputEl = document.getElementById("active-text-input");
                if (inputEl) inputEl.focus();
                return;
            }

            if (currentIndex < ALL_STEPS.length - 1) {
                currentIndex++;
                renderCurrentQuestion();
            } else {
                showReviewScreen();
            }
        }

        function isStepAnswered(step) {
            const val = responsesData[step.key];
            return val !== undefined && val !== null && String(val).trim() !== "";
        }

        // ============================================================================
        // RENDER SINGLE FOCUSED QUESTION CARD
        // ============================================================================
        function renderCurrentQuestion() {
            const step = ALL_STEPS[currentIndex];
            const wrapper = document.getElementById("question-card-wrapper");

            // Re-trigger subtle entrance animation
            wrapper.classList.remove("animate-card");
            void wrapper.offsetWidth;
            wrapper.classList.add("animate-card");

            // Header Badges & Titles
            document.getElementById("q-section-badge").textContent = step.section;
            document.getElementById("q-item-code-badge").textContent = `Langkah ${currentIndex + 1} / ${ALL_STEPS.length}`;
            document.getElementById("q-subdimension-title").textContent = step.subdimension;
            document.getElementById("q-number-pill").textContent = step.code;
            document.getElementById("q-text-bm").textContent = step.bm;
            document.getElementById("q-text-en").textContent = step.en;

            // Required tag & button text
            document.getElementById("q-required-tag").textContent = step.required ? "Wajib dijawab" : "Pilihan (Boleh dilangkau)";
            document.getElementById("btn-next-label").textContent = (currentIndex === ALL_STEPS.length - 1)
                ? "Semak & Hantar / Review"
                : "Seterusnya / Next";

            const answerArea = document.getElementById("q-answer-area");
            const hintText = document.getElementById("q-hint-text");
            const savedVal = responsesData[step.key];

            if (step.type === "radio") {
                hintText.innerHTML = `<i data-lucide="mouse-pointer-click" class="w-3.5 h-3.5 text-uthm-purple"></i><span>Klik pilihan jawapan untuk terus ke soalan berikutnya secara automatik.</span>`;
                answerArea.innerHTML = `
                    <div class="grid gap-3">
                        ${step.options.map((opt, i) => {
                            const isSelected = savedVal === opt.value;
                            const letter = String.fromCharCode(65 + i);
                            return `
                                <button type="button" onclick="selectRadioOption('${opt.value.replace(/'/g, "\\'")}')"
                                    class="option-card w-full text-left p-4 rounded-2xl border-2 flex items-center justify-between gap-3 cursor-pointer ${
                                        isSelected
                                            ? 'border-greenleaf-600 bg-greenleaf-50/90 text-greenleaf-950 shadow-sm'
                                            : 'border-slate-200 bg-white hover:border-uthm-purple/50 hover:bg-slate-50 text-slate-800'
                                    }">
                                    <div class="flex items-center gap-3.5">
                                        <span class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold shrink-0 ${
                                            isSelected ? 'bg-greenleaf-600 text-white' : 'bg-slate-100 text-slate-600'
                                        }">${letter}</span>
                                        <div>
                                            <div class="font-bold text-sm sm:text-base bm-text">${opt.bm}</div>
                                            <div class="text-xs text-slate-500 en-text">${opt.en}</div>
                                        </div>
                                    </div>
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                                        isSelected ? 'bg-greenleaf-600 text-white' : 'border border-slate-300'
                                    }">
                                        ${isSelected ? '<i data-lucide="check" class="w-3.5 h-3.5"></i>' : ''}
                                    </div>
                                </button>
                            `;
                        }).join('')}
                    </div>
                `;
            } else if (step.type === "text") {
                hintText.innerHTML = `<i data-lucide="corner-down-left" class="w-3.5 h-3.5 text-uthm-purple"></i><span>Taip jawapan anda dan tekan <strong>Enter</strong> untuk meneruskan.</span>`;
                const datalistHtml = step.useKVList
                    ? `<datalist id="kv-datalist">${KV_SUGGESTIONS.map(kv => `<option value="${kv}">`).join('')}</datalist>`
                    : "";
                answerArea.innerHTML = `
                    <div class="space-y-2">
                        <input type="text" id="active-text-input"
                            ${step.useKVList ? 'list="kv-datalist"' : ''}
                            value="${savedVal ? String(savedVal).replace(/"/g, '&quot;') : ''}"
                            oninput="handleTextInput(this.value)"
                            placeholder="${step.placeholder || ''}"
                            class="w-full px-4 py-4 rounded-2xl border-2 border-slate-300 focus:border-uthm-purple focus:ring-4 focus:ring-uthm-purple/10 outline-none text-sm sm:text-base font-medium text-slate-900 transition">
                        ${datalistHtml}
                    </div>
                `;
                setTimeout(() => document.getElementById("active-text-input")?.focus(), 60);
            } else if (step.type === "likert") {
                hintText.innerHTML = `<i data-lucide="keyboard" class="w-3.5 h-3.5 text-greenleaf-600"></i><span>Tip: Tekan kekunci <strong>1, 2, 3, 4, atau 5</strong> pada papan kekunci untuk memilih & terus maju.</span>`;
                answerArea.innerHTML = `
                    <div class="space-y-3">
                        <!-- Visual Scale Anchor Labels -->
                        <div class="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                            <span>1 = Sangat Tidak Penting</span>
                            <span>5 = Sangat Penting</span>
                        </div>
                        <!-- 5 Large Touch-Friendly Likert Option Cards -->
                        <div class="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                            ${LIKERT_OPTIONS.map(opt => {
                                const isSelected = Number(savedVal) === opt.val;
                                return `
                                    <button type="button" onclick="selectLikertOption(${opt.val})"
                                        class="option-card p-3.5 sm:py-5 sm:px-2.5 rounded-2xl border-2 flex sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center gap-2 cursor-pointer ${
                                            isSelected
                                                ? 'border-greenleaf-600 bg-greenleaf-600 text-white shadow-lg shadow-greenleaf-600/25 scale-[1.02]'
                                                : 'border-slate-200 bg-white hover:border-uthm-purple/60 hover:bg-uthm-purple/5 text-slate-800'
                                        }">
                                        <div class="flex sm:flex-col items-center gap-3 sm:gap-1.5">
                                            <span class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-base sm:text-xl font-extrabold ${
                                                isSelected ? 'bg-white text-greenleaf-700' : 'bg-slate-100 text-uthm-purple'
                                            }">${opt.val}</span>
                                            <div>
                                                <div class="text-xs font-extrabold tracking-wide uppercase ${isSelected ? 'text-greenleaf-100' : 'text-slate-400'}">${opt.code}</div>
                                                <div class="text-xs sm:text-[13px] font-bold leading-tight mt-0.5 bm-text">${opt.bm}</div>
                                                <div class="text-[11px] leading-tight mt-0.5 en-text ${isSelected ? 'text-greenleaf-100' : 'text-slate-500'}">${opt.en}</div>
                                            </div>
                                        </div>
                                        <span class="sm:hidden ${isSelected ? 'text-white' : 'text-slate-300'}">
                                            <i data-lucide="${isSelected ? 'check-circle-2' : 'circle'}" class="w-5 h-5"></i>
                                        </span>
                                    </button>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            } else if (step.type === "textarea") {
                hintText.innerHTML = `<i data-lucide="info" class="w-3.5 h-3.5 text-slate-400"></i><span>Soalan terbuka ini adalah pilihan. Anda boleh mengosongkannya jika tiada cadangan tambahan.</span>`;
                answerArea.innerHTML = `
                    <textarea id="active-text-input" rows="4"
                        oninput="handleTextInput(this.value)"
                        placeholder="${step.placeholder || ''}"
                        class="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-300 focus:border-uthm-purple focus:ring-4 focus:ring-uthm-purple/10 outline-none text-sm sm:text-base text-slate-900 transition">${savedVal ? String(savedVal) : ''}</textarea>
                `;
                setTimeout(() => document.getElementById("active-text-input")?.focus(), 60);
            }

            updateTopProgress();
            lucide.createIcons();
        }

        // Answer Handlers with Smooth Auto-Advance
        function selectRadioOption(value) {
            const step = ALL_STEPS[currentIndex];
            responsesData[step.key] = value;
            saveDraft();
            renderCurrentQuestion();

            clearTimeout(autoAdvanceTimer);
            autoAdvanceTimer = setTimeout(() => {
                if (currentIndex < ALL_STEPS.length - 1) {
                    currentIndex++;
                    renderCurrentQuestion();
                } else {
                    showReviewScreen();
                }
            }, 300);
        }

        function selectLikertOption(val) {
            const step = ALL_STEPS[currentIndex];
            responsesData[step.key] = val;
            saveDraft();
            renderCurrentQuestion();

            clearTimeout(autoAdvanceTimer);
            autoAdvanceTimer = setTimeout(() => {
                if (currentIndex < ALL_STEPS.length - 1) {
                    currentIndex++;
                    renderCurrentQuestion();
                } else {
                    showReviewScreen();
                }
            }, 300);
        }

        function handleTextInput(val) {
            const step = ALL_STEPS[currentIndex];
            responsesData[step.key] = val;
            saveDraft();
            updateTopProgress();
        }

        // Keyboard Shortcuts (1-5 for Likert, Enter for Next)
        function setupKeyboardShortcuts() {
            document.addEventListener("keydown", (e) => {
                if (activeView !== "question") return;
                if (!document.getElementById("navigator-modal").classList.contains("hidden")) return;
                if (!document.getElementById("admin-modal").classList.contains("hidden")) return;

                const step = ALL_STEPS[currentIndex];
                if (step.type === "likert" && ["1", "2", "3", "4", "5"].includes(e.key)) {
                    e.preventDefault();
                    selectLikertOption(Number(e.key));
                } else if (e.key === "Enter" && step.type === "text") {
                    e.preventDefault();
                    nextQuestion();
                }
            });
        }

        // Update Top Progress Bar & Counters
        function updateTopProgress() {
            const answeredRequiredCount = REQUIRED_STEPS.filter(s => isStepAnswered(s)).length;
            const totalRequired = REQUIRED_STEPS.length; // 79
            const pct = Math.round((answeredRequiredCount / totalRequired) * 100);

            document.getElementById("wizard-progress-bar").style.width = `${pct}%`;
            document.getElementById("topbar-pct-badge").textContent = `${pct}%`;
            document.getElementById("nav-answered-pill").textContent = `${answeredRequiredCount}/${totalRequired}`;

            if (activeView === "review") {
                document.getElementById("topbar-step-label").textContent = "Semakan Akhir";
            } else {
                document.getElementById("topbar-step-label").textContent = `Soalan ${currentIndex + 1} daripada ${ALL_STEPS.length}`;
            }
        }

        // ============================================================================
        // QUESTION NAVIGATOR MODAL (LOMPAT SOALAN)
        // ============================================================================
        function toggleNavigatorModal(open) {
            const modal = document.getElementById("navigator-modal");
            if (!open) {
                modal.classList.add("hidden");
                return;
            }
            renderNavigatorGrid();
            modal.classList.remove("hidden");
            lucide.createIcons();
        }

        function renderNavigatorGrid() {
            const groups = [
                { title: "Seksyen A: Demografi (6 Item)", filter: s => s.code.startsWith("D") },
                { title: "Seksyen B • Bahagian A: Elemen Pengetahuan (12 Item + 1 Terbuka)", filter: s => s.domain === "partA" || s.key === "Terbuka_A" },
                { title: "Seksyen B • Bahagian B: Elemen Kemahiran (49 Item + 1 Terbuka)", filter: s => s.domain === "partB" || s.key === "Terbuka_B" },
                { title: "Seksyen B • Bahagian C: Elemen Sikap & Nilai (12 Item + 1 Terbuka)", filter: s => s.domain === "partC" || s.key === "Terbuka_C" }
            ];

            const container = document.getElementById("navigator-grid-container");
            container.innerHTML = groups.map(g => {
                const itemsWithIdx = ALL_STEPS.map((s, idx) => ({ s, idx })).filter(obj => g.filter(obj.s));
                return `
                    <div class="space-y-2">
                        <h4 class="text-xs font-bold text-slate-700">${g.title}</h4>
                        <div class="flex flex-wrap gap-1.5">
                            ${itemsWithIdx.map(({ s, idx }) => {
                                const answered = isStepAnswered(s);
                                const isCurrent = activeView === "question" && idx === currentIndex;
                                let btnClass = "bg-white border border-slate-300 text-slate-700 hover:border-uthm-purple";
                                if (isCurrent) {
                                    btnClass = "bg-uthm-purple text-white border-uthm-purple ring-2 ring-uthm-purple/30";
                                } else if (answered) {
                                    btnClass = "bg-greenleaf-600 text-white border-greenleaf-600";
                                }
                                return `
                                    <button type="button" onclick="toggleNavigatorModal(false); jumpToStep(${idx});"
                                        title="${s.code}: ${s.bm}"
                                        class="px-2.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${btnClass}">
                                        ${s.code}
                                    </button>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            }).join('');
        }

        // ============================================================================
        // FINAL REVIEW & SUBMISSION WORKFLOW
        // ============================================================================
        function showReviewScreen() {
            const sections = [
                { title: "Seksyen A: Demografi", items: ALL_STEPS.filter(s => s.code.startsWith("D")) },
                { title: "Bahagian A: Pengetahuan", items: ALL_STEPS.filter(s => s.domain === "partA") },
                { title: "Bahagian B: Kemahiran", items: ALL_STEPS.filter(s => s.domain === "partB") },
                { title: "Bahagian C: Sikap & Nilai", items: ALL_STEPS.filter(s => s.domain === "partC") }
            ];

            document.getElementById("review-summary-grid").innerHTML = sections.map(sec => {
                const done = sec.items.filter(s => isStepAnswered(s)).length;
                const total = sec.items.length;
                const complete = done === total;
                return `
                    <div class="p-4 rounded-2xl border ${complete ? 'border-greenleaf-200 bg-greenleaf-50/50' : 'border-amber-200 bg-amber-50/50'} flex items-center justify-between">
                        <div>
                            <p class="text-xs font-bold text-slate-800">${sec.title}</p>
                            <p class="text-xs text-slate-500 mt-0.5">${done} daripada ${total} item selesai</p>
                        </div>
                        <span class="px-2.5 py-1 rounded-full text-xs font-bold ${complete ? 'bg-greenleaf-600 text-white' : 'bg-amber-500 text-white'}">
                            ${complete ? 'Lengkap' : `${total - done} Baki`}
                        </span>
                    </div>
                `;
            }).join('');

            const missing = REQUIRED_STEPS.filter(s => !isStepAnswered(s));
            const alertBox = document.getElementById("review-missing-alert");
            if (missing.length > 0) {
                alertBox.classList.remove("hidden");
                document.getElementById("review-missing-text").textContent =
                    `Terdapat ${missing.length} soalan wajib yang belum dijawab (bermula dengan ${missing[0].code}).`;
            } else {
                alertBox.classList.add("hidden");
            }

            document.getElementById("review-demo-details").innerHTML = `
                <div><strong>Jantina:</strong> ${responsesData["Jantina"] || "-"}</div>
                <div><strong>Umur:</strong> ${responsesData["Umur"] || "-"}</div>
                <div><strong>Pendidikan:</strong> ${responsesData["Pendidikan"] || "-"}</div>
                <div><strong>Pengalaman:</strong> ${responsesData["Pengalaman_Mengajar"] || "-"}</div>
                <div class="sm:col-span-2"><strong>Subjek Utama:</strong> ${responsesData["Subjek_Utama"] || "-"}</div>
                <div class="sm:col-span-2"><strong>Kolej Vokasional:</strong> ${responsesData["Kolej_Vokasional"] || "-"}</div>
            `;

            switchView("review");
        }

        function jumpToFirstMissing() {
            const missingIdx = ALL_STEPS.findIndex(s => s.required && !isStepAnswered(s));
            if (missingIdx !== -1) {
                jumpToStep(missingIdx);
            } else {
                showReviewScreen();
            }
        }

        function buildSubmissionPayload() {
            const record = {
                Timestamp: new Date().toLocaleString("sv-SE", { timeZone: "Asia/Kuala_Lumpur" }),
                Jantina: responsesData["Jantina"] || "",
                Umur: responsesData["Umur"] || "",
                Pendidikan: responsesData["Pendidikan"] || "",
                Pengalaman_Mengajar: responsesData["Pengalaman_Mengajar"] || "",
                Subjek_Utama: responsesData["Subjek_Utama"] || "",
                Kolej_Vokasional: responsesData["Kolej_Vokasional"] || ""
            };

            ALL_STEPS.filter(s => s.type === "likert").forEach(s => {
                record[s.key] = responsesData[s.key] || "";
            });

            record["Terbuka_A"] = responsesData["Terbuka_A"] || "";
            record["Terbuka_B"] = responsesData["Terbuka_B"] || "";
            record["Terbuka_C"] = responsesData["Terbuka_C"] || "";

            return record;
        }

        async function submitSurvey() {
            const missingIdx = ALL_STEPS.findIndex(s => s.required && !isStepAnswered(s));
            if (missingIdx !== -1) {
                showToast(`Sila lengkapkan item ${ALL_STEPS[missingIdx].code} terlebih dahulu.`, "error");
                jumpToStep(missingIdx);
                return;
            }

            const btn = document.getElementById("btn-submit-survey");
            btn.disabled = true;
            btn.innerHTML = `<span class="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span> <span>Menghantar Jawapan...</span>`;

            const payload = buildSubmissionPayload();

            // Save to local repository
            const existing = JSON.parse(localStorage.getItem(STORAGE_RESPONSES_KEY) || "[]");
            existing.push(payload);
            localStorage.setItem(STORAGE_RESPONSES_KEY, JSON.stringify(existing));
            window.lastSubmittedRecord = payload;

            // Sync to Google Sheets Web App if configured
            const gsheetUrl = localStorage.getItem(STORAGE_GSHEET_URL_KEY) || "";
            const syncBox = document.getElementById("submit-sync-status");

            if (gsheetUrl) {
                try {
                    await fetch(gsheetUrl, {
                        method: "POST",
                        mode: "no-cors",
                        headers: { "Content-Type": "text/plain;charset=utf-8" },
                        body: JSON.stringify(payload)
                    });
                    syncBox.innerHTML = `<span class="text-greenleaf-700 font-bold flex items-center justify-center gap-1.5"><i data-lucide="cloud-check" class="w-4 h-4"></i> Berjaya disegerakkan terus ke Google Sheets & storan tempatan!</span>`;
                } catch (err) {
                    syncBox.innerHTML = `<span class="text-amber-700 font-semibold">Rekod disimpan secara tempatan. Anda boleh memuat turun salinan CSV di bawah.</span>`;
                }
            } else {
                syncBox.innerHTML = `<span class="text-slate-700 font-medium">Rekod berjaya disimpan dalam portal (Jumlah Rekod Terkumpul: <strong>${existing.length}</strong>). Penyelidik boleh mengeksport data CSV ke Google Sheets melalui <strong>Panel Penyelidik</strong>.</span>`;
            }

            localStorage.removeItem(STORAGE_DRAFT_KEY);
            btn.disabled = false;
            btn.innerHTML = `<i data-lucide="send" class="w-4 h-4"></i> <span>Hantar Jawapan / Submit Response</span>`;
            switchView("thankyou");
            showToast("Terima kasih! Jawapan anda telah berjaya direkodkan.", "success");
        }

        function resetForNewRespondent() {
            responsesData = {};
            currentIndex = 0;
            goToIntro();
        }

        // ============================================================================
        // DRAFT PERSISTENCE & LANGUAGE SWITCHER
        // ============================================================================
        function saveDraft() {
            localStorage.setItem(STORAGE_DRAFT_KEY, JSON.stringify({
                currentIndex,
                responsesData
            }));
        }

        function loadSavedDraft() {
            try {
                const raw = localStorage.getItem(STORAGE_DRAFT_KEY);
                if (!raw) return;
                const parsed = JSON.parse(raw);
                if (parsed && parsed.responsesData) {
                    responsesData = parsed.responsesData;
                    currentIndex = parsed.currentIndex || 0;
                    checkDraftBanner();
                }
            } catch (e) {
                console.error("Draft parse error:", e);
            }
        }

        function checkDraftBanner() {
            const count = REQUIRED_STEPS.filter(s => isStepAnswered(s)).length;
            const banner = document.getElementById("resume-draft-banner");
            if (count > 0) {
                banner.classList.remove("hidden");
                document.getElementById("resume-count-text").textContent = `${count}/${REQUIRED_STEPS.length}`;
            } else {
                banner.classList.add("hidden");
            }
        }

        function setLanguage(mode) {
            document.body.classList.remove('lang-bm', 'lang-en');
            if (mode === 'bm') document.body.classList.add('lang-bm');
            if (mode === 'en') document.body.classList.add('lang-en');

            ['both', 'bm', 'en'].forEach(m => {
                const btn = document.getElementById(`btn-lang-${m}`);
                if (!btn) return;
                btn.className = m === mode
                    ? "px-2 py-0.5 rounded-md text-[11px] font-semibold bg-white text-uthm-purple shadow-xs transition cursor-pointer"
                    : "px-2 py-0.5 rounded-md text-[11px] font-medium text-white/85 hover:text-white transition cursor-pointer";
            });
        }

        // ============================================================================
        // RESEARCHER ANALYTICS, SAMPLE GENERATOR, CSV & GOOGLE SHEETS
        // ============================================================================
        function openAdminModal() {
            document.getElementById("admin-modal").classList.remove("hidden");
            document.getElementById("gsheet-webapp-url").value = localStorage.getItem(STORAGE_GSHEET_URL_KEY) || "";
            renderAdminAnalytics();
            lucide.createIcons();
        }

        function closeAdminModal() {
            document.getElementById("admin-modal").classList.add("hidden");
        }

        function switchAdminTab(tab) {
            const isData = tab === 'data';
            document.getElementById("admin-view-data").classList.toggle("hidden", !isData);
            document.getElementById("admin-view-gsheet").classList.toggle("hidden", isData);

            document.getElementById("admintab-data").className = isData
                ? "px-4 py-2 rounded-t-xl text-xs sm:text-sm font-bold bg-white text-uthm-purple border-t border-x border-slate-200 cursor-pointer"
                : "px-4 py-2 rounded-t-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer";

            document.getElementById("admintab-gsheet").className = !isData
                ? "px-4 py-2 rounded-t-xl text-xs sm:text-sm font-bold bg-white text-uthm-purple border-t border-x border-slate-200 cursor-pointer"
                : "px-4 py-2 rounded-t-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer";
        }

        function generateSampleResponse() {
            const sample = {
                Timestamp: new Date().toLocaleString("sv-SE", { timeZone: "Asia/Kuala_Lumpur" }),
                Jantina: Math.random() > 0.45 ? "Lelaki / Male" : "Perempuan / Female",
                Umur: ["23-32 tahun", "33-42 tahun", "43-52 tahun"][Math.floor(Math.random() * 3)],
                Pendidikan: Math.random() > 0.35 ? "Sarjana Muda / Bachelor's" : "Sarjana / Master's",
                Pengalaman_Mengajar: ["0-5 tahun", "6-10 tahun", "11 tahun & ke atas"][Math.floor(Math.random() * 3)],
                Subjek_Utama: "Teknologi Elektronik Industri & Sistem Terbenam",
                Kolej_Vokasional: KV_SUGGESTIONS[Math.floor(Math.random() * KV_SUGGESTIONS.length)]
            };
            ALL_STEPS.filter(s => s.type === "likert").forEach(s => {
                sample[s.key] = Math.random() > 0.3 ? 5 : 4;
            });
            sample["Terbuka_A"] = "Piawaian keselamatan bateri litium dan RoHS.";
            sample["Terbuka_B"] = "Pengujian kecekapan sistem solar PV.";
            sample["Terbuka_C"] = "Budaya kerja hijau di bengkel elektronik.";

            const existing = JSON.parse(localStorage.getItem(STORAGE_RESPONSES_KEY) || "[]");
            existing.push(sample);
            localStorage.setItem(STORAGE_RESPONSES_KEY, JSON.stringify(existing));
            renderAdminAnalytics();
            showToast(`1 sampel ujian ditambah (Jumlah: ${existing.length} responden).`, "success");
        }

        function renderAdminAnalytics() {
            const records = JSON.parse(localStorage.getItem(STORAGE_RESPONSES_KEY) || "[]");
            document.getElementById("total-resp-count").textContent = records.length;

            const calcStats = (vals) => {
                if (!vals.length) return { n: 0, mean: 0, sd: 0 };
                const n = vals.length;
                const mean = vals.reduce((a, b) => a + b, 0) / n;
                const variance = n > 1 ? vals.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / (n - 1) : 0;
                return { n, mean, sd: Math.sqrt(variance) };
            };

            const interpretMean = (m) => {
                if (m === 0) return { label: "Tiada Data", cls: "bg-slate-100 text-slate-500" };
                if (m >= 4.21) return { label: "Sangat Penting", cls: "bg-greenleaf-100 text-greenleaf-800" };
                if (m >= 3.41) return { label: "Penting", cls: "bg-emerald-50 text-emerald-700" };
                if (m >= 2.61) return { label: "Hampir Penting", cls: "bg-amber-50 text-amber-700" };
                return { label: "Kurang Penting", cls: "bg-rose-50 text-rose-700" };
            };

            const likertSteps = ALL_STEPS.filter(s => s.type === "likert");
            const domains = [
                { key: "partA", title: "Bhg A: Pengetahuan", items: likertSteps.filter(i => i.domain === "partA") },
                { key: "partB", title: "Bhg B: Kemahiran", items: likertSteps.filter(i => i.domain === "partB") },
                { key: "partC", title: "Bhg C: Sikap & Nilai", items: likertSteps.filter(i => i.domain === "partC") },
                { key: "all", title: "Keseluruhan (73 Item)", items: likertSteps }
            ];

            document.getElementById("construct-stats-cards").innerHTML = domains.map(d => {
                const vals = [];
                records.forEach(r => d.items.forEach(it => {
                    const v = Number(r[it.key]);
                    if (v >= 1 && v <= 5) vals.push(v);
                }));
                const st = calcStats(vals);
                const interp = interpretMean(st.mean);
                return `
                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                        <p class="text-xs font-bold text-slate-500">${d.title}</p>
                        <div class="flex items-baseline justify-between mt-1.5">
                            <span class="text-2xl font-extrabold text-uthm-purple">${st.mean.toFixed(2)}</span>
                            <span class="text-xs text-slate-500">SD: ${st.sd.toFixed(2)}</span>
                        </div>
                        <span class="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold ${interp.cls}">${interp.label}</span>
                    </div>
                `;
            }).join('');

            document.getElementById("analysis-table-body").innerHTML = likertSteps.map(item => {
                const vals = records.map(r => Number(r[item.key])).filter(v => v >= 1 && v <= 5);
                const st = calcStats(vals);
                const interp = interpretMean(st.mean);
                const partLabel = item.domain === 'partA' ? 'Bhg A' : (item.domain === 'partB' ? 'Bhg B' : 'Bhg C');
                return `
                    <tr class="hover:bg-slate-50">
                        <td class="py-2 px-3 font-bold text-uthm-purple whitespace-nowrap">${item.key}</td>
                        <td class="py-2 px-3 text-slate-500 whitespace-nowrap">${partLabel}</td>
                        <td class="py-2 px-3 text-slate-800">${item.bm}</td>
                        <td class="py-2 px-3 text-center font-medium">${st.n}</td>
                        <td class="py-2 px-3 text-center font-bold text-slate-900">${st.mean.toFixed(2)}</td>
                        <td class="py-2 px-3 text-center text-slate-600">${st.sd.toFixed(2)}</td>
                        <td class="py-2 px-3 whitespace-nowrap"><span class="px-2 py-0.5 rounded text-[10px] font-bold ${interp.cls}">${interp.label}</span></td>
                    </tr>
                `;
            }).join('');
        }

        function convertRecordsToCSV(records) {
            if (!records || !records.length) return "";
            const headers = Object.keys(records[0]);
            const escapeCSV = (val) => {
                const str = String(val ?? "");
                return (str.includes(",") || str.includes('"') || str.includes("\n"))
                    ? `"${str.replace(/"/g, '""')}"`
                    : str;
            };
            return "\uFEFF" + [headers.join(","), ...records.map(r => headers.map(h => escapeCSV(r[h])).join(","))].join("\n");
        }

        function triggerCSVDownload(csvContent, filename) {
            const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        function downloadSingleCSV() {
            if (!window.lastSubmittedRecord) return;
            triggerCSVDownload(convertRecordsToCSV([window.lastSubmittedRecord]), `Respons_UTHM_${Date.now()}.csv`);
        }

        function exportAllCSV() {
            const records = JSON.parse(localStorage.getItem(STORAGE_RESPONSES_KEY) || "[]");
            if (!records.length) {
                showToast("Tiada rekod lagi. Klik '+1 Sampel Ujian' untuk mencuba.", "error");
                return;
            }
            triggerCSVDownload(convertRecordsToCSV(records), `Data_PhD_UTHM_KemahiranHijau_${new Date().toISOString().slice(0, 10)}.csv`);
            showToast(`Berjaya memuat turun ${records.length} rekod CSV untuk Google Sheets!`, "success");
        }

        function clearAllStoredResponses() {
            localStorage.removeItem(STORAGE_RESPONSES_KEY);
            renderAdminAnalytics();
            showToast("Semua rekod tempatan telah dipadam.", "success");
        }

        function saveGoogleSheetURL() {
            const url = document.getElementById("gsheet-webapp-url").value.trim();
            if (!url) {
                localStorage.removeItem(STORAGE_GSHEET_URL_KEY);
                showToast("URL Google Sheets dipadam.", "success");
                return;
            }
            if (!url.startsWith("https://script.google.com/")) {
                showToast("URL tidak sah. Pastikan bermula dengan https://script.google.com/...", "error");
                return;
            }
            localStorage.setItem(STORAGE_GSHEET_URL_KEY, url);
            showToast("URL Web App Google Sheets berjaya disimpan!", "success");
        }

        async function testGoogleSheetConnection() {
            const url = document.getElementById("gsheet-webapp-url").value.trim();
            if (!url) {
                showToast("Sila masukkan URL Web App Google Apps Script dahulu.", "error");
                return;
            }
            saveGoogleSheetURL();
            try {
                await fetch(url, {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "text/plain;charset=utf-8" },
                    body: JSON.stringify({
                        Timestamp: new Date().toLocaleString("sv-SE", { timeZone: "Asia/Kuala_Lumpur" }),
                        Jantina: "Ujian Sambungan", Umur: "33-42 tahun", Pendidikan: "Sarjana / Master's",
                        Pengalaman_Mengajar: "6-10 tahun", Subjek_Utama: "Ujian Web App", Kolej_Vokasional: "UTHM",
                        "A1.0": 5, "B1.0": 5, "C1.0": 5
                    })
                });
                showToast("Data ujian dihantar! Semak tab 'Data_Responden' di Google Sheet anda.", "success");
            } catch (e) {
                showToast("Gagal menyambung ke Google Sheets. Semak kebenaran Web App ('Anyone').", "error");
            }
        }

        function copyAppsScriptCode() {
            const codeText = document.getElementById("apps-script-code").innerText;
            const textarea = document.createElement("textarea");
            textarea.value = codeText;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            showToast("Kod Google Apps Script (Code.gs) disalin ke papan keratan!", "success");
        }

        function showToast(message, type = "info") {
            const container = document.getElementById("toast-container");
            const toast = document.createElement("div");
            const bgClass = type === "error" ? "bg-rose-600 text-white" : (type === "success" ? "bg-greenleaf-700 text-white" : "bg-slate-800 text-white");
            toast.className = `${bgClass} pointer-events-auto px-4 py-3 rounded-2xl shadow-lg text-xs sm:text-sm font-medium transition-all duration-300`;
            toast.textContent = message;
            container.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = "0";
                toast.style.transform = "translateY(8px)";
                setTimeout(() => toast.remove(), 300);
            }, 3800);
        }
    </script>
</body>
</html>
