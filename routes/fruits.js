import express from 'express'
import { addFruit, getAllFruits, getFruitType, getFruitNameOwner, getFruitInformationOwner, getFruitsByType, getFruitByName } from '../controllers/fruits.js'

import extractFruitMiddleware from '../middleware/extractfruitname.js'

const router = express.Router()

router.post('/', addFruit)

router.get('/', getAllFruits)
router.get('/:name', getFruitByName)
router.get('/:name/type', extractFruitMiddleware, getFruitType)
router.get('/:name/name-owner', extractFruitMiddleware, getFruitNameOwner)
router.get('/:name/owner', extractFruitMiddleware, getFruitInformationOwner)
router.get('/type/:type', getFruitsByType)


export default router