import express from "express";
import {Request, Response} from "express";

const app = express();
const players = [{id:1, name: 'Rakesh'},{id:2, name: 'Monica'}];

app.get('/', (req: Request, res: Response) => {
    console.log("Got request...");
    res.send('Hello World!!');
});

app.get('/players', (request: Request, response: Response) => {
    response.json(players);

});

app.get('/players/:id', (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    response.json(players.filter(p=> p.id===id)[0]);
});

app.post('/batch/create', (request: Request, response: Response) => {
    console.log("request.paramsss", request.params);
    response.json(players);
});

app.listen(3000);

console.log("Server is running");