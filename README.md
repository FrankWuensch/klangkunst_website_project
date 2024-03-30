# Klangkunst Website Project

## Beschreibung

Bei diesem Projekt geht es um die Erstellung einer Website für das Auswahlorchester der Region Stuttgart **KlangkunstManufaktur e.V.** .

## Notwendige Vorbereitungen - Entwicklung

### Erstellen einer virtuellen Umgebung

Zum Erstellen einer lokalen virtuellen Umgebung muss das Paket `python3-venv` auf dem Rechner installiert sein. Siehe [hier](https://wiki.ubuntuusers.de/venv/).

```bash
python3 -m venv venv
```

### Installieren der notwendigen gems

Das Programm basiert auf Jekyll, daher ist es notwendig, die entsprechenden Gems in der venv zu installieren. Gebe hierzu folgende Befehle in ein Terminal ein:

```bash
source venv/bin/activate
bundler install
bundle exec jekyll serve
```

**Hinweis**
Das Ausführen des Befehls `bundler install` ist nur einmalig vor dem ersten Starten des Servers notwendig oder wenn sich an der package.json Datei etwas geändert hat.

### Starten des Tailwind Prozesses für die Entwicklung der UI/UX

Um den Tailwind Prozess zu starten muss der Befehl `./tailwindstart.sh` im Terminal ausgeführt werden. Dieser Befehl startet den TailwindCSS Entwicklungsserver und erstellt die CSS Dateien neu, wenn eine HTML Datei geändert wurde.