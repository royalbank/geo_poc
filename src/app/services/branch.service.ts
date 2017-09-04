import { Injectable } from '@angular/core';
import { Branch } from '../models/branch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';

@Injectable()
export class BranchService {
  DISTANCE_API_KEY: string = 'AIzaSyDOq3LHENlQbt-6LS-wsQVY1m7vuyRqD5s';
  branchArray: Branch[];
  constructor(private http: Http) {
    this.branchArray = [
      {
        "name": "Rbc Waterpark Place",
        "address": "88 Queens Quay W, Toronto, ON",
        "postalCode": "M5J 0B8",
        "phone": "(416) 955-2777",
        "transit": "59",
        "distanceInMeters": null,
        "lat": 43.6411095,
        "lng": -79.3786642
      },
      {
        "name": "On My Way Plaza Concourse",
        "address": "200 Bay St, Toronto, ON",
        "postalCode": "M5J 2J5",
        "phone": "(416) 861- 0542",
        "transit": "3339",
        "distanceInMeters": null,
        "lat": 43.6464188,
        "lng": -79.3798169
      },
      {
        "name": "Main Toronto",
        "address": "200 Bay St - Main Floor, Toronto, ON",
        "postalCode": "M5J 2J5",
        "phone": "(416) 974-3940",
        "transit": "2",
        "distanceInMeters": null,
        "lat": 43.6632595,
        "lng": -79.40538219999999
      },
      {
        "name": "Wellington & Simcoe",
        "address": "155 Wellington St W,Toronto, ON",
        "postalCode": "M5V 3K7",
        "phone": "(416) 955-6400",
        "transit": "1116",
        "distanceInMeters": null,
        "lat": 43.6458088,
        "lng": -79.3858068
      },
      {
        "name": "Adelaide & York",
        "address": "130 Adelaide St W,Toronto, ON",
        "postalCode": "M5H 3P5",
        "phone": "(416) 974-7100",
        "transit": "238",
        "distanceInMeters": null,
        "lat": 43.6496302,
        "lng": -79.3837586
      },
      {
        "name": "King & Jarvis",
        "address": "161 King St E,Toronto, ON",
        "postalCode": "M5C 1G9",
        "phone": "(416) 365-9070",
        "transit": "131",
        "distanceInMeters": null,
        "lat": 43.6501595,
        "lng": -79.37216579999999
      },
      {
        "name": "City Place",
        "address": "6 Fort York Blvd,Toronto, ON",
        "postalCode": "M5V 3Z2",
        "phone": "(647) 789-0330",
        "transit": "616",
        "distanceInMeters": null,
        "lat": 43.6406795,
        "lng": -79.39336809999999
      },
      {
        "name": "King & Spadina",
        "address": "434 & 436 King St W,Toronto, ON",
        "postalCode": "M5V 1K3",
        "phone": "(416) 581-015",
        "transit": "85",
        "distanceInMeters": null,
        "lat": 43.645709,
        "lng": -79.39442199999999
      },
      {
        "name": "King & Berkeley",
        "address": "339 King St E,Toronto, ON",
        "postalCode": "M5A 1L1",
        "phone": "(416) 365-0551",
        "transit": "2074",
        "distanceInMeters": null,
        "lat": 43.6516214,
        "lng": -79.36553839999999
      },
      {
        "name": "Dundas & Bay",
        "address": "101 Dundas St W,Toronto, ON",
        "postalCode": "M5G 1C4",
        "phone": "(416) 581-8865",
        "transit": "2146",
        "distanceInMeters": null,
        "lat": 43.6555427,
        "lng": -79.3839313
      },
      {
        "name": "University & Dundas",
        "address": "443 University Ave,Toronto, ON",
        "postalCode": "M5G 2H6",
        "phone": "(416) 974-2159",
        "transit": "6542",
        "distanceInMeters": null,
        "lat": 43.6546109,
        "lng": -79.38765269999999
      },
      {
        "name": "Chinatown",
        "address": "468 Dundas Street West,Toronto, ON",
        "postalCode": "M5T 1G9",
        "phone": "(416) 974-5580",
        "transit": "6752",
        "distanceInMeters": null,
        "lat": 43.6533314,
        "lng": -79.3967309
      },
      {
        "name": "Yonge & Gerrard",
        "address": "382 Yonge St,Toronto, ON",
        "postalCode": "M5B 1S8",
        "phone": "(416) 542-1509",
        "transit": "2157",
        "distanceInMeters": null,
        "lat": 43.659257,
        "lng": -79.38282559999999
      },
      {
        "name": "Queen & Bathurst",
        "address": "570 Queen St W,Toronto, ON",
        "postalCode": "M5V 2B5",
        "phone": "(416) 956-1353",
        "transit": "1728",
        "distanceInMeters": null,
        "lat": 43.6475203,
        "lng": -79.40358060000001
      },
      {
        "name": "University & College",
        "address": "661 University Ave,Toronto, ON",
        "postalCode": "M5G 1M1",
        "phone": "(416) 542-1508",
        "transit": "8099",
        "distanceInMeters": null,
        "lat": 43.6593533,
        "lng": -79.3894224
      },
      {
        "name": "Dundas & Parliament",
        "address": "480 Dundas St E,Toronto, ON",
        "postalCode": "M5A 2C4",
        "phone": "(416) 365-1400",
        "transit": "1265",
        "distanceInMeters": null,
        "lat": 43.659899,
        "lng": -79.3649054
      },
      {
        "name": "500 Yonge St",
        "address": "500 Yonge St-Suite 100,Toronto, ON",
        "postalCode": "M4Y 1X9",
        "phone": "(416) 974-7763",
        "transit": "6742",
        "distanceInMeters": null,
        "lat": 43.6631721,
        "lng": -79.3842282
      },
      {
        "name": "Church & Wellesley",
        "address": "501 B Church St,Toronto, ON",
        "postalCode": "M4Y 2C6",
        "phone": "(416) 928-9779",
        "transit": "2635",
        "distanceInMeters": null,
        "lat": 43.6654439,
        "lng": -79.38064279999999
      },
      {
        "name": "Yonge & St Joseph",
        "address": "608 Yonge St,Toronto, ON",
        "postalCode": "M4Y 1Z3",
        "phone": "(416) 962-6054",
        "transit": "2259",
        "distanceInMeters": null,
        "lat": 43.6657009,
        "lng": -79.3850714
      },
      {
        "name": "College & Bathurst",
        "address": "429 College St,Toronto, ON",
        "postalCode": "M5T 1T2",
        "phone": "(416) 974-2137",
        "transit": "5442",
        "distanceInMeters": null,
        "lat": 43.6562755,
        "lng": -79.4072666
      },
      {
        "name": "Harbord & Spadina",
        "address": "648 Spadina Ave,Toronto, ON",
        "postalCode": "M5S 2H7",
        "phone": "(416) 974-5950",
        "transit": "5802",
        "distanceInMeters": null,
        "lat": 43.6630775,
        "lng": -79.4025923
      },
      {
        "name": "Liberty Village",
        "address": "51 Hanna Ave,Toronto, ON",
        "postalCode": "M6K 3N7",
        "phone": "(416) 535-3230",
        "transit": "1824",
        "distanceInMeters": null,
        "lat": 43.6394691,
        "lng": -79.4195441
      },
      {
        "name": "Bloor & Yonge",
        "address": "2 Bloor St E,Toronto, ON",
        "postalCode": "M4W 1A8",
        "phone": "(416) 974-2746",
        "transit": "6702",
        "distanceInMeters": null,
        "lat": 43.67106589999999,
        "lng": -79.3857432
      },
      {
        "name": "Queen & Gladstone",
        "address": "2 Gladstone Ave,Toronto, ON",
        "postalCode": "M6J 0B2",
        "phone": "(416) 537-5202",
        "transit": "1710",
        "distanceInMeters": null,
        "lat": 43.64273430000001,
        "lng": -79.4274495
      },
      {
        "name": "Broadview & Danforth",
        "address": "739 Broadview Ave,Toronto, ON",
        "postalCode": "M4K 2P6",
        "phone": "(416) 461-3503",
        "transit": "5452",
        "distanceInMeters": null,
        "lat": 43.6757344,
        "lng": -79.3579888
      },
      {
        "name": "Gerrard & Marjory",
        "address": "1011 Gerrard St E,Toronto, ON",
        "postalCode": "M4M 1Z4",
        "phone": "(416) 778-8318",
        "transit": "5842",
        "distanceInMeters": null,
        "lat": 43.6685138,
        "lng": -79.33763239999999
      },
      {
        "name": "Leslieville",
        "address": "1015 Lake Shore Blvd E,Toronto, ON",
        "postalCode": "M4M 1B4",
        "phone": "(416) 461-3032",
        "transit": "414",
        "distanceInMeters": null,
        "lat": 43.6580842,
        "lng": -79.328486
      },
      {
        "name": "Summerhill",
        "address": "1103a Yonge St-Unit 201,Toronto, ON",
        "postalCode": "M4W 2L7",
        "phone": "(416) 960-8550",
        "transit": "1117",
        "distanceInMeters": null,
        "lat": 43.6802457,
        "lng": -79.3904913
      },
      {
        "name": "Bloor & Dovercourt",
        "address": "972 Bloor St W,Toronto, ON",
        "postalCode": "M6H 1L6",
        "phone": "(416) 535-3153",
        "transit": "5342",
        "distanceInMeters": null,
        "lat": 43.66148339999999,
        "lng": -79.42914309999999
      },
      {
        "name": "Pape & Danforth",
        "address": "650 Danforth Ave,Toronto, ON",
        "postalCode": "M4K 1R3",
        "phone": "(416) 465-5404",
        "transit": "6222",
        "distanceInMeters": null,
        "lat": 43.6790978,
        "lng": -79.34521800000002
      },
      {
        "name": "St Clair & Yonge",
        "address": "10 St Clair Ave W,Toronto, ON",
        "postalCode": "M4V 1L4",
        "phone": "(416) 974-7840",
        "transit": "6402",
        "distanceInMeters": null,
        "lat": 43.688256,
        "lng": -79.3951596
      },
      {
        "name": "Roncesvalles",
        "address": "179 Roncesvalles Ave,Toronto, ON",
        "postalCode": "M6R 2L5",
        "phone": "(416) 537-5232",
        "transit": "6352",
        "distanceInMeters": null,
        "lat": 43.6447826,
        "lng": -79.448134
      },
      {
        "name": "Coxwell & Gerrard",
        "address": "253 Coxwell Ave,Toronto, ON",
        "postalCode": "M4L 3B4",
        "phone": "(416) 461-5070",
        "transit": "5482",
        "distanceInMeters": null,
        "lat": 43.672825,
        "lng": -79.31892479999999
      },
      {
        "name": "Spadina & Lonsdale",
        "address": "414 Spadina Rd,Toronto, ON",
        "postalCode": "M5P 2W2",
        "phone": "(416) 974-7170",
        "transit": "1412",
        "distanceInMeters": null,
        "lat": 43.6884483,
        "lng": -79.41290359999999
      },
      {
        "name": "St Clair & Oakwood",
        "address": "935 St Clair Ave W,Toronto, ON",
        "postalCode": "M6C 1C7",
        "phone": "(416) 654-4333",
        "transit": "6422",
        "distanceInMeters": null,
        "lat": 43.6794543,
        "lng": -79.4352832
      },
      {
        "name": "Mt Pleasant & Hillsdale",
        "address": "650 Mt Pleasant Rd,Toronto, ON",
        "postalCode": "M4S 2N5",
        "phone": "(416) 481-3101",
        "transit": "520",
        "distanceInMeters": null,
        "lat": 43.7046776,
        "lng": -79.3889962
      },
      {
        "name": "Bayview & Belsize",
        "address": "1554 Bayview Ave,Toronto, ON",
        "postalCode": "M4G 3B6",
        "phone": "(416) 974-3609",
        "transit": "5272",
        "distanceInMeters": null,
        "lat": 43.7049207,
        "lng": -79.375181
      },
      {
        "name": "Woodbine & Danforth",
        "address": "2076 Danforth Ave,Toronto, ON",
        "postalCode": "M4C 1J6",
        "phone": "(416) 425-1100",
        "transit": "6662",
        "distanceInMeters": null,
        "lat": 43.6858984,
        "lng": -79.3130645
      },
      {
        "name": "Queen & Lee",
        "address": "2175 Queen St E,Toronto, ON",
        "postalCode": "M4E 1E5",
        "phone": "(416) 698-5244",
        "transit": "6262",
        "distanceInMeters": null,
        "lat": 43.6703079,
        "lng": -79.2975146
      },
      {
        "name": "Coxwell & O`Connor",
        "address": "1043 Coxwell Ave,Toronto, ON",
        "postalCode": "M4C 3G4",
        "phone": "(416) 421-1651",
        "transit": "5502",
        "distanceInMeters": null,
        "lat": 43.6974055,
        "lng": -79.3290233
      },
      {
        "name": "Yonge & Orchardview",
        "address": "2346 Yonge St,Toronto, ON",
        "postalCode": "M4P 2W7",
        "phone": "(416) 974-3500",
        "transit": "6722",
        "distanceInMeters": null,
        "lat": 43.7083217,
        "lng": -79.3990425
      },
      {
        "name": "Eglinton & Bathurst",
        "address": "880 Eglinton Ave W,Toronto, ON",
        "postalCode": "M6C 2B6",
        "phone": "(416) 789-7405",
        "transit": "5722",
        "distanceInMeters": null,
        "lat": 43.7009524,
        "lng": -79.42671729999999
      },
      {
        "name": "Laird & Wicksteed",
        "address": "45 Wicksteed Ave,Toronto, ON",
        "postalCode": "M4G 4H9",
        "phone": "(416) 425-5225",
        "transit": "189",
        "distanceInMeters": null,
        "lat": 43.7103517,
        "lng": -79.3624832
      },
      {
        "name": "Overlea & Thorncliffe Park",
        "address": "65 Overlea Blvd,Toronto, ON",
        "postalCode": "M4H 1P1",
        "phone": "(416) 425-5250",
        "transit": "6192",
        "distanceInMeters": null,
        "lat": 43.7073378,
        "lng": -79.3427167
      },
      {
        "name": "St Clair & Weston Rd",
        "address": "1970 St Clair Avenue, Suite 101,Toronto, ON",
        "postalCode": "M6N 0A3",
        "phone": "(416) 766-8258",
        "transit": "2186",
        "distanceInMeters": null,
        "lat": 43.6724135,
        "lng": -79.4693423
      },
      {
        "name": "Bloor West Village",
        "address": "2329 Bloor St W,Toronto, ON",
        "postalCode": "M6S 1P1",
        "phone": "(416) 766-7296",
        "transit": "5382",
        "distanceInMeters": null,
        "lat": 43.650088,
        "lng": -79.4800138
      },
      {
        "name": "Kingston & Lawlor",
        "address": "936 Kingston Rd,Toronto, ON",
        "postalCode": "M4E 1S7",
        "phone": "(416) 698-7109",
        "transit": "5992",
        "distanceInMeters": null,
        "lat": 43.6806241,
        "lng": -79.2883274
      },
      {
        "name": "Danforth & Dawes",
        "address": "2780 Danforth Ave,Toronto, ON",
        "postalCode": "M4C 1M1",
        "phone": "(416) 699-3993",
        "transit": "5522",
        "distanceInMeters": null,
        "lat": 43.6896223,
        "lng": -79.2965392
      },
      {
        "name": "Bathurst & Glencairn",
        "address": "2788 Bathurst St,North York, ON",
        "postalCode": "M6B 3A3",
        "phone": "(416) 781-3561",
        "transit": "5192",
        "distanceInMeters": null,
        "lat": 43.7118107,
        "lng": -79.4283458
      },
      {
        "name": "St Clair & Oconnor",
        "address": "803 O Connor Dr,Toronto, ON",
        "postalCode": "M4B 2S7",
        "phone": "(416) 759-3730",
        "transit": "6442",
        "distanceInMeters": null,
        "lat": 43.7059807,
        "lng": -79.31200849999999
      }
    ];

    console.debug("branches" + this.branchArray);
  }
  // get branch list
  getBranches() { return this.branchArray; }
  getNearbyBranches(lat:number, lng:number){
    const req = this.http.post('http://localhost:8080/geo/nearby?srcLat='+ lat +'&srcLng=' + lng, this.branchArray);
    return req;
  }
  //


}
