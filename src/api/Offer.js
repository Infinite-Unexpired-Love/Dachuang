import { API } from "./api";

export default{
    handlePost(data){
        const api=new API();
        return api.http('post',api.offer.publish,data)
    }
}