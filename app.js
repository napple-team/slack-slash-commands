const TextConverter = require('./src/text-converter.js');
const Raryoslot = require('./src/raryoslot.js');

exports.commands = (req, res) => {
  let response = {};
  switch (req.body.command) {
    case '/nanisore':
      response = TextConverter.nanisore(req.body.text);
      break;
    case '/nandasono':
      response = TextConverter.nandasono(req.body.text);
      break;
    case '/raryoslot':
      response = Raryoslot.response();
    default:
      break;
  }
  res.status(200).json(response);
};
