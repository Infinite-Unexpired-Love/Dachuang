import {API} from './api'

const api=new API();

class Home{
    constructer(userId){
        this.userId=userId;
    }
    check(){
        let http = api.http('get',api.user.account+`/?userId=${this.userId}`);
        return new Promise((resolve,reject)=>{
            http
            .then(data=>{
                if(data.data==null)
                    reject();
                else
                    resolve();
            })
            .catch(err=>{
                reject();
            })
        })
    }
    init(){
        return Promise.all(
            [
                api.http('get',api.user.power+`/?userId=${this.userId}`),
                api.http('get',api.offer.offer+`/?buyerId=${this.userId}`)
        ])
    }

}

export {
    Home
}