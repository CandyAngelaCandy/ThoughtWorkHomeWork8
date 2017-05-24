module.exports = function main(email, suffixes) {
  // Write your code here
  var index=email.indexOf("@");
  var suffix=email.substring(index+1);
  if(suffixes.indexOf(suffix)!=-1){
    return true;
  }
  return false;
};

