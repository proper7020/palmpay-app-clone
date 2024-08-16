

const Section = () => {
  return (
    <div className="w-full px-4 py-[7rem] position-[relative]">
      <div className="text-center">
        <h1 className="text-6xl font-semibold leading-tight md:text-7xl mt-6">
          {/* Finance That Fits Your Life */}
          SAY YES TO MORE
        </h1>
        <p className="mt-7 text-lg md:text-xl width-[59rem]">
          Seamlessly send and receive money, effortlessly pay your bills, shop
          anywhere with ease, and take full control of your finances - all in
          PalmPay
        </p>
        <div className="flex justify-center gap-3 py-12">
          <img
            className="h-12"
            src="https://www.palmpay.com/_next/static/media/googlePlayBlack.1a580bf8.png?w=640&q=100"
            alt="Google Play Store"
          />
          <img
            className="h-12"
            src="https://www.palmpay.com/_next/static/media/appStoreBlack.d61e6117.png?w=640&q=100"
            alt="Apple App Store"
          />
        </div>
      </div>
      <div className="flex justify-center my-7 items-center gap-2 text-sm md:text-base">
        <p>Licensed by CBN as a MMO</p>
        <img
          className="h-8"
          src="https://www.palmpay.com/_next/static/media/centralBankBlack.9c697f56.png?w=48&q=100"
          alt="Central Bank of Nigeria"
        />
        <p>Deposits Insured by</p>
        <img
          className="h-8"
          src="https://www.palmpay.com/_next/static/media/NDICBlack.ff0f2bf9.png?w=128&q=100"
          alt="NDIC"
        />
      </div>
      <div className="w-11/12 mx-auto my-8 position-[absolute] bg-red-300"  style={{ backgroundColor: "" }}>
        {/* <h3>Do more with your money</h3> */}
        <p>
          {/* More than just transferring money. You can do all kinds of cool stuff
          - pay you bills, make purchase, save and earn, all financial needs in
          one PalmPay app. */}
        </p>
        <img
          src="https://www.palmpay.com/_next/static/media/makeFinancial.16856f8a.png?w=3840&q=100"
          alt=""
        />
        <img
          className="w-full rounded-lg"
          src="https://www.palmpay.com/_next/static/media/payBills.0efc6845.png?w=3840&q=100"
          // alt="Make Financial"
        />
      </div>
      <div className="bg-black text-white py-8">
        <div className="w-11/12 mx-auto text-center">
          <div></div>

          <h1 className="text-6xl font-semibold leading-tight md:text-7xl">
            Earn as you spend with rewards
          </h1>
          <p className="mt-7 text-lg md:text-xl">
            With PalmPay, every expense becomes an opportunity to save. Unlock
            exclusive discounts and cashback rewards with every transaction you
            make. Embrace cashless payments and make every payment count with
            PalmPay.
          </p>
          <div className="mt-8">
            <img
              className="w-full rounded-lg"
              src="https://www.palmpay.com/_next/static/media/coupons.b7c11783.png?w=3840&q=100"
              alt="Coupons"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;

