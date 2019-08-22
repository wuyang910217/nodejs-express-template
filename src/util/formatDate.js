const _formatNumber = n => {
  let str = n.toString();
  return str[1] ? str : '0' + str;
};

export function formatDate(type, date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  switch (type) {
    case 'year':
      return year + '';
    case 'month':
      return [year, month].map(_formatNumber).join('/');
    case 'day':
      return [year, month, day].map(_formatNumber).join('/');
      break;
    case 'hour':
      return [year, month, day, hour].map(_formatNumber).join('/');
      break;
    case 'min':
      return [year, month, day, hour, minute].map(_formatNumber).join('/');
      break;
    default:
      break;
  }
}
