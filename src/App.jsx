import "hover.css/css/hover-min.css";
import "@fontsource/rajdhani";
import "@fortawesome/fontawesome-free/css/all.css";

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]
export default function App() {
  return (
    <>
      <main className="min-h-screen  items-center  p-10   justify-center ">
        <nav className=" flex text-center items-center m-auto justify-center ">
          <div className="">AKILA NFT</div>
          <div className=" flex items-center ml-96">
            <div className=" flex gap-3 text-white ml-48 ">
              <i class="fa-brands fa-twitter hvr-wobble-skew"></i>
              <i
                class="fa-brands fa-instagram hvr-wobble-skew"
                aria-hidden="true"
              ></i>
              <i class="fa-brands fa-facebook  hvr-wobble-skew"></i>
              <i class="fa-brands fa-discord hvr-wobble-skew"></i>
              <i class="fa-brands fa-medium hvr-wobble-skew"></i>
            </div>
            <button className=" ms-20 border border-orange-300 p-2 rounded-2xl">
              Mint Akila Nft
            </button>
          </div>
        </nav>
        <section className="flex justify-center my-12">
          <div className=" mt-40">
            <h1 className=" text-8xl text-white">AKILA NFT</h1>

            <p className=" text-xs w-80 leading-loose pl-12">
              Exclusively for Genesis NFT holders. Our NFT is the First AI NFT
              created for decentralization .........................
            </p>
            <button className=" ml-12 mt-7 border border-orange-300 p-2 rounded-2xl">
              Connect Wallet
            </button>
          </div>
          <div className="img-con pt-5">
            <img
              className="nft-logo"
              src="src/assets/nft.png"
              alt="Nft Image"
              width="400"
              height="100"
            />
          </div>
          <div>
            <p className="text-xs w-80 pl-12  mt-14 ">
              A limited NFT collection where the token itself doubles as your
              membership to a swamp club for apes. The club is open! Ape in with
              us.
            </p>
            <button className=" ml-12 mt-7 border border-orange-300 p-2 rounded-2xl">
              Whitepaper
            </button>
            <div className=" text-right w-80 mt-52">
              <h1 className="text-2xl">Special Features</h1>
              <p className="w-80 my-4  text-gray-300 text-xs">
                All special elements of the Astro NFT collection are designed to
                enhance your Everdome experience. Created in collaboration with
                Space Architects, these special elements are based on actual
                Mars EVA (Extra Vehicular Activity) research.
              </p>
              <div className="flex flex-wrap justify-end">
                <button className=" p-2 m-2 border text-xs hover:bg-orange-400 hover:text-black focus:rounded-2xl focus:bg-orange-400 focus:text-black">
                  {" "}
                  Colourful caps
                </button>
                <button className=" p-2 m-2 border text-xs  hover:bg-orange-400 hover:text-black focus:rounded-2xl focus:bg-orange-400 focus:text-black">
                  {" "}
                  Camo
                </button>
                <button className=" p-2 m-2 border text-xs  hover:bg-orange-400 hover:text-black focus:rounded-2xl focus:bg-orange-400 focus:text-black">
                  {" "}
                  Hoodie
                </button>
                <button className=" p-2 m-2 border text-xs  hover:bg-orange-400 hover:text-black focus:rounded-2xl focus:bg-orange-400 focus:text-black">
                  {" "}
                  Swag
                </button>
                <button className=" p-2 m-2 border text-xs  hover:bg-orange-400 hover:text-black focus:rounded-2xl focus:bg-orange-400 focus:text-black">
                  {" "}
                  Rarity
                </button>
                <button className=" p-2 m-2 border text-xs  hover:bg-orange-400 hover:text-black focus:rounded-2xl focus:bg-orange-400 focus:text-black">
                  {" "}
                  customied Shirts
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className=" w-full h-50 bg-orange-400 mb-8 flex">
          <p className="text-black p-10 w-2/4  text-2xl">
            As the first Everdome wearable, the Astro NFT collection is
            exclusive to Genesis collection holders.
          </p>
          <div className=" grid grid-flow-col gap-8 text-white bg-black  p-10">
            <div className=" border-r-2 p-3">
              <p className="text-2xl">9999</p>
              <p className=" text-orange-400 text-xs">Collection size</p>
            </div>
            <div className=" border-r-2 p-3">
              <p className="text-2xl">77</p>
              <p className=" text-orange-400 text-xs">Standard Variant</p>
            </div>
            <div className=" border-r-2 p-3">
              <p className="text-2xl">1000</p>
              <p className=" text-orange-400 text-xs">Colour combination</p>
            </div>
            <div className=" border-r-2 p-3">
              <p className="text-2xl">20</p>
              <p className=" text-orange-400 text-xs">Special Elements</p>
            </div>
          </div>
        </section>
        <section className=" w-full h-50 bg-black items-center">
          <div>
            <h1 className="text-slate-500 p-10 text-center text-2xl">
              Supported by:
            </h1>
          </div>
          <div className="flex w-full flex-row gap-8 justify-center">
            <img
              className=""
              src="src/assets/uni.png"
              alt="Nft Image"
              width="150"
              height="100"
            />
            <img
              className=""
              src="src/assets/poly.png"
              alt="Nft Image"
              width="150"
              height="100"
            />

            <img
              className=""
              src="src/assets/lbank.png"
              alt="Nft Image"
              width="150"
              height="100"
            />
            <img
              className=""
              src="src/assets/kucoin.png"
              alt="Nft Image"
              width="150"
              height="100"
            />
          </div>

          <div>
            <h1 className=" text-slate-500 p-10 text-center text-2xl">
              Feaured on:
            </h1>
          </div>
          <div className="flex w-full flex-row gap-8 justify-center">
            <img
              className=""
              src="src/assets/coin.svg"
              alt="Nft Image"
              width="150"
              height="120"
            />
            <img
              className=""
              src="src/assets/news.svg"
              alt="Nft Image"
              width="150"
              height="100"
            />

            <img
              className=""
              src="src/assets/yahoo.svg"
              alt="Nft Image"
              width="150"
              height="100"
            />
            <img
              className=""
              src="src/assets/digi.svg"
              alt="Nft Image"
              width="150"
              height="100"
            />
          </div>
        </section>
      </main>
      <section
        className=" w-full h-50 mb-8  rounded-3xl p-10 text-center sec-overlay"
        style={{ backgroundImage: "url(src/assets/back.avif)" }}
      >
        <div className=" relative">
          <div>
            <h1 className=" bg p-10 text-center text-2xl">
              Akila NFT Characters
            </h1>
          </div>
          <div className=" flex justify-center">
            <div className="  rounded-xl border w-fit m-4 img-con bg-red-600 hvr-bob ">
              <img
                className="mt-14"
                src="src/assets/nft1.png"
                alt="s"
                width="250"
                height="120"
              />
            </div>
            <div className="rounded-xl border w-fit m-4 img-con bg-yellow-600 hvr-bob ">
              <img
                className="mt-14"
                src="src/assets/nft2.png"
                alt="Nft Image"
                width="250"
                height="120"
              />
            </div>
            <div className=" rounded-xl border w-fit m-4 img-con bg-blue-600 hvr-bob ">
              <img
                className="mt-14"
                src="src/assets/nft3.png"
                alt="Nft Image"
                width="250"
                height="120"
              />
            </div>
            <div className="  rounded-xl border w-fit m-4 img-con bg-white hvr-bob ">
              <img
                className="mt-14"
                src="src/assets/nft4.png"
                alt="Nft Image"
                width="250"
                height="120"
              />
            </div>
          </div>
          <button className=" m-7 border border-orange-300 p-5 rounded-2xl">
            Mint Akila Nft
          </button>
        </div>
      </section>
      <section className="w-full h-50 mb-8 h-full  rounded-3xl p-10 text-center  bg-orange-400">
        
        <div className="max-w-2xl m-auto">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Meet our team:
                </h2>
                <p className="mt-6 text-lg leading-8 text-white">
                  Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                  vitae elementum enim vitae ullamcorper suspendisse.
                </p>
            </div>
          <div className=" py-24 sm:py-32 ">
            <div className="mx-auto grid m-auto gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
              
              <ul
                role="list"
                className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-4"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="flex items-center gap-x-6">
                      <img
                        className="h-40 w-40 rounded-full"
                        src={person.imageUrl}
                        alt=""
                      />
                      <div className="">
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          {person.name}
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">
                          {person.role}
                        </p>
                       
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        
      </section>
    </>
  );
}
