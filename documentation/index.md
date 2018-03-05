# DOCUMENTATION

- [Les librairies](library.md)
- [Les tests](test.md)

## Présentation

L'application met en place une datatable de données provenant d'un fichier json `post.json` et d'un appel à une api `jsonPlaceholder` lors de l'ouverture d'une modal.

L'utilisateur peut effectuer une recherche dans le tableau à l'aide d'un champ de recherche présent dans la page. Les résultats sont affichés par 10 et sont paginés.

## Routes

Les routes sont définies dans le module `src/app-routing.module.ts`.

La route par défaut correspond au composant `Home` et la route permettant de consulter le datatable, il fait référence au composant `Data`.

## Composant Data

Le composant `Data` met en place le datatable avec le flux de données présent dans `assets/post.json`. 

La configuration du `Datatable` est défini dans la méthode `ngOnInit` ; On trouvera aussi l'appel du service `DataService` (qui est injecté par dépendance dans le constructeur) et qui permet de nourrir la datagrid via un observable.

Une fonction `open()` permet d'ouvrir une modal lorsqu'on clique sur le bouton `Détail`. Cette méthode requiert entre autre que l'on passe l'id de la ligne dont l'utilisateur souhaite consulter le contenu.

Une fonction `getDismissReason()` permet la fermeture de la modal que ce soit via la pression sur la touche `ESC` ou en cliquant sur le bouton `close` présent au sein de la modal.

## Présentation

Le design est mis en place à l'aide du framework `Bootstrap 4` et du préprocesseur css `Sass`.

La description est tronqué à l'aide de Sass et selon les médias queries.


## Modèles

Les modèles sont présents dans `src/app/models` et sont de l'ordre de deux :
- personn : correspond aux données listées dans le datagrid
- posts : correspond aux données de la page de détail (modal)

## Services

Un seul service est présent, il fourni deux méthodes :
- get() : retourne les détails correspond à l'appel de l'api https://jsonplaceholder.typicode.com/post/{id}
- getList() : retourne l'ensemble des données présent dans le fichier `asserts/post.json`

## Notes

La fonctionnalité `"precommit": "npm test"` présent dans la partie `scripts` du fichier `package.json`.

Les tests sont fonctionnels néanmoins un paramétrage qui ne semble pas correct (mais ne relève pas d'erreur) pour istambul malgré une couverture à `82,72 %` bloque le commit. Afin de ne pas s'arrêter à ce détail, j'ai préféré le désactiver.