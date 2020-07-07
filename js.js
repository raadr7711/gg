function show_sharing(id)
{art=fetch_object("sharing_art"+id);art.className="s_sharing_tools";}
function hide_sharing(id)
{art=fetch_object("sharing_top"+id);art.className="top_tools";}
function show_top(id)
{art=fetch_object("sharing_top"+id);art.className="s_top_tools";}
function hide_top(id)
{art=fetch_object("sharing_top"+id);art.className="top_tools";}
function fetch_object(idname)
{if(document.getElementById)
{return document.getElementById(idname);}
else if(document.all)
{return document.all[idname];}
else if(document.layers)
{return document.layers[idname];}
else
{return null;}}
function select_news_item(id)
{if(id!=50)
{obj=fetch_object("news_item"+id);if(obj.className!='selected_news_item')
{obj.className='selected_news_item';id=id+1;obj=fetch_object("news_item"+id);obj.className='first_news_item';}
else if(id==1)
{obj.className='first_news_item';id=id+1;obj=fetch_object("news_item"+id);obj.className='news_item';}
else
{tmp_obj=fetch_object("news_item"+(id-1));if(tmp_obj.className=='selected_news_item')
{obj.className='first_news_item';id=id+1;obj=fetch_object("news_item"+id);obj.className='news_item';}
else
{obj.className='news_item';id=id+1;obj=fetch_object("news_item"+id);obj.className='news_item';}}}}
function show_menu_item(id)
{for(i=1;i<3;i++)
{menu_obj=fetch_object("menu_item"+i);if(id==i)
{menu_obj.style.display="block";}
else
{menu_obj.style.display="none";}}}
function hide_all()
{for(i=1;i<3;i++)
{menu_obj=fetch_object("menu_item"+i);menu_obj.style.display="none";}}
function get_google()
{(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function()
{(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})
(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-40854643-3','auto');ga('send','pageview');}
function get_ads()
{(function(R,e,c,s,W,i,d){R['RecsWidgetObject']=W;R[W]=R[W]||function(){(R[W].q=R[W].q||[]).push(arguments)},R[W].l=1*new Date();i=e.createElement(c),d=e.getElementsByTagName(c)[0];i.async=1;i.src=s;d.parentNode.insertBefore(i,d)})(window,document,'script','//widget.yallarec.com/_yalla_loader.js','__recsWidget');__recsWidget('createWidget',{wwei:'Mpi_WIDGET_115437',pubid:180837,webid:160356,wid:115437,on:'yallarec'});}
function get_arts_update()
{xmlHttp3=GetXmlHttpObject()
if(xmlHttp3==null)
{return true;}
rand=Math.random();url="get_last_art.php?id=2&"+rand.toString();xmlHttp3.onreadystatechange=artsUpdate;xmlHttp3.open("GET",url,true);xmlHttp3.send(null);arts_sec=fetch_object("art_section");if(typeof arts_sec.style.opacity=="string")
{arts_sec.style.opacity=0.5;}
else
{arts_sec.filters.alpha.opacity=50;}
return false;}
function artsUpdate()
{if(xmlHttp3.readyState==4)
{response=xmlHttp3.responseText;update_count++;if(xmlHttp3.status==200)
{arts_sec=fetch_object("art_section");arts_sec.innerHTML=response;update_arts=1;if(typeof arts_sec.style.opacity=="string")
{arts_sec.style.opacity=1;}
else
{arts_sec.filters.alpha.opacity=100;}}
hide_bar();}}
function get_most_read()
{xmlHttp5=GetXmlHttpObject()
if(xmlHttp5==null)
{return true;}
rand=Math.random();url="top_items.php?rand="+rand.toString();xmlHttp5.onreadystatechange=mostreadUpdate;xmlHttp5.open("GET",url,true);xmlHttp5.send(null);most_sec=fetch_object("main_news_section");if(typeof most_sec.style.opacity=="string")
{most_sec.style.opacity=0.5;}
else
{most_sec.filters.alpha.opacity=50;}
return false;}
function mostreadUpdate()
{if(xmlHttp5.readyState==4)
{update_count++;response=xmlHttp5.responseText;if(xmlHttp5.status==200)
{most_sec=fetch_object("main_news_section");most_sec.innerHTML=response;update_main=1;if(typeof most_sec.style.opacity=="string")
{most_sec.style.opacity=1;}
else
{most_sec.filters.alpha.opacity=100;}}
hide_bar();}}
function get_news_update()
{xmlHttp2=GetXmlHttpObject()
if(xmlHttp2==null)
{return true;}
rand=Math.random();url="get_last_news.php?id=1&rand="+rand.toString();xmlHttp2.onreadystatechange=newsUpdate;xmlHttp2.open("GET",url,true);xmlHttp2.send(null);news_sec=fetch_object("news_section");if(typeof news_sec.style.opacity=="string")
{news_sec.style.opacity=0.5;}
else
{news_sec.filters.alpha.opacity=50;}
return false;}
function newsUpdate()
{if(xmlHttp2.readyState==4)
{update_count++;response=xmlHttp2.responseText;if(xmlHttp2.status==200)
{news_sec=fetch_object("news_section");news_sec.innerHTML=response;update_news=1;news_sec=fetch_object("news_section");if(typeof news_sec.style.opacity=="string")
{news_sec.style.opacity=1;get_google();get_ads();}
else
{news_sec.filters.alpha.opacity=100;}}
hide_bar();}}
function GetXmlHttpObject()
{var xmlHttp=null;try
{xmlHttp=new XMLHttpRequest();}
catch(e)
{try
{xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");}
catch(e)
{xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}}
return xmlHttp;}
var update_news=0;var update_arts=0;var update_main=0;var update_count=0;var cron_jop="";function auto_update()
{update_news=0;update_arts=0;update_main=0;update_count=0;bar=fetch_object("update_bar");bar.innerHTML=update_bar_content4;bar.className="update_bar";get_news_update();get_arts_update();get_most_read();cron_jop=setTimeout("auto_update();",200000);}
function time_counter(i)
{if(i<=0)
{return;}
bar=fetch_object("update_bar");if(i<0)
{bar.innerHTML=update_bar_content;return;}
bar.innerHTML=update_bar_content2+i+update_bar_content3;setTimeout("time_counter("+(i-1)+");",1000);}
function hide_bar()
{if(update_count==3)
{if(update_news==1&&update_arts==1&&update_main==1)
{bar=fetch_object("update_bar");bar.className="hidden_update_bar";}
else
{clearTimeout(cron_jop);time_counter(60);cron_jop=setTimeout("auto_update();",60000);}}}
function scrolling()
{var scrollTop=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;var mar=62-scrollTop;obj=fetch_object("right_ads");if(mar>=0)
{obj.style.marginTop=''+mar+'px';}
else
{obj.style.marginTop='0px';}
obj=fetch_object("left_ads");if(mar>=0)
{obj.style.marginTop=''+mar+'px';}
else
{obj.style.marginTop='0px';}}
var tWidth='890px';var tHeight='26px';var moStop=true;var fontfamily='arial,sans-serif';var tSpeed=3;var cps=-tSpeed;var aw,mq;var fsz=17;var lefttime;function startticker()
{var tick='<div style="position:relative;width:'+tWidth+';height:'+tHeight+';overflow:hidden;"';if(moStop)
{tick+=' onmouseover="cps=0" onmouseout="cps=-tSpeed"';}
tick+='><div id="mq" style="position:absolute;right:0px;top:0px;font-family:'+fontfamily+';font-size:'+fsz+'px;white-space:nowrap;"></div></div>';fetch_object('ticker').innerHTML=tick;mq=fetch_object("mq");mq.style.right=(10+parseInt(tWidth))+"px";mq.innerHTML='<span id="tx">'+content+'</span>';aw=fetch_object("tx").offsetWidth;lefttime=setInterval("scrollticker()",50);}
function scrollticker()
{mq.style.right=(parseInt(mq.style.right)>(-10-aw))?mq.style.right=parseInt(mq.style.right)+cps+"px":parseInt(tWidth)+10+"px";}
function change_sort(i)
{if(i==1)
{obj=fetch_object("sites1");obj.style.display='block';obj=fetch_object("sites2");obj.style.display='none';}
else
{obj=fetch_object("sites2");obj.style.display='block';obj=fetch_object("sites1");obj.style.display='none';}}
function disable_all(num)
{for(i=1;i<=num;i++)
{obj=fetch_object("source"+i);obj.disabled=true;}}
function enable_all(num)
{for(i=1;i<=num;i++)
{obj=fetch_object("source"+i);obj.disabled=false;}}
window.onscroll=scrolling;