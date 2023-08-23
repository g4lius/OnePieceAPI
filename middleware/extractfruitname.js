import { Fruit } from '../models/fruits.js';

export const extractFruitMiddleware = async (req, res, next) => {
    const { name } = req.params;

    try {
        const fruit = await Fruit.findOne({ name: { $regex: new RegExp(name, 'i') } });

        if (!fruit) {
            return res.status(404).json({ message: "Personaggio non trovato" });
        }

        req.fruit = fruit;
        next();
    } catch (error) {
        res.status(500).json({ message: "Errore interno del server" });
    }
}

export default extractFruitMiddleware