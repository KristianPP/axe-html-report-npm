# axe-html-report-npm

## Preconditions
1. You need to have nodejs 18 installed on your machine
2. Create a new workspace folder and install axe-html-reporter
```npm i -D axe-html-reporter```

## How to run the script
1. Move the axe-core output(the json report) to the root folder where this script is located(directory does not matter as we have a parameter that accepts path to file but its easier for demo purposes to be in root)
2. Run the script using any of its provided parameters

### Parameters
**reportFileName** - specifies the name of the HTML report that will be generated. Default name is accessibilityReport.html
**outputDir** - specifies the output directory where we want the file to be saved to. Default directory is artifacts
**projectKey** -  Text that gets appeneded to the end of the html report H1 tag
**customSummary** -  Adds a summary below the url that was reported
**readFile** - specifies the file we need to parse(the json output of axe-core)


### Example commands:
``` node AxeHTMLReport.mjs readFile=AxeResults.json customSummary=TestCase101 ```










