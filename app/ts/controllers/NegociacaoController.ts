class NegociacaoController{

    private _inputDate: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor(){
        this._inputDate = <HTMLInputElement>document.querySelector("#data");
        this._inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade");
        this._inputValor = <HTMLInputElement>document.querySelector("#valor");
    }

    adiciona(event: Event){

        event.preventDefault();
        const negociacao = new Negociacao(
            new Date (this._inputDate.value.replace(/-/g, '/')),
            parseInt(this._inputQuantidade.value),
            parseInt(this._inputValor.value)
        );
    console.log(negociacao)
    }
} 