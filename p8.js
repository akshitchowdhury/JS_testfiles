var info = {

'name' : "Pratikshit Chowdhury",
'email' : "akshitchow@gmai.com",
'phone' : 8638498584,
'adress' : "park-street@458"

}

function box(){
    return `${this} ${info.name} ${info.adress}`
}

console.log(box.call("shura"))