$(document).ready(function () {
    var personalURL = '/api/personal';
    $('.carousel').carousel({
        interval: 5000
    })
    getPersonalDetails();
    

    function getPersonalDetails() {
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
                // $('#carouselDisplay').empty();
                // Log the queryURL
                console.log(response);
                // Log the resulting object
                
                for(var i = 0; i < response.length; i++) {
                    var profileId = response[i].id;
                    var profileImage = response[i].image;

                    var slideDivEl = $('<div>').addClass('carousel-item img-fluid');
                    slideDivEl.attr({'dataIndex': i});

                    var image01El = $('<img>').addClass('d-block w-100');
                    image01El.css('text-align', 'left');
                    image01El.attr({'src': profileImage, 'alt': `${profileId} slide`});

                    $('#carouselDisplay').append(slideDivEl);
                    slideDivEl.append(image01El);
                }
                // $("#modalBtn").on('click', profileBtn);
                
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
  