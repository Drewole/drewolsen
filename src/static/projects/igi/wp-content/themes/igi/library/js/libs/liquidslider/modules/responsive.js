makeResponsive:function(){var f=this;d(f.sliderId+"-wrapper").addClass("ls-responsive").css({"max-width":d(f.sliderId+" .panel:first-child").width(),width:"100%"});d(f.sliderId+" .panel-container").css("width",100*f.panelCountTotal+f.pSign);d(f.sliderId+" .panel").css("width",100/f.panelCountTotal+f.pSign);if(f.options.hideArrowsWhenMobile){f.leftWrapperPadding=d(f.sliderId+"-wrapper").css("padding-left");f.rightWrapperPadding=(f.$sliderWrap).css("padding-right")}f.responsiveEvents();d(c).bind("resize",function(){f.responsiveEvents();clearTimeout(f.resizingTimeout);f.resizingTimeout=setTimeout(function(){var g=(f.options.autoHeight)?f.getHeight():f.getHeighestPanel(f.nextPanel);f.adjustHeight(false,g)},500)})},responsiveEvents:function(){var g=this,f=(g.options.hideArrowsThreshold||g.options.mobileUIThreshold||(g.totalNavWidth+10));if((g.$sliderId).outerWidth()<f){if(g.options.mobileNavigation){(g.navigation).css("display","none");(g.dropdown).css("display","block");(g.dropdownSelect).css("display","block");d(g.sliderId+"-nav-select").val(g.options.mobileNavDefaultText)}if(g.options.dynamicArrows){if(g.options.hideArrowsWhenMobile){(g.leftArrow).remove().length=0;(g.rightArrow).remove().length=0}else{if(!g.options.dynamicArrowsGraphical){(g.leftArrow).css("margin-"+g.options.dynamicTabsPosition,"0");(g.rightArrow).css("margin-"+g.options.dynamicTabsPosition,"0")}}}}else{if(g.options.mobileNavigation){(g.navigation).css("display","block");(g.dropdown).css("display","none");(g.dropdownSelect).css("display","none")}if(g.options.dynamicArrows){if(g.options.hideArrowsWhenMobile&&(!(g.leftArrow).length||!(g.rightArrow).length)){g.addArrows();g.registerArrows()}else{if(!g.options.dynamicArrowsGraphical){(g.leftArrow).css("margin-"+g.options.dynamicTabsPosition,(g.navigation).css("height"));(g.rightArrow).css("margin-"+g.options.dynamicTabsPosition,(g.navigation).css("height"))}}}}d(g.sliderId+"-wrapper").css("width","100%");if(g.options.mobileNavigation){(g.dropdownSelect).change(function(){g.setNextPanel(parseInt(d(this).val().split("tab")[1],10)-1)})}},
