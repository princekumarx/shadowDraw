function shadowDraw(options){

    let image = document.querySelectorAll('.shadow');
    console.log(image.width);
 
    if(options.shadow_type === 'hard'){
options.shadow_type = '1px';
    }
    else{
      options.shadow_type = '15px';
    }
    
    image.forEach((image)=>{
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0)`;
        if(options.padding){
            image.style.padding = '1em';

        }
        image.style.width =   `${options.widths}px` ;
        image.style.height =   `${options.height}px` ;


    })
    console.log('load')
}
let options = {
    shadow_type:'hard',
    padding:true,
    widths:200,
    height:200
};

module.exports.shadowDraw = shadowDraw;

