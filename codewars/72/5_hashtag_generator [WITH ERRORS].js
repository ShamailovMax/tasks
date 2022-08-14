// link: https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag (str) {
  if (str.trim().length !== 0 && str.trim().length < 140) {
    return '#'+str.split(' ').map(item => item[0].toUpperCase() + item.substring(1)).join('')
  } else return false
}