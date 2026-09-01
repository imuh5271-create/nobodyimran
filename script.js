  // Data Biodata Teman Magang
        const dataMagang = [
            { id: 1, nama: "[Nama Teman 1]", sekolah: "SMKN 1 Contoh", posisi: "Web Developer", bio: "Fokus pada pengembangan frontend dan backend.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+1" },
            { id: 2, nama: "[Nama Teman 2]", sekolah: "SMK Telkom Contoh", posisi: "UI/UX Designer", bio: "Merancang antarmuka yang ramah pengguna.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+2" },
            { id: 3, nama: "[Nama Teman 3]", sekolah: "SMK Negeri 2 Contoh", posisi: "Network Engineer", bio: "Ahli dalam konfigurasi jaringan dan server.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+3" },
            { id: 4, nama: "[Nama Teman 4]", sekolah: "Asal Sekolah 4", posisi: "Posisi Magang", bio: "Tulis biodata singkat di sini.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+4" },
            { id: 5, nama: "[Nama Teman 5]", sekolah: "Asal Sekolah 5", posisi: "Posisi Magang", bio: "Tulis biodata singkat di sini.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+5" },
            { id: 6, nama: "[Nama Teman 6]", sekolah: "Asal Sekolah 6", posisi: "Posisi Magang", bio: "Tulis biodata singkat di sini.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+6" },
            { id: 7, nama: "[Nama Teman 7]", sekolah: "Asal Sekolah 7", posisi: "Posisi Magang", bio: "Tulis biodata singkat di sini.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+7" },
            { id: 8, nama: "[Nama Teman 8]", sekolah: "Asal Sekolah 8", posisi: "Posisi Magang", bio: "Tulis biodata singkat di sini.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+8" },
            { id: 9, nama: "[Nama Teman 9]", sekolah: "Asal Sekolah 9", posisi: "Posisi Magang", bio: "Tulis biodata singkat di sini.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+9" },
        ];

        // Data Foto Galeri
        const dataGaleri = [
            { img: "https://placehold.co/600x400/0b3d70/ffffff?text=Dokumentasi+1", caption: "Konfigurasi Server Utama" },
            { img: "https://placehold.co/600x400/0b3d70/ffffff?text=Dokumentasi+2", caption: "Rapat Koordinasi Tim" },
            { img: "https://placehold.co/600x400/0b3d70/ffffff?text=Dokumentasi+3", caption: "Instalasi Jaringan Klien" },
            { img: "https://placehold.co/600x400/0b3d70/ffffff?text=Dokumentasi+4", caption: "Presentasi Proyek" },
            { img: "https://placehold.co/600x400/0b3d70/ffffff?text=Dokumentasi+5", caption: "Pengecekan Fiber Optic" },
            { img: "https://placehold.co/600x400/0b3d70/ffffff?text=Dokumentasi+6", caption: "Troubleshooting Hardware" },
        ];

        function renderUI() {
            const gridIntern = document.getElementById("intern-grid");
            let htmlIntern = "";
            dataMagang.forEach((p) => {
                htmlIntern += `
                    <div class="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center overflow-hidden group hover:shadow-xl hover:border-blue-100 transition-all duration-300" data-tilt data-tilt-max="2" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.05">
                        <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm mb-4 group-hover:border-[#0072bc] group-hover:scale-105 transition-all duration-500">
                            <img src="${p.foto}" alt="${p.nama}" class="w-full h-full object-cover">
                        </div>
                        <h3 class="text-xl font-bold text-[#0b3d70] mb-1 group-hover:text-[#0072bc] transition-colors">${p.nama}</h3>
                        <p class="text-[#f29a2e] text-xs font-bold mb-3 uppercase tracking-wider">${p.posisi}</p>
                        <div class="bg-slate-50 w-full py-2 px-3 mb-4 rounded border border-gray-100 flex justify-center items-center gap-2">
                            <i class="fas fa-graduation-cap text-gray-400 text-sm"></i>
                            <span class="text-xs text-gray-600 font-medium">${p.sekolah}</span>
                        </div>
                        <p class="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">"${p.bio}"</p>
                        <div class="flex gap-3 mt-auto w-full justify-center pt-4 border-t border-gray-100">
                            <a href="${p.ig}" target="_blank" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-gray-400 hover:text-white hover:bg-[#e1306c] transition-colors"><i class="fab fa-instagram"></i></a>
                            <a href="${p.tiktok}" target="_blank" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-gray-400 hover:text-white hover:bg-black transition-colors"><i class="fab fa-tiktok"></i></a>
                        </div>
                    </div>`;
            });
            if (gridIntern) gridIntern.innerHTML = htmlIntern;
            VanillaTilt.init(document.querySelectorAll("[data-tilt]"));

            const gridGallery = document.getElementById("gallery-grid");
            let htmlGallery = "";
            dataGaleri.forEach((g) => {
                htmlGallery += `
                    <div class="relative group rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-gray-100 aspect-video">
                        <img src="${g.img}" alt="${g.caption}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                        <div class="absolute inset-0 bg-[#0b3d70]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                            <h4 class="text-white font-semibold text-center text-sm md:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">${g.caption}</h4>
                        </div>
                    </div>`;
            });
            if (gridGallery) gridGallery.innerHTML = htmlGallery;
        }

        function initMobileMenu() {
            const mobileBtn = document.getElementById("mobile-btn");
            const mobileMenu = document.getElementById("mobile-menu");
            const closeBtn = document.getElementById("close-menu-btn");
            const mobileLinks = document.querySelectorAll(".mobile-link");

            // Pastikan elemen ada sebelum menambah event listener
            if (mobileBtn && mobileMenu && closeBtn) {
                mobileBtn.addEventListener("click", () => {
                    mobileMenu.classList.remove("translate-x-full");
                    document.body.style.overflow = "hidden";
                });

                closeBtn.addEventListener("click", () => {
                    mobileMenu.classList.add("translate-x-full");
                    document.body.style.overflow = "";
                });

                mobileLinks.forEach((link) => {
                    link.addEventListener("click", () => {
                        mobileMenu.classList.add("translate-x-full");
                        document.body.style.overflow = "";
                    });
                });
            }
        }

        window.onload = function () {
            renderUI();
            initMobileMenu();
        };