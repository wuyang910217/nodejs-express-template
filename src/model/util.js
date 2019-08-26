// mongoose schema 配置选项
export const defaultCollectionConfig = {
  // autoIndex: false, // 不自动创建索引（已经全局设置）
  versionKey: false, // 设置版本
  // collection: '' // 设置集合的名称
  timestamps: true, // mongoose自动会创建createdAt和updatedAt字段
  // 更新时 也会自动更新updatedAt字段
  // 或者设置不同的字段 timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
};

//Schema类型
// String
// Boolean
// Date
// Number
// Mixed
// ObjectId
// Array
// Decimal128
// Buffer

// 查询条件
// find({})
// .limit(10)
// .populate('courseId', 'name -_id')
// .sort({ occupation: -1 })
// .select({ name: 1, occupation: 1 });
