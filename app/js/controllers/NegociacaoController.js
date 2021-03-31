class NegociacaoController {
    constructor() {
        this._inputDate = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputDate.value.replace(/-/g, '/')), parseInt(this._inputQuantidade.value), parseInt(this._inputValor.value));
        console.log(negociacao);
    }
}
