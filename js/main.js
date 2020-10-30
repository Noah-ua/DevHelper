$(document).ready( function()
{
	listeners();
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
function listeners()
{
	$('#sendToken').click(function()
    {
        console.log('click');
        //const siteKey = $('#siteKey').val();
        const siteKey = '6LdnSJQUAAAAAOxuMZev7Wtq4RrffpQmEzm2h1Mc';
        //const siteUrl = $('#siteUrl').val();
        const siteUrl = 'https://www.trustpilot.com/evaluate/www.google.com?stars=5';
        const apikey = 'c2f975b79b16b14b802d2f46d6a38645';
        let link = `https://rucaptcha.com/in.php?key=${apikey}&method=userrecaptcha&googlekey=${siteKey}&pageurl=${siteUrl}&json=1`;
        createTask(link,siteKey,siteUrl,apikey);
    });
    function createTask(link,siteKey,siteUrl,apikey)
    {
        xhr(link,"GET",function (body) {
            try
            {
                let obj = JSON.parse(body);
                console.log(obj);
                if(obj.status == 1)
                    checkTask(obj.request,apikey);
            }
            catch(e) {console.log(e)}
        });
    }
    function checkTask(id,apikey)
    {
        let link = `https://rucaptcha.com/res.php?json=1&id=${id}&action=get&key=${apikey}`;
        xhr(link,'GET',function(body){
            try
            {
                console.log(body);
                $('#ruToken').val(body);
                let obj = JSON.parse(body);
                if(obj.status == 0)
                	setTimeout(checkTask,4000,id,apikey);
            }
            catch(e) {console.log(e)}
        });
    }

    function xhr(link,type,cb,body)
    {
        let i = new XMLHttpRequest();
        i.open(type , link , true);
        i.timeout = 15000;
        //i.setRequestHeader(p[1],p[0]);
        i.ontimeout = function()
        {}
        i.onerror = function(err)
        {}
        i.onreadystatechange = function()
        {
            if(i.readyState == 4)
            {
                if(i.status == 200)
                {
                    //let obj = JSON.parse(i.responseText);
                    cb(i.responseText);
                }
            }
        }
        if(type == 'POST')
            i.send(body);
        else
            i.send();
    }
}