var recentButton=document.getElementById("recent_button");
var zixuanguButton=document.getElementById("zixuangu_button");
var zixuangu=document.getElementById("zixuangu");
var zuijinfangwen=document.getElementById("zuijinfangwen");
var chengjiaoButton=document.getElementById("chengjiao_button");
var junjiaButton=document.getElementById("junjia_button");
var chengjiaoFenbu=document.getElementById("chengjiao_fenbu");
var junjia=document.getElementById("junjia");
var selected=document.getElementById("selected");
//var selectButton=document.getElementById("select_button");
var compareContent=document.getElementById("compare_content");
var chooseContent=document.getElementById("choose_content");
var choosen=document.getElementById("choosen");
var selectButton=document.getElementById("select_button");
var chooseButton=document.getElementById("choose_button");
var chengjiaoJunjia=document.getElementById("content_chengjiao_junjia");
var contentStockMarket=document.getElementById("content_stockmarket");
function recentClick()
{
	zuijinfangwen.style.display="block";
    zixuangu.style.display="none";
    recentButton.className="choose active";
    zixuanguButton.className="choose";
}
function zixuanguClick()
{
	zuijinfangwen.style.display="none";
    zixuangu.style.display="block";
    recentButton.className="choose";
    zixuanguButton.className="choose active";
}
function chengjiaoClick()
{
    chengjiaoButton.className="choose active";
    junjiaButton.className="choose";
    chengjiaoFenbu.style.display="block";
    junjia.style.display="none";
    chengjiaoJunjia.style.height="427px";
    //chengjiaoJunjia.style.backgroundColor="red";
    contentStockMarket.style.height="914px";

}
function junjiaClick()
{
    chengjiaoButton.className="choose";
    junjiaButton.className="choose active";
    chengjiaoFenbu.style.display="none";
    junjia.style.display="block";
    chengjiaoJunjia.style.height="437px";
    //chengjiaoJunjia.style.backgroundColor="red";
    contentStockMarket.style.height="924px";

}

function selectFn()
{
    if(compareContent.style.display=="none")
    {
        compareContent.style.display="block";
        selectButton.className="trans";

    }
    else{
        compareContent.style.display="none";
        selectButton.className="select-button";
    }
    
}


function chooseFn()
{
    if(chooseContent.style.display=="none")
    {
        chooseContent.style.display="block";
        chooseButton.className="trans";


    }
    else{
        chooseContent.style.display="none";
        chooseButton.className="select-button";
    }
    
}
function mouseOverFn(choice)
{
   choice.style.backgroundColor="#f0f0f0";
   choice.style.borderColor="#f0f0f0";
}
function mouseOutFn(choice)
{
    choice.style.backgroundColor="#fff";
    choice.style.borderColor="#fff";
}
function selectContent(choice)
{
    selected.innerHTML=choice.innerHTML;
    compareContent.style.display="none";
    selectButton.className="select-button";
}

function chooseCon(choice)
{
    choosen.innerHTML=choice.innerHTML;
    chooseContent.style.display="none";
    chooseButton.className="select-button";
}