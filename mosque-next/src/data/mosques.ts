export interface Mosque {
  id: number;
  name: string;
  division: string;
  district: string;
  thana: string;
  pourashava: string;
  address: string;
  mapLink: string;
  image: string;
  prayers: {
    daily: boolean;
    jummah: boolean;
    eid: boolean;
  };
  facilities: {
    wudu: boolean;
    womenSpace: boolean;
    ac: boolean;
    parking: boolean;
    wheelchair: boolean;
  };
  imam?: string;
  contact?: string;
  prayerTimes: {
    fajr: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
    jummah: string;
  };
  description: string;
}

export const mosquesData: Mosque[] = [
  {
    id: 1,
    name: "Baitul Mamur Jame Masjid",
    division: "Dhaka",
    district: "Dhaka",
    thana: "Mirpur",
    pourashava: "Dhaka North",
    address: "West Shewrapara, Mirpur, Dhaka-1216",
    mapLink: "https://maps.google.com",
    image: "/img/blog-1.jpg",
    prayers: { daily: true, jummah: true, eid: true },
    facilities: { wudu: true, womenSpace: true, ac: true, parking: false, wheelchair: false },
    imam: "Maulana Abdul Karim",
    contact: "+880 1711 000000",
    prayerTimes: { fajr: "5:15 AM", dhuhr: "1:15 PM", asr: "4:30 PM", maghrib: "6:45 PM", isha: "8:00 PM", jummah: "1:30 PM" },
    description: "A central mosque in West Shewrapara known for its spacious prayer hall and community activities."
  },
  {
    id: 2,
    name: "Amber Shah Masjid",
    division: "Dhaka",
    district: "Dhaka",
    thana: "Tejgaon",
    pourashava: "Dhaka North",
    address: "Kawran Bazar, Dhaka-1215",
    mapLink: "https://maps.google.com",
    image: "/img/blog-2.jpg",
    prayers: { daily: true, jummah: true, eid: true },
    facilities: { wudu: true, womenSpace: false, ac: true, parking: true, wheelchair: true },
    imam: "Mufti Mizanur Rahman",
    prayerTimes: { fajr: "5:10 AM", dhuhr: "1:15 PM", asr: "4:15 PM", maghrib: "6:45 PM", isha: "8:15 PM", jummah: "1:45 PM" },
    description: "Historical mosque located in the heart of Kawran Bazar, accessible to many office goers."
  },
  {
    id: 3,
    name: "Sobhanbag Jame Masjid",
    division: "Dhaka",
    district: "Dhaka",
    thana: "Dhanmondi",
    pourashava: "Dhaka South",
    address: "Sobhanbag, Dhanmondi, Dhaka",
    mapLink: "https://maps.google.com",
    image: "/img/blog-3.jpg",
    prayers: { daily: true, jummah: true, eid: true },
    facilities: { wudu: true, womenSpace: true, ac: true, parking: true, wheelchair: true },
    contact: "+880 1811 222333",
    prayerTimes: { fajr: "5:20 AM", dhuhr: "1:30 PM", asr: "4:30 PM", maghrib: "6:50 PM", isha: "8:30 PM", jummah: "1:30 PM" },
    description: "Beautifully designed mosque with modern amenities and a large separate area for women."
  },
  {
    id: 4,
    name: "Masjid-e-Gausul Azam",
    division: "Dhaka",
    district: "Dhaka",
    thana: "Gulshan",
    pourashava: "Dhaka North",
    address: "Mohakhali Wireless Gate, Dhaka",
    mapLink: "https://maps.google.com",
    image: "/img/sermon-1.jpg",
    prayers: { daily: true, jummah: true, eid: true },
    facilities: { wudu: true, womenSpace: false, ac: true, parking: true, wheelchair: false },
    prayerTimes: { fajr: "5:15 AM", dhuhr: "1:20 PM", asr: "4:25 PM", maghrib: "6:45 PM", isha: "8:10 PM", jummah: "1:40 PM" },
    description: "One of the largest mosques in the Mohakhali area, serving a large community."
  },
  {
    id: 5,
    name: "East Shewrapara Jame Masjid",
    division: "Dhaka",
    district: "Dhaka",
    thana: "Mirpur",
    pourashava: "Dhaka North",
    address: "East Shewrapara, Mirpur, Dhaka",
    mapLink: "https://maps.google.com",
    image: "/img/sermon-2.jpg",
    prayers: { daily: true, jummah: true, eid: true },
    facilities: { wudu: true, womenSpace: false, ac: true, parking: false, wheelchair: false },
    prayerTimes: { fajr: "5:15 AM", dhuhr: "1:15 PM", asr: "4:30 PM", maghrib: "6:45 PM", isha: "8:00 PM", jummah: "1:30 PM" },
    description: "A local community mosque with a peaceful environment."
  },
  {
    id: 6,
    name: "Anderkilla Shahi Jame Masjid",
    division: "Chittagong",
    district: "Chittagong",
    thana: "Kotwali",
    pourashava: "Chittagong City Corp",
    address: "Anderkilla, Chittagong",
    mapLink: "https://maps.google.com",
    image: "/img/blog-1.jpg",
    prayers: { daily: true, jummah: true, eid: true },
    facilities: { wudu: true, womenSpace: false, ac: false, parking: false, wheelchair: false },
    prayerTimes: { fajr: "5:00 AM", dhuhr: "1:15 PM", asr: "4:15 PM", maghrib: "6:30 PM", isha: "8:00 PM", jummah: "1:30 PM" },
    description: "A historical Mughal-era mosque in Chittagong."
  },
];
