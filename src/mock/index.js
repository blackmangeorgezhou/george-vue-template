/* eslint-disable no-unused-vars */
import Mock from 'mockjs'

import user from './user'
const Random = Mock.Random

const METHOD = {
  GET: 'get',
  POST: 'post'
}

Mock.mock(/\/login/, METHOD.POST, user.login)
