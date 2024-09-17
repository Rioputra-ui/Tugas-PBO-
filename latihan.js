// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Mendefinisikan Kelas
class Kendaraan {
    constructor(merk, warna) {
        this.merk = merk;
        this.warna = warna;
    }

    // Metode
    meluncur() {
        console.log(`${this.merk} berwarna ${this.warna} sedang berjalan.`);
    }
}

// Pewarisan
class KendaraanKencang extends Kendaraan {
    constructor(merk, warna, kecepatanMaksimal) {
        super(merk, warna); // Memanggil konstruktor kelas induk
        this.kecepatanMaksimal = kecepatanMaksimal;
    }

    // Overriding Metode
    meluncur() {
        console.log(`${this.merk} balap berwarna ${this.warna} berjalan dengan kecepatan maksimal ${this.kecepatanMaksimal} km/jam.`);
    }
}

// Membuat Objek
const kendaraan1 = new Kendaraan('Toyota', 'merah');
kendaraan1.meluncur(); // Output: Toyota berwarna merah sedang berjalan.

const kendaraanKencang1 = new KendaraanKencang('Lamborghini', 'hitam', 350);
kendaraanKencang1.meluncur(); // Output: Lamborghini balap berwarna hitam berjalan dengan kecepatan maksimal 350 km/jam.
