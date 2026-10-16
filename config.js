/* ===== إعدادات منصة الاختبارات — عدّل هنا فقط ===== */
window.CFG = {
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbzm64xbu5F0CzDYYBsAW9IegceRs1GANi1dQK4nva7mgc-06Bat5DUyoQBxg4fKo9Iy/exec",   // ← رابط Google Apps Script الذي ينتهي بـ /exec (اتركه فارغاً للتجربة المحلية)
  OFFICE: "مكتب الأولمبياد العلمي السوري بدرعا",
  ENGINEER: "المهندس أسامة الصلخدي",
  SUBJECT: "علم الأحياء"   // ← اسم الاختصاص (يظهر في الترويسة): الرياضيات / المعلوماتية / ...
};

/* الاختبارات تُضاف من لوحة التحكم (admin.html) باستيراد ملف HTML، فلا حاجة لتعديل هذا الملف.
   (هذه القائمة للاختبارات الثابتة القديمة فقط، اتركها فارغة) */
window.EXAMS_MANIFEST = [];
