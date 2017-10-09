$('#pagina1').hide();
class Numbers {
    constructor() {
        this._numbers = [];
        this._pairsFor = [];
        this._pairsDoWhile = [];
        this._pairWhile = [];
        this._primeFor = [];
        this._primeDoWhile = [];
        this._primeWhile = [];
        this._sumPair = [];
        this._sumPrime = [];
        this._averagePair = [];
        this._varegaePrime = [];
    }
    set numbers(number) {
        this._numbers.push(number);
    }
    get numbers() {
        return this._numbers;
    }

    addNumber() {
        $('#formNumbers').on('submit', (form) => {
            form.preventDefault();
            this.numbers = parseInt($('#number').val());
            document.getElementById('number').value = '';
        });
    }
    set pairsFor(array) {
        this._pairsFor = array.filter((number) => {
            return number % 2 === 0;
        });
    }
    get pairsFor() {
        return this._pairsFor;
    }
    set pairsDoWhile(array) {
        this._pairsDoWhile = array.filter((number) => {
            return number % 2 === 0;
        });
    }
    get pairsDoWhile() {
        return this._pairsDoWhile;
    }
    set pairsWhile(array) {
        this._pairsWhile = array.filter((number) => {
            return number % 2 === 0;
        });
    }
    get pairsWhile() {
        return this._pairsWhile;
    }
    set primeFor(array) {
        for (let num of array) {
            let p = 0;
            for (let i = 1; i <= num; i++) {
                if (num % i === 0) {
                    p++;
                }
            }
            if (p === 2) {
                this._primeFor.push(num);
            }
        }
    }
    get primeFor() {
        return this._primeFor;
    }
    set primeWhile(array) {
        var p = 0;
        while (p < array.length) {
            let cont = 1;
            let tmp = 0;
            while (cont <= array[p]) {
                if (array[p] % cont === 0) {
                    tmp++;
                }
                cont++;
            }
            if (tmp === 2) {
                this._primeWhile.push(array[p]);
            }
            p++;
        }
    }
    get primeWhile() {
        return this._primeWhile;
    }
    set primeDoWhile(array) {
        var p = 0;
        do {
            var cont = 1;
            var tmp = 0;
            do {
                if (array[p] % cont === 0) {
                    tmp++;
                }
                cont++;
            } while (cont <= array[p])
            if (tmp === 2) {
                this._primeDoWhile.push(array[p]);
            }
            p++;
        } while (p < array.length)
    }
    get primeDoWhile() {
        return this._primeDoWhile;
    }
    set sumPair(array) {
        this._sumPair = array.reduce((num1, num2) => {
            return num1 + num2;
        });
    }
    get sumPair() {
        return this._sumPair;
    }
    set sumPrime(array) {
        this._sumPrime = array.reduce((num1, num2) => {
            return num1 + num2;
        });
    }
    get sumPrime() {
        return this._sumPrime;
    }
    set averagePair(array) {
        this._averagePair = array / this._pairsFor.length;
    }
    get averagePair() {
        return this._averagePair;
    }
    set averagePrime(array) {
        this._averagePrime = array / this._primeFor.length;
    }
    get averagePrime() {
        return this._averagePrime;
    }
    print() {
        $("#pagina1").show();
        $("#principal").hide();
    }
    return() {
        $("#pagina1").hide();
        $("#principal").show();
    }
}

var punto67 = new Numbers();
punto67.addNumber();
$("#print").on("click", () => {
    punto67.pairsFor = punto67.numbers;
    punto67.pairsDoWhile = punto67.numbers;
    punto67.pairsWhile = punto67.numbers;
    punto67.primeFor = punto67.numbers;
    punto67.primeDoWhile = punto67.numbers;
    punto67.primeWhile = punto67.numbers;
    punto67.sumPair = punto67.pairsFor;
    punto67.sumPrime = punto67.primeFor;
    punto67.averagePair = punto67.sumPair;
    punto67.averagePrime = punto67.sumPrime;
    $("#1").text(punto67.pairsFor.toString());
    $("#2").text(punto67.pairsDoWhile.toString());
    $("#3").text(punto67.pairsWhile.toString());
    $("#4").text(punto67.primeFor.toString());
    $("#5").text(punto67.primeDoWhile.toString());
    $("#6").text(punto67.primeWhile.toString());
    $("#7").text(punto67.sumPair.toString());
    $("#8").text(punto67.sumPrime.toString());
    $("#9").text(punto67.averagePair.toString());
    $("#10").text(punto67.averagePrime.toString());
    punto67.print();

});
$("#return").on("click", () => {
    punto67.return();
});
