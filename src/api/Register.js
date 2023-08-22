import {API} from './api'
const api=new API();
class Register{
    constructor(uname,passwd,a,b,low,up){
        this.uname=uname;
        this.passwd=passwd;
        this.a=a;
        this.b=b;
        this.low=low;
        this.up=up;
        this.isErr=undefined;
    };
    register(){
        const data={
            username:this.uname,
            password:this.passwd
        };
        return api.http('post',api.user.Register,JSON.stringify(data));
    };
    init(userId){
        const data={
            userId,
            an: this.a,
            bn: this.b,
            initLowerPn:this.low,
            initUpperPn:this.up
        };
        return api.http('post',api.user.init,JSON.stringify(data));
    };
    async handleRegister(){
        let data=await this.register()
        .then(res=>{
            if(res.code==0){
                return this.init(JSON.parse(res).data.userId)
            }
            else{
                throw Error('状态码错误！');
            }
        })
        .then(res=>{
            this.isErr=false;
            return res;
        })
        .catch(err=>{
            this.isErr=true;
            return err;
        })
        return data;
    };
    
}
export {
    Register
}