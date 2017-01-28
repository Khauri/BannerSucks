/**
 * Functions to control some aspects of banner
 * @author AnotherBlackKid
 */
var Banner = (function(){
    /**
     * Makes an asynchronous request and returns the page as a document
     * @param type The Type of request. Defaults to 'GET'
     * @param url 
     * @returns Promise
     */
    function request(type, url, cb){
        // create 
        var promise = new Promise( function( resolve, reject){
            if ( typeof cb != "function" ) 
                return false;

            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(){
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        if(typeof cb == 'function'){
                            cb( xhr.response );
                        }
                        resolve( xhr.response );
                    }else{
                        cb( null );
                        resolve( null );
                    } 
                }
            }
            var requestType = type ? type.toUpperCase() : 'GET';
            xhr.open( requestType, url, true );
            xhr.responseType = "document";
            xhr.send();
        });

        return promise;
    }
    /**
     * Scrapes the webpage in order to initialize the callback with a JSON object representing the schedule
     */
    function parseSchedule( cb, res ){
        if ( !res ) {
            cb( null );
            return;
        }
        var title = res.querySelector('title');
        if ( title && title.innerText.search(/Student Detail Schedule/gi) > -1 ){
            var classes = [];
            var tables = res.querySelectorAll(".pagebodydiv table.datadisplaytable");
            // The class schedule is represented by two tables
            for( var i = 0; i < tables.length; i+= 2){
                details = tables[i];
                schedule = tables[i+1].querySelectorAll('tr')[1].querySelectorAll('td');

                var className = details.querySelector('.captiontext').childNodes[0].data.split("-");
                classes.push({
                    className : className,
                    timeString : schedule[1].innerText,
                    dayString : schedule[2].innerText,
                    location : schedule[3].innerText,
                    instructor : schedule[6].innerText,
                    crn : null, // not really necessary, but might implement later
                    days : (function(){
                        var dayMap = { "M" :"mon", "T" : "tue", "W" : "wed", "R" : "thu", "F" : "fri", "S" : "sat"};
                        
                        var days = schedule[2].innerText.split("");
                        // get the time
                        var time = schedule[1].innerText.split("-").map(function(n){ 
                            return new Date("1996-06-18  "+n);;
                        });

                        return days.map( function( day ){
                            return {
                                day : dayMap[day.toUpperCase()],
                                start_time : time[0],
                                end_time : time[1]
                            }
                        });
                    })()
                });
            }
            cb ( classes );
        } // if we need to select the term
        else if (title && title.innerText.search(/select term/gi) > -1 ){
            Banner.selectTerm( 
                function( doc ){
                    parseSchedule(cb, doc)
                }, 
                '/pls/PROD/bwskfshd.P_CrseSchdDetl' // TODO: redirect to course schedule after selecting term
            );
        } // if we're not selecting the term or getting the schedule or we got redirected to a weird place
        else{
            cb ( null );
        }
    }

    return {
        /**
         * This automatically selects the term and returns the page it redirects to
         * @param cb The callback function
         * @param redirectSrc TODO: The url string of the document to return post selection of term
         */ 
        selectTerm : function( cb, redirectSrc ){
            // launches an iFrame and selects the scedule
            var iframe = document.createElement('iframe');
                iframe.onload = function(){
                    var doc = iframe.contentDocument,
                        title = doc.querySelector('title').innerText,
                        options = doc.querySelectorAll('.pagebodydiv option'),
                        select = doc.querySelector('.pagebodydiv select'),
                        form = doc.querySelector('.pagebodydiv form');

                    if ( title.search( /select term/gi ) > -1  )
                    {
                        for(var i = 0; i < options.length;i++){
                            if(options[i].innerText.search( /view|only/gi ) == -1 ){
                                select.value = options[i].value;
                            }
                        }
                        form.submit();
                    } // if we've successully gotten the term or failed to get it remove the frame
                    else
                    {
                        // select the term
                        cb( doc );
                        document.body.removeChild(iframe);
                    }
                }
                iframe.src = '/pls/PROD/bwskfshd.P_CrseSchdDetl'; // change to select term page instead and have it redirect
                iframe.style.display = "none";
                document.body.appendChild(iframe);
        },
        /**
         * Asynchronously get the user's schedule with a bit of web scraping
         * @param cb - the function to call once the schedule is gotten
         * @param doc - the document that holds the schedule. If omitted this defaults to getting the document from a url
         */
        getSchedule : function( cb ){
            request('GET', 'https://banweb.wm.edu/pls/PROD/bwskfshd.P_CrseSchdDetl', parseSchedule.bind(this, cb) );
        }
    }
})();