/**
 * Sets up the header
 * @author AnotherBlackKid
 */
(function(){
    // get image locations for branding
    var stacked_watermark = chrome.extension.getURL('images/wm_wordmark_stacked.png');
    var cypher = chrome.extension.getURL('images/wm_cypher_white.png');

    // Add the viewport meta tag while we're here
    var meta = document.createElement('meta');
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1";
    document.querySelector('head').appendChild(meta);

    // add the header
    var header = document.createElement("div");
    header.className = "banner-sucks banner-sucks-header";

    header.innerHTML = "<a href='/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu' class='banner-sucks wm-wordmark'>"+
                            "<img src='"+stacked_watermark+"'>"+
                        "</a>"+
                        "<div class='banner-sucks wm-cypher'>"+
                            "<img class='banner-sucks wm-cypher' src='"+cypher+"'>" +
                        "</div>" +
                        "<div class='banner-sucks banner-sucks-local-menu'> "+
                            "<div>"+ // Needed in order to floor the following buttons
                                "<a href='/wtlhelp/wm_twbhhelp.htm' onclick=\"window.open('/wtlhelp/wm_twbhhelp.htm', 'PopupPage','height=500,width=450,scrollbars=yes,resizable=yes'); return false;\"> Help </a> <a href='/pls/PROD/twbkwbis.P_Logout'> Exit </a>"+ 
                            "</div>"+
                        "</div>";

    document.body.prepend(header);

})();