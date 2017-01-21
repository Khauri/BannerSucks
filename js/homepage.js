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
    table.classList.add('content-column');
    // reorganize the DOM
    content_wrapper.appendChild(table);
    content_wrapper.appendChild(schedule_wrapper);
    dest.prepend(content_wrapper);
    
    var days = ["mon", "tue", "wed", "thu", "fri", "sat"];
    var schedule_html = "<div class='schedule-overlay'></div>"+
                        "<table class='schedule-table'>"+
                            "<thead>"+
                                "<th>&nbsp;</th>"+
                                (function(){
                                    var str = "";
                                    for(var i = 0; i < days.length; i++){
                                        str += "<th> <span> "+ days[i] + "</span> </th>"
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
                        "</table>";

    schedule_wrapper.innerHTML = schedule_html;

    Banner.getSchedule( function( schedule ){
        console.log(schedule);
        if( schedule ){
            for(var i = 0; i < schedule.length; i++){
                var klass = schedule[i]; // "class" is a reserved keyword
                klass.days.map( function( classDay ){
                    // round start time to nearest 30 minutes 
                    var hours = classDay.start_time.getHours() * 100,
                        ratio = classDay.start_time.getMinutes() /  60,
                        minutes = ratio >= .5 ? 30 : 0, //round to nearest half
                        time = hours + minutes,
                        difference = 100 * ((classDay.end_time.getTime() - classDay.start_time.getTime()) / 1800000) ; // (end ms - start ms) / ms per 30 minutes

                    var time_slot = document.querySelector('.timeslot-'+time);
                    console.log(time_slot);

                    if(time_slot){
                        var day_slot = time_slot.children[days.indexOf(classDay.day) + 1];
                        if(day_slot){
                            day_slot.innerHTML = "<div class='schedule-class-item' style='top:"+ratio*100+"%;height:"+difference+"%;'>"+
                                                    "<div>"+klass.className[1] +"</div>"+
                                                    "<div>"+klass.timeString + "</div>"+
                                                 "</div>";
                        }
                    }
                });
            }
        }else{
            // display information saying classes couldn't be loaded
        }
    });

})();