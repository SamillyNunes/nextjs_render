export default function handler(req, res){
    const id = +req.query.id;

    res.status(200).json({
        id,
        name: `Sani ${id}`,
        email: "samsmam@gmail.com"
    });
}