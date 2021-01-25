
import express from 'express';
import SaveUser from './functions/user';

interface callback {
    (request: express.Request, response: express.Response): void;
}

type Routes = {
    path: string;
    type: "GET" | "POST" | "DELETE" | "PUT";
    callback: callback;
}[];

export const routes: Routes = [
    { path: "/", type: "GET", callback: (requst, response) => { response.send("Welcome to home page.") } },
    { path: "/test_user", type: "GET", callback: SaveUser },
];
