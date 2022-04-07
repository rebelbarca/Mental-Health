$(document).ready(function () {
    var personalURL = '/api/personalityImages';
    $('.carousel').carousel({
        interval: 5000
    })
    getPersonalityDetails();
    

    function getPersonalityDetails() {
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
                    var profileIdEl = response[i].profileId;
                    var image01El = response[i].profileImage01;
                    var image02El = response[i].profileImage02;
                    var image03El = response[i].profileImage03;
                    var para01El = response[i].paragraph01;
                    var para02El = response[i].paragraph02;
                    var para03El = response[i].paragraph03;

                    var slideDiv01El = $('<div>').addClass('carousel-item img-fluid');
                    slideDiv01El.attr({'dataIndex': i});

                    var slideDiv02El = $('<div>').addClass('carousel-item img-fluid');
                    slideDiv02El.attr({'dataIndex': i});

                    var profileImage02El = $('<img>').addClass('d-block w-100');
                    profileImage02El.css('text-align', 'left');
                    profileImage02El.attr({'src': image02El, 'alt': `${profileIdEl} slide`});

                    var profileImage03El = $('<img>').addClass('d-block w-100');
                    profileImage03El.css('text-align', 'left');
                    profileImage03El.attr({'src': image03El, 'alt': `${profileIdEl} slide`});

                    var paragraph01El = $('<p>');
                    paragraph01El.text(para01El);
                    var paragraph02El = $('<p>');
                    paragraph02El.text(para02El);
                    var paragraph03El = $('<p>');
                    paragraph03El.text(para03El);
                    var breakEl = $('<hr/>');

                    $(`#carouselDisplay${i}`).append(slideDiv01El);
                    $(`#carouselDisplay${i}`).append(slideDiv02El);
                    slideDiv01El.append(profileImage02El);
                    slideDiv02El.append(profileImage03El);
                    $(`#profile${i}`).append(paragraph01El);
                    $(`#profile${i}`).append(paragraph02El);
                    $(`#profile${i}`).append(paragraph03El);
                    $(`#profile${i}`).append(breakEl);
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
  