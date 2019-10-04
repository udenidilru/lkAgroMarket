export interface SupplyAd {
  id: string;
  type: string;
  food: string;
  amount: number;
  pricePerUnit: number;
  image1: File;
  image2: File;
  image3: File;
  image4: File;
  description: string;
  organic: boolean;
  expireDate: Date;
  createdAt: Date;
}
