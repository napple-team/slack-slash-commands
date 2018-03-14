module.exports = class Raryoslot {
  static getRandomRaryosu() {
    const raryosu_emoji = [
      ':raryosu:',
      ':raryosu_real_broken:',
      ':raryosu_rotate_fast:',
      ':raryosu_abaa:',
      ':raryosu_float:',
      ':raryosu_broken:',
      ':raryosu_neural_network:',
      ':raryosu_kyo:',
      ':raryosu_rotate:',
      ':raryosu_rainbow:',
      ':raryosu_melt:',
      ':raryosu_mosaic:',
      ':raryosu_party:',
      ':raryosu_sun_glass:',
      ':raryosu_arhan:',
      ':raryosu_double:',
      ':raryosu_noface:',
      ':raryosu_rotate_y:'
    ]
    return raryosu_emoji[Math.floor(Math.random() * raryosu_emoji)];
  }

  static response() {
    return {
      response_type: 'in_channel',
      text: `${this.getRandomRaryosu()} ${this.getRandomRaryosu()} ${this.getRandomRaryosu()}`,
    };
  }
};
