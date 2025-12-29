import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../modelos/transacao';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.css',
})
export class FormNovaTransacao {
  tipoTransacao = "";
  valorTransacao = "";

  transacaoCriada = output<Transacao>();

  aoSubmeter() {
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
    );

    this.transacaoCriada.emit(transacao);


    this.tipoTransacao = "";
    this.valorTransacao = "";
    //https://www.figma.com/design/VeulkY3rtv0wD8LlbGmwAg/Angular-19--Inputs--Outputs-e-Content-Projection-%7C-Anybank--Community-?node-id=503-4264&p=f&t=FWpmsvGIS5Evn8BY-0
  }
}
