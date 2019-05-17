

function priceDigit(str,type){
    
     
    if(type === 'price'){
        if(str !=='' && str !== null && str !== undefined){
            str = str.toString();
            str = str.replace(/\,/g, '');
            var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');
        
            while (objRegex.test(str)) {
                str = str.replace(objRegex, '$1,$2');
            }
        
            return str;
        } 
        return ''
    } else if(type ==='digit'){
        
        if(str !=='' && str !== null && str !== undefined ){
            var res = str.split(','); 
            var a='' ;
            for(var i = 0; i < res.length;i++){
            a += res[i]
            }
            return(Number(a))
        }
        return ''
            
    }
}
 


export default priceDigit;



/*  how can use this function.
- this function get type of mode 
1- price ===> you can send number "123000" and get 123,000
2- digit ===> you can send price format "15,000" and get number like this "15000"

# how can use it:

import priceDigit from diraction.


priceDigit('number','type') ==> example
priceDigit('123456','price') // output ===>  123,456
priceDigit('123,456','digit') // output ===>  123456


*/


 