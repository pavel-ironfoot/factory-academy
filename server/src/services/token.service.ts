import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from "../common/data";
import jwt from 'jsonwebtoken';

class TokenService {
    payload:{username: string,role:string} = { 
        username: 'some name', 
        role: 'user have some speciality' 
      };

    generateTokens(): any {
        const accessToken = jwt.sign(this.payload, JWT_ACCESS_SECRET, { expiresIn: '30d' });
        return {
            accessToken,
        }
    }

}

export const tokenService = new TokenService();
