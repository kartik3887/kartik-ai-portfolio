export const setToken = (token)=>{
  localStorage.setItem(
    "kartik_ai_token",
    token
  );
};


export const setUser = (user)=>{
  localStorage.setItem(
    "kartik_ai_user",
    JSON.stringify(user)
  );
};


export const getUser = ()=>{
  const user = localStorage.getItem(
    "kartik_ai_user"
  );

  return user ? JSON.parse(user) : null;
};


export const getToken = ()=>{
  return localStorage.getItem(
    "kartik_ai_token"
  );
};


export const removeAuth = ()=>{
  localStorage.removeItem(
    "kartik_ai_token"
  );

  localStorage.removeItem(
    "kartik_ai_user"
  );
};