import { User } from './models/User';

const user = new User({name: '', age: 9});

user.on('change', () => {})
user.on('change', () => {})
user.on('sdfskdfkj', () => {})

console.log(user);