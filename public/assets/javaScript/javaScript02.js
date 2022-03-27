$(document).ready(function () {
    var personalURL = '/api/personal';
    
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
                $('#modalDisplay').empty();
                // Log the queryURL
                console.log(response);
                var imageArr = [
                    {image : 'assets/images/digiPic01.jpg'},
                    {image : 'assets/images/digiPic02.jpg'},
                    {image :'assets/images/digiPic03.jpg'}
                ]
                // Log the resulting object
                for(var i = 0; i < response.length; i++) {
                    var profileId = response[i].id;
                    var firstName = response[i].firstName;
                    var lastName = response[i].lastName;
                    // var personalImage = imageArr[i].image;
                    var profileImage = response[i].image;
                    var profileDescription = response[i].description;
                    var studentNum = response[i].studentNum;
                    var studentEmail = response[i].email;
                    var profileURL = response[i].url;
                    var gitHubURL = response[i].github;

                    var displayDiv = $('<div>').addClass('col-md-4');
                    var modalEl = $('<div>');
                    var image01El = $('<img>').addClass('img-fluid');

                    var row01El = $('<div>').addClass('row');
                    var btn01El = $('<button>').addClass('btn btn-primary label labelText')
                    btn01El.attr({'type': 'button', 'data-bs-toggle': 'modal', 'data-bs-target': `#${firstName}`, 'dataIndex': i, 'id': 'modalBtn', 'data-bs-backdrop': "static", 'data-bs-keyboard':"false"});
                    btn01El.text(`${firstName} ${lastName}`)
                    image01El.css('text-align', 'left');
                    image01El.attr('src', profileImage);
                    displayDiv.attr({'dataIndex': i});
                    // displayDiv.css({'border': 'solid', 'border-width': '1px', 'border-color': '#777777', 'padding-bottom': '20px'});

                    var div01El = $('<div>').addClass('modal fade');
                    div01El.attr({'id': firstName, 'tabindex': "-1", 'role': "dialog",
                    'aria-labelledby': "staticBackdropLabel", 'aria-hidden': "true"});

                    var div02El = $('<div>').addClass('modal-dialog');
                    // div02El.attr('role', 'document');

                    var div03El = $('<div>').addClass('modal-content');
                    var div04El = $('<div>').addClass('modal-header');
                    var header01El = $('<h2>').addClass('modal-title');
                    header01El.attr('id', "staticBackdropLabel");
                    header01El.text(`${firstName} ${lastName}`);
                    var btn02El = $('<button>').addClass('btn-close');
                    btn02El.attr({'type': 'button', 'data-bs-dismiss': 'modal', 'aria-label': 'Close'});
                    var span01El = $('<span>');
                    span01El.attr('aria-hidden', 'true');
                    span01El.html(`&times;`);
                    var div05El = $('<div>').addClass('modal-body');
                    var cardEl = $('<div>').addClass('card');
                    cardEl.css('width', '100%')
                    var image02El = $('<img>').addClass('card-img-top');
                    image02El.attr({'src': profileImage, 'alt': "Card image cap"});
                    var cardBodyEl = $('<div>').addClass('card-body');

                    var row03El = $('<div>').addClass('row');
                    var title01El = $('<h6>').addClass('col-md-4');
                    var studentNumEl = $('<h6>').addClass('col-md-7');
                    title01El.text('Student No.');
                    studentNumEl.text(studentNum);

                    var title02El = $('<h6>').addClass('col-md-4');
                    var emailEl = $('<a>').addClass('col-md-7 applink');
                    emailEl.attr({'href': studentEmail, 'target': '_blank'});
                    title02El.text('Email:');
                    emailEl.text(studentEmail);

                    var title03El = $('<h6>').addClass('col-md-4');
                    var gitHubEl = $('<a>').addClass('col-md-7 applink');
                    gitHubEl.attr({'href': gitHubURL, 'target': '_blank'});
                    title03El.text('Github:');
                    gitHubEl.text(gitHubURL);

                    var title04El = $('<h6>').addClass('col-md-4');
                    var websiteEl = $('<a>').addClass('col-md-7 applink');
                    websiteEl.attr({'href': profileURL, 'target': '_blank'});
                    title04El.text('Website:');
                    websiteEl.text(profileURL);

                    var cardTextEl = $('<p>').addClass('card-text');
                    cardTextEl.text(profileDescription);
                    var div06El = $('<div>').addClass('modal-footer');
                    var btn03El = $('<button>').addClass('btn btn-secondary');
                    btn03El.attr({'type': 'button', 'data-bs-dismiss': 'modal'});
                    btn03El.text('Close');
                    
                    $('#modalDisplay').append(displayDiv);

                    displayDiv.append(image01El);
                    displayDiv.append(modalEl);
                    modalEl.append(btn01El)

                    modalEl.append(div01El);
                    div01El.append(div02El);
                    div02El.append(div03El);
                    div02El.append(div04El);
                    div04El.append(header01El);
                    div04El.append(btn02El);
                    btn02El.append(span01El);
                    div02El.append(div05El);
                    div05El.append(cardEl);
                    cardEl.append(image02El);
                    cardEl.append(cardBodyEl);
                    cardBodyEl.append(row03El);
                    row03El.append(title01El);
                    row03El.append(studentNumEl);

                    cardBodyEl.append(row03El);
                    row03El.append(title02El);
                    row03El.append(emailEl);

                    cardBodyEl.append(row03El);
                    row03El.append(title03El);
                    row03El.append(gitHubEl);

                    cardBodyEl.append(row03El);
                    row03El.append(title04El);
                    row03El.append(websiteEl);

                    cardBodyEl.append(row03El);
                    row03El.append(cardTextEl);
                    div02El.append(div06El);
                    div06El.append(btn03El);

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
  