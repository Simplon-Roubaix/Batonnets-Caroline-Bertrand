var affichageNbPc = document.getElementById("affichageNbPc");
var affichageNbRestant = document.getElementById("affichageNbRestant");
var userNbSuivant = document.getElementById("userNbSuivant");
var affichageNbUser = document.getElementById("affichageNbUser");
var nbRestant = 20;

function afficheNbRestant(nb) {
  //Affichage des allumettes non brulées (de 0 jusque nb).
  var contenu = '';
  for (var i = 0; i < nb; i++) {
    contenu += '<img src="img/Allumette.png" alt="Allumette" />';
  }
  //Affichage des allumettes brulées (de nb jusque 20).
  for (var i = nb; i < 20; i++) {
    contenu += '<img src="img/AllumetteBrulee.png" alt="Allumette brulee" />';
  }
  document.getElementById('allumette').innerHTML = contenu;
  //Affichage du message nb d'allumettes restantes.
  if (nb > 1) {
    document.getElementById("affichageNbRestant").innerHTML = "Il reste " + nb + " allumettes sur le plateau";
  } else {
    document.getElementById("affichageNbRestant").innerHTML = 'Il reste 1 allumette sur le plateau';
  }
}
  afficheNbRestant(20);

function go() {
  //initialisation au premier lancement.

  var nbSuivant = parseInt(userNbSuivant.value);
  userNbSuivant.value = ""; /*le champ de saisie se vide*/
  if (nbSuivant >= nbRestant) {
    alert("Erreur, vous ne pouvez pas retirer plus d'allumettes qu'il en reste sur le plateau")
    return
  }
  if ((nbSuivant != 1) && (nbSuivant != 2) && (nbSuivant != 3)) {
    alert("Relisez l'énoncé !");
  }
else {
    nbRestant = nbRestant - (parseInt(nbSuivant));
affichageNbUser.innerHTML = "Vous avez retiré " + nbSuivant + " allumettes, il en reste " + nbRestant;
    // alert(nbRestant);

    if (nbRestant === 1) {
      alert("Tu as gagné !")
      afficheNbRestant(1)
      affichageNbPc.innerHTML = "<strong>Vous avez gagné !</strong>";
      return
  }


  if (nbRestant === 19) {
    nbRestant = parseInt(nbRestant) - 2;
    affichageNbPc.innerHTML = "L'ordinateur a retiré 2 allumettes, il en reste " + nbRestant + ",<strong> à vous de jouer :</strong>";
    // alert("L'ordinateur a retiré 2 allumettes")

  } else if (nbRestant === 18) {
    nbRestant = parseInt(nbRestant) - 1;
    affichageNbPc.innerHTML = "L'ordinateur a retiré 1 allumette, il en reste " + nbRestant + ",<strong> à vous de jouer :</strong>";
    // alert("L'ordinateur a retiré 1 allumette")

  } else if (nbRestant === 17) {
    nbRestant = parseInt(nbRestant) - 1;
    affichageNbPc.innerHTML = "L'ordinateur a retiré 1 allumette, il en reste " + nbRestant + ",<strong> à vous de jouer :</strong>";
    // alert("L'ordinateur a retiré 1 allumette")

  } else if (nbRestant === 2) {
    nbRestant = 1;
    affichageNbPc.innerHTML = "L'ordinateur a retiré 1 allumette, il en reste 1, <strong>vous avez perdu !</strong>";
    // alert("L'ordinateur a retiré 1 allumette")
  } else if (nbRestant === 3) {
    nbRestant = 1;
    affichageNbPc.innerHTML = "L'ordinateur a retiré 2 allumettes, il en reste 1, <strong>vous avez perdu !</strong>";
    // alert("L'ordinateur a retiré 2 allumettes")
  } else if (nbRestant === 4) {
    nbRestant = 1;
    affichageNbPc.innerHTML = "L'ordinateur a retiré 3 allumettes, il en reste 1, <strong>vous avez perdu !</strong>";
    // alert("L'ordinateur a retiré 3 allumettes")
  } else {
    var nbPc = (4 - nbSuivant);
    nbRestant = (nbRestant) - (nbPc);
    affichageNbPc.innerHTML = "L'ordinateur a retiré " + nbPc + " allumette(s), il en reste " + nbRestant + ",<strong> à vous de jouer :</strong>";
    // alert("L'ordinateur a retiré " + nbPc + " allumette(s)")

  }

  afficheNbRestant(nbRestant);
}

};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

