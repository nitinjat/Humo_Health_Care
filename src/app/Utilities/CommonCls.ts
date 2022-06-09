export class CommonEntities {
    id: string;
    issue_name: string;
    issue_message: string;
    apiUrls :any = ApisUrls;
 }


 export const envConfig = {
    dev : 'https://localhost:44346/api/'
};

 export const ApisUrls = {
     PostUser : envConfig.dev + 'Users/AddUsers',
     GetUser : envConfig.dev + 'Users/GetUserById?id=',
     GetAllUser : envConfig.dev + 'Users/GetUserList',
     PostQuery : envConfig.dev +'Humo/AddQuery',
     GetQuery: envConfig.dev + 'Humo/GetUserQuery',
     PostProducts : envConfig.dev +'Humo/AddProducts',
     GetProduct: envConfig.dev + 'Humo/GetProducts',
     GetProductsList: envConfig.dev + 'Humo/GetUserQuery',
 };
