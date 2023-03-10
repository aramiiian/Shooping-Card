const uuid = (length = 12) => Math.random().toString(36).substring(3, length);

export default uuid;
