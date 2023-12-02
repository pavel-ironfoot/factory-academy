import express, {Request,Response, NextFunction} from "express";
import { userService } from "../services";
const path = require('path');
const fs = require('fs');

export class UserController {
    router: any = express.Router();

    constructor(){
        this.router.post('/login', this.userLogIn);
        
        this.router.get('/factory-sections', this.factorySections);
        this.router.get('/one-area/:pictureName', this.sendOneAreaPhoto);
        this.router.get('/detail-photo/:detailName', this.sendOneDetailPhoto);
        this.router.get('/factory-all-details', this.factoryDetails);
        this.router.get('/one-detail-information/:number', this.oneDetailInformation);

        this.router.patch('/one-detail-information/edit', this.DetailInformationChange);
    }

    getContentType(filePath:string) {
        const extname = path.extname(filePath);
        switch (extname) {
            case '.jpg':
                return 'image/jpg';
            case '.png':
                return 'image/png';
            case '.gif':
                return 'image/gif';
            default:
                return 'application/octet-stream';
        }
    }

    factorySections = async (req: Request, res: Response, next: NextFunction) => {
        const loginUser = await userService.allSections();
        res.send(loginUser);
    }

    factoryDetails = async (req: Request, res: Response, next: NextFunction) => {
        const loginUser = await userService.allDetails();
        res.send(loginUser);
    }

    oneDetailInformation = async (req: Request, res: Response, next: NextFunction) => {
        const getResult = await userService.detailInformations(req.params.number);
        res.send(getResult);
    }

    sendOneAreaPhoto = (req: Request, res: Response, next: NextFunction) => {
        try {
            const pictureName = req.params.pictureName;
            const filePath = path.join(__dirname, './../images/one', pictureName);
    
            fs.readFile(filePath, (err:any, data: any) => {
                if (err) {
                    res.status(404).send('File not found');
                } else {
                    const contentType = this.getContentType(filePath);
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(data);
                }
            });
        } catch (error:any) {
            console.error('Error:', error.message);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    sendOneDetailPhoto = (req: Request, res: Response, next: NextFunction) => {
        try {
            const detailName = req.params.detailName;
            const filePath = path.join(__dirname, './../images', detailName);
    
            fs.readFile(filePath, (err:any, data: any) => {
                if (err) {
                    res.status(404).send('File not found');
                } else {
                    const contentType = this.getContentType(filePath);
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(data);
                }
            });
        } catch (error:any) {
            console.error('Error:', error.message);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    
    userLogIn = async (req: Request, res: Response, next: NextFunction) => {
        const {password, area} = req.body;
        const loginUser = await userService.userIn(password, area);
        res.send(loginUser);
    }

    DetailInformationChange = async (req: Request, res: Response, next: NextFunction) => {
        const { detailNumber, betweenHugs, betweenDetails, detailsAmount, blowValue, cleanHugsValue, corkValue} = req.body;
        const editDetail = await userService.editDetailInfo(
            detailNumber,
             betweenHugs,
              betweenDetails,
               detailsAmount,
               blowValue,
               cleanHugsValue,
               corkValue,
               );
        res.send(editDetail);
    }

}


export const userController = new UserController();
