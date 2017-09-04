export class Branch {
    name: string;
    address: string;
    postalCode: string;
    phone: string;
    transit: string;
    distanceInMeters: number;
    lat: number;
    lng: number;


    constructor(name: string, address: string, postalCode: string, phone: string, transit: string, distance: number, lat: number, lng: number) {
        this.name = name;
        this.address = address;
        this.postalCode = postalCode;
        this.phone = phone;
        this.transit = transit;
        this.distanceInMeters = distance;
        this.lat = lat;
        this.lng = lng;
    }
}
