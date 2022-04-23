const Ctv = require('../models/ctv.model')
const ApiError = require('../utils/ApiError')
const httpStatus = require('http-status')

const createNewCtv = async (ctvBody) => {
  let ctvObj = {}
  for (let i in ctvBody) {
    ctvObj[i] = ctvBody[i]
  }
  
  let oldCtv = await Ctv.findOne({ identityNumber: ctvObj.identityNumber })
  if (oldCtv) {
    throw new ApiError(httpStatus[401], 'Đã có cộng tác viên mang mã sinh viên này! Không thể tạo!')
  }
  return await Ctv.create(ctvObj)
}

const getAllCtv = async () => {
  return await Ctv.find({})
}

module.exports = {
  createNewCtv,
  getAllCtv,
}
