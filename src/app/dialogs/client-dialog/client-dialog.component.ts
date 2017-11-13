import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';

import {NotifyService} from '../../utils/services/notify.service';
import {ClientService} from '../../utils/services/client.service';

@Component({
    selector: 'app-client-dialog',
    templateUrl: './client-dialog.component.html',
    styleUrls: ['./client-dialog.component.css']
})
export class ClientDialogComponent implements OnInit {
    title: String = 'Agregar Cliente';
    icon: String = 'pe-7s-share icon';
    edit: Boolean = false;
    clientForm = new FormGroup({
        tax_id: new FormControl(),
        legal_name: new FormControl(),
        email: new FormControl(),
        address: new FormGroup({
            zip: new FormControl()
        })
    });

    constructor(public dialogRef: MatDialogRef<ClientDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private notify: NotifyService,
                private clientService: ClientService) {
    }

    ngOnInit() {
        if (this.data) {
            this.title = 'Editar Cliente';
            this.icon = 'pe-7s-note icon';
            this.edit = true;
            // Fill client data
            this.clientForm.controls['tax_id'].setValue(this.data.tax_id, {onlySelf: true});
            this.clientForm.controls['legal_name'].setValue(this.data.legal_name, {onlySelf: true});
            this.clientForm.controls['email'].setValue(this.data.email, {onlySelf: true});
            this.clientForm.controls['address'].get('zip').setValue(this.data.email, {onlySelf: true});
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit({value, valid}) {
        value.rfc = value.tax_id.toUpperCase();
        value.razonsocial = value.legal_name.toUpperCase();
        if (this.edit) {
            this.clientService.editClient(value, this.data._id).subscribe(
                data => {
                    this.dialogRef.close(true);
                },
                err => {
                    console.log(err);
                    if (err.status === 400) {
                        this.notify.error('pe-7s-close-circle', 'Cliente duplicado.');
                    } else {
                        this.notify.error('pe-7s-close-circle', 'Error de sistema. Verificar con el administrador.');
                    }
                }
            );
        } else {
            this.clientService.addClient(value).subscribe(
                data => {
                    this.dialogRef.close(true);
                },
                err => {
                    console.log(err);
                    if (err.status === 400) {
                        this.notify.error('pe-7s-close-circle', 'Cliente duplicado.');
                    } else {
                        this.notify.error('pe-7s-close-circle', 'Error de sistema. Verificar con el administrador.');
                    }
                }
            );
        }
    }
}
