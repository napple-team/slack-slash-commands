module.exports = class TextConverter {
  static nanisore(word) {
    return this.response(`はい？ ${word} …なにって？\n何それ しらないわ`);
  }

  static nandasono(word) {
    return this.response(`親に向かってなんだその *${word}* は`);
  }

  static response(text) {
    return {
      response_type: 'in_channel',
      text,
    };
  }
};
