import { Character } from '../models/characters.js'
import mongoose from 'mongoose'

export const getCharacterRole = async (req, res) => {
    const character = req.character

    if (character) {
        const role = character.role
        res.status(200).json({ role })
    } else {
        res.status(404).json({ message: error.message })
    }
}

export const getCharacterFruit = async (req, res) => {
    const character = req.character

    if (character) {
        const fruit = character.fruit
        res.status(200).json({ fruit })
    } else {
        res.status(404).json({ message: error.message })
    }
}

export const getCharacterCurrentAffiliation = async (req, res) => {
    const character = req.character

    if (character) {
        const currentaffiliation = character.currentAffiliation
        res.status(200).json({ currentaffiliation })
    } else {
        res.status(404).json({ message: error.message })
    }
}

export const getCharacterPreviousAffiliation = async (req, res) => {
    const character = req.character

    if (character) {
        const previousaffiliation = character.previousAffiliation
        res.status(200).json({ previousaffiliation })
    } else {
        res.status(404).json({ message: error.message })
    }
}

export const getCharacterOrigin = async (req, res) => {
    const character = req.character

    if (character) {
        const origin = character.origin
        res.status(200).json({ origin })
    } else {
        res.status(404).json({ message: error.message })
    }
}

export const getCharacterProvenance = async (req, res) => {
    const character = req.character

    if (character) {
        const provenance = character.provenance
        res.status(200).json({ provenance })
    } else {
        res.status(404).json({ message: error.message })
    }
}

export const getCharacterCurrentBounty = async (req, res) => {
    const character = req.character

    if (character) {
        const currentbounty = character.currentBounty
        res.status(200).json({ currentbounty })
    } else {
        res.status(404).json({ message: error.message })
    }
}

export const getCharacterPreviousBounty = async (req, res) => {
    const character = req.character

    if (character) {
        const previousbounty = character.previousBounty
        res.status(200).json({ previousbounty })
    } else {
        res.status(404).json({ message: error.message })
    }
}

// -----------------------

export const updateCharacter = async (req, res) => {
    const character = req.character;

    if (character) {
        try {
            character.name = req.body.name
            character.fruit = req.body.fruit
            character.currentAffiliation = req.body.currentAffiliation
            character.role = req.body.role
            character.previousAffiliation = req.body.previousAffiliation
            character.origin = req.body.origin
            character.provenance = req.body.provenance
            character.currentBounty = req.body.currentBounty
            character.previousBounty = req.body.previousBounty

            const updatedCharacter = await Character.findByIdAndUpdate(
                character._id,
                { currentBounty: character.currentBounty, previousBounty: character.previousBounty, name: character.name, origin: character.origin, 
                    previousAffiliation: character.previousAffiliation, role: character.role, provenance: character.provenance },
                { new: true }
            );

            res.status(200).json(updatedCharacter);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        res.status(404).json({ message: error.message });
    }
}