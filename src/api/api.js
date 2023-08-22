class API {
    baseURL='http://39.101.1.122:8080';
    //包括用户信息、用户登录两大api模块
    user={
        Login: 'http://39.101.1.122:8080/user/login',//登录 POST
        Register: 'http://39.101.1.122:8080/user/register',//注册 POST
        init: 'http://39.101.1.122:8080/user/init',//初始化 POST
        account: 'http://39.101.1.122:8080/user/account',//账户余额 GET
        power: 'http://39.101.1.122:8080/user/power'//功率信息 GET
    };
    //销售品状态api模块
    offer= {
        offer: 'http://39.101.1.122:8080/offer',//销售品列表 GET
        publish: 'http://39.101.1.122:8080/offer/publish'//发布销售品 POST
    };
    //订单状态api模块
    order= {
        publish: 'http://39.101.1.122:8080/order/publish',//订单发起 POST
        commit: 'http://39.101.1.122:8080/order/commit',//卖方提交 POST
        pay: 'http://39.101.1.122:8080/order/pay',//买家付款 POST
        order: 'http://39.101.1.122:8080/order'//订单列表 GET
    };
    //管理员Web页面api模块
    admin= {
        user: 'http://39.101.1.122:8080/admin/user',//查询用户 GET
        offer: 'http://39.101.1.122:8080/admin/offer',//需求列表 GET
        order: 'http://39.101.1.122:8080/admin/order'//订单列表 GET
    };
    http(method,path,sendData=undefined,timeout=10000,errMsg='网络错误，请检查网络连接！',
    headers={
        type:[
            'Content-Type'
        ],
        value:[
            'text/json'
        ]
    }){
        return new Promise((resolve,reject)=>{
            let post=new XMLHttpRequest();
            post.timeout=timeout;
            post.addEventListener('readystatechange', function(){
                if(this.readyState==4){
                    resolve(this.responseText);
                }
            })
            post.addEventListener('timeout',function(){
                reject(errMsg);
            })
            post.open(method,path);
            //post.setRequestHeader(contentType);
            for(let i=0;i<headers.type.length;i++){
                post.setRequestHeader(headers.type[i],headers.value[i]);
            }
            post.send(sendData);
        })
    }
}

export {
    API
}