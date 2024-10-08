// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Orang {
    constructor(nama, alamat) {
        this.nama = nama;
        this.alamat = alamat;
    }

    tampilkanInformasi() {
        console.log(`Nama: ${this.nama}, Alamat: ${this.alamat}`);
    }
}

// Definisi kelas turunan
class Mahasiswa extends Orang {
    constructor(nama, alamat, nim) {
        super(nama, alamat); // Memanggil konstruktor kelas induk
        this.nim = nim;
    }

    tampilkanInformasi() {
        super.tampilkanInformasi(); // Memanggil metode dari kelas induk
        console.log(`NIM: ${this.nim}`);
    }
}

// Penggunaan kelas turunan
const mahasiswa1 = new Mahasiswa("Rio Putra pramono", "Desa kembang kuning RT RW 05 klapanunggal,jawa  barat", "202301110035");
mahasiswa1.tampilkanInformasi();
