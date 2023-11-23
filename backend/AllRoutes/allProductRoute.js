const express = require('express')
const { MenModel } = require('../Model/MenSchema')
const { ShoeModel } = require('../Model/ShoeSchema')
const { WomenModel } = require('../Model/WomenSchema')
const { OderModel, OrderModel } = require('../Model/OrderShema')

const allProductRoute = express.Router()

allProductRoute.get('/men', async (req, res) => {



    let { category, color, brand, order, page, limit} = req.query;
   
    // page = parseInt(page[1], 10);page, limit
    // page = parseInt(page, 10);
    // limit = parseInt(limit, 10);
    // console.log(page, "page")
    // // console.log(page[1], "page n1");
    // console.log(limit, "limit")


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

        let data;

        if (order) {
            const sortOption = (order === 'asc') ? 1 : -1; // Determine the sorting order based on the user's choice
            data = await MenModel.find(query).sort({ price: sortOption });
        } else {
            data = await MenModel.find(query);
        }

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const results = data.slice(startIndex, endIndex);

        // console.log(startIndex, "start");
        // console.log(endIndex, "end");
        // console.log(results);

        const brandsQuery = { ...query };
        const colorsQuery = { ...query };

        const allBrands = await MenModel.distinct('brand', brandsQuery);
        const allColors = await MenModel.distinct('color', colorsQuery);
        const allCategory = await MenModel.distinct('category');
        const totalData =  data.length;

        res.status(200).send({ "data": results, "allBrands": allBrands, "allColors": allColors, "allCategory": allCategory, "allGender": [], "totalData": totalData });


    } catch (error) {
        res.status(200).send({ "msg": error })
    }
})

allProductRoute.get('/women', async (req, res) => {

    let { category, color, brand, order, page, limit} = req.query;
   
    // page = parseInt(page[1], 10);page, limit
    // page = parseInt(page, 10);
    // limit = parseInt(limit, 10);
    // console.log(page, "page")
    // // console.log(page[1], "page n1");
    // console.log(limit, "limit")


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

        let data;

        if (order) {
            const sortOption = (order === 'asc') ? 1 : -1; // Determine the sorting order based on the user's choice
            data = await WomenModel.find(query).sort({ price: sortOption });
        } else {
            data = await WomenModel.find(query);
        }

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const results = data.slice(startIndex, endIndex);

        // console.log(startIndex, "start");
        // console.log(endIndex, "end");
        // console.log(results);

        const brandsQuery = { ...query };
        const colorsQuery = { ...query };

        const allBrands = await WomenModel.distinct('brand', brandsQuery);
        const allColors = await WomenModel.distinct('color', colorsQuery);
        const allCategory = await WomenModel.distinct('category');
        const totalData =  data.length;

        res.status(200).send({ "data": results, "allBrands": allBrands, "allColors": allColors, "allCategory": allCategory, "allGender": [], "totalData": totalData });


    } catch (error) {
        res.status(200).send({ "msg": error })
    }
})

allProductRoute.get('/shoe', async (req, res) => {

    const { category, color, brand, order, gender ,page, limit} = req.query;


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

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const results = data.slice(startIndex, endIndex);

        const brandsQuery = { ...query };
        const colorsQuery = { ...query };

        const allBrands = await ShoeModel.distinct('brand', brandsQuery);
        const allColors = await ShoeModel.distinct('color', colorsQuery);
        const allCategory = await ShoeModel.distinct('category');
        const allGender = await ShoeModel.distinct('gender');
        const totalData =  data.length;

        res.status(200).send({ "data": results, "allBrands": allBrands, "allColors": allColors, "allCategory": allCategory, "allGender": allGender, "totalData": totalData });


    } catch (error) {
        res.status(200).send({ "msg": error })
    }
})

allProductRoute.get('/order', async(req, res)=>{

    try {
        
        const order = await OrderModel.find()
        .populate('products.mensProduct', 'title images brand color price category size')
        .populate('products.womensProduct', 'title images brand color price category size')
        .populate('products.shoesProduct', 'title images brand color price gender category size').sort({_id: -1})
        res.status(200).send({"allOrders": order})
    } catch (error) {
        res.status(400).send({"err": error})
    }
})


allProductRoute.get('/search/:searchTerm', async (req, res) => {
    const { searchTerm } = req.params;
    // console.log("searchTerm", searchTerm);

    try {
        const data = await MenModel.aggregate([
            {
                $match: { category: { $regex: searchTerm, $options: "i" } }
            },
            {
                $addFields: { cate: "men" }
            }
        ]);

        const womenData = await WomenModel.aggregate([
            {
                $match: { category: { $regex: searchTerm, $options: "i" } }
            },
            {
                $addFields: { cate: "women" }
            }
        ]);

        const shoeData = await ShoeModel.aggregate([
            {
                $match: { category: { $regex: searchTerm, $options: "i" } }
            },
            {
                $addFields: { cate: "shoe" }
            }
        ]);

        // Concatenate the results from different collections
        const concatenatedData = data.concat(womenData, shoeData);

        res.send({ "msg": "searched data for ", data: concatenatedData });

    } catch (error) {
        console.error(error);
        res.status(500).send({ "error": "Internal Server Error" });
    }
});
module.exports = {
    allProductRoute
}