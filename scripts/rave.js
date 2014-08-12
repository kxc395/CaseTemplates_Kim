/* This was scraped from the t4-template 8/12/14 
* On page load it looks at the rave server, if there is data present in the callback it will add a 
* div to the top of the page with header, status,  event, headline, description, instruction, note, web, and contact info.
*
*/

/* Rave */
function raveCallback(data) {
    console.log('raveCallback');
    if (data !== undefined) {
        console.log(data);
        var div = document.createElement('div');
        div.style.backgroundColor = data.bgcolor;
        div.style.color = data.fgcolor;
        div.style.width = '98%';
        div.style.padding = '5px 1% 5px 1%';
        var html = '<div style="margin:auto; max-width:1000px; width:100%;text-align:center;">';
            html += (data.header) ? '<div>' + data.header +'</div>' : '';
            html += (data.status) ? '<div>' + data.status + '</div>' : '';
            html += (data.event) ? '<div>' + data.event + '</div>' : '';
            html += (data.headline) ? '<div>' + data.headline + '</div>' : '';
            html += (data.description) ? '<div>' + data.description + '</div>' : '';
            html += (data.instruction) ? '<div>' + data.instruction + '</div>' : '';
            html += (data.note) ? '<div>' + data.note + '</div>' : '';
            html += (data.web) ? '<div>' + data.web + '</div>' : '';
            html += (data.contact) ? '<div>' + data.contact + '</div>' : '';
        html += '</div>';
        div.innerHTML = html;
        document.body.insertBefore(div, document.body.firstChild);
    }
}

$.ajax({
  dataType: "jsonp", 
  url: "//webapps.case.edu/t4/rave/jsonp.pl?callback=raveCallback",
});

/* End Rave */