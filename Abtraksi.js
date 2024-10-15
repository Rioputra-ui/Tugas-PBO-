// Kelas abstrak
class Kendaraan {
    constructor(jenis, kecepatan) {
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas Kendaraan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
        this.kecepatan = kecepatan;
    }

    info() {
        console.log(`Jenis: ${this.jenis}, Kecepatan: ${this.kecepatan} km/jam`);
    }

    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Kelas turunan
class Mobil extends Kendaraan {
    constructor(kecepatan) {
        super('Mobil', kecepatan);
    }
    bergerak() {
        console.log(`${this.jenis} bergerak dengan roda pada kecepatan ${this.kecepatan} km/jam.`);
    }
}

class Kapal extends Kendaraan {
    constructor(kecepatan) {
        super('Kapal', kecepatan);
    }
    bergerak() {
        console.log(`${this.jenis} bergerak di atas air pada kecepatan ${this.kecepatan} km/jam.`);
    }
}

class Pesawat extends Kendaraan {
    constructor(kecepatan) {
        super('Pesawat', kecepatan);
    }
    bergerak() {
        console.log(`${this.jenis} terbang di udara pada kecepatan ${this.kecepatan} km/jam.`);
    }
}

// Penggunaan
try {
    const mobil = new Mobil(100);
    mobil.info(); 
    mobil.bergerak();

    const kapal = new Kapal(50);
    kapal.info();
    kapal.bergerak();

    const pesawat = new Pesawat(800);
    pesawat.info();
    pesawat.bergerak();

    // Ini akan melempar kesalahan
    new Kendaraan('Kendaraan', 0);
} catch (error) {
    console.error(error.message);
}
