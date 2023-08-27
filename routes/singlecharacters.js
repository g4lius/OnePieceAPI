import express from 'express'

import { getCharacterRole, getCharacterFruit, getCharacterCurrentAffiliation, getCharacterPreviousAffiliation, getCharacterOrigin, getCharacterProvenance, getCharacterCurrentBounty, getCharacterPreviousBounty, updateCharacter } from '../controllers/singlecharacters.js'

const router = express.Router()

router.get('/role', getCharacterRole)
router.get('/fruit', getCharacterFruit)
router.get('/currentaffiliation', getCharacterCurrentAffiliation)
router.get('/previousaffiliation', getCharacterPreviousAffiliation)
router.get('/origin', getCharacterOrigin)
router.get('/provenance', getCharacterProvenance)
router.get('/currentbounty', getCharacterCurrentBounty)
router.get('/previousbounty', getCharacterPreviousBounty)


router.patch('/', updateCharacter)


export default router