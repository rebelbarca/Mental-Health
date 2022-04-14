$(document).ready(function () {
    var personalURL = '/api/reflection';
    getReflectionDetails();
    

    function getReflectionDetails() {
        // Here we run our AJAX call to the OpenWeatherMap API
        $.ajax({
            url: personalURL,
            method: "GET",
            dataType: "JSON",
            statusCode: {
                404: function () {
                    alert("not found");
                    return;
                }
            },
            
            success: function(response) {
                $(`#reflection`).empty();
                // Log the queryURL
                console.log(response);
                // Log the resulting object
                
                for(var i = 0; i < response.length; i++) {
                    var itemIdEl = response[i].sectionId;
                    var nameEl = response[i].name;
                    var paraEl = response[i].paragraph;


                    var displaydiv = $('<div>')



                    var nameEl01 = $('<h2>');
                    nameEl01.text(nameEl);
                    var paraEl01 = $('<p>');
                    paraEl01.text(paraEl);


                    var breakEl = $('<hr/>');


                    $(`#reflection`).append(displaydiv);

                    displaydiv.append(nameEl01);

                    displaydiv.append(paraEl01);

                    displaydiv.append(breakEl);
                }
                
            },
            error: function(){
                alert("Error, 404 (not found)!")
            }
        });

        function profileBtn(event) {
            // This 'preventDefault' method tells the user agent that if the event does not get explicitly
            // handled, its default action should not be taken as it normally would be.
            event.preventDefault(event);
            // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
            // any parent handlers from being notified of the event. You can use the method event.isPropagationStopped()
            // to know whether this method was ever called (on that event object).
            event.stopPropagation(event);
            console.log("city button clicked");
            var selectedNameIndex = $(this).attr('dataIndex').trim();
            console.log(selectedNameIndex);         
        }
    }
});
  