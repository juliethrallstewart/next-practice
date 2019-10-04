import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

//layout example one

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;


//layout example two, importing <Header /> and passing in the <Page /> component
//that in this example is in pages/index.js
// const withLayout = Page => {
//     return () => (
//       <div style={layoutStyle}>
//         <Header />
//         <Page />
//       </div>
//     );
//   };
  
//   export default withLayout;