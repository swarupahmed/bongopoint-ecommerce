export async function getUserData(uid){
    let res=await fetch('/api/user?id='+uid);
    let result=await res.json()
    console.log(result)
    return result
}

export async function createUserData(user){
    let userData={
        _id: user.uid,
        email: user.email,
        displayName:user.displayName,
        deliveryAddress:{
            phone:'',
            division:'',
            district:'',
            thana:'',
            address:''
        }
    }
    let res = await fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    let result = await res.json();
    console.log(result);
    return {userData,result}
}


export async function updateUserAddress(address){
    let res = await fetch('/api/user', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(address)
    });
    let result = await res.json();
    console.log(result);
    return {address,result}
}