const initializeUsers =  [
    {  name: 'Fatimah Sarwar', bio: 'developer' },
    {name: 'Arman Mridha', bio: 'engineer' }
  ]


  let users = initializeUsers;

  const find = () => {
   
    return Promise.resolve(users)
  };

module.exports = {find};