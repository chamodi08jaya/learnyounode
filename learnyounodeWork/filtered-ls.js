const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function callback(err, list) {
  if (err) return console.error(err)
  list.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
