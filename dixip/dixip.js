/*  DIXIP
29.11.2015 v 0.1
13.01.2017 v 0.2
04.11.202022 v 0.3
mail@itdix.net
*/


jQuery(document).ready(function(){
  //EVENT IMAGE
  jQuery("img.dixip ").dixip();

}) ;
//************************************************************

//DIXIP WIN OPEN
(function(jQuery){
  jQuery.fn.dixip = function (dixip_get=""){
    var u_index_element=0;
    var u_image_pading=20;
    var _selector=this;
    var _Images=(jQuery(_selector));
    //console.log(this); // jQuery
     //console.log(this.length); // число элементов
    jQuery(this).click(function(){
      //************************************************************
	  //Не обрабатыват ькартинки nodixip
	  var ImgClass=jQuery(this).attr('class');
	  if(ImgClass!=undefined){
		  if(ImgClass.indexOf('nodixip')>0){
			  return false;
		  }
	  }
      //************************************************************
      //console.log(jQuery(_selector).index(this));
      dixip_wopen(jQuery(_selector).index(this));

    });


//************************************************************
//DIXIP WIN OPEN
function dixip_wopen(u_ind){
    u_index_element=u_ind;
    //console.log(_Images);
    var u_el=_Images.eq(u_ind);
    var  this_img=u_el.attr('src');
    var  title=u_el.attr('title');
    if(title==undefined) title="";
    /* HTML */
    var dph_win='<div class="dixip-wraper">';
    dph_win+='<div class="dixip-bg"> ';

    dph_win+='<p>'+title+'</p>';
    dph_win+='<div class="dixip-close"></div>';
    dph_win+='<img src="'+this_img+'"> ';
    dph_win+='<div class="button-prev"></div>';
    dph_win+='<div class="button-next"></div>';
    dph_win+='</div>';
    dph_win+='</div>';
    //************************************************************
    /* OPEN WIN */
    jQuery("body").append(dph_win);
    //Format Image

    var docW=jQuery('.dixip-wraper').width();
    var docH=jQuery('.dixip-wraper').height();
    docW=docW-u_image_pading*2;
    docH=docH-u_image_pading*2;
    jQuery('.dixip-bg img').css('max-width',docW+'px');
    jQuery('.dixip-bg img').css('max-height',docH+'px');
    var imgW=jQuery('.dixip-wraper img').width();
    var imgH=jQuery('.dixip-wraper img').height();

    //View

    jQuery('.dixip-bg').css({
      "width" : imgW+10,
      "height" : imgH+30,
    });
    jQuery('.dixip-bg img').css({
      "width" : imgW+'px',
      "height" : imgH+'px',
    });






    //imgH=jQuery('.dixip-wraper img').height();
    var iTop=0;
    iTop=(docH-imgH)/2;
    jQuery('.dixip-bg ').css('margin-top',iTop+5+'px');


    if(imgW>imgH){

    }else
    {
      //
    }
    //************************************************************
    //DELETE WIN
    jQuery('.dixip-close').click(function(){
      jQuery('.dixip-wraper').detach();
    }) ;

    jQuery(function(){
      jQuery('.dixip-wraper').click(function(event) {
        if (jQuery(event.target).closest(".dixip-bg").length) return;
        jQuery('.dixip-wraper').detach();
        event.stopPropagation();
      });
    });
    //************************************************************
    //Click Next Image
    jQuery('.dixip-wraper .button-next').click(function(){
      jQuery('.dixip-wraper').detach();
      u_index_element++;
      if(u_index_element>=_Images.length)u_index_element=0;
      dixip_wopen(u_index_element);
    }) ;
    //************************************************************
    //Click Preview Image
    jQuery('.dixip-wraper .button-prev').click(function(){
      jQuery('.dixip-wraper').detach();
      u_index_element--;
      //console.log(u_index_element);
      if(u_index_element<0)u_index_element=_Images.length-1;

      dixip_wopen(u_index_element);
    }) ;
    //************************************************************
}

//************************************************************


    };
})(jQuery);



