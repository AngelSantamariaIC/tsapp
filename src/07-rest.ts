import {User,ROLES} from './01-enum';

const currentUser: User = {
  username: 'AngelSG',
  role: ROLES.CUSTOMER
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN){
    return true;
  }
  return false
}

const rta = checkAdminRole();
console.log('checkAdminRole', rta)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1){
    return true;
  }
  if (currentUser.role === role2){
    return true;
  }
  return false
}

const rta2 = checkRole(ROLES.ADMIN,ROLES.SELLER);
console.log('checkRole', rta2);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// varios parametros
export const checkRolev2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)){
    return true;
  }
  return false
}

const rta3 = checkRolev2([ROLES.ADMIN,ROLES.SELLER]);

console.log('checkRolev2', rta3);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Refactor ...roles obligamos a trasformar lo recibido en un array
export const checkRolev3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)){
    return true;
  }
  return false
}

const rta4 = checkRolev3(ROLES.ADMIN,ROLES.SELLER);

console.log('checkRolev3', rta4);
