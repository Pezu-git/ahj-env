/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-unused-vars
const template = (hash) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
<h1>Helloooo, from Netology!</h1>
<img src="img/netology.svg" alt="Netology Logo">
</body>
</html>`;
};
// eslint-disable-next-line func-names
export default function ({ compilation }) {
  return template(compilation.hash);
}
