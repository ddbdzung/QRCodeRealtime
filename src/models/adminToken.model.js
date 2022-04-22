const mongoose = require('mongoose');

/**
 * Nếu có trên 1 token tồn tại trong database => Không cho phép đăng nhập
 */
const AdminToken = new mongoose.Schema(
    {  
      adminId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Admin',
    },
      token: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('AdminToken', AdminToken, 'AdminToken');
