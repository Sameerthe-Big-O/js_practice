//*dynamic keys
const dynamic = (obj, name, value) => {
  obj[name] = value;
  return obj;
};
