// This is the Link API
import Link from 'next/link';
import Header from '../comps/Header';
import Layout from '../comps/MyLayout';
import withLayout from '../comps/MyLayout';
import fetch from 'isomorphic-unfetch';

//example styling 

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
}

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map(post => (
          <li key={post.id}>
            <Link href="/p/[id]" as={`/p/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: pink;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
}


//example of using fetch to get api 
// const Index = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link href="/p/[id]" as={`/p/${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

// export default Index;


//routing using dynamic ids

//In the <Link> element, the href prop is now 
// the path of the page in the pages folder and as 
// is the URL to show in URL bar of the browser.

// const PostLink = props => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );

// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" />
//         <PostLink id="learn-nextjs" />
//         <PostLink id="deploy-nextjs" />
//       </ul>
//     </Layout>
//   );
// }


//routing using dynamic query param

// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink title="Hello Next.js" />
//         <PostLink title="Learn Next.js is awesome" />
//         <PostLink title="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   );
// }

//example two using layout 

// const Page = () => <p>Hello Next.js</p>;

// export default withLayout(Page);

//example one using layout
// export default function Index() {
//   return (
//     <Layout>
//       <p>Hello Next.js</p>
//     </Layout>
//   );
// }

// export default function Index() {
//   return (
//     <div>
//       <Header />
//       <p>Hello Next.js</p>
//     </div>
//   );
// }

// const Index = () => (
//   <div>
//     <Link href="/about">
//     <a title="About Page">About Page</a>    
//     </Link>
//     <p>Hello Next.js</p>
//   </div>
// );

// export default Index;

//replace a link on the stack

// function Home() {
//   return (
//     <div>
//       Click{' '}
//       <Link href="/about" replace>
//         <a>here</a>
//       </Link>{' '}
//       to read more
//     </div>
//   )
// }

//export default Home

// import Link from 'next/link'

//push a new link on the stack 

// function Home() {
//   return (
//     <div>
//       Click{' '}
//       <Link href={{ pathname: '/about', query: { name: 'Zeit' } }}>
//         <a>here</a>
//       </Link>{' '}
//       to read more
//     </div>
//   )
// }

// export default Home


// images support onClick

// function Home() {
//   return (
//     <div>
//       Click{' '}
//       <Link href="/about">
//         <img src="/static/image.png" alt="image" />
//       </Link>
//     </div>
//   )
// }

// export default Home