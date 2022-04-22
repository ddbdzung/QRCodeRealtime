const Ctv = require('../models/ctv.model')

const createNewCtv = async (ctvBody) => {
  return await Ctv.create(ctvBody)
}

module.exports = {
  createNewCtv,
}