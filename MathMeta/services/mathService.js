function invalidMessage() {
    return {
        success: false,
        message: 'A falta de valores impede o calculo.'
    };

    xports.solveFirstDegree = ({a, b, x}) => {

        a = Number(a);
        b = Number(b);

        if (x === '' || x === undefined) {

            if (!a || b === undefined) {
                return invalidMessage();
            }

            const result = -b / a;

            return {
                success: true,
                equation: `${a}x + ${b} = 0`,
                process: [
                    `${a}x + ${b} = 0`,
                    `${a}x = ${-b}`,
                    `x = ${-b}/${a}`,
                    `x = ${result}`
                ],
                result
            };
        }

        x = Number(x);

        const result = a * x + b;

        return {
            success: true,
            equation: `f(x) = ${a}x + ${b}`,
            process: [
                `f(${x}) = ${a}(${x}) + ${b}`,
                `f(${x}) = ${a * x} + ${b}`,
                `f(${x}) = ${result}`
            ],
            result
        };
    };
};

exports.solveSecondDegree = ({a, b, c}) => {

    a = Number(a);
    b = Number(b);
    c = Number(c);

    if (!a || b === undefined || c === undefined) {
        return invalidMessage();
    }

    const delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        return {
            success: false,
            message: 'Delta negativo, não existe em raízes reais.'
        };
    }

    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return {
        success: true,
        equation:  `${a}x² + ${b}x + ${c} = 0`,
        process: [
            `Δ = b² - 4ac`,
            `Δ = (${b})² - 4(${a})(${c})`,
            `Δ = ${delta}`,
            `x = (-b ± √Δ) / 2a`,
            `x1 = ${x1}`,
            `x2 = ${x2}`
        ],
        result: {
            x1,
            x2
        }
    };
};