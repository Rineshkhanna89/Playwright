import axios from "axios";

async function createIssue(){

const response=await axios.post("https://rineshkhanna89.atlassian.net/rest/api/2/issue",
//Request Body
{
"fields":{
"project":{
    "key":"PJ"
},
"issuetype":{
    "name":"Bug"
},
"summary": "Home Page Dashboard not working as expected",
"description":"Home Page created by Playwright API to get response data"
}
},
//Headers
{
headers:{
    "Content-Type": "application/json"
},
auth:{
    "username":"rineshkhanna89@gmail.com",
    "password":"ATATT3xFfGF0iEB7l4Ja5EDw14BAdEaFGKMmDt9cidx0WAfYo8RY2E7hIgn8hYvKZvZrSDkfW2j5MMHISoS_w7ebe5H3WybI_0vWkRf-hglWlcVCa2SciWzY5w6T2pMxoIILv5q-5w05YQm1P5cKH4jo5HJR6e2q029JBBWB3JaglTdmODT4CD4=70A1DFDB"
}
}
)

console.log(response.data)

}

createIssue();