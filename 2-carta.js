const letter = 'bici coche balón _playstation bici coche peluche';

function listGifts(letter) {
    // ¡Tú puedes!
    const arr = letter.split(" ").filter(e => e !== "");
    const obj = {};
    arr.forEach((elem) => {
    if (elem[0] !== '_') {
        if (obj[elem]) {
            obj[elem] += 1;
        } else {
            obj[elem] = 1;
        };
    };
});
return obj;
};
