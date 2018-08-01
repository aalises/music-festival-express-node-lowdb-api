//Database functions to perform CRUD using LowDB
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const { path } = require("./low.conf");

//Data model for our database
const festivalModel = require('./model/festivals-model');

module.exports = database = class {  

  constructor() {
    low(new FileAsync(path))
      .then(db => {
        this.instance = db,
        this.festival_model = new festivalModel();
        this.instance.defaults({ festivals: [] })
          .write()
      });
  }

  write(searchParams) {
    const obj = this.festival_model.parseParams(searchParams,this.instance);
    const festival_exists = this.festival_model.checkFestivalExists(searchParams.festival_id,this.instance);

    return festival_exists  ? 
     this.instance.get("festivals")
        .find({festival_id: searchParams.festival_id})
        .get("lineup")
        .push(obj)
        .write() :    
     this.instance.get("festivals")
        .push(obj)
        .write();     
  }

  read(params){
    //TODO
  }

  update(params){
    //TODO
  }

  delete(params){
    //TODO
  }
}