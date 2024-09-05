import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { Payload } from "../models/interfaces/user/auth/Payload";

export function isAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // Acessar token JWT
    const authToken = request.headers.authorization;
    
    if (!authToken) {
        return response.status(401).end();
    }
    
    const [, token] = authToken.split(" ");
    // const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
    // console.log(process.env.JWT_SECRET);
    console.log(request.user_id);

    try {
        // Validar token
        const { sub } = verify(token, process.env.JWT_SECRET) as Payload;
        
        request.user_id = sub;
        return next(); // Requisição prossegue
    } catch (error) {
        return response.sendStatus(401).end();
    }
}