function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
    const width = ((height - 1) * 2) + 1;
    let tree = '';
    for (let balls = 1, line = 1; line <= height; line++, balls+=2) {
        const asteriskLine = '*'.repeat(balls);
        const underlineLine = '_'.repeat((width - asteriskLine.length) / 2);
        tree += underlineLine + asteriskLine + underlineLine + '\n';
    };
    for (let index = 1; index < 3; index++) {
        const hashLine = '#'.repeat(1);
        const underlineLine = '_'.repeat((width - hashLine.length) / 2);
        tree += underlineLine + hashLine + underlineLine + '\n';
    };
    return tree.substring(0, tree.length - 1);
};

console.log(createXmasTree(5));


// 1. altura = cantidad de líneas a imprimir
// 2. líneas (* o _) = los * incrementan de dos en dos
// 3. ancho = ((altura - 1) * 2) + 1

// altura = 5
// _ _ _ _ * _ _ _ _ L1
// _ _ _ * * * _ _ _ L2

// base usa la misma función de la primera línea del árbol (x2)

// string con cdad de * de la linea -> 1 -> "*"
// string con _ de el (ancho {9} - longitud string de *) / 2 -> "_ _ _ _"
// L1 = underline + asterisc + underline -> "_ _ _ _" + "*" + "_ _ _ _"

// string con cdad de * de la linea -> 3 -> "***"
// string con _ de el (ancho {9} - longitud string de *) / 2 -> "_ _ _"
// L1 = underline + asterisc + underline -> "_ _ _" + "***" + "_ _ _"
