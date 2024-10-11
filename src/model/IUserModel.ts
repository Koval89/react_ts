import {IHairModel} from "./IHairModel";
import {IAddressModel} from "./IAddressModel";
import {IBankModel} from "./IBankModel";
import {ICompanyModel} from "./ICompanyModel";
import {ICoinVodel} from "./ICoinVodel";

export interface IUserModel{
    "id": number,
    "firstName": string,
    "lastName": string,
    "maidenName": string,
    "age": string,
    "gender": string,
    "email": string,
    "phone": string,
    "username": string,
    "password": string,
    "birthDate": string,
    "image": string,
    "bloodGroup": string,
    "height": number,
    "weight": number,
    "eyeColor": string,
    "hair": IHairModel,
    "ip": string,
    "address": IAddressModel,
    "macAddress": string,
    "university": string,
    "bank": IBankModel,
    "company": ICompanyModel,
    "ein": string,
    "ssn": string,
    "userAgent": string,
    "crypto": ICoinVodel,
    "role": string
}