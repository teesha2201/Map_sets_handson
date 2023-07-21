/* que 1 */
function removeduplicate(inputstr)
{
    var chars = new Set();
    var result = [];

   for( const char of inputstr) 
    if(!chars.has( char))
    {
        chars.add(char);
        result.push(char);
    }
    return result.join('');
}
var STR = "abcadeecfb";
// var outputstring = removeduplicate(inputstring)
console.log(removeduplicate(STR))

/*que 2 */
let string = "abcadeecfb";
let array = string.split('');
let set = new Set(array);
let newarray = Array.from(set);
let output = newarray.map((element, index) => {
let count = 0
    for(let i=0; i<array.length; i++)
    {
        
        if(element == array[i])
        {
            count++;
        }
        
    }
    console.log(`${element} = ${count}`)
    console.log((set))

}
) ;      
