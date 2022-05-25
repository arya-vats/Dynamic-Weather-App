const EvenetEmitter = require("events");// this is used to create the event class.

const event = new EvenetEmitter(); // this is used to create an instance of the event class.

// event.on("Say my name", () =>{    // used to listen to the events , here this is listening to the event  say my name and is printing my name .
//                                           //basically what we want node js to do with our event that we have created.
//     console.log("Your name is arya");
// });
// event.on("Say my name", () =>{    // we can even do multiple operations with only one event
                                     
//     console.log("Your name is arya");
// });
// event.on("Say my name", () =>{    // 
                                     
//     console.log("Your name is arya");
// });

// event.emit("Say my name"); //emits our own event, here say my name is the name of the event. Event emit bad me hga pehle event kya karega vo define hoga.


event.on("checkPage", (sc,msg) =>{
    console.log(`status code is ${sc} and the page is ${msg}`); // this is  how we define the arguments and used the parameters.
});

event.emit("checkPage", 200, "ok"); //this is how we pass the parameters 