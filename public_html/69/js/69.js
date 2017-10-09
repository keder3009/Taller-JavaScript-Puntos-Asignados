$("#personalInformation").hide();
$("#familyReference").hide();
$("#workReference").hide();
$("#professionalProfileDescription").hide();
$("#pagina2").hide();

class hoja {
    constructor() {
        this._Personal_information = {};
        this._Family_Reference = {};
        this._work_Reference = {};
        this._Professional_profile_description = {};
    }
    setPersonal_information() {
        this._Personal_information.name = $("#1name").val();
        this._Personal_information.number = $("#1number").val();
        this._Personal_information.address = $("#1address").val();
        this._Personal_information.email = $("#1email").val();
    }
    getPersonal_information() {
        return this._Personal_information;
    }
    setFamily_Reference() {
        this._Family_Reference.name = $("#2name").val();
        this._Family_Reference.number = $("#2number").val();
        this._Family_Reference.address = $("#2address").val();
        this._Family_Reference.email = $("#2email").val();
    }
    getFamily_Reference() {
        return this._Family_Reference;
    }
    setwork_Reference() {
        this._work_Reference.name = $("#3name").val();
        this._work_Reference.number = $("#3number").val();
        this._work_Reference.address = $("#3address").val();
        this._work_Reference.email = $("#3email").val();
    }
    getwork_Reference() {
        return this._work_Reference;
    }
    setProfessional_profile_description() {
        this._Professional_profile_description.profile = $("#1profile").val();
    }
    getProfessional_profile_description() {
        return this._Professional_profile_description;
    }
    mostar(elemento) {
        $(elemento).show();
    }

    ocultar(elemento) {
        $(elemento).hide();
    }

    cambiarPagina(elemento, elemento2) {
        this.ocultar(elemento);
        this.mostar(elemento2);
    }
    print() {
        $("#1").html('Name: ' + this._Personal_information.name + "<br> Celphone: " + this._Personal_information.number + " <br> Address: " + this._Personal_information.address + " <br> Email: " + this._Personal_information.email);
        $("#2").html("Name: " + this._Family_Reference.name + " <br> Celphone: " + this._Family_Reference.number + " <br> Address: " + this._Family_Reference.address + " <br> Email: " + this._Family_Reference.email);
        $("#3").html("Name: " + this._work_Reference.name + " <br> Celphone: " + this._work_Reference.number + " <br> Address: " + this._work_Reference.address + " <br> Email: " + this._work_Reference.email);
        $("#4").html("Profile: " + this._Professional_profile_description.profile);
    }
}
var resume = new hoja;
$('#view1').click(function () {
    resume.cambiarPagina('#pagina1', '#personalInformation');
});
$('#view2').click(function () {
    resume.cambiarPagina('#pagina1', '#familyReference');
});
$('#view3').click(function () {
    resume.cambiarPagina('#pagina1', '#workReference');
});
$('#view4').click(function () {
    resume.cambiarPagina('#pagina1', '#professionalProfileDescription');
});
$('#view5').click(function () {
    resume.print();
    resume.cambiarPagina('#pagina1', '#pagina2');
});
$('#return1').click(function () {
    resume.setPersonal_information();
    resume.cambiarPagina('#personalInformation', '#pagina1');

});
$('#return2').click(function () {
    resume.setFamily_Reference();
    resume.cambiarPagina('#familyReference', '#pagina1');
});
$('#return3').click(function () {
    resume.setwork_Reference();
    resume.cambiarPagina('#workReference', '#pagina1');
});
$('#return4').click(function () {
    resume.setProfessional_profile_description();
    resume.cambiarPagina('#professionalProfileDescription', '#pagina1');
});
$('#return5').click(function () {
    resume.cambiarPagina('#pagina2', '#pagina1');
});