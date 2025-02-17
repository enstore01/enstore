const CollaborateSection = () => {
  return (
    <section className="bg-light py-10 lg:py-20">
      <div className="md:mx-10 p-4 lg:flex justify-center gap-20">
        <div className="flex flex-col uppercase py-4 lg:w-[47%] lg:text-right">
          <p className="md:text-[18px]">Collaborate</p>
          <div className="text-[38px] lg:text-[60px] font-bold bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent leading-tight tracking-tight">
            <h2>Want to work </h2>
            <h2 className="">with us? Leave us</h2>
            <h2>a message!</h2>
          </div>
        </div>
        <div className="mt-10 lg:w-[47%]">
          <form action="">
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full border p-4 outline-none"
              required
            ></textarea>
            <div className="lg:flex gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border p-4 mt-2 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border p-4 mt-2 outline-none"
                required
              />
            </div>
            <button className="w-full border p-4 mt-2 lg:mt-4 hover:bg-primary bg-brand text-white uppercase">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
