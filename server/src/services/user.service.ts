import { factoryAreaLogin, factorySectionsData, paintingAreaDetails } from "../common/data";
import { FactoryAreaLoginType, FactorySections, PaintingAreaDetailType } from "../common/types-and-interfaces";
import { tokenService } from "./token.service";

export class UserService {
    factorySectionsLogin: FactoryAreaLoginType[] = factoryAreaLogin;
    factorySections: FactorySections[] = factorySectionsData;
    factoryDetails: PaintingAreaDetailType[] = paintingAreaDetails;

    async userIn(password: string, area: string) {
        console.log(password, area)
        const newToken = tokenService.generateTokens();
        const oneLoginUser = this.factorySectionsLogin.filter(elem=>elem.password===password && elem.area===area)
        console.log(oneLoginUser)
        if(oneLoginUser.length===1){
            return {
                newToken: newToken,
                area: oneLoginUser[0].area
                        }
        }
        return 'fuck, who are you?';
    }

    async allSections(){
        return this.factorySections;
    }

    async allDetails(){
        return this.factoryDetails;
    }

    async detailInformations(number:string){
        const currentDetail = this.factoryDetails.filter(elem=>elem.number === number);
        return currentDetail[0];
    }

    async editDetailInfo(detailNumber: string, betweenHugs: string, betweenDetails: string, detailsAmount: string, blowValue:boolean, cleanHugsValue:boolean, corkValue:boolean){
        
        const searchDetails = this.factoryDetails.map(elem=>{
            if(elem.number===detailNumber){
                elem.hangingInformation1 = `${detailsAmount} ${betweenHugs} ${betweenDetails}`; 
                elem.blow= blowValue;
                elem.hugCleaning = cleanHugsValue;
                elem.cork = corkValue;
            }
            return elem;
        });
        this.factoryDetails = [...searchDetails];
        return true;
    }
}

export const userService = new UserService();