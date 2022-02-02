const {MongoClient}= require('mongodb');

const url = 'mongodb+srv://zadhilhaq:zadhilhaq@cluster0.twhht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
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