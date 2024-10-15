// Definisi antarmuka menggunakan objek
const KendaraanInterface = {
    bergerak: function() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
};

// Fungsi untuk membuat objek Helicopter
function createHelicopter() {
    return {
        ...KendaraanInterface, // Menggabungkan antarmuka
        bergerak() {
            console.log("Helicopter terbang di udara.");
        }
    };
}

// Fungsi untuk membuat objek motor
function createMotor() {
    return {
        ...KendaraanInterface, // Menggabungkan antarmuka
        bergerak() {
            console.log("Motor bergerak oleh manusia.");
        }
    };
}

// Penggunaan
const helicopter = createHelicopter();
helicopter.bergerak(); // Output: Pesawat terbang di udara.

const motor = createMotor();
motor.bergerak(); // Output: Motor bergerak oleh manusia.
