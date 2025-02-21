import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

app.post('/signup', (req, res) => { 
    
