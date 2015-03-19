// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var isArray = Array.isArray(obj);
	var isObject = false;

	if (Object.prototype.toString.call(obj) === "[object Object]") {
		isObject = true;
	}

	var recurse = function(obj, isObjectAnArray, isObjectAnObject) {
		if (typeof obj === "function") {
			if (isObjectAnArray) {
				return null;
			} else {
				return undefined;
			}
		} else if (typeof obj === "number") {
			if (isObjectAnArray || isObjectAnObject) {
				return obj;
			} else {
				return "" + obj;
			}

		} else if (typeof obj === "string") {
          if (isObjectAnArray) {
             return '"'+obj+'"';
          } else {
            return '"'+obj+'"';
            
          }
			

		} else if (typeof obj === "undefined") {
			if (isObjectAnArray) {
				return null;
			} else {
				return undefined;
			}

		} else if (typeof obj === "boolean") {

			if (isObjectAnArray || isObjectAnObject) {
				return obj;
			} else {
				return "" + obj;
			}

		} else if (obj === null ) {
          
          return "" + null;
                
        }else if (Array.isArray(obj)) {

			return "[" +
				obj.map ( function(value) {
					return recurse(value, isObjectAnArray, isObjectAnObject);

				}).join(",") + "]";


		} else if (Object.prototype.toString.call(obj) === "[object Object]") {

			var result = [];

			for (var key in obj) {
				if (typeof obj[key] === "function" || typeof obj[key] === undefined) {
					break;

				}
				var val = recurse(obj[key], isObjectAnArray, isObjectAnObject);
				if (val !== null) {
                  var stringOne =  '"'+ key +'"';
                 
					result.push(stringOne  +  ":" +val);
				}

			}

			return "{" + result.join(",") + "}";
		}
	};

	var answer = recurse(obj, isArray, isObject);
	return answer;

};



