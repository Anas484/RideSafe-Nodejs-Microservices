


export interface LocationStringRequest {
    location: string;
}



export interface DriverLocationRequest {
    driverId: string;
    latitude: number;
    longitude: number;
}



export interface DriverLocationQuery {
    latitude: number;
    longitude: number;
    radius: number;
}