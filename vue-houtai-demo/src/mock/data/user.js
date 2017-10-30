import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'haoshuhui',
    password: '6220',
    avatar: 'http://img02.store.sogou.com/app/a/10010016/debcfa5fbc02ae098fce38de1550769a',
    name: '郝书辉'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
