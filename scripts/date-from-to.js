$(function() {
  import 'air-datepicker/air-datepicker.css';

  new AirDatepicker('#date-from' [, options]);
  new AirDatepicker('#date-to' [, options]);

  let dpMin, dpMax;

dpMin = new AirDatepicker('#date-from', {
    onSelect({date}) {
        dpMax.update({
            minDate: date
        })
    }
})

dpMax = new AirDatepicker('#date-to', {
    onSelect({date}) {
        dpMin.update({
            maxDate: date
        })
    }
})
import localeEn from 'air-datepicker/locale/en';
new AirDatepicker('#date-from', {
    locale: localeEn
})
new AirDatepicker('#date-to', {
    locale: localeEn
})
  });