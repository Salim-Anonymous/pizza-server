export default async ()=>{
    localStorage.setItem('user', JSON.stringify({
        "uuid": "O0It57a6g7YioYt631xq",
        "data": {
            "email": "salimpradhan613@gmail.com",
            "phone": 77291188,
            "name": "admin",
            "role": {
                "customer": true,
                "admin": true,
                "business": true
            }
        }
    }));
    const user = JSON.parse(localStorage.getItem('user'));
    const {name,phone,password,email,role}=user.data;
    return {
      userId: user.uuid,
      userName: name,
      userEmail: email,
      phone: phone,
      userRole: role,
    }
}
