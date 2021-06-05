/* function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
 } */
 export function Color(){
    let $text = document.createElement('h2')    
    $text.innerHTML=`
       <h3 class='click-event'>Click wherever you want.</h3>
       `
     
    return  $text
}