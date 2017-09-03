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
    this.branchArray = new Array<Branch>();
    this.branchArray.push(new Branch('Rbc Waterpark Place', '88 Queens Quay W, Toronto, ON', 'M5J 0B8', '(416) 955-2777', '59', null, 43.64111, -79.378664));
    this.branchArray.push(new Branch('On My Way Plaza Concourse', '200 Bay St, Toronto, ON', 'M5J 2J5', '(416) 861- 0542', '3339', null, 43.646419, -79.379817));
    this.branchArray.push(new Branch('Main Toronto', '200 Bay St - Main Floor, Toronto, ON', 'M5J 2J5', '(416) 974-3940', '2', null, 43.646419, -79.379817));

    this.branchArray.push(new Branch('Wellington & Simcoe', '155 Wellington St W,Toronto, ON', 'M5V 3K7', '(416) 955-6400', '1116', null, 43.646419, -79.379817));


    this.branchArray.push(new Branch('Adelaide & York', '130 Adelaide St W,Toronto, ON', 'M5H 3P5', '(416) 974-7100', '238', null, 0, 0));

    this.branchArray.push(new Branch('King & Jarvis', '161 King St E,Toronto, ON', 'M5C 1G9', '(416) 365-9070', '131', null, 0, 0));


    this.branchArray.push(new Branch('City Place', '6 Fort York Blvd,Toronto, ON', 'M5V 3Z2', '(647) 789-0330', '616', null, 0, 0));

    this.branchArray.push(new Branch('King & Spadina', '434 & 436 King St W,Toronto, ON', 'M5V 1K3', '(416) 581-015', '85', null, 0, 0));


    this.branchArray.push(new Branch('King & Berkeley', '339 King St E,Toronto, ON', 'M5A 1L1', '(416) 365-0551', '2074', null, 0, 0));

    this.branchArray.push(new Branch('Dundas & Bay', '101 Dundas St W,Toronto, ON', 'M5G 1C4', '(416) 581-8865', '2146', null, 0, 0));

    this.branchArray.push(new Branch('University & Dundas', '443 University Ave,Toronto, ON', 'M5G 2H6', '(416) 974-2159', '6542', null, 0, 0));

    this.branchArray.push(new Branch('Chinatown', '468 Dundas Street West,Toronto, ON', 'M5T 1G9', '(416) 974-5580', '6752', null, 0, 0));

    this.branchArray.push(new Branch('Yonge & Gerrard', '382 Yonge St,Toronto, ON', 'M5B 1S8', '(416) 542-1509', '2157', null, 0, 0));

    this.branchArray.push(new Branch('Queen & Bathurst', '570 Queen St W,Toronto, ON', 'M5V 2B5', '(416) 956-1353', '1728', null, 0, 0));


    this.branchArray.push(new Branch('University & College', '661 University Ave,Toronto, ON', 'M5G 1M1', '(416) 542-1508', '8099', null, 0, 0));

    this.branchArray.push(new Branch('Dundas & Parliament', '480 Dundas St E,Toronto, ON', 'M5A 2C4', '(416) 365-1400', '1265', null, 0, 0));

    this.branchArray.push(new Branch('500 Yonge St', '500 Yonge St-Suite 100,Toronto, ON', 'M4Y 1X9', '(416) 974-7763', '6742', null, 0, 0));


    this.branchArray.push(new Branch('Church & Wellesley', '501 B Church St,Toronto, ON', 'M4Y 2C6', '(416) 928-9779', '2635', null, 0, 0));


    this.branchArray.push(new Branch('Yonge & St Joseph', '608 Yonge St,Toronto, ON', 'M4Y 1Z3', '(416) 962-6054', '2259', null, 0, 0));


    this.branchArray.push(new Branch('College & Bathurst', '429 College St,Toronto, ON', 'M5T 1T2', '(416) 974-2137', '5442', null, 0, 0));

    this.branchArray.push(new Branch('Harbord & Spadina', '648 Spadina Ave,Toronto, ON', 'M5S 2H7', '(416) 974-5950', '5802', null, 0, 0));

    this.branchArray.push(new Branch('Liberty Village', '51 Hanna Ave,Toronto, ON', 'M6K 3N7', '(416) 535-3230', '1824', null, 0, 0));

    this.branchArray.push(new Branch('Bloor & Yonge', '2 Bloor St E,Toronto, ON', 'M4W 1A8', '(416) 974-2746', '6702', null, 0, 0));


    this.branchArray.push(new Branch('Queen & Gladstone', '2 Gladstone Ave,Toronto, ON', 'M6J 0B2', '(416) 537-5202', '1710', null, 0, 0));


    this.branchArray.push(new Branch('Broadview & Danforth', '739 Broadview Ave,Toronto, ON', 'M4K 2P6', '(416) 461-3503', '5452', null, 0, 0));

    this.branchArray.push(new Branch('Gerrard & Marjory', '1011 Gerrard St E,Toronto, ON', 'M4M 1Z4', '(416) 778-8318', '5842', null, 0, 0));

    this.branchArray.push(new Branch('Leslieville', '1015 Lake Shore Blvd E,Toronto, ON', 'M4M 1B4', '(416) 461-3032', '414', null, 0, 0));


    this.branchArray.push(new Branch('Summerhill', '1103a Yonge St-Unit 201,Toronto, ON', 'M4W 2L7', '(416) 960-8550', '1117', null, 0, 0));


    this.branchArray.push(new Branch('Bloor & Dovercourt', '972 Bloor St W,Toronto, ON', 'M6H 1L6', '(416) 535-3153', '5342', null, 0, 0));


    this.branchArray.push(new Branch('Pape & Danforth', '650 Danforth Ave,Toronto, ON', 'M4K 1R3', '(416) 465-5404', '6222', null, 0, 0));

    this.branchArray.push(new Branch('St Clair & Yonge', '10 St Clair Ave W,Toronto, ON', 'M4V 1L4', '(416) 974-7840', '6402', null, 0, 0));

    this.branchArray.push(new Branch('Roncesvalles', '179 Roncesvalles Ave,Toronto, ON', 'M6R 2L5', '(416) 537-5232', '6352', null, 0, 0));


    this.branchArray.push(new Branch('Coxwell & Gerrard', '253 Coxwell Ave,Toronto, ON', 'M4L 3B4', '(416) 461-5070', '5482', null, 0, 0));

    this.branchArray.push(new Branch('Spadina & Lonsdale', '414 Spadina Rd,Toronto, ON', 'M5P 2W2', '(416) 974-7170', '1412', null, 0, 0));

    this.branchArray.push(new Branch('St Clair & Oakwood', '935 St Clair Ave W,Toronto, ON', 'M6C 1C7', '(416) 654-4333', '6422', null, 0, 0));


    this.branchArray.push(new Branch('Mt Pleasant & Hillsdale', '650 Mt Pleasant Rd,Toronto, ON', 'M4S 2N5', '(416) 481-3101', '520', null, 0, 0));


    this.branchArray.push(new Branch('Bayview & Belsize', '1554 Bayview Ave,Toronto, ON', 'M4G 3B6', '(416) 974-3609', '5272', null, 0, 0));

    this.branchArray.push(new Branch('Woodbine & Danforth', '2076 Danforth Ave,Toronto, ON', 'M4C 1J6', '(416) 425-1100', '6662', null, 0, 0));

    this.branchArray.push(new Branch('Queen & Lee', '2175 Queen St E,Toronto, ON', 'M4E 1E5', '(416) 698-5244', '6262', null, 0, 0));

    this.branchArray.push(new Branch('Coxwell & O`Connor', '1043 Coxwell Ave,Toronto, ON', 'M4C 3G4', '(416) 421-1651', '5502', null, 0, 0));

    this.branchArray.push(new Branch('Yonge & Orchardview', '2346 Yonge St,Toronto, ON', 'M4P 2W7', '(416) 974-3500', '6722', null, 0, 0));

    this.branchArray.push(new Branch('Eglinton & Bathurst', '880 Eglinton Ave W,Toronto, ON', 'M6C 2B6', '(416) 789-7405', '5722', null, 0, 0));

    this.branchArray.push(new Branch('Laird & Wicksteed', '45 Wicksteed Ave,Toronto, ON', 'M4G 4H9', '(416) 425-5225', '189', null, 0, 0));

    this.branchArray.push(new Branch('Overlea & Thorncliffe Park', '65 Overlea Blvd,Toronto, ON', 'M4H 1P1', '(416) 425-5250', '6192', null, 0, 0));

    this.branchArray.push(new Branch('St Clair & Weston Rd', '1970 St Clair Avenue, Suite 101,Toronto, ON', 'M6N 0A3', '(416) 766-8258', '2186', null, 0, 0));

    this.branchArray.push(new Branch('Bloor West Village', '2329 Bloor St W,Toronto, ON', 'M6S 1P1', '(416) 766-7296', '5382', null, 0, 0));

    this.branchArray.push(new Branch('Kingston & Lawlor', '936 Kingston Rd,Toronto, ON', 'M4E 1S7', '(416) 698-7109', '5992', null, 0, 0));

    this.branchArray.push(new Branch('Danforth & Dawes', '2780 Danforth Ave,Toronto, ON', 'M4C 1M1', '(416) 699-3993', '5522', null, 0, 0));

    this.branchArray.push(new Branch('Bathurst & Glencairn', '2788 Bathurst St,North York, ON', 'M6B 3A3', '(416) 781-3561', '5192', null, 0, 0));

    this.branchArray.push(new Branch('St Clair & Oconnor', '803 O Connor Dr,Toronto, ON', 'M4B 2S7', '(416) 759-3730', '6442', null, 0, 0));
    console.log(this.branchArray);
  }
  // get branch list
  getBranches() { return this.branchArray; }

  //


}
