# Music Festival API (NodeJS + Express + lowDB) (WIP)

Tiny example/exercise of a basic API with CRUD designed using Express and lowDB as database for music festivals. You can add to the lineup of the festivals some bands with day and stage information associated. The routes are defined as follows:

| Path  | Parameters  | Description  |
|---|---|---|
| /festivals  | -   | Festival data   |
| /festivals/:id  | id : string -> name of the festival   | Specify given festival by name   |
| /festivals/:id?/lineup   | id(optional) : string -> name of the festival   |  lineup of a given festival or lineup of all the festivals on the DB  |
| /festivals/:id?/lineup/stage/:stageID  | stageID : string -> name of the stage   | lineup of a given festival specifying stage   |
| /festivals/:id?/lineup/day/:dayID   | dayID : string -> weekday   | lineup of a given festival specifying weekday   |
| /festivals/:id?/lineup/band/:bandID   | bandID : string -> name of the band   | lineup of a given festival by band name   |

*Day, stage and Band* parameters can be combined into a single query to the database (e.g `/festivals/coolfest/lineup/stage/superstage/day/thursday/band/radiohead`), the id of the festival is optional to filter by festival or perform operations on all the lineups that match the filtering.

## API Data
The data managed by the API is an object with the following fields:
|Field  | Type  | Mandatory  |
|---|---|---|
| festival_id  | string   | **Yes** for (PUT , DELETE , PATCH) , **No** for (GET , POST) (gets all the festivals entries matching if not present)   |
| stage  | string   | **No**   |
| day   | string   |  **No**  |
| band  | string   | **No**   |

## API CRUD Methods
When making the request to the API using the usual HTTP Verbs (PUT , GET , POST , PATCH , DELETE), the API returns the following responses:

### Create (PUT)
```
// Successful response
{
    "success": 1,
    "message": "The entry has been succesfully added to the database"
}
 
// Unsuccessful response
{
    "success": 0,
    "error": "Error Message"
}
```
### Read (POST,GET)
### Update (PATCH)
### Delete (DELETE)

## Festival Model
The object model that our database stores:
```
festivals: {
  [
    //festival entry
    {festival_id: "", 
        lineup: 
        [
            {band: "", stage: "", day: "" }, //lineup entry
            ...
        ]
    },
    ...  
  ]
}
```

*TODO:* Use lowDB to perform CRUD, Maybe add typescript integration.
