import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Table from "@/components/templates/cart/Table";

const page = () => {
  return (
    <>
      <Navbar />

      <main  className="md:gap-x-7 min-h-screen bg-backgroundColor mx-auto text-center lg:px-32 px-5 pt-48">
        <Table />
      </main>

      {/* <div class={styles.cart_empty} data-aos="fade-up">
                <TbShoppingCartX />
                <p>سبد خرید شما در حال حاضر خالی است. </p>
                <span>قبل از تسویه حساب، باید چند محصول را به سبد خرید خود اضافه کنید.</span>
                <span>در صفحه "فروشگاه"، محصولات جالب زیادی خواهید یافت.</span>
                <div>
                    <Link href='/category'>بازگشت به فروشگاه</Link>
                </div>
            </div> */}
      <Footer />
    </>
  );
};

export default page;
