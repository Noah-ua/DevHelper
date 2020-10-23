$(document).ready( function()
{
	
	//start();
});
function getCookies(domain, name,callback) 
{
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if(callback)
    	{
    		callback(cookie.value);
    	};
    });
};
window.LootCookies = '';
window.getCookiesAll = function(url,callback) 
{
    chrome.cookies.getAll({"url": url}, function(cookie) {
        if(callback)
    	{
    		let arr = cookie;
    		let allCookies = '';
    		for(let i = 0; i < arr.length; i++)
			{
				if(i == arr.length-1)
					allCookies += arr[i].name+'='+arr[i].value;
				else
					allCookies += arr[i].name+'='+arr[i].value+'; ';
			}
			window.LootCookies = allCookies;
			callback(allCookies);
    	};

    });
};

function parsCircle()
{

	function onePage()
	{
		let xhr = new XMLHttpRequest();
	    xhr.open('GET' , link , true);
	    //xhr.setRequestHeader('content-type', 'application/json');
	    xhr.ontimeout = function()
	    {

	    }
	    xhr.onerror = function(err)
	    {

	    }
	    xhr.onreadystatechange = function()
	    {
	        if(xhr.readyState == 4)
	        {
	            if(xhr.status == 200)
	            {
	            	try
	            	{
		               
                	}
                	catch(err) {}
	            }
	            else
            	{
            		//alert('parser must be fixed');
            	}
	        }
	    }
	    RequestHeaders.change(link,
    	{
      	 //origin : '',https://tryskins.ru/site/items?ItemsFilter%5Btype%5D=3&ItemsFilter%5Bservice1%5D=d_showlootfarm&ItemsFilter%5Bservice1Minutes%5D=123&ItemsFilter%5Bservice1CountFrom%5D=&ItemsFilter%5Bservice1CountTo%5D=&ItemsFilter%5BsalesFrom%5D=&ItemsFilter%5Bservice2%5D=d_showtradeitd&ItemsFilter%5Bservice2Minutes%5D=123&ItemsFilter%5Bservice2CountFrom%5D=&ItemsFilter%5Bservice2CountTo%5D=&ItemsFilter%5Btimeout%5D=5&d_showunstablelootfarmd1=0&d_showoverstocklootfarmd1=0&d_showunstabletradeitd2=1&d_showoverstocktradeitd2=1&page=2&per-page=30
	        Referer : 'https://tryskins.ru/ru/site/items?ItemsFilter%5Btype%5D=2&ItemsFilter%5Bservice1%5D=d_showlootfarm&ItemsFilter%5Bservice1Minutes%5D=&ItemsFilter%5Bservice1CountFrom%5D=&ItemsFilter%5Bservice1CountTo%5D=&ItemsFilter%5BsalesFrom%5D=&ItemsFilter%5Bservice2%5D=d_showtradeitd&ItemsFilter%5Bservice2Minutes%5D=&ItemsFilter%5Bservice2CountFrom%5D=&ItemsFilter%5Bservice2CountTo%5D=&ItemsFilter%5Btimeout%5D=5&d_showunstablelootfarmd1=0&d_showoverstocklootfarmd1=0&d_showunstabletradeitd2=0&d_showoverstocktradeitd2=0'//link
	     });
	    try
	    {
	    	xhr.send();
    	}
    	catch(err) {};
    }
    function tick()
    {
		
    }
    tick();
}