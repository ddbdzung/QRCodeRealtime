const { ctvService } = require('../services')

// [GET /]
const viewHome = (req, res) => {
  res.render('submitForm', {
    title: 'Mẫu điền thông tin CTV HIT',
  })
}
// [GET /test]
const test = (req, res) => {
  res.render('test')
}

const saveCTV = async (req, res) => {
  try {
    await ctvService.createNewCtv(req.body)
  } catch (err) {
    console.log(err)
  }
}

// [POST /createQR]
const createQrAndViewQr = (req, res) => {
  const { fullname, email, gender, identityNumber, className } = req.body
  res.redirect(`https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=fullname~~${fullname}~~email~~${email}~~identityNumber~~${identityNumber}~~className~~${className}~~gender~~${gender}`)
}

module.exports = {
  viewHome,
  createQrAndViewQr,
  test,
  saveCTV,
}