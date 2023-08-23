import { Fruit } from '../models/fruits.js'
import mongoose from 'mongoose'

export const addFruit = async (req, res) => {
    const fruit = req.body
    const newFruit = new Fruit(fruit)

    try {
        await newFruit.save()
        res.status(201).json(newFruit)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getAllFruits = async (req, res) => {
    try {
        const fruits = await Fruit.find()
        res.status(200).json(fruits)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getFruitType = async (req, res) => {
    const fruit = req.fruit

    if (fruit) {
        const type = fruit.type
        res.status(200).json({ type })
    } else {
        res.status(404).json({ message: error.message })
    }
}

export const getFruitNameOwner = async (req, res) => {
    const fruit = req.fruit

    try {
        const fruitWithOwner = await Fruit.findOne({ _id: fruit._id }).populate('owner', 'name')

        if (!fruitWithOwner) {
            return res.status(404).json({ message: error.message })
        }

        const ownerName = fruitWithOwner.owner.name

        if (!ownerName) {
            return res.status(404).json({ message: error.message })
        }

        res.status(200).json({ ownerName })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getFruitInformationOwner = async (req, res) => {
    const fruit = req.fruit;

    try {
        const fruitInformationOwner = await Fruit.findOne({ _id: fruit._id }).populate('owner')

        if (!fruitInformationOwner) {
            return res.status(404).json({ message: error.message })
        }

        const owner = fruitInformationOwner.owner;

        if (!owner) {
            return res.status(404).json({ message: error.message })
        }

        res.status(200).json({ owner });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getFruitsByType = async (req, res) => {
    const { type } = req.params

    try {
        const fruits = await Fruit.find({ type: { $regex: new RegExp(`^${type}$`, 'i') } })
        res.status(200).json(fruits)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getFruitByName = async (req, res) => {
    const {name} = req.params

    try {
        const fruit = await Fruit.findOne({ name: { $regex: new RegExp(name, 'i') } })
        res.status(200).json(fruit)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
