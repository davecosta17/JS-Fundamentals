let square = parseInt(process.argv.slice(2));
if (isNaN(square)) {
    console.log('Missing size');
} else { 
    const row = 'X'.repeat(square);
        for (let i = 0; i < square; i++) {
        console.log(row);
    };
}