"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LuckeyDogsMenu() {
  const menuItems = [
    {
      name: "Hamburger",
      sizes: [
        { size: "Single Meat", price: "$7.50" },
        { size: "Double Meat", price: "$9.50" },
      ],
    },
    {
      name: "Cheeseburger",
      sizes: [
        { size: "Single Meat", price: "$8.50" },
        { size: "Double Meat", price: "$10.50" },
      ],
    },
    { name: "Hot Dog", price: "$3.50" },
    { name: "Hot Dog with chili & cheese", price: "$4.50" },
    { name: "Corndog (hand dipped)", price: "$3.50" },
    { name: "Upgrade to 2-regular corndogs", price: "$6.00" },
    {
      name: "Shiska Dog",
      price: "$6.00",
      description: "(all beef weiner & cheese on a stick battered and fried like a corndog)",
    },
    { name: "Frito Pie w/homemade chili & cheese", price: "$9.25" },
    { name: "Patty Melt", price: "$9.00" },
    { name: "B L T", price: "$8.50" },
    { name: "Reuben Sandwich", price: "$9.50" },
    { name: "Crispy or Grilled Chicken Bacon Ranch Sandwich", price: "$9.00" },
    { name: "Grilled Cheese Sandwich", price: "$4.75" },
    { name: "Grilled Cheese w/Bacon", price: "$7.25" },
    { name: "Crispy or Grilled Chicken Bacon Ranch Salad", price: "$9.00" },
    { name: "Nachos...cheese and peppers only", price: "$7.00" },
    { name: "Nachos Supreme", price: "$9.50" },
    { name: "Bowl of Chili", price: "$8.50" },
    {
      name: "Burrito Supreme",
      sizes: [
        { size: "small(1)", price: "$7.50" },
        { size: "regular(2)", price: "$9.50" },
      ],
    },
    { name: "CFS Sandwhich", price: "$7.75" },
    { name: "Tacos (3 Crispy)", price: "$8.50" },
    { name: "Chicken Strip Meal", price: "$9.75", description: "3 strips, Fries gravy, & toast" },
  ]

  const specialtyBurgers = [
    {
      name: "Smoky Ched BBQ Bacon Burger",
      sizes: [
        { size: "Single Meat", price: "$11.00" },
        { size: "Double Meat", price: "$13.75" },
      ],
    },
    {
      name: "Mr. Swiss (Mushroom)",
      sizes: [
        { size: "Single Meat", price: "$11.00" },
        { size: "Double Meat", price: "$13.75" },
      ],
    },
    {
      name: "SteakHouse Burger",
      sizes: [
        { size: "Single Meat", price: "$11.00" },
        { size: "Double Meat", price: "$13.75" },
      ],
    },
    {
      name: "Spicy Southwest Burger",
      sizes: [
        { size: "Single Meat", price: "$11.00" },
        { size: "Double Meat", price: "$13.75" },
      ],
    },
  ]

  const specialtyDogs = [
    { name: "Chicago ish Dog", price: "$5.50" },
    { name: "Pickled Pup Dog", price: "$5.50" },
    { name: "All American Dog", price: "$5.50" },
  ]

  const sides = [
    { name: "French Fries (fresh hand cut)", price: "$3.75" },
    { name: "Cheesy Bacon Ranch Fries", price: "$7.50" },
    { name: "Tater Kegs (huge loaded tater tot)", price: "$6.50" },
    { name: "Onion Rings", price: "$4.75" },
    { name: "Fried Mushrooms", price: "$6.50" },
    { name: "Cheese Dog on a stick - Velvetta, Mozzarella or Colby", price: "$4.75" },
  ]

  const desserts = [
    { name: "Deep Fried OREOS", price: "$5.00" },
    { name: "Shakes / Malts 20oz", price: "$5.50" },
    { name: "Sundae", price: "$4.25" },
  ]

  const kidsAndPups = [
    {
      name: "Kids Meal",
      price: "$7.50",
      description: "Choose one: Grilled Cheese, corndog, Chicken Tenders, Hot Dog, Cheese Nachos",
    },
    { name: "Pupper Patty (for the pup!)", price: "$3.50" },
    { name: "Chimpkin Patty (for the pup!)", price: "$4.00" },
  ]

  const additions = [
    { name: "Chili", price: "$2.00" },
    { name: "Cheese", price: "$1.50" },
    { name: "Peppers", price: "$0.75" },
    { name: "Bacon", price: "$2.50" },
    { name: "Garlic Butter Mushrooms", price: "$2.50" },
  ]

  const drinks = [
    "Sweet/Unsweet Tea",
    "Fresh Squeezed Lemonade",
    "Coke Dr Pepper Diet Coke",
    "Root Beer Sprite (NoRefills)",
  ]

  const foodImages = [
    { src: "/images/burger-fries-1.jpg", alt: "Delicious burger with fresh cut fries" },
    { src: "/images/hot-dogs.jpg", alt: "Hot dogs with all the fixings" },
    { src: "/images/burger-onion-rings.jpg", alt: "Burger with crispy onion rings" },
    { src: "/images/bacon-burger.jpg", alt: "Loaded bacon cheeseburger" },
    { src: "/images/patty-melt.jpg", alt: "Classic patty melt with fries" },
    { src: "/images/multiple-burgers.jpg", alt: "Multiple burgers and fries" },
  ]

  const handlePrint = () => {
    window.print()
  }

  const Section = ({
    title,
    items,
  }: {
    title: string
    items: {
      name: string
      price?: string
      description?: string
      sizes?: { size: string; price: string }[]
    }[]
  }) => (
    <div className="mt-6">
      <h3 className="font-bold text-lg text-red-600 mb-3 uppercase tracking-wide">{title}</h3>
      {items.map((item, index) => (
        <div key={index} className="flex justify-between items-start border-b border-gray-100 pb-2 mb-2">
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800">{item.name}</h4>
            {item.description && <p className="text-sm text-gray-600 italic">{item.description}</p>}
            {item.sizes && (
              <div className="flex flex-col mt-1">
                {item.sizes.map((size, sizeIndex) => (
                  <div key={sizeIndex} className="flex justify-between text-sm text-gray-600 w-full">
                    <span>{size.size}</span>
                    <span className="font-bold text-gray-800">{size.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {item.price && <span className="font-bold text-gray-800 ml-4">{item.price}</span>}
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <img
            src="/images/luckey-dogs-logo.jpg"
            alt="Luckey Dogs Food Shakk Logo"
            className="w-full max-w-md mx-auto h-auto rounded-lg mb-4"
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main Menu - takes more space */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <Section title="Burgers & Sandwiches" items={menuItems} />
                <Section title="For The Kids & Pups" items={kidsAndPups} />
                <Section title="Specialty Burgers" items={specialtyBurgers} />
                <Section title="Specialty Dogs" items={specialtyDogs} />
                <Section title="Delicious Sides" items={sides} />
                <Section title="Desserts" items={desserts} />
                <Section title="Additions" items={additions} />
                <div className="mt-6">
                  <h3 className="font-bold text-lg text-red-600 mb-3 uppercase tracking-wide">DRINKS $3.25</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {drinks.map((drink, index) => (
                      <span key={index} className="text-gray-800">
                        {drink}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Panel & Image Gallery */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-red-50">
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <Badge variant="destructive" className="text-sm">
                    LOCATED AT:
                  </Badge>
                  <p className="font-bold text-red-600">707 FM 2457</p>
                  <p className="font-bold text-red-600">LIVINGSTON, TX 77351</p>

                  <div className="mt-4">
                    <Badge variant="destructive" className="text-sm">
                      PHONE IN ORDERS TO:
                    </Badge>
                    <p className="font-bold text-red-600">936-967-8808</p>
                  </div>

                  <div className="mt-4 space-y-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      DRIVE THRU NOW AVAILABLE
                    </Badge>
                    <Badge variant="outline" className="bg-blue-100 text-blue-800">
                      DOOR DASH DELIVERY AVAILABLE
                    </Badge>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700">WE ACCEPT CASH, CREDIT CARDS OR</p>
                    <p className="text-sm font-semibold text-gray-700">CASH APP ($LUCKEY DOGS)</p>
                  </div>

                  <div className="mt-4">
                    <Badge variant="destructive" className="text-sm">
                      HOURS OF OPERATION
                    </Badge>
                    <p className="font-bold text-red-600 text-sm">Tue-Sat: 11AM-6PM</p>
                    <p className="font-bold text-red-600 text-sm">CLOSED SUN & MON</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Now Button */}
            <div className="text-center">
              <a
                href="https://order.online/store/luckey-dogs-food-shack-livingston-23546334/?delivery=true&hideModal=true&rwg_token=ACgRB3es-Vqa2lCcqrppYIj3ur0Wf4nlnqZgbygIdTOrAugpc4S-gkZe47aj_FfoRtco3ZIqIIoT5n_48AN1c77k_i6vYbcSsg==&utm_source=gfo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 text-lg w-full justify-center"
              >
                🛒 ORDER NOW ONLINE
              </a>
              <p className="text-sm text-gray-600 mt-2">Online ordering available 11:00 AM - 5:40 PM</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {foodImages.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Print Button at Bottom */}
        <div className="text-center mt-8">
          <button
            onClick={handlePrint}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded shadow-lg transition-colors duration-200 print:hidden"
          >
            🖨️ Print Menu
          </button>
        </div>
      </div>
    </div>
  )
}
