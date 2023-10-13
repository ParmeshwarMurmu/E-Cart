const express = require('express')
const { MenModel } = require('../Model/MenSchema')
const { ShoeModel } = require('../Model/ShoeSchema')
const { WomenModel } = require('../Model/WomenSchema')

const allProductRoute = express.Router()

allProductRoute.get('/men', async (req, res) => {



    const { category, color, brand, price } = req.query;
    console.log(category);
    console.log(color);
    console.log(brand);

    try {


        // let query = {};

        // if (category) {
        //     query.category = { $in: category };
        // }

        // if (color) {
        //     query.color = { $in: color };
        // }

        // if (brand) {
        //     query.brand = { $in: brand };
        // }

        // const data = await MenModel.find(query);

        // // Filter distinct brands and colors by the selected category, if available
        // const brandsQuery = { ...query };
        // const colorsQuery = { ...query };

        // const allBrands = await MenModel.distinct('brand', brandsQuery);
        // const allColors = await MenModel.distinct('color', colorsQuery);
        // const allCategory = await MenModel.distinct('category');

        // res.status(200).send({ "data": data, "allBrands": allBrands, "allColors": allColors, "allCategory": allCategory, "allGender": [], "urlCategory": "mens", "masai": "m" })

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

        const sortOption = price === 'highToLow' ? -1 : 1; // Determine the sorting order based on the user's choice

        const data = await MenModel.find(query).sort({ price: sortOption });

        // Filter distinct brands and colors by the selected category, if available
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

    try {
        const data = await WomenModel.find();
        const allBrands = await WomenModel.distinct('brand');
        const allColors = await WomenModel.distinct('color');
        const allCategory = await WomenModel.distinct('category');
        res.status(200).send({ "data": data, "allBrands": allBrands, "allColors": allColors, "allCategory": allCategory, "allGender": [] })
    } catch (error) {
        res.status(200).send({ "msg": error })
    }
})

allProductRoute.get('/shoe', async (req, res) => {

    try {
        const data = await ShoeModel.find();
        const allBrands = await ShoeModel.distinct('brand');
        const allGender = await ShoeModel.distinct('gender');
        const allColors = await ShoeModel.distinct('color');
        const allCategory = await ShoeModel.distinct('category');
        res.status(200).send({ "data": data, "allBrands": allBrands, "allColors": allColors, "allCategory": allCategory, "allGender": allGender })
    } catch (error) {
        res.status(200).send({ "msg": error })
    }
})

module.exports = {
    allProductRoute
}