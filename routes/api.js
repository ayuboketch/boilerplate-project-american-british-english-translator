'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;
      
      // Check if text and locale are provided
      if (text === undefined) {
        return res.json({ error: 'Required field(s) missing' });
      }
      
      if (locale === undefined) {
        return res.json({ error: 'Required field(s) missing' });
      }
      
      // Perform translation
      const result = translator.translate(text, locale);
      
      // Return translation or error
      res.json(result);
    });
};
