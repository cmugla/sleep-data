export default class AjaxAdapter{
  constructor(fetch){
    if(!fetch) throw "We need the Fetch library to make this work, bru.";
  }

  getSleepData(userCode){
    return fetch(`/api/${userCode}`).then(r => r.json())
  }
}