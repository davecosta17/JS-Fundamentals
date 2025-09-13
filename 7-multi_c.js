let cLang = parseInt(process.argv.slice(2));
if (isNaN(cLang)) {
    console.log('Missing number of occurrences');
} else {
    for (let i = 0; i < cLang; i++) {
        console.log('C is fun');
    };
}