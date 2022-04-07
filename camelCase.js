const lodash = require('lodash')

let str = 'Hellow Sir'

let value = lodash.camelCase(str)

// => hellowSir

let str2 = '_______How are you---------------------'

let value2 = lodash.camelCase(str2)

// => howAreYou
