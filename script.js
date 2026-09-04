  // Data Biodata Teman Magang
        const dataMagang = [
            { id: 1, nama: "Muh Imran Syarif", sekolah: "SMKN 1 Makassar", posisi: "Tech support", bio: "Fokus pada pengembangan kerangka website seperti HTML", ig: "#", tiktok: "#", foto: "fotoanakmagang/imran.jpeg" },
            { id: 2, nama: "M Fadly", sekolah: "SMK 5 Gowa", posisi: "Tech Support", bio: "Mahir Melakukan Fusion Splicing.", ig: "https://www.instagram.com/mfaaadlyv_?igsi=MWJ1bDFlN3o2N200dQ==", tiktok: "#", foto: "fotoanakmagang/fadly.jpeg" },
             { id: 3, nama: "Nursyila Putri", sekolah: "SMKN 3 Bone", posisi: "NOC (Network Operation Center)", bio: "Memiliki kemampuan dalam fotografi, pengambilan gambar, pengaturan komposisi dan pencahayaan, serta editing foto dasar.", ig: " https://www.instagram.com/0lippp.__?igsi=dGptdXB6NmNvM2xi&utm_source=qr", tiktok: "https://www.tiktok.com/@nrsylaaa.__", foto: "fotoanakmagang/olip.jpeg" },
            { id: 4, nama: "[Nama Teman 4]", sekolah: "Asal Sekolah 4", posisi: "Posisi Magang", bio: "Tulis biodata singkat di sini.", ig: " #", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+4" },
            { id: 5, nama: "[Nama Teman 5]", sekolah: "Asal Sekolah 5", posisi: "Posisi Magang", bio: "Tulis biodata singkat di sini.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+5" },
            { id: 6, nama: "[Nama Teman 6]", sekolah: "Asal Sekolah 6", posisi: "Posisi Magang", bio: "Tulis biodata singkat di sini.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+6" },
            { id: 7, nama: "[Nama Teman 7]", sekolah: "Asal Sekolah 7", posisi: "Posisi Magang", bio: "Tulis biodata singkat di sini.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+7" },
            { id: 8, nama: "[Nama Teman 8]", sekolah: "Asal Sekolah 8", posisi: "Posisi Magang", bio: "Tulis biodata singkat di sini.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+8" },
            { id: 9, nama: "[Nama Teman 9]", sekolah: "Asal Sekolah 9", posisi: "Posisi Magang", bio: "Tulis biodata singkat di sini.", ig: "#", tiktok: "#", foto: "https://placehold.co/400x400/e2e8f0/475569?text=FOTO+9" },
        ];

        // Data Foto Galeri
        const dataGaleri = [
            { img: "images/dokumentasi1.jpeg", caption: "" },
            { img: "images/dokumentasi2.jpeg", caption: "" },
            { img: "images/dokumentasi3.jpeg", caption: "" },
            { img: "images/dokumentasi4.jpeg", caption: "" },
            { img: "images/dokumentasi5.jpeg", caption: "" },
            { img: "images/dokumentasi6.jpeg", caption: "" },
           { img: "images/dokumentasi7.jpeg", caption: "" },
           { img: "images/dokumentasi8.jpeg", caption: "" },
           { img: "images/dokumentasi9.jpeg", caption: "" },
           { img: "images/dokumentasi10.jpeg", caption: "" },
           { img: "images/dokumentasi11.jpeg", caption: "" },
           { img: "images/dokumentasi12.jpeg", caption: "" },
           { img: "images/dokumentasi13.jpeg", caption: "" },
          { img: "images/dokumentasi14.jpeg", caption: "" },
           { img: "images/dokumentasi15.jpeg", caption: "" },
          
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
                        <div class="absolute inset-0 bg-[#0b3d70]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
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
