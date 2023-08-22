import {API} from './api'
const api=new API();
class Login{
    constructor(uname,passwd){
        this.uname=uname;
        this.passwd=passwd;
        this.isErr=undefined;
    };
    async handleLogin(){
        const data={
                    username:this.uname,
                    password:this.passwd
                };
        const res= await api.http('post',api.user.Login,JSON.stringify(data))
        .then(res=>{
            this.isErr=false;
            return res;
        })
        .catch(err=>{
            this.isErr=true;
            return err;
        });
        return res;
    }
    
}
export {
    Login
}