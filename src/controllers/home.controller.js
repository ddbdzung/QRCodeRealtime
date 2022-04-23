const res = require('express/lib/response')
const { ctvService } = require('../services')

// [GET /createQR]
const viewCreateForm = (req, res) => {
  res.render('submitForm', {
    title: 'Mẫu điền thông tin CTV HIT',
  })
}

// [GET /test]
const test = (req, res) => {
  res.render('test', {
    title: 'Quét mã QR của CTV',
  })
}

// [POST /saveCTV]
const saveCTV = async (req, res) => {
  try {
    let newCtv = await ctvService.createNewCtv(req.body)
    // return res.status(200).json(newCtv);
    return res.status(200).json({
      message: 'Tạo CTV thành công.'
    })
  } catch (err) {
    // Do trùng MSV
    return res.status(200).json({
      message: 'CTV đã tồn tại.',
    });
  }
}

// [POST /createQR]
const createQrAndViewQr = (req, res) => {
  const { fullname, email, identityNumber, className } = req.body
  res.redirect(`https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=fullname~~${fullname}~~email~~${email}~~identityNumber~~${identityNumber}~~className~~${className}`)
}

const viewCtvTable =  async (req, res) => {
  let ctvs
  try {
    ctvs = await ctvService.getAllCtv()
  } catch (err) {
    console.log('Error to view ctv table')
  }
  
  return res.render('ctvTable', {
    title: 'Bảng thông tin cộng tác viên',
    data: ctvs,
  })
}

module.exports = {
  viewCreateForm,
  createQrAndViewQr,
  test,
  saveCTV,
  viewCtvTable,
}
