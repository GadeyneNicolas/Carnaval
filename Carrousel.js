class Carrousel {
   constructor() {
      this.interval = "";
   }

   init() {
      this.lecture();
      this.clavier();
      $(`.pause`).click(this.pause.bind(this));
      $(`.suivant`).click(this.suivant.bind(this));
      $(`.precedent`).click(this.precedent.bind(this));
   }

   lecture() {
      this.interval = setInterval(() => {
         $(`.carrousel li:first-child`).css(`marginLeft`, `-=700`);
         this.retour();
      }, 5000);
   }

   retour() {
      if ($(`.carrousel li:first-child`).css(`marginLeft`) == `-2100px`) {
         $(`.carrousel li:first-child`).css(`marginLeft`, `0`);
      }
      // if ($(`.carrousel li:first-child`).css(`marginLeft`) == `700px`) {
      //    $(`.carrousel li:first-child`).css(`marginLeft`, `0`);
      // }
   }

   pause() {
      clearInterval(this.interval);
   }

   suivant() {
      this.pause();
      $(`.carrousel li:first-child`).css(`marginLeft`, `-=700`);
      this.retour();
   }

   precedent() {
      this.pause();
      $(`.carrousel li:first-child`).css(`marginLeft`, `+=700`);
      this.retour();
   }

   clavier() {
      $(document).keydown((e) => { 
         if (e.keyCode == 39) {
            this.suivant();
         } else if (e.keyCode == 37) {
            this.precedent();
         };
      });
   }
}
$(document).ready(function () { // fonction du carrousel
   const slider = new Carrousel();
   slider.init();
});