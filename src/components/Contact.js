const Contact = () => {
  return (
    <div>
      <h1 className="font-bold p-4 m-4">Contact Us</h1>
      <form>
        <input
          className="mt-2 mx-2 border border-l-amber-300"
          type="text"
          placeholder="input-one"
        />
        <input
          className="mt-2 border border-l-amber-300"
          type="text"
          placeholder="input-two"
        />
        <button className=" m-2 bg bg-gray-400 rounded-lg text-white font-thin">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
