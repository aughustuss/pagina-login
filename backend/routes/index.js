import user from './userRoutes.js';
import barber from './barberRoutes.js';
import refreshToken from './refreshTokenRoute.js';
import express from "express";


const routes = (app) => {
    app.route('/').get((req, res) => {
      res.status(200).send({titulo: "Curso de node"})
    })
  
    app.use(
      express.json(),
      user,
      barber,
      refreshToken
    )
  }
  
  export default routes