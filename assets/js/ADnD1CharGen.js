/**
 * Created by wayne on 9/1/2016.
 */
(function() {
    var DND = {

        init : function() {
            try {
                alert("hi");

                window.console.log(myCharacter.getInfo());
                window.console.log("diceRoller " + diceRoller.roll4D6());

                //DND.helpers.rollD6();
                //DND.helpers.roll3D6();
                //DND.helpers.roll4D6();
                //DND.helpers.rollAttribute();
                DND.helpers.rollCharacter();
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
            },

            sortDiceAsc: function(array) {
                return array.sort(function(a, b){return b-a});
            },

            sortDiceDsc: function(array) {
                return array.sort(function(a, b){return a-b});
            },

            rollDie: function (max, min) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            },

            rollD6: function () {
               return this.rollDie(6,1);
             },

            rollStrengthPercentage: function () {
                return this.rollDie(100, 0);
            },

            roll3D6: function () {
                var arr = [];
                var i;

                for (i = 0; i < 3; i++) {
                    arr.push(this.rollD6());
                }
                //arr.sort(function(a, b){return b-a});
                 window.console.log(this.sortDiceAsc(arr));
            },

            roll4D6: function() {
                var arr = [];
                var i;

                for(i=0; i < 4; i++) {
                    arr.push(this.rollD6());
                }
                //window.console.log(this.sortDiceAsc(arr));
                return arr;
            },

            rollAttribute: function () {
                return this.sortDiceAsc(this.roll4D6());
            },

            best3Attribute: function (arr) {
              return arr[0] + arr[1] + arr[2];
            },

            worst1Attribute: function (arr) {
              return arr[3];
            },

            rollCharacter: function () {
                var a = {};
                a.str = {};
                a.int = {};
                a.wis = {};
                a.dex = {};
                a.con = {};
                a.cha = {};
                a.luck = {};
                a.luck.ar = [];

                //a.str.value = this.best3Attribute(a.str.ar = this.rollAttribute());
                //a.int.value = this.best3Attribute(a.int.ar = this.rollAttribute());
                //a.wis.value = this.best3Attribute(a.wis.ar = this.rollAttribute());
                //a.dex.value = this.best3Attribute(a.dex.ar = this.rollAttribute());
                //a.con.value = this.best3Attribute(a.con.ar = this.rollAttribute());
                //a.cha.value = this.best3Attribute(a.cha.ar = this.rollAttribute());

                a.str.value = diceRoller.best3Attribute(a.str.ar = diceRoller.rollAttribute());
                a.int.value = diceRoller.best3Attribute(a.int.ar = diceRoller.rollAttribute());
                a.wis.value = diceRoller.best3Attribute(a.wis.ar = diceRoller.rollAttribute());
                a.dex.value = diceRoller.best3Attribute(a.dex.ar = diceRoller.rollAttribute());
                a.con.value = diceRoller.best3Attribute(a.con.ar = diceRoller.rollAttribute());
                a.cha.value = diceRoller.best3Attribute(a.cha.ar = diceRoller.rollAttribute());

                a.luck.ar.push(diceRoller.worst1Attribute(a.str.ar));
                a.luck.ar.push(diceRoller.worst1Attribute(a.int.ar));
                a.luck.ar.push(diceRoller.worst1Attribute(a.wis.ar));
                a.luck.ar.push(diceRoller.worst1Attribute(a.dex.ar));
                a.luck.ar.push(diceRoller.worst1Attribute(a.con.ar));
                a.luck.ar.push(diceRoller.worst1Attribute(a.cha.ar));
                a.luck.value = a.luck.ar.reduce(function(total, num){return total + num});

                window.console.log(a);



               // var str = int = wis = dex = con = char = luck = 0;
               // var strar = this.rollAttribute();
               // var intar = this.rollAttribute();
               // var wisar = this.rollAttribute();
               // var dexar = this.rollAttribute();
               // var conar = this.rollAttribute();
               // var charar = this.rollAttribute();
               //
               // str = this.best3Attribute(strar);
               // luck += this.worst1Attribute(strar);
               // str = this.best3Attribute(strar);
               // luck += this.worst1Attribute(strar);
               //
               // window.console.log("str: " + str);


            }

        }

    };
    DND.helpers.registerEvent(window, 'load', function() {
        DND.init();
    }, false);

}());

myCharacter = (function () {
    
    var getInfo = function () {
        return "this is my character";
    };

    return { getInfo : getInfo };
})();


diceRoller = (function () {

    var rollDie = function (max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var rollD6 = function () {
        return rollDie(6,1);
    };

    var rollStrengthPercentage = function () {
        return rollDie(100, 0);
    };

    var roll3D6 = function () {
        var arr = [];
        var i;

        for (i = 0; i < 3; i++) {
            arr.push(rollD6());
        }
        return arr;
    };


    var roll4D6 = function() {
        var arr = [];
        var i;

        for(i=0; i < 4; i++) {
            arr.push(rollD6());
        }
        return arr;
    };

    var sortDiceAsc = function(array) {
        return array.sort(function(a, b){return b-a});
    };

    var sortDiceDsc = function(array) {
        return array.sort(function(a, b){return a-b});
    };

    var rollAttribute = function () {
        return sortDiceAsc(roll4D6());
    };

    var best3Attribute = function (arr) {
        return arr[0] + arr[1] + arr[2];
    };

    var worst1Attribute = function (arr) {
        return arr[3];
    };


    return {
        rollDie : rollDie,
        roll3D6 : roll3D6,
        roll4D6 : roll4D6,
        rollAttribute : rollAttribute,
        best3Attribute : best3Attribute,
        worst1Attribute : worst1Attribute
    };

})();

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