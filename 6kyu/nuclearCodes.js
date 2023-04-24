// Our nuclear missile manager system is coded in Node.js. We are currently testing the system and it seems that the launchAll function does not work as expected. It should launch 5 missiles each 1 second apart. The current code tries to launch the missile #5 five times...

// Can you fix this for us? You know, it's pretty critical code...

// Note: There are 5 missiles labeled i which is a number in {0, 1, 2, 3, 4}. The missile i should be launched after i seconds.

// function launchAll(launchMissile) {
//     for(var i = 0; i < 5; i++) {
//       setTimeout(function() {
//         launchMissile(i);
//       }, i * 1000);
//     }
//   }

// This code doesn't work because the timeout won't fire until the loop over, so it's only passing in 5
// Put the timeout inside its own scope by separating it into its own function, then call that function inside the loop

function initMissile(missile) {
    setTimeout(() => {
        launchMissile(missile);
    }, missile * 1000);
}

function launchAll(launchMissile) {
    for (var i = 0; i < 5; i++) {
        initMissile(i);
    }
}

// ^Fails to work because this kata's test cases are bad
// Let's do it the unreadable way and put it all in one function

function launchAll(launchMissile) {
    for (var i = 0; i < 5; i++) {
        (function (missile) {
            setTimeout(function () {
                launchMissile(missile);
            }, missile * 1000);
        })(i);
    }
}

// We can also declare loop's index using let instead of var

function launchAll(launchMissile) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => launchMissile(i), i * 1000);
    }
}
