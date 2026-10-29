<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soal Selidik Kerangka Kemahiran Hijau TVET Electronics</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .option-label {
            transition: all 0.2s ease-in-out;
        }
        .option-label:hover {
            background-color: #f0fdf4;
        }
        input[type="radio"]:checked + .option-content {
            border-color: #16a34a;
            background-color: #dc2626; /* Dynamic focus */
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 font-sans min-h-screen flex flex-col justify-between">

    <!-- Header / Banner -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div class="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <div class="bg-purple-900 text-white font-bold p-2 rounded-lg text-lg tracking-wider">
                    UTHM
                </div>
                <div>
                    <h1 class="text-sm md:text-base font-bold text-slate-900 leading-tight">Universiti Tun Hussein Onn Malaysia</h1>
                    <p class="text-xs text-slate-500">Fakulti Pendidikan Teknikal & Vokasional</p>
                </div>
            </div>
            <div class="text-right">
                <span class="inline-block bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-semibold">PhD Research</span>
            </div>
        </div>
        <!-- Progress Bar -->
        <div class="w-full bg-slate-100 h-2">
            <div id="progressBar" class="bg-emerald-600 h-2 transition-all duration-300 w-1/4"></div>
        </div>
    </header>

    <!-- Main Container -->
    <main class="max-w-4xl mx-auto px-4 py-6 flex-grow w-full">
        <form id="surveyForm" class="space-y-6">

            <!-- STEP 1: PENGANTA R & DEMOGRAFI -->
            <div id="step1" class="step-content space-y-6">
                <!-- Tajuk & Maklumat Penyelidikan -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                    <h2 class="text-lg md:text-xl font-bold text-slate-900 leading-snug uppercase text-center border-b pb-4 border-slate-100">
                        PEMBANGUNAN KERANGKA KEMAHIRAN HIJAU UNTUK KURIKULUM PROGRAM TEKNOLOGI ELEKTRONIK TVET: DALAM MEMENUHI KEPERLUAN EKONOMI HIJAU
                    </h2>
                    <p class="text-xs md:text-sm text-slate-600 font-semibold text-center italic">
                        DEVELOPMENT OF A GREEN SKILLS FRAMEWORK FOR THE TVET ELECTRONIC TECHNOLOGY PROGRAMME CURRICULUM: MEETING THE NEEDS OF THE GREEN ECONOMY
                    </p>

                    <div class="bg-slate-50 p-4 rounded-xl text-xs md:text-sm text-slate-700 space-y-3 border border-slate-100 leading-relaxed">
                        <p><strong>Kepada Tuan/Puan yang dihormati,</strong></p>
                        <p>
                            Saya, <strong>Adib Farhan bin Zaime</strong> merupakan pelajar separuh masa bagi program Doktor Falsafah Pendidikan Teknik dan Vokasional di Universiti Tun Hussein Onn Malaysia. Di sini, saya memohon kerjasama dan sokongan daripada pihak tuan/puan untuk saya menjalankan kajian penyelidikan ini.
                        </p>
                        <p>
                            Objektif kajian ini adalah untuk meneroka, membangunkan, dan mengesahkan kerangka kemahiran hijau sebagai nilai tambah untuk kurikulum Program Teknologi Elektronik TVET. Penyelidikan ini telah bermula dengan menggunakan teknik Delphi. Oleh itu, menerusi soal selidik ini, saya ingin mendapatkan kepakaran anda sebagai pendidik TVET dalam menentukan sejauh mana elemen-elemen ini penting untuk dimasukkan dalam kurikulum latihan Program Teknologi Elektronik TVET di Kolej Vokasional Malaysia.
                        </p>
                        <p class="text-xs text-slate-500 italic">
                            *Segala jawapan yang diberikan adalah sulit dan maklumat yang dikumpulkan digunakan bagi tujuan akademik sahaja. Soal selidik ini mengandungi dua seksyen dan tiga bahagian.
                        </p>
                    </div>

                    <!-- Definis Kemahiran Hijau -->
                    <div class="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl">
                        <h3 class="text-xs font-bold text-emerald-900 uppercase tracking-wide">Definisi Kemahiran Hijau / Green Skills Definition:</h3>
                        <p class="text-xs md:text-sm text-emerald-800 mt-1">
                            Kemahiran hijau adalah satu set kemahiran yang merangkumi kemahiran teknikal, pengetahuan, nilai, dan sikap yang diperlukan dalam pekerjaan hijau untuk menyokong ekonomi, sosial, dan alam sekitar yang mampan melalui aktiviti seperti industri, perniagaan, dan komuniti.
                        </p>
                    </div>

                    <!-- Maklumat Hubungan -->
                    <div class="text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                            <span class="font-bold text-slate-800">1) Penyelidik: Adib Farhan bin Zaime</span><br>
                            Tel: +60 13 650 2508 | Email: adibfarhanzaime@gmail.com
                        </div>
                        <div>
                            <span class="font-bold text-slate-800">2) Penyelia: Ts. Prof. Dr. Lai Chee Sern</span><br>
                            FPTK, UTHM | Tel: +60 12 576 8327 | Email: lcsern@uthm.edu.my
                        </div>
                    </div>
                </div>

                <!-- Seksyen A: Demografi -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                    <div class="border-b pb-3 border-slate-100">
                        <h3 class="text-base font-bold text-slate-900">Seksyen A: Demografi / Section A: Demographics</h3>
                        <p class="text-xs text-slate-500">Sila isi dan pilih maklumat berkenaan di bawah.</p>
                    </div>

                    <!-- Nama -->
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-1">Nama Responden / Name <span class="text-red-500">*</span></label>
                        <input type="text" name="nama" required class="w-full p-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Masukkan nama penuh anda">
                    </div>

                    <!-- Jantina -->
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-2">1. Jantina / Gender <span class="text-red-500">*</span></label>
                        <div class="grid grid-cols-2 gap-3">
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="jantina" value="Lelaki/Male" required class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">Lelaki / Male</span>
                            </label>
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="jantina" value="Perempuan/Female" class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">Perempuan / Female</span>
                            </label>
                        </div>
                    </div>

                    <!-- Umur -->
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-2">2. Umur / Age <span class="text-red-500">*</span></label>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="umur" value="23-32 tahun/years old" required class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">23-32 tahun / years old</span>
                            </label>
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="umur" value="33-42 tahun/years old" class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">33-42 tahun / years old</span>
                            </label>
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="umur" value="43-52 tahun/years old" class="w-4 h-4
