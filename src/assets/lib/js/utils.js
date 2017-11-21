/**
 * Created by talel on 07/06/17.
 */

(function($) {
    $.extend(true, window, {
        CS: {
            Data: Data
        }
    });

    function Data(options) {
        var zones = [];
        var devices = [];
        var alarms = [];

        function setZones(data) {
            zones = data;
        }
        function setDevices(data) {
            devices = data;
        }
        function setAlarms(data) {
            alarms = data;
        }
    }













})(jQuery);

