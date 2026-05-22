const mathService = require('../services/mathService');
const db = require('../database/database');

exports.renderHome = (req, res) => {
    res.render('index');
};

exports.solveEquation = (req, res) => {
    const { type, a, b, c, x,} = req.body;

    let result;

    if (type === 'primeiro-grau') {
        result = mathService.solveFistDegree({ a, b, x });
    }

    if (type === 'segundo-grau') {
        result = mathService.solveSecondDegree({ a, b, c, x});
    }

    db.prepare(`
    INSERT INTO calculations (equationType, values, result)
    VALUES (?, ?, ?)
`).run(
    type,
    JSON.stringify(req.body),
    JSON.stringify(result)
);

    res.render('result', { result });
};