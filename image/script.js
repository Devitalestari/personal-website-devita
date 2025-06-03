function kirimWhatsApp() {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  const nomorWA = "6285337030641";
  const teks = `Halo!%0ASaya: ${nama}%0AEmail: ${email}%0APesan: ${pesan}`;
  const linkWA = `https://wa.me/${nomorWA}?text=${teks}`;

  window.open(linkWA, "_blank");
}

