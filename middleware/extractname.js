import { Character } from '../models/characters.js';

export const extractNameMiddleware = async (req, res, next) => {
    const { name } = req.params;

    try {
        const character = await Character.findOne({ name: { $regex: new RegExp(name, 'i') } });

        if (!character) {
            return res.status(404).json({ message: "Personaggio non trovato" });
        }

        req.character = character;
        next();
    } catch (error) {
        res.status(500).json({ message: "Errore interno del server" });
    }
};

export default extractNameMiddleware;
  