export type ParcelStatus = 'registered' | 'warehouse' | 'shipped' | 'customs' | 'delivered';

export interface User {
  email: string;
  name: string;
  clientCode: string;
}

export interface Parcel {
  id: string;
  trackingNumber: string;
  description: string;
  status: ParcelStatus;
  weight?: number;
  price?: number;
  internationalTracking?: string;
  dateAdded: string;
  imageUrl?: string;
}
