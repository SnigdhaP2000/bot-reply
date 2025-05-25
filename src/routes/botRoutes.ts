import { Router } from "express";
import { Request, Response } from "express";
import BotController from "../controllers/botController";
const botController = new BotController();
const route = Router();

route.get('/whatsapp/meta/callback',  (req, res) => {
    if (
      req.query['hub.mode'] == 'subscribe' &&
      req.query['hub.verify_token'] == ''
    ) {
      res.send(req.query['hub.challenge']);
    } else {
      res.sendStatus(400);
    }
   })

route.post("/whatsapp/meta/callback", botController.getBotStatus);

export default route;