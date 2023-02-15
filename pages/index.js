import Head from "next/head";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./styles.css" />
        <link rel="stylesheet" href="./custom.css" />
        {/* <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <title>The Vault</title>
      </Head>
      <>
        {/*code testing*/}
        <div class="bg-gray-100 ">
          <div class="lg:px-16  lg:py-3   px-8  bg-white flex flex-wrap items-center py-6 shadow-md">
            <div class="flex-1 flex justify-between items-center">
              <img
                src="images/logo.png"
                class="h-8 w-auto sm:h-10"
                alt="logo"
              />
            </div>
            <label for="menu-toggle" class="pointer-cursor md:hidden block">
              <svg
                class="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle" />
            <div
              class="hidden md:flex md:items-center md:w-auto w-full"
              id="menu"
            >
              <nav>
                <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                  <li>
                    <a class="md:p-4 py-3 px-0 block" href="#home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a class="md:p-4 py-3 px-0 block" href="#the-vault">
                      The Vault
                    </a>
                  </li>
                  <li>
                    <a
                      class="md:p-4 py-3 px-0 block"
                      href="#why-a-digital-will"
                    >
                      Why a Digital Will?
                    </a>
                  </li>
                  <li>
                    <a
                      class="md:p-4 py-3 px-0 block md:mb-0 mb-2"
                      href="#pricing"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <button class="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-3 py-2 rounded-m">
                      Get in touch
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* Hero Section */}
        <div style={{ height: "90vh" }}>
          <div
            className="video-container lg:mt-0.25  "
            style={{
              backgroundImage: 'url("images/background.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              backgroundPosition: "right",
              backgroundSize: "cover",
            }}
          />
          <div className="container flex flex-row mr-auto ml-auto pt-44">
            <div className="md:w-2/3" />
            <div className="w-full px-10 sm:px-0 md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-5">
                Digitally create, manage and <br />
                store your will - just in case
              </h1>
              <p className="text-white text-md md:w-4/5 mb-5">
                At the click of a button create and store your will on the
                blockchain
                <br />
                with a world first patented technology
              </p>
              <div className="mx-auto flex space-x-8 items-center">
                <div className="mx-auto md:mx-0 mt-5">
                  <a
                    href="https://beta-vault.web.app"
                    className="
            bg-gradient-to-r
            from-yellow-500
            to-yellow-400
            text-white
            px-8
            py-3
            rounded-md
            button-btm
          "
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="container mr-auto ml-auto  py-48" id="home">
          <div>
            <h1 className="text-center text-4xl mb-2">
              Follow our 5 basic steps
            </h1>
            <p className="text-center mb-1">
              Complete your online Will in no time at all, with these five basic
              steps
            </p>
          </div>
          {/* Cards */}
          <div
            className="
    flex
    items-center
    space-y-8
    md:space-y-0
    flex-col
    md:flex-row
    justify-between
    mt-11
  "
          >
            {/* card*/}
            <div
              className="
      md:w-56
      w-full
      h-72
      md:h-56
      shadow-md
      bg-white
      flex
      items-center
      flex-col
      p-4
    "
            >
              <img
                src="images/Digitally Select.svg"
                alt={1}
                width={70}
                height={70}
                className="mt-3 mb-3"
              />
              <h1 className="text-center font-bold text-xl mb-1">
                Digitally Select
              </h1>
              <p className="text-center text-gray-600">
                Select the product that suits your needs
              </p>
            </div>
            {/* card*/}
            <div
              className="
      md:w-56
      w-full
      h-72
      md:h-56
      shadow-md
      bg-white
      flex
      items-center
      flex-col
      p-4
    "
            >
              <img
                src="images/Digitally Create.svg"
                alt={1}
                width={70}
                height={70}
                className="mt-3 mb-3"
              />
              <h1 className="text-center font-bold text-xl mb-1">
                Digitally Create
              </h1>
              <p className="text-center text-gray-600">
                Create your Will with easy-to-follow questions
              </p>
            </div>
            {/* card*/}
            <div
              className="
      md:w-56
      w-full
      h-72
      md:h-56
      shadow-md
      bg-white
      flex
      items-center
      flex-col
      p-4
    "
            >
              <img
                src="images/Manage Will.svg"
                alt={1}
                width={70}
                height={70}
                className="mt-3 mb-3"
              />
              <h1 className="text-center font-bold text-xl mb-1">
                Manage Will
              </h1>
              <p className="text-center text-gray-600">
                Using the vaults patented signing process to sign our will
              </p>
            </div>
            {/* card*/}
            <div
              className="
      md:w-56
      w-full
      h-72
      md:h-56
      shadow-md
      bg-white
      flex
      items-center
      flex-col
      p-4
    "
            >
              <img
                src="images/Store Your Will.svg"
                alt={1}
                width={70}
                height={70}
                className="mt-3 mb-3"
              />
              <h1 className="text-center font-bold text-xl mb-1">
                Store Your Will
              </h1>
              <p className="text-center text-gray-600">
                24/7 access to your secure digital vault with any other
                important documents
              </p>
            </div>
            {/* card*/}
            <div
              className="
      md:w-56
      w-full
      h-72
      md:h-56
      shadow-md
      bg-white
      flex
      items-center
      flex-col
      p-4
    "
            >
              <img
                src="images/Time Capsule.svg"
                alt={1}
                width={70}
                height={70}
                className="mt-3 mb-3"
              />
              <h1 className="text-center font-bold text-xl mb-1">
                Time Capsule
              </h1>
              <p className="text-center text-gray-600">
                Create special videos that can go to a loved ones after your
                passing or on a special date
              </p>
            </div>
          </div>
        </div>
        {/* The Vault Section*/}
        <div
          style={{
            backgroundImage: "url(images/The-Vault-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex items-center"
          id="the-vault"
        >
          <div
            className="
    container
    flex flex-col
    md:flex-row
    items-center
    p-10
    space-x-3
    mr-auto
    ml-auto
  "
          >
            <img src="images/The-Vault.png" width="600px" />
            <div className="w-full">
              <div className="w-full sm:w-1/2 mb-8 mt-10">
                <h1 className="text-3xl text-white mb-3">The Vault</h1>
                <p className="text-gray-300">
                  The Vault is a secure, cost-effective and watertight way to
                  ensure your legal will always up to date.
                </p>
              </div>
              <div className="flex space-x-6">
                {/* left side */}
                <div>
                  {/* feature */}
                  <div className="pr-7">
                    <div className="flex space-x-5">
                      <div>
                        <img src="images/Will Creation.svg" />
                      </div>
                      <div>
                        <h1 className="text-md font-bold text-white mb-2">
                          Will Creation
                        </h1>
                        <p className="text-gray-400 mb-10">
                          Create your own legal will quickly and easily, when it
                          suits you.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* feature */}
                  <div className="pr-7">
                    <div className="flex space-x-5">
                      <div>
                        <img src="images/Secure Will Storage.svg" />
                      </div>
                      <div>
                        <h1 className="text-md font-bold text-white mb-2">
                          Secure Will Storage
                        </h1>
                        <p className="text-gray-400 mb-10">
                          First Legally binding digital Wills
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* feature */}
                  <div className="pr-7">
                    <div className="flex space-x-5">
                      <div>
                        <img src="images/Flexible Partnership Tool.svg" />
                      </div>
                      <div>
                        <h1 className="text-md font-bold text-white mb-2">
                          Flexible Partnership Tool
                        </h1>
                        <p className="text-gray-400 mb-10">
                          Will stand up in Court and more compliant than the out
                          of date paper method
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* right side */}
                <div>
                  {/* feature */}
                  <div className="pr-7">
                    <div className="flex space-x-5">
                      <div>
                        <img src="images/Will Changes.svg" />
                      </div>
                      <div>
                        <h1 className="text-md font-bold text-white mb-2">
                          Will Changes
                        </h1>
                        <p className="text-gray-400 mb-10">
                          Store you will and special messages on our secure
                          Online digital vault
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* feature */}
                  <div className="pr-7">
                    <div className="flex space-x-5">
                      <div>
                        <img src="images/Next-of-Kin Notification.svg" />
                      </div>
                      <div>
                        <h1 className="text-md font-bold text-white mb-2">
                          Next-of-Kin Notification
                        </h1>
                        <p className="text-gray-400 mb-10">
                          24-hour support; Skype, phone and email support from
                          our team
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* feature */}
                  <div className="pr-7">
                    <div className="flex space-x-5">
                      <div>
                        <img src="images/Industry Versatility.svg" />
                      </div>
                      <div>
                        <h1 className="text-md font-bold text-white mb-2">
                          Industry Versatility
                        </h1>
                        <p className="text-gray-400 mb-10">
                          Partnered with one of New Zealand's leading Law firms
                          and accountants
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Why Section */}
        <div
          className="
  container
  w-full
  flex
  md:flex-row
  md:space-y-0
  space-y-8
  flex-col
  justify-center
  md:space-x-28
  items-center
  mr-auto
  ml-auto
  mt-10
  mb-32
