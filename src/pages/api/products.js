export default function handler(req, res){
    res.status(200).json([
        {id: 1, name: 'Caneta', price: 1.00},
        {id: 2, name: 'Caderno', price: 25.00},
        {id: 3, name: 'Borracha', price: 2.60},
        {id: 4, name: 'Lápis de cor', price: 23.0},
    ]);
}