import express from 'express';

import cors from 'cors';

import mongoose from 'mongoose';

import routes from './routes';



class App {
    constructor(){

    this.app = express();

        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);

    mongoose.connect('mongodb+srv://dbjaidson:jaidson2020@cluster0-authp.mongodb.net/test?retryWrites=true&w=majority');
 
    this.middlewares();
    this.routes();
 }

middlewares(){
    this.app.use(express.json());
    this.app.use(cors());

}

routes(){
    this.app.use(routes);
    
  }
}

export default new App().app;