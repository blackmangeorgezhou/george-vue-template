export default {
  login: (request) => {
    const { userName, password } = JSON.parse(request.body)
    let loginResult

    if (userName === 'admin' && password === '123') {
      loginResult = {
        userId: 1,
        userName,
        password,
        email: 'admin@xdf.cn',
        isActive: true
      }
    } else if (userName === 'tom' && password === '123') {
      loginResult = {
        userId: 2,
        userName,
        password,
        email: 'tom@xdf.cn',
        isActive: true
      }
    } else if (userName === 'jack' && password === '123') {
      loginResult = {
        userId: 3,
        userName,
        password,
        email: 'jack@xdf.cn',
        isActive: true
      }
    }

    return loginResult
  }
}
