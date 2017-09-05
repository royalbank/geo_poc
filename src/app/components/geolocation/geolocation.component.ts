import { Component, OnInit, ViewChild, ElementRef, NgZone, AfterViewInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { BranchService } from '../../services/branch.service';
import { LoggingService } from '../../services/logging.service';
import { Branch } from '../../models/branch';
@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css'],
  providers: [BranchService, LoggingService]
})
export class GeolocationComponent implements OnInit {

  public latitude = 43.6106506;
  public longitude = -89.6650232;
  public searchControl: FormControl;
  public zoom: number;
  public branches: Branch[];
  public selectedBranch: Branch;
  public infoWindowOpened;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  @ViewChild('info')
  public infoWindowElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private branchService: BranchService, private loggingService: LoggingService) {

  }

  ngOnInit() {
    // this.branches = this.branchService.getBranches();
    this.zoom = 14;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      const infowindow = new google.maps.InfoWindow();
      const infowindowContent = this.infoWindowElementRef.nativeElement;
      infowindow.setContent(infowindowContent);



      autocomplete.addListener('place_changed', () => {

        this.ngZone.run(() => {
          this.infoWindowOpened = null;
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            console.error('No details available for input: ' + place.name);
            return;
          }

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 14;


          this.branchService.getNearbyBranches(this.latitude, this.longitude).subscribe(resp => {
            console.log(resp.text());
            this.branches = JSON.parse(resp.text());
          });
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      const pos = navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 14;
      });
    }
  }

  public mapMarkerClicked(branch: Branch, infoWindow) {
    console.log(branch);
    if (this.infoWindowOpened && infoWindow && this.infoWindowOpened.latitude === infoWindow.latitude
      && this.infoWindowOpened.longitude === infoWindow.longitude) {
      return;
    }
    if (this.infoWindowOpened) {
      this.infoWindowOpened.close();
    }
    this.infoWindowOpened = infoWindow;
    this.selectedBranch = branch;

  }

  public mapClicked($event) {
    // this.latitude = $event.coords.lat;
    // this.latitude = $event.coords.lng;
    // this.setCurrentPosition();
  }
}
