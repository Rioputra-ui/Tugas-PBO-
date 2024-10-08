// Definisi kelas induk
class Orang {
    tampilkanPeran() {
        console.log("Peran: Orang luar biasa");
    }
}

// Definisi kelas turunan
class Mahasiswa extends Orang {
    tampilkanPeran() {
        console.log("Peran: Mahasiswa Universitas Ipwija");
    }
}

class Dosen extends Orang {
    tampilkanPeran() {
        console.log("Peran: Dosen Universitas Ipwija");
    }
}

class Satpam extends Orang { // Nama kelas harus diawali huruf besar
    tampilkanPeran() { // Pastikan nama metode sama
        console.log("Peran: Satpam Universitas Ipwija");
    }
}

// Menggunakan polimorfisme
const orang1 = new Orang();
const mahasiswa1 = new Mahasiswa();
const dosen1 = new Dosen();
const satpam1 = new Satpam(); // Perbaiki nama kelas di sini

orang1.tampilkanPeran();    // Output: Peran: Orang luar biasa 
mahasiswa1.tampilkanPeran(); // Output: Peran: Mahasiswa Universitas Ipwija
dosen1.tampilkanPeran();     // Output: Peran: Dosen Universitas Ipwija
satpam1.tampilkanPeran();    // Output: Peran: Satpam Universitas Ipwija
