const Letter = [
    "bici coche (balón) bici coche peluche", // -> ✅
    "(muñeca) consola bici", // ✅
    "bici coche (balón bici coche", // -> ❌
    "peluche (bici [coche) bici coche balón", // -> ❌
    "(peluche {) bici", // -> ❌
    "() bici" // ❌
];

function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    if (letter.includes('()')) return false;
    const regex = /\(([^\[\]\{\}\(]+)\)/g;
    return regex.test(letter);
};
