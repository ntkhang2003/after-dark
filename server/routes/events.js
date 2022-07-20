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
//search event
router.get('/search', async (req, res)=> {
    const query = req.query.q
    try {
        const events = await Event.find({
            title: { $regex: query, $options: 'i'},
        }).limit(40)
        res.status(200).json(events)
    } catch (err) {
        res.status(500).json(err)
    }
})
//get an event by id
router.get('/:id', async (req, res)=> {
    try {
        const event = await Event.findById(req.params.id)
        res.status(200).json(event)
    } catch (err) {
        res.status(500).json(err)
    }
})

//get all events
router.get("/", async (req, res) => {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json(err);
    }
  });

module.exports = router