export interface User {
    username: string,
    email: string,
    gender: string,
    dateOfBirth: string,
    image: string,
    address: string,
    phoneNumber: string
    companyInfo: CompanyInfo
}

export interface UserList{
    users:Array<User>,
    totalCount: number,
    sortColumn: "createdDate",
    sortDirection: "desc"
}

export interface CompanyInfo {
    companyName: string,
    address: string,
    phoneNumber: string
}