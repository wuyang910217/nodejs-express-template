import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => new mongoose.Types.ObjectId(),
    },
    token: String, // 用户token 用于用户验证
    // 个人信息
    username: String,
    avatar_url: String,
    phone: { type: String, unique: true }, //手机号 唯一
    status: { type: String, enum: ['active', 'pending', 'deleted'] }, // 用户账号状态
    updated_at: {
      type: Date,
      default: () => new Date(),
    },
    created_at: {
      type: Date,
      default: () => new Date(),
    },
  },
  { versionKey: false },
);

const UserModel = mongoose.model('users', UserSchema);

export async function findUserById(id, fields = {}) {
  return await UserModel.findOne({ _id: id }, fields);
}

// export default UserModel;
