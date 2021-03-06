import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'paymentForm',
    pure: false
})
export class PaymentFormPipe implements PipeTransform {
    paymentforms = [
        {code: '01', description: 'Efectivo'},
        {code: '02', description: 'Cheque nominativo'},
        {code: '03', description: 'Transferencia electrónica de fondos'},
        {code: '04', description: 'Tarjeta de crédito'},
        {code: '05', description: 'Monedero electrónico'},
        {code: '06', description: 'Dinero electrónico'},
        {code: '08', description: 'Vales de despensa'},
        {code: '12', description: 'Dación en pago'},
        {code: '13', description: 'Pago por subrogación'},
        {code: '14', description: 'Pago por consignación'},
        {code: '15', description: 'Condonación'},
        {code: '17', description: 'Compensación'},
        {code: '23', description: 'Novación'},
        {code: '24', description: 'Confusión'},
        {code: '25', description: 'Remisión de deuda'},
        {code: '26', description: 'Prescripción o caducidad'},
        {code: '27', description: 'A satisfacción del acreedor'},
        {code: '28', description: 'Tarjeta de débito'},
        {code: '29', description: 'Tarjeta de servicios'},
        {code: '99', description: 'Por definir'},
    ];

    transform(code: string): string {
        if (!code) {
            return '';
        }
        let description = '';
        this.paymentforms.forEach((form) => {
            if (form.code === code) {
                description = form.description;
            }
        });
        return description;
    }
}
