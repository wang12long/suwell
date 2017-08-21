// 判断是否空值,并添加到相应的字段
// value 需要判断的值
// obj 需要添加的对象
// field 插入obj对象的key
export function checkOfNull (value,obj='',field='') {
   if(obj!='' && field != ''){
	 	if( typeof(value) !== 'undefined' && value!==''){
   			obj[field]=value;
   		}
    	return obj;
   }
    if( typeof(value) === 'undefined' || value=== null ){
   			return ''
   	}
    return value;
}