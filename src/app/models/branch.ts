export class Branch {
    name: string;
    address: string;
    postalCode: string;
    phone: string;
    transit: string;
    distance: string;
    lat: number;
    lng: number;


    constructor(name: string, address: string, postalCode: string, phone: string, transit: string, distance: string, lat: number, lng: number) {
        this.name = name;
        this.address = address;
        this.postalCode = postalCode;
        this.phone = phone;
        this.transit = transit;
        this.distance = distance;
        this.lat = lat;
        this.lng = lng;
    }
}
