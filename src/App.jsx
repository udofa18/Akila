import "hover.css/css/hover-min.css";
import "@fontsource/rajdhani";
import "@fortawesome/fontawesome-free/css/all.css";

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Danny Austin',
    role: 'Co-Founder',
    imageUrl:
    ' https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Abraham Linkon',
    role: 'Product Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'sarah Couch',
    role: 'HR',
    imageUrl:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Xian wu',
    role: 'Marketing',
    imageUrl:
      'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80',
  },
  {
    name: 'Miccheal Tan',
    role: 'Community',
    imageUrl:
      'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  
  // More people...
]
export default function App() {
  return (
    <>
      <main className="min-h-screen w-full items-center   justify-center ">
        <nav className="  flex text-center items-center pt-5  justify-center ">
          <div className="text-2xl">AKILA NFT</div>
          <div className=" flex items-center ml-96">
          <div className="flex gap-8 justify-center text-2xl p-5 text-white mr-20">
           <a className="text-white hvr-buzz-out"><i className="fab fa-facebook"></i>  </a>   
           <a className="text-white hvr-buzz-out"> <i className="fab fa-instagram"></i> </a> 
           <a className="text-white hvr-buzz-out"><i className="fab fa-discord"></i>  </a>
           <a className="text-white hvr-buzz-out"><i className="fab fa-twitter"></i>  </a>
           <a className="text-white hvr-buzz-out"> <i className="fab fa-medium"></i>  </a>
         </div>
            <button className=" ml-96 border border-orange-300 p-2 rounded-2xl text-2xl">
              Mint Akila Nft
            </button>
          </div>
        </nav>
        <section className="flex justify-center my-12">
          <div className=" mt-40">
            <h1 className=" text-8xl text-white">AKILA NFT</h1>

            <p className=" text-xl w-80 leading-loose pl-12">
              Exclusively for Genesis NFT holders. Our NFT is the First AI NFT
              created for decentralization .........................
            </p>
            <button className=" pl-20 mt-7 border border-orange-300 p-2 rounded-2xl">
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
            <p className="text-xl w-80 pl-12  mt-10 text-right ">
              A limited NFT collection where the token itself doubles as your
              membership to a swamp club for apes. The club is open! Ape in with
              us.
            </p>
            <button className=" ml-12 mt-7 border border-orange-300 p-2 rounded-2xl">
              Whitepaper
            </button>
            <div className=" text-right w-80 mt-40">
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
      <section className="w-full h-50 mb-8 h-full border border-orange-300  rounded-full p-10 text-center  sec-overlay bg-orange-300">
        <div className="relative">
        <div className="max-w-2xl m-auto ">
                <h2 className="text-3xl font-bold tracking-tight text-orange-400 sm:text-4xl">
                  Meet our team:
                </h2>
                <p className="mt-6 text-lg leading-8 text-white">
                  Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                  vitae elementum enim vitae ullamcorper suspendisse.
                </p>
            </div>
          <div className=" my-12 sm:py-25 w-full">
            <div className="mx-auto m-auto px-6 lg:px-4">
              
              <ul
                role="list"
                className="flex flex-wrap gap-x-8 gap-y-12 justify-center"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="flex items-center gap-x-6">
                     <div className=" border rounded-full  p-3">
                  
                      <img
                        className="h-40 w-40 rounded-full "
                        src={person.imageUrl}
                        alt=""
                      />
                      </div>
                      <div className="">
                        <h3 className="text-2xl font-semibold leading-7 tracking-tight text-orange-400">
                          {person.name}
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-black p-1 rounded-full m-2 bg-orange-400 ">
                          {person.role}
                        </p>
                       <div className="text-white flex gap-3 text-2xl justify-center">
                     <a className="text-white"> <i className="fab fa-linkedin hvr-buzz-out"></i></a>
                     <a className="text-white"> <i className="fab fa-twitter-square hvr-buzz-out"></i></a>
                     <a className="text-white"> <i className="fas fa-envelope hvr-buzz-out"></i></a>
                       </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        
      </section>
      <section className=" w-full h-full py-24 text-center sec-overlay bg-center "style={{ backgroundImage: "url(https://as1.ftcdn.net/v2/jpg/05/53/47/02/1000_F_553470221_u8hS7sAg3JP8juWJEpP8aTI0cyKQCd6k.jpg)", backgroundPosition:"center", backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
       >
       <div className="relative h-screen py-24">
       <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                 Join Whitelist
                </h2>
       <form>
        <input className=" p-5 w-80 text-2xl m-7 rounded-full" type="email" placeholder="Drop your email" style={{backgroundColor:"#0b01018c", border:"1px solid orange"}}></input>
        <button className="p-5 text-2xl m-1 bg-grey-100 rounded-full" type="submit" style={{backgroundColor:"rgba(192, 192, 192, 0.614)",color:"black"}}>JOIN</button>
       </form>
       </div>

      </section>
   
<footer className="p-10">
  <div>
    <div className="text-center">
      <h1 className="text-3xl">AKILA NFT</h1>
      <div className="flex gap-8 justify-center text-2xl p-5 text-white">
           <a className="text-white hvr-buzz-out"><i className="fab fa-facebook"></i>  </a>   
           <a className="text-white hvr-buzz-out"> <i className="fab fa-instagram"></i> </a> 
           <a className="text-white hvr-buzz-out"><i className="fab fa-discord"></i>  </a>
           <a className="text-white hvr-buzz-out"><i className="fab fa-twitter"></i>  </a>
           <a className="text-white hvr-buzz-out"> <i className="fab fa-medium"></i>  </a>
      </div>
      <div className="">
      <h1 className="text-lg">Subscribe to newsletter</h1>
        <form className="flex  p-5 justify-center gap-3 ">
          <input className="p-2 w-80 border-orange-300 border bg-black rounded-2xl " type="email">
          
          </input>
          <button type="submit" className="bg-transparent	">
            <i className="fas fa-paper-plane"></i>
          </button>
          
        </form>
      </div>
      <div>
        <h1>2023 Akila ||
Inc. All rights reserved</h1>
<p>Designed by <a>https://github.com/udofa18</a></p>
      </div>

    </div>
  </div>
</footer>
    

    </>
  );
}
