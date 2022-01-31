const {MongoClient}= require('mongodb');

const url = 'mongodb://zadhilhaq:zadhilhaq@127.0.0.1:27017?authSource=admin';
const client = new MongoClient(url);

(async () => {
    try {
        await client.connect();
        console.log('koneksi ke mongodb berhasil');
    }catch(e) {
        console.log(e);
    }
})();


const db = client.db('eduwork-native')

module.exports = db