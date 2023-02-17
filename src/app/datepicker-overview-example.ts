import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
/** @title Basic datepicker */
@Component({
  selector: 'datepicker-overview-example',
  templateUrl: 'datepicker-overview-example.html',
  styleUrls: ['datepicker-overview-example.css'],
})
export class DatepickerOverviewExample {
  myHolidayDates = [new Date('2/26/2023'), new Date('2/25/2023')];

  myHolidayFilter = (d: Date): boolean => {
    const time = d.getTime();
    return !this.myHolidayDates.find((x) => x.getTime() == time);
  };
}
