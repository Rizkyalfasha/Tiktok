function showHome() {
  document.getElementById("content").innerHTML = `
    <h2>SELAMAT DATANG DI WEBSITE NYA RIZKY ALFASHA</h2>
    <p>
      <a href="https://www.tiktok.com/@rizkyalfasha369" target="_blank">
        Klik di sini untuk follow @rizkyalfasha369
      </a>
    </p>
  `;
}

function showInfo() {
  document.getElementById("content").innerHTML = `
    <h2>Informasi Akun</h2>
    <p><b>Nama:</b> Rizky</p>
    <p><b>Kelas:</b> 7</p>
    <p><b>Alamat:</b> Way Napal</p>
    <p><b>Status:</b> Lagi belajar buat web</p>
  `;
}

function showChat() {
  document.getElementById("content").innerHTML = `
    <h2>Komunitas Chat</h2>
    <div id="chat-box"></div>
    <input type="text" id="chat-input" placeholder="Tulis pesan...">
    <button id="send-btn">Kirim</button>
  `;

  document.getElementById("send-btn").onclick = function() {
    let input = document.getElementById("chat-input");
    let pesan = input.value.trim();
    if (pesan !== "") {
      let chatBox = document.getElementById("chat-box");
      let p = document.createElement("p");
      p.textContent = pesan;
      chatBox.appendChild(p);
      input.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  };
}