Zur Nutzung dieser Seite müssen folgende Schritte durchgeführt werden:

1. Webstorm oder InteliJ müssen installiert werden. Für letzteres fehlt wohl die Unterstützung von AngularJs in der IDE. Es ist also erstes zu empfehlen.
2. NodeJs wird benötigt. Dieses bitte in der LTS-Variante herunterladen und installieren. Danach Webstorm/Intelij neustarten, falls gestartet. NodeJs bringt einen Paketpmanager, namens "npm" mit. Dies steht nach der Installation global über die CMD zur Verfügung.
3. Projekt aus Github herunterladen (so wie in Nico seiner Anleitung beschrieben).
4.  In Webstorm/Intelij ein Terminal-Fenster öffnen und dort "npm install" ausführen. Dadurch werden alle Projekt-Dependencies, die in der package.json angegeben sind, installiert. Im gleichen Zug wird auch bower installiert, ein weiterer Paketmanager. In bower.json sind alle Dependencies für Bower definiert, welche automatisch während der Installation von bower mitinstalliert werden.
5. npm start eingeben
6. Die Webanwendung ist nun über localhost:8000 erreichbar.


Weitere Pakete können mit "bower install PAKETNAME" oder "npm install PAKETNAME" hinzugefügt werden. Um diese als Dependency für das Projekt zu definieren (um also zu erzwingen, dass alle anderen die das Projekt über Github laden, diese Pakete auch brauchen), muss ein --save an der Installation angehangen werden. z.B. : "bower install angular-material --save"
