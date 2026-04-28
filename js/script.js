/* Typing Animation*/
var typed = new Typed(".typing", {
    strings:["","Lab Assistant","Programmer","Electrical Engineering Student"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
const navLinks = document.querySelectorAll(".nav li a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        // 1. Hapus class 'active' dari semua menu terlebih dahulu
        navLinks.forEach(nav => nav.classList.remove("active"));
        
        // 2. Tambahkan class 'active' HANYA pada menu yang sedang diklik
        this.classList.add("active");
    });
});

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    let current = "";

    // Mengecek posisi setiap section dari atas layar saat di-scroll
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Angka 150 adalah offset. Jadi warna menu akan berpindah sesaat sebelum section baru menyentuh ujung atas layar
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    // Menghapus dan menambahkan class 'active' ke menu yang sesuai dengan ID section yang sedang tampil
    navLinks.forEach((link) => {
        link.classList.remove("active");
        // Memastikan href menu mengandung ID section yang sedang aktif (misal: href="#about" mengandung "about")
        if (link.getAttribute("href").includes(current) && current !== "") {
            link.classList.add("active");
        }
    });
});

/* =========================================
   Toggle Hamburger Menu (Mobile Responsive)
   ========================================= */
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

// Fungsi saat tombol hamburger diklik
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    // Menambahkan/menghapus class 'open'
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}

// Opsional tapi penting: 
// Menutup menu secara otomatis setelah pengunjung mengklik salah satu link (Home, About, dll) di HP
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
});