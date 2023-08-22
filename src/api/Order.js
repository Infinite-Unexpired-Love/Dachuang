import {API} from './api'
const api=new API();

class Order{
    constructor(buyerId,offerId,salePrice,saleSum,state=1){
        this.buyerId=buyerId;
        this.offerId=offerId;
        // this.salePrice=salePrice;
        // this.saleSum=saleSum;
        // this.state=0;
        this.data={
            salePrice,
            saleSum,
            state
        }
    }
    publish(){
        let data=this.data;
        data.buyerId=this.buyerId;
        data.offerId=this.offerId;
        return api.http('post',api.order.publish,JSON.stringify(data))
    }
    commit(orderId){
        let data=this.data;
        data.state=2;
        data.orderId=orderId;
        return api.http('post',api.order.commit,JSON.stringify(data));
    }
    pay(orderId){
        let data={
            orderId,
            state:3
        }
        return api.http('post',api.order.pay,JSON.stringify(data));
    }
    orders(){
        return api.http('get',api.order.order+`/?userId=${this.buyerId}`);
    }
}

export {
    Order
}