import { API } from "./api";

export default{
    getAccount(userId){
        const api=new API();
        return api.http('get',api.user.account+`?userId=${userId}`);
    }
}