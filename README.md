# Music Festival API (NodeJS + Express + lowDB) (WIP)

Tiny example of a basic API designed using Express and lowDB for Database for music festivals.

| Path  | Parameters  | Description (GET)  |
|---|---|---|
| /festivals  | -   | Gets all the festival data   |
| /festivals/:id  | id : string -> name of the festival   | Gets information of a given festival   |
| /festivals/:id?/lineup   | id(optional) : string -> name of the festival   | Gets the lineup of a given festival or the lineup of all of them   |
| /festivals/:id?/lineup/stage/:stageID  | stageID : string -> name of the stage   | Gets the lineup of a given festival filtering by a specific stage   |
| /festivals/:id?/lineup/day/:dayID   | dayID : string -> weekday   | Gets the lineup of a given festival filtering by weekday   |
| /festivals/:id?/lineup/band/:bandID   | bandID : string -> name of the band   | Gets the lineup of a given festival filtering by band name   |

Day, stage and Band parameters can be put into a single query to add to the database, the id of the festival is optional to filter by festival or show all the lineups that match the filtering. The routes return an object with all the information to perform CRUD operations on a database.

```
const search_query = {
    show_all_info: false, //Show all the festival info not just the lineup
    festival_id: '', //Name of the festival
    stage: '', //Stage name
    day: '', //Weekday
    band: '' //Band name
}
```

*TODO:* Use lowDB to perform CRUD, set a data model. Maybe add typescript integration.
