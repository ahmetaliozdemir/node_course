require('../src/db/mongoose');
const User = require('../src/models/user');

//5fa8ce089aaef05730f1b66f
//5fa8d572f8103289745cd247


// User.findByIdAndUpdate('5fa8d572f8103289745cd247', {age:1}).then((user) => {
//     console.log(user);
//     return User.countDocuments({age:1})
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5fa8ce089aaef05730f1b66f', 21)
.then((count) =>{
console.log(count);
})
.catch((e) => {
console.log(e);
})