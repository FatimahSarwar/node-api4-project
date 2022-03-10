const { nanoid } = require('nanoid')

function getId() {
  return nanoid().slice(0, 5)
}

const initializeUsers = () => ([
  { id: getId(), name: 'Ed Carter', bio: 'hero' },
  { id: getId(), name: 'Mary Edwards', bio: 'super hero' },
])


let users = initializeUsers()


const find = () => {

  return Promise.resolve(users)
}

module.exports = {find};