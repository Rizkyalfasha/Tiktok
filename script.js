function showHome() {
  document.getElementById("content").innerHTML = `
    <h2>SELAMAT DATANG</h2>
    <p>Tolong follow tiktok aku donk:<br>
      <a href="https://tiktok.com/@rizkyalfasha36" target="_blank" style="color:cyan;">
        tiktok.com/@rizkyalfasha36
      </a>
    </p>
    <p>Terima kasih atas kerjasama nya</p>
  `;
}

function showInfo() {
  document.getElementById("content").innerHTML = `
    <h2>Informasi Akun</h2>
    <p>Nama: Rizky Alfasha</p>
    <p>Kls: 9</p>
    <p>Alamat: Way Napal</p>
    <p>LAGI BELAJAR BUAT WEB</p>
  `;
}

function showKomunitas() {
  document.getElementById("content").innerHTML = `
    <h2>Komunitas Chat</h2>
    <div id="chatBox"></div>
    <input type="text" id="chatInput" placeholder="Tulis pesan...">
    <button id="sendBtn" onclick="sendChat()">Kirim</button>
  `;
}

function sendChat() {
  const input = document.getElementById("chatInput");
  const msg = input.value.trim();
  if (msg !== "") {
    const chatBox = document.getElementById("chatBox");
    const p = document.createElement("p");
    p.textContent = msg;
    chatBox.appendChild(p);
    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
  }
}