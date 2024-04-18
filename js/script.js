const userid = document.getElementById("userId")
// const password = document.getElementById("password")


let reggedUsers = ['526','527','528', '529', '530']
// addTwoNumber(6, 432, 22)


function loginUser(event) {
    event.preventDefault();
    if (!userid.value) {
        return alert('Id is emtpty')
    }
    const founderUser = reggedUsers.find((item) => {
        if (item === userid.value) {
          return item
        }
        else {
           return null; 
        }
    })
    if (founderUser) {
        alert("User is present", founderUser)
    }
    else {
        alert("User is not present")
    }
    // console.log("password",password)

    // if (!password.value) {
    //     return alert('Password is emtpty')
    // }
    console.log("User details are", founderUser)
    // alert("Submit button clicked!");
}