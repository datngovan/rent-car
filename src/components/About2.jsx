import Icon from "../ui/Icon";
import Title from "../ui/Title";
function About2() {
  return (
    <>
      <div className="grid grid-rows-1 justify-items-center lg:justify-items-start lg:grid-cols-2 items-center lg:bg-[url('bg-icon2.png')] bg-no-repeat bg-left-top">
        <div className="justify-self-start order-last lg:order-first lg:visible max-lg:hidden">
          <img src="/audi-car.png" />
        </div>
        <div className="grid grid-row-2 items-start">
          <div className="mb-14">
            <div className="flex pb-8 justify-center lg:justify-start">
              <Title content={"WHY CHOOSE US"} />
            </div>
            <p className="text-3xl font-medium">
              We offer the best experience <br /> with our rental deals
            </p>
          </div>
          <div className="grid grid-rows-4 ">
            <div className="flex items-center">
              <Icon size="small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-primary-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                  />
                </svg>
              </Icon>
              <div className="flex flex-col gap-2 p-6">
                <p className="text-xl font-medium">Best price guaranteed</p>
                <p className="text-based font-reglular text-grey">
                  Find a lower price? We’ll refund you 100% <br /> of the
                  difference.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Icon size="small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-primary-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </Icon>
              <div className="flex flex-col gap-2 p-6">
                <p className="text-xl font-medium">Experience driver</p>
                <p className="text-based font-reglular text-grey">
                  Don’t have driver? Don’t worry, we have many
                  <br />
                  experienced driver for you.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Icon size="small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-primary-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Icon>
              <div className="flex flex-col gap-2 p-6">
                <p className="text-xl font-medium">24 hours car delivery</p>
                <p className="text-based font-reglular text-grey">
                  Book your car anytime and we will deliver it
                  <br />
                  directly to you.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Icon size="small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-primary-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
              </Icon>
              <div className="flex flex-col gap-2 p-6">
                <p className="text-xl font-medium">24/7 technical support</p>
                <p className="text-based font-reglular text-grey">
                  Have a question? Contact Rentcars support
                  <br />
                  any time when you have problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About2;
