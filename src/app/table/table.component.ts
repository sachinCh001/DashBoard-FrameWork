import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  tableData = [
    { name: 'Robert Fox', date: 'Feb 15, 2021', company: 'Dribbble', offer: '$3.500', meeting: 'Scheduled' },
    { name: 'Darlene Robertson', date: 'Apr 15, 2021', company: 'Netguru', offer: '$2.750', meeting: 'Postponed' },
    { name: 'Theresa Webb', date: 'Mar 20, 2021', company: 'Figma', offer: '$4.200', meeting: 'Scheduled' },
    { name: 'Kristin Watson', date: 'Feb 15, 2021', company: 'Mailchimp', offer: '$3.500', meeting: 'Not discussed' },
    { name: 'Cody Fisher', date: 'Apr 10, 2021', company: 'Webpixels', offer: '$1.500', meeting: 'Canceled' }
  ];

}
