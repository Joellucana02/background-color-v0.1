function getRandomColor() {
   var letters = '0123456789ABCDEF'.split('');
   var color = '#';
   for (var i = 0; i < 6; i++ ) {
       color += letters[Math.round(Math.random() * 15)];
   }
   return color;
}
export function Box(){
    const $div = document.createElement('div');
    let $clickEvent = document.getElementById('root'),
    color;
    $clickEvent.style.width = '100vw'
    $clickEvent.style.height = '100vh'
    $clickEvent.addEventListener('click', (e)=>{
         color = getRandomColor() 
        $clickEvent.style.background = color;
        console.log(color)
        $div.innerHTML = `
        <h3>Hex: ${color}</h3>
        `
    }) 
    return $div
}