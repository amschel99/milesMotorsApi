import joi from 'joi'

export const registerSchema= joi.object({

name:joi.string(),

location:joi.string(),
mobile:joi.string(),

description:joi.string(),

facebook:joi.string(),

twitter:joi.string(),

instagram:joi.string(),


email: joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','org', 'me', 'live'] } }),

password: joi.string()
        .pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)),

      



})


//login schema below

//I don't think there is a need for this, because who in the first place allowed dummy values to be inserted in the database, Ofcourse the developer in me won't allow that to happen

