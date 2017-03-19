var token;
var markers = [];
var markersMap = {};

$("#like1").click(function() {
    $("#like1").toggleClass("press", 1000);
});

$("#like2").click(function() {
    $("#like2").toggleClass("press", 1000);
});
$("#like3").click(function() {
    $("#like3").toggleClass("press", 1000);
});
$("#like4").click(function() {
    $("#like4").toggleClass("press", 1000);
});

$("#like5").click(function() {
    $("#like5").toggleClass("press", 1000);
});

$("#like6").click(function() {
    $("#like6").toggleClass("press", 1000);
});
$("#like7").click(function() {
    $("#like7").toggleClass("press", 1000);
});
$("#like8").click(function() {
    $("#like8").toggleClass("press", 1000);
});
$("#like9").click(function() {
    $("#like9").toggleClass("press", 1000);
});

$("#like10").click(function() {
    $("#like10").toggleClass("press", 1000);
});
$("#like11").click(function() {
    $("#like11").toggleClass("press", 1000);
});
$("#like12").click(function() {
    $("#like12").toggleClass("press", 1000);
});
//    $( "#bm1" ).click(function() {
//   $( "#bm1,span" ).toggleClass( "press", 1000 );
// });

// $(function() {
//   $( "#bm1" ).click(function() {
//     $( "#bm1,span" ).toggleClass( "press", 1000 );
//   });
// });

function getCookie(name) { // helper function 
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

$(document).ready(function(event) { //garantee HTML 已经ready
    // getMarkers();
    $("#save-btn").click(function(event) {
        event.preventDefault();
        window.location.href = "../html/recommandations.html";
    })

    $("#sign-up-btn").click(function(event) {
        event.preventDefault();
        window.location.href = "../html/profile.html";
    })
    $("#login-btn").click(function(event) {
        event.preventDefault();
        window.location.href = "../html/recommandations.html";
    })
});


function updateMapView() {
    if (getCookie('activity')) {
        var info = JSON.parse(getCookie('activity'));
        document.cookie = 'activity' + JSON.stringify(info);
    } else {
        info = [];
    }
}

function updateMarkersMap() {
    markers.forEach(function(marker) {
        //assume marker has a field called name
        markersMap[marker.name] = marker;
    });
}

function getMarkers() {
    $.ajax({
        // Need to change URL 
        url: "http://open-commerce.herokuapp.com/api/products",
        type: "GET",
        data: {
            'token': token
        },
        success: function(res) {
            markers = res; //markers is an JSON format array
            updateMarkersMap();
            updateMapView();
        },

    });
};

//     token = getCookie('x-access-token');
//     getProducts();
//     updateView();
//     $("#logoutNav").click(function(event) {
//     	event.preventDefault();
//     	deleteCookie('x-access-token');
//     	deleteCookie('cart');
//     	token = null; 
//     	updateView();
//     	window.location.href = "about.html";
//     })

//     $("#loginBtn").click(function(event) {
//             event.preventDefault();
//             alert("hello ");
//             var username = $("#username").val();
//             var password = $("#password").val();
//             if(username && password) {
//             	$.post("http://open-commerce.herokuapp.com/api/login",
//             	{
//             		username: username,
//                 	password: password	
//             	},
//             	function(res) {
//             		if(res.success) {
//             			alert("login success");
//             			var cookie = 'x-access-token=' + res.token; 
//             			document.cookie = cookie;
//             			window.location.href = "about.html";
//             			} else {
//             			alert(res.message);
//             			}
//             		}
// 				)}
//              else {
//             	alert("Please provide a username and password");
//             }

//     $("#signupBtn").click(function(event) {
//             // console.log(event);
//             event.preventDefault();
//             var username = $("#username").val();
//             var password = $("#password").val();
//             if (username && password) {
//                 $.post(" http://open-commerce.herokuapp.com/api/signup", 
//                 	{
//                         username: username,
//                         password: password
//                     },
//                     function(res) {
//                         if (res.success) {
//                             alert("signup success");
//                         } else {
//                             alert(res.message);
//                         }
//                     }
//                 )} else {
//             		alert("Enter username and password");
//         		}

//     });
// });
