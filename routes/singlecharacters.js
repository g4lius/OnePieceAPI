import express from 'express'

import { getCharacterRole, getCharacterFruit, getCharacterCurrentAffiliation, getCharacterPreviousAffiliation, getCharacterOrigin, getCharacterProvenance, getCharacterCurrentBounty, getCharacterPreviousBounty } from '../controllers/singlecharacters.js'

const router = express.Router()

router.get('/role', getCharacterRole)
router.get('/fruit', getCharacterFruit)
router.get('/currentaffiliation', getCharacterCurrentAffiliation)
router.get('/previousaffiliation', getCharacterPreviousAffiliation)
router.get('/origin', getCharacterOrigin)
router.get('/provenance', getCharacterProvenance)
router.get('/currentbounty', getCharacterCurrentBounty)
router.get('/previousbounty', getCharacterPreviousBounty)

export default router