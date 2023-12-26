
const User = require('../model/user')



exports.getUsers = (req, res, next) => {
    User.findAll()
    .then(users => {
        res.status(201).json(users);
    })
    .catch(err => {
        console.log(err);
    })
}

exports.postUsers =  (req,res,next) => {
   const username = req.body.username;
   const email = req.body.email;
   const phone = req.body.phone;


    User.create({
        username: username,
        email: email,
        phone: phone
    })
    .then( (result) => {
        res.status(201).json({newUser : result});
    })
    .catch(err=> {
        console.log(err);
    })
};


// exports.postEditUser = (req, res, next) => {
//     const userId = req.body.id;
//     const updateUsername = req.body.username;
//     const updateEmail = req.body.email;
//     const updatePhone = req.body.phone;

//     User.findByPk(userId)
//     .then(user => {
//         user.id = userId;
//         user.username = updateUsername;
//         user.email = updateEmail;
//         user.phone = updatePhone;

//         res.status(201).json({updateUser: user});
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

exports.getEditUser = (req,res,next) => {
    const userId = req.params.userId;
    User.findByPk(userId)
    .then(user => {
        res.status(201).json({editUser: user});
        user.destroy();
    })
    .catch(err => {
        console.log(err);
    })
}


exports.getDeleteUser = (req,res,next) => {
    const userId = req.params.userId;
    User.findByPk(userId)
    .then(user => {
        user.destroy();
    })
    .catch(err => {
        console.log(err);
    })
}