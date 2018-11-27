/**
 * apply的应用
 * 数组中取最大值最小值
 * 
 * * */

let ary = [23, 34, 24, 12, 35, 36, 14, 25];
const getMinAndMax =(array=[])=>{
    let min = Math.min.apply({},array),
        max=  Math.max.apply({},array);
    return result = Object.assign({},{min,max});
}
getMinAndMax(ary);
console.log('result',result);


/**
 * call的应用  取代数组中的最大值最小值后球平均值
 * 将类数组转化成真正的数组  类数组：1、函数传参数  arguments  2、通过类似 getElementsByTagName等方法获得的标签类数组
 * 
 * 
 * * */

const listToArray =(likeArray)=>{  //ES6下  {...values} 可以拿到所有的参数
    let arrayNew = [];
    try{
        arrayNew = Array.prototype.slice.call(likeArray);// 获得真正的数组
    }catch(e){// ie6-8下使用有兼容性问题
        for(let i=0; i < likeArray.length; i++){
            arrayNew [arrayNew.length]=likeArray[i];
        }
    }
    return arrayNew;
};

const average = (...aryLike)=>{
    aryLike= listToArray(aryLike);// 将类数组数据转化成真正的数组  但是在ES6中的箭头函数中{...rest}可以拿到并且直接转化成真正的数组   所以这行代码可有可无
    Array.prototype.sort.call(aryLike , function (a, b) {
        return a - b;
    });
    // 去掉最大值最小值
    aryLike.shift();
    aryLike.pop();
    return (eval(aryLike.join('+'))/aryLike.length).toFixed(2);// eval函数  传进去的参数是一个字符串  并且返回按照js进行计算的结果
}
let averageScore = average(4,0,4,8,4,100);
console.log(averageScore,'averageScore');



/**
 * call  apply bind 区别
 * call   依次传参数 调用即运行
 * apply  参数为数组 调用即运行
 * bind   绑定但是   依次传参   调用的时候只是绑定   需要手动调用函数
 * * */
const  fn =(a,b)=>{
    return Number(a)+Number(b);
};
console.log(fn.call({},1,2)); // 3
console.log(fn.apply({},[1,2])); //3
console.log( fn.bind({},1,2) ,'绑定但是没有执行');// 无值
console.log((fn.bind({},1,2))()); //3


//  bind  apply call 都是改变this   bind得手动调用一下
let heroName= '亚瑟';
const db ={
    heroName:'后羿',
    age:'18'
};
let obj = {
    heroName:'孙悟空',
    myFun:(function(){
        console.log(this.heroName,'年龄',this.age);
    })
};


// obj.myFun.call(db);　　　　//后羿年龄18

//  　  obj.myFun.apply(db);　　//后羿年龄18

//  　  obj.myFun.bind(db)();　　　//后羿年龄18


let obj2={
    heroName:'孙悟空',
    myFun:(function(){
        console.log(this.heroName,'年龄',this.age);
    }).bind(db)
};
obj2.myFun();//后羿年龄18
