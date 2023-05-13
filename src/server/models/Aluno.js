const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AlunoSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  },
  faltasMat: {
    type: Number,
    default: "0"
  },
  faltasHist: {
    type: Number,
    default: "0"
  },
  faltasPort: {
    type: Number,
    default: "0"
  },
  faltasBio: {
    type: Number,
    default: "0"
  },
  faltasQuim: {
    type: Number,
    default: "0"
  },
  faltasFilo: {
    type: Number,
    default: "0"
  },
  faltasFis: {
    type: Number,
    default: "0"
  }
});

module.exports = mongoose.model('Aluno', AlunoSchema);