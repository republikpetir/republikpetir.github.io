// script.js - Interaktivitas untuk Website Mahjong Slot

// Fungsi Validasi Form Login
function validateLoginForm() {
    const form = document.getElementById('loginForm');
    if (!form) return; // Jika tidak ada form di halaman ini, skip

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Cegah submit default
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        let errorMessage = '';

        if (!username) {
            errorMessage = 'Username tidak boleh kosong!';
        } else if (!password) {
            errorMessage = 'Password tidak boleh kosong!';
        } else if (password.length < 6) {
            errorMessage = 'Password minimal 6 karakter!';
        }

        if (errorMessage) {
            alert(errorMessage); // Pesan error sederhana
        } else {
            // Simulasi login berhasil (redirect ke dashboard)
            alert('Login berhasil! Mengalihkan ke dashboard...');
            window.location.href = 'dashboard.html';
        }
    });
}

// Fungsi Validasi Form Register
function validateRegisterForm() {
    const form = document.getElementById('registerForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        let errorMessage = '';

        if (!username) {
            errorMessage = 'Username tidak boleh kosong!';
        } else if (!password) {
            errorMessage = 'Password tidak boleh kosong!';
        } else if (password.length < 6) {
            errorMessage = 'Password minimal 6 karakter!';
        } else if (password !== confirmPassword) {
            errorMessage = 'Konfirmasi password tidak cocok!';
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {
            alert('Pendaftaran berhasil! Silakan login.');
            window.location.href = 'login.html';
        }
    });
}

// Fungsi untuk Game Slot (Simulasi Spin)
function initGame() {
    const spinBtn = document.getElementById('spinBtn');
    const autoSpinBtn = document.getElementById('autoSpinBtn');
    const betAmount = document.getElementById('betAmount');
    const tiles = document.querySelectorAll('.tile');
    const winDisplay = document.querySelector('.info p:first-child'); // Asumsikan struktur HTML

    if (!spinBtn) return; // Jika tidak ada di halaman ini, skip

    // Fungsi Spin Manual
    spinBtn.addEventListener('click', function() {
        const bet = parseInt(betAmount.value);
        if (bet < 1000) {
            alert('Taruhan minimal Rp 1.000!');
            return;
        }

        // Animasi sederhana: Ganti gambar tile (placeholder)
        tiles.forEach(tile => {
            tile.style.transform = 'rotateY(360deg)'; // Efek flip ringan
            setTimeout(() => {
                tile.style.transform = 'none';
                // Simulasi hasil random (win/loss)
                const result = Math.random() > 0.5 ? 'win' : 'loss';
                if (result === 'win') {
                    winDisplay.textContent = `Win: Rp ${bet * 2}`;
                    alert('Selamat! Anda menang!');
                } else {
                    winDisplay.textContent = 'Win: Rp 0';
                    alert('Sayang, coba lagi!');
                }
            }, 500);
        });
    });

    // Fungsi Auto Spin (Opsional, loop spin)
    autoSpinBtn.addEventListener('click', function() {
        const interval = setInterval(() => {
            spinBtn.click(); // Trigger spin manual
        }, 2000); // Spin setiap 2 detik

        // Stop setelah 5 spin (contoh)
        setTimeout(() => clearInterval(interval), 10000);
    });
}

// Fungsi untuk Deposit/Withdraw Form (Validasi Sederhana)
function validateTransactionForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const amount = parseInt(document.getElementById('amount').value);
        let errorMessage = '';

        if (!amount || amount < 10000) {
            errorMessage = 'Jumlah minimal Rp 10.000!';
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {
            alert('Transaksi berhasil! Status akan update.');
            // Simulasi update status
            const status = document.querySelector('.transaction p:last-child');
            if (status) status.textContent = 'Status: Berhasil';
        }
    });
}

// Inisialisasi Semua Fungsi Saat Halaman Load
document.addEventListener('DOMContentLoaded', function() {
    validateLoginForm();
    validateRegisterForm();
    initGame();
    validateTransactionForm('depositForm');
    validateTransactionForm('withdrawForm');
});
