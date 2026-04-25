import type { Request, Response } from 'express';
import type { LocationStringRequest } from '../interface/locationInterface.js';
import axios from 'axios';


const getGeoCode = async (req: Request, res: Response) => {
    const location : LocationStringRequest = req.body;
    try {
        const query = location.location.split(' ').join(',');
        const response = await axios.get(`   https://nominatim.openstreetmap.org/search?q=${query}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
};


export default getGeoCode;








