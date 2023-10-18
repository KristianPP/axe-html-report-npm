import { createHtmlReport } from 'axe-html-reporter';
import { writeFileSync, readFileSync } from 'fs';
 
 
const myArgs = process.argv.slice(2);
console.log(myArgs);
const options = {};
myArgs.forEach(arg => {
  const [key, value] = arg.split('=');
  options[key] = value;
});
(() => {
    const rawAxeResults = JSON.parse(readFileSync(options.readFile, 'utf8'))
    createHtmlReport({
        results: rawAxeResults[0],
        //options available to further customize reports
        options
        
    });
})();
