/*
 * SMArt API client
 *
 * Josh Mandel
 * Ben Adida
 */

// HACK: hard-wired for now to port 7000 and the opener
var ORIGIN = "http://localhost:7000";
var FRAME = window.opener;

var SMART_CLIENT = Class.extend({
    init: function(smart_server_origin, frame) {
	this.smart_server_origin = smart_server_origin;
	this.frame = frame;
    },

    send_ready_message: function() {
	this.frame.postMessage(jQuery.toJSON({'type': 'status', 'status': 'ready'}), this.smart_server_origin);
    }
});

var SMART = new SMART_CLIENT(ORIGIN, FRAME);