const express = require('express')
const { MenModel } = require('../Model/MenSchema')
const { ShoeModel } = require('../Model/ShoeSchema')
const { WomenModel } = require('../Model/WomenSchema')

const allProductRoute = express.Router()

allProductRoute.get('/men', async (req, res) => {



    const { category, color, brand, order} = req.query;
   

    try {

        let query = {};

        if (category) {
            query.category = { $in: category };
        }

        if (color) {
            query.color = { $in: color };
        }

        if (brand) {
            query.brand = { $in: brand };
        }

        if (order) {
            const sortOption = (order === 'asc') ? 1 : -1; // Determine the sorting order based on the user's choice
            data = await MenModel.find(query).sort({ price: sortOption });
        } else {
            data = await MenModel.find(query);
        }

        const brandsQuery = { ...query };
        const colorsQuery = { ...query };

        const allBrands = await MenModel.distinct('brand', brandsQuery);
        const allColors = await MenModel.distinct('color', colorsQuery);
        const allCategory = await MenModel.distinct('category');

        res.status(200).send({ "data": data, "allBrands": allBrands, "allColors": allColors, "allCategory": allCategory, "allGender": [], "urlCategory": "mens", "masai": "m" });


    } catch (error) {
        res.status(200).send({ "msg": error })
    }
})

allProductRoute.get('/women', async (req, res) => {

    const { category, color, brand, order} = req.query;
   

    try {

        let query = {};

        if (category) {
            query.category = { $in: category };
        }

        if (color) {
            query.color = { $in: color };
        }

        if (brand) {
            query.brand = { $in: brand };
        }

        if (order) {
            const sortOption = (order === 'asc') ? 1 : -1; // Determine the sorting order based on the user's choice
            data = await WomenModel.find(query).sort({ price: sortOption });
        } else {
            data = await WomenModel.find(query);
        }

        const brandsQuery = { ...query };
        const colorsQuery = { ...query };

        const allBrands = await WomenModel.distinct('brand', brandsQuery);
        const allColors = await WomenModel.distinct('color', colorsQuery);
        const allCategory = await WomenModel.distinct('category');

        res.status(200).send({ "data": data, "allBrands": allBrands, "allColors": allColors, "allCategory": allCategory, "allGender": [], "urlCategory": "mens", "masai": "m" });


    } catch (error) {
        res.status(200).send({ "msg": error })
    }
})

allProductRoute.get('/shoe', async (req, res) => {

    const { category, color, brand, order, gender} = req.query;
   

    try {

        let query = {};

        if (category) {
            query.category = { $in: category };
        }

        if (color) {
            query.color = { $in: color };
        }

        if (brand) {
            query.brand = { $in: brand };
        }

        if (gender) {
            query.gender = gender; // Add filter for gender
        }

        if (order) {
            const sortOption = (order === 'asc') ? 1 : -1; // Determine the sorting order based on the user's choice
            data = await ShoeModel.find(query).sort({ price: sortOption });
        } else {
            data = await ShoeModel.find(query);
        }

        const brandsQuery = { ...query };
        const colorsQuery = { ...query };

        const allBrands = await ShoeModel.distinct('brand', brandsQuery);
        const allColors = await ShoeModel.distinct('color', colorsQuery);
        const allCategory = await ShoeModel.distinct('category');
        const allGender = await ShoeModel.distinct('gender');

        res.status(200).send({ "data": data, "allBrands": allBrands, "allColors": allColors, "allCategory": allCategory, "allGender": allGender, "urlCategory": "mens", "masai": "m" });


    } catch (error) {
        res.status(200).send({ "msg": error })
    }
})

module.exports = {
    allProductRoute
}