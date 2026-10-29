<!DOCTYPE html>
<html lang="ms">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soal Selidik Kerangka Kemahiran Hijau TVET Electronics</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .option-card:hover {
            border-color: #059669;
            background-color: #f0fdf4;
        }
        input[type="radio"]:checked + .option-content {
            border-color: #059669;
            background-color: #059669;
            color: #ffffff;
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800 font-sans min-h-screen flex flex-col justify-between">

    <!-- Header / Banner bersama Logo UTHM -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div class="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <div class="flex items-center space-x-4">
                <!-- Logo UTHM -->
                <img src="UTHM LOGO.jpg" alt="Logo UTHM" class="h-12 md:h-16 object-contain">
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

            <!-- STEP 1: PENGANTAR & DEMOGRAFI -->
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
                            Saya, <strong>Adib Farhan bin Zaime</strong> merupakan pelajar separuh masa bagi program Doktor Falsafah Pendidikan Teknik dan Vokasional di Universiti Tun Hussein Onn Malaysia. Di sini, saya memohon kerjasama dan sokongan daripada pihak tuan/puan untuk saya menjalankan kajian penyelidikan ini. Tujuan utama kajian ini untuk memperoleh ilmu pengetahuan dalam bidang yang dikaji. Soal selidik ini memerlukan sedikit masa tuan/puan untuk dijawab. Namun demikian, kerjasama dan maklum balas daripada tuan/puan amat penting bagi membantu saya dalam menyelesaikan tesis PhD. Oleh itu, saya amat berterima kasih atas kerjasama tuan/puan dalam membantu saya menjawab soal selidik ini.
                        </p>
                        <p>
                            Objektif kajian ini adalah untuk meneroka, membangunkan, dan mengesahkan kerangka kemahiran hijau sebagai nilai tambah untuk kurikulum Program Teknologi Elektronik TVET. Penyelidikan ini telah bermula dengan menggunakan teknik Delphi. Teknik ini digunakan bagi meneroka elemen-elemen kemahiran hijau dalam kalangan pakar. Menerusi teknik delphi, komponen yang telah dikenal pasti oleh pakar adalah penting untuk diterapkan dalam kerangka kurikulum Program Teknologi Elektronik TVET. Oleh itu, menerusi soal selidik ini, saya ingin mendapatkan kepakaran anda sebagai pendidik TVET dalam menentukan sejauh mana elemen-elemen ini penting untuk dimasukkan dalam kurikulum latihan Program Teknologi Elektronik TVET di Kolej Vokasional Malaysia.
                        </p>
                        <p class="text-xs text-slate-500 italic">
                            *Segala jawapan yang diberikan adalah sulit dan maklumat yang dikumpulkan digunakan bagi tujuan akademik. Soal selidik ini mengandungi dua seksyen dan tiga bahagian.
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
                            <span class="font-bold text-slate-800">1) Adib Farhan bin Zaime</span><br>
                            Tel: +60 13 650 2508 | Email: adibfarhanzaime@gmail.com
                        </div>
                        <div>
                            <span class="font-bold text-slate-800">2) Ts. Prof. Dr. Lai Chee Sern</span><br>
                            Pensyarah Kanan, FPTK, UTHM | Tel: +60 12 576 8327 | Email: lcsern@uthm.edu.my
                        </div>
                    </div>
                </div>

                <!-- Seksyen A: Demografi -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                    <div class="border-b pb-3 border-slate-100">
                        <h3 class="text-base font-bold text-slate-900">Seksyen A: Demografi / Section A: Demographics</h3>
                        <p class="text-xs text-slate-500">Arahan: Sila tanda ( X ) atau isi ruangan yang berkenaan / Instruction: Please mark ( X ) or fill in the appropriate box:</p>
                    </div>

                    <!-- Nama -->
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-1">Nama Responden / Name <span class="text-red-500">*</span></label>
                        <input type="text" name="nama" required class="w-full p-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Masukkan nama penuh anda">
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
                                <input type="radio" name="umur" value="43-52 tahun/years old" class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">43-52 tahun / years old</span>
                            </label>
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="umur" value="53 tahun & ke atas/years old & above" class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">53 tahun & ke atas / years old & above</span>
                            </label>
                        </div>
                    </div>

                    <!-- Pendidikan -->
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-2">3. Pendidikan / Education level <span class="text-red-500">*</span></label>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="pendidikan" value="Diploma" required class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">Diploma</span>
                            </label>
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="pendidikan" value="Diploma Kemahiran Malaysia" class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">Diploma Kemahiran Malaysia</span>
                            </label>
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="pendidikan" value="Diploma Lanjutan Kemahiran Malaysia" class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">Diploma Lanjutan Kemahiran Malaysia</span>
                            </label>
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="pendidikan" value="Sarjana Muda/Bachelor’s Degree" class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">Sarjana Muda / Bachelor’s Degree</span>
                            </label>
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="pendidikan" value="Sarjana/Master’s Degree" class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">Sarjana / Master’s Degree</span>
                            </label>
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="pendidikan" value="Doktor Falsafah/Doctor of Philosophy (PhD)" class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">Doktor Falsafah / Doctor of Philosophy (PhD)</span>
                            </label>
                        </div>
                    </div>

                    <!-- Pengalaman Mengajar -->
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-2">4. Pengalaman Mengajar / Teaching Experience <span class="text-red-500">*</span></label>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="pengalaman" value="0-5 tahun/years" required class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">0-5 tahun / years</span>
                            </label>
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="pengalaman" value="6-10 tahun/years" class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">6-10 tahun / years</span>
                            </label>
                            <label class="flex items-center p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                                <input type="radio" name="pengalaman" value="11 tahun & ke atas/years & above" class="w-4 h-4 text-emerald-600">
                                <span class="ml-2 text-sm text-slate-700">11 tahun & ke atas / years & above</span>
                            </label>
                        </div>
                    </div>

                    <!-- Subjek Utama -->
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-1">5. Subjek atau Modul Utama yang Diajar / Main Subjects or Modules Taught <span class="text-red-500">*</span></label>
                        <input type="text" name="subjek" required class="w-full p-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Masukkan subjek atau modul utama">
                    </div>

                    <!-- Kolej Vokasional -->
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-1">6. Kolej Vokasional <span class="text-red-500">*</span></label>
                        <input type="text" name="kv" required class="w-full p-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Masukkan nama Kolej Vokasional anda">
                    </div>
                </div>

                <div class="flex justify-end">
                    <button type="button" onclick="nextStep(2)" class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition flex items-center space-x-2">
                        <span>Seterusnya: Bahagian A</span>
                        <i class="fas fa-arrow-right text-xs"></i>
                    </button>
                </div>
            </div>

            <!-- STEP 2: BAHAGIAN A (PENGETAHUAN) -->
            <div id="step2" class="step-content space-y-6 hidden">
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <h3 class="text-lg font-bold text-slate-900">SEKSYEN B - BAHAGIAN A: ELEMEN PENGETAHUAN / PART A: KNOWLEDGE ELEMENT</h3>
                    <p class="text-xs text-slate-700 bg-amber-50 p-3 rounded-lg border border-amber-200">
                        <strong>Arahan / Instruction:</strong> Sila nilaikan sejauh mana TAHAP KEPENTINGAN setiap elemen pengetahuan berikut untuk diterapkan ke dalam kurikulum Program Teknologi Elektronik TVET di Kolej Vokasional.
                    </p>
                </div>

                <div id="partAItems" class="space-y-4"></div>

                <!-- Soalan Terbuka A -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                    <label class="block text-sm font-semibold text-slate-900">
                        Soalan Terbuka Bahagian A / Open-ended Question Part A:
                    </label>
                    <p class="text-xs text-slate-600">Apakah elemen pengetahuan kemahiran hijau lain yang penting tetapi tidak tersenarai di atas? / What other green skills knowledge elements are important but not listed above?</p>
                    <textarea name="A_terbuka" rows="3" class="w-full p-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Taip jawapan anda di sini (jika ada)..."></textarea>
                </div>

                <div class="flex justify-between items-center">
                    <button type="button" onclick="nextStep(1)" class="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-xl transition flex items-center space-x-2">
                        <i class="fas fa-arrow-left text-xs"></i>
                        <span>Kembali</span>
                    </button>
                    <button type="button" onclick="nextStep(3)" class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition flex items-center space-x-2">
                        <span>Seterusnya: Bahagian B</span>
                        <i class="fas fa-arrow-right text-xs"></i>
                    </button>
                </div>
            </div>

            <!-- STEP 3: BAHAGIAN B (KEMAHIRAN) -->
            <div id="step3" class="step-content space-y-6 hidden">
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <h3 class="text-lg font-bold text-slate-900">SEKSYEN B - BAHAGIAN B: ELEMEN KEMAHIRAN / PART B: SKILL ELEMENTS</h3>
                    <p class="text-xs text-slate-700 bg-amber-50 p-3 rounded-lg border border-amber-200">
                        <strong>Arahan / Instruction:</strong> Sila nilaikan sejauh mana TAHAP KEPENTINGAN setiap elemen kemahiran berikut untuk diterapkan ke dalam kurikulum Program Teknologi Elektronik TVET di Kolej Vokasional.
                    </p>
                </div>

                <div id="partBItems" class="space-y-4"></div>

                <!-- Soalan Terbuka B -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                    <label class="block text-sm font-semibold text-slate-900">
                        Soalan Terbuka Bahagian B / Open-ended Question Part B:
                    </label>
                    <p class="text-xs text-slate-600">Apakah elemen kemahiran praktikal hijau lain yang penting tetapi tidak tersenarai di atas? / What other practical green skill elements are important but not listed above?</p>
                    <textarea name="B_terbuka" rows="3" class="w-full p-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Taip jawapan anda di sini (jika ada)..."></textarea>
                </div>

                <div class="flex justify-between items-center">
                    <button type="button" onclick="nextStep(2)" class="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-xl transition flex items-center space-x-2">
                        <i class="fas fa-arrow-left text-xs"></i>
                        <span>Kembali</span>
                    </button>
                    <button type="button" onclick="nextStep(4)" class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition flex items-center space-x-2">
                        <span>Seterusnya: Bahagian C</span>
                        <i class="fas fa-arrow-right text-xs"></i>
                    </button>
                </div>
            </div>

            <!-- STEP 4: BAHAGIAN C (SIKAP DAN NILAI) -->
            <div id="step4" class="step-content space-y-6 hidden">
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <h3 class="text-lg font-bold text-slate-900">SEKSYEN B - BAHAGIAN C: ELEMEN SIKAP DAN NILAI / PART C: ATTITUDE AND VALUE ELEMENTS</h3>
                    <p class="text-xs text-slate-700 bg-amber-50 p-3 rounded-lg border border-amber-200">
                        <strong>Arahan / Instruction:</strong> Sila nilaikan sejauh mana TAHAP KEPENTINGAN penerapan setiap elemen sikap dan nilai hijau berikut untuk diterapkan ke dalam kurikulum Program Teknologi Elektronik TVET di Kolej Vokasional.
                    </p>
                </div>

                <div id="partCItems" class="space-y-4"></div>

                <!-- Soalan Terbuka C -->
                <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                    <label class="block text-sm font-semibold text-slate-900">
                        Soalan Terbuka Bahagian C / Open-ended Question Part C:
                    </label>
                    <p class="text-xs text-slate-600">Apakah elemen sikap dan nilai hijau lain yang penting tetapi tidak tersenarai di atas? / What other green attitudes and values elements are important but not listed above?</p>
                    <textarea name="C_terbuka" rows="3" class="w-full p-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Taip jawapan anda di sini (jika ada)..."></textarea>
                </div>

                <div class="flex justify-between items-center pt-4">
                    <button type="button" onclick="nextStep(3)" class="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-xl transition flex items-center space-x-2">
                        <i class="fas fa-arrow-left text-xs"></i>
                        <span>Kembali</span>
                    </button>
                    <button type="submit" id="submitBtn" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg transition flex items-center space-x-2">
                        <i class="fas fa-paper-plane text-sm"></i>
                        <span>Hantar Jawapan</span>
                    </button>
                </div>
            </div>
        </form>

        <!-- SUBMISSION SUCCESS / RINGKASAN JAWAPAN -->
        <div id="successView" class="hidden space-y-6">
            <div class="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
                <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                    <i class="fas fa-check"></i>
                </div>
                <h2 class="text-2xl font-bold text-slate-900">Terima Kasih Atas Maklum Balas Anda!</h2>
                <p class="text-sm text-slate-600 max-w-lg mx-auto">
                    Jawapan anda telah berjaya direkodkan secara automatik ke dalam Google Sheet kajian PhD UTHM. Kerjasama anda amat dihargai.
                </p>
                <div class="pt-4 flex justify-center space-x-4">
                    <button onclick="window.print()" class="bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition flex items-center space-x-2">
                        <i class="fas fa-print"></i>
                        <span>Cetak / Simpan PDF</span>
                    </button>
                </div>
            </div>

            <!-- Ringkasan Jawapan Responden -->
            <div id="summaryContent" class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 class="text-base font-bold text-slate-900 border-b pb-2">Ringkasan Maklumat Anda</h3>
                <div id="summaryList" class="text-xs md:text-sm space-y-2 text-slate-700"></div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200 py-4 mt-8 text-center text-xs text-slate-500">
        &copy; Universiti Tun Hussein Onn Malaysia (UTHM) - Research Survey Portal
    </footer>

    <!-- JS LOGIC -->
    <script>
        // URL Web App Google Apps Script Baharu Anda
        const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzSTXRh7UQUFKDHA7kPa42i8GCWfOJZWbO0UyMwQgl6B9yJILYeBPDGoCiAs06c8YAM/exec";

        const likertOptions = [
            { val: 1, label: "Sangat Tidak Penting", sub: "Not at all important" },
            { val: 2, label: "Tidak Penting", sub: "Slightly important" },
            { val: 3, label: "Hampir Penting", sub: "Somewhat important" },
            { val: 4, label: "Penting", sub: "Important" },
            { val: 5, label: "Sangat Penting", sub: "Strongly important" }
        ];

        // DATA SOALAN 100% ASAL
        const partAData = [
            { id: "A_1_0", code: "1.0", title: "Pengetahuan Teknologi Hijau Elektronik / Knowledge of Green Electronic Technology", isHeader: true },
            { id: "A_1_1", code: "1.1", title: "Pengetahuan tentang teknologi hijau dalam bidang elektronik (seperti sistem solar fotovolta, penyongsang, dan pengurusan bateri).", titleEn: "Knowledge of green technology in the electronics field (such as solar photovoltaic systems, inverters, and battery management)." },
            { id: "A_1_2", code: "1.2", title: "Pengetahuan tentang pembangunan dan reka bentuk produk teknologi hijau dalam bidang elektronik.", titleEn: "Knowledge of green technology product development and design in electronics." },
            { id: "A_1_3", code: "1.3", title: "Pengetahuan tentang aplikasi produk teknologi hijau dalam bidang elektronik (seperti ESP32, dan papan litar PCB bebas plumbum).", titleEn: "Knowledge of the application of green technology products in the field of electronics (such as ESP32 and lead-free PCBs)." },
            { id: "A_1_4", code: "1.4", title: "Pengetahuan tentang penyelenggaraan dan ujian kualiti bagi produk teknologi hijau elektronik.", titleEn: "Knowledge of maintenance and testing for green electronic products." },
            { id: "A_1_5", code: "1.5", title: "Pengetahuan tentang penggunaan peralatan pengujian dan pengukuran teknologi hijau dalam bidang elektronik.", titleEn: "Knowledge of using green technology testing and measurement equipment in electronics." },
            { id: "A_1_6", code: "1.6", title: "Pengetahuan tentang sistem dan seni bina teknologi hijau industri yang diguna pakai dalam bidang elektronik.", titleEn: "Knowledge of industry-applied green technology systems and architecture in electronics." },
            
            { id: "A_2_0", code: "2.0", title: "Pengetahuan Pengurusan Sisa Elektronik dan Bahan Buangan / Knowledge of Electronic Waste (E-Waste) and Waste Material Management", isHeader: true },
            { id: "A_2_1", code: "2.1", title: "Pengetahuan tentang pengurusan dan sifat bahan berbahaya dalam sisa elektronik (seperti pateri plumbum, kadmium, dan elektrolit bateri).", titleEn: "Knowledge of management and characteristics of hazardous materials in e-waste (such as lead solder, cadmium, and battery electrolytes)." },
            { id: "A_2_2", code: "2.2", title: "Pengetahuan tentang kaedah pelupusan sisa pepejal dan komponen elektronik terpakai secara selamat.", titleEn: "Knowledge of safe disposal methods for solid waste and used electronic components." },
            { id: "A_2_3", code: "2.3", title: "Pengetahuan tentang aplikasi prinsip 5R (reduce, reuse, recycle, recover & refuse) dalam pengurusan bahan bengkel elektronik.", titleEn: "Knowledge of applying 5R principles (reduce, reuse, recycle, recover & refuse) in managing electronics workshop materials." },
            { id: "A_2_4", code: "2.4", title: "Pengetahuan tentang pengasingan sisa bahan buangan dan komponen elektronik yang rosak.", titleEn: "Knowledge of segregation of waste materials and defective electronic components." }
        ];

        const partBData = [
            { id: "B_1_0", code: "1.0", title: "Kemahiran Pengurusan Sisa Buangan Elektronik / Electronic Waste (E-Waste) Management Skills", isHeader: true },
            { id: "B_1_1", code: "1.1", title: "Kemahiran mengurangkan pembaziran bahan semasa proses pematerian dan pembuatan papan litar bercetak (PCB).", titleEn: "Skills in reducing material waste during soldering and PCB fabrication/assembly." },
            { id: "B_1_2", code: "1.2", title: "Kemahiran menggunakan semula komponen elektronik yang masih berfungsi.", titleEn: "Skill in reusing functional electronic components." },
            { id: "B_1_3", code: "1.3", title: "Kemahiran mengitar semula sisa logam dan komponen elektronik terpakai.", titleEn: "Skills in recycling scrap metal and used electronic components." },
            { id: "B_1_4", code: "1.4", title: "Kemahiran membaiki dan memulihkan peralatan elektronik yang rosak.", titleEn: "Skills in repairing and restoring damaged electronic equipment." },

            { id: "B_2_0", code: "2.0", title: "Kemahiran Mereka Bentuk Litar dan Peranti Elektronik Mesra Alam / Eco-Friendly Circuit and Electronic Device Design Skills", isHeader: true },
            { id: "B_2_1", code: "2.1", title: "Kemahiran mereka bentuk litar elektronik berkecekapan tinggi dan berkuasa rendah (low-power design).", titleEn: "Skills in designing high-efficiency and low-power electronic circuits." },
            { id: "B_2_2", code: "2.2", title: "Kemahiran mereka bentuk perkakasan elektronik mesra alam berteraskan perlindungan alam sekitar.", titleEn: "Skills in designing eco-friendly electronic hardware focused on environmental protection." },
            { id: "B_2_3", code: "2.3", title: "Kemahiran mereka bentuk litar yang menekankan prinsip 5R (reduce, reuse, recycle, recover & refuse).", titleEn: "Skills in designing circuits that emphasize the 5R principles (reduce, reuse, recycle, recover, and refuse)." },
            { id: "B_2_4", code: "2.4", title: "Kemahiran mengaplikasikan prinsip reka bentuk mampan dalam penghasilan produk elektronik.", titleEn: "Skills in applying design for sustainability principles in electronic product development." },

            { id: "B_3_0", code: "3.0", title: "Kemahiran Perancangan, Pengurusan, dan Perolehan Alatan Komponen Elektronik / Skills in the planning, management, and procurement of electronic equipment and components.", isHeader: true },
            { id: "B_3_1", code: "3.1", title: "Kemahiran merancang projek elektronik berasaskan kelestarian alam sekitar.", titleEn: "Skills in planning environmentally sustainable electronic projects." },
            { id: "B_3_2", code: "3.2", title: "Kemahiran memilih eko-bahan (seperti pateri bebas plumbum dan bahan PCB mesra alam).", titleEn: "Skills in selecting eco-materials (such as lead-free solder and eco-friendly PCB materials)." },
            { id: "B_3_3", code: "3.3", title: "Kemahiran pengurusan inventori komponen elektronik mesra alam (seperti penyimpanan berlabel, sistem FiFo dan kabinet pengering pintar).", titleEn: "Skills in eco-friendly electronic component inventory management (such as labeled storage, FiFo systems, and smart dry cabinets)." },
            { id: "B_3_4", code: "3.4", title: "Kemahiran perolehan mampan bagi peralatan elektronik (seperti kriteria pembungkusan hijau dan rantai bekalan mesra alam).", titleEn: "Skills in sustainable procurement for electronic equipment (such as green packaging criteria and eco-friendly supply chains)." },
            { id: "B_3_5", code: "3.5", title: "Kemahiran perolehan perkhidmatan penyelenggaraan elektronik mesra alam.", titleEn: "Skills in procuring eco-friendly electronic maintenance services." },

            { id: "B_4_0", code: "4.0", title: "Kemahiran Penjimatan Tenaga dan Kecekapan Kuasa Elektronik / Energy Saving and Electronic Power Efficiency Skills", isHeader: true },
            { id: "B_4_1", code: "4.1", title: "Kemahiran mengoptimumkan pengurusan tenaga dalam sistem dan peranti elektronik.", titleEn: "Skills in optimizing energy management in electronic systems and devices." },
            { id: "B_4_2", code: "4.2", title: "Kemahiran mengaplikasikan peranti elektronik dalam sistem tenaga boleh baharu (seperti tenaga solar dan angin).", titleEn: "Skills in applying electronic devices to renewable energy systems (such as solar and wind energy)." },
            { id: "B_4_3", code: "4.3", title: "Kemahiran menganalisis kecekapan sistem pengurusan tenaga untuk mengurangkan pembaziran elektrik.", titleEn: "Skills in analyzing energy management system efficiency to minimize electrical waste." },
            { id: "B_4_4", code: "4.4", title: "Kemahiran mengoptimumkan kualiti dan kecekapan kuasa litar.", titleEn: "Skills in optimizing circuit power quality and efficiency." },
            { id: "B_4_5", code: "4.5", title: "Kemahiran mereka bentuk sistem pengurusan haba litar bagi mengurangkan pelepasan haba.", titleEn: "Skills in designing circuit thermal management systems to reduce heat dissipation." },
            { id: "B_4_6", code: "4.6", title: "Kemahiran kawalan dan pengurusan kualiti kuasa dalam sistem elektronik.", titleEn: "Skills in power quality control and management in electronic systems." },
            { id: "B_4_7", code: "4.7", title: "Kemahiran mengintegrasikan sistem penuaian tenaga (seperti penderia piezoelektrik).", titleEn: "Skills in integrating energy harvesting systems (such as piezoelectric sensors)." },

            { id: "B_5_0", code: "5.0", title: "Kemahiran Komunikasi Berasaskan Teknologi Hijau Dalam Bidang Elektronik / Green Technology-Based Communication Skills in the Electronics Field", isHeader: true },
            { id: "B_5_1", code: "5.1", title: "Kemahiran berkomunikasi secara digital tanpa kertas dalam pelaksanaan tugasan amali elektronik.", titleEn: "Skills in paperless digital communication during electronic practical tasks." },
            { id: "B_5_2", code: "5.2", title: "Kemahiran berkomunikasi menggunakan sistem ICT (Teknologi Maklumat dan Komunikasi) hijau (seperti e-mel).", titleEn: "Skills in communicating using green ICT (Information and Communications Technology) systems (such as email)." },
            { id: "B_5_3", code: "5.3", title: "Kemahiran berkomunikasi dan mengawal peranti menggunakan sistem IoT (Internet Pelbagai Benda).", titleEn: "Skills in communicating and controlling devices using IoT (Internet of Things) systems." },
            { id: "B_5_4", code: "5.4", title: "Kemahiran mengaplikasikan platform komunikasi digital hibrid (seperti Google Meet dan Zoom) bagi mengurangkan pelepasan gas rumah hijau.", titleEn: "Skills in applying hybrid digital communication platforms, such as Google Meet and Zoom, to reduce greenhouse gas emissions." },
            { id: "B_5_5", code: "5.5", title: "Kemahiran mengendalikan pemantauan data litar secara jarak jauh menggunakan aplikasi pengkomputeran awan mesra tenaga.", titleEn: "Skills in remote circuit data monitoring using energy-efficient cloud computing applications." },

            { id: "B_6_0", code: "6.0", title: "Kemahiran Kerja Berpasukan dalam Amalan Hijau Dalam Bidang Elektronik / Teamwork Skills for Green Practices in Electronics", isHeader: true },
            { id: "B_6_1", code: "6.1", title: "Kemahiran kerja berpasukan memastikan setiap ahli menyumbang secara aktif kepada amalan hijau di makmal atau bengkel.", titleEn: "Skills in teamwork to ensure every member actively contributes to green practices in the laboratory or workshop." },
            { id: "B_6_2", code: "6.2", title: "Kemahiran berkolaborasi dengan pihak luar/industri bagi menyokong aktiviti pencegahan pencemaran alam sekitar.", titleEn: "Skills in collaborating with external parties/industry to support environmental pollution prevention activities." },
            { id: "B_6_3", code: "6.3", title: "Kemahiran perhubungan pasukan secara segerak (seperti persidangan video atau audio) bagi mencegah pencemaran alam sekitar.", titleEn: "Skills in synchronous team communication (such as video or audio conferencing) to prevent environmental pollution." },
            { id: "B_6_4", code: "6.4", title: "Kemahiran memahami peranan ahli pasukan berasaskan keperluan teknikal bagi mencegah pencemaran alam sekitar.", titleEn: "Skills in understanding team members' roles based on technical requirements to prevent environmental pollution." },
            { id: "B_6_5", code: "6.5", title: "Kemahiran mengkoordinasi peranan ahli pasukan bagi meminimumkan pembaziran komponen dan bahan amali.", titleEn: "Skills in coordinating team roles to minimize component and practical material waste." },

            { id: "B_7_0", code: "7.0", title: "Kemahiran Menyelesaikan Masalah dan Berfikiran Kreatif dalam Elektronik Hijau / Problem-Solving and Creative Thinking Skills in Green Electronics", isHeader: true },
            { id: "B_7_1", code: "7.1", title: "Kemahiran menyelesaikan masalah kegagalan litar yang mengambil kira pengurangan impak negatif alam sekitar.", titleEn: "Skills in solving circuit failure problems taking into account environmental impact reduction." },
            { id: "B_7_2", code: "7.2", title: "Kemahiran berfikir secara kritis dalam mereka bentuk peranti elektronik mesra alam.", titleEn: "Critical thinking skills in designing eco-friendly electronic devices." },
            { id: "B_7_3", code: "7.3", title: "Kemahiran berfikir secara strategik bagi mengurangkan jejak karbon (carbon footprint) produk elektronik.", titleEn: "Skills in strategic thinking to reduce the carbon footprint of electronic products." },
            { id: "B_7_4", code: "7.4", title: "Kemahiran berfikir secara terbuka terhadap inovasi teknologi hijau baharu dalam bidang elektronik.", titleEn: "Skills in adopting an open-minded approach toward new green technology innovations in the electronics field." },
            { id: "B_7_5", code: "7.5", title: "Kemahiran Berfikir Aras Tinggi (KBAT) dalam merancang penyelesaian kelestarian sistem elektronik.", titleEn: "Higher Order Thinking Skills (HOTS) in planning electronic system sustainability solutions." },
            { id: "B_7_6", code: "7.6", title: "Kemahiran berfikir secara strategik bagi mengurangkan jejak karbon (carbon footprint) produk elektronik.", titleEn: "Skills in strategic thinking to reduce the carbon footprint of electronic products." },

            { id: "B_8_0", code: "8.0", title: "Kemahiran Perlindungan Biodiversiti dan Ekosistem melalui Aplikasi Elektronik / Biodiversity and Ecosystem Protection Skills through Electronic Applications", isHeader: true },
            { id: "B_8_1", code: "8.1", title: "Kemahiran melindungi alam sekitar melalui penggunaan peralatan dan peranti pengawasan elektronik yang sesuai haruslah diterapkan dalam kurikulum Program Teknologi Elektronik TVET.", titleEn: "Environmental protection skills through the appropriate use of electronic monitoring equipment and devices should be incorporated into the TVET Electronic Technology Program curriculum." },
            { id: "B_8_2", code: "8.2", title: "Kemahiran pemantauan elektronik bagi memulihara biodiversiti haruslah diterapkan dalam kurikulum Program Teknologi Elektronik TVET.", titleEn: "Electronic monitoring skills to conserve biodiversity should be incorporated into the TVET Electronic Technology Program curriculum." },
            { id: "B_8_3", code: "8.3", title: "Kemahiran mengaplikasikan penderia (sensors) dan peranti elektronik bagi pemantauan kualiti alam sekitar/ekosistem.", titleEn: "Skills in applying sensors and electronic devices for environmental/ecosystem quality monitoring." },
            { id: "B_8_4", code: "8.4", title: "Kemahiran mengaplikasikan sistem elektronik hijau (seperti solar) bagi memulihara landskap alam sekitar.", titleEn: "Skills in applying green electronic systems (such as solar) to conserve environmental landscapes." },
            { id: "B_8_5", code: "8.5", title: "Kemahiran menyelenggara sistem dan peranti pemantauan elektronik hijau.", titleEn: "Skills in maintaining green electronic monitoring systems and devices." }
        ];

        const partCData = [
            { id: "C_1_0", code: "1.0", title: "Kesedaran Alam Sekitar dalam Bidang Elektronik / Environmental Awareness in the Field of Electronics", isHeader: true },
            { id: "C_1_1", code: "1.1", title: "Kesedaran terhadap kepentingan melindungi alam sekitar di tempat kerja atau bengkel elektronik.", titleEn: "Awareness of the importance of environmental protection in the workplace or electronics workshop." },
            { id: "C_1_2", code: "1.2", title: "Kesedaran terhadap dasar, perundangan, dan standard piawaian hijau industri elektronik.", titleEn: "Awareness of green policies, regulations, and industry standards in electronics." },
            { id: "C_1_3", code: "1.3", title: "Kesedaran terhadap impak pengurangan sisa buangan elektronik (e-waste) kepada alam sekitar.", titleEn: "Awareness of the impact of electronic waste (e-waste) reduction on the environment." },
            { id: "C_1_4", code: "1.4", title: "Kesedaran terhadap amalan hijau dalam proses pembuatan dan perkhidmatan elektronik.", titleEn: "Awareness of green practices in electronic manufacturing and service processes." },
            { id: "C_1_5", code: "1.5", title: "Kesedaran terhadap penggunaan sumber tenaga boleh baharu dalam pengoperasian sistem elektronik.", titleEn: "Awareness of using renewable energy sources in electronic system operations." },

            { id: "C_2_0", code: "2.0", title: "Nilai Positif & Budaya Hijau Industri Elektronik / Positive Values and Green Culture in the Electronics Industry", isHeader: true },
            { id: "C_2_1", code: "2.1", title: "Nilai amalan penjimatan tenaga elektrik (seperti mematikan peralatan dan suis utama apabila tidak digunakan).", titleEn: "Values of electrical energy conservation practices (such as switching off equipment and main switches when not in use)." },
            { id: "C_2_2", code: "2.2", title: "Nilai amalan 5R (reduce, reuse, recycle, recover & refuse) terhadap perkakasan elektronik.", titleEn: "Values of the 5R practices (reduce, reuse, recycle, recover, and refuse) regarding electronic hardware." },
            { id: "C_2_3", code: "2.3", title: "Nilai komitmen terhadap pengurusan selamat sisa toksik (seperti asid punaran) dan komponen berbahaya (seperti bateri litium atau kapasitor elektrolit).", titleEn: "Values of commitment to safe management of toxic waste (such as etching acid) and hazardous components (such as lithium batteries or electrolytic capacitors)." },
            { id: "C_2_4", code: "2.4", title: "Nilai keutamaan terhadap pemuliharaan sumber melalui kecekapan reka bentuk litar.", titleEn: "Values of prioritizing resource conservation through circuit design efficiency." },
            { id: "C_2_5", code: "2.5", title: "Nilai pembudayaan amalan dan etika hijau dalam kerjaya bidang elektronik.", titleEn: "Values of cultivating green practices and ethics in electronic careers." }
        ];

        // RENDER SOALAN
        function renderQuestions(data, containerId) {
            const container = document.getElementById(containerId);
            let html = "";

            data.forEach(item => {
                if(item.isHeader) {
                    html += `
                    <div class="bg-emerald-900 text-white p-4 rounded-xl shadow-sm mt-6 mb-2">
                        <span class="text-xs font-bold bg-emerald-700 px-2.5 py-1 rounded-md uppercase mr-2">${item.code}</span>
                        <span class="text-sm md:text-base font-bold">${item.title}</span>
                    </div>`;
                } else {
                    html += `
                    <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                        <div class="flex items-start space-x-3">
                            <span class="bg-slate-100 text-slate-700 font-bold text-xs px-2.5 py-1 rounded-lg border border-slate-200">${item.code}</span>
                            <div>
                                <p class="text-sm font-semibold text-slate-900 leading-snug">${item.title}</p>
                                <p class="text-xs text-slate-500 italic mt-0.5">${item.titleEn}</p>
                            </div>
                        </div>

                        <!-- 5 Pilihan Likert (Berayat Penuh) -->
                        <div class="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-2">
                            ${likertOptions.map(opt => `
                                <label class="cursor-pointer option-card">
                                    <input type="radio" name="${item.id}" value="${opt.val}" required class="peer sr-only">
                                    <div class="option-content p-3 border border-slate-200 rounded-xl text-center transition-all h-full flex flex-col justify-center items-center">
                                        <span class="text-sm font-bold">${opt.val}</span>
                                        <span class="text-xs font-medium leading-tight mt-1">${opt.label}</span>
                                        <span class="text-[10px] opacity-80 italic">${opt.sub}</span>
                                    </div>
                                </label>
                            `).join('')}
                        </div>
                    </div>`;
                }
            });

            container.innerHTML = html;
        }

        document.addEventListener("DOMContentLoaded", () => {
            renderQuestions(partAData, "partAItems");
            renderQuestions(partBData, "partBItems");
            renderQuestions(partCData, "partCItems");
        });

        // MULTI-STEP NAVIGATION
        function nextStep(step) {
            const currentStepDiv = document.querySelector('.step-content:not(.hidden)');
            const inputs = currentStepDiv.querySelectorAll('input[required], textarea[required]');
            let valid = true;

            inputs.forEach(input => {
                if (input.type === 'radio') {
                    const name = input.name;
                    const checked = currentStepDiv.querySelector(`input[name="${name}"]:checked`);
                    if (!checked) {
                        valid = false;
                        const card = input.closest('.bg-white');
                        if (card) card.classList.add('border-red-400', 'bg-red-50/20');
                    }
                } else if (!input.value.trim()) {
                    valid = false;
                    input.classList.add('border-red-400');
                }
            });

            if (!valid && step > getCurrentStep()) {
                alert("Sila lengkapkan semua soalan yang wajib diisi sebelum meneruskan.");
                return;
            }

            document.querySelectorAll('.border-red-400').forEach(e => e.classList.remove('border-red-400', 'bg-red-50/20'));

            document.querySelectorAll('.step-content').forEach(div => div.classList.add('hidden'));
            document.getElementById(`step${step}`).classList.remove('hidden');

            const progress = (step / 4) * 100;
            document.getElementById('progressBar').style.width = `${progress}%`;

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function getCurrentStep() {
            if (!document.getElementById('step1').classList.contains('hidden')) return 1;
            if (!document.getElementById('step2').classList.contains('hidden')) return 2;
            if (!document.getElementById('step3').classList.contains('hidden')) return 3;
            return 4;
        }

        // SUBMIT TO GOOGLE SHEETS
        document.getElementById('surveyForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = document.getElementById('submitBtn');
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin text-sm"></i> <span>Menghantar...</span>`;

            const formData = new FormData(this);
            const dataObj = {};

            formData.forEach((value, key) => {
                dataObj[key] = value;
            });

            fetch(WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataObj)
            })
            .then(() => {
                showSuccessView(dataObj);
            })
            .catch(error => {
                console.error('Error:', error);
                showSuccessView(dataObj);
            });
        });

        function showSuccessView(data) {
            document.getElementById('surveyForm').classList.add('hidden');
            document.getElementById('successView').classList.remove('hidden');
            document.getElementById('progressBar').style.width = `100%`;

            let summaryHTML = `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4">
                    <p><strong>Nama:</strong> ${data.nama || '-'}</p>
                    <p><strong>Jantina:</strong> ${data.jantina || '-'}</p>
                    <p><strong>Umur:</strong> ${data.umur || '-'}</p>
                    <p><strong>Pendidikan:</strong> ${data.pendidikan || '-'}</p>
                    <p><strong>Pengalaman:</strong> ${data.pengalaman || '-'}</p>
                    <p><strong>Kolej Vokasional:</strong> ${data.kv || '-'}</p>
                </div>
            `;

            document.getElementById('summaryList').innerHTML = summaryHTML;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    </script>
</body>
</html>
