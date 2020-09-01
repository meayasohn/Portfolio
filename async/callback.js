'use strict'


//Promise 처리
class UserStorage {
  loginUser(id, password) 
  {
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        if(
          (id==='meaya' && password ==='callback') ||
          (id==='alex' && password === '9954')
        ){
          resolve(id);
        }else{
          reject(new Error('not found'));
        }
      }, 2000);
    });
  } 
    

  getRoles(user) {
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        if(user === 'meaya'){
          resolve({name: 'meaya', role: 'admin'});
        }else{
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage ();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user =>  alert(`Hello ${user.name}, your role is ${user.role}`))
  .catch(error =>alert(error));
