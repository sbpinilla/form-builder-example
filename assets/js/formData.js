$(function() {
    function getValues() {
        var listvalues = new Array();
        var datastring = $(".form-rendered").serializeArray();
        var data = "{";
        for (var x = 0; x < datastring.length; x++) {
            if (data == "{") {
                data += "\"" + datastring[x].name + "\": \"" + datastring[x].value + "\"";
            }
            else {
                data += ",\"" + datastring[x].name + "\": \"" + datastring[x].value + "\"";
            }
        }
        data += "}";
        data = JSON.parse(data);
        listvalues.push(data);
        console.log(listvalues);
        window.alert(listvalues.toString());
        // return listvalues;
    };
    
    jQuery(function ($) {
    
        var formBuilder = $('.build-wrap').formBuilder();
    
    
        document.getElementById('getXML').addEventListener('click', function () {
            console.log(formBuilder.actions.getData('json'));
            console.log(formBuilder.actions.getData());
    
            var fbRender = document.getElementById('fb-render');
            var formData = formBuilder.actions.getData();
    
            var formRenderOpts = {
                formData,
                dataType: 'json'
            };
            $('.build-static').formRender(formRenderOpts);
    
    
        });
    
        document.getElementById('datos').addEventListener('click', function () {
            getValues();
    
        });
    });
});
