const Image = require('../models/Image');
const {sendTask} = require('../services/PredictService');

module.exports = {
    async create(req, res){
      const { id, img_name, img_url, name, email } = req.body;

      const createdImage = await Image.newWithId(id, {
          img_name,
          img_url,
          name,
          email
      });

      sendTask(
        'predict',
        createdImage,
        (data) => {
          const { result } = JSON.parse(data);
          console.log('Task Done: \n', result);
        }
      )

      return res.json(createdImage);
    },

    async show(req, res){
        const { id } = req.params;

        const imageData = await Image.findById(id);

        return res.json(imageData);
    }
}
