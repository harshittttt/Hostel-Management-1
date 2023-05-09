import jwt from 'jsonwebtoken'

// const generateToken = (id) => {  
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d',
//   })
// }
const generateToken = (id) => {  
  let JWT_SECRET = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
    return jwt.sign({ id }, JWT_SECRET, {
      expiresIn: '30d',
    })
  }


export default generateToken
