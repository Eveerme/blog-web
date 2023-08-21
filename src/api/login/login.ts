import request from "@/utils/request";

interface loginData{
  useraccount:string,
  password:string
}
export function login(data:loginData){
    return request({
        url:'/user/login',
        method:'post',
        data
    })
}

export function logout(){
  return request({
    url: '/user/logout',
    method: 'get',
  })
}
