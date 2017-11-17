/* JSON.parse()用于将json格式的字符串转化成对象
text:必需， 一个有效的 JSON 字符串。
reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。 */
/* JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。 */
/* 本地存储: localStorege: (添加存储时key value 都要写, 获取时都要 通过key)
        往本地存储里添加数据: localStorage.setItem( key.value),
        获取本地存储的数据: localStorage.getItem(key)
        移除本地存储的数据: localStorage.removeItem(key) */

/* 1 定义常量key ,将来操作localStorage里的数据时都用key作为标识*/
export const key = "goodsdata";
/* 添加存储*/
/* 数据从buyinfo中传过来,先通过localStorage.getItem()获取数据,然后将字符串格式转化成对象,通过push将新数据添加进去,存储到localStorage前先将数据转化成JSON格式的字符串 */

  //2.0实现数据的添加 val {goodsid:商品id, count:商品数量}(数据在内存中是以json格式的字符串存在)
export function setItem(val) {   
    //1 通过localStorage.getItem(key)从内存获取到原有的数据
    var datastring = localStorage.getItem(key);
    datastring = datastring || "[]"; //最开始时内存可能为空值为undefined无法运算,所以需要或一个空数组,需要将获取到的值转换成对象,添加之后 要再转换成json格式的字符串通过 localStorage.setItem(key,values)保存起来.
    datastring = JSON.parse(datastring)
    //2将新数据通过push添加进去
    datastring.push(val)
    //3 通过 localStorage.setItem(key, JSON.stringify(dataset))将数据保存起来
    localStorage.setItem(key, JSON.stringify(datastring))
  
}

/*3.0 获取存储数据*/

export function getItem() {

    // 将获取到的数据转化成js对象
    var datastring = localStorage.getItem(key);
    datastring = datastring || "[]";
    
    var arr=JSON.parse(datastring)
    // console.log(arr)

    return arr
}

/* 移除存储数据*/
export function removeItem(id) {
    var arr = getItem()
   //    查找arr中的goodsid和传入的参数goodsid一致的数据全部移除
   for(var i=arr.length-1;i>=0;i--){
       if(arr[i].goodsid==id){
        arr.splice(i,1)
       }
   }
   /* 将最新的arr数组保存回localStorage */
   localStorage.setItem(key,JSON.stringify(arr))

}


/* 将从本地存储中获取到的数据装换成 { goodsid:count}形式*/
/*1 将原本数组中goodsid相同的多个对象和并成一个对象resultobj 
    2 如果resultobj里没有此goodsid的数据则将此条数据的键和值添加到当前的resultobj对象中
    3 如果resultobj里有此goodsid则将此条数据的count相加*/
export function getdatalist() {
    var dataobj = getItem(); /* 调用获取数据函数,获取localStorage里的数据 */
    // console.log( typeof dataobj)
    var resultobj = {} 
    for (var i = 0; i <dataobj.length; i++) {
        var item = dataobj[i]; /* item表示数组里的每一条数据对象 */
        // console.log(dataobj[i])

        if (!resultobj[item.goodsid]) {  /* 如果resultobj对象里没有键为goodsid的属性,则添加此属性,属性值为count数量 */
            resultobj[item.goodsid] = item.count; 
        }
        else{
            var count = resultobj[item.goodsid] /*    */
            resultobj[item.goodsid]=count+item.count
        }

    }
    console.log(resultobj)
    
 return resultobj;



}

/* 通过加减号对内存中的数据进行加减*/
export function updatalist(status ){
    // 1 获取到内存中得数据
    var arr = getItem()
    var count=1

    /* 2 判断较新传入的数据类型是减还是加,如果是加则把数据通过push添加打到内存中 */
    if(status.type=="increase"){
        arr.push({goodsid:status.id,count:count})
    //    console.log(2,status.type)
    }
    /*  3 如果是减则判断传入数据的id与内存中的id是否相同,如果相同判断 arr[i].count当前的数量是否是1,如果是则删除这条数据,否组则数据的数量减1  */
    else{
        for(var i=0;i<arr.length;i++){
            var item = arr[i];
            if(item.goodsid==status.id){
                if(arr[i].count==1){
                    arr.splice(i,1)
                    break; //删除一条数据则结束本次循环
                }
                else{
                    arr[i].count= arr[i].count-1;
                    break;
        
                }
    

            }
           
        }
       
    }
    // 添加.减少商品数量后,将数据从新存储在localStorage
    localStorage.setItem(key,JSON.stringify(arr)) 
    // console.log(arr)
        getdatalist() 
    
    
  

}
