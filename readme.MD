# API bannière publicitaire, pour soutenir la société Indiscrète
## Introduction

Cette API a été réalisée en soutien à la société Indiscrète situé 20 rue des entrepreneurs à Chauvigny (Vienne 86300)<br>
Ce programme est mis à disposition, pour toutes les entreprises ou webmaster souhaitant participer à la diffusion de la bannière.


## Installation de la bannière sur une page web

Pour l'installation de cette API sur votre site vous devez copier les portions de code suivant

Cette div contiendra les informaitons générées par le script indiscrete.js. Cette div est à placer selon votre convenance sur votre page web. 

```html

  <div class="indiscrete"></div>

```

L'image transmise étant dans un grand format, n'hésiter pas à intégrer des propriétés de style, afin de paramétrer la taille de la bannière.<br>
Exemple

```html

  <div class="indiscrete" style="width=300px"></div>

```

Récupérer ensuite le script js permettant la génération et le fonctionnement de la bannière

```html

  <script defer src="assets/js/indiscrete.js"></script>

```

le script est disponible dans le dossier assets. Je vous invite à modifier le chemin du fichier à votre convenance pour l'utilisation du programme

```
assets
└js
  └ indiscrete.js

```

Ce fichier va générer automatiquement un lien hypertexte sur une image transmise par la société indiscrète. Lors du clique, l'utilisateur sera automatiquement redirigé sur le site institutionnel de l'entreprise.

Le lien de redirection a été développer pour prendre en compte le clique des utilisateurs. Conformément à la réglementation en vigueur, aucune information personnelle sera demandée ou récolté. Nous prenons juste en compte le nombre de clique réalisé sur la bannière.

Pour toute information ou dysfonctionnement lors de l'utilisation de ce programme. Merci de me contacter par mail mathieusiaudeau[a]gmail.com

Merci de votre soutiens

<a href="http://indiscrete.mathieusiaudeau.fr/indiscrete" alt="banniere société indiscrète Chauvigny(86)" target="_blank"><img src="http://indiscrete.mathieusiaudeau.fr/assets/img/indiscrete/ban.jpg"></a>
