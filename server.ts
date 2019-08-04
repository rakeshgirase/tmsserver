import express from "express";
import cors from "cors";

import {Request, Response} from "express";
import {CassandraService} from "./cassandra/cassandra-service";

const app = express();
const players = [{id: 1, name: 'Rakesh'}, {id: 2, name: 'Monica'}];

app.use(cors());

app.get('/', (request: Request, response: Response) => {
    console.log("Got request...");
    response.send('Hello World!!');
});

app.get('/players', (request: Request, response: Response) => {
    let service: CassandraService = new CassandraService();
    service.query();
    response.json(players);
});

app.get('/players/:id', (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    response.json(players.filter(p => p.id === id)[0]);
});

app.post('/batch/create', (request: Request, response: Response) => {
    console.log("request.paramsss", request.params);
    response.json(players);
});

app.listen(3000);

console.log("Server is running");