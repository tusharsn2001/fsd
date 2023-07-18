const express = require('express')
require("./db/connection")
const foods = require("./modules/foods")
const app = express();
const port = process.env.PORT || 3001



// Get Api Data

app.get("/foods", async (req, res) => {
    try {
        const FoodsData = await foods.find();
        res.send(FoodsData);
        console.log(FoodsData);
    } catch (e) {
        console.log(e)
    }
})



// Single food api data 

app.get("/foods/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const singleFood = await foods.findById(_id);

        if (!singleFood) {
            return res.status(404).send();
        } else {
            res.send(singleFood);
        }
    } catch (e) {
        console.log(e);
    }
});




// POst api data
app.use(express.json())

app.post("/createfood", (req, res) => {
    console.log(req.body)
    const foodItem = new foods(req.body)
    foodItem.save().then(() => {
        res.status(201).send(foodItem)
    }).catch((e) => {
        res.status(400).send(e);
    })
})

//patch api to update data



app.patch("/food/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const updateFood = await foods.findByIdAndUpdate({ _id: id }, req.body, {
            new: true
        });
        res.send(updateFood)
    } catch (error) {
        res.status(404).send(error)

    }
})



app.listen(port, (req, res) => {
    console.log(`connected to ${port}`)
})


// delete api

app.delete("/food/:id", async (req, res) => {
    try {
        const id = req.params.id
        const deleteFood = await foods.findByIdAndDelete({ _id: id });
        if (id) {
            return res.status(400).send()
        }
        else {
            res.send(deleteFood)
        }
    } catch (error) {
        res.status(500).send(0)
    }
})
