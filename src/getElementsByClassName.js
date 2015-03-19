// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){ 

  var result = [];

  function recurse (node) {
       
        if(node.classList && node.classList.contains (className)){
          if(result.indexOf(node)===-1) {
            result.push(node);
         }
        }

        for (var i = 0; i < node.childNodes.length; i++) {
            if (node.childNodes[i].classList && node.childNodes[i].classList.contains (className)) {
               result.push (node.childNodes[i]);
             }
             recurse (node.childNodes[i]);
        
        }
     
  }

 recurse (document.body);
 return result;

};
