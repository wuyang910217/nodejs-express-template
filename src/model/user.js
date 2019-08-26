import mongoose from 'mongoose';
import { defaultCollectionConfig } from './util';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    _id: {
      type: String,
      default: () => new mongoose.Types.ObjectId(),
    },
    token: { type: String, required: true }, // 用户token 用于用户验证
    // 个人信息
    username: String,
    avatar_url: String,
    count: { type: Number, required: true, min: 2, max: 10 },
    courseId: { type: String, ref: 'courses' }, // Population联表
    phone: { type: String, unique: true, minlength: 6, maxlength: 25 }, //手机号 唯一
    status: { type: String, enum: ['active', 'pending', 'deleted'] }, // 用户账号状态
  },
  defaultCollectionConfig,
);

// 最后一个参数表示自定义的此集合的名字
const UserModel = mongoose.model('users', UserSchema, 'users');

export async function findUserById(id, fields = {}) {
  return await UserModel.findById(id).select(fields);
}

export async function findUserByName(name, fields = {}) {
  return await UserModel.findOne({ name }).select(fields);
}

export async function updateUserById(id, data = {}) {
  await UserModel.update({ _id: id }, { $set: data });
}

export async function createUser(data) {
  const item = new UserModel(data);
  await item.save();
}
// export default UserModel;
