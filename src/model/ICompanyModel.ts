import {IDepartmentAddressModel} from "./IDepartmentAddressModel";

export interface ICompanyModel{
    "department": string,
    "name":string,
    "title": string,
    "address": IDepartmentAddressModel,
    "country": string
    }