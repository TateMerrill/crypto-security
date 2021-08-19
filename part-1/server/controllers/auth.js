const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      const { username, password } = req.body
      console.log(req.body)

      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username ) {
          const existing = bcrypt.compareSync(password, users[i].passwordHash)
          if (existing){
            let userToReturn = {...users[i] }
            delete userToReturn.passwordHash
            res.status(200).send(userToReturn)
            return
          }
        }
      }
      res.status(400).send("User not found.")
    },

    register: (req, res) => {
      const {username, email, firstName, lastName, password} = req.body
      const salt = bcrypt.genSaltSync(5)
      const passwordHash = bcrypt.hashSync(password, salt)
      let user = {
        username,
        email,
        firstName,
        lastName, 
        passwordHash
      }

        console.log('Registering User')
        console.log(req.body)
        users.push(user)
        let userToReturn = {...user}
        delete userToReturn.passwordHash
        res.status(200).send(userToReturn)
    }
}