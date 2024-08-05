import Layout from "@/components/layouts/UserPanelLayout";


const page = async () => {

  return (
    <Layout>
<h1>hello</h1>

      {/* <main>
        <section className={styles.boxes}>
          <Box title="مجموع تیکت ها " value={allTickets.length} />
          <Box title="مجموع کامنت ها " value={comments.length} />
          <Box title="مجموع سفارشات" value="2" />
          <Box title="مجموع علاقه مندی ها" value={wishes.length} />
        </section>
        <section className={styles.contents}>
          <Tickets tickets={JSON.parse(JSON.stringify(tickets))} />
          <Orders />
        </section>
      </main> */}
    </Layout>
  );
};

export default page;
