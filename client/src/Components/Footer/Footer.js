

export const Footer = () => {
    return (
      <>
  <div className="container my-5">
    <footer className="bg-light text-center">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Form */}
        <section className="">
          <form action="">
            {/*Grid row*/}
            <div className="row d-flex justify-content-center">
              {/*Grid column*/}
              <div className="col-auto">
                <p className="pt-2">
                  <strong>React project of Denislav Stokov</strong>
                </p>
              </div>
     
           
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </form>
        </section>
        {/* Section: Form */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © Denislav Stoykov
      
      </div>
      {/* Copyright */}
    </footer>
  </div>
  {/* End of .container */}
</>


    );
}