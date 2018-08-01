//Data model builder for our festivals objects.
module.exports = festivalModel = class {
    constructor() {}

    parseParams(params,db){
        const festival_exists = this.checkFestivalExists(params.festival_id,db);

        return festival_exists ? {
            stage: params.stage,
            day: params.day,
            band: params.band
        } : {
            festival_id: params.festival_id,
            lineup: [
                {
                    stage: params.stage,
                    day: params.day,
                    band: params.band
                }
            ]
        }
    }

    checkFestivalExists(festivalName,db){
        return db.get('festivals').find({festival_id: festivalName}).value() ? true : false;
    }
}

/* Festival Model:

festivals: {
    [{festival_id: "", lineup: [{stage: "", day: "", band: ""}, ...]}, ...]
}

*/