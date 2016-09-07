/**
 * Created by wayne on 9/1/2016.
 */
(function() {
    var DND = {

        init : function() {
            try {
                alert("hi");
                /*
                this.init();
                this.loadConfig();
                this.loadState();
                */
            } catch(e) {
                alert("Error: "+e);
            }
        },

        helpers : {
            registerEvent: function (element, event, handler, capture) {
                if (/msie/i.test(navigator.userAgent)) {
                    element.attachEvent('on' + event, handler);
                } else {
                    element.addEventListener(event, handler, capture);
                }
            }
        }

    };
    DND.helpers.registerEvent(window, 'load', function() {
        DND.init();
    }, false);
}());


/*
window.onload = function() {


    function select_faction(id) {
        alert(id);
    }

    function rolldie(min, max) {
        // return Math.floor(Math.random()*(max-min)+min);
        // return (Math.floor(Math.random() * (max - min))) + min;
        min = Math.ceil(min);
        max = Math.floor(max + 1);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function rollFourDieSixKeepTheHighestThree() {
        var dieRecord = [0, 0, 0, 0];
        var value = 0;
        var tempValue = 0
        var sum = 0;
        for (dieRecordIndex = 0; dieRecordIndex < 4; dieRecordIndex++) {
            value = rolldie(1, 6);
            for (sortDieIndex = 0; sortDieIndex <= dieRecordIndex; sortDieIndex++) {
                if (value > dieRecord[sortDieIndex]) {
                    tempValue = dieRecord[sortDieIndex];
                    dieRecord[sortDieIndex] = value;
                    value = tempValue;
                }
            }
        }
        console.log(dieRecord);
        for (dieRecordIndex = 0; dieRecordIndex < 3; dieRecordIndex++) {
            sum = sum + dieRecord[dieRecordIndex];
        }
        console.log(sum);

    }

//rollFourDieSixKeepTheHighestThree()

//registerEvent(document.getElementById('buttonRun'), 'click', run, false);

    //var foo = document.getElementById('buttonRun');
    //console.log(foo);
    registerEvent(document.getElementById('buttonRun'), 'click', rollFourDieSixKeepTheHighestThree, false);
    //registerEvent(document.getElementById('buttonRun'), 'click', console.log("wjr"), false);
    //console.log(document.getElementById('buttonRun'));

     function registerEvent(element, event, handler, capture) {
     if (/msie/i.test(navigator.userAgent)) {
     element.attachEvent('on' + event, handler);
     } else { console.log("xx");
     element.addEventListener(event, handler, capture);
     }
     }


    var messageMapping = {
        basic: "basic",
        ad: "ad",
        notification: "notification",
        warning: "warning",
        critical: "critical"
    };

    console.log(messageMapping['basic']);
    console.log(messageMapping['critical']);

};
*/