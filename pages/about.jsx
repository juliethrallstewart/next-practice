import Header from '../comps/Header';

import Layout from '../comps/MyLayout';

//example two layout

// import withLayout from '../comps/MyLayout';

// const Page = () => <p>This is the about page</p>;

// export default withLayout(Page);


//example one layout
export default function About() {
  return (
    <Layout>
      <p>This is the about page</p>
    </Layout>
  );
}

// export default function About() {
//     return (
//       <div>
//         <Header />
//         <p>This is the about page</p>
//       </div>
//     );
//   }