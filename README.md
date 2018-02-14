## Snappet Challenge

Bij deze mijn implementatie van de Snappet Challenge.

Om de applicatie te maken heb ik gebruik gemaakt van React i.c.m. de ‘Create React App’ tool.
https://github.com/facebook/create-react-app 

De applicatie is opgedeeld in verschillende componenten.

Te beginnen bij src/App. 
Bijbehorend CSS-bestand bevat de algemene styling en styling die op meerder plekken wordt gebruikt (bijvoorbeeld buttons).

In src/components zijn een viertal componenten te vinden, te weten:
-	common/Header: Hier bevindt zich de layout van de header
-	results/ResultsPage: De ‘ingang’ van het resultatenoverzicht. Hier bevindt zich de data die in het resultatenoverzicht wordt getoond (die zich normaal gesproken in de state van de React app bevindt)
-	results/LearningObjectiveList: Dit component ontvangt de data van de ResultsPage en geeft deze resultaten weer in een lijst
-	results/ControlBar: Dit is de ‘knoppenbalk’ bovenaan met de styling van de verschillende knoppen.


Momenteel zijn alleen de desktop layout en de mobiele layout geïmplementeerd. Omdat de tablet layout niet is geïmplementeerd heb ik het breakpoint van de mobiele weergave wat omhoog gezet (naar 900 pixels).

Om de applicatie te kunnen bekijken:
-	npm install (om alles te installeren)
-	npm start (start een webserver op localhost:3000)
-	npm build (om een build te maken)

