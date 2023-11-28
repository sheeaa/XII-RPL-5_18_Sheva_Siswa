const mongoose = require('mongoose')

const siswaSchema = new  mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Isi namamu'],
        unique: true
    },
    NIS: {
        type: String,
        required: [true, 'Isi NISmu'],
        unique: true
    },
    hobi: {
        type: String,
        required: [true, 'Isi hobimu'],
        unique: true
    },
    alamat: {
        type: String,
        required: [true, 'Isi alamatmu'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Isi namamu'],
        unique: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Isi emailmu']
    },
    
})

module.exports = mongoose.model('Siswa', siswaSchema)