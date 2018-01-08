const db = require('./knex')

function getSwears(date){
  return db('swears').where("date", date).first()
}

function newSwears(date){
  return db('swears').insert({
    date: date,
    count: 0
  })
}

function getGoodDeeds(date){
  return db('gooddeeds').where("date", date)
}

function checkDate(){
  let date = new Date()
  return timeStampFormat(date)
}

function timeStampFormat(date) {
  var dateYear = date.getFullYear()
  var dateMonth = (date.getMonth() + 1).toString()
  if(dateMonth.length === 1){
    var newdateMonth = "0" + dateMonth
  }
  var dateDay = date.getDate().toString()
  if(dateDay.length === 1){
    var newdateDay = "0" + dateDay
  }
  var formattedDate = dateYear + "-" + newdateMonth  + "-" + newdateDay
  return formattedDate
}

function increaseSwears(data){
  return db('swears').update('count', Number(data.count)+1).where('date', data.date)
}

function decreaseSwears(data){
  return db('swears').update('count', Number(data.count)-1).where('date', data.date)
}

function addGoodDeed(data){
  return db('gooddeeds').insert({
    date: data.date,
    description: data.description,
    count: data.count
  })
}

function deleteDeed(data){
  return db('gooddeeds').where('id', data.id).del()
}

module.exports = {
  getSwears,
  getGoodDeeds,
  timeStampFormat,
  checkDate,
  increaseSwears,
  decreaseSwears,
  addGoodDeed,
  deleteDeed,
  newSwears
}
