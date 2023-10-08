// ----------------------------------------------------------------------

export type IGameFilterValue = string | string[] | Date | IGameGuide[] | null;

export type IGameFilters = {
  gameGuides: IGameGuide[];
  destination: string[];
  services: string[];
  startDate: Date | null;
  endDate: Date | null;
};

// ----------------------------------------------------------------------

export type IGameGuide = {
  id: string;
  name: string;
  avatarUrl: string;
  phoneNumber: string;
};

export type IGameBooker = {
  id: string;
  name: string;
  avatarUrl: string;
  guests: number;
};

export type IGameItem = {
  id: string;
  name: string;
  price: number;
  totalViews: number;
  tags: string[];
  content: string;
  publish: string;
  images: string[];
  durations: string;
  priceSale: number;
  services: string[];
  destination: string;
  ratingNumber: number;
  bookers: IGameBooker[];
  gameGuides: IGameGuide[];
  createdAt: Date;
  available: {
    startDate: Date;
    endDate: Date;
  };
};
