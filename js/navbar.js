/**
 * menu.js
 * 
 * Creates the full-width dropdown navigation menu using string concatenation
 * 
 * @author(s) AnotherBlackKid
 */
(function(){
    // get a few elements for reference
    let title = document.querySelector('title');
    var parentEl = document.querySelector('.headerlinksdiv');

    // On the homepage there's an annoying textnode that needs to be removed
    if( window.location.href.search(/twbkwbis.P_GenMenu\?name=homepage/gi) > -1) {
        document.body.childNodes.forEach( function( node ) {
            if ( node.nodeType == 3 && node.nodeValue.search("SESSID=") > -1 ) {
                document.body.removeChild( node );
            }
        });
    }

    // return and don't create a menu if on a user login page, logout page, or no headerlinksdiv
    if( ( title && title.innerText.search(/login|logout/gi) > -1 ) || !parentEl ) 
        return;

    var menu = document.createElement('div');
    menu.className = "banner-sucks banner-sucks-navigation";
    menu.innerHTML= "<div class='banner-sucks-navul'>" +
                        "<div class='banner-sucks-nav-item'> <a href= '/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_MainMnu' > Home </a> </div>"+
                        "<div class='banner-sucks-nav-item'> <a href= '/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_StuMainMnu' > Student </a> "+
                            "<div class='banner-sucks-nav-dropdown'>"+
                                "<div class='banner-sucks-dropdown-col'> <a class='banner-sucks-menu-header' href='/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_AdminMnu'>  Records </a> "+
                                    "<a href='/pls/PROD/bwskmgrd.p_write_term_selection'> Midterm Grades </a>"+
                                    "<a href='/pls/PROD/bwskogrd.P_ViewTermGrde'> Final Grades </a>"+
                                    "<a href='/pls/PROD/bwskotrn.P_ViewTermTran'> Academic Transcript </a>"+
                                    "<a href='/pls/PROD/bwsktesc.p_view_tests'> View Test Scores </a>"+
                                    "<a href='/pls/PROD/bwskoacc.P_ViewHold'> View Holds </a>"+
                                "</div>"+
                                "<div class='banner-sucks-dropdown-col'> <a class='banner-sucks-menu-header' href='/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_ARMnu'> Account </a> "+
                                    "<a href='/pls/PROD/GWGKTNET.p_redirect'> eServices </a>"+
                                    "<a href='/pls/PROD/bwtktxns.p_disp_tax_notification'> 1098T Tax Notification </a>"+
                                "</div>"+
                                "<div class='banner-sucks-dropdown-col'> <a class='banner-sucks-menu-header' href='/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_GenMnu'> Personal Information </a> "+
                                    "<a href='/pls/PROD/bwgkomre.P_ViewEthnicityRace'> View Race/Ethnicity </a>"+
                                    "<a href='/pls/PROD/bwgkomre.P_SelectEthnicityRace'> Update Ethnicity and Race</a>"+
                                    "<a href='/pls/PROD/bwgkoinf.P_DispUpdName'> Change Name </a>"+
                                    "<a href='/pls/PROD/bwgkoinf.P_DispUpdSSN'> Change Social Security Number </a>"+
                                "</div>"+
                                "<div class='banner-sucks-dropdown-col'>"+
                                    "<a class='banner-sucks-menu-header'> Management </a>"+
                                    "<a href='/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_AdmsMnuStu'> Admissions </a>"+
                                    "<a href='/pls/PROD/bwckcapp.P_DispCurrent'> Degree Evaluation </a>"+
                                    "<a href='/pls/PROD/bwskgrad.p_disp_grad_term'>Apply to Graduate </a>"+
                                    "<a href='/pls/PROD/bwskgrad.p_view_gradapp'> View Application to Graduate </a>"+
                                    "<a href='/pls/PROD/bwgkprxy.P_ManageProxy'> Proxy Management </a>"+
                                "</div>"+
                            "</div>" +
                        "</div>" +
                        "<div class='banner-sucks-nav-item '> <a href='/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_RegMnu'> Registration </a>"+
                            "<div class='banner-sucks-nav-dropdown'>"+
                                "<div class='banner-sucks-dropdown-col'>" + 
                                    "<a class='banner-sucks-menu-header'> Classes </a>"+
                                    "<a href='/pls/PROD/bwskfreg.P_AltPin'> Add/Drop Classes </a>"+
                                    "<a href='/pls/PROD/bwskfcls.p_sel_crse_search'> Lookup Classes </a>"+
                                    "<a href='/pls/PROD/bwskfreg.P_ChangeCrseOpt'> Change Class Options </a>" +
                                    "<a href='/pls/PROD/bwskflib.P_SelDefTerm'> Select Term </a>" +
                                    "<a href='//courselist.wm.edu/courselist/' target='_blank'> Courselist </a>"+
                                "</div>"+
                                "<div class='banner-sucks-dropdown-col'>" + 
                                    "<a class='banner-sucks-menu-header'> Schedule </a>"+
                                    "<a href='/pls/PROD/bwskfshd.P_CrseSchdDetl'> Student Detail Schedule </a>"+
                                    "<a href='/pls/PROD/bwskfshd.P_CrseSchd'> Weekly Schedule </a>"+
                                    "<a href='/pls/PROD/bwckschd.p_disp_dyn_sched'> Class Schedule Search </a>"+
                                "</div>"+
                                "<div class='banner-sucks-dropdown-col'>" + 
                                    "<a class='banner-sucks-menu-header'> Registration Information </a>"+
                                    "<a href='/pls/PROD/bwskrsta.P_RegsStatusDisp'> My Registration Status </a>"+
                                    "<a href='/pls/PROD/bwskffee.P_FeeAsses'> Registration Fee Assessment </a>"+
                                    "<a href='/pls/PROD/bwrktivw.P_TitleIVWithdraw'> Withdrawal Information </a>"+
                                "</div>"+
                            "</div>" +
                        "</div>"+
                        "<div class='banner-sucks-nav-item'> <a href= '/pls/PROD/twbkwbis.P_GenMenu?name=bmenu.P_FinAidMainMnu' class='banner-sucks-nav-item' > Financial Aid </a>"+
                            "<div class='banner-sucks-nav-dropdown'>"+
                                "<div class='banner-sucks-dropdown-col'>"+
                                    "<a class='banner-sucks-menu-header'> General Information </a>"+
                                    "<a href='/pls/PROD/bwrksumm.P_DispSumm'> My Overall Status of Financial Aid </a>"+
                                    "<a href='/pls/PROD/bwrkelig.P_DispEligReq'> My Eligibility </a>"+
                                    "<a href='/pls/PROD/bwrkshop.p_menu'> Federal Shopping Sheet </a>"+
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
                                    "<a href='//degreeworks.wm.edu/' target='_blank'> Degree Works </a>"+
                                    "<a href='//secure.touchnet.net/C20604_tsa/web/index.jsp' target='_blank'> eServices </a>" +
                                    "<a href='//courselist.wm.edu/courselist/' target='_blank'> Courselist </a>"+
                                "</div>"+
                                "<div class='banner-sucks-dropdown-col'>"+
                                    "<a href='/pls/PROD/twbksite.P_DispSiteMap?menu_name_in=bmenu.P_MainMnu&depth_in=2&columns_in=3'> Site Map </a>"+
                                "</div>"+
                            "</div>"+
                        "</div>"
                    "</div>";
    // add menu to page
    parentEl.prepend( menu );
})();