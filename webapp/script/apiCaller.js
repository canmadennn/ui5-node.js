jQuery.sap.require("sap.m.MessageBox");
function apiGET(service, param, afterMethod) {

    $.ajax({
        url: API_URL + service + "?" + searchParams,
        type: "GET",
        async: false,
        success: function (data) {
            console.log("Ajax Response: " + data);
            afterMethod(data);
        },
        error: function (error) {

            sap.m.MessageBox.error(error.responseText, {
                title: "Error",
                actions: sap.m.MessageBox.Action.CLOSE
            }.bind(this));
        },
    });
}

function apiGETNoParam(API_URL, afterMethod) {
    $.ajax({
        url: API_URL,
        type: "GET",
        async: true,
        success: function (data) {
            console.log("Ajax Response: " + data);
            afterMethod(data);
        },
        error: function (error) {
            sap.m.MessageBox.error(error.responseText, {
                title: "Error",
                actions: sap.m.MessageBox.Action.CLOSE
            }.bind(this));
        },
    });
}

function test(service, afterMethod) {
    $.ajax({
        url: API_URL + service,
        type: "GET",
        async: false,
        success: function (data) {
            console.log("Ajax Response: " + data);
            afterMethod(data);
        },
        error: function (error) {
            sap.m.MessageBox.error(error.responseText, {
                title: "Error",
                actions: sap.m.MessageBox.Action.CLOSE
            }.bind(this));
        },
    });
}



function x(url,service, afterMethod) {
    var token;
    $.ajax({
        url: "/"+url+"/test/v1/xsrf-token",
        method: "GET",
        async: false,
        headers: {
            "X-CSRF-Token": "Fetch"
        },
        success: function(result, xhr, data) {
            token = data.getResponseHeader("X-CSRF-Token");
        }
    });
    return token;
}

function apiPostFetch(service,params,afterMethod) {
    fetch(API_URL + service , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })
        .then(response => response.json())
        .then(data => console.log(data) ,afterMethod(data))
        .catch(error => console.error(error));

}

function apiPostAjax(service,params,afterMethod) {
    $.ajax({
        url: API_URL + service,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(params),
        success: function (data) {
            console.log('API yanıtı:', data);
            afterMethod ? afterMethod(data):sap.m.MessageBox.show(data.message,"S");
        },
        error: function (xhr, status, error) {
            afterMethod ? afterMethod(xhr.responseJSON):sap.m.MessageBox.show(xhr.responseJSON.message,"E");
            console.error('Hata:', xhr.responseJSON.message);
        }
    });
}

function apiPOST(service, param, afterMethod) {
    $.post(API_URL + service, JSON.stringify(param))
        .done((data, status) => {
            afterMethod(data);
        })
        .fail(function (e) {
            this.getView().setBusy(false);
            sap.m.MessageBox.error(e.responseJSON.message, {
                title: "Error",
                actions: sap.m.MessageBox.Action.CLOSE
            });
        }.bind(this));
}

function apiPOSTFile(service, param, afterMethod) {
    var vd = new FormData();
    vd.append("myFileUpload", param.myFileUpload);
    fetch(API_URL + service, {
        body: vd,
        method: "POST"
    }).then(a => {
        a.json().then(r => {
            afterMethod(r);
        });
    }).catch(function (e) {
        this.getView().setBusy(false);
        sap.m.MessageBox.error(e.message, {
            title: "Error",
            actions: sap.m.MessageBox.Action.CLOSE
        });
    }.bind(this));
}