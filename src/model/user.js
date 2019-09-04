import mongoose from 'mongoose';
import { defaultCollectionConfig } from './util';
import { genPwd } from '../util/index';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    _id: {
      type: String,
      default: mongoose.Types.ObjectId,
    },
    token: { type: String, required: true }, // 用户token 用于用户验证
    // 个人信息
    // unique表示设置一个全局唯一的索引 而不是字段值不重复的意思
    // 相对应的sparse: true 表示设置一个稀疏索引
    username: {
      type: String,
      unique: true,
      required: true,
      maxlength: 20,
      minlength: 2,
    },
    avatar_url: String,
    profile: Schema.Types.Mixed, //object
    decimal: Schema.Types.Decimal128,
    names: [String], // 数组
    deleted: { type: Boolean, default: false },
    count: { type: Number, required: true, min: 2, max: 10 },
    courseId: { type: String, ref: 'Course' }, // Population联表
    phone: { type: String, unique: true, minlength: 6, maxlength: 25 }, //手机号 唯一
    status: { type: String, enum: ['active', 'pending', 'deleted'] }, // 用户账号状态
    joined_at: { type: Date, default: Date.now }, // Date.now而不是Date.now()
  },
  defaultCollectionConfig,
);

// 必须放在创建model之前
UserSchema.methods.hello = function() {
  return 'hello ' + this.username;
};

UserSchema.statics.findByName = function(name) {
  return this.find({ name: new RegExp(name, 'i') });
};

// 与下面定义的函数一样
UserSchema.statics.findUserByName = async function(name, fields = {}) {
  return await this.findOne({ name }).select(fields);
};

// 最后一个参数表示自定义的此集合的名字
const UserModel = mongoose.model('User', UserSchema, 'users');

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

// 创建第一个管理用户
export async function createOwnerUser() {
  const count = await UserModel.find({}).count();
  if (count < 1) {
    const pwd = await genPwd('izEhQDy4jVxt6blO');
    const user = new UserModel({
      phone: '18612341234',
      role: 'owner',
      username: '毛豆管理员',
      password: pwd,
    });
    await user.save();
    console.log('初始化管理员账号成功...');
  }
}

// export default UserModel;
