export const mockRecommendations = [
  'Q50',
  'Niro',
  'Palisade',
];

export const mockDealers = [
  {
    id: 1,
    name: '최지원',
    affiliation: '멋사중고차',
    position: '실장',
    imagePath: '/images/dealers/dealer_1.jpg',
  },
  {
    id: 2,
    name: '이상민',
    affiliation: 'ICT모터스',
    position: '지점장',
    imagePath: '/images/dealers/dealer_2.jpg',
  },
  {
    id: 3,
    name: '이수빈',
    affiliation: '드림오토',
    position: '과장',
    imagePath: '/images/dealers/dealer_3.jpg',
  },
  {
    id: 4,
    name: '김현준',
    affiliation: '청년카딜러스',
    position: '대리',
    imagePath: '/images/dealers/dealer_4.jpg',
  },
  {
    id: 5,
    name: '박민수',
    affiliation: '에이스카',
    position: '부장',
    imagePath: '/images/dealers/dealer_5.jpg',
  },
];

type MockCarSeed = {
  brand: string;
  model: string;
  modelYear: number;
  releaseDate: string;
  origin: string;
  fuelType: string;
  engineDisplacement: number;
  mileage: number;
  size: string;
  seatingCapacity: number;
  priceMin: number;
  priceMax: number | null;
  maintenanceCostMin: number;
  maintenanceCostMax: number | null;
  specialNote: string;
  dealerId: number;
  imagePaths: string[];
};

const makeImagePaths = (model: string) => [
  `/images/cars/${model}_1.jpg`,
  `/images/cars/${model}_2.jpg`,
  `/images/cars/${model}_3.jpg`,
];

