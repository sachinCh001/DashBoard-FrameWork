import { Component, SimpleChanges } from '@angular/core';
import { Menu } from './menu.model';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isOpen : boolean = true;
  piecharframwork: any = { };
  options: any = { };
  constructor ( public api : ApiService) {
    this.isOpen=this.api.isOpen;
  }
  
  ngOnInit(){
    const frameworkData = [
      { framework: 'React', data: [10, 30, 25, 45, 60, 80] },
      { framework: 'Angular', data: [20, 40, 35, 55, 50, 70] },
      { framework: 'Vue', data: [5, 15, 30, 40, 35, 50] }
    ];

    const xAxisData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const legendData = frameworkData.map(framework => framework.framework);
    const seriesData = frameworkData.map(framework => ({
      name: framework.framework,
      type: 'line',
      data: framework.data
    }));

    this.options = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: legendData
      },
      xAxis: {
        type: 'category',
        data: xAxisData
      },
      yAxis: {
        type: 'value'
      },
      series: seriesData
    };

    // /end

    this.piecharframwork = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
      },
      series: [
        {
          name: 'Pie Chart',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 335, name: 'Category 1' },
            { value: 310, name: 'Category 2' },
            { value: 234, name: 'Category 3' },
            { value: 135, name: 'Category 4' },
            { value: 1548, name: 'Category 5' }
          ]
        }
      ]
    };
  }
    
  

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers',
        },
      ],
    },
  ];

  
}
