const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Design & UI/UX",
      description:
        "Creating beautiful, user-centered designs that provide exceptional user experiences and modern interfaces.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 57 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.6169 52.6834L47.5002 44.6167V13.5834L43.6669 6.53338C43.3841 5.99587 42.9598 5.54584 42.4399 5.2319C41.92 4.91795 41.3242 4.75201 40.7169 4.75201C40.1095 4.75201 39.5137 4.91795 38.9938 5.2319C38.4739 5.54584 38.0496 5.99587 37.7669 6.53338L34.1669 13.6V31.35L3.68352 1.01671C3.45041 0.781659 3.15257 0.621358 2.82799 0.556242C2.50341 0.491126 2.1668 0.524145 1.86106 0.65109C1.55532 0.778034 1.29431 0.993153 1.1113 1.26902C0.928302 1.54489 0.831599 1.869 0.833524 2.20004V15.6667H4.45019V18.3334H0.833524V29H4.45019V31.6667H0.833524V42.75H4.45019V45.4167H0.833524V53.8667C0.833524 54.3087 1.00912 54.7327 1.32168 55.0452C1.63424 55.3578 2.05816 55.5334 2.50019 55.5334H54.4335C54.7646 55.5353 55.0887 55.4386 55.3645 55.2556C55.6404 55.0726 55.8555 54.8116 55.9825 54.5058C56.1094 54.2001 56.1424 53.8635 56.0773 53.5389C56.0122 53.2143 55.8519 52.9165 55.6169 52.6834ZM14.1669 42.3334V27.2334L29.2835 42.3334H14.1669ZM44.1669 45.85H37.5002V41.8H44.1669V45.85ZM44.1669 39.1834H37.5002V14.4167L40.7335 8.13338L44.1669 14.4334V39.1834Z"
            fill="currentColor"
          />
        </svg>
      ),
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Frontend Development",
      description:
        "Building responsive, fast, and interactive web applications using modern technologies like React and TypeScript.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 57 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.0502 0.654984C35.5247 0.787748 35.9684 1.01273 36.3559 1.31707C36.7435 1.62141 37.0672 1.99913 37.3087 2.42866C37.5501 2.85819 37.7046 3.33109 37.7632 3.82034C37.8218 4.30958 37.7834 4.80558 37.6502 5.27998L26.5727 44.7475C26.3042 45.7052 25.6662 46.5171 24.799 47.0045C23.9319 47.4918 22.9067 47.6148 21.9489 47.3462C20.9912 47.0777 20.1793 46.4397 19.692 45.5726C19.2046 44.7055 19.0817 43.6802 19.3502 42.7225L30.4277 3.24998C30.5607 2.77569 30.7859 2.33225 31.0903 1.945C31.3948 1.55775 31.7726 1.23428 32.2021 0.993061C32.6316 0.751845 33.1044 0.597613 33.5935 0.539176C34.0826 0.480739 34.5785 0.519242 35.0527 0.652484L35.0502 0.654984ZM17.4002 10.7425C18.1024 11.4456 18.4969 12.3987 18.4969 13.3925C18.4969 14.3862 18.1024 15.3394 17.4002 16.0425L9.4502 24L17.4052 31.955C18.1084 32.6585 18.5032 33.6125 18.503 34.6071C18.5028 35.6018 18.1074 36.5556 17.4039 37.2587C16.7005 37.9619 15.7465 38.3568 14.7518 38.3565C13.7572 38.3563 12.8034 37.961 12.1002 37.2575L1.4927 26.65C0.790444 25.9469 0.395996 24.9937 0.395996 24C0.395996 23.0062 0.790444 22.0531 1.4927 21.35L12.0977 10.7425C12.4459 10.394 12.8595 10.1176 13.3146 9.92897C13.7697 9.74036 14.2575 9.64329 14.7502 9.64329C15.2429 9.64329 15.7307 9.74036 16.1858 9.92897C16.6409 10.1176 17.0519 10.394 17.4002 10.7425ZM39.6002 16.0425C39.2318 15.6992 38.9362 15.2852 38.7313 14.8252C38.5263 14.3652 38.4161 13.8686 38.4072 13.3651C38.3984 12.8616 38.491 12.3614 38.6796 11.8945C38.8682 11.4276 39.1489 11.0034 39.505 10.6473C39.8611 10.2912 40.2853 10.0105 40.7522 9.82187C41.2191 9.63327 41.7193 9.54064 42.2228 9.54953C42.7263 9.55841 43.2229 9.66862 43.6829 9.87358C44.1429 10.0785 44.5569 10.3741 44.9002 10.7425L55.5077 21.3475C56.2107 22.0507 56.6056 23.0044 56.6056 23.9987C56.6056 24.9931 56.2107 25.9468 55.5077 26.65L44.9027 37.2575C44.5545 37.6058 44.1412 37.8822 43.6862 38.0707C43.2312 38.2593 42.7436 38.3564 42.2511 38.3565C41.7586 38.3567 41.2709 38.2598 40.8158 38.0714C40.3608 37.8831 39.9473 37.6069 39.5989 37.2587C39.2506 36.9106 38.9743 36.4972 38.7857 36.0422C38.5971 35.5873 38.5 35.0996 38.4999 34.6071C38.4998 34.1146 38.5967 33.6269 38.785 33.1719C38.9734 32.7168 39.2495 32.3033 39.5977 31.955L47.5527 24L39.6002 16.0425Z"
            fill="currentColor"
          />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      id: 3,
      title: "Technical Documentation",
      description:
        "Writing clear, comprehensive documentation and guides that help teams understand and maintain code effectively.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 43 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.16586 53.9196H34.8337C40.0323 53.9196 42.6187 51.2828 42.6187 46.0596V23.2585H24.4376C21.2234 23.2585 19.7169 21.7264 19.7169 18.5121V0.0803223H8.16586C2.993 0.0803223 0.380859 2.74175 0.380859 7.96604V46.0596C0.380859 51.3075 2.993 53.9196 8.16586 53.9196ZM24.5137 19.8182H42.3423C42.1666 18.7885 41.438 17.7835 40.2584 16.5535L26.3962 2.46639C25.2412 1.26104 24.1869 0.532465 23.1316 0.355679V18.4628C23.1316 19.366 23.6094 19.8182 24.5137 19.8182Z"
            fill="currentColor"
          />
        </svg>
      ),
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 "
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
              What I Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-800 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-200 bg-clip-text text-transparent">
              My
            </span>{" "}
            <span className="text-zinc-700 dark:text-zinc-300">Services</span>
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            I provide comprehensive web development services to bring your
            digital vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-zinc-200/50 dark:border-zinc-700/50"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-100/20 dark:to-zinc-700/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  <div className="w-full h-full flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-4 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Decorative element */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-zinc-300 to-transparent dark:from-zinc-600 group-hover:w-16 transition-all duration-300"></div>
              </div>

              {/* Animated border */}
              <div
                className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-zinc-300 dark:to-zinc-600"></div>
            <span className="text-sm font-medium">Ready to collaborate</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-zinc-300 dark:to-zinc-600"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
