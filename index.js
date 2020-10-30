function rotateClock(){
   document.getElementById('digital').innerHTML = new Date().toLocaleTimeString() ;
   let hours = new Date().getHours() ;
   let min = new Date().getMinutes() ;
   let sec = new Date().getSeconds() ;

   let deg_h = (30 * hours ) + ( 0.5 * min ) ;
   let deg_m = ( 6 * min ) + ( 0.1 * sec ) ;
   let deg_s = 6 * sec ;

   let dom_h = document.getElementById('hour') ;
   let dom_m = document.getElementById('minute') ;
   let dom_s = document.getElementById('second') ;

   dom_h.style.transform = `rotate(${deg_h}deg)` ;
   dom_m.style.transform = `rotate(${deg_m}deg)` ;
   dom_s.style.transform = `rotate(${deg_s}deg)` ;

}

window.onload = function(){
   
   setInterval(rotateClock, 1000)
}

