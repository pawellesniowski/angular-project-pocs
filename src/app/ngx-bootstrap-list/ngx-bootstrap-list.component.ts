import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-ngx-bootstrap-list',
  templateUrl: './ngx-bootstrap-list.component.html',
  styleUrls: ['./ngx-bootstrap-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxBootstrapListComponent implements OnInit {
  cellIndex = 0;
  contentArray = new Array(12).fill(new Array(5).fill(``));
  returnedArray: string[];

  ngOnInit(): void {
    this.contentArray = this.contentArray.map(rowArray =>
      rowArray.map((_, i) =>
        i !== 4 ? `cell ${this.cellIndex++}` : 'Select button '
      )
    );
    console.log('contentArray', this.contentArray);
    this.returnedArray = this.contentArray.slice(0, 5);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }
}
