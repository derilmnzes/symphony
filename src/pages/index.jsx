import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Image1 from "../../public/polythonfloor.png";
import Slider from "./Components/Slider";
import Grid from "./Components/Grid";

const serviceData = [
  {
    name: "Polyurethane Flooring",
    image: Image1,
    description:
      "Polyurethane-based four-component self-smoothing, matt finish flooring is a type of flooring system that is made up of four components - a polyurethane resin base, a hardener, a filler, and a pigment.",
    features: [
      {
        id: 1,
        feature: "Durable and long-lasting",
      },
      {
        id: 2,
        feature: "Resistant to wear and tear",
      },
      {
        id: 3,
        feature: "Resistant to chemicals, abrasions, and impacts",
      },
      {
        id: 4,
        feature: "Easy to clean and maintain",
      },
      {
        id: 5,
        feature:
          "Non-porous, does not allow bacteria, mold, or mildew to grow on the surface",
      },
      {
        id: 6,
        feature: "Self-smoothing, creating a seamless and smooth surface",
      },
    ],
  },
  {
    name: "Epoxy flooring",
    image: Image1,
    description:
      "Epoxy flooring is a popular and durable flooring option used in many industrial, commercial, and residential settings.",
    features: [
      {
        id: 1,
        feature: "Durable and resistant to wear and tear",
      },
      {
        id: 2,
        feature: "Highly resistant to chemicals and stains",
      },
      {
        id: 3,
        feature: "Creates a seamless finish",
      },
      {
        id: 4,
        feature: "Easy to clean and maintain",
      },
      {
        id: 5,
        feature: "Can be customized with colors, textures, and finishes",
      },
      {
        id: 6,
        feature:
          "Cost-effective solution for commercial and industrial settings",
      },
    ],
  },
  {
    name: "Epoxy Decorative Flooring:",
    image: Image1,
    description:
      "Epoxy decorative flooring is a durable and customizable flooring option that adds style and functionality to any space with its resistance to stains, scratches, and chemicals, as well as its low maintenance and seamless finish.",
    features: [
      {
        id: 1,
        feature: "Special anti-skid finish for maximum safety",
      },
      {
        id: 2,
        feature: "Smooth surface available in glossy/matte finish",
      },
      {
        id: 3,
        feature: "Seamless and easy to clean",
      },
      {
        id: 4,
        feature: "High wear resistance for heavy foot traffic and machinery",
      },
      {
        id: 5,
        feature: "High chemical resistance for harsh environments",
      },
      {
        id: 6,
        feature: "Decorative finishes to suit any design style",
      },
    ],
  },

  {
    name: "Car Parking",
    image: Image1,
    description:
      "Our car parking coating is a solvent-based two-component polyurethane resin that provides a durable and protective finish for your car park. It offers a range of benefits, including",
    features: [
      {
        id: 1,
        feature: "Dustproof, seamless, anti-skid finish",
      },
      {
        id: 2,
        feature: "Available in glossy/matte finishes",
      },
      {
        id: 3,
        feature: "High wear resistance for heavy foot and vehicle traffic",
      },
      {
        id: 4,
        feature:
          "High chemical resistance for protection against spills and stains",
      },
      {
        id: 5,
        feature: "UV resistance to prevent yellowing and fading",
      },
      {
        id: 6,
        feature:
          "Provides an attractive, easy-to-clean surface that enhances safety and visibility.",
      },
    ],
  },
  {
    name: "Electrostatic Dissipative Flooring (ESD)/ Antistatic Flooring",
    image: Image1,
    description:
      "Our ESD/antistatic flooring is an epoxy-based solution that is designed to dissipate electrostatic charges and prevent the buildup of static electricity. This type of flooring is commonly used in areas where sensitive electronic equipment is present, such as laboratories, clean rooms, and manufacturing facilities.",
    features: [
      {
        id: 1,
        feature:
          "Hardwearing and durable, able to withstand heavy foot traffic and machinery",
      },
      {
        id: 2,
        feature:
          "Smooth surface with glossy finish for a sleek and professional look",
      },
      {
        id: 3,
        feature:
          "Seamless and easy to clean surface that meets strict hygiene and sanitation standards",
      },
      {
        id: 4,
        feature:
          "Anti-static properties that dissipate electrostatic charges and prevent the buildup of static electricity",
      },
      {
        id: 5,
        feature:
          "High chemical resistance to protect against spills and stains",
      },
      {
        id: 6,
        feature:
          "Electrical resistance in the range of 5 × 104 to 108 ohms, ensuring effective dissipation of electrostatic charges to protect sensitive equipment.",
      },
    ],
  },
];

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-fontColor pt-16">
        <div className="max-w-screen-xl m-auto p-5">
          <div className="py-10 lg:flex lg:flex-row lg:justify-between ">
          <div>
          <h1 className="text-4xl font-bold text-theme sm:text-6xl">
              Epoxy Flooring: The Durable and Versatile Solution for Your Home,
              Business, or Industrial Setting
            </h1>
            <p className="text-2xl  font-semibold my-4 sm:text-3xl sm:my-10">
              Discover the Benefits of Epoxy Flooring and Enhance the Look and
              Functionality of Your Space with a Seamless and Long-Lasting Floor
            </p>
            <button className="py-4 px-6 bg-theme text-white font-semibold  sm:text-2xl">
              Load More
            </button>
          </div>

            
          </div>


          <div className="my-10">
            <div className="text-center">
              <p className="text-theme sm:text-2xl sm:font-semibold sm:text-3xl">
                Services
              </p>
              <h1 className="text-2xl font-bold sm:text-6xl">
                Services we provide
              </h1>
            </div>
            {serviceData.map((item, index) => (
              <div className="py-10 text-justify" key={item.name}>
                <div>
                  <h1 className="text-lg font-bold sm:text-4xl">{item.name}</h1>
                </div>
                <div>
                  <p className="text-sm py-6 sm:text-2xl ">{item.description}</p>
                </div>
                <div className={`flex flex-col sm:flex-row sm:items-center`}>
                  <Image 
                    src={item.image}
                    className="rounded-lg shadow-md shadow-theme sm:w-2/5 h-80"
                  />
                  <div className="w-full sm:w-3/5">
                    <ul className="py-5 px-6 sm:px-10 ">
                      {item.features.map((item) => (
                        <li
                          className="list-disc text-theme text-md sm:text-2xl"
                          key={item.id}
                        >
                          {item.feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            ;
          </div>

       <div>
       <Grid />
       </div>

         
          <div>
            <Slider />
          </div>
        </div>

       

      </main>
    </>
  );
}


