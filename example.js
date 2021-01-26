jQuery(document).ready(function( $ ){    
    jQuery(document).on( 'wbk_timeslots_rendered', function() {
    	jQuery('.wbk-slot-button').first().trigger('click');
    })
});
