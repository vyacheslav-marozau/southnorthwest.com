function rapperCheker() {
var rapperClass = prompt("напиши каким Рэппером ты хочешь стать? американским, русским или true"),
      fiftyCent = prompt("Сколько Баксов ты хочешь получать за один концерт?"),
      girls = prompt("Сколько Девушек ты хочешь любить в день?"); 
rapperClass = rapperClass.toLowerCase(); 
fiftyCent *= 8; 
if (rapperClass  === 'американским') {
     alert('ты с детства должен торговать подорожником и кокосом, учавствовать в Рэп-баттлах, чтобы в тебя стреляли 8ем раз, но ты выжил и в итоге стал реальным Хастлером! Будешь получать ' + fiftyCent + '$ за концерт и будешь любить ' + girls + ' девушек в день! поздравляю!');
} else if (rapperClass === 'русским') {
     alert('ты должен родиться в России, уехать учиться в Лондон, а после вернутся в Россию и перевернуть Рэп игру одним своим альбомом!! в итоге у тебя куча концертов по всему миру с '+ fiftyCent + '$+ наличкой и каждый день ровно ' + girls + ' девушек будут становится реально счастливее! поздравляю!');
} else if ( rapperClass === 'true') {
   alert('это невозможно, чувак!!! даже не пытайся!! только у одного человека на этой планете это получилось, и он есть на этой странице!');
} else {
   alert('ты ввёл какую-то чушь, поэтому уже стал, кем хотел, а именно - чудаком!!!');
};
                                    /*switch(rapperClass) ­ { ­­­­case­ 'американским':­­­­ alert('ты с детства должен торговать подорожником и кокосом, учавствовать в Рэп-баттлах, чтобы в тебя стреляли 8ем раз, но ты выжил и в итоге стал реальным Хастлером! Будешь получать ' + fiftyCent + '$ за концерт и будешь любить ' + girls + ' девушек в день! поздравляю!'); break;­
                                    ­­­­case­ 'русским': alert('ты должен родиться в России, уехать учиться в Лондон, а после вернутся в Россию и перевернуть Рэп игру одним своим альбомом!! в итоге у тебя куча концертов по всему миру с '+ fiftyCent + '$+ наличкой и каждый день ровно ' + girls + ' девушек будут становится реально счастливее! поздравляю!'); break;­
                                    case­ 'true': alert('это невозможно, чувак!!! даже не пытайся!! только у одного человека на этой планете это получилось, и он есть на этой странице!'); break;
                                    default: alert('ты ввёл какую-то чушь , поэтому уже стал, кем хотел, а именно - чудаком!!!'); break; } */
}
$(document).ready( function() {
    $('.pannel-heading').click( function() {
       $(this).toggleClass('in').next().slideToggle();
       $('.pannel-heading').not(this).removeClass('in').next().slideUp();
        });
   

      var buttons = $(".butt"),
             forEach = Array.prototype.forEach;
      forEach.call(buttons, function(b) {
             b.addEventListener('click', addEvent);
      });
      function addEvent(e) {
      var addDiv = document.createElement('div'),
             mValue = Math.max( this.clientWidth, this.clientHeigth),
             rect = this.getBoundingClientRect(),
             sDiv = addDiv.style,
             px = 'px';
      sDiv.width = sDiv.height = mValue + px;
      sDiv.left = e.clientX - rect.left - ( mValue / 2) + px;
      sDiv.top = e.clientY - rect.top - ( mValue / 2) + px;
      addDiv.classList.add('pulse');
      this.appendChild(addDiv);
      }

 });
