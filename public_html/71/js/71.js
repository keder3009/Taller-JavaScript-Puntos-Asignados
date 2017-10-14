$("#menu1").hide();
$("#menu2").hide();
$("#menu3").hide();
$("#menu4").hide();
$("#menu5").hide();
$("#result1").hide();
$("#result2").hide();
$("#result3").hide();
$("#result4").hide();
class Bussines {
    constructor() {
        this._bussinesLS = [];
        this._bussinesSs = [];
    }
    addNameLS() {
        var bussines = JSON.parse(localStorage.getItem("bussines"));
        if (bussines === null) {
            this._bussinesLS;
        }
        var name = $("#name").val();
        var code = $("#code").val();
        this._bussinesLS.push({name, code});
        localStorage.setItem("bussines", JSON.stringify(this._bussinesLS));
    }
    addNameSs() {
        var bussines = JSON.parse(sessionStorage.getItem("bussines"));
        if (bussines === null) {
            this._bussinesSs;
        }
        var name = $("#name").val();
        var code = $("#code").val();
        this._bussinesSs.push({name, code});
        sessionStorage.setItem("bussines", JSON.stringify(this._bussinesSs));
    }
    searchNameLS() {
        this._bussinesLS = JSON.parse(localStorage.getItem("bussines"));
        var search = $("#searchName").val();
        var indexFound = false;
        this._bussinesLS.forEach((persona, index) => {
            if (search === this._bussinesLS[index].name) {
                indexFound = index;
            }
        });
        if (indexFound === false) {
            $("#result1").hide();
            alert("not found by the name you want to search for the code?");
        } else {
            $("#result1").show();
            $("#1").text("Name: " + this._bussinesLS[indexFound].name + "  Code: " + this._bussinesLS[indexFound].code);
        }
    }
    searchCodeLS() {
        this._bussinesLS = JSON.parse(localStorage.getItem("bussines"));
        var search = $("#searchCode").val();
        var indexFound = false;
        this._bussinesLS.forEach((persona, index) => {
            if (search === this._bussinesLS[index].code) {
                indexFound = index;
            }
        });
        if (indexFound === false) {
            $("#result2").hide();
            alert("not found by the code you want to search for the name?");
        } else {
            $("#result2").show();
            $("#2").text("Code: " + this._bussinesLS[indexFound].code + "  Name: " + this._bussinesLS[indexFound].name);
        }
    }
    searchNameSs() {
        this._bussinesSs = JSON.parse(sessionStorage.getItem("bussines"));
        var search = $("#searchName2").val();
        var indexFound = false;
        this._bussinesSs.forEach((persona,index) => {
            if (search === this._bussinesSs[index].name) {
                indexFound = index;
            }
        });
        if (indexFound === false) {
            $("#result3").hide();
            alert("not found by the name you want to search for the code?");
        } else {
            $("#result3").show();
            $("#3").text("Name: " + this._bussinesSs[indexFound].name + "  Code: " + this._bussinesSs[indexFound].code);
        }
    }
    searchCodeSs() {
        this._bussinesSs = JSON.parse(sessionStorage.getItem("bussines"));
        var search = $("#searchCode2").val();
        var indexFound = false;
        this._bussinesSs.forEach((persona,index) => {
            if (search === this._bussinesSs[index].code) {
                indexFound = index;
            }
        });
        if (indexFound === false) {
            $("#result4").hide();
            alert("not found by the code you want to search for the name?");
        } else {
            $("#result4").show();
            $("#4").text("Code: " + this._bussinesSs[indexFound].code + "  Name: " + this._bussinesSs[indexFound].name);
        }
    }
    mostrar(elemento) {
        $(elemento).show();
    }
    ocultar(elemento) {
        $(elemento).hide();
    }
    cambiarPagina(elemento1, elemento2) {
        this.mostrar(elemento1);
        this.ocultar(elemento2);
    }
}
var empresa = new Bussines;
$("#view1").click(function () {
    empresa.cambiarPagina("#menu1", "#pagina1");
});
$("#SaveLs").click(function () {
    empresa.addNameLS();
    $(":text").val("");
});
$("#SaveSs").click(function () {
    empresa.addNameSs();
    $(":text").val("");
});
$("#Search1").click(function () {
    empresa.searchNameLS();
    $(":text").val("");
});
$("#Search2").click(function () {
    empresa.searchCodeLS();
    $(":text").val("");
});
$("#Search3").click(function () {
    empresa.searchNameSs();
    $(":text").val("");
});
$("#Search4").click(function () {
    empresa.searchCodeSs();
    $(":text").val("");
});
$("#Return1").click(function () {
    empresa.cambiarPagina("#pagina1", "#menu1");
});
$("#view2").click(function () {
    empresa.cambiarPagina("#menu2", "#pagina1");
});
$("#Return2").click(function () {
    $(":text").val("");
    $("#result1").hide();
    empresa.cambiarPagina("#pagina1", "#menu2");
});
$("#view3").click(function () {
    empresa.cambiarPagina("#menu3", "#pagina1");
});
$("#Return3").click(function () {
    $(":text").val("");
    $("#result2").hide();
    empresa.cambiarPagina("#pagina1", "#menu3");
});
$("#view4").click(function () {
    empresa.cambiarPagina("#menu4", "#pagina1");
});
$("#Return4").click(function () {
    $(":text").val("");
    $("#result3").hide();
    empresa.cambiarPagina("#pagina1", "#menu4");
});
$("#view5").click(function () {
    empresa.cambiarPagina("#menu5", "#pagina1");
});
$("#Return5").click(function () {
    $(":text").val("");
    $("#result4").hide();
    empresa.cambiarPagina("#pagina1", "#menu5");
});