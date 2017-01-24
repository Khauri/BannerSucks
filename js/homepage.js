/**
 * Features added specifically to the homepage
 * 
 * @author AnotherBlackKid
 */
(function(){
    // check if on homepage
    // wrap the first table in a div and then add the div that will hold the schedule
    var content_wrapper = document.createElement('div'),
        schedule_wrapper = document.createElement('div'),
        table = document.querySelector('table.menuplaintable'),
        dest = document.querySelector('.pagebodydiv');
    content_wrapper.className = 'banner-sucks content-wrapper';
    schedule_wrapper.className = 'banner-sucks content-wrapper-schedule content-column';
    table.classList.add('content-column','banner-sucks-content-table');
    // reorganize the DOM
    content_wrapper.appendChild(schedule_wrapper);
    content_wrapper.appendChild(table);
    dest.prepend(content_wrapper);
    
    var days = ["sun","mon", "tue", "wed", "thu", "fri", "sat"];
    var schedule_html = "<div class='schedule-overlay'><div> No Schedule Information Currently Available </div> </div>"+
                        "<div class='section'>"+
                            "<table class='schedule-table'>"+
                                "<thead>"+
                                    "<th></th>"+
                                    (function(){
                                        var str = "";
                                        for(var i = 0; i < days.length; i++){
                                            str += "<th> <div> "+ days[i] + "</div> </th>"
                                        }
                                        return str;
                                    })()+
                                "</thead>"+
                                "<tbody>"+
                                    (function(){
                                        var str = "";
                                        for(var i = 700; i < 2400; i % 100 == 0? i += 30 : i += 70){
                                            str += "<tr class='timeslot-"+i+"'>"+
                                                        "<td> <span> "+ i +"</span>"+
                                                        // create spaces to fill table
                                                        (function(){
                                                            var str = "";
                                                            for( var i = 0; i < days.length; i++){
                                                                str += "<td></td>"
                                                            }
                                                            return str;
                                                        })()+
                                                    "</tr>";
                                        }
                                        return str;
                                    })()+
                                "</tbody>"+
                            "</table>"+
                        "</div>";

    schedule_wrapper.innerHTML = schedule_html;

    Banner.getSchedule( function( schedule ){
        if( schedule && schedule.length > 1 ){
            for(var i = 0; i < schedule.length; i++){
                var klass = schedule[i]; // "class" is a reserved keyword
                klass.days.map( function( classDay ){
                    // round start time to nearest 30 minutes 
                    var hours = classDay.start_time.getHours() * 100,
                        ratio = classDay.start_time.getMinutes() /  60,
                        minutes = ratio >= .5 ? 30 : 0, //round to nearest half
                        time = hours + minutes,
                        difference = 100 * ((classDay.end_time.getTime() - classDay.start_time.getTime()) / 1800000) ; // (end ms - start ms) / ms per 30 minutes
                var offset = (classDay.start_time.getMinutes()%30) / 30; 
                    var time_slot = document.querySelector('.timeslot-'+time);

                    if(time_slot){
                        var day_slot = time_slot.children[days.indexOf(classDay.day) + 1];
                        if(day_slot){
                            day_slot.innerHTML = "<div class='schedule-class-item' style='top:"+offset*100+"%;height:"+difference+"%;'>"+
                                                    "<div>"+ klass.className[1] +"</div>"+
                                                 "</div>";
                        }
                    }
                });
            }
            document.querySelector('.section').scrollTop = document.querySelector('.schedule-class-item').parentNode.parentNode.offsetTop || 0;
        }else{
            // display information saying a schedule could not be aquired
            document.querySelector('.schedule-overlay').classList.add('active');
        }
    });

})();