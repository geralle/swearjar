var express = require('express');
var router = express.Router();

const knex = require('../db/knex')
const queries = require('../db/query')

router.get('/', (req, res) =>{
  var date = queries.checkDate()
  queries.getSwears(date)
  .then(function(swearData){
    if(swearData === undefined){
      queries.newSwears(date)
      .then(function(){
        queries.getSwears(date)
        .then(function(newSwearData){
          queries.getGoodDeeds(date)
          .then(function(goodData){
            res.render('index',{
              title: 'Swear Jar',
              pageheader: 'Swear Jar',
              count: newSwearData.count,
              id: newSwearData.id,
              shortDate: newSwearData.date,
              goodData
            })
          })
        })
      })
    }else{
      queries.getGoodDeeds(date)
      .then(function(goodData){
        res.render('index',{
          title: 'Swear Jar',
          pageheader: 'Swear Jar',
          count: swearData.count,
          id: swearData.id,
          shortDate: swearData.date,
          goodData
        })
      })
    }
  })
})

router.put('/upswear/:id', (req,res) =>{
  queries.increaseSwears(req.body)
  .then(function(data){
    res.redirect('/')
  })
})

router.put('/downswear/:id', (req,res) =>{
  queries.decreaseSwears(req.body)
  .then(function(data){
    res.redirect('/')
  })
})

router.post('/deedDesc', (req,res) =>{
  queries.addGoodDeed(req.body)
  .then(function(data){
    res.redirect('/')
  })
})

router.delete('/deletedeed/:id', (req,res) =>{
  queries.deleteDeed(req.body)
  .then(function(data){
    res.redirect('/')
  })
})

module.exports = router;
