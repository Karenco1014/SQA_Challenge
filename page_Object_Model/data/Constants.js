import dotenv from 'dotenv'
dotenv.config()


export const URLS = {
    LOGIN_URL: process.env.URL

}

export const CREDENTIALS  = {
    STANDAR_USER_LOGIN: {
        USERNAME: process.env.STANDARD_USER,
        PASSWORD: process.env.STANDARD_PASSWORD

    },
    STANDARD_INVALID_USER_LOGIN:{
        USERNAME: 'invalid_user',
        PASSWORD: process.env.STANDARD_PASSWORD


    }
}

export const MESSAGES = {
    ERROR:{
        LOGIN_FORM:{
            USERNAME_INVALID: 'Epic sadface: Username and password do not match any user in this service'
            
        }


    }

}

export const CHECKOUT = {
    CHECKOUT_FORM:{
            FIRSTNAME: 'Karen',
            LASTNAME: 'Correa',
            CODEPOSTAL: '10001'
    }
}