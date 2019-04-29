const firebase = require("firebase");
const admin = require('firebase-admin');
const serviceAccount = require("../the-saloon-6a2c9-firebase-adminsdk-3slw9-552faa8995");
const config = {
    apiKey: process.env.FIRE_BASE_API_KEY,
    authDomain: process.env.FIRE_BASE_AUTH_DOMAIN,
    databaseURL: process.env.FIRE_BASE_DATABASE_URL,
    storageBucket: process.env.FIRE_BASE_STORE_BUCKET
};
firebase.initializeApp(config);
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIRE_BASE_DATABASE_URL
});

const db = admin.firestore();

module.exports = {
    user: {
        getAll: () => {
            return new Promise((resolve, reject) => {
                db.collection('users').get()
                    .then(snapshot => {
                        const docs = [];
                        snapshot.forEach((doc) => {
                            let currentDoc = doc.data();
                            currentDoc.id = doc.id;
                            docs.push(currentDoc);
                        });
                        resolve(docs);
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        getOne: (id) => {
            return new Promise((resolve, reject) => {
                db.collection('users').doc(id).get()
                    .then(doc => {
                        if (doc.data()) {
                            let docObject = doc.data();
                            docObject.id = doc.id;
                            resolve(docObject);
                        } else {
                            resolve(doc.data());
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        add: (user) => {
            return new Promise((resolve, reject) => {
                db.collection('users').add(user)
                    .then((result) => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        update: (id, user) => {
            return new Promise((resolve, reject) => {
                db.collection('users').doc(id).update(user)
                    .then(result => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        delete: (id) => {
            return new Promise((resolve, reject) => {
                db.collection('users').doc(id).delete()
                    .then(result => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        }
    },
    price: {
        getAll: () => {
            return new Promise((resolve, reject) => {
                db.collection('prices').get()
                    .then(snapshot => {
                        const docs = [];
                        snapshot.forEach((doc) => {
                            let currentDoc = doc.data();
                            currentDoc.id = doc.id;
                            docs.push(currentDoc);
                        });
                        resolve(docs);
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        getOne: (id) => {
            return new Promise((resolve, reject) => {
                db.collection('prices').doc(id).get()
                    .then(doc => {
                        if (doc.data()) {
                            let docObject = doc.data();
                            docObject.id = doc.id;
                            resolve(docObject);
                        } else {
                            resolve(doc.data());
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        add: (price) => {
            return new Promise((resolve, reject) => {
                db.collection('prices').add(price)
                    .then((result) => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        update: (id, price) => {
            return new Promise((resolve, reject) => {
                db.collection('prices').doc(id).update(price)
                    .then(result => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        delete: (id) => {
            return new Promise((resolve, reject) => {
                db.collection('prices').doc(id).delete()
                    .then(result => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        }
    },
    offer: {
        getAll: () => {
            return new Promise((resolve, reject) => {
                db.collection('offers').get()
                    .then(snapshot => {
                        const docs = [];
                        snapshot.forEach((doc) => {
                            let currentDoc = doc.data();
                            currentDoc.id = doc.id;
                            docs.push(currentDoc);
                        });
                        resolve(docs);
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        getOne: (id) => {
            return new Promise((resolve, reject) => {
                db.collection('offers').doc(id).get()
                    .then(doc => {
                        if (doc.data()) {
                            let docObject = doc.data();
                            docObject.id = doc.id;
                            resolve(docObject);
                        } else {
                            resolve(doc.data());
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        add: (offer) => {
            return new Promise((resolve, reject) => {
                db.collection('offers').add(offer)
                    .then((result) => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        update: (id, offer) => {
            return new Promise((resolve, reject) => {
                db.collection('offers').doc(id).update(offer)
                    .then(result => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        delete: (id) => {
            return new Promise((resolve, reject) => {
                db.collection('offers').doc(id).delete()
                    .then(result => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        }
    },
    reservation: {
        getAll: () => {
            return new Promise((resolve, reject) => {
                db.collection('reservations').get()
                    .then(snapshot => {
                        const docs = [];
                        snapshot.forEach((doc) => {
                            let currentDoc = doc.data();
                            currentDoc.id = doc.id;
                            docs.push(currentDoc);
                        });
                        resolve(docs);
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        getOne: (id) => {
            return new Promise((resolve, reject) => {
                db.collection('reservations').doc(id).get()
                    .then(doc => {
                        if (doc.data()) {
                            let docObject = doc.data();
                            docObject.id = doc.id;
                            resolve(docObject);
                        } else {
                            resolve(doc.data());
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        add: (reservation) => {
            return new Promise((resolve, reject) => {
                db.collection('reservations').add(reservation)
                    .then((result) => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        update: (id, reservation) => {
            return new Promise((resolve, reject) => {
                db.collection('reservations').doc(id).update(reservation)
                    .then(result => {
                        resolve();
                    }).catch(err => {
                    console.log(err);
                    reject();
                });
            });
        },
        delete: (id) => {
            return new Promise((resolve, reject) => {
                db.collection('reservations').doc(id).delete()
                    .then(result => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        }
    },
    financial: {
        getAll: () => {
            return new Promise((resolve, reject) => {
                db.collection('financials').get()
                    .then(snapshot => {
                        const docs = [];
                        snapshot.forEach((doc) => {
                            let currentDoc = doc.data();
                            currentDoc.id = doc.id;
                            docs.push(currentDoc);
                        });
                        resolve(docs);
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        getOne: (id) => {
            return new Promise((resolve, reject) => {
                db.collection('financials').doc(id).get()
                    .then(doc => {
                        if (doc.data()) {
                            let docObject = doc.data();
                            docObject.id = doc.id;
                            resolve(docObject);
                        } else {
                            resolve(doc.data());
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        add: (financial) => {
            return new Promise((resolve, reject) => {
                db.collection('financials').add(financial)
                    .then((result) => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        update: (id, financial) => {
            return new Promise((resolve, reject) => {
                db.collection('financials').doc(id).update(financial)
                    .then(result => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        delete: (id) => {
            return new Promise((resolve, reject) => {
                db.collection('financials').doc(id).delete()
                    .then(result => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        }
    },
    style: {
        getAll: () => {
            return new Promise((resolve, reject) => {
                db.collection('styles').get()
                    .then(snapshot => {
                        const docs = [];
                        snapshot.forEach((doc) => {
                            let currentDoc = doc.data();
                            currentDoc.id = doc.id;
                            docs.push(currentDoc);
                        });
                        resolve(docs);
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        getOne: (id) => {
            return new Promise((resolve, reject) => {
                db.collection('styles').doc(id).get()
                    .then(doc => {
                        if (doc.data()) {
                            let docObject = doc.data();
                            docObject.id = doc.id;
                            resolve(docObject);
                        } else {
                            resolve(doc.data());
                        }
                    })
                    (err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        add: (style) => {
            return new Promise((resolve, reject) => {
                db.collection('styles').add(style)
                    .then((result) => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        update: (id, style) => {
            return new Promise((resolve, reject) => {
                db.collection('styles').doc(id).update(style)
                    .then(result => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        },
        delete: (id) => {
            return new Promise((resolve, reject) => {
                db.collection('styles').doc(id).delete()
                    .then(result => {
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                        reject();
                    });
            });
        }
    },
    image: {
        uploadImage: (image, id, catagory) => {
            return new Promise(((resolve, reject) => {
                let newImageName = `${image.originalname}_${Date.now()}`;
                let imageUpload = bucket.file(newImageName);
                const blobStream = fileUpload.createWriteStream({
                    metadata: {
                        contentType: image.mimetype
                    }
                });
                blobStream.on('error', (error) => {
                    reject('Something is wrong! Unable to upload at the moment.');
                });

                blobStream.on('finish', (result) => {
                    // The public URL can be used to directly access the file via HTTP.
                    const url = format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
                    resolve(url);
                });
                // storageRef.child(`${catagory}/id`).put(image)
                //     .then(snapshot => {
                //         resolve();
                //     });
            }));
        }

    }
};

