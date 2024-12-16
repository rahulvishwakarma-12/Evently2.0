"use server"

import User from "../database/models/user.model"
import { connectToDatabase } from "../database"

export async function Createuser(user:any) {
    try {
        await connectToDatabase();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch(error){

        console.log(error);
    }
}
