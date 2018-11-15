import { Component } from '@angular/core';
import { TemperatureService } from './services/temperature.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private temperatureService: TemperatureService) { }

  ngOnInit() {
    this.temperatureService.getTemperatures().subscribe((data) => {
      console.log(data);
    })
  }
}
