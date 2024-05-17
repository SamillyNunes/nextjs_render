function randomNumber(min=1, max=1000){
    return parseInt(Math.random()*(max-min)) + min;
}

export default function handler(req, res){
    res.status(200).json([
        {id: randomNumber(), name: 'Caneta', price: 1.00},
        {id: randomNumber(), name: 'Caderno', price: 25.00},
        {id: randomNumber(), name: 'Borracha', price: 2.60},
        {id: randomNumber(), name: 'Lápis de cor', price: 23.0},
    ]);
}