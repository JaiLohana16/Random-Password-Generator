let pass = document.getElementById("password")
const length = 12

let chars = "abcdefghijklmnopqrstuvwxyz"
let charscap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let num = "1234567890"
let spc = "!@#$%^&*()_+="
function createpass() {

    let i = 0;
    let passsword = ''

    while (i < length) {

        passsword += chars[Math.floor(Math.random() * 26)]
        passsword += charscap[Math.floor(Math.random() * 26)]
        passsword += num[Math.floor(Math.random() * 10)]
        passsword += spc[Math.floor(Math.random() * 13)]
        i += 4
    }
    // return passsword

    pass.value = passsword

}
function copy(){
    pass.select();
    document.execCommand("copy")
}

