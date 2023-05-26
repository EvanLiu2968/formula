/**
 * Created by hn on 14-3-17.
 */

module.exports = {
    createEvent: function ( type, e ) {

        var evt = document.createEvent( 'Event' );

        evt.initEvent( type, true, true );

        return evt;

    }
}
