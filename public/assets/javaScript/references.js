$(document).ready(function () {
    var personalURL = '/api/references';
    getreferencesDetails();
    

    function getreferencesDetails() {
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
                $(`#reference`).empty();
                // Log the queryURL
                console.log(response);
                // Log the resulting object
                
                for(var i = 0; i < response.length; i++) {
                    var itemIdEl = response[i].sectionId;
                    var refEl = response[i].reference;

                    var displaydiv = $('<div>')



                    var referenceEl = $('<p>');
                    referenceEl.text(refEl);

                    var breakEl = $('<hr/>');


                    $(`#reference`).append(displaydiv);

                    displaydiv.append(referenceEl);

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
  