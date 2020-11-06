$('document').ready( function()
{
	console.log('content.js loaded');
	//emit();
});
function inject()
{
    if(!!window.grecaptha)
    {
        window.o = grecaptcha.render;
        window.p;
        grecaptcha.render = function(name, obj)
        {
                window.c = obj.callback;
                window.p = obj;
                console.log("logged");
                //grecaptcha.render = window.o;
                //grecaptcha.render(name, obj);
                window.o(name, obj);
        }
    }
    else
    {    
        console.log("tick");
        setTimeout(inject,1000);
    }
}

(() => 
    {
        let ref = undefined;
        Object.defineProperty(window, 'grecaptcha', {
        get() {
            return ref;
        },
        set(grecaptcha) {
            console.log({grecaptcha});
            let refRender = grecaptcha.render;

            grecaptcha.render = function(name, obj)
            {
                document.callback = obj.callback;
                console.log("triggered");
                refRender(name, obj);
            }
        }
    })})();


    let arr = u$('input[type="checkbox"]');
     for(let i = 0; arr.length; i++)
    {
        if( u$(arr[i]).attr("class").indexOf("checkbox") != -1)
        {
            if( u$(arr[i]).checked == false)
            {
                u$(arr[i]).click();
            }
        }
    }
/*
async function type(selector,value,delay)
{
	var delay = delay;
    var value = value;
    var $input = $(selector);
    $input.val("");
    $input.click();
    $input.focus();
    for(let i = 0; i < value.length; i++)
    {
        var lastValue = $input.val();
        $input.val(lastValue + value[i]);
        $input[0].selectedIndex = i;
        var tracker = $input[0]._valueTracker;
        if (tracker)
            tracker.setValue(lastValue);
        var event = new Event('input', { bubbles: true });
        $input[0].dispatchEvent(event);
        await sleep(delay * Math.random() + delay);
    }
}
function sleep(ms)
{
	return new Promise((resolve) => setTimeout(() => resolve(), ms));
}
async function emit()
{
	await type('#review-text', "Гугл вечный", 100 );
	await sleep(1625);
	await type('#review-title', "Лучший поисковик", 100 );
	await sleep(2325);
	$(`input[type="checkbox"]:eq(0)`).click();
	await sleep(3325);
	$(`input[type="checkbox"]:eq(1)`).click();

}*/
