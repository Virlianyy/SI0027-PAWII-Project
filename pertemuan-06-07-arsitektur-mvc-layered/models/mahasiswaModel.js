// Mini Project - Pertemuan 6-7: Layer Model
// TODO 1: lengkapi data awal & tiga fungsi akses data di bawah

let mahasiswa = [
  { id: 1, nama: "Andi", jurusan: "Sistem Informasi" },
  { id: 2, nama: "Budi", jurusan: "Informatika" },
];

function getAll() {
  // Mengembalikan seluruh data mahasiswa
  return mahasiswa;
}

function getById(id) {
  // Cari dan kembalikan satu data berdasarkan id
  return mahasiswa.find((item) => item.id === id);
}

function create(data) {
  // Membuat objek mahasiswa baru
  const mahasiswaBaru = {
    id: mahasiswa.length + 1,
    ...data,
  };

  // Simpan ke array
  mahasiswa.push(mahasiswaBaru);

  // Kembalikan data yang baru dibuat
  return mahasiswaBaru;
}

module.exports = {
  getAll,
  getById,
  create,
};