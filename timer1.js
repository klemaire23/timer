const args = process.argv.slice(2);

for (let arg of args) {

  if (arg.length === 0 || arg < 0 || isNaN(arg)) {
    continue;}

  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg * 1000)

};
