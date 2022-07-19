const Event = require("../models/Event");
const router = require("express").Router();
//create an event
router.post("/", async (req, res) => {
    const newEvent = new Event(req.body)
    try {
        const savedEvent = await newEvent.save()
        res.status(200).json(savedEvent)
    } catch(err) {
        res.status(500).json(err)
    }
})

//update an event
router.put("/:id", async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
        await event.updateOne({$set:req.body})
        res.status(200).json("The event has been updated")
    } catch(err) {
        res.status(500).json(err)
    }
})
//delete an event
router.delete("/:id", async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
        await event.deleteOne()
    } catch(err) {
        res.status(500).json(err)
    }
})
//get an event by id
router.get('/:id/edit', async (req, res)=> {
    try {
        const event = await Event.findById(req.params.id)
        res.status(200).json(event)
    } catch (err) {
        res.status(500).json(err)
    }
})
//get a post by username/place
// router.get('/:slug', async (req, res) => {
//     try {
//         const decodedSlug = decodeURIComponent(req.params.slug)
//         const post1 = await Post.find({place: decodedSlug})
//         const post2 = await Post.find({username: decodedSlug})
//         if (post1 != '') return res.status(200).json(post1)
//         else if (post2 != '') return res.status(200).json(post2)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

//get all posts
router.get("/", async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json(err);
    }
  });

module.exports = router