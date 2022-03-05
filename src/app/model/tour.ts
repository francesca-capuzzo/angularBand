export class Tour {
    date: string;
    city: string;
    building: string;
    sale_canc: string;
  
    constructor(date: string, city: string, building: string, sale_canc: string){
      this.date = date;
      this.city = city;
      this.building = building;
      this.sale_canc = sale_canc;
    }
}