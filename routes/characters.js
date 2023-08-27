import express from 'express'
import { getAllCharacters, addCharacter, getCharacterByName, getCharactersByRole, getCharactersByAffiliation, getCharactersByPreviousAffiliation, getCharactersByOrigin, getCharactersByProvenance, getCharactersByFruit } from '../controllers/characters.js'

const router = express.Router()

router.get('/', getAllCharacters)
router.post('/', addCharacter)
router.get('/name/:name', getCharacterByName)
router.get('/role/:role', getCharactersByRole)
router.get('/currentaffiliation/:currentAffiliation', getCharactersByAffiliation)
router.get('/previousaffiliation/:previousAffiliation', getCharactersByPreviousAffiliation)
router.get('/origin/:origin', getCharactersByOrigin)
router.get('/provenance/:provenance', getCharactersByProvenance)
router.get('/fruit/:fruit', getCharactersByFruit)

export default router