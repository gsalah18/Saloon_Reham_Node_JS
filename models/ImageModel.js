const imageDatabase = require('../middleware/firebase').image;
const utils = require('../middleware/utils');

module.exports = {
    uploadImage: (image, id, catagory) => {
        return new Promise(((resolve, reject) => {
            imageDatabase.uploadImage(image, id, catagory)
                .then(() => {
                    let resultObject = {
                        statusCode: 200,
                        result: {
                            message: utils.getI18nMessage("file_uploaded"),
                            success: true
                        }
                    }
                });
        }));

    }
};