import express, {Request, Response} from 'express';
import BotService from '../services/botService';
const botService = new BotService();

export default class BotController {
    private botService: BotService;
    constructor() {
        this.botService = botService;
    }

    public async getBotStatus(req: Request, res: Response): Promise<void> {
        console.log(req.body)
        try {
            const status = await this.botService.handleWhatsAppMetaCallback(req, res);
            res.status(200).json(status);
        } catch (error) {
            console.error('Error getting bot status:', error);
            res.status(500).json({ error: 'Failed to get bot status' });
        }
    }
}