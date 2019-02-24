let validator = function (object, rules) {

  /*
    Rules is an Array
    Typical Rule - {
        key: foo,
        required: bool,
        type: dataType,
        //Optional parameters
            minLength: Only valid for strings x Arrays
            maxLength: Only valid for Strings x Arrays
            length: Only valid for Strings x Arrays
            min: only valid for numbers
            max: only valid for numbers
            fields: only valid for JSON objects
            value: Onlyvalid for primitives

    }
    */

  let valid = true
  let errors = []
  // Take care of invalid situations
  if (arguments.length !== 2) {
    throw 'Incomplete parameters, validator object accepts two required parameters'
  }
  if (
    typeof object !== 'object' ||
    !Array.isArray(rules) 
  ) {
    throw 'Invalid parameter types'
  }
  for (let k in rules) {
    if (!rules[k].key || rules[k].key === '' || !rules[k].type) {
      throw 'Invalid rules'
    }
  }


  //Run tests
  rules.forEach(rule => {
    rule.type = rule.type.toLowerCase()
    let field  =  object[rule.key];
    // if (typeof field !== rule.type) {
    //   valid = false
    //   errors.push(`Field ${rule.key} is of invalid type`)
    //   return
    // }
    switch (rule.required) {
      case true:
        if (field == null || field === undefined ) {
          valid = false
          errors.push(` Field ${rule.key} is required `)
          return
        }
        switch (rule.type) {
          case 'string':
            if(rule.value && field !== rule.value){
                valid = false
                errors.push(`Field ${rule.key} is not equivalent to ${rule.value}`)
                return
            }
            if (rule.minLength && field.length < rule.minLength) {
              valid = false
              errors.push(
                `Field ${rule.key} doesn't meet minimum length of ${
                  rule.minLength
                }`
              )
            }
            if (rule.maxLength && field.length > rule.maxLength) {
              valid = false
              errors.push(
                `Field ${rule.key} doesn't meet maximum length of ${
                  rule.maxLength
                }`
              )
            }
            if (rule.length && field.length !== rule.length) {
              valid = false
              errors.push(
                `Field ${rule.key} doesn't meet required length of ${
                  rule.length
                }`
              )
            }
            break

            case "number": 
            if(parseInt(object[rule.key]) === NaN){
                valid = false
                errors.push(`Field ${rule.key} is NaN}`)
                return
            }
            if(rule.value && field !== rule.value){
                valid = false
                errors.push(`Field ${rule.key} is not equivalent to ${rule.value}`)
                return
            }
            if( rule.max && object[rule.key] > rule.max){
                valid = false
                errors.push(`Field ${rule.key} is greater than maximum value ${rule.max}`)
            }
            if( rule.min && object[rule.key] < rule.min){
                valid = false
                errors.push(`Field ${rule.key} is lesser than minimum value ${rule.min}`)
            }
            break

            case "object" :
                if(Array.isArray(field)){
                    if (rule.minLength && field.length < rule.minLength) {
                        valid = false
                        errors.push(
                          `Field ${rule.key} doesn't meet minimum length of ${
                            rule.minLength
                          }`
                        )
                      }
                      if (rule.maxLength && field.length > rule.maxLength) {
                        valid = false
                        errors.push(
                          `Field ${rule.key} doesn't meet maximum length of ${
                            rule.maxLength
                          }`
                        )
                      }
                      if (rule.length && field.length !== rule.length) {
                        valid = false
                        errors.push(
                          `Field ${rule.key} doesn't meet required length of ${
                            rule.length
                          }`
                        )
                      }
                }else if(field.constructor === {}.constructor && rule.fields){
                    for(let ind in rule.fields){
                        if( !field.hasOwnProperty(rule.fields[ind])){
                            valid = false
                            errors.push(
                              `Field ${rule.fields[ind]} is isn't present in object`
                            )
                        }
                    }
                }else{
                    errors.push("Unsupported datatype")
                }
            break
        }
        break
    }
  })
  return {
    isValid: valid,
    errors
  }
}

module.exports = validator
