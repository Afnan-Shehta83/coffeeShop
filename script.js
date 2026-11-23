const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// فتح وإغلاق قائمة التنقل على الموبايل
menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// إغلاق القائمة بعد الضغط على أي رابط
document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});
