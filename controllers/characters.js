import { Character } from '../models/characters.js'
import mongoose from 'mongoose'

export const getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.find()
        res.status(200).json(characters)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getCharacterByName = async (req, res) => {
    const { name } = req.params

    try {
        const character = await Character.findOne({ name: { $regex: new RegExp(name, 'i') } });
        res.status(200).json(character)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getCharactersByRole = async (req, res) => {
    const { role } = req.params

    try {
        const characters = await Character.find({ role: { $regex: new RegExp(`^${role}$`, 'i') } });
        res.status(200).json(characters)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getCharactersByAffiliation = async (req, res) => {
    const { currentAffiliation } = req.params;

    try {
        const characters = await Character.find({ currentAffiliation: currentAffiliation });
        res.status(200).json(characters);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCharactersByPreviousAffiliation = async (req, res) => {
    const { previousAffiliation } = req.params

    try {
        const characters = await Character.find({ previousAffiliation: previousAffiliation });
        res.status(200).json(characters);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCharactersByOrigin = async (req, res) => {
    const { origin } = req.params

    try {
        const characters = await Character.find({ origin: origin });
        res.status(200).json(characters);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCharactersByProvenance = async (req, res) => {
    const { provenance } = req.params

    try {
        const characters = await Character.find({ provenance: provenance });
        res.status(200).json(characters);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCharactersByFruit = async (req, res) => {
    const { fruit } = req.params

    try {
        const characters = await Character.find({ fruit: fruit });
        res.status(200).json(characters);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
