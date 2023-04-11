const args = process.argv.slice(2);

for (let arg of args) {

  if (arg.length === 0) {
    return;

  } else if (arg < 0) {
    continue;

  } else if (isNaN(arg) === true) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg * 1000)

};