const carSeeds: MockCarSeed[] = [
  { brand: 'Hyundai', model: 'AVANTE_AD', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '준중형', seatingCapacity: 5, priceMin: 0, priceMax: 1000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 1, imagePaths: makeImagePaths('AVANTE_AD') },
  { brand: 'Hyundai', model: 'AVANTE_AD', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '준중형', seatingCapacity: 5, priceMin: 0, priceMax: 1000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 1, imagePaths: makeImagePaths('AVANTE_AD') },
  { brand: 'Hyundai', model: 'Sonata_LF', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: 'LPG', engineDisplacement: 1997, mileage: 30000, size: '중형', seatingCapacity: 5, priceMin: 0, priceMax: 1000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 2, imagePaths: makeImagePaths('Sonata_LF') },
  { brand: 'Hyundai', model: 'Sonata_LF', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: 'LPG', engineDisplacement: 1996, mileage: 25000, size: '중형', seatingCapacity: 5, priceMin: 0, priceMax: 1000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 2, imagePaths: makeImagePaths('Sonata_LF') },
  { brand: 'Infiniti', model: 'Q50', modelYear: 2019, releaseDate: '2019-05-13', origin: '외제차', fuelType: '경유', engineDisplacement: 1997, mileage: 30000, size: '중형', seatingCapacity: 5, priceMin: 0, priceMax: 1000, maintenanceCostMin: 30, maintenanceCostMax: 50, specialNote: '판금 / 1인 신조 차량', dealerId: 3, imagePaths: makeImagePaths('Q50') },
  { brand: 'Infiniti', model: 'Q50', modelYear: 2021, releaseDate: '2021-08-09', origin: '외제차', fuelType: '경유', engineDisplacement: 1996, mileage: 25000, size: '중형', seatingCapacity: 5, priceMin: 0, priceMax: 1000, maintenanceCostMin: 30, maintenanceCostMax: 50, specialNote: '단순 교체 / 짧은 키로수', dealerId: 3, imagePaths: makeImagePaths('Q50') },
  { brand: 'Kia', model: 'Morning_JA', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: 'LPG', engineDisplacement: 1997, mileage: 30000, size: '경차', seatingCapacity: 5, priceMin: 0, priceMax: 1000, maintenanceCostMin: 0, maintenanceCostMax: 30, specialNote: '판금 / 1인 신조 차량', dealerId: 4, imagePaths: makeImagePaths('morning_JA') },
  { brand: 'Kia', model: 'Morning_JA', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: 'LPG', engineDisplacement: 1996, mileage: 25000, size: '경차', seatingCapacity: 5, priceMin: 0, priceMax: 1000, maintenanceCostMin: 0, maintenanceCostMax: 30, specialNote: '단순 교체 / 짧은 키로수', dealerId: 4, imagePaths: makeImagePaths('morning_JA') },
  { brand: 'Kia', model: 'K7', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '준대형', seatingCapacity: 5, priceMin: 1000, priceMax: 2000, maintenanceCostMin: 80, maintenanceCostMax: 100, specialNote: '판금 / 1인 신조 차량', dealerId: 5, imagePaths: makeImagePaths('K7') },
  { brand: 'Kia', model: 'K7', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '준대형', seatingCapacity: 5, priceMin: 1000, priceMax: 2000, maintenanceCostMin: 80, maintenanceCostMax: 100, specialNote: '단순 교체 / 짧은 키로수', dealerId: 5, imagePaths: makeImagePaths('K7') },
  { brand: 'Kia', model: 'Niro', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '친환경(전기, 수소)', engineDisplacement: 1997, mileage: 30000, size: '준중형', seatingCapacity: 5, priceMin: 1000, priceMax: 2000, maintenanceCostMin: 0, maintenanceCostMax: 30, specialNote: '판금 / 1인 신조 차량', dealerId: 1, imagePaths: makeImagePaths('Niro') },
  { brand: 'Kia', model: 'Niro', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '친환경(전기, 수소)', engineDisplacement: 1996, mileage: 25000, size: '준중형', seatingCapacity: 5, priceMin: 1000, priceMax: 2000, maintenanceCostMin: 0, maintenanceCostMax: 30, specialNote: '단순 교체 / 짧은 키로수', dealerId: 1, imagePaths: makeImagePaths('Niro') },
  { brand: 'Kia', model: 'The_New_Carnival', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '경유', engineDisplacement: 1997, mileage: 30000, size: '대형', seatingCapacity: 9, priceMin: 1000, priceMax: 2000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 2, imagePaths: makeImagePaths('The_New_Carnival') },
  { brand: 'Kia', model: 'The_New_Carnival', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '경유', engineDisplacement: 1996, mileage: 25000, size: '대형', seatingCapacity: 9, priceMin: 1000, priceMax: 2000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 2, imagePaths: makeImagePaths('The_New_Carnival') },
  { brand: 'Kia', model: 'The_New_Lay', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '경차', seatingCapacity: 4, priceMin: 1000, priceMax: 2000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 3, imagePaths: makeImagePaths('The_New_Lay') },
  { brand: 'Kia', model: 'The_New_Lay', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '경차', seatingCapacity: 4, priceMin: 1000, priceMax: 2000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 3, imagePaths: makeImagePaths('The_New_Lay') },
  { brand: 'MINI', model: 'Cooper_5-Door', modelYear: 2019, releaseDate: '2019-05-13', origin: '외제차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '소형', seatingCapacity: 5, priceMin: 2000, priceMax: 2000, maintenanceCostMin: 30, maintenanceCostMax: 50, specialNote: '판금 / 1인 신조 차량', dealerId: 4, imagePaths: makeImagePaths('Cooper_5-Door') },
  { brand: 'MINI', model: 'Cooper_5-Door', modelYear: 2021, releaseDate: '2021-08-09', origin: '외제차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '소형', seatingCapacity: 5, priceMin: 2000, priceMax: 2000, maintenanceCostMin: 30, maintenanceCostMax: 50, specialNote: '단순 교체 / 짧은 키로수', dealerId: 4, imagePaths: makeImagePaths('Cooper_5-Door') },
  { brand: 'Kia', model: 'K7_Premier', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '준대형', seatingCapacity: 5, priceMin: 2000, priceMax: 3000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 5, imagePaths: makeImagePaths('K7-Premier') },
  { brand: 'Kia', model: 'K7_Premier', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '준대형', seatingCapacity: 5, priceMin: 2000, priceMax: 3000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 5, imagePaths: makeImagePaths('K7-Premier') },
  { brand: 'Hyundai', model: 'Palisade', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '경유', engineDisplacement: 1997, mileage: 30000, size: '대형', seatingCapacity: 7, priceMin: 2000, priceMax: 3000, maintenanceCostMin: 80, maintenanceCostMax: 100, specialNote: '판금 / 1인 신조 차량', dealerId: 1, imagePaths: makeImagePaths('Palisade') },
  { brand: 'Hyundai', model: 'Palisade', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '경유', engineDisplacement: 1996, mileage: 25000, size: '대형', seatingCapacity: 7, priceMin: 2000, priceMax: 3000, maintenanceCostMin: 80, maintenanceCostMax: 100, specialNote: '단순 교체 / 짧은 키로수', dealerId: 1, imagePaths: makeImagePaths('Palisade') },
  { brand: 'Mercedes-Benz', model: 'GLS', modelYear: 2019, releaseDate: '2019-05-13', origin: '외제차', fuelType: '경유', engineDisplacement: 1997, mileage: 30000, size: '대형', seatingCapacity: 7, priceMin: 4000, priceMax: 5000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 2, imagePaths: makeImagePaths('GLS') },
  { brand: 'Mercedes-Benz', model: 'GLS', modelYear: 2021, releaseDate: '2021-08-09', origin: '외제차', fuelType: '경유', engineDisplacement: 1996, mileage: 25000, size: '대형', seatingCapacity: 7, priceMin: 4000, priceMax: 5000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 2, imagePaths: makeImagePaths('GLS') },
  { brand: 'Kia', model: 'The_New_K9', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '대형', seatingCapacity: 5, priceMin: 4000, priceMax: 5000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 3, imagePaths: makeImagePaths('The_New_K9') },
  { brand: 'Kia', model: 'The_New_K9', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '대형', seatingCapacity: 5, priceMin: 4000, priceMax: 5000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 3, imagePaths: makeImagePaths('The_New_K9') },
  { brand: 'Land_Rover', model: 'Range_Rover_Velar', modelYear: 2019, releaseDate: '2019-05-13', origin: '외제차', fuelType: '경유', engineDisplacement: 1997, mileage: 30000, size: '준대형', seatingCapacity: 5, priceMin: 4000, priceMax: 5000, maintenanceCostMin: 30, maintenanceCostMax: 50, specialNote: '판금 / 1인 신조 차량', dealerId: 4, imagePaths: makeImagePaths('range_rover_velar') },
  { brand: 'Land_Rover', model: 'Range_Rover_Velar', modelYear: 2021, releaseDate: '2021-08-09', origin: '외제차', fuelType: '경유', engineDisplacement: 1996, mileage: 25000, size: '준대형', seatingCapacity: 5, priceMin: 4000, priceMax: 5000, maintenanceCostMin: 30, maintenanceCostMax: 50, specialNote: '단순 교체 / 짧은 키로수', dealerId: 4, imagePaths: makeImagePaths('range_rover_velar') },
  { brand: 'Genesis', model: 'G80', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '준대형', seatingCapacity: 5, priceMin: 5000, priceMax: 6000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 5, imagePaths: makeImagePaths('Genesis_G80') },
  { brand: 'Genesis', model: 'G80', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '준대형', seatingCapacity: 5, priceMin: 5000, priceMax: 6000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 5, imagePaths: makeImagePaths('Genesis_G80') },
  { brand: 'Maserati', model: 'Levante', modelYear: 2019, releaseDate: '2019-05-13', origin: '외제차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '준대형', seatingCapacity: 5, priceMin: 5000, priceMax: 6000, maintenanceCostMin: 150, maintenanceCostMax: null, specialNote: '판금 / 1인 신조 차량', dealerId: 2, imagePaths: makeImagePaths('Levante') },
  { brand: 'Maserati', model: 'Levante', modelYear: 2021, releaseDate: '2021-08-09', origin: '외제차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '준대형', seatingCapacity: 5, priceMin: 5000, priceMax: 6000, maintenanceCostMin: 150, maintenanceCostMax: null, specialNote: '단순 교체 / 짧은 키로수', dealerId: 2, imagePaths: makeImagePaths('Levante') },
  { brand: 'Ford', model: 'Bronco_U725', modelYear: 2019, releaseDate: '2019-05-13', origin: '외제차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '대형', seatingCapacity: 5, priceMin: 5000, priceMax: 6000, maintenanceCostMin: 80, maintenanceCostMax: 100, specialNote: '판금 / 1인 신조 차량', dealerId: 3, imagePaths: makeImagePaths('AVANTE_AD') },
  { brand: 'Ford', model: 'Bronco_U725', modelYear: 2021, releaseDate: '2021-08-09', origin: '외제차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '대형', seatingCapacity: 5, priceMin: 5000, priceMax: 6000, maintenanceCostMin: 80, maintenanceCostMax: 100, specialNote: '단순 교체 / 짧은 키로수', dealerId: 3, imagePaths: makeImagePaths('AVANTE_AD') },
  { brand: 'Genesis', model: 'GV70', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '준중형', seatingCapacity: 5, priceMin: 5000, priceMax: 6000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 5, imagePaths: makeImagePaths('AVANTE_AD') },
  { brand: 'Genesis', model: 'GV70', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '준중형', seatingCapacity: 5, priceMin: 5000, priceMax: 6000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 5, imagePaths: makeImagePaths('AVANTE_AD') },
  { brand: 'BMW', model: 'New_5_Series_G60', modelYear: 2019, releaseDate: '2019-05-13', origin: '외제차', fuelType: '친환경(전기, 수소)', engineDisplacement: 1997, mileage: 30000, size: '준중형', seatingCapacity: 5, priceMin: 7000, priceMax: 8000, maintenanceCostMin: 30, maintenanceCostMax: 50, specialNote: '판금 / 1인 신조 차량', dealerId: 1, imagePaths: makeImagePaths('New_5_Series_G60') },
  { brand: 'BMW', model: 'New_5_Series_G60', modelYear: 2021, releaseDate: '2021-08-09', origin: '외제차', fuelType: '친환경(전기, 수소)', engineDisplacement: 1996, mileage: 25000, size: '준중형', seatingCapacity: 5, priceMin: 7000, priceMax: 8000, maintenanceCostMin: 30, maintenanceCostMax: 50, specialNote: '단순 교체 / 짧은 키로수', dealerId: 1, imagePaths: makeImagePaths('New_5_Series_G60') },
  { brand: 'Genesis', model: 'GV80_Coupe', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '준대형', seatingCapacity: 5, priceMin: 7000, priceMax: 8000, maintenanceCostMin: 80, maintenanceCostMax: 100, specialNote: '판금 / 1인 신조 차량', dealerId: 5, imagePaths: makeImagePaths('Genesis_GV80_Coupe') },
  { brand: 'Genesis', model: 'GV80_Coupe', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '준대형', seatingCapacity: 5, priceMin: 7000, priceMax: 8000, maintenanceCostMin: 80, maintenanceCostMax: 100, specialNote: '단순 교체 / 짧은 키로수', dealerId: 5, imagePaths: makeImagePaths('Genesis_GV80_Coupe') },
  { brand: 'Mercedes-Benz', model: 'EQS_V297', modelYear: 2019, releaseDate: '2019-05-13', origin: '외제차', fuelType: '친환경(전기, 수소)', engineDisplacement: 1997, mileage: 30000, size: '대형', seatingCapacity: 5, priceMin: 7000, priceMax: 8000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 4, imagePaths: makeImagePaths('EQS_V297') },
  { brand: 'Mercedes-Benz', model: 'EQS_V297', modelYear: 2021, releaseDate: '2021-08-09', origin: '외제차', fuelType: '친환경(전기, 수소)', engineDisplacement: 1996, mileage: 25000, size: '대형', seatingCapacity: 5, priceMin: 7000, priceMax: 8000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 4, imagePaths: makeImagePaths('EQS_V297') },
  { brand: 'BMW', model: 'X5_G05', modelYear: 2019, releaseDate: '2019-05-13', origin: '외제차', fuelType: '친환경(전기, 수소)', engineDisplacement: 1997, mileage: 30000, size: '대형', seatingCapacity: 5, priceMin: 8000, priceMax: 9000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 1, imagePaths: makeImagePaths('X5_G05') },
  { brand: 'BMW', model: 'X5_G05', modelYear: 2021, releaseDate: '2021-08-09', origin: '외제차', fuelType: '친환경(전기, 수소)', engineDisplacement: 1996, mileage: 25000, size: '대형', seatingCapacity: 5, priceMin: 8000, priceMax: 9000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 1, imagePaths: makeImagePaths('X5_G05') },
  { brand: 'Genesis', model: 'G90_R34', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '대형', seatingCapacity: 5, priceMin: 8000, priceMax: 9000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 5, imagePaths: makeImagePaths('Genesis_G90_R34') },
  { brand: 'Genesis', model: 'G90_R34', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '대형', seatingCapacity: 5, priceMin: 8000, priceMax: 9000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 3, imagePaths: makeImagePaths('Genesis_G90_R34') },
  { brand: 'Tesla', model: 'Model_X', modelYear: 2019, releaseDate: '2019-05-13', origin: '외제차', fuelType: '친환경(전기, 수소)', engineDisplacement: 1997, mileage: 30000, size: '대형', seatingCapacity: 5, priceMin: 8000, priceMax: 9000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 1, imagePaths: makeImagePaths('Model_X') },
  { brand: 'Tesla', model: 'Model_X', modelYear: 2021, releaseDate: '2021-08-09', origin: '외제차', fuelType: '친환경(전기, 수소)', engineDisplacement: 1996, mileage: 25000, size: '대형', seatingCapacity: 5, priceMin: 8000, priceMax: 9000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 1, imagePaths: makeImagePaths('Model_X') },
  { brand: 'Hyundai', model: 'i30_PD', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '준중형', seatingCapacity: 5, priceMin: 9000, priceMax: 10000, maintenanceCostMin: 30, maintenanceCostMax: 50, specialNote: '판금 / 1인 신조 차량', dealerId: 1, imagePaths: makeImagePaths('i30_PD') },
  { brand: 'Hyundai', model: 'i30_PD', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '준중형', seatingCapacity: 5, priceMin: 9000, priceMax: 10000, maintenanceCostMin: 30, maintenanceCostMax: 50, specialNote: '단순 교체 / 짧은 키로수', dealerId: 1, imagePaths: makeImagePaths('i30_PD') },
  { brand: 'Hyundai', model: 'Santa_Fe', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '경유', engineDisplacement: 1997, mileage: 30000, size: '중형', seatingCapacity: 5, priceMin: 9000, priceMax: 10000, maintenanceCostMin: 0, maintenanceCostMax: 30, specialNote: '판금 / 1인 신조 차량', dealerId: 1, imagePaths: makeImagePaths('Santa_Fe') },
  { brand: 'Hyundai', model: 'Santa_Fe', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '경유', engineDisplacement: 1996, mileage: 25000, size: '중형', seatingCapacity: 5, priceMin: 9000, priceMax: 10000, maintenanceCostMin: 0, maintenanceCostMax: 30, specialNote: '단순 교체 / 짧은 키로수', dealerId: 1, imagePaths: makeImagePaths('Santa_Fe') },
  { brand: 'Audi', model: 'e-tron_GT', modelYear: 2019, releaseDate: '2019-05-13', origin: '외제차', fuelType: '친환경(전기, 수소)', engineDisplacement: 1997, mileage: 30000, size: '대형', seatingCapacity: 5, priceMin: 9000, priceMax: 10000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '판금 / 1인 신조 차량', dealerId: 2, imagePaths: makeImagePaths('e-tron_GT') },
  { brand: 'Audi', model: 'e-tron_GT', modelYear: 2021, releaseDate: '2021-08-09', origin: '외제차', fuelType: '친환경(전기, 수소)', engineDisplacement: 1996, mileage: 20000, size: '대형', seatingCapacity: 5, priceMin: 9000, priceMax: 10000, maintenanceCostMin: 50, maintenanceCostMax: 80, specialNote: '단순 교체 / 짧은 키로수', dealerId: 2, imagePaths: makeImagePaths('e-tron_GT') },
  { brand: 'Mercedes-Benz', model: 'S-Class_W223', modelYear: 2019, releaseDate: '2019-05-13', origin: '외제차', fuelType: '경유', engineDisplacement: 1997, mileage: 30000, size: '대형', seatingCapacity: 5, priceMin: 10000, priceMax: null, maintenanceCostMin: 0, maintenanceCostMax: 30, specialNote: '판금 / 1인 신조 차량', dealerId: 4, imagePaths: makeImagePaths('S-class_W223') },
  { brand: 'Mercedes-Benz', model: 'S-Class_W223', modelYear: 2021, releaseDate: '2021-08-09', origin: '외제차', fuelType: '경유', engineDisplacement: 1996, mileage: 25000, size: '대형', seatingCapacity: 5, priceMin: 10000, priceMax: null, maintenanceCostMin: 0, maintenanceCostMax: 30, specialNote: '단순 교체 / 짧은 키로수', dealerId: 4, imagePaths: makeImagePaths('S-class_W223') },
  { brand: 'BMW', model: 'M4_Coupe_G82', modelYear: 2019, releaseDate: '2019-05-13', origin: '외제차', fuelType: '휘발유', engineDisplacement: 1997, mileage: 30000, size: '중형', seatingCapacity: 4, priceMin: 10000, priceMax: null, maintenanceCostMin: 80, maintenanceCostMax: 100, specialNote: '판금 / 1인 신조 차량', dealerId: 3, imagePaths: makeImagePaths('M4_Coupe_G82') },
  { brand: 'BMW', model: 'M4_Coupe_G82', modelYear: 2021, releaseDate: '2021-08-09', origin: '외제차', fuelType: '휘발유', engineDisplacement: 1996, mileage: 25000, size: '중형', seatingCapacity: 4, priceMin: 10000, priceMax: null, maintenanceCostMin: 80, maintenanceCostMax: 100, specialNote: '단순 교체 / 짧은 키로수', dealerId: 3, imagePaths: makeImagePaths('M4_Coupe_G82') },
  { brand: 'Renault_Korea', model: 'SM6', modelYear: 2019, releaseDate: '2019-05-13', origin: '국산차', fuelType: '경유', engineDisplacement: 1997, mileage: 30000, size: '중형', seatingCapacity: 5, priceMin: 10000, priceMax: null, maintenanceCostMin: 0, maintenanceCostMax: 30, specialNote: '판금 / 1인 신조 차량', dealerId: 5, imagePaths: makeImagePaths('SM6') },
  { brand: 'Renault_Korea', model: 'SM6', modelYear: 2021, releaseDate: '2021-08-09', origin: '국산차', fuelType: '경유', engineDisplacement: 1996, mileage: 25000, size: '중형', seatingCapacity: 5, priceMin: 10000, priceMax: null, maintenanceCostMin: 0, maintenanceCostMax: 30, specialNote: '단순 교체 / 짧은 키로수', dealerId: 5, imagePaths: makeImagePaths('SM6') },
];

export const mockCars = carSeeds.map((car, index) => {
  const dealer = mockDealers.find((item) => item.id === car.dealerId) ?? mockDealers[0];

  return {
    id: index + 1,
    ...car,
    priceMax: car.priceMax ?? car.priceMin,
    maintenanceCostMax: car.maintenanceCostMax ?? car.maintenanceCostMin,
    dealerName: dealer.name,
    dealerAffiliation: dealer.affiliation,
    position: dealer.position,
    dealerImagePath: dealer.imagePath,
  };
});

export const getMockCarsByModel = (modelName: string) => {
  const normalizedModelName = modelName.trim().toLowerCase();

  return mockCars.filter((car) => car.model.toLowerCase() === normalizedModelName);
};

export const getMockCarById = (carId: string | number) => {
  return mockCars.find((car) => car.id === Number(carId));
};

export const getMockDealerById = (dealerId: string | number) => {
  return mockDealers.find((dealer) => dealer.id === Number(dealerId));
};

export const getMockDealerCars = (dealerId: string | number) => {
  return mockCars.filter((car) => car.dealerId === Number(dealerId));
};
