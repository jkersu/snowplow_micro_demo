// -------------- Example of Snowplow tracking code ---------------------- //

// Example of a good event matching the schema

document.getElementById('goodButton').addEventListener('click', function() {
   
    document.getElementById('goodEventImage').style.display = 'block';
    document.getElementById('badEventImage').style.display = 'none';


    snowplow('trackSelfDescribingEvent', {
        event: {
            schema: "iglu:com.example/click_event/jsonschema/1-0-0",
            data: { 
                clickURL: "https://example.org/test.html",
            }
        }, 
        context: [
             {
                 schema: "iglu:com.example/button_entity/jsonschema/1-0-0",
                 data: {
                     buttonId: "GOOD_BUTTON",
                     buttonColor: "green"
                 }
             }
         ]
     });
    });

// Example of a bad event which fails validation

document.getElementById('badButton').addEventListener('click', function() {
    document.getElementById('badEventImage').style.display = 'block';
    document.getElementById('goodEventImage').style.display = 'none';

    snowplow('trackSelfDescribingEvent', {
        event: {
            schema: "iglu:com.example/click_event/jsonschema/1-0-0",
            data: { 
                clickURL: "https://example.org/test.html",
            }
        }, 
        context: [
             {
                 schema: "iglu:com.example/button_entity/jsonschema/1-0-0",
                 data: {
                     buttonId: 123
                 }
             }
         ]
     });
    
});
