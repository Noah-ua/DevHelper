let _forURL = null;
let _headers = {
    Referer : null,
    Origin : null,
    'User-Agent' : null
};

class RequestHeaders
{
    static change(forURL, obj)
    {
        _forURL = forURL;
        _headers = {
            Referer : obj.Referer || null,
            Origin : obj.Origin || null,
            'User-Agent' : obj['User-Agent'] || null
        }
    }

    static onBeforeSendHeadersHandler(details)
    {
        //console.log(details);
        let headers = _headers;
        let url = _forURL;
        if(typeof url === 'string')
        {
            if(url === details.url)
            {
                //return { requestHeaders : [{name: "Origin" , value: 'https://'}] };
                let newReferer = headers.Referer;
                if(typeof newReferer === 'string')
                {
                    let gotReferer = false;
                    for(let n in details.requestHeaders)
                    {
                        gotReferer = details.requestHeaders[n].name.toLowerCase() === "referer";
                        if(gotReferer)
                        {
                            details.requestHeaders[n].value = newReferer;
                            //console.log(details.requestHeaders);
                            break;
                        }
                    }
                    if(!gotReferer)
                    {
                        details.requestHeaders.push({ name : 'Referer', value : newReferer });
                    }
                }

                let newOrigin = headers.Origin;
                if(typeof newOrigin === 'string')
                {
                    let gotOrigin = false;
                    for(let n in details.requestHeaders)
                    {
                        gotOrigin = details.requestHeaders[n].name.toLowerCase() === "origin";
                        if(gotOrigin)
                        {
                            details.requestHeaders[n].value = newOrigin;
                            break;
                        }
                    }
                    if(!gotOrigin)
                    {
                        details.requestHeaders.push({ name : 'Origin', value : newOrigin });
                    }
                }

                let newUserAgent = headers['User-Agent'];
                if(typeof newUserAgent === 'string')
                {
                    let gotUserAgent = false;
                    for(let n in details.requestHeaders)
                    {
                        gotUserAgent = details.requestHeaders[n].name.toLowerCase() === "user-agent";
                        if(gotUserAgent)
                        {
                            details.requestHeaders[n].value = newUserAgent;
                            break;
                        }
                    }
                    if(!gotUserAgent)
                    {
                        details.requestHeaders.push({ name : 'User-Agent', value : newUserAgent });
                    }
                }
                _forURL = null;
                _headers.Referer = null;
                _headers.Origin = null;
                _headers['User-Agent'] = null;
                //details.requestHeaders[n].value = newUserAgent;
                //console.log(2,details.requestHeaders);
                details.requestHeaders.push({name : 'Sec-Fetch-Site', value : 'same-origin'});
                //details.requestHeaders.push({name : 'Referer', value : newReferer});

                return { requestHeaders : details.requestHeaders };
                
            }
        }
    }
}

chrome.webRequest.onBeforeSendHeaders.addListener( RequestHeaders.onBeforeSendHeadersHandler, {
    urls : ["<all_urls>"]
},
   ['requestHeaders', 'blocking',"extraHeaders"]
   // [ "extraHeaders"]
);
