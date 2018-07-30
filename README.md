# Music Festival API (NodeJS + Express + Firebase) (WIP)

Tiny example of a basic API designed using Express and Firebase for Database for music festivals.

| Path  | Parameters  | Description   |
|---|---|---|
| /festivals  | -   | Gets all the festival data   |
| /festivals/:id  | id : string -> name of the festival   | Gets information of a given festival   |
| /festivals/:id?/lineup   | id(optional) : string -> name of the festival   | Gets the lineup of a given festival or the lineup of all of them   |
| /festivals/:id?/lineup/stage/:stageID  | stageID : string -> name of the stage   | Gets the lineup of a given festival filtering by a specific stage   |
| /festivals/:id?/lineup/day/:dayID   | dayid : string -> weekday   | Gets the lineup of a given festival filtering by weekday   |

Day and stage parameters can be put into a single query, the id of the festival is optional to filter by festival or show all the lineups that match the filtering. The routes return an object with all the information to perform CRUD operations on a database.

```
const search_query = {
    show_all_info: false, //Show all the festival info not just the lineup
    festival_id: '', //Name of the festival
    stage: '', //Stage name to filter
    day: '' //Weekday to filter
}
```

*TODO:* Connect to Firebase to perform CRUD, set a data model. Maybe add typescript integration.
