document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const birthDate = document.getElementById('birthDateInput').value;

    let pesan = [];

    if (!name) {
        Swal.fire({
            icon: 'warning',
            title: 'Ketik Dulu Namanya Ya Allah',
            text: 'Udah Musyrik Dongo Lagi Aowkwkwowk.'
        });
        return;
    }

    const khodams = [
        'Timun Laut', 'Kingkong Joget', 'Kecebong Hanyut', 'Buntut Monyet', 'Lele Belanda', 'Kuda Mulet', 'Lengkuas Busuk',
        'Alien Botak', 'Gajah Bengkak', 'Ban Dalem', 'Cicak Keker', 'Platifus Rawa', 'Stang Mio', 'Jamet Proyek',
        'Vespa Extream', 'Mayor Teddy', 'Juragan Toge', 'Jamet Bangladesh', 'Alok Jogging', 'Alex Bhizer', 'Jawa Ngopi',
        'Belut Thailand', 'Israel Ajg', 'Baduy Dalem', 'Golok Cikande', 'Kak Gem Ngaceng', 'Anton Kopling', 'Hacker Termux'
    ];

    if (birthDate) {
        const khodamIndex = parseInt(birthDate.replace(/-/g, '').slice(4, 8), 10) % khodams.length;
        const khodamTerdeteksi = khodams[khodamIndex];

        pesan = [
            `Ya, ${name}, menurut tanggal lahir Anda, di dalam dirimu ada khodam ${khodamTerdeteksi}.`,
            `Menurut tanggal lahir Anda, khodam ${khodamTerdeteksi} sedang bersemayam di dalam dirimu, ${name}.`,
            `Menurut tanggal lahir Anda, kamu bersih dari khodam, ${name}.`,
            `Menurut tanggal lahir Anda, khodam ${khodamTerdeteksi} berada di dalam dirimu, ${name}, jaga baik-baik!`,
        ];
    } else {
        const randomIndex = Math.floor(Math.random() * khodams.length);
        const khodamTerdeteksi = khodams[randomIndex];

        pesan = [
            `Ya, ${name}, di dalam dirimu ada khodam ${khodamTerdeteksi}.`,
            `Khodam ${khodamTerdeteksi} sedang bersemayam di dalam dirimu, ${name}.`,
            `Khodam ${khodamTerdeteksi} berada di dalam dirimu, ${name}, jaga baik-baik!`,
        ];
    }

    const randomPesanIndex = Math.floor(Math.random() * pesan.length);
    const hasilTeks = pesan[randomPesanIndex];

    Swal.fire({
        title: 'Hasil Cek Khodam',
        text: hasilTeks,
        icon: 'info'
    });
});
