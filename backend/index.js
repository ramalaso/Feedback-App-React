const express = require('express');
const sequelize = require('./database')
const User = require('./User')

sequelize.sync().then(()=>console.log('db is ready'))

const app = express()

app.use(express.json())

app.post('/feedback', async (req, res)=>{
   await User.create(req.body);
   res.send('user is inserted...')
})

app.get('/feedback', async(req, res)=>{
   const feedback = await User.findAll();
   res.send(feedback);
})

app.get('/feedback/:id', async (req, res)=>{
   const requested_id = req.params.id;
   const feedback = await User.findOne({ where: {id : requested_id}})
   res.send(feedback);
})

app.put('/feedback/:id', async (req, res)=> {
   const requested_id = req.params.id;
   const user = await User.findOne({ where: {id: requested_id}})
   user.rating = req.body.rating;
   user.text = req.body.text;
   await user.save();
   res.send(user);
})

app.delete('/feedback/:id', async (req, res)=>{
   const requested_id = req.params.id;
   await User.destroy( { where : {id: requested_id} });
   res.send('removed');
})

app.listen(5000, ()=> {
   console.log("app is running...")
})