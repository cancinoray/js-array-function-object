let userNamePrompt = prompt('Enter your username:');
let passwordPropmt = prompt('Enter your password:');

let database = [
    {
        name: "ray",
        password : "this123"
    } , 
    {
        name: "jay" ,
        password: "12345"
    }
]

function validation (username , password){
    for (let i = 0 ; i < database.length; i++ ){
        if(username === database[i].name &&
            password === database[i].password){ 
                alert('You are registered!')
                return
            }
        else{
                alert('You need to register first!')
                return
        }
        
    }

}

function signIn(username , password) { 
    validation(username , password);
    
}

signIn(userNamePrompt , passwordPropmt);