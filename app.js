const TextConverter = require('./src/text-converter.js');

exports.commands = async (req, res) => {
  let response = {};
  switch (req.body.command) {
    case '/nanisore':
      response = TextConverter.nanisore(req.body.text);
      break;
    case '/nandasono':
      response = TextConverter.nandasono(req.body.text);
      break;
    default:
      break;
  }
  res.status(200).json(response);
};
