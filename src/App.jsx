import NavBar from "./components/NavBar";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Special,
  Subscribe,
  SuperQuality,
  Services
} from "./sections/index";

const App = () => {
  return (
    <main className="relative">
      <NavBar/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10"><Services/> </section>
      <section className="bg-pale-blue padding">
        <Special />{" "}
      </section>
      <section className="padding">
        <CustomerReviews />{" "}
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />{" "}
      </section>
      <section className="padding bg-black padding-x padding-t pb-8 text-white">
        <Footer />{" "}
      </section>
    </main>
  );
};

export default App;
