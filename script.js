// كود تسجيل الدخول
function login() {
    const code = document.getElementById('code').value;
    const validCode = '5577'; // الكود الصحيح

    if (code === validCode) {
        window.location.href = 'login.html'; // التوجيه إلى صفحة البحث
    } else {
        document.getElementById('error-msg').textContent = 'الكود غير صحيح';
    }
}

// البحث داخل ملف النص
function search() {
    const query = document.getElementById('search-query').value;
    const filePath = 'path/to/your/file.txt'; // ضع مسار الملف النصي هنا

    fetch(filePath)
        .then(response => response.text())
        .then(text => {
            const lines = text.split('\n');
            const results = lines.filter(line => line.includes(query));
            document.getElementById('results').textContent = results.join('\n');
        })
        .catch(error => {
            document.getElementById('results').textContent = 'حدث خطأ أثناء البحث';
        });
}

// كود إدارة الأكواد
function generateCode() {
    const newCode = Math.floor(1000 + Math.random() * 9000); // توليد كود عشوائي
    document.getElementById('admin-results').textContent = `الكود الجديد: ${newCode}`;
}

function disableCode() {
    document.getElementById('admin-results').textContent = 'تم تعطيل الكود';
}