$(document).ready( function()
{
	//listeners();
});
function CalcDegFrom2F(start, final) 
{
    let inverse = inverseDeg180(final);
    let r1 = inverse-start;
    let r2 = final+start;

    let result;
    if( r1 < r2 )
        result = r1;
    else
        result = r2

   console.log(result, `From: ${start} to ${final}`);
};
function inverseDeg180(deg)
{
    result = 180 - (deg * -1)
    return result;
}
