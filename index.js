const fs = require("fs-extra");
const path = require("path");
const soundfontParser = require("soundfont-parser");

(async () => {

	const [,, directory ] = process.argv;

	const files = await fs.readdir(directory);

	const [ filename ] = files
		.filter(filename => filename.endsWith(".sfz"));

	const file = await fs.readFile(`${directory}/${filename}`, "utf8");
	const groups = soundfontParser(file);

	const baseClass = await fs.readFile(`${__dirname}/baseClass.js`, "utf8");
	const output = baseClass.replace("{{groups}}", JSON.stringify(groups, null, "\t"));

	fs.writeFile(`${__dirname}/output.js`, output);

})().catch(e => console.log(e));
