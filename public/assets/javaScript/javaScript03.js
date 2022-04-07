$(document).ready(function () {
    var personalURL = '/api/personalityImages';
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
                    var profileId = response[i].profileId;
                    var profileImage01 = response[i].profileImage01;
                    var profileImage02 = response[i].profileImage02;
                    var profileImage03 = response[i].profileImage03;

                    var slideDivEl = $('<div>').addClass('carousel-item img-fluid');
                    slideDivEl.attr({'dataIndex': i});

                    var image01El = $('<img>').addClass('d-block w-100');
                    image01El.css('text-align', 'left');
                    image01El.attr({'src': profileImage01, 'alt': `${profileId} slide`});

                    $('#carouselDisplay').append(slideDivEl);
                    slideDivEl.append(image01El);

                    
                    
                    
                    
                    
                    
                    
                    var slideDivE2 = $('<div>').addClass('carousel-item img-fluid');
                    slideDivE2.attr({'dataIndex': i});

                    var image02El = $('<img>').addClass('d-block w-100');
                    image02El.css('text-align', 'left');
                    image02El.attr({'src': profileImage02, 'alt': `${profileId} slide`});

                    $('#carouselDisplay').append(slideDivE2);
                    slideDivE2.append(image02El);


                    
                    
                    
                    
                    
                    
                    var slideDivE3 = $('<div>').addClass('carousel-item img-fluid');
                    slideDivE3.attr({'dataIndex': i});

                    var image03El = $('<img>').addClass('d-block w-100');
                    image03El.css('text-align', 'left');
                    image03El.attr({'src': profileImage03, 'alt': `${profileId} slide`});

                    $('#carouselDisplay').append(slideDivE3);
                    slideDivE3.append(image03El);
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
  