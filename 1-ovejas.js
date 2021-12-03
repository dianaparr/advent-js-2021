const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
];

function contarOvejas(ovejas) {
    const regexA = /[A|a]/;
    const regexN = /[N|n]/;
    const group = [];
    ovejas.forEach(ovejaRoja => {
        if (ovejaRoja.color === 'rojo' && regexA.test(ovejaRoja.name) && regexN.test(ovejaRoja.name)) {
            group.push(ovejaRoja);
        };
    });
    return group;
};
