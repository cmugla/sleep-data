const request = require('request');

function getSleepData(req, res, next) {
  const api = {
    userOne: 'https://eight-public.s3.amazonaws.com/challenge/f9bf229fd19e4c799e8c19a962d73449.json?AWSAccessKeyId=AKIAIVWDTUULBADN74IQ&Expires=1499443525&Signature=zwQ7p89OJ5QAJ909VRzFNSgSqKc%3D',
    userTwo: 'https://eight-public.s3.amazonaws.com/challenge/d6c1355e38194139b8d0c870baf86365.json?AWSAccessKeyId=AKIAIVWDTUULBADN74IQ&Expires=1499443487&Signature=rNxbv9vd0T43fYQ79mwkJfeP5UU%3D',
    userThree: 'https://eight-public.s3.amazonaws.com/challenge/2228b530e055401f81ba37b51ff6f81d.json?AWSAccessKeyId=AKIAIVWDTUULBADN74IQ&Expires=1499443395&Signature=dvGVTVETwYze2TYLytsGE2k17%2Bo%3D'
  }

  if (api[req.params.userCode]) {
    const url = api[req.params.userCode]
    request({
      url,
      method: 'get',
      json: true
    },(err, response, body)=>{
      if(err) throw err;

      console.log(response)
      res.results = body;
      next();
    })
  } else {
    // if user does not exist
    res.results = { "error": "Sorry, no results" }
    next()
  }
}


module.exports = { getSleepData }