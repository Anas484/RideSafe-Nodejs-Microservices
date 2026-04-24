
export interface UserSignUp {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    password: string;
}



export interface UserLogin {
    email: string;
    password: string;
}



export interface tokenPayload {
    id: string;
    role: string;
}


export interface userDisplay {
    firstName: string;
    lastName: string;
    email: string;
    role: string
}
