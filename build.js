const build_target = process.argv.slice(2);
const { exec } = require("child_process");

const command = `pandoc ${build_target}.md -o ${build_target}.pdf --from markdown --template config/template.tex  --listings`

exec(command, (error, stdout, stderr) => {
	if (error) {
		console.log(`error: ${error.message}`);
		return;
	}
	if (stderr) {
		console.log(`stderr: ${stderr}`);
		return;
	}
	console.log(`stdout document built`);
});


