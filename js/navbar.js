/**
 * menu.js
 * 
 * Creates the full-width dropdown navigation menu using string concatenation
 * 
 * @author(s) AnotherBlackKid
 */
(function(){
    let title = document.querySelector('title');
    var parentEl = document.querySelector('.headerlinksdiv');

    // return and don't create a menu if on a user login page or no headerlinksdiv
    if( ( title && title.innerText.toLowerCase() == "user login") || !parentEl ) 
        return;

    var menu = document.createElement('div');
    menu.className = "banner-sucks banner-sucks-navigation";
    menu.innerHTML= "<div class='banner-sucks-navul'>" +
                        "<div class='banner-sucks-nav-item'> <a href= '/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu' > Home </a> </div>"+
                        "<div class='banner-sucks-nav-item'> <a href= '#' > Student </a> "+
                            "<div class='banner-sucks-nav-dropdown'>"+
                                "<div class='banner-sucks-dropdown-col'> <a class='banner-sucks-menu-header' href='/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_AdminMnu'>  Records </a> "+
                                    "<a href='/pls/PROD/bwskmgrd.p_write_term_selection'> Midterm Grades </a>"+
                                    "<a href='/pls/PROD/bwskogrd.P_ViewTermGrde'> Final Grades </a>"+
                                    "<a href='/pls/PROD/bwskotrn.P_ViewTermTran'> Academic Transcript </a>"+
                                    "<a href='/pls/PROD/bwskotrn.P_ViewTermTran'> View Holds </a>"+
                                    "<a href='//degreeworks.wm.edu/' target='_blank'> Degree Works </a>"+
                                "</div>"+
                                "<div class='banner-sucks-dropdown-col'> <a class='banner-sucks-menu-header' href='/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_ARMnu'> Account </a> "+
                                    "<a href='#'> eServices </a>"+
                                    "<a href='#'> 1098T Tax Notification </a>"+
                                "</div>"+
                                "<div class='banner-sucks-dropdown-col'> <a class='banner-sucks-menu-header' href='#'> Information </a> "+
                                    "<a href='/pls/PROD/bwgkomre.P_ViewEthnicityRace'> View Race/Ethnicity </a>"+
                                    "<a href='/pls/PROD/bwgkomre.P_SelectEthnicityRace'> Update Ethnicity and Race</a>"+
                                    "<a href='/pls/PROD/bwgkoinf.P_DispUpdName'> Change Name </a>"+
                                    "<a href='/pls/PROD/bwgkoinf.P_DispUpdSSN'> Change Social Security Number </a>"+
                                "</div>"+
                                "<div class='banner-sucks-dropdown-col'>"+
                                    "<a href='/pls/PROD/bwgkprxy.P_ManageProxy'> Proxy Management </a>"+
                                "</div>"+
                            "</div>" +
                        "</div>" +
                        "<div class='banner-sucks-nav-item '> <a href='/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu'> Registration </a>"+
                            "<div class='banner-sucks-nav-dropdown'>"+
                                "<div class='banner-sucks-dropdown-col'>" + 
                                    "<a href='/pls/PROD/bwskfreg.P_AltPin'> Add/Drop Classes </a>"+
                                    "<a href='/pls/PROD/bwskfcls.p_sel_crse_search'> Lookup Classes </a>"+
                                    "<a href='//courselist.wm.edu/courselist/' target='_blank'> Courselist </a>"+
                                "</div>"+
                            "</div>" +
                        "</div>"+
                        "<div class='banner-sucks-nav-item'> <a href= '/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_FinAidMainMnu' class='banner-sucks-nav-item' > Financial Aid </a>"+
                            "<div class='banner-sucks-nav-dropdown'>"+
                                "<div class='banner-sucks-dropdown-col'>"+
                                    "<a href='/pls/PROD/bwrksumm.P_DispSumm'> My Overall Status of Financial Aid </a>"+
                                    "<a href='/pls/PROD/bwrkelig.P_DispEligReq'> My Eligibility </a>"+
                                    "<a href='/pls/PROD/bwrkshop.p_menu'>Federal Shopping Sheet </a>"+
                                "</div>"+
                                "<div class='banner-sucks-dropdown-col'>"+
                                    "<a class='banner-sucks-menu-header' href='/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_FAAwdMnu'> My Award Information </a>"+
                                    "<a href='/pls/PROD/bwrkrhst.P_DispAwdHst'> Award History </a>"+
                                    "<a href='/pls/PROD/bwrkrhst.P_DispAwdAidYear'> Award By Aid Year </a>"+
                                    "<a href='/pls/PROD/bwrkpays.P_DispPaySched'> Award Payment Schedule </a>"+
                                    "<a href='/pls/PROD/bwrklhst.P_DispLoanHst'> Loan Application History </a>"+
                                "</div>"+
                            "</div>"+
                        "</div>"+
                        "<div class='banner-sucks-nav-item'> <a href='/pls/PROD/twbksite.P_DispSiteMap?menu_name_in=bmenu.P_MainMnu&depth_in=2&columns_in=3'> Links </a> "+
                            "<div class='banner-sucks-nav-dropdown'>"+
                                "<div class='banner-sucks-dropdown-col'>"+
                                    "<a class='banner-sucks-menu-header'> Other W&M Services </a>"+
                                    "<a href='/pls/PROD/twbksite.P_DispSiteMap?menu_name_in=bmenu.P_MainMnu&depth_in=2&columns_in=3'> Degree Works </a>"+
                                    "<a href='//secure.touchnet.net/C20604_tsa/web/index.jsp'> eServices </a>" +
                                    "<a href='//courselist.wm.edu/courselist/' target='_blank'> Courselist </a>"+
                                "</div>"+
                                "<div class='banner-sucks-dropdown-col'>"+
                                    "<a class='banner-sucks-menu-header'> Site </a>"+
                                    "<a href='/pls/PROD/twbksite.P_DispSiteMap?menu_name_in=bmenu.P_MainMnu&depth_in=2&columns_in=3'> Site Map </a>"+
                                    "<a href='/wtlhelp/wm_twbhhelp.htm'> Help </a>" +
                                    "<a href='/pls/PROD/twbkwbis.P_Logout'> Exit </a>"+
                                "</div>"+
                            "</div>"+
                        "</div>"
                    "</div>";
    // add menu to page
    parentEl.prepend( menu );
})();