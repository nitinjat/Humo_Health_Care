export class CommonCls {
    id: string;
    issue_name: string;
    issue_message: string;
    apiUrls :any = ApisUrls;
 }


 export const envConfig = {
    dev : 'http://localhost:3000'
};

 export const ApisUrls = {
     PostUser : envConfig.dev + 'api/AddUsers',
 };