var affichageGagnantjcj = document.getElementById("affichageGagnantjcj");
var affichageNbRestantjcj = document.getElementById("affichageNbRestantjcj");
var NbSuivantjcj = document.getElementById("NbSuivantjcj");
var nbRestantjcj = 20;
var compteurjcj = 1;

function afficheNbRestantjcj(nbjcj) {
  //Affichage des allumettes non brulées (de 0 jusque nb).
  var contenujcj = '';
  for (var ijcj = 0; ijcj < nbjcj; ijcj++) {
    contenujcj += '<img src="img/Allumette.png" alt="Allumette" />';
  }
  //Affichage des allumettes brulées (de nb jusque 20).
  for (var ijcj = nbjcj; ijcj < 20; ijcj++) {
    contenujcj += '<img src="img/AllumetteBrulee.png" alt="Allumette brulee" />';
  }
  document.getElementById('allumettejcj').innerHTML = contenujcj;
  //Affichage du message nb d'allumettes restantes.
  if (nbjcj > 1) {
    document.getElementById("affichageNbRestantjcj").innerHTML = 'Il reste ' + nbjcj + ' allumettes sur le plateau';
  } else {
    document.getElementById("affichageNbRestantjcj").innerHTML = 'Il reste 1 allumette sur le plateau';
  }
}
afficheNbRestantjcj(20);







function gojcj() {
  //initialisation au premier lancement.
  if (parseInt(compteurjcj) % 2 === 0) {

    affichageJoueurjcj.innerHTML = "Au joueur 1 de jouer :"
    var nbSuivantjcj = parseInt(NbSuivantjcj.value);
    NbSuivantjcj.value = "";
    if (nbSuivantjcj >= nbRestantjcj) {
      alert("Erreur, vous ne pouvez pas retirer plus d'allumettes qu'il en reste sur le plateau")
      return
    } else {
      if ((nbSuivantjcj != 1) && (nbSuivantjcj != 2) && (nbSuivantjcj != 3)) {
        alert("relisez l'énoncé !");
      } else {
        nbRestantjcj = nbRestantjcj - (parseInt(nbSuivantjcj));
        if (nbRestantjcj <= 1) {
          affichageGagnantjcj.innerHTML = "<strong>Le joueur 2 a gagné !</strong>";
          alert("Le joueur 1 a perdu !");
          affichageJoueurjcj.innerHTML = "";
        }

      }

      compteurjcj = parseInt(compteurjcj) + 1;
    }

  } else {

    affichageJoueurjcj.innerHTML = "Au joueur 2 de jouer :"
    var nbSuivantjcj = parseInt(NbSuivantjcj.value);
    NbSuivantjcj.value = "";
    if (nbSuivantjcj >= nbRestantjcj) {
      alert("Erreur, vous ne pouvez pas retirer plus d'allumettes qu'il en reste sur le plateau")
      return
    } else {
      if ((nbSuivantjcj != 1) && (nbSuivantjcj != 2) && (nbSuivantjcj != 3)) {
        alert("relisez l'énoncé !");
      } else {
        nbRestantjcj = nbRestantjcj - (parseInt(nbSuivantjcj));
        if (nbRestantjcj <= 1) {
          affichageGagnantjcj.innerHTML = "<strong>Le joueur 1 a gagné !</strong>";
          alert("Le joueur 2 a perdu !");
          affichageJoueurjcj.innerHTML = "";
        }
      }

      compteurjcj = parseInt(compteurjcj) + 1;
    }
  }
  afficheNbRestantjcj(nbRestantjcj);
}
