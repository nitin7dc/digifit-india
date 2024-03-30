import {
  Component,
  OnDestroy,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { CalculatorDialogComponent } from '../../calculator-dialog/calculator-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {



  constructor(public dialog: MatDialog
  ) {

  }

  openCalculator(): void {
    const dialogRef = this.dialog.open(CalculatorDialogComponent, {
      width: '550px',
      height: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The calculator dialog was closed');
    });
  }

}
