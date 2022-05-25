const data={
    name: "Arya",
    age: 21
}

const jsondata = JSON.stringify(data); //this is used to convert object into json data.
const revdata = JSON.parse(jsondata);// This is used to convert json data into original data.