"
          id="why-a-digital-will"
        >
          <div>
            <img src="images/Why.jpg" />
          </div>
          <div className="md:w-2/5 w-4/5">
            <h1 className="text-4xl font-bold mb-3 text-gray-900">
              Why a Digital Will?
            </h1>
            <p className="text-gray-600 mb-3">
              Administering an estate where there is no Will is likely to be
              very expensive, causing extra stress and financial worries at a
              difficult time. Your estate will be dealt with in accordance with
              the law under the Administration Act 1969 and other applicable
              legislation. If you don’t have a Will, this can be quite complex
              and if you have children, your spouse or partner will not
              automatically inherit all your assets. A full description is
              below. But if you die without a Will you lose power to have your
              say, and instead the law decides for you. This means that loved
              ones could miss out on their inheritance, and also possibly have
              to undertake a court application to appoint who takes care of your
              estate. In some situations the distribution is clear, however
              often the position is a little more complex and can take up to six
              months and over $50,000 to sort: If your spouse/partner survives
              and you have had children – the spouse/partner receives all
              personal chattels, $155,000 and 1/3 of the remainder. The children
              receive the remaining 2/3 (in some cases the sale of a family home
              may be required to effect a necessary division of assets). If your
              spouse/partner and parents are living but no children – your
              spouse receives all personal chattels, $155,000 and 2/3 of the
              remainder and your parents receive the remaining 1/3. If there is
              no spouse/partner, children, or parents surviving – everything
              goes to other blood relatives such as grandparents, siblings,
              aunts or uncles or by default to the government.
            </p>
            {/* <a class="underline text-yellow-600" href="#">view more</a */}
          </div>
        </div>
        {/* The Vault Section*/}
        <div
          style={{
            background: "#000",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex items-center"
          id="the-vault"
        >
          <div
            className="
    container
    flex flex-col
    md:flex-row
    items-center
    p-10
    space-x-3
    mr-auto
    ml-auto
  "
          >
            <div className="w-full">
              <div className="w-full sm:w-1/2 mb-8 mt-10">
                <h1 className="text-3xl text-white mb-3">Time Capsule</h1>
                <p className="text-gray-300" />
              </div>
              <div className="flex space-x-6">
                {/* left side */}
                <div>
                  {/* feature */}
                  <div className="pr-7">
                    <div className="flex space-x-5">
                      <div>
                        <img src="images/Will Creation.svg" />
                      </div>
                      <div>
                        <h1 className="text-md font-bold text-white mb-2">
                          Time Capsule Creation
                        </h1>
                        <p className="text-gray-400 mb-10">
                          Create your own private video for special people.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* feature */}
                  <div className="pr-7">
                    <div className="flex space-x-5">
                      <div>
                        <img src="images/Secure Will Storage.svg" />
                      </div>
                      <div>
                        <h1 className="text-md font-bold text-white mb-2">
                          Secure Time Capsule Storage
                        </h1>
                        <p className="text-gray-400 mb-10">
                          The Vault is exactly that: a vault. We store your will
                          using 8-bit encryption to ensure your critical
                          personal information and legal will is locked up
                          tight.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* feature */}
                  <div className="pr-7">
                    <div className="flex space-x-5">
                      <div>
                        <img src="images/Flexible Partnership Tool.svg" />
                      </div>
                      <div>
                        <h1 className="text-md font-bold text-white mb-2">
                          Flexible Partnership Tool
                        </h1>
                        <p className="text-gray-400 mb-10">
                          The Vault is a partnership product: we work alongside
                          existing companies to provide additional revenue
                          streams, with ultimate benefit to their customers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* right side */}
                <div>
                  {/* feature */}
                  <div className="pr-7">
                    <div className="flex space-x-5">
                      <div>
                        <img src="images/Will Changes.svg" />
                      </div>
                      <div>
                        <h1 className="text-md font-bold text-white mb-2">
                          Time Capsules
                        </h1>
                        <p className="text-gray-400 mb-10">
                          Store you will and special messages on our secure
                          online digital vault
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* feature */}
                  <div className="pr-7">
                    <div className="flex space-x-5">
                      <div>
                        <img src="images/Next-of-Kin Notification.svg" />
                      </div>
                      <div>
                        <h1 className="text-md font-bold text-white mb-2">
                          Next-of-Kin Notification
                        </h1>
                        <p className="text-gray-400 mb-10">
                          24-hour support; Skype, phone and email support from
                          our team
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* feature */}
                  <div className="pr-7">
                    <div className="flex space-x-5">
                      <div>
                        <img src="images/Industry Versatility.svg" />
                      </div>
                      <div>
                        <h1 className="text-md font-bold text-white mb-2">
                          Industry Versatility
                        </h1>
                        <p className="text-gray-400 mb-10">
                          The Vault works with partners across multiple sectors,
                          including insurance, automotive, and banking and
                          finance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src="images/timecap.jpg" width="700px" />
          </div>
        </div>
        {/* Pricing page section */}
        <div className="container mx-auto" id="pricing">
          <div className="px-3 sm:px-0 text-center w-full mx-auto mb-11">
            <br />
            <br />
            <br />
            <h1 className="text-4xl font-bold mb-3">Pricing</h1>
            <p className="text-gray-700">
              <i className="far fa-check-circle" style={{ color: "#fbb656" }} />
              Safe and secure cancel with one month's notice &nbsp;
              <i className="far fa-check-circle" style={{ color: "#fbb656" }} />
              All pricing plans cover your life essentials, with room to grow
              &nbsp;
              <i className="far fa-check-circle" style={{ color: "#fbb656" }} />
              24/7 online support &nbsp;
            </p>
          </div>
          {/* Pricing Cards */}
          <div className="flex justify-evenly flex-col md:flex-row">
            {/* Card */}
            <div className="md:w-80 w-full shadow-xl p-6 rounded-lg">
              <div className="text-center">
                <p className="font-bold mb-2">Starter</p>
                <h1 className="text-4xl font-bold mb-2">$5.95</h1>
                <p className="text-gray-700 mb-2">
                  NZD per Month excluding GST
                </p>
                <p className="font-bold">
                  One off fee of $149.95 excluding GST
                </p>
              </div>
              <div className>
                <div className="flex flex-col space-y-5">
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">Create an online will</p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">
                      An estate admin package worth 5k
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">Cloud based storage</p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">
                      Ability to Edit at any time with all the copy's saved and
                      time stampled
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">24-hour support</p>
                  </div>
                  <hr />
                </div>
                <div className="flex flex-col space-y-5">
                  <div className="flex space-x-2">
                    <div>
                      <i className="fas fa-times" style={{ color: "gray" }} />
                    </div>
                    <p className="text-gray-700">
                      Document storage e.g. trust documents, Life policy's
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i className="fas fa-times" style={{ color: "gray" }} />
                    </div>
                    <p className="text-gray-700">
                      Ability to create 1 min time capsules
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i className="fas fa-times" style={{ color: "gray" }} />
                    </div>
                    <p className="text-gray-700">
                      Ability to create videos up to 10min long with no limit on
                      how many.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i className="fas fa-times" style={{ color: "gray" }} />
                    </div>
                    <p className="text-gray-700">
                      Assess to functions so you can send messages to people at
                      a specific date after you are gone.
                    </p>
                  </div>
                  <div className="gap" />
                  <br />
                  <a
                    href="https://beta-vault.web.app"
                    className="
            bg-gradient-to-r
            from-yellow-500
            to-yellow-400
            text-white
            w-3/4
            mx-auto
            px-8
            py-3
            rounded-md
            button-btm
          "
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="md:w-80 w-full shadow-xl p-6 rounded-lg">
              <div className="text-center">
                <p className="font-bold mb-2">Standard</p>
                <h1 className="text-4xl font-bold mb-2">$7.95</h1>
                <p className="text-gray-700 mb-2">
                  NZD per Month excluding GST
                </p>
                <p className="font-bold">
                  One off fee of $149.95 excluding GST
                </p>
              </div>
              <div className>
                <div className="flex flex-col space-y-5">
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">Create an online will</p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">
                      An estate admin package worth 5k
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">Cloud based storage</p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">
                      Ability to Edit at any time with all the copy's saved and
                      time stampled
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">24-hour support</p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">
                      Document storage e.g. trust documents, Life policy's
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">
                      Ability to create 1 min time capsules
                    </p>
                  </div>
                  <hr />
                </div>
                <div className="flex flex-col space-y-5">
                  <div className="flex space-x-2">
                    <div>
                      <i className="fas fa-times" style={{ color: "gray" }} />
                    </div>
                    <p className="text-gray-700">
                      Ability to create videos up to 10min long with no limit on
                      how many.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i className="fas fa-times" style={{ color: "gray" }} />
                    </div>
                    <p className="text-gray-700">
                      Assess to functions so you can send messages to people at
                      a specific date after you are gone.
                    </p>
                  </div>
                  <div className="gap" />
                  <a
                    href="https://beta-vault.web.app"
                    className="
            bg-gradient-to-r
            from-yellow-500
            to-yellow-400
            text-white
            w-3/4
            mx-auto
            px-8
            py-3
            rounded-md
            button-btm
          "
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="md:w-80 w-full shadow-xl p-6 rounded-lg">
              <div className="text-center">
                <p className="font-bold mb-2">Premium</p>
                <h1 className="text-4xl font-bold mb-2">$9.95</h1>
                <p className="text-gray-700 mb-2">
                  NZD per Month excluding GST
                </p>
                <p className="font-bold">
                  One off fee of $149.95 excluding GST
                </p>
              </div>
              <div className>
                <div className="flex flex-col space-y-5">
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">Create an online will</p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">
                      An estate admin package worth 5k
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">Cloud based storage</p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">
                      Ability to Edit at any time with all the copy's saved and
                      time stampled
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">24-hour support</p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">
                      Document storage e.g. trust documents, Life policy's
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">
                      Ability to create 1 min time capsules
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">
                      Ability to create videos up to 10min long with no limit on
                      how many.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <div>
                      <i
                        className="far fa-check-circle"
                        style={{ color: "#fbb656" }}
                      />
                    </div>
                    <p className="text-gray-700">
                      Assess to functions so you can send messages to people at
                      a specific date after you are gone.
                    </p>
                  </div>
                  <div className="gap" />
                  <a
                    href="https://beta-vault.web.app"
                    className="
            bg-gradient-to-r
            from-yellow-500
            to-yellow-400
            text-white
            w-3/4
            mx-auto
            px-8
            py-3
            rounded-md
            button-btm
          "
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Section */}
        <div
          style={{
            backgroundImage: "url(images/form_bg.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: 50,
          }}
          className="container mx-auto p-20 mt-10"
        >
          <div
            className="
    flex
    w-full
    flex-col
    md:flex-row
    space-y-7
    justify-between
    md:space-x-32
  "
          >
            <div className="md:w-1/2 w-full">
              <div className="mb-5">
                <h1 className="text-4xl text-white mb-3">Get in touch</h1>
                <p className="text-gray-400">
                  Questions or concerns? Contract us here.
                </p>
              </div>
              <form>
                <div className="flex w-full space-x-6 text-white">
                  <input
                    placeholder="Name"
                    type="text"
                    style={{
                      backgroundColor: "#152149",
                      border: "1px solid #152149",
                    }}
                    className="py-3 px-3 w-1/2"
                  />
                  <input
                    placeholder="Name"
                    type="text"
                    style={{
                      backgroundColor: "#152149",
                      border: "1px solid #152149",
                    }}
                    className="py-3 px-3 w-1/2"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  style={{
                    backgroundColor: "#152149",
                    border: "1px solid #152149",
                  }}
                  className="py-3 px-3 w-full mt-6 h-52 text-white"
                  defaultValue={""}
                />
                <div className="text-center">
                  <input
                    className="
            bg-gradient-to-r
            from-yellow-500
            to-yellow-400
            text-white
            px-20
            mt-5
            cursor-pointer
            py-3
            rounded-md
          "
                    type="submit"
                    defaultValue="submit"
                  />
                </div>
              </form>
            </div>
            <div className="md:w-1/2 w-full flex flex-col space-y-10">
              <div>
                <h1 className="text-white font-bold text-xl mb-3">Address</h1>
                <p className="text-gray-400">AUCKLAND CBD, 1010</p>
              </div>
              <div>
                <h1 className="text-white font-bold text-xl mb-3">Email</h1>
                <p className="text-gray-400">info@thevault.co.nz</p>
              </div>
              <div>
                <h1 className="text-white font-bold text-xl mb-3">Phone</h1>
                <p className="text-gray-400">0508 72 22 22</p>
              </div>
              <div>
                <h1 className="text-white font-bold text-xl mb-3">Social</h1>
                <div className="flex space-x-4">
                  <a href="#">
                    <img
                      src="images/facebook.svg"
                      alt="facebook icon"
                      width={25}
                    />
                  </a>
                  <a href="#">
                    <img
                      src="images/linkedin.svg"
                      alt="linkedin icon"
                      width={25}
                    />
                  </a>
                  <a href="#">
                    <img
                      src="images/twitter.svg"
                      alt="twitter icon"
                      width={25}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center my-10 text-gray-500">
          © Sanem Investments Ltd, 2021. All rights reserved | Privacy Statement
        </p>
      </>
    </div>
  );
}



